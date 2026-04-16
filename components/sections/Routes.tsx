"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { RouteMapGraphic } from "@/components/graphics/RouteMapGraphic";
import { routes } from "@/lib/data/routes";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Routes() {
  const { t } = useI18n();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, rotateX: -15 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <AnimatedSection id="routes" className="py-24 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="w-full flex flex-col items-center lg:items-start">
            <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-4">
              {t("routes.eyebrow")}
            </span>
            <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mb-4">
              {t("routes.title")}
            </h2>
            <p className="text-[var(--text-2)] font-body text-lg mb-8">
              {t("routes.description")}
            </p>
            <div className="w-full max-w-[500px]">
              <RouteMapGraphic />
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {routes.map((route) => (
              <motion.div
                key={route.id}
                variants={item}
                className="group relative p-4 bg-[var(--bg-card)] border border-[var(--gold)] rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Hover Background Fill */}
                <div className="absolute inset-0 bg-[var(--gold-soft)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--green)]" />
                    <span className="font-heading font-bold text-[var(--text-1)] text-lg">{t("routes.startLabel")}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2 pl-4 text-[var(--text-3)]">
                    <ArrowRight size={14} />
                    <span className="font-heading font-bold text-[var(--text-1)] text-lg">{route.end}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-body text-[var(--text-2)] mt-4 border-t border-[var(--border)] pt-2">
                    <span>{route.distance}</span>
                    <span>{route.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  );
}
