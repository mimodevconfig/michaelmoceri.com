import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Footer } from './blocks/footer';
import { Github, Linkedin, FileText, Blocks, Code2, Briefcase, Users, MessageSquare, Scale, Handshake, Instagram, MapIcon as SitemapIcon } from 'lucide-react';

export default function AppFooter() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation to anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Check if it's an anchor link
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      
      // If we're already on the home page
      if (location.pathname === '/') {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      } else {
        // Navigate to home page with the anchor
        navigate('/', { state: { scrollToId: targetId } });
      }
    } else {
      // For non-anchor links, navigate normally
      navigate(href);
    }
  };

  return (
    <Footer
      brand={{
        name: "Michael Moceri",
        description: "AI, Advanced Manufacturing, Strategy, and Entrepreneurship",
      }}
      socialLinks={[
        {
          name: "Github",
          href: "https://github.com/mimodevconfig",
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/mocerimike",
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/mocerimike/?hl=en",
        },
      ]}
      columns={[
        {
          title: "Navigation",
          links: [
            {
              name: "Projects",
              Icon: Blocks,
              href: "/projects",
            },
            {
              name: "Skills",
              Icon: Code2,
              href: "#skills",
              onClick: (e) => handleAnchorClick(e, "#skills"),
            },
            {
              name: "Experience",
              Icon: Briefcase,
              href: "#experience",
              onClick: (e) => handleAnchorClick(e, "#experience"),
            },
            {
              name: "About",
              Icon: Users,
              href: "#about",
              onClick: (e) => handleAnchorClick(e, "#about"),
            },
            {
              name: "Contact",
              Icon: MessageSquare,
              href: "#contact",
              onClick: (e) => handleAnchorClick(e, "#contact"),
            },
          ],
        },
        {
          title: "Resources",
          links: [
            {
              name: "Blog",
              Icon: FileText,
              href: "/blog",
            },
            {
              name: "Github",
              Icon: Github,
              href: "https://github.com/mimodevconfig",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            {
              name: "LinkedIn",
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/mocerimike",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            {
              name: "Instagram",
              Icon: Instagram,
              href: "https://www.instagram.com/mocerimike/?hl=en",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            {
              name: "Sitemap",
              Icon: SitemapIcon,
              href: "/sitemap-html",
            },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              name: "Privacy Policy",
              Icon: Scale,
              href: "/privacy-policy",
            },
            {
              name: "Terms of Service",
              Icon: Handshake,
              href: "/terms-of-service",
            },
          ],
        },
      ]}
      copyright="© 2025 Michael Moceri. All rights reserved."
    />
  );
}
