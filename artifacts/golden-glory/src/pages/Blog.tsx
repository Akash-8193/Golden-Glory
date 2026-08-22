"use client";
import React, { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';
import { blogs } from '@/data/blogs';

export default function Blog() {
  const { get } = useSiteContent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/ending%20image%20golden%20glory.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Blog" />
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
        </div>
        
        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-6 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dca646]"></span>
              <span className="text-[#dca646] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Latest Insights</span>
            </div>
            <h1 
              className="font-sans text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" 
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}
              dangerouslySetInnerHTML={{ __html: get('blog_hero_title', 'Our <span class="text-[#ffa602]">Blog</span>') }}
            />
            <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
              {get('blog_hero_subtitle', 'Insights, tips, and news from the Golden Glory community.')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 min-h-screen bg-[#FAF8ED]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          {blogs.length === 0 ? (
            <div className="text-center py-20 text-gray-500 font-bold text-xl">No blog posts found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link href={`/coworking-space-in-noida-blog/${blog.slug}`} key={blog.id} className="bg-white rounded-[2rem] overflow-hidden group block cursor-pointer transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1">
                  
                  {/* Image with Category Badge */}
                  <div className="w-full aspect-[4/3] relative overflow-hidden">
                    <img src={blog.image_url} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-gray-100" />
                    <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg">
                      {blog.category}
                    </div>
                  </div>
                  
                  <div className="p-8">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 text-[#111]" />
                      {blog.date}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#111] leading-tight mb-8 group-hover:text-[#ffa602] transition-colors">
                      {blog.title}
                    </h3>
                    
                    {/* Read More Button */}
                    <div className="flex items-stretch w-fit rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
                      <div className="bg-[#111] text-white flex items-center justify-center px-4 py-3 group-hover:bg-black transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <div className="bg-[#ffa602] text-white font-bold px-6 py-3 flex items-center group-hover:bg-[#e69500] transition-colors">
                        Read More
                      </div>
                    </div>
                  </div>

                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
