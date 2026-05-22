import React, { Suspense } from "react";
import BookingFormClient from "./BookingFormClient";

interface PageProps {
  searchParams: Promise<{
    location?: string;
    type?: string;
    bedrooms?: string;
  }>;
}

export default async function BookingPage({ searchParams }: PageProps) {
  // Gracefully resolve the search query parameters asynchronously in Next.js 16
  const resolvedSearchParams = await searchParams;

  return (
    <Suspense
      fallback={
        <div className="w-full py-32 text-center text-xs font-bold text-brand-muted uppercase tracking-wider animate-pulse-slow">
          Loading Booking Form...
        </div>
      }
    >
      <BookingFormClient
        initialLocation={resolvedSearchParams.location || ""}
        initialType={resolvedSearchParams.type || "Villa"}
        initialBedrooms={resolvedSearchParams.bedrooms || "4"}
      />
    </Suspense>
  );
}
