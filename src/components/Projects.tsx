import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Server, Brain } from 'lucide-react';
import { getProjectImageUrl } from '../lib/imageUtils';

export const projects = [
  {
    id: '3d-printing-calculator',
    title: '3D Printing Pricing Calculator',
    description: 'An accurate and intuitive 3D printing pricing tool with hobbyist, small business, and enterprise levels of complexity.',
    impact: 'Thousands of users, and $Millions worth of projects quoted',
    tech: ['Bolt.diy', 'React', 'Supabase', 'Netlify', 'Stripe', '3.7 Sonnet', 'HubSpot'],
    icon: Calculator,
    image: getProjectImageUrl('3d-printing-calculator', 'cover.jpg'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
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
    image: getProjectImageUrl('local-ai-inference-server', 'cover.jpg'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
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
    title: 'AI Research Platform (Unnamed)',
    description: 'Exploring and prototyping agentic human in the loop workflows to define, research, and crowdsource problem solving.',
    impact: 'Stealth Prototype',
    tech: ['MCP', 'RAG', 'Vector DB', 'React', 'Tailwind', 'Ollama', 'VLLM', 'Bolt.diy'],
    icon: Brain,
    image: getProjectImageUrl('ai-research-platform', 'cover.jpg'),
    // Fallback to Unsplash image if the local image doesn't exist yet
    imageFallback: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1',
    challenges: [
      'Tools like OpenAI "Deep Research", are limited in their scope and practicality when it comes to organizing, connecting, and interacting with research.',
      'A plethora of libraries and packages that are in their infancy and constantly changing to try to keep up and experiment with. Vetting early tech and ideas to apply their promised potential is a fun puzzle to solve while trying to remain objective and strategic.',
      'UX research and discovery'
    ],
    solution: 'Still in active stealth prototyping mode. Contact for more info...',
    futureNotes: 'N/A'
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
          {projects.map((project, index) => (
            <Link
              to={`/project/${project.id}`}
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => handleImageError(e, project.imageFallback)}
                />
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
      </div>
    </section>
  );
}
