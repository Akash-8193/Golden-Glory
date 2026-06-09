import React from 'react';
import { Link } from 'wouter';
import { MapPin, Instagram, Facebook, Mail, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#432c1c] text-white pt-24 pb-8 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#ffa602]/10 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-16 mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Ready to elevate your <span className="text-[#ffa602] relative inline-block">
                workspace?
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#ffa602]/20 -z-10 blur-sm"></span>
              </span>
            </h2>
            <p className="text-gray-300 text-lg font-light">
              Join a vibrant community of professionals, startups, and growing teams today.
            </p>
          </div>
          <Link 
            href="/contact-us"
            className="group inline-flex items-center gap-4 bg-[#ffa602] text-[#111] rounded-full pl-8 pr-2 py-2 hover:bg-white transition-all duration-300 shadow-[0_8px_30px_rgba(245,166,35,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)]"
          >
            <span className="font-bold tracking-wide uppercase text-sm">Book a Tour</span>
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#111] text-[#ffa602] group-hover:bg-[#432c1c] group-hover:text-white transition-colors duration-300">
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </span>
          </Link>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info (Spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="font-sans font-black tracking-tight text-3xl flex gap-1.5 uppercase transition-transform group-hover:scale-105">
                <span className="text-[#ffa602]">Golden</span>
                <span className="text-white">Glory</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm font-light">
              A premium coworking space in Noida designed to inspire creativity, foster collaboration, and drive your business forward.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/goldenglory_coworking_space/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#ffa602] hover:text-[#111] hover:border-[#ffa602] transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/people/Golden-Glory/61579901225099/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#ffa602] hover:text-[#111] hover:border-[#ffa602] transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-serif font-bold mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-[#ffa602] transition-colors relative inline-block group">Home<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffa602] transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="/about-coworking-space-in-noida" className="text-gray-400 hover:text-[#ffa602] transition-colors relative inline-block group">About Us<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffa602] transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="/our-offerings" className="text-gray-400 hover:text-[#ffa602] transition-colors relative inline-block group">Our Offerings<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffa602] transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="/coworking-space-gallery" className="text-gray-400 hover:text-[#ffa602] transition-colors relative inline-block group">Gallery/Tour<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffa602] transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="/coworking-space-in-noida-blog" className="text-gray-400 hover:text-[#ffa602] transition-colors relative inline-block group">Blog<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffa602] transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link href="/contact-us" className="text-gray-400 hover:text-[#ffa602] transition-colors relative inline-block group">Contact Us<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffa602] transition-all duration-300 group-hover:w-full"></span></Link></li>
            </ul>
          </div>

          {/* Column 3: Workspaces (Spans 3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-serif font-bold mb-6 text-white tracking-wide">Workspaces</h4>
            <ul className="space-y-4">
              {['Flexible Seat', 'Fixed Desk', 'Private Cabins', 'Meeting Rooms', 'Virtual Office'].map((item) => (
                <li key={item}>
                  <Link 
                    href="/our-offerings" 
                    className="text-gray-400 hover:text-[#ffa602] transition-colors relative inline-block group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ffa602] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (Spans 3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-serif font-bold mb-6 text-white tracking-wide">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#ffa602] group-hover:text-[#111] transition-colors">
                  <MapPin className="w-5 h-5 text-[#ffa602] group-hover:text-[#111]" />
                </div>
                <span className="pt-1">111, F-Block, Sector-8, <br/>Noida-201301, India</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 hover:text-[#ffa602] transition-colors group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#ffa602] group-hover:text-[#111] transition-colors">
                  <Mail className="w-5 h-5 text-[#ffa602] group-hover:text-[#111]" />
                </div>
                <a href="mailto:info@goldenglory.space" className="pt-1">info@goldenglory.space</a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 hover:text-[#ffa602] transition-colors group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-[#ffa602] group-hover:text-[#111] transition-colors">
                  <Phone className="w-5 h-5 text-[#ffa602] group-hover:text-[#111]" />
                </div>
                <a href="tel:+919958849645" className="pt-1">+91-99-588-49-645</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 font-medium">
          <p>© {currentYear} Golden Glory. All Rights Reserved.</p>
          <div className="flex items-center flex-wrap justify-center gap-4">
            <span>Designed By: <a href="https://sprintdigitech.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-gray-300">Sprint Digitech</a></span>
            <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block"></span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block"></span>
            <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
