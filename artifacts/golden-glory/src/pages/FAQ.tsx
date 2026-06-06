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
  const faqs = [
    { q: "What types of workspaces do you offer?", a: "Hot desks, dedicated desks, private cabins, meeting rooms, conference rooms, day passes, virtual offices, and customized solutions." },
    { q: "Is high-speed internet included in all plans?", a: "Yes. Every plan includes stable, high-speed fiber internet for smooth work, meetings, and daily operations." },
    { q: "Do you provide private cabins for teams?", a: "Absolutely. Private cabins for individuals, small teams, and growing businesses with options for additional seating." },
    { q: "Are meeting rooms and conference rooms available?", a: "Yes. Meeting and conference rooms can be booked as part of your plan or on request." },
    { q: "What amenities are included in the workspace?", a: "AC, power backup, tea/coffee, pantry access, housekeeping, CCTV, gaming area, reception support, printer/scanner, and more." },
    { q: "Is parking available for members?", a: "Yes. Both 2-wheeler and 4-wheeler parking for members, subject to availability." },
    { q: "How close is the coworking space to the metro station?", a: "Located near Noida Sector 16 Metro Station for convenient daily commute." }
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-background min-h-[calc(100vh-200px)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              <SplitText>Frequently Asked Questions</SplitText>
            </h1>
            <p className="text-muted-foreground text-lg">Everything you need to know about coworking at Golden Glory.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-xl py-6 hover:text-primary transition-colors data-[state=open]:text-primary" data-cursor="hover">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PageTransition>
  );
}
