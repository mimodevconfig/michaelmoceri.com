import React from 'react';
import { History, Lightbulb, Rocket, Building, MapPin, Target, Bot } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: "2012",
      title: "Co-founded 3DPX",
      description: "World's first 3D printing retail service bureau in Chicago",
      icon: History
    },
    {
      year: "2014",
      title: "Founded Manulith",
      description: "Comprehensive manufacturing services in Detroit",
      icon: Building
    },
    {
      year: "2018",
      title: "Founded MakerOS",
      description: "Industry-leading SaaS platform serving 10,000+ businesses globally",
      icon: Rocket
    },
    {
      year: "2022",
      title: "Shapeways Acquisition",
      description: "Shapeways acquires MakerOS",
      icon: Target
    },
    {
      year: "2026",
      title: "Founded MimoLabs",
      description: "AI manufacturing agent launched at mimolabs.ai",
      icon: Bot
    }
  ];

  return (
    <section id="about" className="py-20 bg-ide-bg-primary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Mike</h2>
          <p className="text-ide-text-secondary max-w-2xl mx-auto">
            Innovator, entrepreneur, and technology leader at the intersection of AI, manufacturing, and business.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="bg-ide-bg-dropdown p-6 rounded-xl border border-ide-ui-border h-full">
                <milestone.icon className="w-8 h-8 text-ide-text-link mb-4" />
                <div className="text-2xl font-bold text-ide-text-link mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-ide-text-secondary">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-ide-bg-dropdown p-6 rounded-xl border border-ide-ui-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-ide-text-link" />
                Innovation Journey
              </h3>
              <div className="space-y-4 text-ide-text-secondary">
                <p>
                  Mike Moceri co-founded 3DPX in 2012, the world's first 3D printing retail service bureau. The Chicago startup blended retail and production, helping define a new era of on-demand manufacturing and product design.
                </p>
                <p>
                  In 2014 he founded Manulith in Detroit, delivering design, rapid prototyping, and production for the automotive, aerospace, medical, and industrial sectors. He converted it into MakerOS in 2018, a SaaS platform that digitized the full workflow for design, engineering, and manufacturing firms, from first client contact through project management and production to payments. By 2022, MakerOS served over 10,000 businesses globally.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-ide-bg-dropdown p-6 rounded-xl border border-ide-ui-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-ide-text-link" />
                Current Focus
              </h3>
              <div className="space-y-4 text-ide-text-secondary">
                <p>
                  After Shapeways (NYSE: SHPW) acquired MakerOS in April 2022, Mike served as Head of Software GTM and then Director of Product, Strategy, and Co-Innovation. He now lives in Metro Detroit, where he founded Config Holdings to incubate new ventures across AI and advanced manufacturing.
                </p>
                <p>
                  In 2026 that work became MimoLabs and its flagship product, Mimo, an AI manufacturing agent that takes a product from idea to production-ready across 3D printing and advanced manufacturing. Launched publicly at{' '}
                  <a
                    href={"https://mimolabs.ai/?utm_source=mm-site&utm_medium=portfolio&utm_content=about"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ide-text-link hover:underline"
                  >
                    mimolabs.ai
                  </a>
                  , it brings a career of building 3D printing and manufacturing businesses into an AI-native way to make physical things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
