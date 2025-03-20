import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag, TagsIcon, Star, SlidersHorizontal, Blocks } from 'lucide-react';
import { projects } from './Projects';
import { getProjectImageUrl } from '../lib/imageUtils';

// Extract all unique tech items to use as tags
const allTags = Array.from(
  new Set(
    projects.flatMap(project => project.tech)
  )
).sort();

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Function to handle image errors and use fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackSrc) {
      target.src = fallbackSrc;
    }
  };

  // Categories are main areas or types of projects
  const categories = [
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI & Machine Learning' },
    { id: 'hardware', name: 'Hardware & Infrastructure' },
    { id: 'manufacturing', name: '3D Printing & Manufacturing' }
  ];

  // Filter projects based on search, category, and tag
  useEffect(() => {
    let result = [...projects];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.tech.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      // Apply category filtering logic
      // For now, using a simple includes check. In a real implementation,
      // you would have proper category assignments in the project data
      result = result.filter(project => {
        if (selectedCategory === 'web') {
          return project.tech.some(t => 
            ['React', 'Tailwind', 'Netlify', 'Supabase'].includes(t)
          );
        } else if (selectedCategory === 'ai') {
          return project.tech.some(t => 
            ['Cline', 'RAG', 'Vector DB', 'Ollama', 'VLLM', 'Bolt.diy'].includes(t)
          );
        } else if (selectedCategory === 'hardware') {
          return project.tech.some(t => 
            ['Threadripper PRO', 'RTX 3090FE', '10G Networking', 'NAS', 'CUDA'].includes(t)
          );
        } else if (selectedCategory === 'manufacturing') {
          return project.id.includes('3d-printing');
        }
        return true;
      });
    }
    
    // Filter by tag
    if (selectedTag) {
      result = result.filter(project => 
        project.tech.includes(selectedTag)
      );
    }
    
    setFilteredProjects(result);
  }, [searchQuery, selectedCategory, selectedTag]);

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTag('');
  };

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore all my projects from AI-powered tools to custom hardware solutions, delivering innovative solutions that solve real-world problems.
          </p>
        </div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Star className="w-5 h-5 mr-2 text-yellow-500" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <Link
                  key={`featured-${index}`}
                  to={`/project/${project.id}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => handleImageError(e, project.imageFallback)}
                    />
                    {project.liveDemo && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-black/40 dark:bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          <span className="text-sm font-medium">Live Demo</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <project.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Blocks className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            All Projects
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with Filters */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              {/* Search Box with Filter Icon for Mobile */}
              <div className="relative flex items-center">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full bg-gray-100 dark:bg-gray-700 rounded-md pl-10 pr-12 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                {/* Mobile Filter Button */}
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </button>
              </div>
              
              {(searchQuery || selectedCategory || selectedTag) && (
                <div className="mt-3 flex justify-between items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {filteredProjects.length} results
                  </div>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Categories */}
            <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <TagsIcon className="w-4 h-4 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(
                      selectedCategory === category.id ? '' : category.id
                    )}
                    className={`block w-full text-left px-2 py-1.5 rounded text-sm ${
                      selectedCategory === category.id
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Tags */}
            <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(
                      selectedTag === tag ? '' : tag
                    )}
                    className={`px-2 py-1 rounded-full text-xs ${
                      selectedTag === tag
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Filter Modal */}
            {isFilterOpen && (
              <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 m-4 max-w-sm w-full max-h-[80vh] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
                    <button onClick={() => setIsFilterOpen(false)} className="text-gray-500 hover:text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Mobile Categories */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                      <TagsIcon className="w-4 h-4 mr-2" />
                      Categories
                    </h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(
                            selectedCategory === category.id ? '' : category.id
                          )}
                          className={`block w-full text-left px-2 py-1.5 rounded text-sm ${
                            selectedCategory === category.id
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mobile Tags */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                      <Tag className="w-4 h-4 mr-2" />
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(
                            selectedTag === tag ? '' : tag
                          )}
                          className={`px-2 py-1 rounded-full text-xs ${
                            selectedTag === tag
                              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      onClick={resetFilters}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      Reset filters
                    </button>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Content - Project Grid */}
          <div className="lg:w-3/4">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <Link
                    key={index}
                    to={`/project/${project.id}`}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-transform hover:scale-105"
                  >
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, project.imageFallback)}
                      />
                      {project.liveDemo && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-black/40 dark:bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-medium">Live Demo</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <project.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                      <div className="text-green-600 dark:text-green-400 text-sm font-medium mb-3">
                        Impact: {project.impact}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                  onClick={resetFilters}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
