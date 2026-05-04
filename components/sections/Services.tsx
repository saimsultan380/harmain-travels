"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function FlipCard({
  service,
  index,
  t,
  tm,
}: {
  service: (typeof services)[number];
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
        className={`relative w-full h-full transition-transform duration-500 ease-in-out ${
          isFlipped ? '[transform:rotateY(180deg)]' : 'md:group-hover:[transform:rotateY(180deg)]'
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── FRONT ── icon + title only */}
        <div
          className="absolute inset-0 rounded-2xl border-2 border-[var(--border-dark)] bg-[var(--bg-card)] flex flex-col items-center justify-center gap-5 px-6 text-center overflow-hidden transition-all duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[var(--green)] rounded-b-full" />

          {/* Icon - no background */}
          <div className="flex items-center justify-center shrink-0">
            <service.icon size={32} className="text-[var(--green)]" />
          </div>

          {/* Title */}
          <h3 className="text-[16px] font-heading font-bold text-[var(--text-1)] leading-snug">
            {tm<string>(`services.items.${index}.title`, service.title)}
          </h3>

          {/* Hover hint */}
          <p className="text-[var(--text-3)] text-[11px] font-body uppercase tracking-widest">
            <span className="hidden md:inline">Hover to explore</span>
            <span className="md:hidden">Tap to explore</span>
          </p>

          {/* Mobile tap indicator */}
          <div className="md:hidden absolute inset-0 border-2 border-transparent rounded-2xl animate-pulse opacity-30 pointer-events-none" 
               style={{ borderColor: 'var(--green)' }} />

          {/* Corner ornament */}
          <div className="absolute bottom-3 right-3 opacity-[0.05]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="var(--green)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="10" stroke="var(--green)" strokeWidth="1" />
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Scroll to current card
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const isMobile = window.innerWidth < 640;
      const cardWidth = isMobile ? container.scrollWidth / services.length : 300 + 24; // 300px card + 24px gap
      
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

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

        {/* Slider Container */}
        <div className="relative">
          {/* Cards Slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {services.map((service, i) => (
              <div key={service.id} className="snap-center flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[280px] md:w-[300px] px-2 sm:px-0">
                <motion.div
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ type: "spring", stiffness: 90, damping: 20, delay: i * 0.07 }}
                >
                  <FlipCard
                    service={service}
                    index={i}
                    t={t}
                    tm={tm}
                  />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[var(--bg-card)] border border-[var(--border)] rounded-full items-center justify-center text-[var(--text-2)] hover:text-[var(--green)] hover:border-[var(--green)] transition-colors shadow-lg"
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[var(--bg-card)] border border-[var(--border)] rounded-full items-center justify-center text-[var(--text-2)] hover:text-[var(--green)] hover:border-[var(--green)] transition-colors shadow-lg"
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentIndex === i ? "32px" : "8px",
                height: "8px",
                backgroundColor: currentIndex === i ? "var(--green)" : "var(--border-dark)",
              }}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={goToPrevious}
            className="flex items-center justify-center w-10 h-10 bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-[var(--text-2)] hover:text-[var(--green)] hover:border-[var(--green)] transition-colors"
            aria-label="Previous service"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goToNext}
            className="flex items-center justify-center w-10 h-10 bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-[var(--text-2)] hover:text-[var(--green)] hover:border-[var(--green)] transition-colors"
            aria-label="Next service"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </AnimatedSection>
  );
}