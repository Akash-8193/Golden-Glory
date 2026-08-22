export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image_url: string;
  content: string;
  tags: string[];
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    slug: 'the-importance-of-precision-engineering',
    title: 'The Importance of Precision Engineering in Industrial Manufacturing',
    category: 'Uncategorized',
    date: 'March 30, 2026',
    author: 'Admin',
    image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Industry', 'Machinery'],
    content: `
      In today's highly competitive industrial landscape, precision engineering plays a critical role in manufacturing success. Modern industries demand components that meet extremely tight tolerances, high performance standards, and consistent quality. Precision engineering ensures that every manufactured part is produced with accuracy, reliability, and efficiency.
      
      Creating a balanced work-life routine is essential for maintaining both professional success and personal well-being. In today's busy world, many individuals struggle to manage work responsibilities while also making time for family, health, and personal interests. By organizing your daily schedule, setting clear priorities, and establishing healthy boundaries.
      
      <blockquote>
      Precision engineering drives industrial manufacturing by delivering unmatched accuracy, consistency, and reliability. It ensures high-quality components, reduces waste, improves efficiency, and supports advanced industries with perfectly crafted parts that meet the highest performance.
      </blockquote>
      
      Precision engineering refers to the design and manufacturing of parts with extremely tight tolerances and high levels of accuracy. It involves the use of advanced machinery, sophisticated measurement tools, and computer-controlled systems to produce components that meet exact specifications.
      
      <h2>Why precision engineer matter in Manufacturing</h2>
      
      Precision engineering plays a vital role in modern manufacturing by ensuring that every component is produced with exact measurements and tight tolerances. This high level of accuracy improves product quality, enhances performance, and ensures that parts fit.
      
      <ul>
        <li>Precision engineering ensures components meet exact specifications for consistent industrial manufacturing quality.</li>
        <li>High accuracy manufacturing improves product reliability, durability, and long-term operational performance.</li>
        <li>Prevents exhaustion by balancing professional responsibilities with personal relaxation and recovery time.</li>
        <li>Tight tolerances help components fit perfectly within complex mechanical and industrial systems.</li>
        <li>Precision processes significantly reduce material waste and costly production errors during manufacturing.</li>
      </ul>
      
      By reducing errors and material waste, precision engineering also helps manufacturers increase production efficiency and lower operational costs. It is especially important in industries such as aerospace, automotive, medical equipment, and electronics.
    `
  },
  {
    id: '2',
    slug: 'how-to-know-when-your-roof-needs-repair-or-replacement',
    title: 'How to Know When Your Roof Needs Repair or Replacement',
    category: 'Roof Inspection',
    date: 'January 26, 2026',
    author: 'Admin',
    image_url: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Industry', 'Machinery'],
    content: `Content coming soon...`
  },
  {
    id: '3',
    slug: 'roof-maintenance-tips-every-homeowner-should-know',
    title: 'Roof Maintenance Tips Every Homeowner Should Know',
    category: 'Roof Repair',
    date: 'January 26, 2026',
    author: 'Admin',
    image_url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    tags: ['Maintenance', 'Tips'],
    content: `Content coming soon...`
  },
  {
    id: '4',
    slug: 'residential-vs-commercial-roofing-whats-the-difference',
    title: 'Residential vs Commercial Roofing: What\'s the Difference?',
    category: 'Roof Inspection',
    date: 'January 26, 2026',
    author: 'Admin',
    image_url: 'https://images.unsplash.com/photo-1541888081688-66cbbe86f4a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    tags: ['Comparison', 'Guide'],
    content: `Content coming soon...`
  },
  {
    id: '5',
    slug: 'metal-roofing-vs-shingles-which-is-right-for-you',
    title: 'Metal Roofing vs Shingles Which Is Right for You?',
    category: 'Roofing',
    date: 'January 26, 2026',
    author: 'Admin',
    image_url: 'https://images.unsplash.com/photo-1588693833777-66a935a646c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Materials', 'Roofing'],
    content: `Content coming soon...`
  },
  {
    id: '6',
    slug: 'roof-ventilation-why-it-matters-more-than-you-think',
    title: 'Roof Ventilation Why It Matters More Than You Think',
    category: 'Roof Repair',
    date: 'January 24, 2026',
    author: 'Admin',
    image_url: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    tags: ['Ventilation', 'Maintenance'],
    content: `Content coming soon...`
  }
];
