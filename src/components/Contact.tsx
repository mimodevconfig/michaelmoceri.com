import React from 'react';
import { Button } from './ui/button';
import { Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-ide-bg-primary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-ide-text-secondary max-w-2xl mx-auto">
            Connect with me and shoot me a message on LinkedIn.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            href="https://www.linkedin.com/in/mocerimike/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg px-6 py-3 h-auto"
            size="lg"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}
