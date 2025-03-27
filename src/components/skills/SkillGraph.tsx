import React, { useRef, useCallback, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { GraphNode, GraphData, ForceGraphInstance } from './types';

interface SkillGraphProps {
  graphData: GraphData;
  dimensions: { width: number; height: number };
  selectedNode: GraphNode | null;
  hoveredNode: GraphNode | null;
  showAllLabels: boolean;
  nodeSpacing: number;
  onNodeClick: (node: any, event: MouseEvent) => void;
  onNodeHover: (node: any) => void;
}

const SkillGraph = forwardRef<ForceGraphInstance, SkillGraphProps>((props, ref) => {
  const {
    graphData,
    dimensions,
    selectedNode,
    hoveredNode,
    showAllLabels,
    nodeSpacing,
    onNodeClick,
    onNodeHover,
  } = props;
  
  const internalGraphRef = useRef<any>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Track zoom level changes
  const handleZoomUpdate = useCallback(() => {
    if (internalGraphRef.current) {
      // Get the transform from the d3 zoom
      const currentTransform = internalGraphRef.current.zoom().transform();
      if (currentTransform && typeof currentTransform.k === 'number') {
        setZoomLevel(currentTransform.k);
      }
    }
  }, []);

  // Forward the ref to the parent component
  useImperativeHandle(ref, () => ({
    centerAt: (x: number, y: number, ms: number) => {
      if (internalGraphRef.current) {
        internalGraphRef.current.centerAt(x, y, ms);
      }
    },
    zoom: (factor: number, ms: number) => {
      if (internalGraphRef.current) {
        internalGraphRef.current.zoom(factor, ms);
      }
    },
    d3Force: (forceName: string, ...args: any[]) => {
      if (internalGraphRef.current) {
        return internalGraphRef.current.d3Force(forceName, ...args);
      }
      return null;
    },
    d3ReheatSimulation: () => {
      if (internalGraphRef.current) {
        internalGraphRef.current.d3ReheatSimulation();
      }
    },
    zoomToFit: (duration?: number, padding?: number) => {
      if (internalGraphRef.current) {
        internalGraphRef.current.zoomToFit(duration, padding);
      }
    }
  }));

  // Apply force simulation with proper node spacing
  useEffect(() => {
    if (internalGraphRef.current && graphData.nodes.length > 0) {
      // Adjust force simulation for better spacing
      const charge = internalGraphRef.current.d3Force('charge');
      if (charge && typeof charge.strength === 'function') {
        charge.strength(-nodeSpacing);
      }
      
      const linkForce = internalGraphRef.current.d3Force('link');
      if (linkForce && typeof linkForce.distance === 'function') {
        linkForce.distance((link: any) => {
          const linkSource = typeof link.source === 'object' ? link.source : { type: '' };
          const linkTarget = typeof link.target === 'object' ? link.target : { type: '' };
          return linkSource.type === 'category' || linkTarget.type === 'category' ? 120 : 80;
        });
      }
      
      // Restart simulation with new parameters
      internalGraphRef.current.d3ReheatSimulation();
    }
  }, [graphData, nodeSpacing]);

  // Custom node painting with improved text rendering
  const paintNode = useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
    const graphNode = node as GraphNode;
    const { id, name, color, val, type } = graphNode;
    const x = node.x || 0;
    const y = node.y || 0;
    
    const isSelected = selectedNode?.id === id;
    const isHovered = hoveredNode?.id === id;
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
    if (showAllLabels || isSelected || isHovered || type === 'category') {
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
    const source = typeof link.source === 'object' ? link.source : { x: 0, y: 0, id: null };
    const target = typeof link.target === 'object' ? link.target : { x: 0, y: 0, id: null };
    
    const sourceX = source.x ?? 0;
    const sourceY = source.y ?? 0;
    const targetX = target.x ?? 0;
    const targetY = target.y ?? 0;
    
    const isHighlighted = 
      (selectedNode && (selectedNode.id === source.id || selectedNode.id === target.id)) ||
      (hoveredNode && (hoveredNode.id === source.id || hoveredNode.id === target.id));
    
    ctx.beginPath();
    ctx.moveTo(sourceX, sourceY);
    ctx.lineTo(targetX, targetY);
    ctx.strokeStyle = isHighlighted ? '#fff' : 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = isHighlighted ? 2 / globalScale : 1 / globalScale;
    ctx.stroke();
  }, [selectedNode, hoveredNode]);

  // Empty function to disable the default tooltip
  const emptyLabelAccessor = useCallback(() => '', []);

  return (
    <>
      {graphData.nodes.length > 0 && (
        <ForceGraph2D
          ref={internalGraphRef}
          graphData={graphData}
          nodeLabel={emptyLabelAccessor}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="#111827"
          linkDirectionalParticles={2}
          linkDirectionalParticleWidth={(link) => {
            const linkSource = typeof link.source === 'object' ? link.source : null;
            const linkTarget = typeof link.target === 'object' ? link.target : null;
            return (selectedNode && 
              (linkSource?.id === selectedNode.id || 
              linkTarget?.id === selectedNode.id)) ? 2 : 0;
          }}
          nodeCanvasObject={paintNode}
          linkCanvasObject={paintLink}
          onNodeClick={onNodeClick}
          onNodeHover={onNodeHover}
          d3AlphaDecay={0.02}
          d3VelocityDecay={0.3}
          nodeRelSize={6}
          linkWidth={1}
          enableZoomInteraction={true} // Enable zoom interaction for scroll wheel and pinch to zoom
          enablePanInteraction={true}
          cooldownTicks={100}
          // @ts-ignore - the d3Force prop is supported but not in the type definitions
          d3Force={(d3Force: any) => {
            d3Force('charge').strength(-nodeSpacing);
            d3Force('link').distance((link: any) => {
              const linkSource = typeof link.source === 'object' ? link.source : { type: '' };
              const linkTarget = typeof link.target === 'object' ? link.target : { type: '' };
              return linkSource.type === 'category' || linkTarget.type === 'category' ? 120 : 80;
            });
            d3Force('collision', d3Force.forceCollide((node: any) => node.val * 2 + 30));
            d3Force('center').strength(0.05);
          }}
        />
      )}
    </>
  );
});

export default SkillGraph;
