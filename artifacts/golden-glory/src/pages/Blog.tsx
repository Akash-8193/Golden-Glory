import React from 'react';
import PageTransition from '@/components/PageTransition';
import { Link } from 'wouter';
import { blogs } from '@/data/blogs';
import { ArrowUpRight } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function Blog() {
  const { get } = useSiteContent();
  const blogImages = [
    "/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png",
    "/images/gallery/cover%20image%20of%20golden%20glory.png",
    "/images/gallery/fixed%20desks%20golden%20glory.png",
    "/images/gallery/private%20cabin%20golden%20glory%201.png",
    "/images/gallery/private%20cabin%20golden%20glory%202.png",
    "/images/gallery/ending%20image%20golden%20glory.png"
  ];

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/fixed%20desks%20golden%20glory.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Blog" />
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

      <section className="py-24 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {blogs.map((blog, i) => (
              <Link href={`/coworking-space-in-noida-blog/${blog.slug}`} key={blog.id} className="bg-transparent group block cursor-pointer transition-all duration-300" data-cursor="hover">
                
                {/* Image */}
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
                  <img src={blogImages[i % blogImages.length]} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                {/* Date */}
                <div className="text-xs font-bold text-[#c08d3e] tracking-wider uppercase mb-4">
                  {blog.date}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-[28px] font-serif text-[#111] font-bold leading-snug mb-4 group-hover:text-[#c08d3e] transition-colors">
                  {blog.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                {/* Read More */}
                <div className="text-sm font-bold text-[#111] flex items-center gap-1 group-hover:text-[#c08d3e] transition-colors uppercase tracking-wide">
                  Read More <ArrowUpRight className="w-4 h-4" />
                </div>

              </Link>
            ))}
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
