"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Services() {
  const { t, tm } = useI18n();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <AnimatedSection id="services" className="py-24 bg-[var(--bg-alt)]">
      <div className="container mx-auto px-4 lg:px-8">
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover="hover"
              className="group relative p-8 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent pointer-events-none"
                variants={{
                  hover: {
                    borderColor: ["var(--gold)", "var(--green)", "var(--gold)"],
                  },
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="relative w-14 h-14 rounded-xl bg-[var(--green-soft)] flex items-center justify-center mb-6 overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <path
                      d="M50 0 L100 50 L50 100 L0 50 Z"
                      fill="none"
                      stroke="var(--green)"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  variants={{ hover: { y: [0, -4, 0] } }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon
                    size={28}
                    className="text-[var(--green)] relative z-10"
                  />
                </motion.div>
              </div>

              <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-3">
                {tm<string>(`services.items.${i}.title`, service.title)}
              </h3>
              <p className="text-[var(--text-2)] font-body mb-6 line-clamp-2">
                {tm<string>(`services.items.${i}.description`, service.description)}
              </p>

              <a
                href={service.link}
                className="inline-flex items-center text-[var(--gold)] font-body font-semibold group-hover:text-[#8A7020] transition-colors"
              >
                {t("common.learnMore")}{" "}
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
