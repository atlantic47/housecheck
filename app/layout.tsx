import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

// Load Serif Font for beautiful Dwello headers
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Load Sans Font for premium, clean UI interface text
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HouseCheck Kenya | Premium Pre-Purchase Home Inspections",
    template: "%s | HouseCheck Kenya",
  },
  description:
    "Expert home, apartment, and villa inspections in Kenya. We uncover structural, electrical, moisture, and plumbing issues to secure your property investment. Starting from KES 25,000.",
  keywords: [
    "home inspection Kenya",
    "apartment inspection Nairobi",
    "pre-purchase home inspection",
    "moisture detector check",
    "thermal imaging leak detection",
    "diaspora property buyers",
    "snag list handover Kenya",
  ],
  authors: [{ name: "HouseCheck Kenya" }],
  creator: "HouseCheck Kenya",
  metadataBase: new URL("https://housecheck.co.ke"),
  openGraph: {
    title: "HouseCheck Kenya | Premium Pre-Purchase Home Inspections",
    description:
      "Expert home, apartment, and villa inspections in Kenya. We uncover structural, electrical, moisture, and plumbing issues to secure your property investment.",
    url: "https://housecheck.co.ke",
    siteName: "HouseCheck Kenya",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HouseCheck Kenya | Premium Pre-Purchase Home Inspections",
    description:
      "Expert home, apartment, and villa inspections in Kenya. We uncover structural, electrical, moisture, and plumbing issues to secure your property investment.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-dark dark:bg-[#19120D] dark:text-[#F5EBE6]">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Dynamic Pages */}
        <main className="flex-grow flex flex-col">{children}</main>

        {/* Custom Footer */}
        <Footer />

        {/* Live WhatsApp Widget */}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
