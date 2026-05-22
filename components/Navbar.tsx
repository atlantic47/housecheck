"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Compass, ClipboardCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection for changing visual background weight
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Sample Report", href: "/sample-report" },
    { name: "FAQs", href: "/faqs" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-bg/90 dark:bg-[#19120D]/90 backdrop-blur-md shadow-sm border-b border-brand-accent-light dark:border-brand-dark/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-brand-dark flex items-center justify-center text-brand-bg group-hover:scale-105 transition-transform">
            <img
              src="/icon.png"
              alt="HouseCheck Kenya Icon"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
            House<span className="text-brand-gold font-sans font-medium text-xl">Check</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] font-medium tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? "text-brand-dark font-semibold dark:text-brand-bg"
                    : "text-brand-muted hover:text-brand-dark dark:text-brand-accent-light dark:hover:text-brand-bg"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Quick Call */}
          <a
            href="tel:+254710907628"
            className="flex items-center gap-2 text-brand-muted hover:text-brand-dark dark:text-brand-accent-light dark:hover:text-brand-bg transition-colors"
            title="Call Support"
          >
            <div className="p-2 rounded-full hover:bg-brand-accent-light dark:hover:bg-brand-dark">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold tracking-wide">+254 710 907 628</span>
          </a>

          {/* Book Inspection CTA */}
          <Link
            href="/book"
            className="px-6 py-2.5 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-sm font-semibold tracking-wide shadow-sm"
          >
            Book Inspection
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full text-brand-dark dark:text-brand-bg hover:bg-brand-accent-light dark:hover:bg-brand-dark focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] bg-brand-bg/95 dark:bg-[#19120D]/95 backdrop-blur-md z-40 lg:hidden flex flex-col p-6 animate-fade-in-up">
          <nav className="flex flex-col gap-5 py-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-serif font-medium border-b border-brand-accent-light dark:border-brand-dark/50 pb-2 ${
                    isActive
                      ? "text-brand-dark font-bold dark:text-brand-bg"
                      : "text-brand-muted dark:text-brand-accent-light"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 mt-auto pb-10">
            <a
              href="tel:+254710907628"
              className="flex items-center justify-center gap-3 p-3 rounded-xl border border-brand-accent dark:border-brand-muted text-brand-dark dark:text-brand-bg text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call Support: +254 710 907 628
            </a>

            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="w-full text-center p-4 rounded-xl bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-sm font-bold tracking-wide"
            >
              Book Inspection (KES 25,000+)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
