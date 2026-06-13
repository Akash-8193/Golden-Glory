import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSiteContent } from '@/hooks/useSiteContent';

export default function FAQ() {
  const { get } = useSiteContent();
  const faqSections = [
    {
      category: "SECTION A — Workspace & Plans",
      faqs: [
        { q: "What coworking plans are available at Golden Glory?", a: "Golden Glory offers Hot/Flexible Desk, Dedicated Desk, Private Cabins, Day Pass, Virtual Office, Meeting Rooms, and Conference Rooms for individuals and teams in Noida Sector-8." },
        { q: "Can I book a workspace for a single day?", a: "Yes, our Day Pass allows access to all basic amenities at Golden Glory coworking space for one day." },
        { q: "What is the difference between Hot/Flexible Desk and Dedicated Desk?", a: "Hot/Flexible Desk offers flexible seating, while Dedicated Desk provides a fixed workstation for consistent use at Golden Glory." },
        { q: "Can teams book private cabins at Golden Glory?", a: "Yes, private cabins are available for small teams or startups, offering privacy, comfort, and ergonomic seating." },
        { q: "Do you offer virtual office services?", a: "Yes, Golden Glory provides a virtual office in Noida Sector-8, including business address, mail handling, and meeting room credits." },
        { q: "How do I book a workspace or plan?", a: "You can book online through our website, via WhatsApp, or by visiting Golden Glory coworking space in Noida Sector-8." }
      ]
    },
    {
      category: "SECTION B — Pricing & Payment",
      faqs: [
        { q: "What are the pricing options for coworking plans?", a: "Hot/Flexible Desk starts at Rs.5,500/month, Dedicated Desk Rs.6,500/month, and Private Cabins Rs.20,000/month (3-seater) with additional charges per extra chair." },
        { q: "Are there any hidden fees at Golden Glory?", a: "No, all costs are transparent. Any add-ons, like extra meeting room hours or chairs, are clearly communicated." },
        { q: "What payment methods are accepted?", a: "We accept online bank transfers, UPI, and major debit/credit cards for all plans and bookings." },
        { q: "Can I upgrade or downgrade my plan?", a: "Yes, all plans at Golden Glory are flexible. You can change your workspace plan as per your requirements." },
        { q: "Are refunds available if I cancel my plan?", a: "Refunds and cancellations are handled according to Golden Glory's workspace policy. Contact our team for details." }
      ]
    },
    {
      category: "SECTION C — Amenities & Services",
      faqs: [
        { q: "What amenities are included in all plans?", a: "All plans include high-speed fiber internet, power backup, AC, pantry access, CCTV security, housekeeping, and reception support." },
        { q: "Can I use meeting rooms and conference rooms?", a: "Yes, members can book meeting and conference rooms as per availability. Some plans include credits for these rooms." },
        { q: "Is printing and scanning available?", a: "Yes, Golden Glory provides printer and scanner facilities for all members." },
        { q: "Do you provide parking for members?", a: "Yes, 2-wheeler and 4-wheeler parking is available for members at Golden Glory coworking space." },
        { q: "Are refreshments like tea and coffee included?", a: "Yes, pantry access includes tea and coffee for all members." },
        { q: "Is Golden Glory Coworking office space safe and secure?", a: "Absolutely. The space has CCTV surveillance, restricted access, and professional management for member safety." }
      ]
    },
    {
      category: "SECTION D — Location & Accessibility",
      faqs: [
        { q: "Where is Golden Glory coworking space located?", a: "We are at 111, F-Block, Sector-8, Noida, near Sector-16 Metro and landmarks like Hitachi Payment Bank." },
        { q: "Is it easy to commute to Golden Glory?", a: "Yes, the space is centrally located in Noida Sector-8 with metro, bus, and road connectivity for easy access." },
        { q: "Are there any nearby landmarks?", a: "Yes, Golden Glory is near Sector-16 Metro Station, Hitachi Payment Bank, and other key commercial hubs." },
        { q: "Is the space accessible for differently-abled professionals?", a: "Yes, Golden Glory is designed with accessibility in mind to accommodate all professionals." }
      ]
    },
    {
      category: "SECTION E — Community & Policies",
      faqs: [
        { q: "Can I bring visitors to Golden Glory?", a: "Yes, visitors are allowed but must follow Golden Glory's security and visitor policies." },
        { q: "Do you host events or networking sessions?", a: "Yes, Golden Glory occasionally organizes community events, workshops, and networking opportunities for members." }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="bg-[#FAF9F6] min-h-screen">
        {/* Premium Hero Section */}
        <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/images/gallery/private%20cabin%20golden%20glory%201.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="FAQ" />
            <div className="absolute inset-0 bg-[#432c1c]/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#432c1c]/60 via-[#432c1c]/20 to-transparent"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
            <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md border border-white/20 p-8 md:p-14 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-2 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-[#dca646]"></span>
                <span className="text-[#dca646] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Golden Glory Coworking Space Noida</span>
              </div>

              {/* Headline */}
              <h1 
                className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-4 leading-[1.1]" 
                style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}
                dangerouslySetInnerHTML={{ __html: get('faq_hero_title', 'Frequently Asked <span class="text-[#ffa602]">Questions</span>') }}
              />

              {/* Subtext */}
              <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
                {get('faq_hero_subtitle', 'Explore our FAQ for everything you need to know about coworking space in Noida. Get fast, clear answers to common queries.')}
              </p>
            </div>
          </div>
          
          {/* Bottom Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Scroll to read</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-24 relative z-20 bg-[#FAF9F6]">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="space-y-16">
              {faqSections.map((section, sIdx) => (
                <div key={sIdx} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100">
                  <h2 className="font-sans text-2xl md:text-3xl font-bold text-[#111] mb-8 pb-4 border-b border-gray-100 flex items-center gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ffa602]/10 text-[#c08d3e] text-sm border border-[#ffa602]/20 shrink-0">
                      {String.fromCharCode(65 + sIdx)}
                    </span>
                    {section.category.split('—')[1]?.trim() || section.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {section.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${sIdx}-${i}`} className="border-b border-gray-100 last:border-0 mb-2">
                        <AccordionTrigger className="text-left font-sans text-lg md:text-xl py-5 hover:text-[#ffa602] transition-colors data-[state=open]:text-[#ffa602] text-gray-800 hover:no-underline" data-cursor="hover">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6 pr-8">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
