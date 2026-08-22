"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, Laptop, Monitor, Users, Crown, Ticket, Presentation, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  limit?: number;
}

export default function PricingSection({ limit }: PricingSectionProps = {}) {
  const plans = [
    {
      title: "Flexible Desk",
      subtitle: "Best For: Freelancers, remote workers, part-time professionals",
      icon: <Laptop className="w-10 h-10 text-[#111]" strokeWidth={1.5} />,
      price: "₹4,500",
      period: "/Mo",
      amenities: [
        "Flexible seating access",
        "High-speed fiber internet",
        "Access to common areas",
        "Tea & coffee",
        "Reception support",
        "Power backup & CCTV",
        "Access to meeting room (limited)"
      ]
    },
    {
      title: "Dedicated Desk",
      subtitle: "Best For: Regular professionals needing consistency & comfort",
      icon: <Monitor className="w-10 h-10 text-[#111]" strokeWidth={1.5} />,
      price: "₹5,500",
      period: "/Mo",
      amenities: [
        "Personal fixed desk",
        "Secure & stable setup",
        "Fiber internet + power backup",
        "Tea & coffee",
        "Printing/scanning support",
        "Access to meeting room (limited)"
      ]
    },
    {
      title: "Enclosed Cabin",
      subtitle: "Best For: Founders, small teams, leadership & client-facing work",
      icon: <Users className="w-10 h-10 text-[#111]" strokeWidth={1.5} />,
      price: "₹5,500",
      period: "/Mo/seat",
      amenities: [
        "Private, lockable cabin",
        "Ergonomic seating",
        "Noise-free workspace",
        "Internet & backup power",
        "Tea & coffee",
        "Branding/identity options",
        "Access to meeting room (limited)"
      ]
    },
    {
      title: "Executive Cabin",
      subtitle: "Best For: Founders, executives, managers, and decision-makers.",
      icon: <Crown className="w-10 h-10 text-[#111]" strokeWidth={1.5} />,
      price: "₹20,000",
      period: "/Mo",
      amenities: [
        "Private, lockable cabin",
        "Ergonomic seating",
        "Noise-free workspace",
        "Internet & backup power",
        "Tea & coffee",
        "Branding/identity options",
        "Access to meeting room (limited)"
      ]
    },
    {
      title: "Day Pass",
      subtitle: "Best For: Travelers, freelancers, one-day visitors & remote workers",
      icon: <Ticket className="w-10 h-10 text-[#111]" strokeWidth={1.5} />,
      price: "₹500",
      period: "/Per Day",
      amenities: [
        "Flexible seating for 1 day",
        "High-speed fiber internet",
        "Access to common areas",
        "Tea & coffee",
        "Power backup & CCTV",
        "Reception support"
      ]
    },
    {
      title: "Meeting Room",
      subtitle: "Best For: Client meetings, team huddles, interviews & presentations",
      icon: <Presentation className="w-10 h-10 text-[#111]" strokeWidth={1.5} />,
      price: "₹500",
      period: "/Per Hour",
      amenities: [
        "High-speed Wi-Fi",
        "Projector",
        "Whiteboard & markers",
        "Tea & coffee service",
        "Noise-free environment",
        "Reception support",
        "Access to meeting room (limited)"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          {/* Top Badge matching Rentgo */}
          <div className="inline-flex items-center gap-2 mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 fade-up">
            <span className="w-2 h-2 rounded-full bg-[#ffa602]"></span>
            <span className="font-bold text-[#111] text-sm">Pricing Plan</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-sans text-[#111] leading-[1.1] mb-6 fade-up">
            Flexible Plans for Everyone
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed fade-up">
            Choose the workspace plan that fits your workflow, budget, and business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {(limit ? plans.slice(0, limit) : plans).map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col fade-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="shrink-0 pt-1">
                  {plan.icon}
                </div>
                <div>
                  <h3 className="text-[1.4rem] font-bold font-sans text-[#111] mb-2">{plan.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed pr-2">{plan.subtitle}</p>
                </div>
              </div>

              {/* Price Block */}
              <div className="bg-[#f8f9fa] rounded-2xl p-6 mb-8 text-center border border-gray-50">
                <div className="flex items-baseline justify-center gap-1 mb-5">
                  <span className="text-4xl lg:text-5xl font-bold font-sans text-[#111] tracking-tight">{plan.price}</span>
                  <span className="text-[#111] font-bold text-sm">{plan.period}</span>
                </div>
                <Button 
                  asChild
                  className="w-full bg-[#f4a735] hover:bg-[#df9121] text-[#111] font-bold rounded-full h-[3.25rem] text-[15px] shadow-sm transition-colors"
                >
                  <Link 
                    href="/contact-us#contact-us-section"
                    onClick={() => {
                      setTimeout(() => {
                        const el = document.getElementById('contact-us-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 600);
                    }}
                  >
                    Get Started With Plan
                  </Link>
                </Button>
              </div>

              {/* Included Amenities */}
              <div className="flex-1">
                <h4 className="text-[1.1rem] font-bold text-[#111] mb-5 font-sans">Key Amenities:</h4>
                <ul className="space-y-4">
                  {plan.amenities.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="mt-[2px] bg-[#f4a735] rounded-full w-4 h-4 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-600 text-[15px] leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {limit && plans.length > limit && (
          <div className="mt-16 text-center fade-up">
            <Button 
              asChild
              className="rounded-full h-14 px-10 bg-[#f4a735] hover:bg-[#df9121] text-[#111] font-bold text-base shadow-lg transition-all hover:-translate-y-1"
            >
              <Link 
                href="/our-offerings#pricing"
                onClick={() => {
                  setTimeout(() => {
                    const el = document.getElementById('pricing');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 600);
                }}
              >
                Read More Plans <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
