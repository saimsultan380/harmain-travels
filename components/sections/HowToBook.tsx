"use client";

import { useI18n } from "@/lib/i18n";
import { MessageCircle, Calculator, ShieldCheck, Smile, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export function HowToBook() {
  const { t, tm } = useI18n();
  const [activeStep, setActiveStep] = useState(0);
  const [leftOffset, setLeftOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect on desktop (screens larger than 1024px)
      if (window.innerWidth < 1024) {
        setLeftOffset(0);
        return;
      }

      if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

      const section = sectionRef.current;
      const leftContent = leftRef.current;
      const rightContent = rightRef.current;

      const sectionRect = section.getBoundingClientRect();
      const leftHeight = leftContent.offsetHeight;
      const rightHeight = rightContent.offsetHeight;

      // Calculate how much of the section is visible
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const viewportHeight = window.innerHeight;

      // Only apply effect when section is in view
      if (sectionTop < viewportHeight && sectionBottom > 0) {
        // Calculate scroll progress through the section
        const scrollProgress = Math.max(0, Math.min(1, 
          (viewportHeight - sectionTop) / (sectionRect.height + viewportHeight)
        ));

        // Calculate maximum offset (difference in heights)
        const maxOffset = Math.max(0, rightHeight - leftHeight);
        
        // Apply offset based on scroll progress
        const newOffset = scrollProgress * maxOffset;
        setLeftOffset(newOffset);
      }
    };

    const handleResize = () => {
      // Reset offset on mobile when resizing
      if (window.innerWidth < 1024) {
        setLeftOffset(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: tm<string>("howToBook.steps.0.title", "Contact Us"),
      desc: tm<string>("howToBook.steps.0.desc", "Contact us through WhatsApp or simply click the book now button."),
      color: "#007A3E",
      bgColor: "#007A3E08",
    },
    {
      icon: Calculator,
      title: tm<string>("howToBook.steps.1.title", "Get an Estimate"),
      desc: tm<string>("howToBook.steps.1.desc", "We provide an estimate based on your selected route and fleet."),
      color: "#9D812E",
      bgColor: "#9D812E08",
    },
    {
      icon: ShieldCheck,
      title: tm<string>("howToBook.steps.2.title", "Secure your Ride"),
      desc: tm<string>("howToBook.steps.2.desc", "Finalize your ride after complete satisfaction."),
      color: "#007A3E",
      bgColor: "#007A3E08",
    },
    {
      icon: Smile,
      title: tm<string>("howToBook.steps.3.title", "Relax & Enjoy"),
      desc: tm<string>("howToBook.steps.3.desc", "Now sit back and enjoy your journey."),
      color: "#9D812E",
      bgColor: "#9D812E08",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* ── LEFT: Header (sticky scroll) ── */}
          <div className="relative">
            <div 
              ref={leftRef}
              className="lg:sticky lg:top-24 transition-transform duration-300 ease-out"
              style={{ transform: `translateY(${leftOffset}px)` }}
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-6">
                  {t("howToBook.eyebrow")}
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] leading-[1.1] mb-6">
                  <span className="block">4 Easy Steps to Book</span>
                  <span className="block">our Taxi</span>
                </h2>
                <p className="text-[var(--text-2)] font-body text-lg leading-relaxed max-w-lg">
                  Simple, transparent, and designed for your peace of mind during your sacred journey.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ── RIGHT: Step Cards ── */}
          <div ref={rightRef} className="relative flex flex-col justify-start">
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`group relative cursor-pointer transition-all duration-500 ${
                    activeStep === i ? "scale-105" : "hover:scale-102"
                  }`}
                  initial={{ opacity: 0, x: 60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                >
                  {/* Connecting line to next step */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-px h-12 bg-gradient-to-b from-[var(--green)]/30 to-transparent" />
                  )}

                  {/* Card */}
                  <div
                    className={`relative bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border)] transition-all duration-300 ${
                      activeStep === i
                        ? "border-[var(--green)]/30"
                        : "hover:border-[var(--green)]/20"
                    }`}
                  >
                    {/* Step number + icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeStep === i ? "scale-110" : ""
                        }`}
                        style={{
                          backgroundColor: activeStep === i ? step.color : step.bgColor,
                        }}
                      >
                        {(() => {
                          const IconComponent = step.icon;
                          return (
                            <IconComponent
                              size={20}
                              style={{
                                color: activeStep === i ? "white" : step.color,
                              }}
                              strokeWidth={2.5}
                            />
                          );
                        })()}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-xs font-heading font-bold px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: step.bgColor,
                              color: step.color,
                            }}
                          >
                            STEP {i + 1}
                          </span>
                        </div>
                        <h3 className="text-lg font-heading font-bold text-[var(--text-1)] leading-tight">
                          {step.title}
                        </h3>
                      </div>
                      {activeStep === i && (
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight size={20} style={{ color: step.color }} />
                        </motion.div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[var(--text-2)] font-body text-sm leading-relaxed pl-16">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Progress indicator */}
            <motion.div
              className="mt-8 flex justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="transition-all duration-300"
                  style={{
                    width: activeStep === i ? "32px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor: activeStep === i ? "var(--green)" : "var(--border-dark)",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}