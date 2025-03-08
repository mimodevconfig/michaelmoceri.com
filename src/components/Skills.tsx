import React, { useRef, useCallback, useState, useEffect } from 'react';
import { Code2, Database, Brain, Workflow, Award, PenTool, Briefcase, Cpu, Wrench, Info, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import ForceGraph2D from 'react-force-graph-2d';
import { cn } from '../lib/utils';

// Define node types for the graph
type NodeType = 'management' | 'proficiency' | 'opsDesign' | 'devTech' | 'category';

// Define node and link interfaces
interface Node {
  id: string;
  name: string;
  type: NodeType;
  val: number;
  color?: string;
  category?: string;
}

interface Link {
  source: string;
  target: string;
  value: number;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

// Skills data
const skills = {
  management: [
    'Strategic planning',
    'Business model development',
    'Fundraising',
    'Revenue Operations',
    'GTM strategy development',
    'Team development and recruiting',
    'Vision and purpose development',
    'Product road mapping',
    'Product management',
    'IT management'
  ],
  proficiencies: [
    'Software and hardware development',
    'UI/UX design',
    '3D printing',
    'Machine design',
    'Multi-agent AI powered workflows',
    'Automation development',
    'Network engineering and management',
    'Sales and marketing automation',
    'Photo & video editing',
    'Local AI hosting',
    'High-end server building'
  ],
  opsDesignTools: [
    'HubSpot Enterprise',
    'Google Ads',
    'Meta Ads',
    'Photoshop',
    'Illustrator',
    'Adobe XD',
    'Figma',
    'Premier Pro',
    'ChatGPT',
    'Midjourney',
    'RunwayML',
    'G-Suite',
    'MS 365 Suite',
    'Squarespace',
    'Wordpress',
    'Wix',
    '"Vibe Coding"'
  ],
  devTechTools: [
    'Ollama',
    'Open WebUI',
    'OpenAI API',
    'Anthropic API',
    'Gemini API',
    'Docker',
    'VS Code',
    'Bolt.DIY',
    'Replit',
    'Git',
    'Node.js',
    'n8n',
    'Supabase',
    'AI RAG pipelines',
    'Obsidian.md',
    'Ubiquiti/Unifi hardware and software stack',
    'Atlassian suite',
    'Autodesk Fusion 360',
    'Netfabb',
    '3D printing slicers',
    'FDM/SLA/SLS/DLP/DMLS 3D printing',
    'Groq'
  ]
};

// Define relationships between skills
const relationships = [
  // Management to Proficiencies
  { source: 'Strategic planning', target: 'Software and hardware development' },
  { source: 'Product management', target: 'UI/UX design' },
  { source: 'IT management', target: 'Network engineering and management' },
  { source: 'GTM strategy development', target: 'Sales and marketing automation' },
  { source: 'Product road mapping', target: 'Machine design' },
  { source: 'Vision and purpose development', target: 'Multi-agent AI powered workflows' },
  
  // Management to Tools
  { source: 'Revenue Operations', target: 'HubSpot Enterprise' },
  { source: 'GTM strategy development', target: 'Google Ads' },
  { source: 'GTM strategy development', target: 'Meta Ads' },
  { source: 'Product management', target: 'Atlassian suite' },
  { source: 'IT management', target: 'MS 365 Suite' },
  
  // Proficiencies to Tools
  { source: 'UI/UX design', target: 'Figma' },
  { source: 'UI/UX design', target: 'Adobe XD' },
  { source: 'Photo & video editing', target: 'Photoshop' },
  { source: 'Photo & video editing', target: 'Illustrator' },
  { source: 'Photo & video editing', target: 'Premier Pro' },
  { source: '3D printing', target: 'Autodesk Fusion 360' },
  { source: '3D printing', target: 'Netfabb' },
  { source: '3D printing', target: '3D printing slicers' },
  { source: '3D printing', target: 'FDM/SLA/SLS/DLP/DMLS 3D printing' },
  { source: 'Machine design', target: 'Autodesk Fusion 360' },
  { source: 'Multi-agent AI powered workflows', target: 'ChatGPT' },
  { source: 'Multi-agent AI powered workflows', target: 'OpenAI API' },
  { source: 'Multi-agent AI powered workflows', target: 'Anthropic API' },
  { source: 'Multi-agent AI powered workflows', target: 'Gemini API' },
  { source: 'Multi-agent AI powered workflows', target: 'Groq' },
  { source: 'Local AI hosting', target: 'Ollama' },
  { source: 'Local AI hosting', target: 'Open WebUI' },
  { source: 'Network engineering and management', target: 'Ubiquiti/Unifi hardware and software stack' },
  { source: 'Automation development', target: 'n8n' },
  { source: 'Software and hardware development', target: 'VS Code' },
  { source: 'Software and hardware development', target: 'Git' },
  { source: 'Software and hardware development', target: 'Node.js' },
  { source: 'Software and hardware development', target: 'Docker' },
  { source: 'Software and hardware development', target: 'Supabase' },
  { source: 'Software and hardware development', target: 'Bolt.DIY' },
  { source: 'Software and hardware development', target: 'Replit' },
  
  // Cross-category connections
  { source: 'AI RAG pipelines', target: 'OpenAI API' },
  { source: 'AI RAG pipelines', target: 'Anthropic API' },
  { source: 'AI RAG pipelines', target: 'Gemini API' },
  { source: 'Obsidian.md', target: '"Vibe Coding"' },
  { source: 'ChatGPT', target: '"Vibe Coding"' },
  { source: 'Midjourney', target: 'UI/UX design' },
  { source: 'RunwayML', target: 'UI/UX design' },
];

export default function Skills() {
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] });
  const [dimensions, setDimensions] = useState({ width: 0, height: 600 });
  const graphRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [showAllLabels, setShowAllLabels] = useState(true);
  const [nodeSpacing, setNodeSpacing] = useState(250);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Colors for different node types
  const nodeColors = {
    management: '#3b82f6', // blue
    proficiency: '#10b981', // green
    opsDesign: '#f59e0b', // amber
    devTech: '#8b5cf6', // purple
    category: '#6b7280', // gray
  };

  // Prepare graph data
  useEffect(() => {
    const nodes: Node[] = [];
    const links: Link[] = [];
    
    // Add category nodes
    nodes.push(
      { id: 'cat-management', name: 'Management Skills', type: 'category', val: 15, color: nodeColors.category },
      { id: 'cat-proficiencies', name: 'Proficiencies', type: 'category', val: 15, color: nodeColors.category },
      { id: 'cat-opsDesign', name: 'Ops & Design Tools', type: 'category', val: 15, color: nodeColors.category },
      { id: 'cat-devTech', name: 'Dev & Tech Tools', type: 'category', val: 15, color: nodeColors.category }
    );
    
    // Add skill nodes and connect to categories
    skills.management.forEach(skill => {
      nodes.push({ id: skill, name: skill, type: 'management', val: 5, color: nodeColors.management, category: 'cat-management' });
      links.push({ source: 'cat-management', target: skill, value: 1 });
    });
    
    skills.proficiencies.forEach(skill => {
      nodes.push({ id: skill, name: skill, type: 'proficiency', val: 5, color: nodeColors.proficiency, category: 'cat-proficiencies' });
      links.push({ source: 'cat-proficiencies', target: skill, value: 1 });
    });
    
    skills.opsDesignTools.forEach(tool => {
      nodes.push({ id: tool, name: tool, type: 'opsDesign', val: 5, color: nodeColors.opsDesign, category: 'cat-opsDesign' });
      links.push({ source: 'cat-opsDesign', target: tool, value: 1 });
    });
    
    skills.devTechTools.forEach(tool => {
      nodes.push({ id: tool, name: tool, type: 'devTech', val: 5, color: nodeColors.devTech, category: 'cat-devTech' });
      links.push({ source: 'cat-devTech', target: tool, value: 1 });
    });
    
    // Add relationships between skills
    relationships.forEach(rel => {
      links.push({ source: rel.source, target: rel.target, value: 2 });
    });
    
    setGraphData({ nodes, links });
  }, []);

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

  // Apply force simulation with proper node spacing
  useEffect(() => {
    if (graphRef.current && graphData.nodes.length > 0) {
      // Adjust force simulation for better spacing
      graphRef.current.d3Force('charge').strength(-nodeSpacing);
      graphRef.current.d3Force('link').distance(link => {
        // Longer distance for category links to create more space
        return link.source.type === 'category' || link.target.type === 'category' ? 120 : 80;
      });
      
      // Restart simulation with new parameters
      graphRef.current.d3ReheatSimulation();
    }
  }, [graphData, nodeSpacing, graphRef.current]);

  // Disable mouse wheel zoom
  useEffect(() => {
    if (graphRef.current) {
      // Disable default zoom to fit
      if (typeof graphRef.current._zoomToFit === 'function') {
        graphRef.current._zoomToFit = () => {};
      }
      
      // Simply use the enableZoomInteraction prop instead of trying to modify the zoom behavior
      // The zoom.filter approach doesn't work because the zoom object doesn't have a filter method
    }
  }, [graphRef.current]);

  // Node click handler
  const handleNodeClick = useCallback((node: Node) => {
    setSelectedNode(selectedNode?.id === node.id ? null : node);
    
    if (graphRef.current) {
      // Center view on node with more space around it
      graphRef.current.centerAt(node.x, node.y, 1000);
    }
  }, [selectedNode]);

  // Node hover handler
  const handleNodeHover = useCallback((node: Node | null) => {
    setHoveredNode(node);
    document.body.style.cursor = node ? 'pointer' : 'default';
  }, []);

  // Custom node painting with improved text rendering
  const paintNode = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const { x, y, name, color, val } = node;
    const isSelected = selectedNode?.id === node.id;
    const isHovered = hoveredNode?.id === node.id;
    const fontSize = isSelected ? 14 / globalScale : 12 / globalScale;
    const nodeSize = val * (isSelected ? 1.5 : isHovered ? 1.2 : 1);
    
    // Draw node circle
    ctx.beginPath();
    ctx.arc(x, y, nodeSize, 0, 2 * Math.PI);
    ctx.fillStyle = color || '#999';
    ctx.fill();
    
    // Draw border for selected or hovered nodes
    if (isSelected || isHovered) {
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2 / globalScale;
      ctx.stroke();
    }
    
    // Draw node label for all nodes or just selected/hovered/category nodes
    if (showAllLabels || isSelected || isHovered || node.type === 'category') {
      ctx.font = `${fontSize}px Sans-Serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Measure text for background
      const textWidth = ctx.measureText(name).width;
      const bgPadding = 4 / globalScale;
      
      // Calculate position for text - position below node with enough space
      const textY = y + nodeSize + fontSize + bgPadding;
      
      // Add background for text readability
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(
        x - textWidth / 2 - bgPadding,
        textY - fontSize / 2 - bgPadding,
        textWidth + bgPadding * 2,
        fontSize + bgPadding * 2
      );
      
      // Draw text
      ctx.fillStyle = '#fff';
      ctx.fillText(name, x, textY);
      
      // Add a subtle connecting line from node to label
      ctx.beginPath();
      ctx.moveTo(x, y + nodeSize);
      ctx.lineTo(x, textY - fontSize / 2 - bgPadding);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1 / globalScale;
      ctx.stroke();
    }
  }, [selectedNode, hoveredNode, showAllLabels]);

  // Custom link painting
  const paintLink = useCallback((link: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const { source, target } = link;
    const isHighlighted = 
      (selectedNode && (selectedNode.id === source.id || selectedNode.id === target.id)) ||
      (hoveredNode && (hoveredNode.id === source.id || hoveredNode.id === target.id));
    
    ctx.beginPath();
    ctx.moveTo(source.x, source.y);
    ctx.lineTo(target.x, target.y);
    ctx.strokeStyle = isHighlighted ? '#fff' : 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = isHighlighted ? 2 / globalScale : 1 / globalScale;
    ctx.stroke();
  }, [selectedNode, hoveredNode]);

  // Handle spacing adjustment
  const handleSpacingChange = (value: number) => {
    setNodeSpacing(value);
    if (graphRef.current) {
      graphRef.current.d3Force('charge').strength(-value);
      graphRef.current.d3ReheatSimulation();
    }
  };

  // Handle zoom in
  const handleZoomIn = () => {
    if (graphRef.current) {
      const newZoom = Math.min(zoomLevel * 1.2, 5); // Limit max zoom
      setZoomLevel(newZoom);
      graphRef.current.zoom(newZoom, 400); // Smooth transition
    }
  };

  // Handle zoom out
  const handleZoomOut = () => {
    if (graphRef.current) {
      const newZoom = Math.max(zoomLevel / 1.2, 0.5); // Limit min zoom
      setZoomLevel(newZoom);
      graphRef.current.zoom(newZoom, 400); // Smooth transition
    }
  };

  // Handle reset view
  const handleResetView = () => {
    if (graphRef.current) {
      setZoomLevel(1);
      graphRef.current.centerAt(0, 0, 800);
      graphRef.current.zoom(1, 800);
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container-fluid px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across management, technical, and creative domains.
          </p>
        </div>
        
        {/* Controls and Legend Panel */}
        <div className="bg-gray-800 rounded-t-xl p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span>Management Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span>Proficiencies</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span>Ops & Design Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span>Dev & Tech Tools</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="showLabels" 
                checked={showAllLabels} 
                onChange={() => setShowAllLabels(!showAllLabels)}
                className="w-4 h-4"
              />
              <label htmlFor="showLabels">Show all labels</label>
            </div>
            
            <div className="flex items-center gap-2">
              <span>Node spacing:</span>
              <input 
                type="range" 
                min="100" 
                max="500" 
                value={nodeSpacing} 
                onChange={(e) => handleSpacingChange(parseInt(e.target.value))}
                className="w-24"
              />
            </div>
            
            {/* Zoom controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handleZoomIn}
                className="p-1.5 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                aria-label="Zoom in"
                title="Zoom in"
              >
                <ZoomIn size={18} />
              </button>
              <button 
                onClick={handleZoomOut}
                className="p-1.5 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                aria-label="Zoom out"
                title="Zoom out"
              >
                <ZoomOut size={18} />
              </button>
              <button 
                onClick={handleResetView}
                className="p-1.5 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                aria-label="Reset view"
                title="Reset view"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-b-xl p-3 text-center text-sm text-gray-400">
          Click on nodes to focus and see connections. Hover to highlight relationships. Use zoom buttons to adjust view. Click and drag to pan and move nodes around.
        </div>
        
        <div 
          ref={containerRef} 
          className="bg-gray-900 rounded-xl overflow-hidden mt-2 w-full"
          style={{ minHeight: '650px', position: 'relative' }}
        >
          {graphData.nodes.length > 0 && (
            <ForceGraph2D
              ref={graphRef}
              graphData={graphData}
              nodeLabel="name"
              width={dimensions.width}
              height={dimensions.height}
              backgroundColor="#111827" // Dark blue navy color matching projects section
              linkDirectionalParticles={2}
              linkDirectionalParticleWidth={link => 
                (selectedNode && 
                 (link.source.id === selectedNode.id || 
                  link.target.id === selectedNode.id)) ? 2 : 0
              }
              nodeCanvasObject={paintNode}
              linkCanvasObject={paintLink}
              onNodeClick={handleNodeClick}
              onNodeHover={handleNodeHover}
              d3AlphaDecay={0.02}
              d3VelocityDecay={0.3}
              nodeRelSize={6}
              linkWidth={1}
              enableZoomInteraction={false} // Disable default zoom interaction
              enablePanInteraction={true} // Keep pan interaction
              // Improved force simulation parameters
              d3Force={
                (d3Force) => {
                  // Stronger repulsion between nodes
                  d3Force('charge').strength(-nodeSpacing);
                  // Longer links for better spacing
                  d3Force('link').distance(link => {
                    return link.source.type === 'category' || link.target.type === 'category' ? 120 : 80;
                  });
                  // Add collision detection to prevent overlap
                  d3Force('collision', d3Force.forceCollide(node => node.val * 2 + 30));
                  // Center force to keep graph centered
                  d3Force('center').strength(0.05);
                }
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}
