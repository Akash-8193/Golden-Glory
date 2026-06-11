import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';
import { Link } from 'wouter';
import { blogs } from '@/data/blogs';

export default function Blog() {
  return (
    <PageTransition>
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/luxury_hotdesk_1780746713216.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Blog" />
          <div className="absolute inset-0 bg-[#432c1c]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#432c1c]/60 via-[#432c1c]/30 to-[#432c1c]/60"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ffa602] animate-pulse"></span>
              <span className="text-[#ffa602] text-xs font-bold tracking-[0.2em] uppercase">Latest Insights</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}>
              Our <span className="text-[#ffa602]">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
              Insights, tips, and news from the Golden Glory community.
            </p>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce">
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      <section className="py-20 bg-[#f4f9fd] min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.id} className="bg-white rounded-xl border border-border/50 p-8 shadow-md hover:shadow-lg hover:-translate-y-1 hover:border-primary transition-all duration-300 block group" data-cursor="hover">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-primary font-medium tracking-wider uppercase">{blog.date}</div>
                  <div className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{blog.category}</div>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-primary transition-colors text-foreground">{blog.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{blog.excerpt}</p>
                <div className="text-sm font-medium text-primary mt-auto">Read More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
