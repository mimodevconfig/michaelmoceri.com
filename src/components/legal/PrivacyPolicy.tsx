import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Last Updated: March 8, 2025</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Michael Moceri's personal website. I respect your privacy and am committed to protecting your personal data. 
            This Privacy Policy explains how I collect, use, and safeguard your information when you visit my website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information I Collect</h2>
          <p>
            <strong>Personal Information:</strong> When you contact me through the contact form, I collect your name, email address, 
            and any other information you choose to provide in your message.
          </p>
          <p>
            <strong>Usage Data:</strong> I automatically collect certain information when you visit my website, including your IP address, 
            browser type, operating system, referring URLs, and pages viewed. This information helps me understand how visitors use my website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How I Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>To respond to your inquiries and communication</li>
            <li>To improve my website and user experience</li>
            <li>To analyze usage patterns and trends</li>
            <li>To protect the security and integrity of my website</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
          <p>
            This website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. 
            You can control cookies through your browser settings, but disabling them may affect your experience on the site.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
          <p>
            I may use third-party services such as analytics providers and hosting services that collect, use, and process information 
            on my behalf. These services have their own privacy policies governing the use of your information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
          <p>
            I implement appropriate security measures to protect your personal information from unauthorized access, alteration, 
            disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access your personal data</li>
            <li>The right to correct inaccurate data</li>
            <li>The right to request deletion of your data</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
          <p>
            This website is not intended for children under 16 years of age. I do not knowingly collect personal information from children.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact me through the <Link to="/#contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact</Link> section of my website.
          </p>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
