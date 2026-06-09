import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';

export default function Gallery() {
  const images = [
    { title: "Conference Room", hint: "Image 1", url: "/images/luxury_home_hero_1780746689676.png" },
    { title: "Top Banner / Main Area", hint: "Top banner_new copy", url: "/images/luxury_about_1780746701861.png" },
    { title: "Private Cabin", hint: "Image 3", url: "/images/luxury_private_1780746747118.png" },
    { title: "Cafeteria / Common Area", hint: "1_banner", url: "/images/luxury_hotdesk_1780746713216.png" },
    { title: "Open Workspace", hint: "3_banner", url: "/images/luxury_dedicated_1780746732950.png" },
    { title: "Gallery Image", hint: "gallery image 1", url: "/images/gallery_generic_3d_1780745258542.png" },
    { title: "Meeting / Workspace Area", hint: "2_banner", url: "/images/gallery_meeting_3d_1780745245542.png" }
  ];

  return (
    <PageTransition>
      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/images/luxury_dedicated_1780746732950.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Gallery" />
          <div className="absolute inset-0 bg-[#432c1c]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#432c1c]/90 via-[#432c1c]/60 to-[#432c1c]/90"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ffa602] animate-pulse"></span>
              <span className="text-[#ffa602] text-xs font-bold tracking-[0.2em] uppercase">Visual Tour</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-[#ffa602]">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
              Explore the sleek interiors, vibrant shared zones, and premium amenities designed for your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-[#f4f9fd]">
        <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className={`bg-white rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative ${i === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[21/9]' : 'aspect-video'}`}>
                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                  <span className="font-serif text-2xl text-white group-hover:text-[#ffa602] transition-colors block mb-1 font-bold">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
