import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Bookmark, Clock, Share2 } from "lucide-react";
import { mockBlogPosts } from "@/lib/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  // Await params prior to reading values in Next.js 16 server components
  const { slug } = await params;

  // Retrieve the correct matching article
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Fallback rich post content based on article slug
  const richContent = [
    "Buying a property is arguably one of the most substantial financial investments individuals make in their lifetime. For members of the Kenyan diaspora, this step is filled with unique structural risks, remote verification challenges, and complex coordination steps.",
    "Quite often, developers and real estate brokers present glowing marketing brochures, premium renderings, and beautiful show houses. However, actual final handovers can diverge significantly from initial drawings, containing severe architectural deficits that cost millions to repair.",
    "First, concrete structural tests and concrete columns are critical. Independent structural audits ensure load-bearing pillars possess standard reinforcement bars and correct concrete mixing ratios (e.g. Class 20/25). Substandard concrete can lead to foundation shifting and wall sagging over time.",
    "Second, active moisture checking. Nairobi's rainy seasons can test the waterproof seal of any slab. Our moisture scanners often uncover high dampness saturation levels (above 80%) beneath fresh plaster. Fresh coats of visual paint are frequently used to mask severe leak paths, which eventually lead to black mold spores.",
    "Third, distribution board checks. Electrical circuitry must be inspected under active load checks using thermal scanners to spot hot spots (breakers running at dangerous temperatures above 70°C). This simple diagnostic prevents electrical fires and wiring degradation.",
    "Before making your final wire transfer from abroad, ensure you secure independent pre-purchase home inspections. Our certified engineers deliver comprehensive snag checklist reports with annotated photos within 24-48 hours, shielding you from hazardous structural traps.",
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <article className="max-w-3xl mx-auto px-6 flex flex-col gap-10">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="flex items-center gap-2 text-xs font-bold text-brand-muted hover:text-brand-dark dark:hover:text-brand-bg tracking-wider uppercase group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Meta Header */}
        <div className="flex flex-col gap-5 border-b border-brand-accent/30 pb-6 animate-fade-in-up">
          <span className="bg-brand-accent-light dark:bg-brand-dark px-3.5 py-1.5 rounded-full text-[10px] font-bold text-brand-gold uppercase tracking-wider border border-brand-accent/35 w-fit">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark dark:text-brand-bg leading-tight">
            {post.title}
          </h1>

          {/* Authorship list */}
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-brand-muted dark:text-brand-accent-light font-semibold pt-2">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-gold" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-brand-gold" />
                <span>{post.author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>5 Min Read</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-brand-accent-light text-brand-muted hover:text-brand-dark transition-colors" title="Bookmark">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full hover:bg-brand-accent-light text-brand-muted hover:text-brand-dark transition-colors" title="Share">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Typographic Article Body */}
        <div className="flex flex-col gap-6 font-sans text-sm md:text-base leading-relaxed text-brand-dark dark:text-brand-bg tracking-wide max-w-none animate-fade-in-up [animation-delay:100ms]">
          {richContent.map((paragraph, pIdx) => (
            <p key={pIdx}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Pre-purchase CTA Card at bottom */}
        <div className="bg-brand-accent-light dark:bg-brand-dark/30 rounded-3xl p-8 border border-brand-accent/40 flex flex-col md:flex-row items-center justify-between gap-6 mt-6 animate-fade-in-up [animation-delay:150ms]">
          <div className="flex flex-col gap-1.5">
            <h3 className="font-serif font-bold text-xl text-brand-dark dark:text-brand-bg leading-tight">
              Buying Property in Kenya?
            </h3>
            <p className="text-xs text-brand-muted dark:text-brand-accent-light max-w-sm">
              Do not rely on brochures alone. Secure an independent, certified property inspection to safeguard your money.
            </p>
          </div>
          <Link
            href="/book"
            className="px-6 py-3.5 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold shrink-0 shadow-sm"
          >
            Book Inspection Now
          </Link>
        </div>

      </article>
    </div>
  );
}
