import { NodeType } from './types';

// Colors for different node types
export const nodeColors: Record<NodeType, string> = {
  management: '#3b82f6', // blue
  proficiency: '#10b981', // green
  opsDesign: '#f59e0b', // amber
  devTech: '#8b5cf6', // purple
  categoryManagement: '#3b82f6', // blue (same as management)
  categoryProficiency: '#10b981', // green (same as proficiency)
  categoryOpsDesign: '#f59e0b', // amber (same as opsDesign)
  categoryDevTech: '#8b5cf6', // purple (same as devTech)
  categoryProject: '#ef4444', // red (same as project)
  categoryExperience: '#d946ef', // fuchsia (same as experience)
  category: '#6b7280', // gray - fallback
  aiTech: '#ec4899', // pink
  fabrication: '#f97316', // orange
  project: '#ef4444', // red
  experience: '#d946ef', // fuchsia
};

// Project data
export const projects = [
  'ai-research-platform',
  'ai-osint-platform',
  'ai-real-estate-development',
  '3d-printing-calculator',
  'local-ai-inference-server',
  'crypto-datacenter-farm',
  'art-config',
  'playboy-magazine-cover',
  'fabrication-labs',
  'sustainable-3d-printing-challenge',
  '100mm-art-foundation'
];

// Experience data
export const experiences = [
  'Config Holdings: Founder (2022-Present)',
  'Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)',
  'Shapeways: Head of Software GTM (2022-2023)',
  'Shapeways: Director of Product, Strategy, and Co-Innovation (2022-2023)',
  'MakerOS: Founder & CEO (2018-2022)',
  'Manulith: Founder & CEO (2014-2018)',
  '3DPX: Co-Founder (2012-2014)'
];

