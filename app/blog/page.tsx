"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, User, ArrowRight, BookOpen } from "lucide-react";

import { BlogPost, mockBlogPosts } from "@/lib/blogData";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Buying Guide", "Checklist", "Technology"];

  const filteredPosts = mockBlogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        
        {/* Title & Search bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-6 border-b border-brand-accent/30 pb-8">
          <div className="flex flex-col gap-3 max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Knowledge Base
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
              HouseCheck Insights & Guides
            </h1>
            <p className="text-xs md:text-sm text-brand-muted dark:text-brand-accent-light leading-relaxed">
              Read independent structural guides, safety snags, and pre-purchase check insights compiled by our licensed Kenyan engineers.
            </p>
          </div>

          {/* Search bar widget */}
          <div className="flex items-center bg-brand-card dark:bg-brand-dark border border-brand-accent rounded-full px-4 py-2 w-full lg:max-w-xs gap-3">
            <Search className="w-4 h-4 text-brand-gold shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="text-xs bg-transparent outline-none font-semibold text-brand-dark dark:text-brand-bg placeholder:text-brand-muted/70 w-full"
            />
          </div>
        </div>

        {/* Categories Tabs & Post Grid */}
        <div className="flex flex-col gap-8 w-full">
          {/* Categories Tab selectors */}
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-brand-dark text-brand-bg shadow-sm"
                    : "border border-brand-accent hover:border-brand-dark hover:bg-brand-accent-light text-brand-dark dark:text-brand-bg dark:border-brand-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article grid layout */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in-up">
              {filteredPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="bg-brand-card dark:bg-[#231A14] rounded-3xl overflow-hidden shadow-md border border-brand-accent/50 hover:shadow-lg transition-shadow group flex flex-col h-full"
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-[200px] w-full overflow-hidden bg-brand-accent-light">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                      sizes="(max-w-768px) 100vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 bg-brand-bg/95 dark:bg-brand-dark/95 px-3 py-1 rounded-full text-[9px] font-bold text-brand-gold uppercase tracking-wider border border-brand-accent/30">
                      {post.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                    <div className="flex flex-col gap-2">
                      {/* Meta dates */}
                      <div className="flex items-center gap-4 text-[10px] text-brand-muted dark:text-brand-accent-light font-semibold">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                          <span>{post.date}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-brand-gold" />
                          <span>{post.author}</span>
                        </span>
                      </div>

                      <h2 className="font-serif text-lg font-bold text-brand-dark dark:text-brand-bg group-hover:text-brand-gold transition-colors leading-snug mt-1">
                        {post.title}
                      </h2>
                      <p className="text-xs leading-relaxed text-brand-muted dark:text-brand-accent-light">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Read more footer */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-xs font-bold text-brand-dark dark:text-brand-bg group-hover:text-brand-gold transition-colors border-t border-brand-accent/30 pt-4 w-fit"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-16 text-center bg-brand-card rounded-3xl border border-brand-accent/50 flex flex-col items-center gap-3">
              <BookOpen className="w-8 h-8 text-brand-gold shrink-0" />
              <span className="text-sm font-serif font-bold text-brand-dark">No Articles Found</span>
              <p className="text-xs text-brand-muted max-w-xs">
                We couldn't find any articles matching your search query. Try another search or select a different category filter.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
