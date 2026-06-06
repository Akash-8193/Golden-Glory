import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';

export default function Gallery() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">
            <SplitText>Our Gallery</SplitText>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Explore the Golden Glory coworking space featuring sleek interiors, vibrant shared zones, and premium amenities designed for your growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholders for images using styled divs */}
            {[
              "Conference Room",
              "Main Workspace",
              "Private Cabin",
              "Cafeteria",
              "Open Desk Area",
              "Meeting Space"
            ].map((title, i) => (
              <div key={i} className="aspect-video bg-secondary border border-border flex items-center justify-center relative overflow-hidden group" data-cursor="hover">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors duration-500 z-10" />
                <span className="font-serif text-lg text-muted-foreground group-hover:text-primary transition-colors z-20">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