// Node descriptions
export const nodeDescriptions: Record<string, string> = {
  // Projects
  'ai-research-platform': 'AI research platform for conducting experiments with various language models and methodologies.',
  'ai-osint-platform': 'Open Source Intelligence platform leveraging AI to gather and analyze publicly available information.',
  'ai-real-estate-development': 'AI-powered real estate development planning and visualization tool.',
  '3d-printing-calculator': 'Cost estimation tool for 3D printing projects with detailed breakdown of expenses.',
  'local-ai-inference-server': 'Self-hosted server for running AI inference locally without relying on cloud services.',
  'crypto-datacenter-farm': 'Cryptocurrency mining and storage datacenter farm optimized for energy efficiency.',
  'art-config': 'Platform for configuring and customizing 3D printed art pieces.',
  'playboy-magazine-cover': 'Design project for creating a Playboy magazine cover with 3D printed elements.',
  'fabrication-labs': 'Design and implementation of fabrication laboratories for manufacturing.',
  'sustainable-3d-printing-challenge': 'Project focused on developing sustainable practices for 3D printing.',
  '100mm-art-foundation': 'Foundation supporting art initiatives with technology integration.',
  
  // Experiences
  'Config Holdings: Founder (2022-Present)': 'Technology holding company focused on AI, fabrication, and design. Responsibilities include strategic direction, technology research, and business development.',
  'Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)': 'Led digital transformation, IT infrastructure, and marketing strategies for a luxury real estate development company.',
  'Shapeways: Head of Software GTM (2022-2023)': 'Responsible for go-to-market strategy for Shapeways\' software division, focusing on 3D printing workflow solutions.',
  'Shapeways: Director of Product, Strategy, and Co-Innovation (2022-2023)': 'Directed product strategy and collaborative innovation initiatives with partners in the 3D printing industry.',
  'MakerOS: Founder & CEO (2018-2022)': 'Founded and led a company providing business management software for digital fabrication businesses, from product development to growth.',
  'Manulith: Founder & CEO (2014-2018)': 'Established and managed a digital manufacturing company specializing in 3D printing services and product development.',
  '3DPX: Co-Founder (2012-2014)': 'Co-founded an early-stage 3D printing service bureau, establishing operations and technical infrastructure.',
  
  // Management Skills
  'Strategic planning': 'Setting long-term objectives and determining actions to achieve organizational goals.',
  'Business model development': 'Creating a framework for how an organization creates, delivers, and captures value.',
  'Fundraising': 'Securing financial resources from investors, grants, or other sources.',
  'Revenue Operations': 'Aligning sales, marketing, and customer success to drive growth.',
  'GTM strategy development': 'Planning for how a product reaches its target market.',
  'Team development and recruiting': 'Building and growing effective teams through hiring and professional development.',
  'Vision and purpose development': 'Defining the core mission and long-term aspirations of an organization.',
  'Product road mapping': 'Planning the evolution of products with strategic prioritization.',
  'Product management': 'Overseeing a product\'s development lifecycle from conception to launch.',
  'IT management': 'Overseeing technology infrastructure, systems, and resources.',
  
  // Proficiencies
  'Software and hardware development': 'Creating and implementing both digital solutions and physical computing systems.',
  'UI/UX design': 'Creating intuitive, efficient, and enjoyable user interfaces and experiences.',
  '3D printing': 'Additive manufacturing technology that creates physical objects from digital designs.',
  'Machine design': 'Engineering mechanical systems for specific applications and environments.',
  'Multi-agent AI powered workflows': 'Systems where multiple AI agents collaborate to complete complex tasks.',
  'Automation development': 'Creating systems that operate with minimal human intervention.',
  'Network engineering and management': 'Designing, implementing, and maintaining computer networks.',
  'Sales and marketing automation': 'Using technology to automate sales and marketing processes.',
  'Photo & video editing': 'Manipulating visual media to achieve desired creative or technical outcomes.',
  'Local AI hosting': 'Deploying AI models on local infrastructure rather than cloud services.',
  'High-end server building': 'Assembling powerful computing systems for demanding workloads.',
  
  // Dev & Tech Tools
  'Docker': 'Platform for developing, shipping, and running applications in containers.',
  'RAG pipelines': 'Retrieval-Augmented Generation systems that combine search with generative AI.',
  'Vector DB': 'Databases optimized for storing and querying vector embeddings.',
  'LoRA': 'Low-Rank Adaptation, an efficient fine-tuning method for large language models.',
  'Node.js': 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
  'React': 'JavaScript library for building user interfaces.',
  'Tailwind': 'Utility-first CSS framework for rapid UI development.',
  'Supabase': 'Open source Firebase alternative with PostgreSQL database.',
  'Ollama': 'Tool for running large language models locally.',
  'Open WebUI': 'Web interface for interacting with locally-hosted AI models.',
  'Bolt.DIY': 'Local AI development environment.',
  'Groq': 'High-performance AI inference platform.',
  
  // Ops & Design Tools
  'HubSpot Enterprise': 'Comprehensive CRM platform for marketing, sales, and customer service.',
  'Google Ads': 'Google\'s online advertising platform for creating and managing digital ad campaigns.',
  'Meta Ads': 'Facebook/Instagram advertising platform for social media marketing.',
  'Photoshop': 'Adobe\'s professional image editing and manipulation software.',
  'Illustrator': 'Adobe\'s vector graphics editor for creating illustrations and designs.',
  'Adobe XD': 'Adobe\'s user experience design tool for websites and mobile apps.',
  'Figma': 'Collaborative interface design tool for UI/UX design and prototyping.',
  'Premier Pro': 'Adobe\'s video editing software for professional video production.',
  'ChatGPT': 'Conversational AI model by OpenAI for text generation and assistance.',
  'Midjourney': 'AI image generation platform for creating art from text prompts.',
  'RunwayML': 'Creative toolkit with AI capabilities for content creation and editing.',
  'G-Suite': 'Google\'s collection of cloud computing, productivity and collaboration tools.',
  'MS 365 Suite': 'Microsoft\'s subscription service offering Office applications and cloud services.',
  'Squarespace': 'Website builder and hosting platform with pre-designed templates.',
  'Wordpress': 'Open-source content management system for building websites and blogs.',
  'Wix': 'Cloud-based web development platform for creating HTML5 websites and mobile sites.',
  '"Vibe Coding"': 'A creative approach to coding that emphasizes intuition and aesthetics.',
  
  // Additional Dev & Tech Tools
  'VS Code': 'Visual Studio Code, a lightweight but powerful source code editor.',
  'Replit': 'Browser-based integrated development environment for coding and collaboration.',
  'Git': 'Distributed version control system for tracking changes in source code.',
  'n8n': 'Workflow automation tool that connects various apps and services.',
  'OpenAI API': 'API for accessing OpenAI\'s large language models and AI capabilities.',
  'Anthropic API': 'API for accessing Anthropic\'s Claude AI models and text generation capabilities.',
  'Gemini API': 'API for accessing Google\'s Gemini AI models for multimodal tasks and text generation.',
  'Obsidian.md': 'Knowledge base application working on top of a local folder of Markdown files.',
  'Ubiquiti/Unifi hardware and software stack': 'Enterprise networking equipment and management software.',
  'Atlassian suite': 'Collection of tools including Jira, Confluence, and Bitbucket for software development and project management.',
  'Autodesk Fusion 360': '3D CAD, CAM, and CAE software for product design and manufacturing.',
  'Netfabb': 'Software for additive manufacturing and 3D printing preparation.',
  '3D printing slicers': 'Software that converts 3D models into printing instructions for 3D printers.',
  'FDM/SLA/SLS/DLP/DMLS 3D printing': 'Various 3D printing technologies for different materials and applications.'
};

