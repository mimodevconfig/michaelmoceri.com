import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import AppFooter from './components/AppFooter';
import RecentBlogPosts from './components/RecentBlogPosts';

// Blog components
import BlogLayout from './components/blog/BlogLayout';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import CategoryPage from './components/blog/CategoryPage';
import TagPage from './components/blog/TagPage';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Testimonials />
      <Experience />
      <Skills />
      <RecentBlogPosts />
      <Contact />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        
        {/* Blog routes */}
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogList />} />
          <Route path="post/:slug" element={<BlogPost />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="tag/:tag" element={<TagPage />} />
        </Route>
      </Routes>
      <AppFooter />
    </div>
  );
}

export default App;
