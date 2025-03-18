import React from 'react';
import { Building2, Award, MapPin, Calendar } from 'lucide-react';
import { SplashCursor } from './ui/splash-cursor';
import { getImageUrl } from '../lib/imageUtils';
import { Button } from './ui/button';

const experiences = [
  {
    company: 'Config Holdings',
    role: 'Founder',
    period: '2022 - Present',
    location: 'New York City, Metro-Detroit',
    image: '/images/experience/config_ai.jpg?q=80&w=2670&auto=format&fit=crop',
    highlights: [
      'Developing innovative applications in AI and advanced manufacturing',
      'Building and consulting on scalable solutions for enterprise clients'
    ],
  },
  {
    company: 'Moceri Companies',
    role: 'VP of Real Estate Development, IT, & Marketing',
    period: '2023 - 2024',
    location: 'Metro-Detroit',
    image: '/images/experience/moceri_mystic_cove.jpg?q=80&w=2670&auto=format&fit=crop',
    highlights: [
      'Implemented operational frameworks boosting productivity across departments',
      'Pioneered AI-first approach to community master planning using LoRA methods',
      'Modernized IT infrastructure for 10+ locations including HQ and sales offices',
      'Built marketing team focused on proven GTM strategies and HubSpot implementation',
      'Developed masterplan concepts that were approved and valued $2B+'
    ],
  },
  {
    company: 'Shapeways',
    role: 'Head of Software GTM; Director of Product, Strategy, and Co-Innovation',
    period: '2022 - 2023',
    location: 'New York City',
    image: '/images/experience/shapeways.jpg?q=80&w=2670&auto=format&fit=crop',
    highlights: [
      'Led post-acquisition integration of MakerOS and MFG.com, onboarding 20+ employees',
      'Managed P&L for Software organization, merging legacy systems into OTTO Software',
      'Directed strategy across Manufacturing, Software, and Consulting business units',
      'Spearheaded $3MM partnership with Tier 1 Automotive Manufacturer for 3D printing PaaS'
    ],
  },
  {
    company: 'MakerOS (Acquired by Shapeways)',
    role: 'Founder & CEO, Chairman of the Board',
    period: '2018 - 2022',
    location: 'New York City',
    image: '/images/blog/content/makeros_product1.avif?q=80&w=2670&auto=format&fit=crop',
    highlights: [
      'Grew to 10,000+ business accounts worldwide with innovative SaaS platform',
      'Led operations including product planning, GTM, hiring, and enterprise sales',
      'Designed core product including 3D Part AutoQuoter and multi-tenant architecture',
      'Secured funding from Angel to Series A rounds as Chairman of the Board',
      'Successfully negotiated acquisition by publicly-traded Shapeways'
    ],
  },
  {
    company: 'Manulith',
    role: 'Founder & CEO',
    period: '2014 - 2018',
    location: 'New York City, Metro-Detroit',
    image: '/images/experience/manulith.jpg?q=80&w=2670&auto=format&fit=crop',
    highlights: [
      'Bootstrapped hardware product development service for Automotive, Medical, and Aerospace',
      'Developed internal platform that evolved into MakerOS'
    ],
  },
  {
    company: '3DPX',
    role: 'Co-Founder, Head of Production',
    period: '2012 - 2014',
    location: 'Chicago',
    image: '/images/experience/3dpx_shop_floor.avif?q=80&w=2670&auto=format&fit=crop',
    highlights: [
      'Established world\'s first retail 3D printing service bureau in Downtown Chicago',
      'Designed production facility and led team of design and production engineers'
    ],
  },
  {
    company: 'MakerBot Industries',
    role: 'Distributor, Community Development, Consulting',
    period: '2010 - 2012',
    location: 'Chicago',
    image: '/images/blog/covers/mag_covers.avif?q=80&w=2670&auto=format&fit=crop',
    highlights: [
      'First Midwest distributor for MakerBot Industries',
      'Consulted with Art Institute of Chicago and Northwestern University',
      'Organized community engagement events to promote 3D printing technology'
    ],
  },
];

export default function Experience() {
  // Handle smooth scrolling for section links
  const handleSectionScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for the fixed header
        behavior: 'smooth'
      });
    }
  };

  // This function has been fixed to use an inline fallback image URL instead of a path
  // that would cause additional network requests if the image failed to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Use inline data URI for a minimal placeholder image instead of requesting another file
    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23252526'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' text-anchor='middle' fill='%23569CD6' dominant-baseline='middle'%3EExperience%3C/text%3E%3C/svg%3E";
  };

  return (
    <section id="experience" className="relative py-20 bg-ide-bg-secondary">
      {/* Modified SplashCursor to have pointer-events-none */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <SplashCursor
          DENSITY_DISSIPATION={2.5}
          VELOCITY_DISSIPATION={1.5}
          PRESSURE={0.2}
          SPLAT_RADIUS={0.3}
          COLOR_UPDATE_SPEED={5}
          BACK_COLOR={{ r: 0.2, g: 0.2, b: 0.2 }}
        />
      </div>
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-16 relative z-20">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-ide-text-secondary max-w-2xl mx-auto mb-6">
            Track record of delivering innovative solutions and leading high-performing teams across multiple industries.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-12 px-6 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Contact for Full Resume
          </a>
        </div>
        
        {/* Timeline for desktop - hidden on mobile */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-ide-ui-border"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-4 h-4 rounded-full bg-ide-text-link border-4 border-ide-bg-primary"></div>
                </div>
                
                <div className="flex items-center">
                  {/* Left side - Company info */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-ide-bg-dropdown p-6 rounded-xl shadow-sm border border-ide-ui-border overflow-hidden">
                      {/* Header image */}
                      <div className="h-40 -mx-6 -mt-6 mb-6 bg-ide-bg-active overflow-hidden">
                        <img 
                          src={exp.image} 
                          alt={`${exp.company}`}
                          className="w-full h-full object-cover"
                          onError={handleImageError}
                        />
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <Building2 className="w-5 h-5 text-ide-text-link flex-shrink-0" />
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                      </div>
                      <div className="mb-4">
                        <div className="text-lg font-medium">{exp.role}</div>
                        <div className="flex items-center gap-2 text-ide-text-secondary mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-ide-text-secondary mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Experience highlights */}
                  <div className="w-1/2 pl-8">
                    <div className="bg-ide-bg-dropdown p-6 rounded-xl shadow-sm border border-ide-ui-border">
                      <h4 className="text-lg font-medium mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2">
                            <Award className="w-5 h-5 text-ide-text-link mt-1 flex-shrink-0" />
                            <span className="text-ide-text-secondary">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile view - full width cards with no timeline */}
        <div className="md:hidden space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-ide-bg-dropdown p-6 rounded-xl shadow-sm border border-ide-ui-border overflow-hidden">
              {/* Header image */}
              <div className="h-40 -mx-6 -mt-6 mb-6 bg-ide-bg-active overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={`${exp.company}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-ide-text-link flex-shrink-0" />
                <h3 className="text-xl font-semibold">{exp.company}</h3>
              </div>
              <div className="mb-4">
                <div className="text-lg font-medium">{exp.role}</div>
                <div className="flex items-center gap-2 text-ide-text-secondary mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 text-ide-text-secondary mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-ide-text-link mt-1 flex-shrink-0" />
                      <span className="text-ide-text-secondary">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}