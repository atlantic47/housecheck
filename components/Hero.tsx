"use client";

import React, { useState } from "react";
import Image from "next/image";
import useRouter from "next/navigation";
import { MapPin, Home, BedDouble, Search, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [propType, setPropType] = useState("Villa");
  const [bedrooms, setBedrooms] = useState("4");

  const propertyTypes = ["Home", "Apartment", "Villa", "Other"];
  const bedroomOptions = ["1", "2", "3", "4", "5+"];

  // Navigate to booking form pre-filled with search values
  const getBookingQuery = () => {
    return `/book?location=${encodeURIComponent(location)}&type=${encodeURIComponent(propType)}&bedrooms=${encodeURIComponent(bedrooms)}`;
  };

  return (
    <section className="relative w-full pt-8 pb-20 md:pb-28 overflow-hidden bg-brand-bg dark:bg-[#19120D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Copy Column */}
        <div className="lg:col-span-6 flex flex-col gap-6 md:pr-4 animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-accent-light dark:bg-brand-dark px-3 py-1.5 rounded-full w-fit border border-brand-accent/50">
            Kenya's Premier Pre-Purchase Inspectors
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark dark:text-brand-bg leading-[1.1]">
            Find Absolute <br />
            <span className="text-brand-gold italic">Peace of Mind</span> <br />
            in Your Dream Home
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-brand-muted dark:text-brand-accent-light max-w-xl">
            Explore and inspect your chosen Kenyan properties before you buy. We uncover structural deficiencies, hidden moisture leaks, and roofing snags to protect your investment.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-sm font-bold tracking-wide shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Book Inspection</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/sample-report"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-brand-accent hover:border-brand-dark text-brand-dark dark:text-brand-bg dark:border-brand-accent hover:bg-brand-accent-light/50 text-sm font-bold tracking-wide flex items-center justify-center"
            >
              View Sample Report
            </Link>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-6 w-full relative h-[380px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-brand-accent">
          <Image
            src="/hero-villa.png"
            alt="Modern luxury villa in Nairobi Kenya, pre-purchase home inspection visual"
            fill
            priority
            className="object-cover hover:scale-102 transition-transform duration-700"
            sizes="(max-w-1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Floating Interactive Inspection Search Widget */}
      <div className="max-w-5xl mx-auto px-6 mt-12 md:mt-[-40px] relative z-10 animate-fade-in-up [animation-delay:150ms]">
        <div className="bg-brand-card dark:bg-[#231A14] rounded-2xl md:rounded-full p-6 md:p-4 shadow-xl border border-brand-accent/70 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5">
          
          {/* Location field */}
          <div className="flex-1 flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-brand-accent/50 pb-4 md:pb-0">
            <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
            <div className="flex flex-col w-full">
              <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                Property Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Westlands, Runda, Kilimani"
                className="text-sm bg-transparent outline-none font-semibold text-brand-dark dark:text-brand-bg placeholder:text-brand-muted/70 placeholder:font-normal py-0.5"
              />
            </div>
          </div>

          {/* Property Type Selector */}
          <div className="flex-1 flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-brand-accent/50 pb-4 md:pb-0">
            <Home className="w-5 h-5 text-brand-gold shrink-0" />
            <div className="flex flex-col w-full">
              <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                Property Type
              </label>
              <select
                value={propType}
                onChange={(e) => setPropType(e.target.value)}
                className="text-sm bg-transparent outline-none font-semibold text-brand-dark dark:text-brand-bg py-0.5 cursor-pointer"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type} className="dark:bg-brand-dark">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bedrooms Selector */}
          <div className="flex-1 flex items-center gap-3 px-4 pb-2 md:pb-0">
            <BedDouble className="w-5 h-5 text-brand-gold shrink-0" />
            <div className="flex flex-col w-full">
              <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                Bedrooms Count
              </label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="text-sm bg-transparent outline-none font-semibold text-brand-dark dark:text-brand-bg py-0.5 cursor-pointer"
              >
                {bedroomOptions.map((opt) => (
                  <option key={opt} value={opt} className="dark:bg-brand-dark">
                    {opt} Bedroom{opt !== "1" && "s"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search/CTA button */}
          <Link
            href={getBookingQuery()}
            className="md:w-auto px-8 py-4 md:py-4.5 rounded-xl md:rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-sm font-bold tracking-wider shadow-sm flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Book Now</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
