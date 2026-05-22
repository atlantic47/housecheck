import React from "react";
import { MapPin, Navigation, Clock } from "lucide-react";

export default function GoogleMapsWidget() {
  // Safe iframe embed URL for Westlands, Nairobi
  const mapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.267676756858!2d36.80003055!3d-1.2635954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f97f7!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1716362541254!5m2!1sen!2ske";

  return (
    <div className="w-full bg-brand-card dark:bg-brand-dark rounded-3xl p-6 md:p-8 border border-brand-accent shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Details Card Column */}
      <div className="flex flex-col justify-between gap-6 lg:col-span-1">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-accent-light flex items-center justify-center">
            <MapPin className="w-5 h-5 text-brand-gold" />
          </div>
          <h3 className="font-serif font-bold text-2xl text-brand-dark dark:text-brand-bg">
            Head Office
          </h3>
          <p className="text-sm leading-relaxed text-brand-muted dark:text-brand-accent-light">
            HouseCheck Kenya HQ<br />
            5th Floor, Delta Corner Tower A<br />
            Waiyaki Way, Westlands<br />
            Nairobi, Kenya
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-brand-gold" />
            <span className="text-xs font-semibold text-brand-muted dark:text-brand-accent-light">
              Mon - Sat: 8:00 AM - 6:00 PM
            </span>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-brand-dark text-brand-bg hover:bg-brand-gold hover:text-brand-dark text-sm font-semibold tracking-wide"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>

      {/* Embedded Maps Column */}
      <div className="lg:col-span-2 w-full h-[280px] sm:h-[350px] rounded-2xl overflow-hidden border border-brand-accent-light relative">
        <iframe
          src={mapsEmbedUrl}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HouseCheck Nairobi Office Map"
        ></iframe>
      </div>
    </div>
  );
}
