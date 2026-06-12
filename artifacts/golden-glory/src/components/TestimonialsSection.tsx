import React from 'react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden" style={{ backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text and Grid */}
          <div className="lg:col-span-7">
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ffa602]">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="font-bold text-[#432c1c] tracking-wide text-sm">Our Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold font-sans tracking-tight text-[#111] leading-[1.1] at-animation-heading-style-3">
                Success stories from our clients
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Vansh Jain",
                  title: "Founder, Fovestta",
                  quote: "Golden Glory combines comfort and professionalism, making it one of the best coworking spaces in Noida for daily productivity.",
                  bg: "bg-white"
                },
                {
                  name: "Nancy Jain",
                  title: "Director, Sprint Digitech",
                  quote: "As a digital agency, we need focus, consistency, and fast internet. Golden Glory delivers all of it with a premium coworking experience in Noida.",
                  bg: "bg-white"
                },
                {
                  name: "Rohan Mehta",
                  title: "Freelancer",
                  quote: "A productive environment with flexible seating, friendly staff, and a genuinely professional vibe. One of the best choices for freelancers in Noida.",
                  bg: "bg-white"
                },
                {
                  name: "Shruti Verma",
                  title: "Freelancer",
                  quote: "The cabins are quiet, the amenities are excellent, and the location is perfect. A dependable coworking space in Noida for everyday work.",
                  bg: "bg-[#ffa602]"
                }
              ].map((test, i) => (
                <div key={i} className={`${test.bg} p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow duration-300 relative z-10`}>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={test.bg === 'bg-[#ffa602]' ? '#432c1c' : '#ffa602'} className="w-4 h-4">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className={`text-[15px] leading-relaxed mb-8 ${test.bg === 'bg-[#ffa602]' ? 'text-[#111] font-medium' : 'text-gray-500'}`}>
                    "{test.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold text-[#111] text-[15px]">{test.name}</div>
                      <div className={`text-[13px] ${test.bg === 'bg-[#ffa602]' ? 'text-[#111]/70' : 'text-gray-400'}`}>{test.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images Collage */}
          <div className="lg:col-span-5 relative h-[700px] hidden lg:block">
            {/* Image 1: Tall Left */}
            <div className="absolute top-10 left-0 w-[270px] h-[370px] rounded-[2rem] overflow-hidden rotate-[3deg] shadow-xl border-[6px] border-white z-20 hover:z-50 hover:rotate-0 transition-all duration-500">
              <img src="/images/gallery/cover%20image%20of%20golden%20glory.png" className="w-full h-full object-cover" alt="Coworking Member 1" />
            </div>
            
            {/* Image 2: Tall Right */}
            <div className="absolute top-0 right-4 w-[250px] h-[350px] rounded-[2rem] overflow-hidden rotate-[-4deg] shadow-xl border-[6px] border-white z-10 hover:z-50 hover:rotate-0 transition-all duration-500">
              <img src="/images/gallery/ending%20image%20golden%20glory.png" className="w-full h-full object-cover" alt="Coworking Member 2" />
            </div>

            {/* Image 3: Bottom Left Horizontal */}
            <div className="absolute bottom-20 left-10 w-[330px] h-[220px] rounded-[2rem] overflow-hidden rotate-[-2deg] shadow-xl border-[6px] border-white z-30 hover:z-50 hover:rotate-0 transition-all duration-500">
              <img src="/images/gallery/fixed%20desks%20golden%20glory.png" className="w-full h-full object-cover object-center" alt="Coworking Team" />
            </div>

            {/* Decorative Dashed Line SVG */}
            <svg className="absolute bottom-[180px] right-[80px] w-24 h-48 z-0 text-[#111]" fill="none" viewBox="0 0 100 200">
              <path d="M20,0 C20,50 80,80 80,120 C80,150 40,150 40,120 C40,90 80,100 50,190" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
              <path d="M45,185 L50,190 L55,185" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>

            {/* Green Badge */}
            <div className="absolute bottom-12 right-0 bg-[#432c1c] text-white px-6 py-5 rounded-[1.5rem] shadow-2xl z-40">
              <div className="flex items-center mb-2">
                <div className="bg-[#ffa602] text-[#111] text-sm font-bold px-3 py-1.5 rounded-full shadow-sm">Top Rated Workspace</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">5.0</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffa602" className="w-4 h-4">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-white/80 text-sm">(Google Reviews)</span>
              </div>
            </div>

          </div>

          {/* Mobile Fallback Images */}
          <div className="lg:hidden mt-12 grid grid-cols-2 gap-4">
             <img src="/images/gallery/cover%20image%20of%20golden%20glory.png" className="w-full h-48 object-cover rounded-[1.5rem]" alt="Coworking Member 1" />
             <img src="/images/gallery/ending%20image%20golden%20glory.png" className="w-full h-48 object-cover rounded-[1.5rem]" alt="Coworking Member 2" />
             <div className="col-span-2">
                <img src="/images/gallery/fixed%20desks%20golden%20glory.png" className="w-full h-48 object-cover object-center rounded-[1.5rem]" alt="Coworking Team" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
