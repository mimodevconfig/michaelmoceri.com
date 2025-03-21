import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Tag, TagsIcon, Star, Play, X } from 'lucide-react';
import { projects, ProjectMediaItem } from './Projects';
import { getProjectImageUrl } from '../lib/imageUtils';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Find current project and its index
  const currentIndex = projects.findIndex(p => p.id === slug);
  const project = projects[currentIndex];
  
  // Calculate previous and next project indices
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
  const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
  
  // Get previous and next projects
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  // Get featured projects for sidebar
  const featuredProjects = projects.filter(p => p.featured && p.id !== project?.id).slice(0, 3);

  // State for gallery, lightbox and video modal
  const [mediaItems, setMediaItems] = useState<ProjectMediaItem[]>([]);
  const [selectedVideoMedia, setSelectedVideoMedia] = useState<ProjectMediaItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Reset media-related state when project changes
  useEffect(() => {
    // Clear media items, selected media, and close modals when project changes
    setMediaItems([]);
    setSelectedVideoMedia(null);
    setIsVideoModalOpen(false);
    setLightboxOpen(false);
    
    if (!project) return;
    
    // Set a small timeout to ensure clean state transition
    const timer = setTimeout(() => {
      if (project.media) {
        // Use the new media format but make sure it's properly typed
        setMediaItems(project.media as ProjectMediaItem[]);
      } else if (project.detailImages && project.detailImages.length > 0) {
        // Convert old detailImages to new format
        const convertedMedia: ProjectMediaItem[] = project.detailImages.map(img => ({
          type: 'image' as 'image', // Explicitly type as 'image'
          src: img,
          alt: `${project.title} detail`
        }));
        setMediaItems(convertedMedia);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [project?.id]); // Depend on project ID instead of the entire project object

  // Prepare slides for lightbox library
  const lightboxSlides = mediaItems
    .filter(item => item.type === 'image')
    .map(item => ({
      src: getProjectImageUrl(project?.id || '', item.src),
      alt: item.alt
    }));

  // Scroll to top when component mounts or when the URL changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!project) return; // Don't set up keyboard navigation if no project is found
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigate(`/project/${prevProject.id}`);
      } else if (e.key === 'ArrowRight') {
        navigate(`/project/${nextProject.id}`);
      } else if (e.key === 'Escape' && isVideoModalOpen) {
        setIsVideoModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, prevProject?.id, nextProject?.id, project, isVideoModalOpen]);

  // Function to handle image errors and use fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackSrc) {
      target.src = fallbackSrc;
    }
  };

  // Function to handle navigation to all projects page
  const handleViewAllProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/projects');
  };

  // Extract unique categories from project tech
  const getCategories = () => {
    const categories = [
      { id: 'web', name: 'Web Development', matches: ['React', 'Tailwind', 'Netlify', 'Supabase'] },
      { id: 'ai', name: 'AI & Machine Learning', matches: ['Cline', 'RAG', 'Vector DB', 'Ollama', 'VLLM', 'Bolt.diy'] },
      { id: 'hardware', name: 'Hardware', matches: ['Threadripper PRO', 'RTX 3090FE', '10G Networking', 'NAS', 'CUDA'] },
      { id: 'manufacturing', name: '3D Printing', matches: ['3D Printing'] }
    ];
    
    return categories.filter(category => 
      project?.tech.some(tech => category.matches.includes(tech) || project.id.includes(category.id))
    );
  };

  // Handle media item click
  const handleMediaClick = (item: ProjectMediaItem, index: number) => {
    if (item.type === 'video' && item.youtubeUrl) {
      setSelectedVideoMedia(item);
      setIsVideoModalOpen(true);
    } else {
      // Find index among image-only items
      const imageOnlyIndex = mediaItems
        .filter(m => m.type === 'image')
        .findIndex(m => m === item);
      
      setLightboxIndex(imageOnlyIndex >= 0 ? imageOnlyIndex : 0);
      setLightboxOpen(true);
    }
  };

  if (!project) {
    console.log("Project not found with slug:", slug);
    console.log("Available projects:", projects.map(p => p.id));
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <a 
            href="/projects" 
            onClick={handleViewAllProjects}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            View all Projects
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 pt-24">
      <div className="container mx-auto px-4">
        <a 
          href="/projects" 
          onClick={handleViewAllProjects}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          View all Projects
        </a>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e, project.imageFallback)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <project.icon className="w-8 h-8" />
                      <h1 className="text-2xl sm:text-3xl font-bold">{project.title}</h1>
                    </div>
                    <p className="text-white/80 max-w-2xl">{project.description}</p>
                  </div>
                </div>
                
                {/* Buttons positioned absolutely in the top right */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-black/40 dark:bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-white flex items-center gap-2 hover:bg-black/60 transition-colors"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span>Launch Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  
                  {/* Watch Video Button */}
                  {mediaItems.some(item => item.type === 'video') && (
                    <button 
                      onClick={() => {
                        const videoMedia = mediaItems.find(item => item.type === 'video');
                        if (videoMedia) {
                          setSelectedVideoMedia(videoMedia);
                          setIsVideoModalOpen(true);
                        }
                      }}
                      className="bg-black/40 dark:bg-black/60 backdrop-blur-sm rounded-full px-4 py-2 text-white flex items-center gap-2 hover:bg-black/60 transition-colors"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span>Watch Video</span>
                      <Play className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              
              {/* Media gallery (images and videos) */}
              {mediaItems.length > 0 && (
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {mediaItems.map((item, index) => (
                      <div 
                        key={index} 
                        className="h-24 overflow-hidden rounded-lg cursor-pointer relative"
                        onClick={() => handleMediaClick(item, index)}
                      >
                        <img 
                          src={item.type === 'image' 
                            ? getProjectImageUrl(project.id, item.src) 
                            : item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          onError={(e) => handleImageError(e, project.imageFallback)}
                        />
                        
                        {/* Play button overlay for videos */}
                        {item.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Lightbox for images */}
              <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={lightboxSlides}
                plugins={[Zoom]}
                zoom={{
                  maxZoomPixelRatio: 5,
                  zoomInMultiplier: 2,
                  doubleTapDelay: 300,
                  doubleClickDelay: 300,
                  scrollToZoom: true
                }}
                carousel={{
                  finite: false,
                  preload: 2
                }}
                controller={{ closeOnBackdropClick: true }}
                styles={{
                  container: { backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(8px)' },
                  root: { backdropFilter: 'blur(8px)' }
                }}
                animation={{ fade: 300 }}
              />
              
              {/* Modal for videos - click anywhere outside to close */}
              {isVideoModalOpen && selectedVideoMedia && selectedVideoMedia.youtubeUrl && (
                <div 
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  onClick={() => setIsVideoModalOpen(false)}
                >
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={() => setIsVideoModalOpen(false)}
                      className="text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div 
                    className="max-w-4xl w-full"
                    onClick={(e) => e.stopPropagation()} // Prevent clicks on video from closing modal
                  >
                    <div className="relative pb-[56.25%] h-0 overflow-hidden">
                      <iframe 
                        src={selectedVideoMedia.youtubeUrl}
                        title={selectedVideoMedia.alt}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Impact</h2>
                    <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg">
                      {project.impact}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Challenges Faced</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Solution</h2>
                    <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Future Development</h2>
                    <p className="text-gray-600 dark:text-gray-400">{project.futureNotes}</p>
                  </section>
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Link 
                to={`/project/${prevProject.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Previous Project</div>
                  <div className="font-medium text-gray-900 dark:text-white">{prevProject.title}</div>
                </div>
              </Link>
              
              <Link 
                to={`/project/${nextProject.id}`}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center justify-end gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Next Project</div>
                  <div className="font-medium text-gray-900 dark:text-white">{nextProject.title}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </Link>
            </div>

            {/* Mobile-friendly swipe navigation hint */}
            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 md:hidden">
              <p>Use left/right arrow keys to navigate between projects</p>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <TagsIcon className="w-4 h-4 mr-2" />
                Categories
              </h3>
              <div className="space-y-2">
                {getCategories().map((category) => (
                  <Link
                    key={category.id}
                    to={`/projects?category=${category.id}`}
                    className="block w-full text-left px-2 py-1.5 rounded text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold mb-3 flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <Link
                    key={tag}
                    to={`/projects?tag=${tag}`}
                    className="px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  Featured Projects
                </h3>
                <div className="space-y-3">
                  {featuredProjects.map((featuredProject) => (
                    <Link
                      key={featuredProject.id}
                      to={`/project/${featuredProject.id}`}
                      className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    >
                      <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={featuredProject.image} 
                          alt={featuredProject.title}
                          className="w-full h-full object-cover"
                          onError={(e) => handleImageError(e, featuredProject.imageFallback)}
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm leading-tight">
                          {featuredProject.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mt-1 line-clamp-2">
                          {featuredProject.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
