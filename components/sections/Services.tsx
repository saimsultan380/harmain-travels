"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

function FlipCard({
  service,
  index,
  t,
  tm,
}: {
  service: (typeof services)[number] & { image?: string };
  index: number;
  t: (key: string) => string;
  tm: <T>(key: string, fallback: T) => T;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardInteraction = () => {
    // On mobile, toggle the flip state on tap
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
        className={`relative w-full h-full transition-transform duration-500 ease-in-out ${isFlipped ? '[transform:rotateY(180deg)]' : 'md:group-hover:[transform:rotateY(180deg)]'
          }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── FRONT ── icon + title only */}
        <div
          className="absolute inset-0 rounded-2xl border-2 border-[var(--border-dark)] bg-[var(--bg-card)] flex flex-col items-center justify-center gap-5 px-6 text-center overflow-hidden transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[var(--green)] rounded-b-full z-10" />

          {/* Background Image or Icon */}
          {service.image ? (
            <>
              {/* Full background image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={service.image}
                  alt={tm<string>(`services.items.${index}.title`, service.title)}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/30 rounded-2xl" />
                {/* Additional gradient overlay for better text contrast */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-2xl" />
              </div>

              {/* Content overlay - positioned at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-left">
                {/* Title - Force white color in all themes */}
                <h3 className="text-[20px] md:text-[22px] font-heading font-extrabold leading-tight drop-shadow-2xl shadow-black/80" style={{ color: '#ffffff' }}>
                  {tm<string>(`services.items.${index}.title`, service.title)}
                </h3>
              </div>
            </>
          ) : (
            <>
              {/* Dark background for non-image cards to make white text visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl" />

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-5 h-full">
                {/* Icon */}
                <div className="flex items-center justify-center shrink-0">
                  <service.icon size={32} className="text-[var(--green)]" />
                </div>

                {/* Title - Force white color in all themes */}
                <h3 className="text-[20px] md:text-[22px] font-heading font-extrabold leading-tight drop-shadow-lg" style={{ color: '#ffffff' }}>
                  {tm<string>(`services.items.${index}.title`, service.title)}
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

        {/* ── BACK ── full detail */}
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
            <div className="flex items-center justify-center shrink-0 mt-0.5">
              <service.icon size={20} className="text-[var(--green)]" />
            </div>
            <h3 className="text-[14px] font-heading font-bold text-[var(--text-1)] leading-snug">
              {tm<string>(`services.items.${index}.title`, service.title)}
            </h3>
          </div>

          <p className="text-[var(--text-2)] font-body text-[12.5px] leading-relaxed line-clamp-5 flex-1 mt-3">
            {tm<string>(`services.items.${index}.description`, service.description)}
          </p>

          <a
            href={service.link}
            className="mt-4 inline-flex items-center gap-1.5 self-start text-[var(--gold)] font-body font-semibold text-[12px] border border-[var(--gold)] px-3.5 py-1.5 rounded-lg hover:bg-[var(--gold-soft)] transition-colors"
          >
            {t("common.learnMore")}
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

export function Services() {
  const { t, tm } = useI18n();

  return (
    <AnimatedSection id="services" className="py-24 bg-[var(--bg-alt)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
            {t("services.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <FlipCard
              key={service.id}
              service={service}
              index={i}
              t={t}
              tm={tm}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}