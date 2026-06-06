import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';

export default function Contact() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-background min-h-[calc(100vh-400px)]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-center">
            <SplitText>Get In Touch</SplitText>
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Ready to upgrade your workspace? Connect with us to schedule a tour or get a quote.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-serif text-foreground font-bold mb-2">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  111, F-Block, Sector-8<br />
                  Noida-201301<br />
                  India
                </p>
              </div>
              <div>
                <h3 className="text-lg font-serif text-foreground font-bold mb-2">Contact</h3>
                <p className="text-muted-foreground leading-relaxed flex flex-col gap-2">
                  <a href="mailto:info@goldenglory.space" className="hover:text-primary transition-colors" data-cursor="hover">info@goldenglory.space</a>
                  <a href="tel:+919958849645" className="hover:text-primary transition-colors" data-cursor="hover">+91 99588 49645</a>
                </p>
              </div>
            </div>

            <div className="bg-card border border-border p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input id="name" type="text" className="w-full bg-input border border-border p-3 text-foreground rounded-none focus:outline-none focus:border-primary transition-colors" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input id="email" type="email" className="w-full bg-input border border-border p-3 text-foreground rounded-none focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-sm font-medium text-foreground">Mobile No.</label>
                  <input id="mobile" type="tel" className="w-full bg-input border border-border p-3 text-foreground rounded-none focus:outline-none focus:border-primary transition-colors" placeholder="+91" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-input border border-border p-3 text-foreground rounded-none focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-4 hover:bg-accent transition-colors" data-cursor="hover">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
