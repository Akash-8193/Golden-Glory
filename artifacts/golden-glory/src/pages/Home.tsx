import React, { useEffect, useRef } from 'react';
import PageTransition from '@/components/PageTransition';
import WebGLCanvas from '@/components/WebGLCanvas';
import HeroScene from '@/components/HeroScene';
import ParticleField from '@/components/ParticleField';
import SplitText from '@/components/SplitText';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Wifi, Zap, UserCheck, ShieldCheck, MapPin, HandCoins, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import OurSolutionsSection from '@/components/OurSolutionsSection';
import PricingSection from '@/components/PricingSection';
import LatestBlogsSection from '@/components/LatestBlogsSection';
import ContactUsSection from '@/components/ContactUsSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Number counters logic has been moved to useGsapAnimations for global access
  }, []);

  return (
    <PageTransition>
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-32 lg:pt-36 pb-16">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/cover%20image%20of%20golden%20glory.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Premium Coworking Space" />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-6xl w-full mx-auto bg-black/20 backdrop-blur-md border border-white/20 px-6 py-6 lg:px-16 lg:py-8 rounded-[2rem] shadow-2xl space-y-3 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-1 shadow-lg fade-up">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffa602] animate-pulse"></span>
              <span className="text-[#ffa602] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Premium Coworking Space</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-white leading-[1.05] at-animation-heading-style-3" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}>
              Comfort Meets <br />
              <span className="text-[#ffa602] relative" style={{ textShadow: "0 0 20px rgba(255,166,2,0.3)" }}>
                Productivity
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-100 font-light max-w-4xl mx-auto leading-relaxed typewriter" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
              A vibrant coworking space designed for those who hustle, dream big, and build brands that leave a mark.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-1 fade-up">
              <Button asChild size="lg" className="w-full sm:w-auto h-16 px-10 text-lg bg-[#ffa602] text-[#111] hover:bg-[#e09612] rounded-full shadow-[0_0_40px_rgba(245,166,35,0.3)] hover:shadow-[0_0_60px_rgba(245,166,35,0.5)] transition-all duration-300 font-bold uppercase tracking-wider group btn-anime">
                <a href="https://wa.me/919311076106" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Book A Tour</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-16 px-10 text-lg border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#111] rounded-full shadow-lg transition-all duration-300 font-bold uppercase tracking-wider group btn-anime">
                <Link href="/our-offerings">
                  <span className="relative z-10">Explore Plans</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full overflow-hidden bg-primary py-4 whitespace-nowrap border-y border-border">
        <div className="flex gap-4 animate-marquee inline-block text-primary-foreground font-sans text-xl tracking-widest uppercase">
          {Array(4).fill("PREMIUM COWORKING · NOIDA SECTOR 8 · FLEXIBLE PLANS · LUXURY INTERIOR · ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
      </div>

      <AboutSection />

      {/* Why Choose Us Redesign 3 (Exact Match to Reference Image) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">

          {/* Top Row: Title and Description */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-24 relative z-20">
            {/* Left Title */}
            <div className="lg:w-3/5">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6 text-[#ffa602]" />
                <span className="font-bold text-[#111] tracking-wider text-lg">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold font-sans uppercase leading-[1.0] tracking-tight text-[#111]">
                PREMIUM COWORKING FOR <br className="hidden md:block" />
                <span className="text-[#ffa602]">PRODUCTIVE PROFESSIONALS</span>
              </h2>
            </div>

            {/* Right Description & Button */}
            <div className="lg:w-2/5 pt-4">
              <p className="text-gray-500 text-xl leading-relaxed mb-8 font-medium">
                Our premium coworking space in Noida provides personalized seating, modern amenities, and an environment designed to help you focus, collaborate, and grow your business with confidence.
              </p>
              <Button asChild size="lg" className="h-14 px-8 bg-[#ffa602] hover:bg-[#E09612] text-[#111] font-bold text-base rounded-none transition-transform hover:-translate-y-1">
                <Link href="/contact-us">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2 -rotate-45" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Bottom Row: Features around Central Image */}
          <div className="relative pt-10 pb-20">
            {/* Central Image (Always positioned at the bottom center of the section) */}
            <div className="hidden lg:block absolute left-1/2 bottom-[-80px] -translate-x-1/2 w-[550px] h-[750px] z-10 pointer-events-none">
              <img src="/images/gallery/ending%20image%20golden%20glory.png" alt="Indian Professional in Coworking Space in Noida" className="w-full h-full object-cover object-bottom" />
            </div>

            <div className="grid lg:grid-cols-2 gap-y-20 lg:gap-y-32 relative z-20">

              {/* Left Column Features */}
              <div className="space-y-20 lg:pr-[350px]">
                {/* Feature 1 */}
                <div className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <div className="w-16 h-16 rounded-full border-2 border-[#ffa602] flex items-center justify-center">
                      <UserCheck className="w-8 h-8 text-[#ffa602]" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.7rem] font-bold text-[#111] mb-3 leading-none">Flexible Workspaces</h3>
                    <p className="text-gray-500 text-[1.15rem] leading-relaxed">
                      We offer a wide variety of seating that caters to freelancers, startups, and remote teams perfectly.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <div className="w-16 h-16 rounded-full border-2 border-[#ffa602] flex items-center justify-center">
                      <Wifi className="w-8 h-8 text-[#ffa602]" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.7rem] font-bold text-[#111] mb-3 leading-none">High-Speed Internet</h3>
                    <p className="text-gray-500 text-[1.15rem] leading-relaxed">
                      Experience uninterrupted high-speed fiber internet designed for seamless meetings and deep focus work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column Features */}
              <div className="space-y-20 lg:pl-[350px]">
                {/* Feature 3 */}
                <div className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <div className="w-16 h-16 rounded-full border-2 border-[#ffa602] flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-[#ffa602]" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.7rem] font-bold text-[#111] mb-3 leading-none">Strategic Location</h3>
                    <p className="text-gray-500 text-[1.15rem] leading-relaxed">
                      Located in Noida Sector 8, our coworking space offers unbeatable access to metro and major hubs.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <div className="w-16 h-16 rounded-full border-2 border-[#ffa602] flex items-center justify-center">
                      <HandCoins className="w-8 h-8 text-[#ffa602]" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.7rem] font-bold text-[#111] mb-3 leading-none">Affordable Pricing</h3>
                    <p className="text-gray-500 text-[1.15rem] leading-relaxed">
                      Enjoy a luxury coworking experience with premium amenities at highly competitive and flexible rates.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile Fallback Image */}
            <div className="lg:hidden mt-16 flex justify-center">
              <img src="/images/gallery/ending%20image%20golden%20glory.png" alt="Indian Professional in Coworking Space Noida" className="h-[400px] w-auto object-cover object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]" />
            </div>

          </div>
        </div>
      </section>

      <OurSolutionsSection limit={3} />
      <ServicesSection />
      <PricingSection />

      {/* Stats */}
      <section ref={statsRef} className="py-24 bg-primary text-white shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold font-sans mb-2"><span className="stat-num" data-target="200">0</span>+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Happy Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold font-sans mb-2"><span className="stat-num" data-target="8">0</span>+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Workspace Options</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold font-sans mb-2"><span className="stat-num" data-target="99.9">0</span>%</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Uptime Internet</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold font-sans mb-2"><span className="stat-num" data-target="5">0</span></div>
              <div className="text-sm uppercase tracking-wider opacity-80">Average Rating</div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Redesign */}
      <TestimonialsSection />

      {/* FAQ Redesign */}
      <FAQSection
        faqs={[
          { q: "What coworking plans are available at Golden Glory?", a: "Golden Glory offers Hot/Flexible Desk, Dedicated Desk, Private Cabins, Day Pass, Virtual Office, Meeting Rooms, and Conference Rooms for individuals and teams in Noida Sector-8." },
          { q: "Can I book a workspace for a single day?", a: "Yes, our Day Pass allows access to all basic amenities at Golden Glory coworking space for one day." },
          { q: "What is the difference between Hot/Flexible Desk and Dedicated Desk?", a: "Hot/Flexible Desk offers flexible seating, while Dedicated Desk provides a fixed workstation for consistent use at Golden Glory." },
          { q: "Can teams book private cabins at Golden Glory?", a: "Yes, private cabins are available for small teams or startups, offering privacy, comfort, and ergonomic seating." },
          { q: "Do you offer virtual office services?", a: "Yes, Golden Glory provides a virtual office in Noida Sector-8, including business address, mail handling, and meeting room credits." },
          { q: "How do I book a workspace or plan?", a: "You can book online through our website, via WhatsApp, or by visiting Golden Glory coworking space in Noida Sector-8." }
        ]}
      />

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-sans text-4xl md:text-6xl font-bold mb-4">Move Into a Better Work Environment</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover a workspace designed for productivity, comfort, and community. Book your visit today and see the difference.
          </p>
          <Button asChild size="lg" className="h-16 px-10 text-lg bg-primary text-white hover:bg-foreground hover:text-white rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300" data-cursor="hover">
            <Link href="/contact-us">Connect Now</Link>
          </Button>
        </div>
      </section>

      <LatestBlogsSection />

      <ContactUsSection />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </PageTransition>
  );
}
