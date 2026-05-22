"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  content: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Nguyen",
    role: "Diaspora Property Buyer (UK)",
    rating: 5.0,
    content:
      "Being based in London made buying in Nairobi extremely stressful. HouseCheck went in, ran a full thermal scan, and saved us from a apartment block with severe slab leaks. Absolute lifesavers!",
    tag: "Diaspora Buyer",
  },
  {
    name: "Michael Rodriguez",
    role: "Real Estate Investor",
    rating: 4.8,
    content:
      "I run pre-purchase inspection on every commercial and villa project I buy in Nairobi. HouseCheck's digital report is extremely structured. I leverage their snag list directly for pricing cuts.",
    tag: "Serial Investor",
  },
  {
    name: "Emily Johnson",
    role: "First-Time Homeowner",
    rating: 5.0,
    content:
      "Super professional team! They walked through the entire house with me, pointing out minor electrical hotspots and attic insulation issues. Handed me a comprehensive PDF report the next day.",
    tag: "Home Owner",
  },
];

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-12">
        
        {/* Title */}
        <div className="flex flex-col gap-4 max-w-xl animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
            Client Success Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
            What People Say About HouseCheck
          </h2>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="w-full max-w-3xl relative animate-fade-in-up [animation-delay:100ms]">
          {/* Card body styled as elegant warm box */}
          <div className="bg-brand-card dark:bg-[#231A14] rounded-3xl p-8 md:p-12 border border-brand-accent/50 shadow-md relative flex flex-col gap-6 items-center text-center">
            
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-brand-accent-light dark:bg-brand-dark flex items-center justify-center text-brand-gold shrink-0">
              <Quote className="w-5 h-5 fill-brand-gold" />
            </div>

            {/* Content text */}
            <p className="font-serif text-base md:text-xl italic leading-relaxed text-brand-dark dark:text-brand-bg max-w-2xl">
              "{current.content}"
            </p>

            {/* Stars */}
            <div className="flex items-center gap-1.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(current.rating)
                      ? "text-brand-gold fill-brand-gold"
                      : "text-zinc-300"
                  }`}
                />
              ))}
              <span className="text-xs font-bold text-brand-dark dark:text-brand-bg pl-1">
                {current.rating.toFixed(1)}
              </span>
            </div>

            {/* Author info */}
            <div className="flex flex-col gap-0.5 mt-2">
              <span className="font-serif font-bold text-lg text-brand-dark dark:text-brand-bg">
                {current.name}
              </span>
              <span className="text-xs text-brand-muted dark:text-brand-accent-light font-semibold">
                {current.role}
              </span>
            </div>

            {/* Tag badge */}
            <span className="absolute top-4 right-4 text-[9px] font-bold text-brand-gold border border-brand-gold/30 bg-brand-gold/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
              {current.tag}
            </span>
          </div>

          {/* Navigation Controls exactly modeled after the circular arrows in the Dwello card */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-11 h-11 rounded-full border border-brand-accent hover:border-brand-dark text-brand-dark hover:bg-brand-accent-light flex items-center justify-center dark:text-brand-bg dark:border-brand-accent"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-11 h-11 rounded-full border border-brand-accent hover:border-brand-dark text-brand-dark hover:bg-brand-accent-light flex items-center justify-center dark:text-brand-bg dark:border-brand-accent"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
