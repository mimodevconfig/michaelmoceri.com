import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Terms of Service</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Last Updated: March 8, 2025</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website (michaelmoceri.com), you accept and agree to be bound by the terms and provisions of this agreement. 
            If you do not agree to these terms, please do not use this website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily view the materials on Michael Moceri's website for personal, non-commercial use only. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated at any time. 
            Upon terminating your viewing of these materials, you must destroy any downloaded materials in your possession.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
          <p>
            The materials on this website are provided on an 'as is' basis. Michael Moceri makes no warranties, expressed or implied, 
            and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of 
            merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, Michael Moceri does not warrant or make any representations concerning the accuracy, likely results, or reliability 
            of the use of the materials on this website or otherwise relating to such materials or on any sites linked to this site.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
          <p>
            In no event shall Michael Moceri or his suppliers be liable for any damages (including, without limitation, damages for loss 
            of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, 
            even if Michael Moceri or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on this website could include technical, typographical, or photographic errors. Michael Moceri does not 
            warrant that any of the materials on this website are accurate, complete, or current. Michael Moceri may make changes to the 
            materials contained on this website at any time without notice.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Links</h2>
          <p>
            Michael Moceri has not reviewed all of the sites linked to this website and is not responsible for the contents of any such linked site. 
            The inclusion of any link does not imply endorsement by Michael Moceri of the site. Use of any such linked website is at the user's own risk.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications</h2>
          <p>
            Michael Moceri may revise these terms of service for this website at any time without notice. By using this website, 
            you are agreeing to be bound by the then current version of these terms of service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States, 
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact me through the <Link to="/#contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact</Link> section of my website.
          </p>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
