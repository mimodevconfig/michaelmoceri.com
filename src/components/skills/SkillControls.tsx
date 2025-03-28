import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Eye, EyeOff, Network, Briefcase, Maximize } from 'lucide-react';

interface SkillControlsProps {
  showAllLabels: boolean;
  showProjectsExperiences: boolean;
  nodeSpacing: number;
  onShowLabelsChange: (show: boolean) => void;
  onShowProjectsExperiencesChange: (show: boolean) => void;
  onSpacingChange: (spacing: number) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
  onFullscreenToggle: () => void;
  isInsideGraph?: boolean;
  isFullscreen?: boolean;
}

const SkillControls: React.FC<SkillControlsProps> = ({
  showAllLabels,
  showProjectsExperiences,
  nodeSpacing,
  onShowLabelsChange,
  onShowProjectsExperiencesChange,
  onSpacingChange,
  onZoomIn,
  onZoomOut,
  onResetView,
  onFullscreenToggle,
  isInsideGraph = false,
  isFullscreen = false
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className={isInsideGraph ? "absolute top-3 left-0 right-0 mx-auto w-11/12 max-w-5xl z-10" : "mb-6"}>
      {/* Mobile toggle button */}
      <button 
        onClick={toggleExpand}
        className="md:hidden w-full flex items-center justify-center bg-gray-800/90 text-white py-2 px-4 rounded-t-xl border border-gray-700/50 mb-[-1px]"
      >
        <Network size={16} className="text-blue-400 mr-2" />
        <span className="text-sm font-medium">
          {isExpanded ? "Hide Controls" : "Show Graph Controls"}
        </span>
        <svg
          className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Modern controls with glassmorphism effect - hidden on mobile unless expanded */}
      <div className={`bg-gray-800/80 backdrop-blur-sm rounded-xl ${isExpanded ? 'rounded-t-none' : ''} p-3 md:p-5 shadow-lg border border-gray-700/50 ${!isExpanded ? 'hidden md:block' : ''}`}>
        
        {/* Top Row: Title and Legend */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Network size={20} className="text-blue-400" />
            <h3 className="text-lg font-medium text-gray-200">Network Visualization</h3>
          </div>
          
          {/* Legend Row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 shadow-glow-blue"></span>
              <span className="text-sm text-gray-300">Management</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 shadow-glow-green"></span>
              <span className="text-sm text-gray-300">Proficiencies</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500 shadow-glow-amber"></span>
              <span className="text-sm text-gray-300">Ops & Design</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500 shadow-glow-purple"></span>
              <span className="text-sm text-gray-300">Dev & Tech</span>
            </div>
            {showProjectsExperiences && (
              <>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 shadow-glow-red"></span>
                  <span className="text-sm text-gray-300">Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-fuchsia-500 shadow-glow-fuchsia"></span>
                  <span className="text-sm text-gray-300">Experience</span>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Bottom Row: Controls - aligned left on mobile */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Show Labels Toggle with Label directly next to it */}
          <div className="flex items-center gap-3">
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                id="showLabels" 
                checked={showAllLabels}
                onChange={(e) => onShowLabelsChange(e.target.checked)}
                className="sr-only"
              />
              <label 
                htmlFor="showLabels" 
                className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${showAllLabels ? 'bg-green-600' : 'bg-red-600'}`}
              >
                <span 
                  className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${showAllLabels ? 'translate-x-4' : 'translate-x-0'}`}
                ></span>
              </label>
            </div>
            <label htmlFor="showLabels" className="text-sm font-medium cursor-pointer flex items-center gap-1.5">
              {showAllLabels ? <Eye size={16} className="text-blue-400" /> : <EyeOff size={16} />}
              <span>{showAllLabels ? 'All labels visible' : 'Show key labels only'}</span>
            </label>
          </div>
          
          {/* Show Projects & Experiences Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input 
                type="checkbox" 
                id="showProjects" 
                checked={showProjectsExperiences}
                onChange={(e) => onShowProjectsExperiencesChange(e.target.checked)}
                className="sr-only"
              />
              <label 
                htmlFor="showProjects" 
                className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${showProjectsExperiences ? 'bg-green-600' : 'bg-red-600'}`}
              >
                <span 
                  className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${showProjectsExperiences ? 'translate-x-4' : 'translate-x-0'}`}
                ></span>
              </label>
            </div>
            <label htmlFor="showProjects" className="text-sm font-medium cursor-pointer flex items-center gap-1.5">
              <Briefcase size={16} className={showProjectsExperiences ? "text-blue-400" : ""} />
              <span>Show Projects & Experience</span>
            </label>
          </div>
          
          {/* Node Spacing - Modern Slider */}
          <div className="flex items-center gap-3 min-w-[180px] flex-1">
            <label htmlFor="nodeSpacing" className="text-sm font-medium whitespace-nowrap">Spacing:</label>
            <div className="w-full">
              <input 
                type="range" 
                id="nodeSpacing"
              min="50" 
              max="200" 
                value={nodeSpacing} 
                onChange={(e) => onSpacingChange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
          
          {/* View Controls - Modern Buttons with enhanced mobile touch targets */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onZoomIn}
              className="p-2 bg-gray-700 hover:bg-gray-600 active:bg-blue-600 rounded-lg text-gray-300 hover:text-white transition-all duration-150 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              aria-label="Zoom in"
              title="Zoom in"
            >
              <ZoomIn size={18} />
            </button>
            <button 
              onClick={onZoomOut}
              className="p-2 bg-gray-700 hover:bg-gray-600 active:bg-blue-600 rounded-lg text-gray-300 hover:text-white transition-all duration-150 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              aria-label="Zoom out"
              title="Zoom out"
            >
              <ZoomOut size={18} />
            </button>
            <button 
              onClick={onResetView}
              className="p-2 bg-gray-700 hover:bg-gray-600 active:bg-blue-600 rounded-lg text-gray-300 hover:text-white transition-all duration-150 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              aria-label="Reset view"
              title="Reset view"
            >
              <RotateCcw size={18} />
            </button>
            <button 
              onClick={onFullscreenToggle}
              className={`p-2 ${isFullscreen ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'} rounded-lg transition-all duration-150 focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              aria-label="Toggle fullscreen"
              title="Toggle fullscreen"
            >
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Instruction text below the panel - hidden on mobile */}
      <div className="hidden md:block text-center text-sm text-gray-400 mt-2">
        Click on nodes to view details. Hover to highlight connections.
      </div>
    </div>
  );
};

export default SkillControls;
