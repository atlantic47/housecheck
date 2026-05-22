"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, FileCheck, HelpCircle, ShieldCheck, Thermometer } from "lucide-react";

import { InspectionService, servicesList } from "@/lib/servicesData";

export default function PopularServices() {
  // Homepage displays top 3 featured packages
  const featuredServices = servicesList.slice(0, 3);

  return (
    <section className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-12">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row items-end justify-between w-full gap-6 border-b border-brand-accent/30 pb-6">
          <div className="flex flex-col gap-3 max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Specialized Property Checks
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
              Our Popular Inspections
            </h2>
          </div>
          <Link
            href="/services"
            className="px-6 py-3 rounded-full border border-brand-accent text-brand-dark dark:text-brand-bg hover:bg-brand-accent-light text-sm font-semibold tracking-wide"
          >
            View All 9 Services
          </Link>
        </div>

        {/* Dwello-styled Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full animate-fade-in-up">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="bg-brand-card dark:bg-[#231A14] rounded-3xl overflow-hidden shadow-md border border-brand-accent/50 hover:shadow-lg transition-shadow group flex flex-col h-full"
            >
              {/* Image Block */}
              <div className="relative h-[220px] w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-brand-bg/90 dark:bg-brand-dark/90 px-3.5 py-1.5 rounded-full border border-brand-accent/50 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="text-[10px] font-bold text-brand-dark dark:text-brand-bg tracking-wide">
                    {service.location}
                  </span>
                </div>
              </div>

              {/* Body Block */}
              <div className="p-6 flex flex-col flex-grow gap-4 justify-between">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif font-bold text-xl text-brand-dark dark:text-brand-bg">
                    {service.title}
                  </h3>
                  {/* Specs / checked items */}
                  <ul className="flex flex-wrap gap-2 mt-1">
                    {service.specs.map((spec, sIdx) => (
                      <li
                        key={sIdx}
                        className="text-[10px] font-medium bg-brand-accent-light dark:bg-brand-dark/40 px-2 py-1 rounded-md text-brand-muted dark:text-brand-accent-light border border-brand-accent/20"
                      >
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer price tag + Book button */}
                <div className="flex items-center justify-between border-t border-brand-accent/40 pt-4 mt-2">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-brand-muted uppercase tracking-wider">
                      Starting Price
                    </span>
                    <span className="font-serif text-lg font-extrabold text-brand-dark dark:text-brand-bg">
                      {service.price}
                    </span>
                  </div>

                  <Link
                    href={`/book?type=${encodeURIComponent(service.title)}`}
                    className="px-5 py-2.5 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold tracking-wide"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
