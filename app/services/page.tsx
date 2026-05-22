import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Compass, CheckCircle2 } from "lucide-react";
import { servicesList } from "@/lib/servicesData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Inspection Services",
  description: "Comprehensive home diagnostic services in Kenya. We offer 9 specialized inspections including home, villa, apartment, mold, pest, and roof audits. Starting from KES 25,000.",
};

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "HouseCheck Kenya Property Inspection Services",
    "description": "Comprehensive list of our 9 specialized inspection services for residential and commercial properties in Kenya.",
    "itemListElement": servicesList.map((service, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": `Comprehensive physical pre-purchase diagnostics and structural reviews for ${service.title.toLowerCase()}s in Kenya.`,
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "HouseCheck Kenya",
          "telephone": "+254710907628"
        },
        "offers": {
          "@type": "Offer",
          "price": "25000",
          "priceCurrency": "KES",
          "url": `https://housecheck.co.ke/services/${service.slug}`
        }
      }
    }))
  };

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        
        {/* Title */}
        <div className="flex flex-col gap-4 max-w-xl animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
            Diagnostic Solutions
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
            Our 9 Specialized Inspections
          </h1>
          <p className="text-sm md:text-base text-brand-muted dark:text-brand-accent-light leading-relaxed">
            No matter the property type—whether you are looking at standalone villas, luxury penthouses, or new handovers—we have a custom checklist and dedicated testing equipment tailored for it.
          </p>
        </div>

        {/* 3x3 Grid of all 9 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full animate-fade-in-up [animation-delay:100ms]">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-brand-card dark:bg-[#231A14] rounded-3xl p-6 md:p-8 border border-brand-accent shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-all group"
            >
              <div className="flex flex-col gap-5">
                {/* Header branding */}
                <div className="flex items-center justify-between border-b border-brand-accent/30 pb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent-light dark:bg-brand-dark flex items-center justify-center text-brand-gold shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                    {service.location}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h2 className="font-serif text-xl font-bold text-brand-dark dark:text-brand-bg group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-[13px] leading-relaxed text-brand-muted dark:text-brand-accent-light">
                    Highly detailed, comprehensive pre-purchase physical audits matching all local building regulations and compliance codes in Kenya.
                  </p>

                  {/* Checklist bullets */}
                  <ul className="flex flex-col gap-2 mt-2">
                    {service.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-xs text-brand-dark dark:text-brand-bg">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price footer and book details */}
              <div className="flex items-center justify-between border-t border-brand-accent/30 pt-6 mt-6">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-brand-muted uppercase tracking-wider">
                    Inspection Price
                  </span>
                  <span className="font-serif text-base font-extrabold text-brand-dark dark:text-brand-bg">
                    {service.price}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-4 py-2 rounded-full border border-brand-accent text-brand-dark dark:text-brand-bg hover:bg-brand-accent-light text-[11px] font-bold"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/book?type=${encodeURIComponent(service.title)}`}
                    className="px-4 py-2 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-[11px] font-bold"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
