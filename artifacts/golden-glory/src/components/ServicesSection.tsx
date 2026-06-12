import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const steps = [
    {
      number: "01",
      subtitle: "UNDERSTANDING YOUR NEEDS",
      title: "Enquiry & Consultation",
      desc: "We understand your workspace needs, team size, budget, and preferred environment to recommend the best coworking solution.",
      quote: "Finding the perfect workspace starts with a simple conversation.",
      image: "/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png"
    },
    {
      number: "02",
      subtitle: "SEEING IS BELIEVING",
      title: "Visit & Explore",
      desc: "Visit our coworking space for a guided walkthrough to explore cabins, dedicated desks, meeting rooms, and shared amenities.",
      quote: "Experience the vibe, feel the energy, and envision your team thriving here.",
      image: "/images/gallery/fixed%20desks%20golden%20glory.png"
    },
    {
      number: "03",
      subtitle: "TAILORED FOR YOU",
      title: "Choose Your Plan",
      desc: "Choose a flexible plan that fits your workflow — from day passes and hot desks to dedicated cabins and team offices.",
      quote: "Flexibility meets productivity in a plan designed around your business.",
      image: "/images/gallery/private%20cabin%20golden%20glory%201.png"
    },
    {
      number: "04",
      subtitle: "SEAMLESS ONBOARDING",
      title: "Move In & Start Working",
      desc: "Get instant access to your workspace with quick onboarding, stable internet, and all essential services ready from day one.",
      quote: "Plug in, connect, and start doing your best work immediately.",
      image: "/images/gallery/ending%20image%20golden%20glory.png"
    }
  ];

  return (
    <section className="py-24 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px] relative">
        
        {/* Section Heading */}
        <div className="text-center mb-20 fade-up relative z-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ffa602]"></span>
            <span className="font-bold tracking-[0.2em] text-[#ffa602] uppercase text-sm">
              Our Process
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans tracking-tight text-[#432c1c] leading-[1.1]">
            How We Work
          </h2>
        </div>

        {/* Center Vertical Line (Hidden on small screens) */}
        <div className="hidden lg:block absolute left-1/2 top-48 bottom-10 w-[2px] bg-[#dca646] -translate-x-1/2 opacity-50 z-0" />

        <div className="space-y-20 lg:space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1; // index 1, 3 are visually "Even" layout (Image Left, Text Right)

            return (
              <div key={index} className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Node on Center Line */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[4px] border-[#ffa602] bg-[#fafafa] z-20 shadow-[0_0_15px_rgba(255,166,2,0.3)]" />

                {/* Left Side Content */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-1'} w-full flex justify-center lg:justify-end relative z-10`}>
                  {isEven ? (
                    /* Image Block (Left Side) */
                    <div className="w-full max-w-[600px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-white border-[8px] border-white">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ) : (
                    /* Text Block (Left Side) */
                    <div className="max-w-[500px] text-center lg:text-right flex flex-col lg:items-end">
                      <div className="text-7xl md:text-[100px] font-bold text-[#432c1c]/10 leading-none mb-4 font-sans tracking-tighter">
                        {step.number}
                      </div>
                      <div className="text-xs font-bold tracking-[0.2em] text-[#ffa602] uppercase mb-4">
                        {step.subtitle}
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#111] mb-6">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {step.desc}
                      </p>
                      <div className="italic text-[1.05rem] font-medium text-[#432c1c] border-l-[3px] lg:border-l-0 lg:border-r-[3px] border-[#ffa602] pl-6 lg:pl-0 lg:pr-6 py-1">
                        "{step.quote}"
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-2'} w-full flex justify-center lg:justify-start relative z-10`}>
                  {isEven ? (
                    /* Text Block (Right Side) */
                    <div className="max-w-[500px] text-center lg:text-left flex flex-col lg:items-start">
                      <div className="text-7xl md:text-[100px] font-bold text-[#432c1c]/10 leading-none mb-4 font-sans tracking-tighter">
                        {step.number}
                      </div>
                      <div className="text-xs font-bold tracking-[0.2em] text-[#ffa602] uppercase mb-4">
                        {step.subtitle}
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-[#111] mb-6">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {step.desc}
                      </p>
                      <div className="italic text-[1.05rem] font-medium text-[#432c1c] border-l-[3px] border-[#ffa602] pl-6 py-1">
                        "{step.quote}"
                      </div>
                    </div>
                  ) : (
                    /* Image Block (Right Side) */
                    <div className="w-full max-w-[600px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-white border-[8px] border-white">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
