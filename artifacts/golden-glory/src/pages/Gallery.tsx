import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';

export default function Gallery() {
  const media = [
    { type: 'image', title: "Golden Glory Workspace", url: "/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png" },
    { type: 'image', title: "Cover Image", url: "/images/gallery/cover%20image%20of%20golden%20glory.png" },
    { type: 'image', title: "Workspace Vibe", url: "/images/gallery/ending%20image%20golden%20glory.png" },
    { type: 'image', title: "Fixed Desks", url: "/images/gallery/fixed%20desks%20golden%20glory.png" },
    { type: 'video', title: "Cabin Walkthrough", url: "/videos/cabinnnnn%20(1).mp4" },
    { type: 'image', title: "Private Cabin", url: "/images/gallery/private%20cabin%20golden%20glory%201.png" },
    { type: 'image', title: "Premium Cabin", url: "/images/gallery/private%20cabin%20golden%20glory%202.png" }
  ];

  return (
    <PageTransition>
      {/* Premium Hero Section */}
      <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/cover%20image%20of%20golden%20glory.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Gallery" />
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-5xl mx-auto bg-black/20 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-6 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dca646]"></span>
              <span className="text-[#dca646] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Visual Tour</span>
            </div>
            <h1 className="font-sans text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}>
              Our <span className="text-[#ffa602]">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
              Explore the sleek interiors, vibrant shared zones, and premium amenities designed for your growth.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {media.map((item, i) => (
              <div key={i} className={`bg-white rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative ${i === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[21/9]' : 'aspect-video'}`}>
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
        </div>
      </section>
    </PageTransition>
  );
}
