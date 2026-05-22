"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, AlertTriangle } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "8K+",
      label: "Inspections Done",
      desc: "Apartments, villas, & homes",
      icon: <CheckCircle2 className="w-5 h-5 text-brand-gold" />,
    },
    {
      value: "6K+",
      label: "Happy Buyers",
      desc: "Diaspora & local investors",
      icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />,
    },
    {
      value: "2.5K+",
      label: "Defects Uncovered",
      desc: "Water damage, structural, electrical",
      icon: <AlertTriangle className="w-5 h-5 text-brand-gold" />,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-brand-card dark:bg-[#231A14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image Showcase */}
        <div className="lg:col-span-6 w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-brand-accent relative">
          <Image
            src="/apartment-showcase.png"
            alt="Kilimani residences Nairobi Kenya, property inspection statistics showcase"
            fill
            className="object-cover hover:scale-102 transition-transform duration-700"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none" />
        </div>

        {/* Right Column: Copy & Stats Counter */}
        <div className="lg:col-span-6 flex flex-col gap-6 animate-fade-in-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark dark:text-brand-bg leading-tight">
            We Help You To Secure <br />
            Your Future Property Investment
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-brand-muted dark:text-brand-accent-light">
            Buying a home is one of the most significant financial steps you will ever make. Our certified inspectors conduct thorough pre-purchase reviews, checking structural integrity, plumbing, electrical circuits, and rooftop conditions. We reveal hidden defects to help you negotiate a fair price or walk away from a risky structure.
          </p>

          {/* Stats Counters Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4 pt-6 border-t border-brand-accent/50">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-accent-light dark:bg-brand-dark/50 flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <span className="font-serif text-2xl md:text-3xl font-bold text-brand-dark dark:text-brand-bg">
                    {stat.value}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 pl-1">
                  <span className="text-xs font-bold text-brand-dark dark:text-brand-bg tracking-wide">
                    {stat.label}
                  </span>
                  <span className="text-[10px] text-brand-muted dark:text-brand-accent-light leading-snug">
                    {stat.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
