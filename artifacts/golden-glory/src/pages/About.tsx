import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-center">
            <SplitText>About Golden Glory</SplitText>
          </h1>
          <div className="prose prose-invert lg:prose-xl mx-auto text-muted-foreground text-center mb-16">
            <p>Creating Workspaces That Inspire Growth and Productivity</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create a modern workspace where professionals thrive through comfort, collaboration, and an environment that supports long-term business success.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver premium, flexible, and accessible coworking solutions that enhance productivity and elevate the everyday work experience.
                </p>
              </div>
              <div>
                <h3 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">Our Commitment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to offering reliable amenities, transparent service, and a supportive workspace that helps individuals and brands grow confidently.
                </p>
              </div>
            </div>
            
            <div className="bg-secondary p-8 md:p-12 border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Why Choose Us?</h2>
              <ul className="space-y-6">
                {[
                  { title: "Modern Facilities", desc: "Fully equipped premium environment — high-speed internet, power backup, meeting rooms." },
                  { title: "Flexible Work Plans", desc: "Hot desks, dedicated desks, private cabins, meeting spaces." },
                  { title: "Prime Noida Location", desc: "Sector 8 near metro, easy accessibility, professional address." }
                ].map((item, i) => (
                  <li key={i} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                    <strong className="block text-foreground mb-1">{item.title}</strong>
                    <span className="text-sm text-muted-foreground">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-accent" data-cursor="hover">
              <a href="https://wa.me/919958849645" target="_blank" rel="noopener noreferrer">Connect With Us</a>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
