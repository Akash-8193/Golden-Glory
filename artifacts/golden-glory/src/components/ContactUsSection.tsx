import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, ArrowRight } from 'lucide-react';

export default function ContactUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Map */}
          <div className="lg:col-span-5 relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 at-animation-image-style-1">
            {/* Transparent overlay to prevent accidental scroll zooming on the map */}
            <div className="absolute inset-0 z-10 pointer-events-none" />
            <iframe 
              src="https://maps.google.com/maps?q=111,%20F-Block,%20Sector-8,%20Noida&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Golden Glory Location"
              className="image-target"
            ></iframe>
          </div>

          {/* Right Column - Content & Form */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            <div className="mb-8">
              <div className="text-[#432c1c] font-semibold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                <span>+</span> CONTACT NOW
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-sans text-[#432c1c] leading-[1.1] mb-4 tracking-tight at-animation-heading-style-3">
                Get in Touch with Golden Glory
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Golden Glory is always ready to assist you. Whether you need workspace details, pricing, or a quick tour, our team is here to guide you.
              </p>
            </div>

            {/* Side-by-Side: Details and Form */}
            <div className="grid xl:grid-cols-2 gap-8 items-start">
              
              {/* Contact Info List */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-[#432c1c]">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 border-zooming">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] font-medium leading-snug">111, F-Block, Sector-8, Noida-201301</span>
                </div>
                <div className="flex items-center gap-4 text-[#432c1c]">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 border-zooming">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] font-medium">+91-99-588-49-645</span>
                </div>
                <div className="flex items-center gap-4 text-[#432c1c]">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 border-zooming">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] font-medium">info@goldenglory.space</span>
                </div>
                <div className="flex items-center gap-4 text-[#432c1c]">
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0 border-zooming">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-medium">Mon to Sat 9:00AM to 9:00PM</span>
                    <div className="flex items-center gap-4 mt-4">
                      <a href="https://www.facebook.com/people/Golden-Glory/61579901225099/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#432c1c] transition-colors">
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a href="https://www.instagram.com/goldenglory_coworking_space/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#432c1c] transition-colors">
                        <Instagram className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form (Compact) */}
              <div className="bg-[#f4f9fd] p-6 rounded-[1.5rem]">
                <form className="space-y-4">
                  <div className="space-y-1.5">
                    <input type="text" className="w-full h-11 px-4 text-sm rounded-lg border border-white bg-white focus:outline-none focus:ring-2 focus:ring-[#432c1c]/20 transition-all" placeholder="Your Name" />
                  </div>
                  <div className="space-y-1.5">
                    <input type="email" className="w-full h-11 px-4 text-sm rounded-lg border border-white bg-white focus:outline-none focus:ring-2 focus:ring-[#432c1c]/20 transition-all" placeholder="Email Address" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <input type="tel" className="w-full h-11 px-4 text-sm rounded-lg border border-white bg-white focus:outline-none focus:ring-2 focus:ring-[#432c1c]/20 transition-all" placeholder="Mobile No." />
                    </div>
                    <div className="space-y-1.5">
                      <input type="text" className="w-full h-11 px-4 text-sm rounded-lg border border-white bg-white focus:outline-none focus:ring-2 focus:ring-[#432c1c]/20 transition-all" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <textarea className="w-full h-24 p-4 text-sm rounded-lg border border-white bg-white focus:outline-none focus:ring-2 focus:ring-[#432c1c]/20 transition-all resize-none" placeholder="Your Message (optional)"></textarea>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#432c1c] hover:bg-[#082a30] text-white h-12 rounded-lg font-medium transition-colors duration-300 btn-anime relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <div className="w-6 h-6 rounded-full bg-white text-[#432c1c] flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </span>
                  </button>
                </form>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
