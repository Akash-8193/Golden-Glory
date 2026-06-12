import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Offerings from "@/pages/Offerings";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import FAQ from "@/pages/FAQ";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Preloader from "@/components/Preloader";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import { useGsapAnimations } from "@/hooks/useGsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about-coworking-space-in-noida" component={About} />
        <Route path="/our-offerings" component={Offerings} />
        <Route path="/coworking-space-gallery" component={Gallery} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/coworking-space-in-noida-blog" component={Blog} />
        <Route path="/coworking-space-in-noida-blog/:slug" component={BlogPost} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/faq" component={FAQ} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const [pathname] = useLocation();
  useGsapAnimations([pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    // Expose lenis globally for scroll resets
    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <div className="grain-overlay" />
          <CustomCursor />
          <div className="flex min-h-screen flex-col overflow-x-hidden selection:bg-primary/30 selection:text-primary">
            <Navigation />
            <main className="flex-1 w-full">
              <Router />
            </main>
            <Footer />
          </div>
          <WhatsAppWidget />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
