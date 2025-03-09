import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Footer } from './blocks/footer';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Blocks, 
  Code2, 
  Briefcase,
  Users,
  MessageSquare,
  Scale,
  Handshake
} from 'lucide-react';

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
      window.location.href = href;
    }
  };

  return (
    <Footer
      brand={{
        name: "Michael Moceri",
        description: "AI Product Developer and Technology Leader",
      }}
      socialLinks={[
        {
          name: "Github",
          href: "https://github.com/yourusername",
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/in/yourusername",
        },
        {
          name: "YouTube",
          href: "https://youtube.com",
        },
        {
          name: "Instagram",
          href: "https://instagram.com",
        },
      ]}
      columns={[
        {
          title: "Navigation",
          links: [
            {
              name: "Projects",
              Icon: Blocks,
              href: "#projects",
              onClick: (e) => handleAnchorClick(e, "#projects"),
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
              name: "Resume",
              Icon: FileText,
              href: "/resume.pdf",
            },
            {
              name: "Github",
              Icon: Github,
              href: "https://github.com/yourusername",
            },
            {
              name: "LinkedIn",
              Icon: Linkedin,
              href: "https://linkedin.com/in/yourusername",
            },
            {
              name: "Email",
              Icon: Mail,
              href: "mailto:your.email@example.com",
            },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              name: "Privacy Policy",
              Icon: Scale,
              href: "https://www.youtube.com/watch?v=qItugh-fFgg",
              target: "_blank",
              rel: "noopener noreferrer"
            },
            {
              name: "Terms of Service",
              Icon: Handshake,
              href: "https://www.youtube.com/watch?v=6X_kx2xhx8M",
              target: "_blank",
              rel: "noopener noreferrer"
            },
          ],
        },
      ]}
      copyright="© 2025 Michael Moceri. All rights reserved."
    />
  );
}