// Project relationships
export const nodeToProjects: Record<string, string[]> = {
  // Management Skills
  'Strategic planning': ['ai-research-platform', 'crypto-datacenter-farm', 'fabrication-labs'],
  'Business model development': ['3d-printing-calculator', 'crypto-datacenter-farm', 'fabrication-labs'],
  'Fundraising': ['crypto-datacenter-farm', '100mm-art-foundation'],
  'Team development and recruiting': ['ai-research-platform', 'fabrication-labs'],
  'Vision and purpose development': ['ai-research-platform', '100mm-art-foundation'],
  'Product road mapping': ['3d-printing-calculator', 'ai-research-platform'],
  'Product management': ['3d-printing-calculator', 'ai-research-platform'],
  'IT management': ['crypto-datacenter-farm', 'local-ai-inference-server'],
  
  // Dev & Tech Tools
  'Docker': ['ai-research-platform', 'local-ai-inference-server'],
  'RAG pipelines': ['ai-research-platform', 'ai-osint-platform'],
  'Vector DB': ['ai-research-platform', 'ai-osint-platform'],
  'LoRA': ['ai-real-estate-development'],
  'React': ['3d-printing-calculator', 'ai-research-platform'],
  'Tailwind': ['3d-printing-calculator', 'ai-research-platform'],
  'Supabase': ['3d-printing-calculator'],
  'OpenAI API': ['ai-research-platform', '3d-printing-calculator', 'ai-osint-platform'],
  'Anthropic API': ['ai-research-platform', 'ai-osint-platform'],
  'Gemini API': ['ai-research-platform'],
  'Ollama': ['local-ai-inference-server', 'ai-research-platform'],
  'VS Code': ['3d-printing-calculator', 'ai-research-platform', 'ai-osint-platform'],
  'Git': ['ai-research-platform', '3d-printing-calculator'],
  'Node.js': ['3d-printing-calculator', 'ai-research-platform'],
  
  // Proficiencies
  'Software and hardware development': ['ai-research-platform', 'local-ai-inference-server', 'crypto-datacenter-farm'],
  '3D printing': ['art-config', 'playboy-magazine-cover', 'fabrication-labs', 'sustainable-3d-printing-challenge'],
  'Network engineering and management': ['crypto-datacenter-farm', 'local-ai-inference-server'],
  'High-end server building': ['crypto-datacenter-farm', 'local-ai-inference-server'],
  'Machine design': ['fabrication-labs', 'sustainable-3d-printing-challenge'],
  'UI/UX design': ['3d-printing-calculator', 'ai-research-platform'],
  'Multi-agent AI powered workflows': ['ai-research-platform', 'ai-osint-platform'],
  'Automation development': ['ai-research-platform', 'local-ai-inference-server'],
  
  // Ops & Design Tools
  'Midjourney': ['ai-real-estate-development', 'art-config'],
  'Figma': ['3d-printing-calculator', 'ai-research-platform'],
  'ChatGPT': ['ai-research-platform', 'ai-osint-platform'],
  'Photoshop': ['playboy-magazine-cover', 'art-config'],
  'Illustrator': ['playboy-magazine-cover', 'art-config']
};

