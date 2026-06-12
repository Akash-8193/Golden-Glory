import React from 'react';
import { ShieldCheck, Expand, Armchair, CheckCircle2, Play } from 'lucide-react';
import { Link } from 'wouter';

export default function WhoWeAreSection() {
  return (
    <section className="pt-10 pb-24 bg-white relative overflow-hidden">
      {/* Faint Background Elements (like the hands in reference) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlN2U3ZTciIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTggMTFsLTUgNW0wIDBsLTUgLWVtNSA1VjZtMCAwaC0yIi8+PC9zdmc+')] opacity-10 z-0 gsap-float pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="relative w-full h-[700px] md:h-[850px] lg:h-[900px] flex items-center justify-center lg:justify-start mt-4 lg:-mt-12 xl:-mt-16">
            
            {/* Main Tall Image (Pill Shape) */}
            <div className="absolute left-0 top-0 w-[80%] h-[90%] rounded-full z-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)] image-anime at-animation-image-style-1">
              <img 
                src="/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png" 
                alt="Golden Glory Main Workspace" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Secondary Circular Image (Overlapping bottom right) - Made Bigger */}
            <div className="absolute right-0 bottom-0 w-[65%] aspect-square rounded-full z-20 shadow-[0_10px_40px_rgba(0,0,0,0.15)] border-8 border-white image-anime at-animation-image-style-1">
              <img 
                src="/images/gallery/fixed%20desks%20golden%20glory.png" 
                alt="Coworking Community" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute left-[15%] bottom-[15%] bg-[#ffa602] text-[#111] rounded-[1rem] p-6 shadow-xl z-30 min-w-[160px] text-center border-4 border-white gsap-float pointer-events-none">
              <div className="text-4xl font-bold mb-1"><span className="stat-num" data-target="5">0</span>+</div>
              <div className="font-semibold text-xs uppercase tracking-wider text-[#111]/80">Years Of<br/>Experience</div>
            </div>

          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 fade-up">
              <span className="w-2 h-2 bg-[#ffa602]"></span>
              <span className="text-[#111] font-medium text-sm tracking-wide">About Golden Glory</span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sans text-[#432c1c] font-bold leading-[1.1] tracking-tight at-animation-heading-style-3">
              The Best Place to Grow Your Business
            </h2>
            
            {/* Paragraphs */}
            <div className="space-y-4 text-gray-600 text-[1.05rem] leading-relaxed typewriter">
              <p>
                Golden Glory is designed for freelancers, startups, and small businesses who want a premium office feel without the heavy costs. You just focus on your work, and leave the office management to us.
              </p>
              <p>
                Forget about electricity bills, slow Wi-Fi, or cleaning staff issues. We provide everything ready-to-use so your daily work goes smoothly.
              </p>
            </div>

            {/* Feature Block (Matching the reference design's grey box with side image) */}
            <div className="bg-[#FAF9F6] rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-stretch mt-8 shadow-sm border border-[#F0F0F0] fade-up">
              
              {/* Features List */}
              <div className="flex-1 space-y-6 excellence-counter-boxes">
                
                {/* Feature 1 */}
                <div className="excellence-counter-item">
                  <div className="w-10 h-10 rounded-full bg-[#ffa602] flex items-center justify-center shadow-md mb-3 border-zooming">
                    <ShieldCheck className="w-5 h-5 text-[#111]" strokeWidth={2} />
                  </div>
                  <h4 className="text-lg font-bold text-[#111] mb-2">No Distractions</h4>
                  <div className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#ffa602] shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">High-speed Wi-Fi and 100% power backup, so your work and zoom calls never stop.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="excellence-counter-item">
                  <div className="w-10 h-10 rounded-full bg-[#ffa602] flex items-center justify-center shadow-md mb-3 border-zooming">
                    <Expand className="w-5 h-5 text-[#111]" strokeWidth={2} />
                  </div>
                  <h4 className="text-lg font-bold text-[#111] mb-2">Customized Office Space</h4>
                  <div className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#ffa602] shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">Get an office that fits your exact needs. Choose from open hot desks, dedicated seats, or fully furnished private cabins for your entire team.</p>
                  </div>
                </div>

              </div>

              {/* Side Image inside the block */}
              <div className="w-full md:w-[220px] shrink-0 image-anime at-animation-image-style-1 rounded-[1.5rem] overflow-hidden">
                <img 
                  src="/images/gallery/ending%20image%20golden%20glory.png" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-6 fade-up">
              <Link 
                href="/about-coworking-space-in-noida"
                className="bg-[#ffa602] text-[#111] font-bold px-7 py-3 rounded text-sm transition-colors duration-300 btn-anime relative overflow-hidden group"
              >
                <span className="relative z-10">More About Us</span>
              </Link>
              
              <Link 
                href="/coworking-space-gallery"
                className="flex items-center gap-3 text-[#111] font-bold hover:text-[#ffa602] transition-colors group text-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#ffa602] text-[#111] flex items-center justify-center group-hover:scale-105 transition-transform border-zooming">
                  <Play className="w-4 h-4 ml-0.5 fill-current" />
                </div>
                Watch Our Video
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
