"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
import { useGsapAnimations } from "@/hooks/useGsapAnimations";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useGsapAnimations([pathname]);
  const [queryClient] = useState(() => new QueryClient());
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    (window as any).lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger on route changes after a short delay for DOM to update
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <TooltipProvider>
        <div className="grain-overlay" />
        <CustomCursor />
        <div className="flex min-h-screen flex-col overflow-x-hidden selection:bg-primary/30 selection:text-primary">
          <Navigation />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppWidget />
      </TooltipProvider>
      <Toaster />
    </QueryClientProvider>
  )
}
