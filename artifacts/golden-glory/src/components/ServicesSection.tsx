import React from 'react';
import { Sparkles, MessageSquareText, Eye, Layers, Key } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  const steps = [
    {
      icon: MessageSquareText,
      title: "Step 1 — Enquiry & Consultation",
      desc: "We understand your workspace needs, team size, budget, and preferred environment to recommend the best coworking solution."
    },
    {
      icon: Eye,
      title: "Step 2 — Visit & Explore",
      desc: "Visit our coworking space for a guided walkthrough to explore cabins, dedicated desks, meeting rooms, and shared amenities."
    },
    {
      icon: Layers,
      title: "Step 3 — Choose Your Plan",
      desc: "Choose a flexible plan that fits your workflow — from day passes and hot desks to dedicated cabins and team offices."
    },
    {
      icon: Key,
      title: "Step 4 — Move In & Start Working",
      desc: "Get instant access to your workspace with quick onboarding, stable internet, and all essential services ready from day one."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">
          
          {/* Left Column - Image 1 */}
          <div className="lg:col-span-4 h-full">
            <div className="w-full h-[600px] lg:h-full min-h-[650px] rounded-[2rem] overflow-hidden image-anime at-animation-image-style-1">
              <img 
                src="/images/how_we_work_1.png" 
                alt="Indian Professional in Coworking Cafe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Middle Column - Steps */}
          <div className="lg:col-span-5 flex flex-col justify-center py-4 lg:px-6">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4 fade-up">
                <Sparkles className="w-5 h-5 text-[#ffa602]" />
                <span className="font-bold text-[#432c1c] tracking-wide text-sm">How We Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-sans tracking-tight text-[#111] leading-[1.1] at-animation-heading-style-3">
                Step-by-Step Process
              </h2>
            </div>

            <div className="space-y-8 excellence-counter-boxes fade-up">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 excellence-counter-item">
                  <div className="shrink-0 mt-1">
                    <div className="w-14 h-14 rounded-full border-[1.5px] border-[#432c1c]/30 flex items-center justify-center border-zooming">
                      <step.icon className="w-6 h-6 text-[#432c1c]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#111] mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-[1rem]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text, Button, Image 2 */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="mb-12 pt-8 fade-up">
              <p className="text-gray-500 leading-relaxed mb-10 text-[1.1rem] typewriter">
                Empowering you to find the perfect workspace with our streamlined and personalized onboarding process.
              </p>
              <Button asChild className="bg-[#ffa602] hover:bg-[#e3be4f] text-[#111] font-bold px-10 h-14 rounded-full text-base transition-transform hover:-translate-y-1 shadow-none btn-anime">
                <Link href="/contact">
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </Button>
            </div>
            
            <div className="w-full h-[400px] mt-auto rounded-[2rem] overflow-hidden image-anime at-animation-image-style-1">
              <img 
                src="/images/how_we_work_2.png" 
                alt="Indian Professional using tablet" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
