import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Check, Star, CreditCard } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    { title: "Flexible Desk", price: "5,500", suffix: "/Mo", for: "Freelancers, remote workers, part-time professionals", feats: ["Flexible seating access", "High-speed fiber internet", "Access to common areas", "Pantry, tea & coffee", "Reception support", "Power backup & CCTV"], image: "/images/luxury_hotdesk_1780746713216.png", isPremium: false },
    { title: "Dedicated Desk", price: "6,500", suffix: "/Mo", for: "Regular professionals needing consistency & comfort", feats: ["Personal fixed desk", "Secure & stable setup", "Fiber internet + power backup", "Pantry access", "Printing/scanning support", "Access to meeting room (limited)"], image: "/images/luxury_dedicated_1780746732950.png", isPremium: false },
    { title: "Enclosed Cabin", price: "8,000", suffix: "/Mo/seat", for: "Founders, small teams, leadership & client-facing work", feats: ["Private, lockable cabin", "Ergonomic seating", "Noise-free workspace", "Internet & backup power", "Meeting room credits", "Branding/identity options"], image: "/images/luxury_private_1780746747118.png", isPremium: false },
    { title: "Executive Cabin", price: "30,000", suffix: "/Mo", for: "Founders, executives, managers, and decision-makers", feats: ["Private, lockable cabin", "Ergonomic seating", "Noise-free workspace", "Internet & backup power", "Meeting room credits", "Branding/identity options"], image: "/images/luxury_about_1780746701861.png", isPremium: true, highlighted: true },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f4f9fd]">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="text-center mb-20 max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4 text-[#ffa602] fade-up">
            <CreditCard className="w-5 h-5" />
            <span className="font-bold tracking-wider text-sm uppercase">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-sans tracking-tight text-[#111] leading-[1.1] mb-6 at-animation-heading-style-3">
            Flexible Plans for Every Need
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed typewriter">
            Choose a workspace plan that suits your workflow. Whether you need a dedicated desk or a private office, we have the perfect space for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`rounded-[2rem] p-8 md:p-10 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col fade-up ${
                plan.highlighted 
                  ? 'bg-[#432c1c] text-white shadow-2xl scale-[1.02] lg:scale-105 z-10' 
                  : 'bg-white text-[#111] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#ffa602]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
              }`}
            >
              {plan.isPremium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ffa602] text-[#111] font-bold text-xs uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg flex items-center gap-1 z-20">
                  <Star className="w-3 h-3 fill-current" /> Premium
                </div>
              )}
              
              <div className="h-56 w-full rounded-[2rem] overflow-hidden relative group image-anime at-animation-image-style-1">
                <img src={plan.image} alt={plan.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <h3 className={`font-serif text-2xl font-bold mb-4 ${plan.isPremium ? 'text-white' : 'text-[#111]'}`}>{plan.title}</h3>
                
                <div className={`mb-6 pb-6 border-b ${plan.isPremium ? 'border-white/10' : 'border-gray-100'}`}>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-3xl lg:text-4xl font-bold text-[#ffa602] tracking-tight">₹{plan.price}</span>
                    <span className={`text-sm mb-1 ${plan.isPremium ? 'text-gray-400' : 'text-gray-500'}`}>{plan.suffix}</span>
                  </div>
                </div>
                
                <p className={`text-sm font-medium mb-6 min-h-[60px] leading-relaxed ${plan.isPremium ? 'text-gray-300' : 'text-[#111]/80'}`}>
                  <span className={plan.isPremium ? 'text-[#ffa602]' : 'text-[#ffa602]'}>Best for: </span>{plan.for}
                </p>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.feats.map((feat, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm ${plan.isPremium ? 'text-gray-300' : 'text-gray-500'}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.isPremium ? 'bg-[#ffa602]/20' : 'bg-[#ffa602]/10'} border-zooming`}>
                        <Check className="w-3 h-3 text-[#ffa602]" />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className={`w-full h-14 rounded-xl font-bold tracking-wider uppercase transition-all duration-300 mt-auto shadow-md btn-anime ${
                  plan.isPremium 
                    ? 'bg-[#ffa602] text-[#111] hover:bg-[#e09612]' 
                    : 'bg-gray-50 text-[#111] hover:bg-[#ffa602] hover:text-[#111] border border-gray-200 hover:border-[#ffa602]'
                }`}>
                  <Link href="/contact-us"><span className="relative z-10">Select Plan</span></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
