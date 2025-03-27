// Node types for different categories
export type NodeType = 
  | 'management'
  | 'proficiency' 
  | 'opsDesign'
  | 'devTech'
  | 'category'
  | 'categoryManagement'
  | 'categoryProficiency'
  | 'categoryOpsDesign'
  | 'categoryDevTech'
  | 'aiTech'
  | 'fabrication'
  | 'project'
  | 'experience'
  | 'categoryProject'
  | 'categoryExperience';

// Main node structure for the graph
export interface GraphNode {
  id: string;
  name: string;
  type: NodeType;
  val: number; // Size of the node
  color: string;
  category?: string;
  description?: string;
  relatedProjects?: string[];
  relatedExperience?: string[];
  relatedPosts?: string[];
  fx?: number | null; // Fixed X position if pinned
  fy?: number | null; // Fixed Y position if pinned
}

// Structure for links between nodes
export interface GraphLink {
  source: string;
  target: string;
  value?: number;
}

// Full graph data structure
export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

// Context menu state
export interface ContextMenuState {
  visible: boolean;
  node: GraphNode | null;
}

// Interface for the ForceGraph component ref
export interface ForceGraphInstance {
  centerAt: (x: number, y: number, ms: number) => void;
  zoom: (factor: number, ms: number) => void;
  d3Force: (forceName: string, ...args: any[]) => any;
  d3ReheatSimulation: () => void;
  zoomToFit: (duration?: number, padding?: number) => void;
}
