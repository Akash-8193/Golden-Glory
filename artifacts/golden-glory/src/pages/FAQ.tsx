import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
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
      <section className="relative pt-32 pb-20 min-h-[calc(100vh-200px)]">
        <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/private%20cabin%20golden%20glory%201.png" className="w-full h-full object-cover" alt="FAQ" />
          <div className="absolute inset-0 bg-[#432c1c]/40 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h3 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Golden Glory Coworking Space Noida</h3>
            <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6">
              <SplitText>Frequently Asked Questions</SplitText>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our FAQ for everything you need to know about coworking space in Noida. Get fast, clear answers to common queries.
            </p>
          </div>
          
          <div className="space-y-16">
            {faqSections.map((section, sIdx) => (
              <div key={sIdx}>
                <h2 className="font-sans text-2xl font-bold text-primary mb-6 pb-2 border-b border-border/50">
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${sIdx}-${i}`} className="border-border/50 bg-white px-6 rounded-xl mb-4 shadow-sm">
                      <AccordionTrigger className="text-left font-sans text-xl py-6 hover:text-primary transition-colors data-[state=open]:text-primary" data-cursor="hover">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-8">
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
    </PageTransition>
  );
}
