import React, { useRef, useState, useEffect, useCallback, Suspense } from 'react';
import { GraphNode, GraphData, ContextMenuState, ForceGraphInstance, NodeType } from './types';
import { skills, relationships, nodeDescriptions, nodeToExperience, nodeToProjects, nodeColors, projects, experiences, formatProjectName } from './data';
import SkillControls from './SkillControls';
import SkillContextMenu from './SkillContextMenu';
import SkillGraph from './SkillGraph';

const Skills: React.FC = () => {
  // Graph data state
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const [dimensions, setDimensions] = useState({ width: 0, height: 600 });
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<ForceGraphInstance | null>(null);
  
  // UI state
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [showAllLabels, setShowAllLabels] = useState(true);
  const [showProjectsExperiences, setShowProjectsExperiences] = useState(false);
  const [nodeSpacing, setNodeSpacing] = useState(125);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Context menu state
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    visible: false,
    node: null
  });

  // Create base graph data - this doesn't depend on toggle state
  const createBaseGraphData = useCallback(() => {
    const nodes: GraphNode[] = [];
    const links: GraphData['links'] = [];
    
    // Add category nodes with specific type colors
    nodes.push(
      { id: 'cat-management', name: 'Management Skills', type: 'categoryManagement', val: 15, color: nodeColors.categoryManagement, description: 'Core management skills including strategic planning, business development, and team leadership.' },
      { id: 'cat-proficiencies', name: 'Proficiencies', type: 'categoryProficiency', val: 15, color: nodeColors.categoryProficiency, description: 'Technical and creative proficiencies spanning both software and hardware domains.' },
      { id: 'cat-opsDesign', name: 'Ops & Design Tools', type: 'categoryOpsDesign', val: 15, color: nodeColors.categoryOpsDesign, description: 'Tools and platforms used for operations, design, and creative work.' },
      { id: 'cat-devTech', name: 'Dev & Tech Tools', type: 'categoryDevTech', val: 15, color: nodeColors.categoryDevTech, description: 'Development tools, frameworks, and technologies used for software and AI projects.' }
    );
    
    // Add skill nodes and connect to categories
    skills.management.forEach(skill => {
      nodes.push({ 
        id: skill, 
        name: skill, 
        type: 'management', 
        val: 5, 
        color: nodeColors.management, 
        category: 'cat-management',
        description: nodeDescriptions[skill] || '',
        relatedExperience: nodeToExperience[skill] || [],
        relatedProjects: nodeToProjects[skill] || []
      });
      links.push({ source: 'cat-management', target: skill, value: 1 });
    });
    
    skills.proficiencies.forEach(skill => {
      nodes.push({ 
        id: skill, 
        name: skill, 
        type: 'proficiency', 
        val: 5, 
        color: nodeColors.proficiency, 
        category: 'cat-proficiencies',
        description: nodeDescriptions[skill] || '',
        relatedExperience: nodeToExperience[skill] || [],
        relatedProjects: nodeToProjects[skill] || []
      });
      links.push({ source: 'cat-proficiencies', target: skill, value: 1 });
    });
    
    skills.opsDesignTools.forEach(tool => {
      nodes.push({ 
        id: tool, 
        name: tool, 
        type: 'opsDesign', 
        val: 5, 
        color: nodeColors.opsDesign, 
        category: 'cat-opsDesign',
        description: nodeDescriptions[tool] || '',
        relatedExperience: nodeToExperience[tool] || [],
        relatedProjects: nodeToProjects[tool] || []
      });
      links.push({ source: 'cat-opsDesign', target: tool, value: 1 });
    });
    
    skills.devTechTools.forEach(tool => {
      nodes.push({ 
        id: tool, 
        name: tool, 
        type: 'devTech', 
        val: 5, 
        color: nodeColors.devTech, 
        category: 'cat-devTech',
        description: nodeDescriptions[tool] || '',
        relatedExperience: nodeToExperience[tool] || [],
        relatedProjects: nodeToProjects[tool] || []
      });
      links.push({ source: 'cat-devTech', target: tool, value: 1 });
    });
    
    // Add relationships between skills
    relationships.forEach(rel => {
      links.push({ source: rel.source, target: rel.target, value: 2 });
    });
    
    return { nodes, links };
  }, []);
  
  // Initialize graph data on component mount (only once)
  useEffect(() => {
    setGraphData(createBaseGraphData());
  }, [createBaseGraphData]);
  
  // Handle toggling projects and experiences separately
  useEffect(() => {
    if (!showProjectsExperiences) {
      // Just use the base graph data without projects/experiences
      setGraphData(createBaseGraphData());
      return;
    }
    
    // Start with base graph data
    const { nodes, links } = createBaseGraphData();
    
    try {
      // Add project and experience category nodes
      nodes.push(
        { 
          id: 'cat-projects', 
          name: 'Projects', 
          type: 'categoryProject', 
          val: 15, 
          color: nodeColors.categoryProject, 
          description: 'Portfolio of projects spanning AI, web development, 3D printing, and more.' 
        },
        { 
          id: 'cat-experiences', 
          name: 'Experience', 
          type: 'categoryExperience', 
          val: 15, 
          color: nodeColors.categoryExperience, 
          description: 'Professional roles and responsibilities across various organizations.' 
        }
      );
      
      // Calculate connection counts for node sizing
      const connectionCounts: Record<string, number> = {};
      
      // Initialize counts with 1 to have a minimum size
      [...skills.management, ...skills.proficiencies, ...skills.opsDesignTools, ...skills.devTechTools, 
        ...projects, ...experiences].forEach(id => {
        connectionCounts[id] = 1;
      });
      
      // Count connections from relationships
      relationships.forEach(rel => {
        connectionCounts[rel.source] = (connectionCounts[rel.source] || 1) + 1;
        connectionCounts[rel.target] = (connectionCounts[rel.target] || 1) + 1;
      });
      
      // Count connections from projects
      Object.entries(nodeToProjects).forEach(([skill, skillProjects]) => {
        if (skillProjects.length > 0) {
          connectionCounts[skill] = (connectionCounts[skill] || 1) + skillProjects.length;
          skillProjects.forEach(project => {
            connectionCounts[project] = (connectionCounts[project] || 1) + 1;
          });
        }
      });
      
      // Count connections from experiences
      Object.entries(nodeToExperience).forEach(([skill, skillExperiences]) => {
        if (skillExperiences.length > 0) {
          connectionCounts[skill] = (connectionCounts[skill] || 1) + skillExperiences.length;
          skillExperiences.forEach(exp => {
            connectionCounts[exp] = (connectionCounts[exp] || 1) + 1;
          });
        }
      });
      
      // Add project nodes with connection-based sizing
      const projectNodes = projects.map(project => ({
        id: project,
        name: formatProjectName(project),
        type: 'project' as NodeType, 
        val: 3 + Math.min(connectionCounts[project] || 1, 10), // Base size + connections, capped at 10
        color: nodeColors.project,
        category: 'cat-projects',
        description: nodeDescriptions[project] || '',
      }));
      
      // Add experience nodes with connection-based sizing
      const experienceNodes = experiences.map(experience => ({
        id: experience,
        name: experience.split(':')[0], // Company name only for display
        type: 'experience' as NodeType,
        val: 3 + Math.min(connectionCounts[experience] || 1, 10), // Base size + connections, capped at 10
        color: nodeColors.experience,
        category: 'cat-experiences',
        description: nodeDescriptions[experience] || '',
      }));
      
      // Add all nodes at once
      nodes.push(...projectNodes, ...experienceNodes);
      
      // Add connections from projects to project category
      projectNodes.forEach(projectNode => {
        links.push({
          source: 'cat-projects',
          target: projectNode.id,
          value: 1
        });
      });
      
      // Add connections from experiences to experience category
      experienceNodes.forEach(expNode => {
        links.push({
          source: 'cat-experiences',
          target: expNode.id,
          value: 1
        });
      });
      
      // Connect projects to related skills
      Object.entries(nodeToProjects).forEach(([skill, relatedProjects]) => {
        if (Array.isArray(relatedProjects)) {
          relatedProjects.forEach(project => {
            if (projects.includes(project)) {
              links.push({
                source: skill,
                target: project,
                value: 1.5
              });
            }
          });
        }
      });
      
      // Connect experiences to related skills
      Object.entries(nodeToExperience).forEach(([skill, relatedExperiences]) => {
        if (Array.isArray(relatedExperiences)) {
          relatedExperiences.forEach(experience => {
            if (experiences.includes(experience)) {
              links.push({
                source: skill,
                target: experience,
                value: 1.5
              });
            }
          });
        }
      });
      
      // Update sizes for skill nodes based on connection count
      nodes.forEach(node => {
        if (node.type !== 'categoryManagement' && 
            node.type !== 'categoryProficiency' && 
            node.type !== 'categoryOpsDesign' && 
            node.type !== 'categoryDevTech' && 
            node.type !== 'categoryProject' && 
            node.type !== 'categoryExperience') {
          node.val = 3 + Math.min(connectionCounts[node.id] || 1, 12); // Base size + connections, capped at 12
        }
      });
      
      // Update graph data with new nodes and links
      setGraphData({ nodes, links });
      
      // Force a reheat of the simulation to reposition nodes
      setTimeout(() => {
        if (graphRef.current) {
          graphRef.current.d3ReheatSimulation();
        }
      }, 100);
      
    } catch (error) {
      console.error("Error adding projects and experiences:", error);
      // Fallback to base graph data if there's an error
      setGraphData(createBaseGraphData());
    }
  }, [showProjectsExperiences, createBaseGraphData]);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: width, // Full width of container
          height: Math.max(600, width * 0.6) // Proportional height
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Node click handler - now just updates selected node and context menu state
  // without re-centering the view on the clicked node
  const handleNodeClick = useCallback((node: any, event: MouseEvent) => {
    const nodeData = node as GraphNode;
    
    if (selectedNode?.id === nodeData.id) {
      setSelectedNode(null);
      setContextMenu({
        visible: false,
        node: null
      });
    } else {
      setSelectedNode(nodeData);
      setContextMenu({
        visible: true,
        node: nodeData
      });
    }
  }, [selectedNode]);

  // Node hover handler
  const handleNodeHover = useCallback((node: any) => {
    setHoveredNode(node ? node as GraphNode : null);
    document.body.style.cursor = node ? 'pointer' : 'default';
  }, []);

  // Handle closing the context menu
  const handleCloseContextMenu = useCallback(() => {
    setContextMenu({
      visible: false,
      node: null
    });
    setSelectedNode(null);
  }, []);

  // Handle zoom in
  const handleZoomIn = useCallback(() => {
    const newZoom = Math.min(zoomLevel * 1.2, 5); // Limit max zoom
    setZoomLevel(newZoom);
    if (graphRef.current) {
      graphRef.current.zoom(newZoom, 800); // 800ms transition
    }
  }, [zoomLevel]);

  // Handle zoom out
  const handleZoomOut = useCallback(() => {
    const newZoom = Math.max(zoomLevel / 1.2, 0.5); // Limit min zoom
    setZoomLevel(newZoom);
    if (graphRef.current) {
      graphRef.current.zoom(newZoom, 800); // 800ms transition
    }
  }, [zoomLevel]);

  // Handle reset view
  const handleResetView = useCallback(() => {
    setZoomLevel(1);
    if (graphRef.current) {
      // Center the graph and reset zoom
      graphRef.current.centerAt(0, 0, 1000);
      graphRef.current.zoom(1, 800);
      // Also reheat the simulation to redistribute nodes
      graphRef.current.d3ReheatSimulation();
    }
  }, []);

  // Handle fullscreen toggle with improved mobile support
  const handleFullscreenToggle = useCallback(() => {
    // Check if fullscreen is currently active
    const isCurrentlyFullscreen = Boolean(
      document.fullscreenElement || 
      (document as any).webkitFullscreenElement || 
      (document as any).mozFullScreenElement || 
      (document as any).msFullscreenElement
    );

    // Check if the browser supports fullscreen API
    const isFullscreenSupported = Boolean(
      document.documentElement.requestFullscreen || 
      (document.documentElement as any).webkitRequestFullscreen || 
      (document.documentElement as any).mozRequestFullScreen || 
      (document.documentElement as any).msRequestFullscreen
    );

    // Function to detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

  // Enhanced mobile handling for all mobile devices, not just iOS
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile || isIOS) {
      // Use a mobile-friendly approach for all mobile devices
      if (!isFullscreen) {
        // Toggle state
        setIsFullscreen(true);
        
        // Apply mobile fullscreen simulation
        if (containerRef.current) {
          // Force container to expand to viewport dimensions
          containerRef.current.style.position = 'fixed';
          containerRef.current.style.top = '0';
          containerRef.current.style.left = '0';
          containerRef.current.style.width = '100vw';
          containerRef.current.style.height = '100vh';
          containerRef.current.style.zIndex = '9999';
          containerRef.current.style.margin = '0';
          containerRef.current.style.padding = '0';
          containerRef.current.style.borderRadius = '0';
          containerRef.current.style.border = 'none';
          
          // Set dimensions to match viewport
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          
          setDimensions({
            width: viewportWidth,
            height: viewportHeight
          });
          
          // Reheat simulation with a slight delay
          setTimeout(() => {
            if (graphRef.current) {
              graphRef.current.d3ReheatSimulation();
              graphRef.current.zoomToFit(400);
            }
          }, 200);
          
          // Prevent scrolling of the background
          document.body.style.overflow = 'hidden';
        }
      } else {
        // Exit simulated fullscreen
        setIsFullscreen(false);
        
        // Reset styles
        if (containerRef.current) {
          containerRef.current.style.position = '';
          containerRef.current.style.top = '';
          containerRef.current.style.left = '';
          containerRef.current.style.width = '';
          containerRef.current.style.height = '';
          containerRef.current.style.zIndex = '';
          containerRef.current.style.margin = '';
          containerRef.current.style.padding = '';
          containerRef.current.style.borderRadius = '';
          containerRef.current.style.border = '';
          
          // Reset dimensions to original
          const { width } = containerRef.current.getBoundingClientRect();
          setDimensions({
            width,
            height: Math.max(600, width * 0.6)
          });
          
          // Reheat simulation
          setTimeout(() => {
            if (graphRef.current) {
              graphRef.current.d3ReheatSimulation();
            }
          }, 200);
          
          // Re-enable scrolling
          document.body.style.overflow = '';
        }
      }
      return;
    }
    
    // For browsers that support the Fullscreen API
    if (isFullscreenSupported) {
      if (!isCurrentlyFullscreen) {
        // Enter fullscreen using the appropriate method
        const requestFullscreen = (element: HTMLElement) => {
          if (element.requestFullscreen) {
            return element.requestFullscreen();
          } else if ((element as any).webkitRequestFullscreen) {
            return (element as any).webkitRequestFullscreen();
          } else if ((element as any).mozRequestFullScreen) {
            return (element as any).mozRequestFullScreen();
          } else if ((element as any).msRequestFullscreen) {
            return (element as any).msRequestFullscreen();
          }
          return Promise.reject("Fullscreen API not supported");
        };
        
        if (containerRef.current) {
          requestFullscreen(containerRef.current)
            .then(() => {
              setIsFullscreen(true);
              // Adjust dimensions for fullscreen
              setTimeout(() => {
                if (containerRef.current) {
                  const { width, height } = containerRef.current.getBoundingClientRect();
                  setDimensions({ width, height });
                  if (graphRef.current) {
                    graphRef.current.d3ReheatSimulation();
                  }
                }
              }, 100);
            })
            .catch((err: Error) => {
              console.error(`Error attempting to enable fullscreen: ${err.message}`);
              // Fallback for devices where the promise is rejected
              setIsFullscreen(true);
              if (containerRef.current) {
                const viewportHeight = window.innerHeight;
                setDimensions({
                  width: containerRef.current.getBoundingClientRect().width,
                  height: viewportHeight * 0.9
                });
                if (graphRef.current) {
                  graphRef.current.d3ReheatSimulation();
                }
              }
            });
        }
      } else {
        // Exit fullscreen using the appropriate method
        const exitFullscreen = () => {
          if (document.exitFullscreen) {
            return document.exitFullscreen();
          } else if ((document as any).webkitExitFullscreen) {
            return (document as any).webkitExitFullscreen();
          } else if ((document as any).mozCancelFullScreen) {
            return (document as any).mozCancelFullScreen();
          } else if ((document as any).msExitFullscreen) {
            return (document as any).msExitFullscreen();
          }
          return Promise.reject("Fullscreen API not supported");
        };
        
        exitFullscreen()
          .then(() => {
            setIsFullscreen(false);
            // Reset dimensions after exiting fullscreen
            setTimeout(() => {
              if (containerRef.current) {
                const { width } = containerRef.current.getBoundingClientRect();
                setDimensions({
                  width,
                  height: Math.max(600, width * 0.6)
                });
                if (graphRef.current) {
                  graphRef.current.d3ReheatSimulation();
                }
              }
            }, 100);
          })
          .catch((err: Error) => {
            console.error(`Error attempting to exit fullscreen: ${err.message}`);
            // Fallback in case the promise is rejected
            setIsFullscreen(false);
            setTimeout(() => {
              if (containerRef.current) {
                const { width } = containerRef.current.getBoundingClientRect();
                setDimensions({
                  width,
                  height: Math.max(600, width * 0.6)
                });
                if (graphRef.current) {
                  graphRef.current.d3ReheatSimulation();
                }
              }
            }, 100);
          });
      }
    } else {
      // Fallback for browsers that don't support fullscreen
      if (!isFullscreen) {
        setIsFullscreen(true);
        // Use viewport dimensions as a fallback
        if (containerRef.current) {
          const viewportHeight = window.innerHeight;
          setDimensions({
            width: containerRef.current.getBoundingClientRect().width,
            height: viewportHeight * 0.9
          });
          if (graphRef.current) {
            graphRef.current.d3ReheatSimulation();
          }
        }
      } else {
        setIsFullscreen(false);
        // Reset to normal size
        if (containerRef.current) {
          const { width } = containerRef.current.getBoundingClientRect();
          setDimensions({
            width,
            height: Math.max(600, width * 0.6)
          });
          if (graphRef.current) {
            graphRef.current.d3ReheatSimulation();
          }
        }
      }
    }
  }, [isFullscreen]);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skill Graph</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across management, technical, and creative domains.
          </p>
        </div>
        
        {/* Graph Container */}
        <div 
          ref={containerRef} 
          className="bg-gray-900 rounded-xl overflow-hidden mt-2 w-full relative border border-gray-700/50 shadow-lg"
          style={{ minHeight: '650px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' }}
        >
        {/* Controls Component - Inside Graph */}
        <SkillControls 
          showAllLabels={showAllLabels}
          showProjectsExperiences={showProjectsExperiences}
          nodeSpacing={nodeSpacing}
          onShowLabelsChange={setShowAllLabels}
          onShowProjectsExperiencesChange={setShowProjectsExperiences}
          onSpacingChange={setNodeSpacing}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onResetView={handleResetView}
          onFullscreenToggle={handleFullscreenToggle}
          isInsideGraph={true}
          isFullscreen={isFullscreen}
        />
          {/* Graph Component */}
          <SkillGraph 
            ref={graphRef}
            graphData={graphData}
            dimensions={dimensions}
            selectedNode={selectedNode}
            hoveredNode={hoveredNode}
            showAllLabels={showAllLabels}
            nodeSpacing={nodeSpacing}
            onNodeClick={handleNodeClick}
            onNodeHover={handleNodeHover}
          />
          
          {/* Context Menu Component */}
          <SkillContextMenu 
            node={contextMenu.node}
            visible={contextMenu.visible}
            onClose={handleCloseContextMenu}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
