import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
}

export default function FAQSection({ 
  title = "Got questions? we've got answers",
  description = "Explore our FAQ for everything you need to know about coworking space in Noida. Get fast, clear answers to common queries.",
  faqs
}: FAQSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-[#f4f9fd] relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Image Grid */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="flex gap-4 md:gap-8 relative w-full pr-4 md:pr-6 lg:pr-12">
              {/* Left Image Column */}
              <div className="flex flex-col gap-4 md:gap-8 w-1/2">
                <div className="image-anime at-animation-image-style-1 rounded-[2.5rem] overflow-hidden shadow-md h-[300px] md:h-[420px]">
                  <img src="/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png" className="w-full h-full object-cover" alt="Coworking Space 1" />
                </div>
                <div className="image-anime at-animation-image-style-1 rounded-[2.5rem] overflow-hidden shadow-md h-[300px] md:h-[420px]">
                  <img src="/images/gallery/fixed%20desks%20golden%20glory.png" className="w-full h-full object-cover" alt="Coworking Space 3" />
                </div>
              </div>
              {/* Right Image Column (Staggered down) */}
              <div className="flex flex-col gap-4 md:gap-8 w-1/2 mt-16 md:mt-24">
                <div className="image-anime at-animation-image-style-1 rounded-[2.5rem] overflow-hidden shadow-md h-[250px] md:h-[360px]">
                  <img src="/images/gallery/private%20cabin%20golden%20glory%201.png" className="w-full h-full object-cover" alt="Coworking Space 2" />
                </div>
                <div className="image-anime at-animation-image-style-1 rounded-[2.5rem] overflow-hidden shadow-md h-[250px] md:h-[360px]">
                  <img src="/images/gallery/ending%20image%20golden%20glory.png" className="w-full h-full object-cover" alt="Coworking Space 4" />
                </div>
              </div>
              
              {/* Central Badge Wrapper for Position */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                {/* Animated Badge */}
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-xl border-8 border-[#f4f9fd] border-zooming gsap-float">
                  <img src="/logo.jpeg" alt="Golden Glory Logo" className="w-full h-full object-contain p-2 mix-blend-multiply contrast-125 brightness-110 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <div className="text-[#ffa602] font-bold tracking-wider uppercase text-sm mb-4 fade-up">FAQS</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-[#432c1c] leading-[1.1] mb-6 tracking-tight at-animation-heading-style-3">
                {title}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl typewriter">
                {description}
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-slate-200/60 bg-transparent py-2">
                  <AccordionTrigger className="text-left font-sans text-[1.15rem] md:text-xl font-bold text-[#432c1c] hover:text-[#ffa602] hover:no-underline data-[state=open]:text-[#ffa602] py-5 transition-colors [&>svg]:hidden group">
                    <div className="flex w-full justify-between items-center pr-4">
                      <span>{faq.q}</span>
                      <span className="text-[#ffa602] text-2xl font-light group-data-[state=open]:hidden">↓</span>
                      <span className="text-[#ffa602] text-2xl font-light hidden group-data-[state=open]:block">→</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-[1.05rem] leading-relaxed pb-6 pr-12">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
