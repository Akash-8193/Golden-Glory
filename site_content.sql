-- 1. Create the table
CREATE TABLE IF NOT EXISTS public.site_content (
  key text PRIMARY KEY,
  section text NOT NULL,
  content_type text NOT NULL DEFAULT 'text',
  value text
);

-- 2. Insert initial mock data (Major Sections)
INSERT INTO public.site_content (key, section, content_type, value) VALUES
  -- Home Page Hero
  ('home_hero_title', 'Home Page', 'text', 'Empower Your Future with the Best Mutual Funds'),
  ('home_hero_subtitle', 'Home Page', 'textarea', 'Take control of your financial destiny with Golden Glory. Discover expert-curated mutual funds tailored for massive growth and unmatched stability.'),
  ('home_hero_image', 'Home Page', 'image_url', 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'),
  
  -- Footer Contact Info
  ('contact_email', 'Footer', 'text', 'info@goldenglory.com'),
  ('contact_phone', 'Footer', 'text', '+91 98765 43210'),
  ('contact_address', 'Footer', 'textarea', '123 Finance Street, Wealth District, Mumbai, India'),
  
  -- About Us Intro
  ('about_mission_title', 'About Us', 'text', 'Our Mission to Secure Your Future'),
  ('about_mission_text', 'About Us', 'textarea', 'At Golden Glory, we believe that financial freedom should be accessible to everyone. We meticulously analyze markets to bring you mutual funds that deliver consistent, risk-adjusted returns.'),

  -- Other Pages Heroes
  ('about_hero_title', 'About Us', 'text', 'About <span class="text-[#ffa602]">Golden Glory</span>'),
  ('about_hero_subtitle', 'About Us', 'textarea', 'A premium coworking space in Noida offering flexible workstations, private cabins, and modern amenities.'),
  ('offerings_hero_title', 'Offerings Page', 'text', 'Choose What <span class="text-[#ffa602]">Fits You</span>'),
  ('offerings_hero_subtitle', 'Offerings Page', 'textarea', 'Where ambition meets the right environment.'),
  ('contact_hero_title', 'Contact Page', 'text', 'Get In <span class="text-[#ffa602]">Touch</span>'),
  ('contact_hero_subtitle', 'Contact Page', 'textarea', 'Whether you need workspace details, pricing, or a quick tour, our team is here to guide you and answer every question.'),
  ('faq_hero_title', 'FAQ Page', 'text', 'Frequently Asked <span class="text-[#ffa602]">Questions</span>'),
  ('faq_hero_subtitle', 'FAQ Page', 'textarea', 'Explore our FAQ for everything you need to know about coworking space in Noida. Get fast, clear answers to common queries.'),
  ('privacy_hero_title', 'Privacy Policy', 'text', 'Privacy <span class="text-[#ffa602]">Policy</span>')
ON CONFLICT (key) DO NOTHING;

-- 3. Set up Row Level Security (RLS)
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Allow anyone to READ the content (for the public website)
CREATE POLICY "Allow public read access on site_content"
  ON public.site_content FOR SELECT USING (true);

-- Allow anyone to UPDATE the content (for the admin panel)
-- Note: In a production app, this should be restricted to authenticated users.
CREATE POLICY "Allow public update access on site_content"
  ON public.site_content FOR UPDATE USING (true);

-- Allow anyone to INSERT content
CREATE POLICY "Allow public insert access on site_content"
  ON public.site_content FOR INSERT WITH CHECK (true);
