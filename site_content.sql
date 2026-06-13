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
  ('about_mission_text', 'About Us', 'textarea', 'At Golden Glory, we believe that financial freedom should be accessible to everyone. We meticulously analyze markets to bring you mutual funds that deliver consistent, risk-adjusted returns.')
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
