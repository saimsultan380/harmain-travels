"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

const serviceImages: Record<string, string> = {
  "Damm Service": "/images/Damm.jpg",
  "Umrah and Hajj Badal": "/images/Umrah and Hajj Badal.jpg",
  "Quran Waqaf": "/images/Quran Waqaf.jpg",
  "Umrah Guide": "/images/Umrah guide.jpg",
  "Hotel Booking Makkah": "/images/Hotel Booking Makkah.jpg",
  "Hotel Booking Madinah": "/images/Hotel Booking Madinah.jpg",
  "Qurbani Services": "/images/Qurbani Services.jpg",
  "Food Package Distribution": "/images/Food Package Distribution.jpg",
};

function OtherServiceFlipCard({
  service,
  t,
}: {
  service: { title: string; desc: string; href: string };
  t: (key: string) => string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const image = serviceImages[service.title];

  const handleCardInteraction = () => {
    if (window.innerWidth < 768) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="h-[260px] group w-full cursor-pointer"
      style={{ perspective: "1100px" }}
      onClick={handleCardInteraction}
      onTouchStart={handleCardInteraction}
    >
      {/* Rotating wrapper */}
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-in-out ${
          isFlipped ? '[transform:rotateY(180deg)]' : 'md:group-hover:[transform:rotateY(180deg)]'
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl border-2 border-[var(--border-dark)] overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[var(--green)] rounded-b-full z-10" />

          {image ? (
            <>
              {/* Full background image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 rounded-2xl" />
                {/* Bottom gradient for text contrast */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-2xl" />
              </div>

              {/* Title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-left">
                <h3 className="text-[20px] md:text-[22px] font-heading font-extrabold leading-tight drop-shadow-2xl" style={{ color: '#ffffff' }}>
                  {service.title}
                </h3>
              </div>
            </>
          ) : (
            <>
              {/* Dark background fallback */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center justify-center gap-5 h-full px-6 text-center">
                <h3 className="text-[20px] md:text-[22px] font-heading font-extrabold leading-tight" style={{ color: '#ffffff' }}>
                  {service.title}
                </h3>
              </div>
            </>
          )}

          {/* Mobile tap indicator */}
          <div className="md:hidden absolute inset-0 border-2 border-transparent rounded-2xl animate-pulse opacity-30 pointer-events-none z-20"
            style={{ borderColor: 'var(--green)' }} />

          {/* Corner ornament */}
          <div className="absolute bottom-3 right-3 opacity-[0.15] z-10">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl border border-[var(--green)] bg-[var(--bg-card)] flex flex-col justify-between px-6 py-6 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[var(--gold)] rounded-b-full" />

          <div className="flex items-start gap-3">
            <h3 className="text-[14px] font-heading font-bold text-[var(--text-1)] leading-snug">
              {service.title}
            </h3>
          </div>

          <p className="text-[var(--text-2)] font-body text-[12.5px] leading-relaxed line-clamp-5 flex-1 mt-3">
            {service.desc}
          </p>

          <a
            href={service.href}
            className="mt-4 inline-flex items-center gap-1.5 self-start text-[var(--gold)] font-body font-semibold text-[12px] border border-[var(--gold)] px-3.5 py-1.5 rounded-lg hover:bg-[var(--gold-soft)] transition-colors"
          >
            {t("otherServices.cta")}
            <ArrowRight size={13} />
          </a>

          {/* Corner ornament */}
          <div className="absolute bottom-3 right-3 opacity-[0.06]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 2 L38 20 L20 38 L2 20 Z" stroke="var(--gold)" strokeWidth="1.5" fill="none" />
              <path d="M20 10 L30 20 L20 30 L10 20 Z" stroke="var(--gold)" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OtherServices() {
  const { t, tm } = useI18n();

  const services = tm("otherServices.items") as Array<{
    title: string;
    desc: string;
    href: string;
  }>;

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <AnimatedSection id="other-services" className="py-24 bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
            Other Services
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
            {t("otherServices.title")}
          </h2>
          <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto">
            {t("otherServices.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <OtherServiceFlipCard
              key={i}
              service={service}
              t={t}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
