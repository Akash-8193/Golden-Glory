import React, { useEffect } from 'react';
import PageTransition from '@/components/PageTransition';
import { ShieldCheck, Calendar, MapPin, Mail } from 'lucide-react';
import { useSiteContent } from '@/hooks/useSiteContent';

export default function PrivacyPolicy() {
  const { get } = useSiteContent();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="bg-[#FAF9F6] min-h-screen">
        {/* Premium Hero Section */}
        <section className="relative min-h-[95vh] w-full overflow-hidden flex flex-col justify-center pt-40 lg:pt-48 pb-20">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]" alt="Privacy Policy" />
            <div className="absolute inset-0 bg-[#432c1c]/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#432c1c]/60 via-[#432c1c]/20 to-transparent"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
            <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md border border-white/20 p-8 md:p-14 rounded-[2rem] shadow-2xl space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {/* Top Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 mb-2 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-[#dca646]" />
                <span className="text-[#dca646] text-xs md:text-[13px] font-bold tracking-[0.15em] uppercase">Legal & Compliance</span>
              </div>

              {/* Headline */}
              <h1 
                className="font-sans text-5xl md:text-7xl font-bold text-white mb-4 leading-tight" 
                style={{ textShadow: "0 4px 20px rgba(0,0,0,0.65)" }}
                dangerouslySetInnerHTML={{ __html: get('privacy_hero_title', 'Privacy <span class="text-[#ffa602]">Policy</span>') }}
              />

              {/* Subtext */}
              <div className="flex items-center justify-center gap-2 text-gray-200 text-sm md:text-base font-medium" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
                <Calendar className="w-4 h-4" />
                <span>Last Updated: November 2025</span>
              </div>
            </div>
          </div>
          
          {/* Bottom Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce z-20">
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">Scroll to read</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-24 relative z-20 bg-[#FAF9F6]">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none text-gray-600 mb-16">
                <p className="text-xl leading-relaxed font-light text-gray-800">
                  Welcome to Golden Glory – Coworking Office Space in Noida. We operate the website <a href="https://www.goldenglory.space" className="text-[#c08d3e] font-semibold hover:underline">www.goldenglory.space</a>, offering coworking workspace and related services in Noida. Your privacy is important to us, and this Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website. By using our website, you agree to the practices described in this Privacy Policy.
                </p>
              </div>

              {/* Document Sections */}
              <div className="space-y-12 md:space-y-16">
                
                {/* Section 1 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">1</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-5">Business Information</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><span className="font-semibold text-gray-900 w-48 shrink-0">Business/Brand Name:</span> Golden Glory</li>
                    <li className="flex items-start"><span className="font-semibold text-gray-900 w-48 shrink-0">Legal Entity:</span> Partnership</li>
                    <li className="flex items-start"><span className="font-semibold text-gray-900 w-48 shrink-0">Registered Address:</span> 111, F-Block, Sector-8, Noida</li>
                    <li className="flex items-start"><span className="font-semibold text-gray-900 w-48 shrink-0">Website:</span> www.goldenglory.space</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">2</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-5">Information We Collect</h3>
                  
                  <div className="mb-6">
                    <p className="font-semibold text-gray-900 mb-3">Personal information collected through enquiry/contact forms:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-[#ffa602]">
                      <li>Name</li>
                      <li>Email Address</li>
                      <li>Mobile Number</li>
                      <li>Requirements / Enquiry Details</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Additional data collected via cookies and tracking tools:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-[#ffa602]">
                      <li>Device information</li>
                      <li>Browser information</li>
                      <li>IP address</li>
                      <li>Pages visited</li>
                      <li>Time spent on the website</li>
                      <li>User interaction behavior</li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">3</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-5">How We Collect Information</h3>
                  <p className="font-semibold text-gray-900 mb-3">We collect user information through:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-[#ffa602] mb-4">
                    <li>Enquiry / Requirement Forms</li>
                    <li>Contact Forms</li>
                    <li>Website Cookies</li>
                    <li><strong>Analytics Tools:</strong> Google Analytics (GA4), Google Search Console, Meta Pixel, and other tracking integrations</li>
                  </ul>
                  <p className="text-gray-600">These tools help us understand user behavior, improve our website performance, and offer personalized experiences.</p>
                </div>

                {/* Section 4 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">4</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-5">How We Use Your Information</h3>
                  <p className="font-semibold text-gray-900 mb-3">We use your data strictly for business purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 marker:text-[#ffa602] mb-4">
                    <li>Responding to your enquiries or workspace requirements</li>
                    <li>Providing requested information or support</li>
                    <li>Sending promotional content, offers, and updates</li>
                    <li>Improving website performance, UX, and service quality</li>
                    <li>Tracking marketing and advertising performance</li>
                    <li>Enhancing personalized user experience</li>
                  </ul>
                  <p className="text-gray-600 font-medium">We do not use your data for any purpose not stated in this policy.</p>
                </div>

                {/* Section 5 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">5</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-4">Sharing of Information</h3>
                  <p className="text-gray-600 leading-relaxed">Your personal information is not shared, sold, or distributed to any third-party companies, partners, or individuals. We maintain strict confidentiality and only use the data internally for legitimate business purposes.</p>
                </div>

                {/* Section 6 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">6</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-4">Cookies & Tracking Technologies</h3>
                  <p className="text-gray-600 leading-relaxed">Golden Glory uses cookies and tracking pixels to improve user experience, analyze website traffic, measure ad performance, and personalize marketing communication. Users may choose to disable cookies in their browser settings; however, this may impact some website functionalities.</p>
                </div>

                {/* Section 7 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">7</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-4">Data Storage & Security</h3>
                  <p className="text-gray-600 leading-relaxed">We store all collected data securely on our servers/databases to prevent unauthorized access, loss or damage, and misuse of information. We use standard industry-level security protocols to protect personal data.</p>
                </div>

                {/* Section 8 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">8</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-4">Data Deletion Rights</h3>
                  <p className="text-gray-600 leading-relaxed">Users can request to delete their personal information at any time. Upon receiving such a request, your data will be permanently removed from our database, deleted from our internal communication systems, and erased from all connected tools (where applicable). To request deletion, please contact us at: <a href="mailto:info@goldenglory.space" className="text-[#c08d3e] font-semibold hover:underline">info@goldenglory.space</a></p>
                </div>

                {/* Section 9 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">9</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-4">No User Accounts</h3>
                  <p className="text-gray-600 leading-relaxed">Our website does not offer account creation or login features. Users interact only through public pages and enquiry forms.</p>
                </div>

                {/* Section 10 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">10</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-4">Third-Party Services</h3>
                  <p className="text-gray-600 leading-relaxed">Although we do not share personal data with third parties, certain third-party tools (Google, Meta, etc.) may collect behavioral data through cookies for analytics and advertising optimization. These tools operate under their own privacy policies.</p>
                </div>

                {/* Section 11 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">11</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-4">Links to External Websites</h3>
                  <p className="text-gray-600 leading-relaxed">Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. We encourage users to review the privacy policies of external websites before interacting with them.</p>
                </div>

                {/* Section 12 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">12</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-4">Local SEO Clause (for Noida & NCR Users)</h3>
                  <p className="text-gray-600 leading-relaxed">Golden Glory is committed to providing a transparent and secure digital experience for users across Noida, Greater Noida, Delhi NCR, and nearby regions. We ensure that all enquiries submitted through our Noida-based website are handled responsibly and securely, helping local users explore workstation bookings, coworking space availability, and workspace tours with confidence.</p>
                </div>

                {/* Section 13 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">13</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-4">Updates to This Privacy Policy</h3>
                  <p className="text-gray-600 leading-relaxed">We may update this Privacy Policy occasionally to reflect new practices or legal requirements. Updates will be posted on this page with a revised date.</p>
                </div>

                {/* Section 14 */}
                <div className="relative pl-6 md:pl-10 border-l-2 border-[#ffa602]/30">
                  <span className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#ffa602]/10 text-[#c08d3e] font-bold flex items-center justify-center text-sm border border-[#ffa602]/20">14</span>
                  <h3 className="text-2xl font-sans font-bold text-[#111] mb-5">Contact for Privacy Matters</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <MapPin className="w-5 h-5 text-[#ffa602] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-gray-900 mb-1">Address</p>
                        <p className="text-sm text-gray-600">111, F-Block, Sector-8, Noida-201301</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <Mail className="w-5 h-5 text-[#ffa602] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-gray-900 mb-1">Email</p>
                        <a href="mailto:info@goldenglory.space" className="text-sm text-[#c08d3e] hover:underline">info@goldenglory.space</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
