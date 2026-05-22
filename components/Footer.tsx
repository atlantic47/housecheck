import React from "react";
import Link from "next/link";
import { ClipboardCheck, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-accent-light dark:bg-brand-dark/30 border-t border-brand-accent mt-auto pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Block */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full overflow-hidden bg-brand-dark flex items-center justify-center text-brand-bg">
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
          <p className="text-sm leading-relaxed text-brand-muted dark:text-brand-accent-light max-w-sm">
            Bringing absolute peace of mind to home buyers and investors in Kenya. We deliver premium, high-accuracy structural and safety inspections before you sign.
          </p>
          {/* Trust badges */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-dark dark:text-brand-bg bg-brand-bg dark:bg-brand-dark px-3 py-1.5 rounded-full border border-brand-accent">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>Certified Inspectors</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-dark dark:text-brand-bg bg-brand-bg dark:bg-brand-dark px-3 py-1.5 rounded-full border border-brand-accent">
              <Award className="w-3.5 h-3.5 text-brand-gold" />
              <span>100% Independent</span>
            </div>
          </div>
        </div>

        {/* Column 1: About */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif font-bold text-base text-brand-dark dark:text-brand-bg tracking-wide">About</h4>
          <ul className="flex flex-col gap-2 text-sm text-brand-muted dark:text-brand-accent-light">
            <li><Link href="/about" className="hover:text-brand-dark dark:hover:text-brand-bg">Our Story</Link></li>
            <li><Link href="/services" className="hover:text-brand-dark dark:hover:text-brand-bg">Our Scope</Link></li>
            <li><Link href="/team" className="hover:text-brand-dark dark:hover:text-brand-bg">Our Inspectors</Link></li>
            <li><Link href="/press" className="hover:text-brand-dark dark:hover:text-brand-bg">Newsroom</Link></li>
          </ul>
        </div>

        {/* Column 2: Support */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif font-bold text-base text-brand-dark dark:text-brand-bg tracking-wide">Support</h4>
          <ul className="flex flex-col gap-2 text-sm text-brand-muted dark:text-brand-accent-light">
            <li><Link href="/faqs" className="hover:text-brand-dark dark:hover:text-brand-bg">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-brand-dark dark:hover:text-brand-bg">Contact Us</Link></li>
            <li><Link href="/sample-report" className="hover:text-brand-dark dark:hover:text-brand-bg">Sample Report</Link></li>
            <li><Link href="/terms" className="hover:text-brand-dark dark:hover:text-brand-bg">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 3: Social & Offices */}
        <div className="flex flex-col gap-4">
          <h4 className="font-serif font-bold text-base text-brand-dark dark:text-brand-bg tracking-wide">Our Networks</h4>
          <ul className="flex flex-col gap-3 text-sm text-brand-muted dark:text-brand-accent-light">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-dark dark:hover:text-brand-bg group">
                <svg className="w-4 h-4 text-brand-gold fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-dark dark:hover:text-brand-bg group">
                <svg className="w-4 h-4 text-brand-gold fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-dark dark:hover:text-brand-bg group">
                <svg className="w-4 h-4 text-brand-gold fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                <span>Twitter (X)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Accent */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-6 border-t border-brand-accent flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-muted dark:text-brand-accent-light">
        <p>&copy; {currentYear} HouseCheck Kenya. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="hover:text-brand-dark dark:hover:text-brand-bg">Privacy Policy</Link>
          <Link href="/sitemap" className="hover:text-brand-dark dark:hover:text-brand-bg">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
