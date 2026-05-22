"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ClipboardCheck, ShieldCheck, Mail, Calendar, User, Phone, MapPin, Loader2, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

// 1. Zod schema for validated inputs
const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(8, "Phone number must be at least 8 digits"),
  propertyLocation: z.string().min(2, "Property location is required"),
  propertyType: z.enum(["Home", "Apartment", "Villa", "Other"]),
  bedrooms: z.number().min(0, "Invalid bedroom count"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormClientProps {
  initialLocation: string;
  initialType: string;
  initialBedrooms: string;
}

export default function BookingFormClient({
  initialLocation,
  initialType,
  initialBedrooms,
}: BookingFormClientProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Map incoming pre-filled query values safely
  const defaultPropertyType = ["Home", "Apartment", "Villa", "Other"].includes(initialType)
    ? (initialType as "Home" | "Apartment" | "Villa" | "Other")
    : "Villa";

  const defaultBedrooms = isNaN(Number(initialBedrooms)) ? 4 : Number(initialBedrooms);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      propertyLocation: initialLocation,
      propertyType: defaultPropertyType,
      bedrooms: defaultBedrooms,
      preferredDate: "",
      notes: "",
    },
  });

  // Handle multi-step navigation validations
  const nextStep = async () => {
    const isStep1Valid = await trigger(["fullName", "email", "phoneNumber"]);
    if (isStep1Valid) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  // Submit and save to Supabase
  const onSubmit = async (data: BookingFormValues) => {
    setIsLoading(true);
    setErrorMsg("");

    try {
      // Map form keys exactly to Supabase SQL schema fields
      const { error } = await supabase.from("bookings").insert([
        {
          full_name: data.fullName,
          phone_number: data.phoneNumber,
          email: data.email,
          property_location: data.propertyLocation,
          property_type: data.propertyType,
          bedrooms: data.bedrooms,
          preferred_date: data.preferredDate,
          notes: data.notes,
          status: "pending",
        },
      ]);

      if (error) {
        throw new Error(error.message);
      }

      // Success
      setIsSuccess(true);
      
      // Send notification email placeholder
      console.log("📨 [Notification Placeholder] Booking notification email sent successfully to audits@housecheck.co.ke");

    } catch (err: any) {
      console.error("Booking submission error:", err);
      setErrorMsg(err.message || "Failed to submit booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D] flex items-center justify-center">
      <div className="w-full max-w-xl px-6">
        
        {/* Success Splash Screen */}
        {isSuccess ? (
          <div className="bg-brand-card dark:bg-[#231A14] rounded-3xl p-8 md:p-12 border border-brand-accent shadow-lg text-center flex flex-col items-center gap-5 animate-fade-in-up">
            <div className="w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark">
              <Check className="w-7 h-7" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-brand-dark dark:text-brand-bg">
              Inspection Booking Received!
            </h1>
            <p className="text-sm leading-relaxed text-brand-muted dark:text-brand-accent-light max-w-sm">
              Your property pre-purchase booking has been recorded successfully. Our head inspector will call you on your provided phone number within 2 hours to confirm timing, pricing details (starting KES 25,000), and access parameters.
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                href="/"
                className="px-6 py-3 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold shadow-sm"
              >
                Back to Homepage
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 rounded-full border border-brand-accent hover:border-brand-dark text-brand-dark dark:text-brand-bg hover:bg-brand-accent-light text-xs font-bold"
              >
                Inspect Other Services
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-brand-card dark:bg-[#231A14] rounded-3xl p-8 border border-brand-accent/50 shadow-md flex flex-col gap-6 animate-fade-in-up">
            
            {/* Header info */}
            <div className="flex flex-col gap-2 border-b border-brand-accent/30 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Pre-Purchase Diagnostics
                </span>
                <span className="text-[10px] font-bold text-brand-muted bg-brand-accent-light dark:bg-brand-dark px-2.5 py-0.5 rounded-full">
                  Step {step} of 2
                </span>
              </div>
              <h1 className="font-serif text-2xl font-bold text-brand-dark dark:text-brand-bg">
                Book Property Inspection
              </h1>
            </div>

            {/* Error display */}
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold leading-relaxed">
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Form element */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              
              {/* STEP 1: CONTACT DETAILS */}
              {step === 1 && (
                <div className="flex flex-col gap-4 animate-fade-in-up">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="e.g. Jane Mwangi"
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg placeholder:text-brand-muted/70"
                    />
                    {errors.fullName && (
                      <span className="text-[10px] text-red-500 font-semibold">{errors.fullName.message}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="e.g. jane@example.com"
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg placeholder:text-brand-muted/70"
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-semibold">{errors.email.message}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      {...register("phoneNumber")}
                      placeholder="e.g. +254 712 345 678"
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg placeholder:text-brand-muted/70"
                    />
                    {errors.phoneNumber && (
                      <span className="text-[10px] text-red-500 font-semibold">{errors.phoneNumber.message}</span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full py-4 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold tracking-wide shadow-md mt-4"
                  >
                    Continue to Property Details
                  </button>
                </div>
              )}

              {/* STEP 2: PROPERTY DETAILS */}
              {step === 2 && (
                <div className="flex flex-col gap-4 animate-fade-in-up">
                  
                  {/* Property Location */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Property Location</span>
                    </label>
                    <input
                      type="text"
                      {...register("propertyLocation")}
                      placeholder="e.g. Westlands, Nairobi / Nyali, Mombasa"
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg placeholder:text-brand-muted/70"
                    />
                    {errors.propertyLocation && (
                      <span className="text-[10px] text-red-500 font-semibold">{errors.propertyLocation.message}</span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Property Type */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                        Property Type
                      </label>
                      <select
                        {...register("propertyType")}
                        className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg cursor-pointer"
                      >
                        <option value="Villa">Villa / Townhouse</option>
                        <option value="Home">Home (Standalone)</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.propertyType && (
                        <span className="text-[10px] text-red-500 font-semibold">{errors.propertyType.message}</span>
                      )}
                    </div>

                    {/* Bedrooms */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                        Bedrooms
                      </label>
                      <input
                        type="number"
                        {...register("bedrooms", { valueAsNumber: true })}
                        placeholder="4"
                        className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg"
                      />
                      {errors.bedrooms && (
                        <span className="text-[10px] text-red-500 font-semibold">{errors.bedrooms.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Preferred Inspection Date</span>
                    </label>
                    <input
                      type="date"
                      {...register("preferredDate")}
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg cursor-pointer"
                    />
                    {errors.preferredDate && (
                      <span className="text-[10px] text-red-500 font-semibold">{errors.preferredDate.message}</span>
                    )}
                  </div>

                  {/* Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                      Special Notes / Concerns
                    </label>
                    <textarea
                      rows={3}
                      {...register("notes")}
                      placeholder="e.g. Concerns about rooftop leaking, balcony dampness, or structural settlement..."
                      className="w-full bg-brand-bg dark:bg-brand-dark px-4 py-3 rounded-xl border border-brand-accent/60 outline-none text-xs font-semibold text-brand-dark dark:text-brand-bg resize-none leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 mt-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-accent hover:border-brand-dark text-brand-dark dark:text-brand-bg hover:bg-brand-accent-light/50 text-xs font-bold shrink-0"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Confirm & Submit Booking</span>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
