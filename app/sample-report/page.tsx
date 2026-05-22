import React from "react";
import { FileText, Download, ShieldCheck, AlertCircle, Sparkles, Thermometer, Zap } from "lucide-react";

export default function SampleReportPage() {
  const defectCases = [
    {
      title: "Moisture Intrusion & Dampness",
      status: "High Severity Snag",
      location: "Balcony Wall & Ceiling, 3rd Floor Flat",
      finding: "Slab dampness saturation measured at 84% using an pinless moisture sensor. Visual inspection showed paint peeling, while thermal imaging confirmed cold moisture ingress from the balcony above due to faulty waterproof membranes.",
      remedy: "Strip external tiles on the upper balcony, install high-density polyurethane waterproofing membrane, and repaint affected interior surface.",
      icon: <Thermometer className="w-5 h-5 text-red-500" />,
      severityColor: "text-red-500 bg-red-500/10 border-red-500/20",
    },
    {
      title: "Electrical Breaker Overload",
      status: "Medium Severity Snag",
      location: "Main Distribution Board, Kitchen Circuit",
      finding: "Infrared thermal scan of the main breaker panel showed circuit breaker #4 running at 82°C (hotspot). This indicates load overload on socket sockets, posing a moderate fire safety risk.",
      remedy: "Balance household socket loads, check connection tightness at termination point, and replace the worn breaker switches.",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      severityColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      title: "Boundary Wall Settlement",
      status: "Low Severity Snag",
      location: "North-West Compound Boundary Wall",
      finding: "A vertical hairline cracking (1.2mm width) was observed along the brick joints. No bowing or structural wall tilt detected. Crack is due to standard soft-soil settlement.",
      remedy: "Monitor crack width over 6 months using tell-tale gauges. Patch with epoxy mortar sealant if stable.",
      icon: <AlertCircle className="w-5 h-5 text-blue-500" />,
      severityColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-brand-accent/30 pb-8 animate-fade-in-up">
          <div className="flex flex-col gap-3 max-w-lg text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Digital Diagnostic Deliverables
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark dark:text-brand-bg">
              Sample Inspection Report
            </h1>
            <p className="text-xs md:text-sm text-brand-muted dark:text-brand-accent-light leading-relaxed">
              Below is an interactive sample of our official diagnostic reports, detailing how snags are classified, documented, and given remediation instructions.
            </p>
          </div>
          <a
            href="/sample-report.pdf"
            download
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-xs font-bold tracking-wide shadow-md shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Sample PDF</span>
          </a>
        </div>

        {/* Digital Report Frame */}
        <div className="bg-brand-card dark:bg-[#231A14] rounded-3xl p-6 md:p-10 border border-brand-accent/50 shadow-md flex flex-col gap-8 animate-fade-in-up [animation-delay:100ms]">
          {/* Report Cover Mock Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-brand-accent/30 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-brand-bg">
                <FileText className="w-5 h-5 text-brand-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-brand-dark dark:text-brand-bg">
                  HouseCheck Kenya Report
                </span>
                <span className="text-[10px] text-brand-muted dark:text-brand-accent-light uppercase font-semibold">
                  Report ID: #HC-2026-9812
                </span>
              </div>
            </div>
            <div className="text-left sm:text-right flex flex-col gap-0.5">
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                Inspection Target
              </span>
              <span className="text-xs font-bold text-brand-dark dark:text-brand-bg">
                12 Runda Drive, Nairobi
              </span>
            </div>
          </div>

          {/* Defect Cards List */}
          <div className="flex flex-col gap-6">
            <h3 className="font-serif font-bold text-xl text-brand-dark dark:text-brand-bg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-gold" />
              <span>Inspection Findings Snippets</span>
            </h3>

            <div className="flex flex-col gap-6">
              {defectCases.map((dCase, idx) => (
                <div
                  key={idx}
                  className="bg-brand-bg dark:bg-brand-dark/50 rounded-2xl p-6 border border-brand-accent/40 flex flex-col gap-4 relative overflow-hidden"
                >
                  {/* Status Badge */}
                  <span className={`absolute top-4 right-4 text-[9px] font-bold border px-3 py-1 rounded-full uppercase tracking-wider ${dCase.severityColor}`}>
                    {dCase.status}
                  </span>

                  <div className="flex items-center gap-3 pr-28">
                    <div className="w-8 h-8 rounded-full bg-brand-accent-light dark:bg-brand-dark flex items-center justify-center shrink-0">
                      {dCase.icon}
                    </div>
                    <h4 className="font-serif font-bold text-base text-brand-dark dark:text-brand-bg">
                      {dCase.title}
                    </h4>
                  </div>

                  <div className="flex flex-col gap-3 mt-1 border-t border-brand-accent/20 pt-4 text-xs">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-brand-muted uppercase tracking-wider text-[9px]">
                        Exact Location
                      </span>
                      <span className="font-semibold text-brand-dark dark:text-brand-bg">
                        {dCase.location}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-brand-muted uppercase tracking-wider text-[9px]">
                        Inspector's Finding
                      </span>
                      <p className="leading-relaxed text-brand-muted dark:text-brand-accent-light">
                        {dCase.finding}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 bg-brand-accent-light/50 dark:bg-brand-dark p-3.5 rounded-xl border border-brand-accent/20">
                      <span className="font-bold text-brand-gold uppercase tracking-wider text-[9px]">
                        Remedial Recommendation
                      </span>
                      <p className="leading-relaxed text-brand-dark dark:text-brand-bg font-medium">
                        {dCase.remedy}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
