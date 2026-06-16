import React, { useState, useEffect } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { supabase } from '@/lib/supabase';

export default function LatestBlogsSection() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false }).limit(4);
      if (data) setBlogs(data);
      setLoading(false);
    }
    fetchBlogs();
  }, []);

  if (loading) return null; // Or a skeleton loader
  if (blogs.length === 0) return null;

  const featuredBlog = blogs[0];
  const sidebarBlogs = blogs.slice(1);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 font-bold text-[#f95b29] text-sm uppercase tracking-wider">
            <span>✱</span>
            <span>Latest Articles</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight text-[#111] leading-[1.1] max-w-3xl at-animation-heading-style-3">
            Stay informed and inspired for your next journey
          </h2>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {featuredBlog && (
            <div className="lg:col-span-6 h-[500px] lg:h-auto min-h-[500px] relative group cursor-pointer rounded-[2rem] overflow-hidden image-anime at-animation-image-style-1">
              <Link href={`/coworking-space-in-noida-blog/${featuredBlog.slug}`}>
                <div className="absolute inset-0">
                  <img 
                    src={featuredBlog.image_url} 
                    alt={featuredBlog.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 bg-gray-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-white/80 mb-3 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredBlog.date}</span>
                  </div>
                  <h3 className="text-white text-3xl lg:text-[2rem] font-bold leading-tight mb-8 pr-12 group-hover:text-gray-200 transition-colors">
                    {featuredBlog.title}
                  </h3>
                  
                  <div className="w-12 h-12 rounded-full bg-[#f95b29] text-white flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:shadow-lg border-zooming">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Sidebar Blogs (Right) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {sidebarBlogs.map((blog) => (
              <div key={blog.id} className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden flex flex-col sm:flex-row h-full transition-transform hover:-translate-y-1 hover:shadow-lg fade-up border border-gray-100">
                <Link href={`/coworking-space-in-noida-blog/${blog.slug}`} className="flex flex-col sm:flex-row w-full h-full">
                  
                  {/* Image Block */}
                  <div className="sm:w-[260px] shrink-0 h-[220px] sm:h-auto overflow-hidden sm:rounded-[1.5rem] rounded-t-[1.5rem] image-anime at-animation-image-style-1">
                    <img 
                      src={blog.image_url} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 bg-gray-100"
                    />
                  </div>

                  {/* Content Block */}
                  <div className="p-6 sm:p-8 flex flex-col justify-center flex-grow">
                    <div className="flex items-center gap-2 text-gray-500 mb-3 text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    
                    <h3 className="text-[#111] text-xl font-bold leading-tight mb-6 group-hover:text-[#f95b29] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <div className="mt-auto flex items-center gap-2 text-[#f95b29] font-bold text-[15px]">
                      Read Story 
                      <div className="w-6 h-6 rounded-full bg-[#f95b29] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
