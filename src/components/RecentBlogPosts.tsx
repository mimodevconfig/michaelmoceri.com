import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/mdx';
import { getBlogCoverUrl } from '../lib/imageUtils';
import { Button } from './ui/button';

const RecentBlogPosts: React.FC = () => {
  // Get all posts and sort by date (newest first)
  const allPosts = getAllPosts();
  const recentPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3); // Get only the 3 most recent posts

  return (
    <section className="py-20 bg-ide-bg-secondary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Blog Posts</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights and thoughts on AI, development, and technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map(post => (
            <div key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
              <img 
                src={getBlogCoverUrl(post.slug) || post.coverImage} 
                alt={post.title} 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== post.coverImage) {
                    target.src = post.coverImage;
                  } else {
                    // Default fallback image
                    target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643';
                  }
                }}
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

        <div className="mt-12 text-center">
          <Button 
            href="/blog" 
            variant="outlined"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;
