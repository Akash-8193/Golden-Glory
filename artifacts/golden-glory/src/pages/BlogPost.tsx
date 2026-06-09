import React, { useEffect } from 'react';
import { useRoute } from 'wouter';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';
import { blogs } from '@/data/blogs';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const [match, params] = useRoute('/blog/:slug');
  const blog = match && params ? blogs.find(b => b.slug === params.slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [match]);

  if (!match) return null;

  if (!blog) {
    return (
      <PageTransition>
        <section className="relative pt-32 pb-20 min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 z-[-1]">
            <img src="/images/luxury_about_1780746701861.png" className="w-full h-full object-cover" alt="Not Found" />
          </div>
          <div className="container relative z-10 mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you are looking for does not exist.</p>
            <Link href="/blogs" className="text-primary hover:underline">
              &larr; Back to Blogs
            </Link>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 min-h-screen">
        <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 z-[-1]">
          <img src="/images/luxury_about_1780746701861.png" className="w-full h-full object-cover" alt="Blog Post" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-border/50">
          <Link href="/blogs" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12 group" data-cursor="hover">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>
          
          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <span className="text-primary font-bold tracking-wider uppercase">{blog.category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="text-muted-foreground">{blog.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="text-muted-foreground">{blog.readTime}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <SplitText>{blog.title}</SplitText>
            </h1>
            <div className="flex items-center gap-3 border-t border-border pt-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif font-bold">
                {blog.author.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-foreground">{blog.author}</div>
                <div className="text-xs text-muted-foreground">Author</div>
              </div>
            </div>
          </div>
          
          <div className="prose lg:prose-lg max-w-none text-muted-foreground leading-relaxed">
            {blog.content.split('\\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
