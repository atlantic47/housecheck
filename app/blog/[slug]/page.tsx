import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Bookmark, Clock, Share2 } from "lucide-react";
import { mockBlogPosts } from "@/lib/blogData";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = mockBlogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | HouseCheck Kenya Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  // Await params prior to reading values in Next.js 16 server components
  const { slug } = await params;

  // Retrieve the correct matching article
  const post = mockBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Dynamic Blog LD+JSON structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "HouseCheck Kenya",
      "logo": {
        "@type": "ImageObject",
        "url": "https://housecheck.co.ke/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://housecheck.co.ke/blog/${post.slug}`
    }
  };

  // Dynamic JSX article body renderer to pass organic contextual backlinks
  const renderArticleBody = () => {
    if (slug === "diaspora-buyers-inspection-guide") {
      return (
        <div className="flex flex-col gap-6 font-sans text-sm md:text-base leading-relaxed text-brand-dark dark:text-brand-bg tracking-wide max-w-none animate-fade-in-up [animation-delay:100ms]">
          <p>
            Buying property in Nairobi from abroad is a major financial step. For Kenyan diaspora buyers, navigating remote construction quality and developer transparency poses severe verification challenges. Without local, independent eyes on the ground, buyers are highly vulnerable to substandard work.
          </p>
          <p>
            Our physical audits consistently reveal that rising dampness and slab moisture are the most common overlooked flaws in Kilimani and Lavington apartments. Excess moisture degrades slab reinforcement and leads directly to indoor mold infestation. If you find active mold growth in the property you wish to buy, we highly recommend reading{" "}
            <a
              href="https://moldguardkenya.co.ke/blog/causes-of-mold-in-kenyan-homes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline font-bold"
            >
              MoldGuard Kenya's guide on causes of mold in Kenyan homes
            </a>{" "}
            to evaluate why slab dampness is so persistent and understand the remediation costs before completing your purchase.
          </p>
          <p>
            Additionally, verify load-bearing pillars, electrical breaker panels, and plumbing slopes. Certified inspectors make sure all columns match standard architectural codes (e.g. Class 20/25 mixing ratios) before you make that final money wire transfer.
          </p>
          <p>
            Independent pre-purchase snagging protects your lifetime savings from quick developer shortcut designs. Always check structural soundness first to guarantee absolute peace of mind.
          </p>
        </div>
      );
    }

    if (slug === "apartment-snag-checklist") {
      return (
        <div className="flex flex-col gap-6 font-sans text-sm md:text-base leading-relaxed text-brand-dark dark:text-brand-bg tracking-wide max-w-none animate-fade-in-up [animation-delay:100ms]">
          <p>
            Before signing that developer handover certificate, you need a meticulous snag list. Nairobi developers often mask deep moisture issues, pipe leaks, and wall cracks behind a fresh, beautiful coat of decorative paint.
          </p>
          <p>
            Check window weather seals, bathroom water pressure, and wall level plastering. Unchecked plumbing leaks are the primary catalyst of toxic black mold spores inside cabinets and closets. In case you detect active colonies during your walkthrough, refer immediately to{" "}
            <a
              href="https://moldguardkenya.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline font-bold"
            >
              MoldGuard Kenya's expert mold removal solutions
            </a>{" "}
            to properly sanitize, disinfect, and restore your rooms before moving in.
          </p>
          <p>
            Furthermore, infrared thermal testing reveals overloaded circuitry and leaking pipes inside concrete ceilings. A minor plumbing leak today can easily lead to severe structural slab damage, ceiling collapse, and mold spores tomorrow.
          </p>
          <p>
            Ensure every single snag is formally noted, photographed, and corrected by the main contractor prior to signing your final handover papers.
          </p>
        </div>
      );
    }

    if (slug === "thermal-imaging-leak-detection") {
      return (
        <div className="flex flex-col gap-6 font-sans text-sm md:text-base leading-relaxed text-brand-dark dark:text-brand-bg tracking-wide max-w-none animate-fade-in-up [animation-delay:100ms]">
          <p>
            A fresh coat of plaster paint can easily hide leaking pipes. Infrared FLIR heat-maps identify minute temperature deltas to reveal hidden plumbing leak points deep inside ceiling drywalls and behind shower tiles.
          </p>
          <p>
            Water intrusion triggers rising dampness, which degrades structural foundations and mortar joints. Persistent moisture is also the absolute catalyst for toxic black mold. If you spot signs of mold or rising damp during a thermal scan, you can learn{" "}
            <a
              href="https://moldguardkenya.co.ke/blog/how-to-remove-mold-permanently"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline font-bold"
            >
              how to permanently remove mold
            </a>{" "}
            through our remediation partners or utilize{" "}
            <a
              href="https://moldguardkenya.co.ke/services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline font-bold"
            >
              MoldGuard Kenya's specialized mold treatments
            </a>{" "}
            to completely decontaminate the air.
          </p>
          <p>
            Thermal imaging is the most cost-effective diagnostic tool in modern property audits. It provides non-invasive, mathematical visual evidence of leak paths, allowing you to negotiate massive repair discounts.
          </p>
          <p>
            Securing a professional pre-purchase scan shields you from buying extremely costly water damage traps that are hidden from the naked eye.
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
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
        {renderArticleBody()}

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
