import React from 'react';
import { ArrowRight, Star, Building2, IndianRupee, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FA] relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#E5E9F0]/40 rounded-tr-[100px] lg:rounded-tr-[300px] -z-10" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative">
          
          {/* Left Column: Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 fade-up">
              <span className="text-primary font-bold text-xl">/</span>
              <span className="text-muted-foreground font-medium text-lg">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans text-[#432c1c] font-bold leading-[1.15] mb-6 at-animation-heading-style-3">
              Our Vision: A Space Where Great Ideas Grow
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-lg typewriter">
              Golden Glory started with a simple belief: a great working environment can completely change how a business performs. We didn't just want to rent out desks; we wanted to build a strong community. Our mission is to provide a premium, peaceful space in Noida where startups, freelancers, and businesses can come together and grow without limits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-10 mb-12">
              {/* Features List */}
              <div className="space-y-6 flex-1 excellence-counter-boxes fade-up">
                <div className="flex items-center gap-4 excellence-counter-item">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-border/50 border-zooming">
                    <Building2 className="w-6 h-6 text-[#432c1c]" />
                  </div>
                  <span className="font-bold text-[#432c1c] text-lg">Fully Managed Office</span>
                </div>
                <div className="flex items-center gap-4 excellence-counter-item">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-border/50 border-zooming">
                    <IndianRupee className="w-6 h-6 text-[#432c1c]" />
                  </div>
                  <span className="font-bold text-[#432c1c] text-lg">Zero Hidden Costs</span>
                </div>
                <div className="flex items-center gap-4 excellence-counter-item">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-border/50 border-zooming">
                    <MapPin className="w-6 h-6 text-[#432c1c]" />
                  </div>
                  <span className="font-bold text-[#432c1c] text-lg">Prime Metro Location</span>
                </div>
              </div>

              {/* Floating Card - Positioned relative to the flex container on desktop */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-border/30 h-fit max-w-[280px] lg:absolute lg:top-[60%] lg:-right-16 xl:-right-24 z-20 gsap-float pointer-events-none">
                <div className="flex -space-x-3 mb-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Member" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Member" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Member" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="Member" />
                </div>
                <div className="flex gap-1 text-[#F59E0B] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#432c1c]">Trusted By <span className="stat-num" data-target="1000">0</span>+ Members</p>
              </div>
            </div>
            
            <Link href="/contact-us">
              <Button size="lg" className="h-14 px-8 rounded-full bg-[#432c1c] hover:bg-[#432c1c]/90 text-white text-base font-semibold shadow-[0_10px_30px_rgba(10,37,64,0.3)] transition-all w-full sm:w-auto btn-anime group fade-up">
                Book Workspace
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </Link>
          </div>
          
          {/* Right Column: Circular Images Grid */}
          <div className="relative w-full max-w-[450px] md:max-w-[600px] lg:max-w-[650px] aspect-square mx-auto mt-2 lg:-mt-12 xl:-mt-16">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 h-full">
              {/* Top Left */}
              <div className="overflow-hidden rounded-tl-full bg-gray-200 image-anime at-animation-image-style-1">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700" alt="Coworking space" />
              </div>
              {/* Top Right */}
              <div className="overflow-hidden rounded-tr-full bg-gray-200 image-anime at-animation-image-style-1">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700" alt="Meeting room" />
              </div>
              {/* Bottom Left */}
              <div className="overflow-hidden rounded-bl-full bg-gray-200 image-anime at-animation-image-style-1">
                <img src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700" alt="Hot desk" />
              </div>
              {/* Bottom Right */}
              <div className="overflow-hidden rounded-br-full bg-gray-200 image-anime at-animation-image-style-1">
                <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700" alt="Community" />
              </div>
            </div>
            
            {/* Center Overlapping Logo Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl border-[8px] md:border-[12px] border-[#F8F9FA] z-20 overflow-hidden">
              <img src="/logo.jpeg" alt="Golden Glory Logo" className="w-[85%] h-[85%] object-contain mix-blend-multiply contrast-125 brightness-110" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
