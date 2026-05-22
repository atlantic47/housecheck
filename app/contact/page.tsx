"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, ClipboardCheck } from "lucide-react";
import GoogleMapsWidget from "@/components/GoogleMapsWidget";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Inspection Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Inspection Inquiry",
        message: "",
      });
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HouseCheck Kenya Westlands HQ Office",
    "url": "https://housecheck.co.ke/contact",
    "telephone": "+254710907628",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5th Floor, Delta Corner Tower A, Westlands",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "image": "https://housecheck.co.ke/hero-villa.png",
    "priceRange": "$$"
  };

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Title */}
        <div className="flex flex-col gap-4 max-w-xl animate-fade-in-up">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
            Support channels
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
            Get Help From Us
          </h1>
          <p className="text-sm md:text-base text-brand-muted dark:text-brand-accent-light leading-relaxed">
            Have questions about an upcoming pre-purchase inspection or custom quote? Reach out to our Westlands office via form submission or phone call.
          </p>
        </div>

        {/* Form and info split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start animate-fade-in-up [animation-delay:100ms]">
          
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-8 bg-brand-card dark:bg-[#231A14] rounded-3xl p-8 border border-brand-accent/50 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-brand-dark dark:text-brand-bg">
              Westlands Office
            </h2>
            <p className="text-xs leading-relaxed text-brand-muted dark:text-brand-accent-light">
              Feel free to visit our corporate head office in Nairobi for custom inspection consultations or contract Snag and Handover agreements.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-brand-accent-light dark:bg-brand-dark flex items-center justify-center text-brand-gold shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                    Inquiry Helpline
                  </span>
                  <a href="tel:+254710907628" className="text-sm font-bold text-brand-dark dark:text-brand-bg hover:underline">
                    +254 710 907 628
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-brand-accent-light dark:bg-brand-dark flex items-center justify-center text-brand-gold shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                    Official Support Email
                  </span>
                  <a href="mailto:inspections@housecheck.co.ke" className="text-sm font-bold text-brand-dark dark:text-brand-bg hover:underline">
                    inspections@housecheck.co.ke
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-brand-accent-light dark:bg-brand-dark flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                    Office Headquarters
                  </span>
                  <span className="text-xs font-semibold leading-relaxed text-brand-dark dark:text-brand-bg">
                    5th Floor, Delta Corner Tower A, Westlands, Nairobi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: General Inquiry Form */}
          <div className="lg:col-span-7 bg-brand-card dark:bg-[#231A14] rounded-3xl p-8 border border-brand-accent/50 shadow-sm">
            {submitted ? (
              <div className="w-full py-16 flex flex-col items-center justify-center text-center gap-4 animate-fade-in-up">
                <div className="w-14 h-14 rounded-full bg-brand-accent-light dark:bg-brand-dark flex items-center justify-center text-brand-gold">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-dark dark:text-brand-bg">
                  Inquiry Submitted Successfully!
                </h3>
                <p className="text-xs text-brand-muted dark:text-brand-accent-light max-w-sm">
                  Thank you for reaching out to HouseCheck Kenya. Our corporate helpdesk will review your message and call you back shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold shadow-sm mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +254 710 907 628"
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3.5 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg cursor-pointer"
                    >
                      <option value="Inspection Inquiry">Pre-Purchase Booking Inquiry</option>
                      <option value="Snag List Handover">Snag & Handover Quote</option>
                      <option value="Commercial Quote">Commercial / Custom Audits</option>
                      <option value="Other">Other Questions</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your property details, preferred timeframe, and any specific leak or structural concerns..."
                    className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg leading-relaxed resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold tracking-wide shadow-md mt-2"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Head Office Location Map Section */}
        <div className="w-full animate-fade-in-up [animation-delay:150ms]">
          <GoogleMapsWidget />
        </div>

      </div>
    </div>
  );
}
