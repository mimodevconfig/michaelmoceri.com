import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  noIndex?: boolean;
  ogType?: string;
  ogImage?: string;
}

/**
 * SEO component that handles all meta tags for pages
 */
export default function SEO({ 
  title,
  description = "Entrepreneur and AI strategist transforming complex technologies into impactful products. 15+ years experience building successful ventures in 3D printing, manufacturing, and AI-enabled solutions.",
  noIndex = false,
  ogType = "website",
  ogImage = "/images/michael_moceri_social_share.png"
}: SEOProps) {
  const formattedTitle = title 
    ? `${title} - Michael Moceri` 
    : "Michael Moceri - AI Product & Strategy Leader";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex" />}
      
      {/* Open Graph / Facebook Tags */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`https://michaelmoceri.com${ogImage}`} />
      
      {/* Twitter Tags */}
      <meta property="twitter:title" content={formattedTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://michaelmoceri.com${ogImage}`} />
    </Helmet>
  );
}
