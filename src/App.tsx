import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ProjectsPage from './components/ProjectsPage';
import Skills from './components/skills/index';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import AppFooter from './components/AppFooter';
import RecentBlogPosts from './components/RecentBlogPosts';
import NotFound from './components/NotFound';
import HTMLSitemap from './components/HTML-Sitemap';

// Blog components
import BlogLayout from './components/blog/BlogLayout';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import CategoryPage from './components/blog/CategoryPage';
import TagPage from './components/blog/TagPage';

// Legal pages
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';

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
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <SEO />
        <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        
        {/* Blog routes */}
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogList />} />
          <Route path="post/:slug" element={<BlogPost />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="tag/:tag" element={<TagPage />} />
        </Route>

        {/* Legal pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        
        {/* HTML Sitemap */}
        <Route path="/sitemap-html" element={<HTMLSitemap />} />
        
        {/* 404 route - must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
        <AppFooter />
      </div>
    </HelmetProvider>
  );
}

export default App;
