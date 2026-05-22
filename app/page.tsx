"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, FileSpreadsheet, FileText, Check, ChevronDown, MessageCircle, Mail } from "lucide-react";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularServices from "@/components/PopularServices";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TestimonialsSlider from "@/components/TestimonialsSlider";

// Static FAQ list for homepage accordion
const faqsList = [
  {
    question: "What exactly is checked during a pre-purchase home inspection?",
    answer: "Our inspections cover structural foundations, walls, slab dampness, electrical installations, plumbing flow, pressure, drainage, roof trusses, tiles, and gutter systems. We also run thermal scans to identify hidden pipe leaks or electrical hazards.",
  },
  {
    question: "How long does the inspection take and when do I get the report?",
    answer: "A standard apartment takes 2 to 3 hours, while a large villa takes 4 to 5 hours. We deliver your comprehensive digital PDF report with annotated photos within 24 to 48 hours of completing the physical walkthrough.",
  },
  {
    question: "Can I join the inspector during the inspection?",
    answer: "Yes, absolutely! We highly encourage buyers to accompany our inspectors. It allows you to see findings first-hand and receive on-the-spot maintenance advice from our team.",
  },
  {
    question: "Are your inspectors independent?",
    answer: "Yes, 100%. We operate completely independently of real estate agents, property developers, or lawyers. Our sole allegiance is to you, the property buyer, ensuring an unbiased assessment of the property's condition.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setInquirySubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Banner Section */}
      <Hero />

      {/* 2. Trust Statistics Section */}
      <StatsSection />

      {/* 3. Why Choose Us minimal grid */}
      <WhyChooseUs />

      {/* 4. Specialized Inspections Grid (Dwello Residences) */}
      <PopularServices />

      {/* 5. Before & After Advanced Tech Gallery */}
      <BeforeAfterGallery />

      {/* 6. Sample Report Preview Showcase */}
      <section className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Description */}
          <div className="lg:col-span-6 flex flex-col gap-6 order-2 lg:order-1 animate-fade-in-up">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Transparency & Quality
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark dark:text-brand-bg leading-tight">
              Review a Real-Life Sample Inspection Report
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-brand-muted dark:text-brand-accent-light">
              We believe in full transparency. Our digital reports are structured to be simple yet incredibly technical. We outline structural defects, safety hazards, and future maintenance recommendations with clear, high-resolution annotated photographs.
            </p>

            <ul className="flex flex-col gap-3 text-sm text-brand-muted dark:text-brand-accent-light font-semibold">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center">
                  <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Annotated thermal moisture damage photos</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center">
                  <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Detailed electrical board safety diagnostics</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-accent flex items-center justify-center">
                  <Check className="w-3 h-3 text-brand-dark" />
                </div>
                <span>Snag list ready for negotiations or contractor repair</span>
              </li>
            </ul>

            <div className="mt-2">
              <Link
                href="/sample-report"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-sm font-bold tracking-wide shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Sample Report (PDF)</span>
              </Link>
            </div>
          </div>

          {/* Right Block: Pure CSS Premium Report Cover Mockup */}
          <div className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
            <div className="bg-brand-card dark:bg-[#231A14] rounded-3xl p-6 md:p-8 border border-brand-accent shadow-xl w-full max-w-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/10 to-transparent pointer-events-none" />
              
              {/* Cover Mockup Frame */}
              <div className="bg-brand-dark text-brand-bg rounded-2xl p-6 md:p-8 flex flex-col justify-between aspect-[3/4] shadow-lg relative border-l-[6px] border-brand-gold">
                
                {/* Header branding */}
                <div className="flex flex-col gap-1.5 border-b border-brand-accent/20 pb-4">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    HouseCheck Kenya
                  </span>
                  <span className="text-[9px] text-zinc-400 font-semibold uppercase tracking-wider">
                    Official Property Diagnostic Report
                  </span>
                </div>

                {/* Cover Middle Info */}
                <div className="flex flex-col gap-2 my-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center mb-2">
                    <FileText className="w-5 h-5 text-brand-dark" />
                  </div>
                  <span className="font-serif text-2xl font-bold tracking-tight text-white leading-tight">
                    Pre-Purchase <br />
                    Villa Inspection
                  </span>
                  <span className="text-[10px] text-brand-gold border border-brand-gold/30 bg-brand-gold/10 px-2.5 py-1 rounded-full w-fit mt-1">
                    Property: 12 Runda Drive, Nairobi
                  </span>
                </div>

                {/* Footer details */}
                <div className="flex items-center justify-between border-t border-brand-accent/20 pt-4 text-[9px] text-zinc-400 font-semibold">
                  <span>DATE: MAY 22, 2026</span>
                  <span>STATUS: PASSED WITH SNAGS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Testimonials Slider */}
      <TestimonialsSlider />

      {/* 8. FAQ Accordion & Inquiry CTA ("Do You Have Any Questions?") */}
      <section className="w-full py-16 md:py-24 bg-brand-card dark:bg-[#231A14]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Block: FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-3 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Learn More
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion container */}
            <div className="flex flex-col gap-4 w-full">
              {faqsList.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-brand-bg dark:bg-brand-dark rounded-2xl border border-brand-accent/60 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-serif font-bold text-sm md:text-base text-brand-dark dark:text-brand-bg focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-brand-gold shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-300 ${
                        isOpen ? "max-h-[200px] border-t border-brand-accent/30" : "max-h-0"
                      } overflow-hidden`}
                    >
                      <p className="px-6 py-5 text-[13px] leading-relaxed text-brand-muted dark:text-brand-accent-light bg-brand-card/30 dark:bg-brand-dark/20">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Block: Inquiries / FAQ Helpline */}
          <div className="lg:col-span-5 flex flex-col gap-6 bg-brand-bg dark:bg-brand-dark rounded-3xl p-8 border border-brand-accent shadow-sm self-start">
            <h3 className="font-serif font-bold text-2xl text-brand-dark dark:text-brand-bg">
              Do You Have Any Questions?
            </h3>
            <p className="text-[13px] leading-relaxed text-brand-muted dark:text-brand-accent-light">
              Can't find the answers you need in our FAQ? Our support team is online to assist you via WhatsApp live chat or email inquiry.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {/* WhatsApp Helpline Card */}
              <a
                href="https://wa.me/254710907628"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-brand-accent-light dark:bg-brand-dark border border-brand-accent/50 hover:bg-brand-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-brand-dark dark:text-brand-bg uppercase tracking-wide">
                    Chat Live
                  </span>
                  <span className="text-[11px] text-brand-muted dark:text-brand-accent-light">
                    Online Now with our support team
                  </span>
                </div>
              </a>

              {/* Email Form */}
              <form onSubmit={handleInquiry} className="flex flex-col gap-3 mt-2 border-t border-brand-accent/30 pt-4">
                <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                  Request a Free Consultation Call
                </label>
                {inquirySubmitted ? (
                  <div className="p-4 rounded-2xl bg-brand-accent-light dark:bg-brand-dark border border-brand-accent/50 text-center flex items-center justify-center gap-2 animate-fade-in-up">
                    <Check className="w-4 h-4 text-brand-gold" />
                    <span className="text-xs font-bold text-brand-dark dark:text-brand-bg">
                      Inquiry Sent! We will call you soon.
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center bg-brand-card dark:bg-brand-dark border border-brand-accent/70 rounded-full p-1.5 pl-4 gap-2">
                    <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="text-xs bg-transparent outline-none font-semibold text-brand-dark dark:text-brand-bg placeholder:text-brand-muted/70 placeholder:font-normal w-full"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold shrink-0 shadow-sm"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
