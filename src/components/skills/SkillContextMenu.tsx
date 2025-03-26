import React from 'react';
import { X, ExternalLink, BookOpen, Briefcase, Code, Info, Network } from 'lucide-react';
import { GraphNode } from './types';
import { formatProjectName, relationships } from './data';

interface SkillContextMenuProps {
  node: GraphNode | null;
  visible: boolean;
  onClose: () => void;
}

export const SkillContextMenu: React.FC<SkillContextMenuProps> = ({ node, visible, onClose }) => {
  if (!visible || !node) return null;

  // Handle tab switching
  const [activeTab, setActiveTab] = React.useState<'connections' | 'details'>('connections');

  // Get connected nodes from relationships array
  const getConnectedNodes = () => {
    if (!node) return [];
    
    // Find all relationships where this node is either source or target
    return relationships
      .filter((rel: {source: string, target: string}) => rel.source === node.id || rel.target === node.id)
      .map((rel: {source: string, target: string}) => {
        // Return the opposite node in the relationship
        const connectedNodeId = rel.source === node.id ? rel.target : rel.source;
        return connectedNodeId;
      });
  };
  
  const connectedNodes = getConnectedNodes();

  // Get color based on node type for theming
  const getNodeTypeColor = () => {
    switch (node.type) {
      case 'management': return 'from-blue-600 to-blue-800';
      case 'proficiency': return 'from-green-600 to-green-800';
      case 'opsDesign': return 'from-amber-600 to-amber-800';
      case 'devTech': return 'from-purple-600 to-purple-800';
      case 'category': return 'from-gray-600 to-gray-800';
      case 'aiTech': return 'from-pink-600 to-pink-800';
      case 'fabrication': return 'from-orange-600 to-orange-800';
      default: return 'from-blue-600 to-blue-800';
    }
  };

  // Determine the accent color based on node type
  const accentColor = () => {
    switch (node.type) {
      case 'management': return 'blue';
      case 'proficiency': return 'green';
      case 'opsDesign': return 'amber';
      case 'devTech': return 'purple';
      case 'category': return 'gray';
      case 'aiTech': return 'pink';
      case 'fabrication': return 'orange';
      default: return 'blue';
    }
  };

  return (
    <div 
      className="absolute bottom-4 left-4 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl z-50 max-w-sm w-full overflow-hidden transition-all duration-200"
      style={{
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Gradient header with title and close button */}
      <div className={`bg-gradient-to-r ${getNodeTypeColor()} p-4 relative`}>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">{node.name}</h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-gray-800/30 hover:bg-gray-800/50 text-white transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
        <div className="mt-2">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-black/30 text-white/90">
            {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
          </span>
        </div>
      </div>

      {/* Tab navigation - modern pill style */}
      <div className="flex p-2 bg-gray-900/50">
        <div className="bg-gray-800 p-1 rounded-lg flex w-full">
          <button
            className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'connections' 
                ? `bg-${accentColor()}-600 text-white` 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
            }`}
            onClick={() => setActiveTab('connections')}
          >
            <Code size={14} />
            <span>Connections</span>
          </button>
          <button
            className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'details' 
                ? `bg-${accentColor()}-600 text-white` 
                : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
            }`}
            onClick={() => setActiveTab('details')}
          >
            <Info size={14} />
            <span>Details</span>
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="p-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {activeTab === 'connections' ? (
          /* Connections Tab */
          <div>
            {/* Related Projects */}
            {node.relatedProjects && node.relatedProjects.length > 0 && (
              <div className="mb-5">
                <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-1.5">
                  <Code size={15} />
                  <span>Related Projects</span>
                </h4>
                <div className="space-y-2 pl-1">
                  {node.relatedProjects.map((project, i) => (
                    <div key={i} className="flex items-center group">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></div>
                      <a 
                        href={`/project/${project}`} 
                        className="text-gray-200 hover:text-green-400 text-sm flex items-center transition-colors"
                      >
                        {formatProjectName(project)}
                        <ExternalLink size={12} className="ml-1.5 opacity-70" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Experience */}
            {node.relatedExperience && node.relatedExperience.length > 0 && (
              <div className="mb-5">
                <h4 className="text-sm font-semibold text-blue-400 mb-2 flex items-center gap-1.5">
                  <Briefcase size={15} />
                  <span>Experience</span>
                </h4>
                <div className="space-y-2 pl-1">
                  {node.relatedExperience.map((exp, i) => (
                    <div key={i} className="flex items-center group">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></div>
                      <span className="text-gray-300 text-sm">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Blog Posts */}
            {node.relatedPosts && node.relatedPosts.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-amber-400 mb-2 flex items-center gap-1.5">
                  <BookOpen size={15} />
                  <span>Blog Posts</span>
                </h4>
                <div className="space-y-2 pl-1">
                  {node.relatedPosts.map((post, i) => (
                    <div key={i} className="flex items-center group">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></div>
                      <a 
                        href={`/blog/post/${post}`} 
                        className="text-gray-200 hover:text-amber-400 text-sm flex items-center transition-colors"
                      >
                        {post.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        <ExternalLink size={12} className="ml-1.5 opacity-70" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Connected Nodes */}
            {connectedNodes.length > 0 && (
              <div className="mb-5">
                <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-1.5">
                  <Network size={15} />
                  <span>Connected Skills & Tools</span>
                </h4>
                <div className="space-y-2 pl-1">
                  {connectedNodes.map((nodeId: string, i: number) => (
                    <div key={i} className="flex items-center group">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></div>
                      <span className="text-gray-300 text-sm">{nodeId}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No connections message */}
            {(!node.relatedProjects || node.relatedProjects.length === 0) && 
             (!node.relatedExperience || node.relatedExperience.length === 0) && 
             (!node.relatedPosts || node.relatedPosts.length === 0) && 
             (connectedNodes.length === 0) && (
              <div className="text-center text-gray-500 py-6 px-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <Info size={24} className="text-gray-600" />
                  </div>
                  <p>No connections available for this node</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Details Tab */
          <div className="px-1">
            {node.description ? (
              <div className="text-gray-300 mb-3 leading-relaxed">
                <div className="bg-gray-800/50 rounded-lg p-3 border-l-2 border-gray-700 italic">
                  {node.description}
                </div>
                
                {/* Add tip below the description */}
                <div className="text-xs text-gray-500 mt-3 flex items-center gap-1.5 justify-center">
                  <Info size={12} />
                  <span>Switch to "Connections" tab to see related projects and experience</span>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-6 px-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                    <Info size={24} className="text-gray-600" />
                  </div>
                  <p>No details available for this node</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillContextMenu;
