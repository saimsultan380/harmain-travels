"use client";

import { useI18n } from "@/lib/i18n";
import { MessageCircle, Calculator, ShieldCheck, Smile } from "lucide-react";
import { motion } from "framer-motion";

const stepIcons = [MessageCircle, Calculator, ShieldCheck, Smile];
const stepColors = ["#007A3E", "#9D812E", "#007A3E", "#9D812E"];

export function HowToBook() {
  const { t, tm } = useI18n();

  const steps = [
    {
      title: tm<string>("howToBook.steps.0.title", "Contact Us"),
      desc: tm<string>("howToBook.steps.0.desc", "Contact us through WhatsApp or simply click the book now button."),
    },
    {
      title: tm<string>("howToBook.steps.1.title", "Get an Estimate"),
      desc: tm<string>("howToBook.steps.1.desc", "We provide an estimate based on your selected route and fleet."),
    },
    {
      title: tm<string>("howToBook.steps.2.title", "Secure your Ride"),
      desc: tm<string>("howToBook.steps.2.desc", "Finalize your ride after complete satisfaction."),
    },
    {
      title: tm<string>("howToBook.steps.3.title", "Relax & Enjoy"),
      desc: tm<string>("howToBook.steps.3.desc", "Now sit back and enjoy your journey."),
    },
  ];

  return (
    <section className="py-24 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: Content ── */}
          <motion.div
            className="flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-5">
              {t("howToBook.eyebrow")}
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] leading-[1.1] mb-5">
              {t("howToBook.title")}
            </h2>

            {/* Description */}
            <p className="text-[var(--text-2)] font-body text-base leading-relaxed mb-8 max-w-sm">
              Simple, transparent, and designed for your peace of mind during your sacred journey.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center gap-2">
              <div className="h-[3px] w-10 rounded-full bg-[#007A3E]" />
              <div className="h-[3px] w-5 rounded-full bg-[#9D812E]" />
              <div className="h-[3px] w-3 rounded-full bg-[var(--border-dark)]" />
            </div>
          </motion.div>

          {/* ── RIGHT: 2×2 Step Cards ── */}
          <div className="grid grid-cols-2 gap-4">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              const color = stepColors[i];
              const badgeColor = i % 2 === 0 ? "#9D812E" : "#007A3E";
              return (
                <motion.div
                  key={i}
                  className="group relative bg-[var(--bg-card)] rounded-2xl p-5 border border-[var(--border)] transition-all duration-300 hover:border-[var(--green)]/50 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Subtle background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                    style={{ backgroundColor: color }}
                  />

                  {/* Step number badge */}
                  <div
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-heading font-black text-white shadow-sm"
                    style={{ backgroundColor: badgeColor }}
                  >
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={22} color="#ffffff" strokeWidth={2} />
                  </div>

                  {/* Step label */}
                  <span
                    className="text-[9px] font-heading font-bold uppercase tracking-[0.15em] mb-1 block"
                    style={{ color }}
                  >
                    {t("howToBook.step")} {i + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-[15px] font-heading font-bold text-[var(--text-1)] mb-1.5 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-2)] font-body text-[12px] leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
