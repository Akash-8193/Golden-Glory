import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-coworking-space-in-noida' },
    { label: 'Our Offerings', href: '/our-offerings' },
    { label: 'Gallery/Tour', href: '/coworking-space-gallery' },
    { label: 'Blog', href: '/coworking-space-in-noida-blog' },
    { label: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <>
      <header 
        className={`fixed z-50 transition-all duration-500 flex justify-center w-full px-4 md:px-8 ${
          scrolled ? 'top-4 md:top-6' : 'top-6'
        }`}
      >
        <div 
          className={`flex items-center justify-between w-[96%] lg:w-[90%] max-w-[1600px] bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full border border-black/5 transition-all duration-500 overflow-hidden ${
            scrolled ? 'py-3 px-5 md:px-8' : 'py-4 md:py-5 px-6 md:px-10'
          }`}
        >
          <Link href="/" className="flex items-center group" data-cursor="hover">
            {/* Logo Image */}
            <img 
              src="/logo.jpeg" 
              alt="Golden Glory Logo" 
              className={`object-contain transition-all duration-500 mix-blend-multiply contrast-125 brightness-110 scale-[1.6] md:scale-[1.8] origin-left ${scrolled ? 'h-9 md:h-10' : 'h-10 md:h-12'}`}
              onError={(e) => {
                // Fallback to text if logo image is not found
                e.currentTarget.style.display = 'none';
                const textLogo = document.getElementById('text-logo-fallback');
                if (textLogo) textLogo.style.display = 'flex';
              }}
            />
            {/* Text Fallback (visible if image fails) */}
            <div id="text-logo-fallback" className="hidden flex-col leading-tight ml-2">
              <div className="font-sans font-black tracking-tight text-xl md:text-2xl flex gap-1.5 uppercase">
                <span className="text-[#ffa602]">Golden</span>
                <span className="text-[#432c1c]">Glory</span>
              </div>
              <span className="text-[#432c1c] text-[0.6rem] md:text-[0.65rem] font-medium tracking-widest text-center uppercase">
                Coworking Space
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center gap-1.5 md:gap-2 lg:gap-3 xl:gap-5 2xl:gap-7 mr-2 md:mr-4 lg:mr-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      data-cursor="hover"
                      className={`text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs 2xl:text-sm font-bold tracking-wide uppercase transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#ffa602] after:transition-all after:duration-300 ${
                        location === link.href 
                          ? 'text-[#ffa602] after:w-full' 
                          : 'text-[#432c1c] hover:text-[#ffa602] after:w-0 hover:after:w-full'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Always Visible CTA Button */}
            <Button asChild className="rounded-none bg-[#ffa602] text-[#111] hover:bg-[#E09612] px-2 sm:px-3 md:px-4 lg:px-5 2xl:px-6 font-bold text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs 2xl:text-sm h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10" data-cursor="hover">
              <Link href="/contact-us">GET A QUOTE</Link>
            </Button>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-foreground p-1 sm:p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-sans text-xl font-bold tracking-wider text-foreground">
                GOLDEN <span className="text-primary">GLORY</span>
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center p-8 gap-8">
              <ul className="flex flex-col items-center gap-6 text-center">
                {links.map((link, i) => (
                  <motion.li 
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-3xl md:text-4xl transition-colors ${
                        location === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-4"
              >
                <Button asChild size="lg" className="rounded-none bg-[#ffa602] text-[#111] hover:bg-[#E09612] text-lg px-8 font-bold">
                  <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>GET A QUOTE</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
