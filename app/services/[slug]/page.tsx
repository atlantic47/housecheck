import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Compass, CheckCircle2, ShieldCheck, HelpCircle, ArrowLeft } from "lucide-react";
import { servicesList } from "@/lib/servicesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  // Await params prior to reading values in Next.js 16 server components
  const { slug } = await params;

  // Retrieve the correct matching service
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Sample items checked by service type
  const checkedItems = [
    "Structural soundness of foundations and load-bearing walls",
    "Moisture detection on plaster, slab, and drywall sheets",
    "Pressure test on plumbing lines, water flow rate and drainage channels",
    "Electrical board connections, thermal hotspots and safety trip switches",
    "Roofing trusses structural state, tile alignments and gutter drains",
    "Balcony safety rail, floor tiling slope and drainage grills",
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-10">
        
        {/* Back Link */}
        <Link
          href="/services"
          className="flex items-center gap-2 text-xs font-bold text-brand-muted hover:text-brand-dark dark:hover:text-brand-bg tracking-wider uppercase group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero Card */}
        <div className="bg-brand-card dark:bg-[#231A14] rounded-3xl p-8 md:p-12 border border-brand-accent shadow-sm flex flex-col gap-6 relative overflow-hidden animate-fade-in-up">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent-light dark:bg-brand-dark rounded-bl-full pointer-events-none -z-10" />
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Specialized Inspection Detail
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
              {service.title}
            </h1>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-brand-muted dark:text-brand-accent-light">
            We conduct highly exhaustive pre-purchase audits for {service.title.toLowerCase()}s in Nairobi, Mombasa, and surrounding suburbs. Using high-precision tools, we check internal wiring, slab humidity levels, and structural load pathways, generating an independent diagnostic report to secure your property investment.
          </p>

          <div className="flex items-center justify-between border-t border-brand-accent/30 pt-6 mt-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                Starting Package
              </span>
              <span className="font-serif text-2xl font-extrabold text-brand-dark dark:text-brand-bg">
                {service.price}
              </span>
            </div>

            <Link
              href={`/book?type=${encodeURIComponent(service.title)}`}
              className="px-8 py-3.5 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-sm font-bold tracking-wide shadow-sm"
            >
              Book {service.title}
            </Link>
          </div>
        </div>

        {/* Detailed Checked Items List */}
        <div className="flex flex-col gap-6 animate-fade-in-up [animation-delay:100ms]">
          <h2 className="font-serif text-2xl font-bold text-brand-dark dark:text-brand-bg">
            What is Checked & Analyzed
          </h2>
          <p className="text-sm text-brand-muted dark:text-brand-accent-light">
            Our inspectors run through a comprehensive checklist matching all local building codes and independent safety criteria. Here is what is included in the walkthrough:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {checkedItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-card dark:bg-brand-dark rounded-2xl p-5 border border-brand-accent/50 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-brand-accent-light dark:bg-brand-dark/50 flex items-center justify-center text-brand-gold shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-xs leading-relaxed text-brand-dark dark:text-brand-bg font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Segment */}
        <div className="bg-brand-accent-light dark:bg-brand-dark/30 rounded-3xl p-8 border border-brand-accent/40 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in-up [animation-delay:150ms]">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif font-bold text-xl text-brand-dark dark:text-brand-bg">
              Need a Custom Diagnostic Scope?
            </h3>
            <p className="text-xs text-brand-muted dark:text-brand-accent-light max-w-md">
              Whether it is multi-unit investment packages, combined structural and mold inspections, or custom snag lists, we can customize a checklist for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold shrink-0 shadow-sm"
          >
            Inquire Now
          </Link>
        </div>

      </div>
    </div>
  );
}
