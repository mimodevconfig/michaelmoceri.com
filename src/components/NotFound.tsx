import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
