import React, { useEffect } from 'react';
import { useRoute } from 'wouter';
import PageTransition from '@/components/PageTransition';
import { blogs } from '@/data/blogs';
import { Link } from 'wouter';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

export default function BlogPost() {
  const [match, params] = useRoute('/coworking-space-in-noida-blog/:slug');
  const blog = match && params ? blogs.find(b => b.slug === params.slug) : null;

  // We can pick an image based on the ID or just a fixed premium one
  const headerImage = "/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [match]);

  if (!match) return null;

  if (!blog) {
    return (
      <PageTransition>
        <section className="relative pt-40 pb-20 min-h-screen flex items-center justify-center bg-white">
          <div className="container relative mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold text-[#111] mb-4">Blog Post Not Found</h1>
            <p className="text-gray-500 mb-8">We couldn't find the article you were looking for.</p>
            <Link href="/coworking-space-in-noida-blog" className="text-[#c08d3e] font-bold tracking-wider uppercase text-sm hover:text-[#a07430] transition-colors inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
            </Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  // Format content paragraphs
  const paragraphs = blog.content.split('\\n').filter(p => p.trim() !== '');

  return (
    <PageTransition>
      <div className="bg-white min-h-screen">
        
        {/* Article Hero Header */}
        <section className="relative h-[65vh] min-h-[500px] w-full flex items-end justify-center pb-20 pt-40 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={headerImage} className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt={blog.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl text-center">
            <div className="bg-black/20 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 inline-block w-full">
            <Link href="/coworking-space-in-noida-blog" className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-8 shadow-lg group hover:bg-white/20 transition-all">
              <ArrowLeft className="w-4 h-4 text-[#dca646] group-hover:-translate-x-1 transition-transform" />
              <span className="text-[#dca646] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Back to Articles</span>
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm font-medium text-[#e3be4f] uppercase tracking-wider mb-6">
              <span className="flex items-center gap-1.5 bg-[#e3be4f]/20 px-3 py-1 rounded-full border border-[#e3be4f]/30 text-[#f5d77f]"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
              <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {blog.author}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-white font-bold leading-[1.1] mb-6 drop-shadow-lg">
              {blog.title}
            </h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <article className="max-w-[800px] mx-auto">
              
              {/* Premium Excerpt / Intro */}
              <div className="mb-16">
                <p className="text-xl md:text-2xl text-gray-500 font-serif italic leading-relaxed border-l-4 border-[#c08d3e] pl-6 md:pl-8 py-2">
                  "{blog.excerpt}"
                </p>
              </div>

              {/* Main Text Content */}
              <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 font-sans leading-[1.8] marker:text-[#c08d3e]">
                {paragraphs.map((paragraph, idx) => {
                  // If it's a heading inside the content (e.g., "1. Choose Your Spot Wisely")
                  if (paragraph.match(/^[0-9]\\.\\s/) || paragraph.match(/^Why Choose/i) || paragraph.match(/^Conclusion/i) || paragraph.match(/^Benefits of/i)) {
                    return (
                      <h2 key={idx} className="text-2xl md:text-3xl font-serif font-bold text-[#111] mt-16 mb-6">
                        {paragraph}
                      </h2>
                    );
                  }
                  
                  // If it's a bullet point
                  if (paragraph.startsWith('•')) {
                    return (
                      <div key={idx} className="flex gap-4 mb-4 items-start bg-[#fafafa] p-4 rounded-xl border border-gray-100">
                        <div className="w-2 h-2 rounded-full bg-[#c08d3e] mt-2.5 shrink-0" />
                        <p className="m-0 text-[17px]">{paragraph.substring(1).trim()}</p>
                      </div>
                    );
                  }

                  // Standard paragraph with drop cap for the very first paragraph
                  return (
                    <p key={idx} className={`mb-8 text-[17px] md:text-[19px] ${idx === 0 ? 'first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-[#c08d3e] first-letter:mr-3 first-letter:float-left' : ''}`}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Article Footer */}
              <div className="mt-24 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c08d3e] to-[#8a6327] flex items-center justify-center text-white font-serif text-2xl shadow-lg">
                    {blog.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111] text-lg uppercase tracking-wider">{blog.author}</h4>
                    <p className="text-gray-500 text-sm">Author & Coworking Expert</p>
                  </div>
                </div>
                
                <Link href="/coworking-space-in-noida-blog" className="px-8 py-3 bg-[#111] text-white text-sm font-bold tracking-wider uppercase rounded-full hover:bg-[#c08d3e] transition-colors shadow-lg shadow-black/10">
                  Read More Articles
                </Link>
              </div>

            </article>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
