-- Create gallery_items table
CREATE TABLE IF NOT EXISTS public.gallery_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  type text NOT NULL,
  title text NOT NULL,
  url text NOT NULL,
  order_index integer DEFAULT 0
);

-- Disable RLS for easy access via Admin Panel (like other tables)
ALTER TABLE public.gallery_items DISABLE ROW LEVEL SECURITY;

-- Add unique constraint to url so we don't insert duplicate images on re-runs
ALTER TABLE public.gallery_items ADD CONSTRAINT unique_gallery_url UNIQUE (url);

-- Insert initial hardcoded Gallery data
INSERT INTO public.gallery_items (type, title, url, order_index) VALUES
  ('image', 'Golden Glory Workspace', '/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png', 1),
  ('image', 'Cover Image', '/images/gallery/cover%20image%20of%20golden%20glory.png', 2),
  ('image', 'Workspace Vibe', '/images/gallery/ending%20image%20golden%20glory.png', 3),
  ('image', 'Fixed Desks', '/images/gallery/fixed%20desks%20golden%20glory.png', 4),
  ('video', 'Cabin Walkthrough', '/videos/cabinnnnn%20(1).mp4', 5),
  ('image', 'Private Cabin', '/images/gallery/private%20cabin%20golden%20glory%201.png', 6),
  ('image', 'Premium Cabin', '/images/gallery/private%20cabin%20golden%20glory%202.png', 7),
  ('image', 'Basement Workspace', '/images/gallery/basement.png', 8),
  ('image', 'Dedicated Desk 2', '/images/gallery/dedcated%20desk%202.png', 9),
  ('image', 'Dedicated Desk', '/images/gallery/dedicated%20desk.png', 10),
  ('image', 'Meeting Room', '/images/gallery/meeting%20room.png', 11),
  ('image', 'Private Cabins', '/images/gallery/private%20cabins.png', 12)
ON CONFLICT (url) DO NOTHING;


-- Create blogs table
CREATE TABLE IF NOT EXISTS public.blogs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text NOT NULL,
  content text NOT NULL,
  date text NOT NULL,
  author text NOT NULL,
  category text NOT NULL,
  read_time text NOT NULL,
  image_url text NOT NULL
);

-- Disable RLS for easy access via Admin Panel
ALTER TABLE public.blogs DISABLE ROW LEVEL SECURITY;

-- Insert initial hardcoded Blog data
INSERT INTO public.blogs (title, slug, excerpt, content, date, author, category, read_time, image_url) VALUES
  ('Stop Paying for Space: The Future is a Virtual Office', 'noida-sector-8-virtual-office-for-startups-golden-glory', 'Discover how a virtual office can help your business maintain a professional image while keeping overhead costs low.', 'For years, the Indian Dream for entrepreneurs involved a corner office...', 'February 3, 2026', 'goldenglory', 'Coworking Office Space', '4 min read', '/images/gallery/ABOUT%20GOLDEN%20GLORY%20IMAGE.png'),
  ('Freedom to Work: Golden Glory Day Passes Starting at Just', 'freedom-to-work-golden-glory-day-passes-starting-at-just', 'Need a professional workspace for just one day? Learn how our Day Passes offer the ultimate flexibility.', 'In todays fast-paced digital economy...', 'January 27, 2026', 'Aditya Jain', 'Coworking Office Space', '4 min read', '/images/gallery/dedcated%20desk%202.png'),
  ('Private Cabin Office Space in a Coworking Environment', 'private-cabin-office-space', 'Find out why small teams and growing startups thrive in private cabins within a vibrant coworking space.', 'A private cabin office space in a coworking environment is an ideal solution...', 'January 20, 2026', 'goldenglory', 'Coworking Office Space', '5 min read', '/images/gallery/basement.png'),
  ('How to Maximize Productivity Using a Flexible Desk in a Coworking Space', 'flexible-desk-at-golden-glory', 'Tips and strategies for freelancers and remote workers to get the most out of a flexible hot desk setup.', 'The modern office is no longer a sea of fixed cubicles...', 'January 17, 2026', 'goldenglory', 'Coworking Office Space', '4 min read', '/images/gallery/private%20cabin%20golden%20glory%201.png'),
  ('Dedicated Desk at Golden Glory Coworking Space | Your Fixed Spot', 'dedicated-desk-at-golden-glory', 'A dedicated desk offers the perfect balance of consistency and community. Learn why it might be your best choice.', 'Are you tired of hunting for a seat every morning?...', 'January 10, 2026', 'goldenglory', 'Coworking Office Space', '3 min read', '/images/gallery/private%20cabin%20golden%20glory%202.png'),
  ('Coworking Space for Startups & Freelancers | Golden Glory Space', 'affordable-coworking-space-in-noida', 'Cut Costs, Not Dreams: Why Golden Glory is the Smartest Choice for early-stage startups and independent professionals.', 'For every entrepreneur and independent professional...', 'December 16, 2025', 'goldenglory', 'Coworking Office Space', '5 min read', '/images/gallery/ending%20image%20golden%20glory.png')
ON CONFLICT (slug) DO UPDATE SET image_url = EXCLUDED.image_url;
