"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { testimonials } from "@/lib/data/testimonials";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const { t } = useI18n();
  return (
    <AnimatedSection id="testimonials" className="py-24 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
            {t("testimonials.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="relative w-full overflow-hidden flex items-center justify-center">
          <motion.div 
            className="flex gap-6 py-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ width: "200%" }}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <motion.div 
                key={i}
                className="w-[350px] flex-shrink-0 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Decorative Quote */}
                <div className="absolute top-4 right-4 text-[var(--gold)] opacity-10 text-8xl font-serif leading-none select-none pointer-events-none">
                  "
                </div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[var(--green-soft)] border border-[var(--green)] flex items-center justify-center text-[var(--green)] font-heading font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[var(--text-1)]">{testimonial.name}</h4>
                    <div className="flex text-[var(--gold)] text-sm">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-[var(--text-2)] font-body text-base leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
