import React from "react";
import { UserCheck, FileText, Cpu, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Trusted Expertise",
      desc: "Our certified Kenyan property inspectors possess years of structural engineering and safety experience.",
      icon: <UserCheck className="w-6 h-6 text-brand-dark" />,
    },
    {
      title: "Comprehensive Reports",
      desc: "Receive clear, high-resolution digital reports with photos and findings delivered in 24-48 hours.",
      icon: <FileText className="w-6 h-6 text-brand-dark" />,
    },
    {
      title: "Advanced Technology",
      desc: "We leverage advanced thermal cameras, high-precision moisture sensors, and drone roofing mapping.",
      icon: <Cpu className="w-6 h-6 text-brand-dark" />,
    },
    {
      title: "Exceptional Support",
      desc: "We prioritize local buyers and diaspora investors with post-inspection walkthrough calls and negotiations.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-dark" />,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-brand-bg dark:bg-[#19120D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-12">
        
        {/* Title */}
        <div className="flex flex-col gap-4 max-w-xl animate-fade-in-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-brand-dark dark:text-brand-bg leading-tight">
            Why Choose Us
          </h2>
          <p className="text-sm md:text-base text-brand-muted dark:text-brand-accent-light leading-relaxed">
            Providing absolute peace of mind with seasoned expertise, independent evaluations, and cutting-edge testing devices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full animate-fade-in-up [animation-delay:100ms]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-brand-accent-light dark:bg-brand-dark/50 rounded-2xl p-6 flex flex-col items-start text-left gap-4 border border-brand-accent/30 hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center shrink-0 shadow-sm">
                {card.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif font-bold text-lg text-brand-dark dark:text-brand-bg">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-brand-muted dark:text-brand-accent-light">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
