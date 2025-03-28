import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllPosts } from '../../lib/mdx';
import SEO from '../SEO';

const BlogList: React.FC = () => {
  const posts = getAllPosts();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div>
      <SEO 
        title="Blog" 
        description="Read about AI product development, manufacturing technology, and entrepreneurship. Insights from 15+ years of experience in building innovative solutions."
      />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <div className="mt-4 md:mt-0">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white w-full md:w-64"
            />
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-grow">
              <div className="flex items-center mb-2">
                <Link 
                  to={`/blog/category/${post.category.toLowerCase()}`}
                  className="text-xs font-semibold px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {post.category}
                </Link>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <Link 
                    key={tag} 
                    to={`/blog/tag/${tag.toLowerCase()}`}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
              <Link 
                to={`/blog/post/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
