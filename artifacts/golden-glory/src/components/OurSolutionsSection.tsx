import React from 'react';
import { Laptop, Monitor, Lock, Users, Mic, Ticket, Mail, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface OurSolutionsSectionProps {
  limit?: number;
}

export default function OurSolutionsSection({ limit }: OurSolutionsSectionProps) {
  const allSolutions = [
    {
      id: "01",
      title: "Flexible Desk",
      desc: "Flexible seating for dynamic daily work.",
      icon: Laptop
    },
    {
      id: "02",
      title: "Dedicated Desk",
      desc: "Fixed personal desk with consistent setup.",
      icon: Monitor
    },
    {
      id: "03",
      title: "Private Cabins",
      desc: "Secure, private workspace for small teams.",
      icon: Lock
    },
    {
      id: "04",
      title: "Meeting Room",
      desc: "Professional rooms for client discussions.",
      icon: Users
    },
    {
      id: "05",
      title: "Conference Room",
      desc: "Spacious setting for group meetings.",
      icon: Mic
    },
    {
      id: "06",
      title: "Day Pass",
      desc: "Instant workspace access for one day.",
      icon: Ticket
    },
    {
      id: "07",
      title: "Virtual Office",
      desc: "Business address with mail handling.",
      icon: Mail
    },
    {
      id: "08",
      title: "Training Room",
      desc: "Ideal space for sessions and workshops.",
      icon: BookOpen
    }
  ];

  const displaySolutions = limit ? allSolutions.slice(0, limit) : allSolutions;

  return (
    <section className="py-16 md:py-20 bg-[#f4f9fd] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ffa602]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#432c1c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 text-[#ffa602] fade-up">
            <Layers className="w-5 h-5" />
            <span className="font-bold tracking-wider text-sm uppercase">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-[#111] leading-[1.1] mb-6 at-animation-heading-style-3">
            Workspace Options Overview
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto typewriter">
            Explore our flexible coworking plans designed for professionals, startups, and growing teams. Choose the perfect workspace that matches your workflow and business needs.
          </p>
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${limit === 3 ? '3' : '4'} gap-6`}>
          {displaySolutions.map((solution, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2rem] p-8 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-[#ffa602]/20 flex flex-col h-full fade-up"
            >
              {/* Large Watermark Number */}
              <div className="absolute -right-4 -bottom-6 text-[8rem] font-sans font-bold text-gray-50 group-hover:text-[#ffa602]/5 transition-colors duration-500 pointer-events-none leading-none">
                {solution.id}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#f4f9fd] flex items-center justify-center mb-8 group-hover:bg-[#ffa602] transition-colors duration-500 shadow-sm relative z-10 border-zooming">
                <solution.icon className="w-8 h-8 text-[#432c1c] group-hover:text-[#111] transition-colors duration-500" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-[#111] text-2xl font-bold mb-3 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-1">
                  {solution.desc}
                </p>
                

              </div>
            </div>
          ))}
        </div>

        {/* Show More Button if limited */}
        {limit && (
          <div className="mt-20 text-center relative z-10 fade-up">
            <Button asChild size="lg" className="h-14 px-10 rounded-full bg-[#432c1c] text-white hover:bg-[#ffa602] hover:text-[#111] font-bold tracking-wider uppercase transition-all shadow-xl group btn-anime">
              <Link href="/our-offerings">
                <span className="relative z-10 flex items-center">
                  View All Solutions
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}
