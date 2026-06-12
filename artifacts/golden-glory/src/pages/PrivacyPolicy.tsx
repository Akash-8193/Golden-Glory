import React from 'react';
import PageTransition from '@/components/PageTransition';
import SplitText from '@/components/SplitText';

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 min-h-screen">
        <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 z-0">
          <img src="/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png" className="w-full h-full object-cover" alt="Privacy Policy" />
          <div className="absolute inset-0 bg-[#432c1c]/40 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-border/50">
          <div className="text-center mb-16">
            <h3 className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">Last Updated: November 2025</h3>
            <h1 className="font-sans text-5xl md:text-6xl font-bold mb-6">
              <SplitText>Privacy Policy</SplitText>
            </h1>
          </div>
          
          <div className="prose lg:prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-10 text-lg">
              Welcome to Golden Glory – Coworking Office Space in Noida. We operate the website www.goldenglory.space, offering coworking workspace and related services in Noida. Your privacy is important to us, and this Privacy Policy explains how we collect, use, store, and protect your information when you interact with our website. By using our website, you agree to the practices described in this Privacy Policy.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">1. Business Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Business/Brand Name:</strong> Golden Glory</li>
                  <li><strong>Legal Entity:</strong> Partnership</li>
                  <li><strong>Registered Address:</strong> 111, F-Block, Sector-8, Noida</li>
                  <li><strong>Website:</strong> www.goldenglory.space</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">2. Information We Collect</h3>
                <p className="mb-2">Personal information collected through enquiry/contact forms:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Mobile Number</li>
                  <li>Requirements / Enquiry Details</li>
                </ul>
                <p className="mb-2">Additional data collected via cookies and tracking tools:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Device information</li>
                  <li>Browser information</li>
                  <li>IP address</li>
                  <li>Pages visited</li>
                  <li>Time spent on the website</li>
                  <li>User interaction behavior</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">3. How We Collect Information</h3>
                <p className="mb-2">We collect user information through:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Enquiry / Requirement Forms</li>
                  <li>Contact Forms</li>
                  <li>Website Cookies</li>
                  <li>Analytics Tools: Google Analytics (GA4), Google Search Console, Meta Pixel, and other tracking integrations</li>
                </ul>
                <p>These tools help us understand user behavior, improve our website performance, and offer personalized experiences.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">4. How We Use Your Information</h3>
                <p className="mb-2">We use your data strictly for business purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Responding to your enquiries or workspace requirements</li>
                  <li>Providing requested information or support</li>
                  <li>Sending promotional content, offers, and updates</li>
                  <li>Improving website performance, UX, and service quality</li>
                  <li>Tracking marketing and advertising performance</li>
                  <li>Enhancing personalized user experience</li>
                </ul>
                <p>We do not use your data for any purpose not stated in this policy.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">5. Sharing of Information</h3>
                <p>Your personal information is not shared, sold, or distributed to any third-party companies, partners, or individuals. We maintain strict confidentiality and only use the data internally for legitimate business purposes.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">6. Cookies & Tracking Technologies</h3>
                <p>Golden Glory uses cookies and tracking pixels to improve user experience, analyze website traffic, measure ad performance, and personalize marketing communication. Users may choose to disable cookies in their browser settings; however, this may impact some website functionalities.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">7. Data Storage & Security</h3>
                <p>We store all collected data securely on our servers/databases to prevent unauthorized access, loss or damage, and misuse of information. We use standard industry-level security protocols to protect personal data.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">8. Data Deletion Rights</h3>
                <p>Users can request to delete their personal information at any time. Upon receiving such a request, your data will be permanently removed from our database, deleted from our internal communication systems, and erased from all connected tools (where applicable). To request deletion, please contact us at: info@goldenglory.space</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">9. No User Accounts</h3>
                <p>Our website does not offer account creation or login features. Users interact only through public pages and enquiry forms.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">10. Third-Party Services</h3>
                <p>Although we do not share personal data with third parties, certain third-party tools (Google, Meta, etc.) may collect behavioral data through cookies for analytics and advertising optimization. These tools operate under their own privacy policies.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">11. Links to External Websites</h3>
                <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. We encourage users to review the privacy policies of external websites before interacting with them.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">12. Local SEO Clause (for Noida & NCR Users)</h3>
                <p>Golden Glory is committed to providing a transparent and secure digital experience for users across Noida, Greater Noida, Delhi NCR, and nearby regions. We ensure that all enquiries submitted through our Noida-based website are handled responsibly and securely, helping local users explore workstation bookings, coworking space availability, and workspace tours with confidence.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">13. Updates to This Privacy Policy</h3>
                <p>We may update this Privacy Policy occasionally to reflect new practices or legal requirements. Updates will be posted on this page with a revised date.</p>
              </div>

              <div>
                <h3 className="text-2xl font-sans font-bold text-foreground mb-4">14. Contact for Privacy Matters</h3>
                <ul className="list-none space-y-2">
                  <li><strong>Address:</strong> 111, F-Block, Sector-8, Noida-201301</li>
                  <li><strong>Website:</strong> www.goldenglory.space</li>
                  <li><strong>Email:</strong> <a href="mailto:info@goldenglory.space" className="text-primary hover:underline">info@goldenglory.space</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
