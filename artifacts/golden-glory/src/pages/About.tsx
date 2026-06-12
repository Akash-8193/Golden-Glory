import React from 'react';
import PageTransition from '@/components/PageTransition';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';

export default function About() {
  return (
    <PageTransition>
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="About Golden Glory" />
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-6 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dca646]"></span>
              <span className="text-[#dca646] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Who We Are</span>
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
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
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
                src="/images/gallery/cover%20image%20of%20golden%20glory.png"
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
                Why rent an empty room and waste your time on furniture, Wi-Fi, and electricity bills? At Golden Glory, we give you a fully ready premium office. You just come in, open your laptop, and start working. We will take care of the rest.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Focus Only on Work", desc: "No tension of office maintenance, power cuts, or cleaning staff. We manage everything 100% so you can focus on your business." },
                  { title: "Flexible & Pocket-Friendly", desc: "Do not lock your money in heavy office deposits. Start with one seat and upgrade to a private cabin anytime." },
                  { title: "Great Vibe & Free Coffee", desc: "Work in a beautiful environment with unlimited tea and coffee. Meet other smart business owners and maybe find your next client here." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[#ffa602]/30 hover:bg-[#ffa602]/5 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-[#ffa602] shrink-0 mt-0.5" />
                    <p className="text-[#111]/80 font-medium"><strong className="text-[#111] font-bold">{item.title}:</strong> {item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Work - Timeline */}
      <ServicesSection />

      {/* 4. Shared Testimonials Section from Home */}
      <TestimonialsSection />

      {/* 5. Bottom CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-[#111] mb-8">Ready to move in?</h2>
          <Button asChild size="lg" className="h-14 px-10 rounded-full bg-[#ffa602] text-[#111] hover:bg-[#e09612] font-bold tracking-wider uppercase transition-all shadow-xl group">
            <Link href="/contact-us">
              Connect With Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
