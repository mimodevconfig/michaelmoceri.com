import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Server, Brain, Home, Satellite, CircleUser } from 'lucide-react';
import { getProjectImageUrl } from '../lib/imageUtils';

// Define media types for project detail
export type ProjectMediaItem = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  youtubeUrl?: string; // Only used for video type
};

// Project type definition
type Project = {
  id: string;
  title: string;
  description: string;
  impact: string;
  tech: string[];
  icon: React.ComponentType<any>;
  featured: boolean;
  image: string;
  imageFallback: string;
  detailImages: string[]; // Legacy support
  media?: ProjectMediaItem[];
  liveDemo?: string;
  challenges: string[];
  solution: string;
  futureNotes: string;
};

export const projects = [
  {
    id: 'ai-real-estate-development',
    title: 'AI Real Estate Development',
    description: 'Rapid iteration of legacy and new architectural elevation renderings.',
    impact: 'Over 50X faster and affordable than legacy methods. Leading to new masterplan developments valued over $2B.',
    tech: ['LoRA', 'Image Generation', 'Photoshop', 'Midjourney', 'Flux Dev'],
    icon: Home,
    featured: false,
    image: getProjectImageUrl('ai-real-estate-development', 'cover.jpg'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716',
    // Detail images specific to this project
    detailImages: [],
    challenges: [
      'A legacy library of hand drawn architectural plans spanning from the late 80\'s-2024 that needed to be updated and iterated to modern styling standards.',
      'Working with multiple engineering, architectural, municipal, and senior leadership requirements.'
    ],
    solution: 'There were several projects where we needed to create new architectural renderings for new community master plan developments that needed to adhere to our portfolio of floor-plans, municipal, and senior leadership approval. These master plans range from 50-200+ units of mixed multifamily and single family homes with varying styles and eras of architectural design. I trained a LoRA to intake our plans, legacy renderings, and even hand drawn source material to create an array of new plans and architectural language that fit these new communities. These new plans were completed in record time and budget, which showcases the potential applications and value of this type of process in a proto-digitized business.',
    futureNotes: 'TODO: produce a tutorial, documentation, and video covering the whole process for all stakeholders.'
  },
  {
    id: 'art-config',
    title: 'art.config',
    description: 'Exploring the possibilities between advanced manufacturing, AI generative media creation, and fine art production.',
    impact: 'Launched a NY art gallery, production lab, original works, and newly discovered art production supply/tool chains.',
    tech: ['3D Printing', 'Laser CNC', 'Midjourney', 'Blender', 'Fusion 360', 'Meshmixer', 'Photoshop', 'Dall-e'],
    icon: CircleUser,
    featured: false,
    image: getProjectImageUrl('art-config', 'minerva-green.webp'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968',
    // Detail images specific to this project
    detailImages: ['flower-boy.jpg', 'minerva-green.webp', 'minerva-supports.jpg', 'minerva-pink.webp', 'carbon-fiber-eagle.webp', 'golden-drip.jpg', 'skull-supports.jpg', 'skull.jpg', 'bambu.jpg'],
    challenges: [
      'Setting up two productions labs in NYC and Yonkers, NY with a mixture of technologies, footprint restrictions, and capability requirements.',
      'Co-organizing the build out and launch of Gallery 10 West in Yonkers, NY.',
      'Creating new digital and production workflows to go from AI generated concept to physically produced product.'
    ],
    solution: 'The long held tradition of artists being among the first to fully adopt new mediums and the technologies that enable new modalities of creation was the primary inspiration behind creating "art.config". This venture was the first branded collection of experiments, businesses, and challenges that Config Holdings aims to engage in. In 2022, right after I sold MakerOS, a new 3D printing vendor entered the industry, Bambu Labs, which surprised with it\'s quality and production output beyond anything I had experienced out of the box. So naturally, I backed their Kickstarter to be among the first to grab a machine and right at launch, I bought 12 more machines to be used for this venture. At the same time, I received beta access to ChatGPT, Dall-e, and Midjourney before their official launches. Combining both digital and physical modalities has always been my go-to for product creation and was the third iteration of this process for me with my prior experience with starting art galleries and production studios in Chicago between 2011-2013. art.config still continues as an experimental platform and innovation brand where new methods of creation are formed and then later applied to other ventures and applications.',
    futureNotes: 'Provide documentation and updated branding on this site and other platforms.'
  },
  {
    id: 'ai-osint-platform',
    title: 'AI OSINT Platform',
    description: 'Experimental AI powered open source intelligence platform to identify, understand, and counter disinformation threats.',
    impact: 'Experimental Prototype',
    tech: ['AI', 'OSINT', 'Research'],
    icon: Satellite,
    featured: false,
    image: getProjectImageUrl('ai-osint-platform', 'cover.jpg'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    // Detail images specific to this project
    detailImages: [],
    challenges: [
      'It has never been harder for the general public to determine what is fact, fiction, opinion, helpful, or a hidden threat. Manipulative influence campaigns that drive public and civic action is at an all-time high with consequences beyond most individuals\' or governments\' understanding.'
    ],
    solution: 'Given the nature of this project, please contact for more information.',
    futureNotes: 'Contact for details.'
  },
  {
    id: 'playboy-magazine-cover',
    title: 'Playboy Magazine Cover',
    description: 'Collaborative project with one of the most recognizable brands in the world.',
    impact: 'A one of a kind art piece for the cover of Playboy Magazine.',
    tech: ['3D Printing', 'Blender', 'Custom Materials'],
    icon: CircleUser,
    featured: false,
    image: getProjectImageUrl('playboy-magazine-cover', 'Janeisha-John-Playboy-main.jpg'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1521731978332-9e9e714bdd20',
    // Media items including YouTube video and images
    media: [
      { 
        type: 'video', 
        src: 'https://img.youtube.com/vi/JJmqTVE6Y8I/maxresdefault.jpg',
        alt: 'St. Croix Golden Chest Plate for Playboy Magazine Cover',
        youtubeUrl: 'https://www.youtube.com/embed/JJmqTVE6Y8I'
      },
      {
        type: 'image',
        src: 'Janeisha_John_Playboy_Denmark.jpg',
        alt: 'Janeisha John Playboy Denmark'
      },
      {
        type: 'image',
        src: 'janeisha-john-cover-no-text.jpg',
        alt: 'Janeisha John Cover without text'
      },
      {
        type: 'image',
        src: 'janeisha-instagram.jpg',
        alt: 'Janeisha Instagram'
      },
      {
        type: 'image',
        src: 'chestplate-gif.gif',
        alt: 'Chestplate GIF'
      }
    ],
    // Keeping detailImages for backward compatibility
    detailImages: [],
    challenges: [
      'The project involved collaboration with internationally acclaimed creative director Aria Garcia, Playboy, and TV personality Janeisha John. The concept required the customized design and fabrication of a golden chest-plate crafted in the shape of St. Croix, an island in the U.S. Virgin Islands.'
    ],
    solution: 'To ensure precision in fit and function, we began by conducting a 3D scan of Janeisha\'s torso, capturing accurate body dimensions. I then utilized an SVG image of St. Croix and employed a "wrap simulation" technique in Blender to shape the chest plate perfectly to Janeisha\'s form. The plate was 3D printed in three distinct segments with my Bambu Lab machines. Afterward, these components were fused seamlessly together, and I applied a custom coating mixture of UV-curable resin and ceramic powder, creating a durable and smooth outer surface. To achieve the golden finish, I carefully applied genuine 23k gold leaf, sealing it with an additional protective clear coat of UV-curable resin. The finalized piece was proudly showcased by Janeisha on the cover of Playboy. This project represented much more than an opportunity to secure another magazine cover—it allowed me to demonstrate and enhance my skills in creative design, advanced fabrication techniques, project management, and effective collaborating with a highly experienced creative professional. Furthermore, I appreciated the impact that this publication had in highlighting the vibrant culture and significance of the Virgin Islands, notably St. Croix, to a broader audience.',
    futureNotes: 'N/A'
  },
  {
    id: '3d-printing-calculator',
    title: '3D Printing Pricing Calculator',
    description: 'An accurate and intuitive 3D printing pricing tool with hobbyist, small business, and enterprise levels of complexity.',
    impact: 'Thousands of users, and $Millions worth of projects quoted',
    tech: ['Bolt.diy', 'Cline', 'Tailwind', 'React', 'Supabase', 'Netlify', 'Stripe', '3.7 Sonnet', 'HubSpot'],
    icon: Calculator,
    featured: true,
    image: getProjectImageUrl('3d-printing-calculator', '3d-printing-calculator-main.webp'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
    // For backward compatibility
    detailImages: ['3d-printing-calculator-main.webp', '3d-printing-calculator-cost-breakdown.webp', '3d-printing-calculator-machine-costs.webp', '3d-printing-calculator-post-processing.webp', '3d-printing-calculator-labor-facility.webp', '3d-printing-calculator-margins.webp'],
    liveDemo: 'https://mimo-3dp-calc.netlify.app/',
    challenges: [
      'First example of a deployable and monetizable web application using AI coding workflows and agents.',
      'A custom Supabase connection for persistent user data across HubSpot and Stripe.',
      'Configuring a custom version of Bolt.diy with a larger context window and extended token outputs with Claude 3.7 API.'
    ],
    solution: 'Distilling my years worth of pricing methodologies learned from my career in 3D printing into an accessible and freemium product that enable those who charge for their 3D printing projects a way to demystify and learn a proven framework for commercializing their services. The platform allows a user to choose from multiple technologies and levels of complexity which dynamically adapt the pricing algorithm, save multiple projects, and more.',
    futureNotes: 'Direct integration with slicer software including Orca Slicer/Bambu post processing scripts. Invoice creation and payment gateways with Stripe, PayPal, and others. Added pricing methods such as project based pricing with multiple parts, per build pricing, and production curve planning.'
  },
  {
    id: 'local-ai-inference-server',
    title: 'Local AI Inference Server',
    description: 'A local AI application development server and network in my lab with custom configured hardware and software stack.',
    impact: 'Fast local AI inference and development environment',
    tech: ['Threadripper PRO', '4x RTX 3090FE', '10G Networking', 'NAS', 'CUDA', 'Ollama'],
    icon: Server,
    featured: true,
    image: getProjectImageUrl('local-ai-inference-server', 'cover.jpg'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    // Detail images specific to this project
    detailImages: [],
    challenges: [
      'Hardware sourcing; finding water blocks and loop components to cool the x4 Nvidia RTX 3090 Founder\'s Edition GPUs, 128GB of fast 6400 MT/s ram, 5GHz Threadripper PRO 32 core/64 thread processor, gen 5 nvme, and dual 1600 watt PSUs, NVLINK bridges for the GPUs.',
      'Custom 30amp circuit installation to handle the full load and future expansion of the system and accessories.',
      'Configuring and storing LLMs is data and bandwidth intensive which requires very fast caching, storage, and networking.',
      'The rapidly evolving AI application development landscape requires constant development environment configuration tweaking, optimizations, and experimentation.'
    ],
    solution: 'When building this machine, I envisioned having the ability to run local AI models, agents, and workflows in connection with cloud hosted solutions to enable myself to fully develop applications from the ground up. But the real purpose was to take advantage of the this opportunity to grant myself the experience to grasp the knowledge and experience to lead future AI enabled projects. Ground up hardware system configuration and understanding the bottlenecks, nuances, and trends which enable these applications to operate effectively. Development environment configuration through deep research and experimentation with various tools such as Ollama, Open WebUI, RAG pipelines, N8N, Bolt.diy, and more. Various AI model frameworks experimentation such as custom distilled llama 3.3 CoT thinking models, vision models, embedding models, image models such as Flux, and embedding them into application development pipelines, tools, apps, open source project projects, and more.',
    futureNotes: 'Upgrade and expand GPU array with L40s or GDDR7 equivalent for larger models, context, and faster inference.'
  },
  {
    id: 'ai-research-platform',
    title: 'AI Research Platform',
    description: 'Exploring and prototyping agentic human in the loop workflows to define, research, and crowdsource problem solving.',
    impact: 'Prototype Phase',
    tech: ['MCP', 'RAG', 'Vector DB', 'React', 'Tailwind', 'Ollama', 'VLLM', 'Bolt.diy'],
    icon: Brain,
    featured: true,
    image: getProjectImageUrl('ai-research-platform', 'ai-research-platform-main.webp'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1',
    // Detail images specific to this project
    detailImages: ['ai-research-platform-main.webp', 'ai-research-platform-problem.webp', 'ai-research-platform-settings.webp'],
    liveDemo: 'https://mimo-research.netlify.app/',
    challenges: [
      'Tools like OpenAI "Deep Research", are limited in their scope and practicality when it comes to organizing, connecting, and interacting with research.',
      'A plethora of libraries and packages that are in their infancy and constantly changing to try to keep up and experiment with. Vetting early tech and ideas to apply their promised potential is a fun puzzle to solve while trying to remain objective and strategic.',
      'UX research and discovery'
    ],
    solution: 'Still in active stealth prototyping mode. Contact for more info...',
    futureNotes: 'Currently in prototyping phase; future release coming soon...'
  }
];

export default function Projects() {
  // Function to handle image errors and use fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackSrc) {
      target.src = fallbackSrc;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From AI-powered tools to custom hardware solutions, delivering innovative projects that solve real-world problems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => project.featured).map((project, index) => (
            <Link
              to={`/project/${project.id}`}
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden relative">
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
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-sm font-medium">Live Demo</span>
                    </div>
                  </div>
                )}
                {project.media && project.media.some(item => item.type === 'video') && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-black/40 dark:bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                      <span className="text-sm font-medium">Watch Video</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <project.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="text-green-600 dark:text-green-400 font-semibold">
                    Impact: {project.impact}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link 
            to="/projects"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-white text-white bg-transparent hover:bg-white hover:text-gray-900 h-10 py-2 px-4"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
