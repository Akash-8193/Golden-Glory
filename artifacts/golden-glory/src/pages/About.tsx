import React from 'react';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function About() {
  return (
    <PageTransition>
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/luxury_about_1780746701861.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="About Golden Glory" />
          <div className="absolute inset-0 bg-[#432c1c]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#432c1c]/60 via-[#432c1c]/30 to-[#432c1c]/60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ffa602] animate-pulse"></span>
              <span className="text-[#ffa602] text-xs font-bold tracking-[0.2em] uppercase">Who We Are</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}>
              About <span className="text-[#ffa602]">Golden Glory</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-100 font-light mb-6" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
              A premium coworking space in Noida offering flexible workstations, private cabins, and modern amenities.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce">
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 1. New Who We Are Section */}
      <WhoWeAreSection />

      {/* 2. Original Shared About Section */}
      <AboutSection />

      {/* 2. Why Golden Glory - Redesigned to look premium */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image Side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#f4f9fd] rounded-[3rem] transform -rotate-3 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Why Golden Glory"
                className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#432c1c] text-white p-8 rounded-[2rem] shadow-xl z-20 max-w-[250px]">
                <div className="text-[#ffa602] text-4xl font-sans font-bold mb-2">100%</div>
                <div className="font-medium text-sm">Commitment to your productivity and growth.</div>
              </div>
            </div>

            {/* Right Text Side */}
            <div className="lg:pl-10 relative z-10">
              <div className="text-[#ffa602] font-bold tracking-wider uppercase text-sm mb-4">Why Choose Us</div>
              <h2 className="text-4xl md:text-5xl font-bold font-sans text-[#111] leading-[1.1] mb-6">
                Why Golden Glory
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                Golden Glory delivers a seamless coworking experience built for productivity, comfort, and growth, giving professionals and teams the right environment to focus, collaborate, and scale effortlessly.
              </p>
              <ul className="space-y-6">
                {[
                  "Enjoy ergonomic seating, calming interiors, and balanced lighting that create a stress-free workspace designed to support long working hours with ease.",
                  "Choose from multiple workspace options tailored for individuals, startups, and teams, ensuring your setup grows as your business needs evolve.",
                  "Connect with driven professionals through collaborative zones and networking opportunities that help you build meaningful relationships and expand your business reach."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#ffa602]/30 hover:bg-[#ffa602]/5 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-[#ffa602] shrink-0 mt-0.5" />
                    <p className="text-[#111]/80 font-medium">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work - Redesigned Grid */}
      <section className="py-16 md:py-20 bg-[#432c1c] relative">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          <div className="text-center mb-20">
            <div className="text-[#ffa602] font-bold tracking-wider uppercase text-sm mb-4">Our Process</div>
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-white leading-[1.1]">
              How We Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Enquiry & Consultation", desc: "We understand your workspace needs, team size, budget, and preferred environment to recommend the best coworking solution." },
              { num: "02", title: "Visit & Explore", desc: "Visit our coworking space for a guided walkthrough to explore cabins, dedicated desks, meeting rooms, and shared amenities." },
              { num: "03", title: "Choose Your Plan", desc: "Choose a flexible plan that fits your workflow — from day passes and hot desks to dedicated cabins and team offices." },
              { num: "04", title: "Move In & Start Working", desc: "Get instant access to your workspace with quick onboarding, stable internet, and all essential services ready from day one." }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors relative group overflow-hidden">
                <div className="absolute -right-6 -top-10 text-[8rem] font-sans font-bold text-white/5 group-hover:text-[#ffa602]/10 transition-colors pointer-events-none">
                  {step.num}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-[#ffa602] flex items-center justify-center text-[#111] font-bold text-2xl mb-8 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Shared Testimonials Section from Home */}
      <TestimonialsSection />

      {/* 5. Bottom CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#111] mb-8">Ready to move in?</h2>
          <Button asChild size="lg" className="h-14 px-10 rounded-full bg-[#ffa602] text-[#111] hover:bg-[#e09612] font-bold tracking-wider uppercase transition-all shadow-xl group">
            <a href="https://wa.me/919311076106" target="_blank" rel="noopener noreferrer">
              Connect With Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
