import React, { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import { ArrowRight, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <PageTransition>
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/private%20cabin%20golden%20glory%202.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Contact Us" />
          <div className="absolute inset-0 bg-[#432c1c]/10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#432c1c]/30 via-transparent to-[#432c1c]/10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-6 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dca646]"></span>
              <span className="text-[#dca646] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Reach Our Team</span>
            </div>
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}>
              Get In <span className="text-[#ffa602]">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
              Whether you need workspace details, pricing, or a quick tour, our team is here to guide you and answer every question.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      <section className="py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          {/* Section 1: Send Message & Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Send Message</span>
                <span className="w-2 h-2 rounded-full bg-[#ffa602]"></span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[4rem] font-sans text-[#111] leading-[1.1]">
                Find Us Here. Make Real Results Happen.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                Golden Glory is always ready to assist you. Whether you need workspace details, pricing, or a quick tour, our team is here to guide you and answer every question.
              </p>

              <a href="https://wa.me/919311076106" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4 bg-transparent border border-black rounded-full pl-6 pr-1.5 py-1.5 hover:bg-black hover:text-white transition-all duration-300 mt-2">
                <span className="font-bold text-sm uppercase tracking-wide">Book Now</span>
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffa602] text-black transition-transform">
                  <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                </span>
              </a>
            </div>

            {/* Right Form Card */}
            <div className="bg-[#F6F2EB] rounded-[2.5rem] p-10 md:p-14 lg:p-16 min-h-[500px] flex flex-col justify-center">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center space-y-6 fade-up">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2 shadow-inner">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#111]">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-[320px]">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-8 py-3 rounded-full border border-black font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-8 fade-up" onSubmit={handleSubmit}>
                  <div>
                    <input type="text" required placeholder="Name" className="w-full bg-transparent border-b border-gray-300 pb-4 text-gray-800 focus:outline-none focus:border-[#ffa602] transition-colors placeholder:text-gray-500" />
                  </div>
                  <div>
                    <input type="email" required placeholder="Email" className="w-full bg-transparent border-b border-gray-300 pb-4 text-gray-800 focus:outline-none focus:border-[#ffa602] transition-colors placeholder:text-gray-500" />
                  </div>
                  <div>
                    <input type="tel" required placeholder="Phone" className="w-full bg-transparent border-b border-gray-300 pb-4 text-gray-800 focus:outline-none focus:border-[#ffa602] transition-colors placeholder:text-gray-500" />
                  </div>
                  <div>
                    <input type="text" required placeholder="Write a Message" className="w-full bg-transparent border-b border-gray-300 pb-4 text-gray-800 focus:outline-none focus:border-[#ffa602] transition-colors placeholder:text-gray-500" />
                  </div>
  
                  <button disabled={isSubmitting} type="submit" className="group inline-flex items-center gap-4 bg-transparent border border-black rounded-full pl-6 pr-1.5 py-1.5 hover:bg-black hover:text-white transition-all duration-300 mt-8 disabled:opacity-70 disabled:cursor-not-allowed">
                    <span className="font-bold text-sm uppercase tracking-wide">
                      {isSubmitting ? 'Sending...' : 'Submit Now'}
                    </span>
                    {!isSubmitting && (
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffa602] text-black transition-transform group-hover:bg-white">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-all duration-300 group-hover:text-black" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Section 2: Contact Details & Map */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Contact Us</span>
              <span className="w-2 h-2 rounded-full bg-[#ffa602]"></span>
            </div>
            <h2 className="text-5xl md:text-6xl font-sans text-[#111]">
              Get In Touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Map */}
            <div className="rounded-[2rem] overflow-hidden h-[480px]">
              <iframe
                src="https://maps.google.com/maps?q=111,+F-Block,+Sector-8,+Noida-201301,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-[0_10px_50px_rgba(0,0,0,0.03)] h-[480px] flex flex-col justify-center">
              <h3 className="text-[1.75rem] font-sans text-[#111] mb-12 font-bold">Contact Details</h3>

              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="text-[#ffa602] mt-1">
                    <MapPin className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[1.1rem] leading-relaxed">
                      111, F-Block, Sector-8<br />
                      Noida-201301, India
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100"></div>

                <div className="flex gap-6 items-center">
                  <div className="text-[#ffa602]">
                    <Mail className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[1.1rem]">
                      <a href="mailto:info@goldenglory.space" className="hover:text-[#ffa602] transition-colors">info@goldenglory.space</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-center">
                  <div className="text-[#ffa602]">
                    <Phone className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[1.1rem]">
                      <a href="tel:+919311076106" className="hover:text-[#ffa602] transition-colors">+91-99-588-49-645</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
