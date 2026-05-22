export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  img: string;
}

export const mockBlogPosts: BlogPost[] = [
  {
    title: "5 Things Diaspora Buyers Must Inspect Before Buying in Nairobi",
    slug: "diaspora-buyers-inspection-guide",
    excerpt: "Buying property from abroad is high-risk. Learn why checking slab moisture, concrete structural pillars, and drainage slopes can save you millions.",
    date: "May 18, 2026",
    author: "Eng. Peter Kamau",
    category: "Buying Guide",
    img: "/apartment-showcase.png",
  },
  {
    title: "The Ultimate Snag Checklist for Nairobi Apartments",
    slug: "apartment-snag-checklist",
    excerpt: "Before signing that handover certificate, here is the exact list of plumbing flow tests, window seals, and wall leveling snags you must verify.",
    date: "May 10, 2026",
    author: "Alice Mutua (Inspector)",
    category: "Checklist",
    img: "/apartment-showcase.png",
  },
  {
    title: "How Thermal Imaging Uncovers Hidden Water Leaks",
    slug: "thermal-imaging-leak-detection",
    excerpt: "A fresh coat of paint can hide damp walls. See how infrared FLIR heat-maps identify plumbing leak points hidden deep inside ceiling drywall.",
    date: "April 28, 2026",
    author: "Eng. Peter Kamau",
    category: "Technology",
    img: "/hero-villa.png",
  },
];
