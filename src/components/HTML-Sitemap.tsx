import React from 'react';
import { Link } from 'react-router-dom';

const HTMLSitemap: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Sitemap</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Main Pages</h2>
          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li><Link to="/" className="hover:underline">Home Page</Link></li>
            <li><Link to="/#about" className="hover:underline">About Mike</Link></li>
            <li><Link to="/#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Projects</h2>
          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li><Link to="/projects" className="hover:underline">All Projects</Link></li>
            <li><Link to="/project/100mm-art-foundation" className="hover:underline">$100MM Art Foundation</Link></li>
            <li><Link to="/project/3d-printing-calculator" className="hover:underline">3D Printing Pricing Calculator</Link></li>
            <li><Link to="/project/local-ai-inference-server" className="hover:underline">Local AI Inference Server</Link></li>
            <li><Link to="/project/ai-research-platform" className="hover:underline">AI Research Platform</Link></li>
            <li><Link to="/project/ai-real-estate-development" className="hover:underline">AI Real Estate Development</Link></li>
            <li><Link to="/project/art-config" className="hover:underline">art.config</Link></li>
            <li><Link to="/project/ai-osint-platform" className="hover:underline">AI OSINT Platform</Link></li>
            <li><Link to="/project/playboy-magazine-cover" className="hover:underline">Playboy Magazine Cover</Link></li>
            <li><Link to="/project/fabrication-labs" className="hover:underline">Fabrication Labs</Link></li>
            <li><Link to="/project/sustainable-3d-printing-challenge" className="hover:underline">Sustainable 3D Printing Challenge</Link></li>
            <li><Link to="/project/crypto-datacenter-farm" className="hover:underline">Crypto Datacenter Farm</Link></li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Professional Experience</h2>
          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li><Link to="/#experience" className="hover:underline">Experience Timeline</Link></li>
            <li><Link to="/#skills" className="hover:underline">Skill Graph</Link></li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Blog</h2>
          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li><Link to="/blog" className="hover:underline">All Blog Posts</Link></li>
            <li><Link to="/blog/post/getting-started-ollama-openwebui-windows" className="hover:underline">Getting Started with Ollama and OpenWebUI on Windows: A Powerful Local AI Stack</Link></li>
            <li><Link to="/blog/post/ready-for-new-supply-chain" className="hover:underline">ARE YOU READY FOR THE NEW SUPPLY CHAIN?</Link></li>
            <li><Link to="/blog/post/3d-printing-business-in-bubble" className="hover:underline">How I Built a 3D Printing Business in a Bubble and Survived</Link></li>
            <li><Link to="/blog/post/make-more-money-3d-printing-shop" className="hover:underline">How to Make More Money at Your 3D Printing Shop</Link></li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Blog Categories</h2>
          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li><Link to="/blog/category/technology" className="hover:underline">Technology</Link></li>
            <li><Link to="/blog/category/manufacturing" className="hover:underline">Manufacturing</Link></li>
            <li><Link to="/blog/category/entrepreneurship" className="hover:underline">Entrepreneurship</Link></li>
            <li><Link to="/blog/category/business" className="hover:underline">Business</Link></li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Popular Tags</h2>
          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li><Link to="/blog/tag/ai" className="hover:underline">AI</Link></li>
            <li><Link to="/blog/tag/local-ai" className="hover:underline">Local AI</Link></li>
            <li><Link to="/blog/tag/3d-printing" className="hover:underline">3D Printing</Link></li>
            <li><Link to="/blog/tag/business" className="hover:underline">Business</Link></li>
            <li><Link to="/blog/tag/manufacturing" className="hover:underline">Manufacturing</Link></li>
            <li><Link to="/blog/tag/supply-chain" className="hover:underline">Supply Chain</Link></li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Legal</h2>
          <ul className="space-y-2 text-blue-600 dark:text-blue-400">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HTMLSitemap;
