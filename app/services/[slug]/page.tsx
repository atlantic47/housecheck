import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Compass, CheckCircle2, ShieldCheck, HelpCircle, ArrowLeft } from "lucide-react";
import { servicesList } from "@/lib/servicesData";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);
  if (!service) {
    return {};
  }
  return {
    title: `${service.title} In Kenya | Pre-Purchase Inspection`,
    description: `Expert pre-purchase diagnostics for ${service.title.toLowerCase()}s in Nairobi, Mombasa, and surrounding areas. Detailed snag lists, electrical checks, and moisture scans. Starting from ${service.price}.`,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  // Await params prior to reading values in Next.js 16 server components
  const { slug } = await params;

  // Retrieve the correct matching service
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Specific Service LD+JSON structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": `Comprehensive pre-purchase structural, plumbing, electrical, and slab moisture diagnostics for ${service.title.toLowerCase()}s.`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "HouseCheck Kenya",
      "telephone": "+254710907628",
      "priceRange": "$$",
      "image": "https://housecheck.co.ke/hero-villa.png"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "offers": {
      "@type": "Offer",
      "price": "25000",
      "priceCurrency": "KES",
      "description": "Starting inspection rate for premium services"
    }
  };

  // Sample items checked by service type
  const checkedItems = [
    "Structural soundness of foundations and load-bearing walls",
    "Moisture detection on plaster, slab, and drywall sheets",
    "Pressure test on plumbing lines, water flow rate and drainage channels",
    "Electrical board connections, thermal hotspots and safety trip switches",
    "Roofing trusses structural state, tile alignments and gutter drains",
    "Balcony safety rail, floor tiling slope and drainage grills",
  ];

  // Dynamic JSX description renderer to pass contextual backlinks naturally
  const renderDescription = () => {
    if (slug === "mold-inspection") {
      return (
        <p className="text-sm md:text-base leading-relaxed text-brand-muted dark:text-brand-accent-light">
          Active mold infestation poses serious respiratory health risks and compromises property structures. Our pre-purchase mold inspection uses airborne spore traps and surface swab diagnostics to map infestations. If severe mold issues are identified, we recommend utilizing{" "}
          <a
            href="https://moldguardkenya.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline font-bold"
          >
            MoldGuard Kenya's Professional Mold Remediation
          </a>{" "}
          and{" "}
          <a
            href="https://moldguardkenya.co.ke/services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline font-bold"
          >
            sanitization services
          </a>{" "}
          to securely sterilize and decontaminate your property. You can review current{" "}
          <a
            href="https://moldguardkenya.co.ke/blog/mold-removal-remediation-prices-kenya-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline font-bold"
          >
            mold removal prices in Kenya
          </a>{" "}
          to assist in your budget planning.
        </p>
      );
    }

    if (slug === "moisture-leak-inspection") {
      return (
        <p className="text-sm md:text-base leading-relaxed text-brand-muted dark:text-brand-accent-light">
          Unresolved leaks and thermal slab dampness are the primary root causes of indoor humidity, crumbling plaster, and subsequent toxic spores. Our high-resolution FLIR moisture scans map pipe leak paths deep behind drywalls. Understanding the critical difference between{" "}
          <a
            href="https://moldguardkenya.co.ke/blog/mold-vs-dampness-explained"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline font-bold"
          >
            mold vs dampness
          </a>{" "}
          is vital for proper repair. For rapid, post-leak decontamination, contact{" "}
          <a
            href="https://moldguardkenya.co.ke/locations/nairobi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold hover:underline font-bold"
          >
            MoldGuard Kenya's Nairobi remediation team
          </a>{" "}
          to completely dry out and restore structural health.
        </p>
      );
    }

    return (
      <p className="text-sm md:text-base leading-relaxed text-brand-muted dark:text-brand-accent-light">
        We conduct highly exhaustive pre-purchase audits for {service.title.toLowerCase()}s in Nairobi, Mombasa, and surrounding suburbs. Using high-precision tools, we check internal wiring, slab humidity levels, and structural load pathways, generating an independent diagnostic report to secure your property investment.
      </p>
    );
  };

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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

          {renderDescription()}

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
