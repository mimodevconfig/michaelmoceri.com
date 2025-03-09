import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "One of the most influential personalities of Additive Manufacturing",
    author: "3D Natives",
    role: "Industry Publication",
    image: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_2/cvg5ttuibssqfpkd3ddz"
  },
  {
    quote: "Entrepreneur Becomes The Face Of 3D Printing Through Innovation & Excellent Company Presentation",
    author: "CBS News",
    role: "Online News Outlet",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/55/29/48/5529487a-af9f-9892-302b-d9954ec42273/CBSTVEAppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/60x60bb.jpg"
  },
  {
    quote: "Moceri realized that 3D printing’s labor-intensive steps—file handling, mesh validation, pricing, manufacturing, logistics, and billing—happen outside the printer. Such a process would greatly benefit from automation.",
    author: "Engineering.com",
    role: "Engineering Publication",
    image: "https://www.engineering.com/wp-content/uploads/2024/05/eng2.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-ide-bg-primary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Quotes & Accolades</h2>
          <p className="text-ide-text-secondary max-w-2xl mx-auto">
            Recognized by industry leaders to deliver exceptional solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-ide-bg-dropdown rounded-xl p-6 shadow-sm border border-ide-ui-border">
              <Quote className="w-10 h-10 text-ide-text-link mb-4" />
              <blockquote className="text-ide-text-secondary mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-ide-text-primary">{testimonial.author}</div>
                  <div className="text-ide-text-secondary text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
