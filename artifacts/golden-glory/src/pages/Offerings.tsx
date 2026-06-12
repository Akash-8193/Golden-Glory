import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Coffee, Rocket, Clock, MapPin } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import OurSolutionsSection from '@/components/OurSolutionsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';

export default function Offerings() {

  return (
    <PageTransition>
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/fixed%20desks%20golden%20glory.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Coworking Offerings" />
          <div className="absolute inset-0 bg-[#432c1c]/10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#432c1c]/30 via-transparent to-[#432c1c]/10"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-6 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dca646]"></span>
              <span className="text-[#dca646] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Workspace Solutions</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}>
              Choose What <span className="text-[#ffa602]">Fits You</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-100 font-light mb-6" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
              Where ambition meets the right environment.
            </p>


            {/* Action */}
            <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full bg-[#ffa602] text-[#111] hover:bg-[#e09612] shadow-[0_0_30px_rgba(245,166,35,0.3)] hover:shadow-[0_0_50px_rgba(245,166,35,0.5)] hover:-translate-y-1 transition-all duration-300 font-bold uppercase tracking-wider group">
              <a href="https://wa.me/919311076106" target="_blank" rel="noopener noreferrer">
                Book a Tour <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Solutions Overview */}
      <OurSolutionsSection />

      {/* Premium Features Redesigned Bento Grid */}
      <section className="py-16 md:py-20 bg-[#f4f9fd]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[300px]">

            {/* Main Header Card (Span 3 cols) */}
            <div className="lg:col-span-3 bg-[#432c1c] rounded-[2rem] p-10 lg:p-14 relative overflow-hidden flex flex-col justify-center group shadow-xl">
              {/* Decorative SVG background */}
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 transition-transform duration-700 group-hover:rotate-12">
                <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
                  <defs>
                    <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
                    </pattern>
                  </defs>
                  <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect>
                </svg>
              </div>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.1] z-10 relative text-white">
                Premium Workspace Features<br />
                <span className="text-[#ffa602]">Built for Productivity</span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl z-10 relative leading-relaxed font-light">
                A perfect workspace where you can actually get things done. Everything is taken care of—from fast Wi-Fi to comfortable seats—so you can just focus on your business.
              </p>
            </div>

            {/* Why Golden Glory Card (Tall, Span 1 col, 2 rows) */}
            <div className="lg:row-span-2 lg:col-span-1 relative rounded-[2rem] overflow-hidden group shadow-xl h-full min-h-[400px]">
              <img
                src="/images/gallery/private%20cabin%20golden%20glory%201.png"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Coworking space"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                <h3 className="font-sans text-3xl font-bold mb-4 text-[#ffa602]">Why Golden Glory</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Setting up your own office means paying heavy deposits, electricity bills, and internet charges. At Golden Glory, we take care of all these tensions. Just bring your laptop and start working from day one.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-medium text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#ffa602]/20 flex items-center justify-center shrink-0">
                      <Check className="text-[#ffa602] w-4 h-4" />
                    </div>
                    Zero Setup Cost & Low Deposits
                  </li>
                  <li className="flex items-center gap-3 font-medium text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#ffa602]/20 flex items-center justify-center shrink-0">
                      <Check className="text-[#ffa602] w-4 h-4" />
                    </div>
                    Free access to Meeting Rooms
                  </li>
                  <li className="flex items-center gap-3 font-medium text-sm">
                    <div className="w-6 h-6 rounded-full bg-[#ffa602]/20 flex items-center justify-center shrink-0">
                      <MapPin className="text-[#ffa602] w-4 h-4" />
                    </div>
                    Prime Location (Very close to Metro)
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 1: Community */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col justify-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#f4f9fd] text-[#ffa602] flex items-center justify-center mb-6 group-hover:bg-[#ffa602] group-hover:text-white transition-colors duration-300">
                <Rocket className="w-8 h-8" />
              </div>
              <h4 className="text-[#111] font-sans font-bold text-2xl mb-3">Good Networking</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Work alongside other startups and professionals. It is a great place to make new business connections while having a cup of coffee.</p>
            </div>

            {/* Feature 2: Cafe */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 flex flex-col justify-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#f4f9fd] text-[#432c1c] flex items-center justify-center mb-6 group-hover:bg-[#432c1c] group-hover:text-white transition-colors duration-300">
                <Coffee className="w-8 h-8" />
              </div>
              <h4 className="text-[#111] font-sans font-bold text-2xl mb-3">Cafeteria & Lounge</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Take a break from continuous work. Enjoy tea or coffee in our cafeteria and relax in the lounge area before your next meeting.</p>
            </div>

            {/* Feature 3: Smart Access */}
            <div className="bg-[#ffa602] rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(245,166,35,0.2)] flex flex-col justify-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6 backdrop-blur-sm">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-[#111] font-sans font-bold text-2xl mb-3">Flexible Timings</h4>
              <p className="text-[#111]/80 text-sm leading-relaxed font-medium">Work according to your own routine. We provide premium seating so you can work comfortably for long hours without any back pain.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingSection />

      {/* FAQ */}
      <FAQSection
        title="FAQ — Our Offerings"
        faqs={[
          { q: "What plans are available at Golden Glory?", a: "We offer hot desks, dedicated desks, private cabins, meeting rooms, day passes, virtual offices, and training rooms to suit different professional needs." },
          { q: "Are your coworking plans flexible?", a: "Yes, all plans are designed to be flexible. You can upgrade, downgrade, or switch your plan anytime based on your workflow and team size." },
          { q: "What amenities are included in the pricing?", a: "All plans include high-speed internet, air-conditioning, power backup, pantry access, CCTV security, housekeeping, and reception support. Some plans include meeting room credits." },
          { q: "Is there any additional cost for extra chairs in cabins?", a: "Yes, private cabins come with a standard 3-seater setup. Additional chairs are available at Rs.8,000 per seat per month." },
          { q: "Can I book a meeting or conference room separately?", a: "Absolutely. Meeting and conference rooms can be booked on request. Prices vary based on duration and availability." },
          { q: "Do you offer a day pass for short-term use?", a: "Yes, day passes are available for professionals who need workspace access for a single day without long commitments." },
          { q: "Is parking included in the workspace plans?", a: "Yes, we offer 2-wheeler and 4-wheeler parking facilities, available to all members on a first-come, first-served basis" }
        ]}
      />

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="bg-[#432c1c] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
            {/* Decorative BG */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="50" cy="50" r="40" fill="currentColor" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Find Your Perfect Desk?
              </h2>
              <p className="text-lg md:text-xl font-light text-white/80 mb-10 max-w-2xl mx-auto">
                Come over, take a tour, and see why professionals in Noida choose Golden Glory as their second home.
              </p>
              <Button asChild size="lg" className="h-14 px-10 rounded-full bg-[#ffa602] text-[#111] hover:bg-[#e09612] font-bold tracking-wider uppercase transition-all shadow-xl group">
                <a href="https://wa.me/919311076106" target="_blank" rel="noopener noreferrer">
                  Book Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
