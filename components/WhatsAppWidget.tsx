"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Directs to Kenya support contact number
  const whatsappUrl = "https://wa.me/254710907628?text=Hello%20HouseCheck%20Kenya%2C%20I%20would%20like%20to%20inquire%20about%20a%20property%20inspection.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Interactive Welcoming Tooltip */}
      {showTooltip && (
        <div className="bg-brand-card dark:bg-brand-dark p-3.5 rounded-2xl shadow-lg border border-brand-accent max-w-xs animate-fade-in-up flex items-start gap-2.5 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-brand-muted hover:text-brand-dark p-0.5 rounded-full hover:bg-brand-accent-light"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex flex-col gap-1 pr-4">
            <span className="text-xs font-bold text-brand-dark dark:text-brand-bg uppercase tracking-wider">
              Live Chat
            </span>
            <p className="text-[12px] leading-relaxed text-brand-muted dark:text-brand-accent-light">
              Questions? Chat directly with an inspector now.
            </p>
          </div>
        </div>
      )}

      {/* Floating Button with Pulse Ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 hover:rotate-3 transition-all relative group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none -z-10" />
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
