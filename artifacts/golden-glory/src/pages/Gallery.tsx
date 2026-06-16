import React, { useState, useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import { useSiteContent } from '@/hooks/useSiteContent';
import { supabase } from '@/lib/supabase';

export default function Gallery() {
  const { get } = useSiteContent();
  const [media, setMedia] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMedia() {
      const { data } = await supabase.from('gallery_items').select('*').order('order_index', { ascending: true });
      if (data) setMedia(data);
    }
    fetchMedia();
  }, []);

  return (
    <PageTransition>
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/fixed%20desks%20golden%20glory.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Gallery" />
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-6 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dca646]"></span>
              <span className="text-[#dca646] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Visual Tour</span>
            </div>
            <h1 
              className="font-sans text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" 
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}
              dangerouslySetInnerHTML={{ __html: get('gallery_hero_title', 'Our <span class="text-[#ffa602]">Gallery</span>') }}
            />
            <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
              {get('gallery_hero_subtitle', 'Explore the sleek interiors, vibrant shared zones, and premium amenities designed for your growth.')}
            </p>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#f4f9fd]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          {media.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <div className="animate-spin w-8 h-8 border-4 border-[#ffa602] border-t-transparent rounded-full mx-auto mb-4"></div>
              Loading gallery... Ensure database setup script is run.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {media.map((item, i) => (
                <div key={item.id} className={`bg-white rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative ${i === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[21/9]' : 'aspect-video'}`}>
                  {item.type === 'video' ? (
                    <video src={item.url} autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                    <span className="font-sans text-2xl text-white group-hover:text-[#ffa602] transition-colors block mb-1 font-bold">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
