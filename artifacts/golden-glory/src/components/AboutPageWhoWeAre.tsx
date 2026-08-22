"use client";
import React from 'react';
import { Scale, Maximize, Armchair } from 'lucide-react';

export default function AboutPageWhoWeAre() {
  const features = [
    {
      icon: <Scale className="w-8 h-8 text-[#ffa602]" strokeWidth={1.5} />,
      title: "Stability",
      description: "Enjoy uninterrupted workflow with high-speed fiber internet, reliable power backup, and consistently maintained workspaces for daily productivity.",
    },
    {
      icon: <Maximize className="w-8 h-8 text-[#ffa602]" strokeWidth={1.5} />,
      title: "Flexibility",
      description: "Choose from multiple workspace options—from hot desks to private cabins—tailored to fit your business needs and growth.",
    },
    {
      icon: <Armchair className="w-8 h-8 text-[#ffa602]" strokeWidth={1.5} />,
      title: "Comfort",
      description: "Experience a clean, well-designed, and peaceful environment supported by essential amenities that make every workday smoother and stress-free.",
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="relative z-10 lg:pr-8">
            <div className="flex items-center gap-2 mb-4 fade-up">
              <span className="text-[#ffa602] font-bold text-lg tracking-wider uppercase">About Golden Glory - Coworking Space</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-[#111] font-extrabold leading-[1.1] mb-8 at-animation-heading-style-3">
              Who We Are
            </h2>
            
            <div className="space-y-6 text-[#555] text-[1.05rem] leading-[1.8] font-medium fade-up">
              <p>
                Golden Glory is a modern coworking space crafted to help professionals, startups, and businesses work smarter and grow faster. We combine comfort, community, and productivity to create an environment where work feels effortless. With thoughtfully designed workstations, collaborative zones, and private cabins, we provide flexible spaces that adapt to your goals. Our mission is simple — empower individuals and teams to achieve more every day.
              </p>
              <p>
                By blending premium amenities with a purpose-driven design, we ensure every member experiences a workspace that enhances focus, collaboration, and well-being. As the business landscape evolves, Golden Glory continues to innovate, offering an inspiring environment where ambitious individuals can work confidently and achieve long-term success.
              </p>
            </div>
          </div>
          
          {/* Right Column: Feature Cards */}
          <div className="relative w-full flex flex-col gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 fade-up"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-full bg-[#fffdfa] border-2 border-[#fff0d4] group-hover:border-[#ffa602] group-hover:bg-[#fff7e6] flex items-center justify-center transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#111] mb-3 group-hover:text-[#ffa602] transition-colors duration-300">{feature.title}</h3>
                  <p className="text-[#666] leading-relaxed text-[1.05rem]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