// Experience relationships
export const nodeToExperience: Record<string, string[]> = {
  // Management Skills
  'Strategic planning': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)', 'Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)'],
  'Business model development': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)', 'Manulith: Founder & CEO (2014-2018)'],
  'Fundraising': ['MakerOS: Founder & CEO (2018-2022)', 'Config Holdings: Founder (2022-Present)', 'Manulith: Founder & CEO (2014-2018)'],
  'Revenue Operations': ['Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)', 'Shapeways: Head of Software GTM (2022-2023)', 'MakerOS: Founder & CEO (2018-2022)'],
  'GTM strategy development': ['Shapeways: Head of Software GTM (2022-2023)', 'MakerOS: Founder & CEO (2018-2022)', 'Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)'],
  'Team development and recruiting': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)', 'Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)', 'Manulith: Founder & CEO (2014-2018)', 'Shapeways: Director of Product, Strategy, and Co-Innovation (2022-2023)'],
  'Vision and purpose development': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)', 'Manulith: Founder & CEO (2014-2018)'],
  'Product road mapping': ['MakerOS: Founder & CEO (2018-2022)', 'Shapeways: Director of Product, Strategy, and Co-Innovation (2022-2023)'],
  'Product management': ['Shapeways: Director of Product, Strategy, and Co-Innovation (2022-2023)', 'MakerOS: Founder & CEO (2018-2022)'],
  'IT management': ['Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)', 'Config Holdings: Founder (2022-Present)'],
  
  // Proficiencies
  'Software and hardware development': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)', 'Manulith: Founder & CEO (2014-2018)'],
  'UI/UX design': ['MakerOS: Founder & CEO (2018-2022)', 'Config Holdings: Founder (2022-Present)'],
  '3D printing': ['3DPX: Co-Founder (2012-2014)', 'Manulith: Founder & CEO (2014-2018)', 'Config Holdings: Founder (2022-Present)'],
  'Machine design': ['Manulith: Founder & CEO (2014-2018)', 'Config Holdings: Founder (2022-Present)'],
  'Multi-agent AI powered workflows': ['Config Holdings: Founder (2022-Present)'],
  'Automation development': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)'],
  'Network engineering and management': ['Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)', 'Config Holdings: Founder (2022-Present)'],
  'Sales and marketing automation': ['MakerOS: Founder & CEO (2018-2022)', 'Shapeways: Head of Software GTM (2022-2023)', 'Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)'],
  'Photo & video editing': ['Config Holdings: Founder (2022-Present)'],
  'Local AI hosting': ['Config Holdings: Founder (2022-Present)'],
  'High-end server building': ['Config Holdings: Founder (2022-Present)'],
  
  // Ops & Design Tools
  'HubSpot Enterprise': ['Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)'],
  'Google Ads': ['Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)', 'Shapeways: Head of Software GTM (2022-2023)'],
  'Meta Ads': ['Moceri Companies: VP of Real Estate Development, IT, & Marketing (2023-2024)', 'Shapeways: Head of Software GTM (2022-2023)'],
  'Figma': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)'],
  'Adobe XD': ['MakerOS: Founder & CEO (2018-2022)'],
  'Photoshop': ['Config Holdings: Founder (2022-Present)'],
  'ChatGPT': ['Config Holdings: Founder (2022-Present)'],
  'Midjourney': ['Config Holdings: Founder (2022-Present)'],
  
  // Dev & Tech Tools
  'Docker': ['Config Holdings: Founder (2022-Present)'],
  'VS Code': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)'],
  'React': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)'],
  'Node.js': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)'],
  'Git': ['Config Holdings: Founder (2022-Present)', 'MakerOS: Founder & CEO (2018-2022)'],
  'OpenAI API': ['Config Holdings: Founder (2022-Present)'],
  'Anthropic API': ['Config Holdings: Founder (2022-Present)'],
  'Gemini API': ['Config Holdings: Founder (2022-Present)']
};

// Skills data
export const skills = {
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
    'RAG pipelines',
    'Vector DB',
    'React',
    'Tailwind',
    'LoRA',
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
export const relationships = [
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
  { source: 'Software and hardware development', target: 'React' },
  { source: 'Software and hardware development', target: 'Docker' },
  { source: 'Software and hardware development', target: 'Supabase' },
  { source: 'Software and hardware development', target: 'Bolt.DIY' },
  { source: 'Software and hardware development', target: 'Replit' },
  
  // Cross-category connections
  { source: 'RAG pipelines', target: 'OpenAI API' },
  { source: 'RAG pipelines', target: 'Anthropic API' },
  { source: 'RAG pipelines', target: 'Gemini API' },
  { source: 'RAG pipelines', target: 'Vector DB' },
  { source: 'Obsidian.md', target: '"Vibe Coding"' },
  { source: 'ChatGPT', target: '"Vibe Coding"' },
  { source: 'Midjourney', target: 'UI/UX design' },
  { source: 'RunwayML', target: 'UI/UX design' },
  { source: 'React', target: 'Tailwind' },
  { source: 'LoRA', target: 'Midjourney' },
  { source: 'LoRA', target: 'OpenAI API' },
  { source: 'Vector DB', target: 'RAG pipelines' }
];

// Format project name for display
export const formatProjectName = (projectId: string) => {
  return projectId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
