"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Sparkles, Thermometer, ShieldAlert } from "lucide-react";

export default function BeforeAfterGallery() {
  const [viewMode, setViewMode] = useState<"normal" | "thermal">("normal");

  return (
    <section className="w-full py-16 md:py-24 bg-brand-card dark:bg-[#231A14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Interactive Screen Mockup */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-brand-gold" />
            <span className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-bg">
              Interactive Tech Demonstration
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark dark:text-brand-bg leading-tight">
            See the Unseen with Advanced Thermal Imaging
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-brand-muted dark:text-brand-accent-light">
            A wall might look freshly painted and dry to the naked eye. However, our high-resolution thermal diagnostics reveal hidden moisture, slab dampness, and leaking pipes tucked inside the drywall or concrete before it becomes a hazardous mold infestation.
          </p>

          {/* Toggle controls */}
          <div className="flex items-center gap-3 mt-2 bg-brand-accent-light dark:bg-brand-dark/80 p-1.5 rounded-full w-fit border border-brand-accent/50">
            <button
              onClick={() => setViewMode("normal")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${viewMode === "normal"
                  ? "bg-brand-dark text-brand-bg shadow-sm"
                  : "text-brand-muted hover:text-brand-dark dark:text-brand-accent-light dark:hover:text-brand-bg"
                }`}
            >
              <Eye className="w-4 h-4" />
              <span>Naked Eye (Visual)</span>
            </button>
            <button
              onClick={() => setViewMode("thermal")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${viewMode === "thermal"
                  ? "bg-brand-dark text-brand-bg shadow-sm"
                  : "text-brand-muted hover:text-brand-dark dark:text-brand-accent-light dark:hover:text-brand-bg"
                }`}
            >
              <Thermometer className="w-4 h-4 text-brand-gold animate-pulse-slow" />
              <span>Infrared Thermal Scanner</span>
            </button>
          </div>
        </div>

        {/* Right Column: Screen Frame Visualizer */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-brand-bg dark:bg-brand-dark rounded-3xl p-4 border border-brand-accent shadow-lg flex flex-col gap-4 relative overflow-hidden">

            {/* Screen Viewframe */}
            <div className="w-full h-[280px] rounded-2xl relative overflow-hidden bg-[#D8CDBC] border border-brand-accent-light flex items-center justify-center transition-all duration-500">

              {/* Outer wall outline */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end gap-2 bg-[#E3D5CA] dark:bg-[#32251D]">
                {/* Simulated wall boards & skirting */}
                <div className="w-full h-8 border-t-2 border-brand-accent/30 absolute bottom-0 left-0 bg-brand-accent-light dark:bg-brand-dark/20" />
                <div className="w-[2px] h-full absolute left-1/3 top-0 bg-brand-accent/20" />
                <div className="w-[2px] h-full absolute left-2/3 top-0 bg-brand-accent/20" />
              </div>

              {/* Normal dry room overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center p-6 transition-all duration-500 ${viewMode === "normal"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                  }`}
              >
                <div className="text-center flex flex-col items-center gap-2 max-w-xs">
                  <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center shadow-sm">
                    <Eye className="w-5 h-5 text-brand-muted" />
                  </div>
                  <span className="text-xs font-bold text-brand-dark dark:text-brand-bg tracking-wide">
                    Wall Looks Flawless
                  </span>
                  <p className="text-[10px] text-brand-muted dark:text-brand-accent-light leading-relaxed">
                    Freshly painted drywall. Dry to the touch, showing zero signs of leaks or surface damage.
                  </p>
                </div>
              </div>

              {/* Thermal imaging heat overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-[#12005e] via-[#4a148c] to-[#000000] flex items-center justify-center p-6 transition-all duration-500 ${viewMode === "thermal"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                  }`}
              >
                {/* Glowing Heat Moisture Spills */}
                <div className="absolute top-8 left-12 w-32 h-32 rounded-full bg-gradient-to-r from-[#00bcd4] via-[#0288d1] to-[#3f51b5] blur-xl opacity-90 animate-pulse-slow" />
                <div className="absolute top-14 left-24 w-20 h-40 rounded-full bg-[#00bcd4] blur-lg opacity-70" />

                <div className="text-center flex flex-col items-center gap-2 max-w-xs relative z-10 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-sm border border-white/20">
                    <ShieldAlert className="w-5 h-5 text-[#00bcd4]" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide uppercase">
                    Active Moisture Alert
                  </span>
                  <p className="text-[10px] text-zinc-200 leading-relaxed">
                    A massive pipe joint leak was detected beneath the plaster. High humidity levels (89%) and wood rot risk identified.
                  </p>
                </div>
              </div>

            </div>

            {/* Diagnostic readout summary */}
            <div className="flex justify-between items-center text-[10px] font-semibold text-brand-muted dark:text-brand-accent-light px-1">
              <span>SCANNER MODEL: HC-FLIR 300</span>
              <span className={`transition-colors duration-300 ${viewMode === "thermal" ? "text-cyan-500" : ""}`}>
                {viewMode === "normal" ? "VISUAL MODE" : "INFRARED MODE ACTIVE"}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
