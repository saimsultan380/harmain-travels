"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { testimonials } from "@/lib/data/testimonials";
import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

// Deterministic avatar colors per index — no gradients, just solid bg + text
const AVATAR_PALETTE = [
  { bg: "#007A3E", text: "#ffffff" },
  { bg: "#9D812E", text: "#ffffff" },
  { bg: "#1a5276", text: "#ffffff" },
  { bg: "#6c3483", text: "#ffffff" },
  { bg: "#117a65", text: "#ffffff" },
  { bg: "#784212", text: "#ffffff" },
  { bg: "#1a3a5c", text: "#ffffff" },
  { bg: "#4a235a", text: "#ffffff" },
];

export function Testimonials() {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);
  
  // Get visible testimonials based on current index
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    } else {
      const start = currentIndex * cardsPerSlide;
      return testimonials.slice(start, start + cardsPerSlide);
    }
  };

  const visible = getVisibleTestimonials();

  function goTo(next: number, dir: number) {
    setDirection(dir);
    setCurrentIndex(next);
  }

  function prev() {
    if (isMobile) {
      // Mobile: navigate through individual testimonials
      goTo(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1, -1);
    } else {
      // Desktop: navigate through slides of 3
      goTo(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1, -1);
    }
  }

  function next() {
    if (isMobile) {
      // Mobile: navigate through individual testimonials
      goTo(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1, 1);
    } else {
      // Desktop: navigate through slides of 3
      goTo(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1, 1);
    }
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" as const },
    }),
  };

  return (
    <AnimatedSection
      id="testimonials"
      className="py-24 bg-[var(--bg)] border-t border-[var(--border)]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
            {t("testimonials.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-3">
            {t("testimonials.title")}
          </h2>
          <p className="text-[var(--text-3)] font-body text-base max-w-xl mx-auto">
            Real experiences from pilgrims who trusted us with their journey.
          </p>
        </div>

        {/* Cards */}
        <div className="relative overflow-hidden min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${currentIndex}-${isMobile}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className={isMobile ? "flex justify-center" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"}
            >
              {visible.map((testimonial, i) => {
                const actualIndex = isMobile ? currentIndex : (currentIndex * cardsPerSlide) + i;
                const palette = AVATAR_PALETTE[actualIndex % AVATAR_PALETTE.length];
                
                return (
                  <div
                    key={testimonial.id}
                    className={`relative bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 flex flex-col gap-5 overflow-hidden ${
                      isMobile ? "w-full max-w-lg" : ""
                    }`}
                  >
                    {/* Top accent */}
                    <div className="absolute top-0 left-6 w-10 h-[2px] bg-[var(--green)] rounded-b-full" />

                    {/* Quote icon */}
                    <Quote
                      size={28}
                      className="text-[var(--gold)] opacity-20 absolute top-5 right-5"
                      strokeWidth={1.5}
                    />

                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, j) => (
                          <Star
                            key={j}
                            size={14}
                            className="text-[var(--gold)]"
                            fill="currentColor"
                          />
                        )
                      )}
                    </div>

                    {/* Review text */}
                    <p className="text-[var(--text-2)] font-body text-[14px] leading-[1.75] flex-1 line-clamp-5">
                      {testimonial.text.replace(/^"|"$/g, "")}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-[var(--border)]" />

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center font-heading font-bold text-[15px] shrink-0 select-none"
                        style={{
                          backgroundColor: palette.bg,
                          color: palette.text,
                        }}
                      >
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-heading font-bold text-[var(--text-1)] text-[14px] leading-tight">
                          {testimonial.name}
                        </p>
                        <p className="text-[var(--text-3)] font-body text-[12px] mt-0.5">
                          Verified Pilgrim
                        </p>
                      </div>
                      {/* Google badge */}
                      <div className="ml-auto flex items-center gap-1 text-[11px] font-body text-[var(--text-3)] border border-[var(--border)] rounded-md px-2 py-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous reviews"
            className="w-10 h-10 rounded-full border border-[var(--border-dark)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-2)] hover:border-[var(--green)] hover:text-[var(--green)] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: isMobile ? testimonials.length : totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
                aria-label={`Go to ${isMobile ? 'review' : 'slide'} ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === currentIndex ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === currentIndex
                      ? "var(--green)"
                      : "var(--border-dark)",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next reviews"
            className="w-10 h-10 rounded-full border border-[var(--border-dark)] bg-[var(--bg-card)] flex items-center justify-center text-[var(--text-2)] hover:border-[var(--green)] hover:text-[var(--green)] transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Page counter */}
        <p className="text-center text-[var(--text-3)] font-body text-[12px] mt-3">
          {isMobile 
            ? `${currentIndex + 1} of ${testimonials.length} reviews`
            : `${(currentIndex * cardsPerSlide) + 1}–${Math.min((currentIndex + 1) * cardsPerSlide, testimonials.length)} of ${testimonials.length} reviews`
          }
        </p>
      </div>
    </AnimatedSection>
  );
}
