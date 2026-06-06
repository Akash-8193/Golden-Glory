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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Horizontal scroll
    if (horizontalScrollRef.current && containerRef.current) {
      const pinWrap = horizontalScrollRef.current;
      const pinWrapWidth = pinWrap.scrollWidth;

      gsap.to(pinWrap, {
        x: () => -(pinWrapWidth - window.innerWidth + 100),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + pinWrapWidth,
          invalidateOnRefresh: true,
        }
      });
    }

    // Number counters
    if (statsRef.current) {
      const numbers = statsRef.current.querySelectorAll('.stat-num');
      numbers.forEach((num) => {
        const target = parseFloat(num.getAttribute('data-target') || '0');
        gsap.to(num, {
          innerHTML: target,
          duration: 2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
          snap: { innerHTML: 1 },
          onUpdate: function() {
            if (num.innerHTML.includes('.')) {
              num.innerHTML = parseFloat(num.innerHTML).toFixed(1);
            }
          }
        });
      });
    }
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 hidden md:block">
          <WebGLCanvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            fallback={
              <div className="hero-css-fallback" aria-hidden="true">
                <div className="hero-grid" />
                <div className="hero-ring-1" />
                <div className="hero-ring-2" />
                <div className="hero-ring-3" />
                <div className="hero-glow" />
              </div>
            }
          >
            <HeroScene />
          </WebGLCanvas>
        </div>
        <div className="absolute inset-0 z-0 bg-background/80 md:bg-background/40" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
              <SplitText>Comfort Meets Productivity</SplitText>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Premium Coworking Space in Noida for Professionals
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto">
              A vibrant coworking space in Noida that fuels focus, collaboration, and constant progress. Designed for those who hustle, dream big, and build brands that leave a mark.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-accent rounded-none" data-cursor="hover">
                <a href="https://wa.me/919958849645" target="_blank" rel="noopener noreferrer">
                  Connect on WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base border-primary/20 hover:bg-primary/10 rounded-none" data-cursor="hover">
                <Link href="/contact">
                  Schedule Your Tour
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full overflow-hidden bg-primary py-4 whitespace-nowrap border-y border-border">
        <div className="flex gap-4 animate-marquee inline-block text-primary-foreground font-serif text-xl tracking-widest uppercase">
          {Array(4).fill("PREMIUM COWORKING · NOIDA SECTOR 8 · FLEXIBLE PLANS · LUXURY INTERIOR · ").map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <WebGLCanvas camera={{ position: [0, 0, 15] }}>
            <ParticleField />
          </WebGLCanvas>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <SplitText>The Space That Elevates</SplitText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to work smarter, grow faster, and achieve more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Flexible Plans", desc: "Customize seating for individuals, startups, remote teams." },
              { icon: HandCoins, title: "Luxury Interior", desc: "Spacious, modern, beautifully designed workspaces." },
              { icon: Wifi, title: "Stable Connectivity", desc: "High-speed fiber internet with uninterrupted performance." },
              { icon: Zap, title: "Power Backup", desc: "Full generator backup ensuring seamless operations." },
              { icon: UserCheck, title: "Professional Support", desc: "Front-desk assistance and on-ground support." },
              { icon: ShieldCheck, title: "Clean & Hygienic", desc: "Well-maintained, regularly cleaned workspace." },
              { icon: MapPin, title: "Prime Location", desc: "Noida Sector 8, close to metro and key landmarks." },
              { icon: HandCoins, title: "Affordable Pricing", desc: "Premium coworking at competitive pricing." }
            ].map((feat, i) => (
              <Card key={i} className="bg-card border-border/50 rounded-none overflow-hidden group hover:border-primary/50 transition-colors" data-cursor="hover">
                <CardContent className="p-8">
                  <feat.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Plans */}
      <section ref={containerRef} className="bg-secondary h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-12 shrink-0 w-full max-w-sm absolute left-4 md:left-8 z-10 top-1/2 -translate-y-1/2 hidden lg:block">
            <SplitText>Workspace</SplitText><br/>
            <span className="text-primary italic">Plans</span>
          </h2>
          <div className="lg:pl-[400px]">
            <div ref={horizontalScrollRef} className="flex gap-8 w-max px-4">
              {[
                { title: "Flexible Desk", price: "5,500", for: "Freelancers, remote workers", feats: ["Flexible seating", "High-speed internet", "Pantry + tea & coffee"] },
                { title: "Dedicated Desk", price: "6,500", for: "Regular professionals", feats: ["Personal fixed desk", "Secure setup", "Meeting room (limited)"] },
                { title: "Enclosed Cabin", price: "8,000", suffix: "/seat", for: "Small teams", feats: ["Private lockable cabin", "Noise-free", "Branding options"] },
                { title: "Executive Cabin", price: "30,000", for: "Founders, executives", feats: ["Premium private cabin", "Ergonomic seating", "Meeting room credits"] },
              ].map((plan, i) => (
                <Card key={i} className="w-[350px] shrink-0 bg-background border-border rounded-none p-8 flex flex-col h-[500px]" data-cursor="hover">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary">Rs. {plan.price}</span>
                    <span className="text-sm text-muted-foreground">/Mo{plan.suffix}</span>
                  </div>
                  <p className="text-sm text-foreground/80 font-medium mb-6 pb-6 border-b border-border">
                    Best for: {plan.for}
                  </p>
                  <ul className="space-y-4 mb-auto">
                    {plan.feats.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full rounded-none mt-6" variant="outline" data-cursor="hover">Get a Quote</Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold font-serif mb-2"><span className="stat-num" data-target="200">0</span>+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Happy Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold font-serif mb-2"><span className="stat-num" data-target="8">0</span>+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Workspace Options</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold font-serif mb-2"><span className="stat-num" data-target="99.9">0</span>%</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Uptime Internet</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold font-serif mb-2"><span className="stat-num" data-target="5">0</span></div>
              <div className="text-sm uppercase tracking-wider opacity-80">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <SplitText>How We Work</SplitText>
            </h2>
          </div>
          <div className="space-y-12">
            {[
              { num: "01", title: "Enquiry & Consultation", desc: "We understand your workspace needs, team size, budget." },
              { num: "02", title: "Visit & Explore", desc: "Guided walkthrough of cabins, desks, meeting rooms." },
              { num: "03", title: "Choose Your Plan", desc: "From day passes and hot desks to dedicated cabins." },
              { num: "04", title: "Move In & Start Working", desc: "Quick onboarding, stable internet, all services ready." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                <div className="font-serif text-5xl md:text-7xl font-bold text-primary/20 shrink-0">{step.num}</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">
            <SplitText>Member Experiences</SplitText>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { quote: "Golden Glory combines comfort and professionalism, making it one of the best coworking spaces in Noida for daily productivity.", author: "Vansh Jain", title: "Founder, Fovestta" },
              { quote: "As a digital agency, we need focus, consistency, and fast internet. Golden Glory delivers all of it with a premium coworking experience.", author: "Nancy Jain", title: "Director, Sprint Digitech" },
              { quote: "A productive environment with flexible seating, friendly staff, and a genuinely professional vibe. One of the best choices.", author: "Rohan Mehta", title: "Freelancer" },
              { quote: "The cabins are quiet, the amenities are excellent, and the location is perfect. A dependable coworking space in Noida.", author: "Shruti Verma", title: "Freelancer" }
            ].map((test, i) => (
              <Card key={i} className="bg-background border-border rounded-none" data-cursor="hover">
                <CardContent className="p-8">
                  <div className="text-4xl text-primary font-serif leading-none mb-4">"</div>
                  <p className="text-foreground/90 italic mb-6">{test.quote}</p>
                  <div>
                    <div className="font-bold text-foreground">{test.author}</div>
                    <div className="text-sm text-muted-foreground">{test.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <SplitText>Frequently Asked Questions</SplitText>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "What types of workspaces do you offer?", a: "Hot desks, dedicated desks, private cabins, meeting rooms, conference rooms, day passes, virtual offices, and customized solutions." },
              { q: "Is high-speed internet included in all plans?", a: "Yes. Every plan includes stable, high-speed fiber internet for smooth work, meetings, and daily operations." },
              { q: "Do you provide private cabins for teams?", a: "Absolutely. Private cabins for individuals, small teams, and growing businesses with options for additional seating." },
              { q: "Are meeting rooms and conference rooms available?", a: "Yes. Meeting and conference rooms can be booked as part of your plan or on request." },
              { q: "What amenities are included in the workspace?", a: "AC, power backup, tea/coffee, pantry access, housekeeping, CCTV, gaming area, reception support, printer/scanner, and more." },
              { q: "Is parking available for members?", a: "Yes. Both 2-wheeler and 4-wheeler parking for members, subject to availability." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg hover:text-primary transition-colors data-[state=open]:text-primary" data-cursor="hover">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 bg-secondary border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">Ready to Elevate Your Work?</h2>
          <Button asChild size="lg" className="h-16 px-10 text-lg bg-primary text-primary-foreground hover:bg-accent rounded-none" data-cursor="hover">
            <Link href="/contact">Book Your Tour Today</Link>
          </Button>
        </div>
      </section>
      
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
