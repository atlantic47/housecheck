import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Inspection Pricing",
  description: "Transparent pre-purchase property inspection rates in Kenya. Choose from Apartment, Home, or Villa diagnostics with zero hidden fees. Packages start at KES 25,000.",
};

export default function PricingPage() {
  const tiers = [
    {
      name: "Apartment Inspection",
      price: "KES 25,000",
      desc: "Perfect for single apartments, flats, and penthouses in Nairobi and suburbs.",
      features: [
        "Internal plumbing & flow check",
        "Slab moisture diagnostics",
        "Electrical panel diagnostics",
        "Balcony & tiling slope check",
        "Window & seal safety scans",
        "Digital PDF report in 24 hours",
      ],
      cta: "Book Apartment Check",
    },
    {
      name: "Home Inspection",
      price: "KES 35,000",
      desc: "Comprehensive diagnostic inspection for standard 2-4 bedroom standalone homes.",
      features: [
        "All Apartment features included",
        "Foundation & load structural check",
        "Ceiling & roof structural check",
        "Rooftop drainage & gutter review",
        "Basic thermal imaging scan",
        "Digital snag list for negotiations",
        "Digital PDF report in 24-48 hours",
      ],
      cta: "Book Home Check",
      popular: true,
    },
    {
      name: "Villa / Townhouse",
      price: "KES 40,000",
      desc: "High-end diagnostic checks for large multi-story properties, townhouses, and luxury villas.",
      features: [
        "All Home features included",
        "Drone roofing scan (damp mapping)",
        "Advanced boundary wall review",
        "Swimming pool & septic checks",
        "Complete thermal hot-spot mapping",
        "Post-inspection virtual review call",
        "Digital PDF report in 48 hours",
      ],
      cta: "Book Villa Check",
    },
  ];

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "HouseCheck Kenya Property Inspections",
    "description": "Premium structural, moisture, plumbing, and electrical audits for residential properties in Kenya.",
    "brand": {
      "@type": "Brand",
      "name": "HouseCheck Kenya"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "KES",
      "lowPrice": "25000",
      "highPrice": "40000",
      "offerCount": "3",
      "offers": tiers.map((tier) => ({
        "@type": "Offer",
        "name": tier.name,
        "price": tier.price.replace("KES ", "").replace(",", ""),
        "priceCurrency": "KES",
        "url": "https://housecheck.co.ke/pricing"
      }))
    }
  };

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        
        {/* Title */}
        <div className="flex flex-col gap-4 max-w-xl animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
            Unbiased Rates
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
            Transparent Pricing Packages
          </h1>
          <p className="text-sm md:text-base text-brand-muted dark:text-brand-accent-light leading-relaxed">
            Our rates are fully transparent, based on property type, independent of transaction agents, and structured with zero hidden costs. Secure your future home today.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in-up [animation-delay:100ms] items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-brand-card dark:bg-[#231A14] rounded-3xl p-8 border flex flex-col justify-between h-full relative ${
                tier.popular
                  ? "border-brand-gold shadow-lg scale-102 z-10"
                  : "border-brand-accent/50 shadow-sm"
              }`}
            >
              {tier.popular && (
                <span className="absolute top-4 right-4 text-[9px] font-bold text-brand-bg bg-brand-gold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Most Requested
                </span>
              )}

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="font-serif text-xl font-bold text-brand-dark dark:text-brand-bg">
                    {tier.name}
                  </h2>
                  <span className="font-serif text-3xl font-extrabold text-brand-dark dark:text-brand-bg">
                    {tier.price}
                  </span>
                  <p className="text-[12px] leading-relaxed text-brand-muted dark:text-brand-accent-light">
                    {tier.desc}
                  </p>
                </div>

                {/* Features list */}
                <ul className="flex flex-col gap-3 border-t border-brand-accent/30 pt-6">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs text-brand-dark dark:text-brand-bg font-semibold">
                      <div className="w-5 h-5 rounded-full bg-brand-accent-light dark:bg-brand-dark flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-brand-gold" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <Link
                href={`/book?type=${encodeURIComponent(tier.name)}`}
                className={`w-full text-center py-3.5 rounded-full text-xs font-bold tracking-wide mt-8 shadow-sm ${
                  tier.popular
                    ? "bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark"
                    : "border border-brand-accent text-brand-dark hover:bg-brand-accent-light dark:text-brand-bg dark:border-brand-accent"
                }`}
              >
                {tier.cta}
              </Link>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
