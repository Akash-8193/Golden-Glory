"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function WorkspaceGallerySection() {
  const images = [
    {
      src: "/images/gallery/private%20cabin%20golden%20glory%201.png",
      title: "Private Cabins",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-2",
      delay: "0ms"
    },
    {
      src: "/images/gallery/meeting%20room.png",
      title: "Conference & Meeting Rooms",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      delay: "100ms"
    },
    {
      src: "/images/gallery/fixed%20desks%20golden%20glory.png",
      title: "Collaborative Zones",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      delay: "200ms"
    },
    {
      src: "/images/gallery/dedicated%20desk.png",
      title: "Dedicated Desks",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      delay: "300ms"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4 fade-up">
            <span className="text-[#ffa602] font-bold text-lg tracking-wider uppercase">Inside Golden Glory</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-[#111] font-extrabold leading-[1.1] mb-6 at-animation-heading-style-3">
            Our Workspace Gallery
          </h2>
          <p className="text-[#666] text-lg md:text-xl leading-relaxed fade-up">
            Discover the modern, well-designed workspaces at Golden Glory through our gallery. From private cabins to shared zones, get a visual feel of the comfort, energy, and productivity we offer.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[320px]">
          {images.map((img, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-[2rem] bg-gray-100 ${img.colSpan} ${img.rowSpan} fade-up`}
              style={{ transitionDelay: img.delay }}
            >
              {/* Image */}
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-white text-2xl font-bold mb-2 font-sans">{img.title}</h3>
                  <div className="w-0 h-1 bg-[#ffa602] group-hover:w-16 transition-all duration-500 ease-out"></div>
                </div>
                
                {/* Floating Action Button */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
