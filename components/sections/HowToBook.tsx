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

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-4">
            {t("howToBook.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] leading-[1.1] mb-4">
            {t("howToBook.title")}
          </h2>
          <p className="text-[var(--text-2)] font-body text-lg max-w-xl mx-auto">
            Simple, transparent, and designed for your peace of mind during your sacred journey.
          </p>
        </motion.div>

        {/* ── Desktop: Horizontal Timeline ── */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between gap-6">

            {/* Background connecting line */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-[var(--border-dark)]" />

            {/* Animated progress line */}
            <motion.div
              className="absolute top-10 left-[12.5%] h-[2px] bg-gradient-to-r from-[#007A3E] to-[#9D812E]"
              initial={{ width: "0%" }}
              whileInView={{ width: "75%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            />

            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              const color = stepColors[i];
              const badgeColor = i % 2 === 0 ? "#9D812E" : "#007A3E";
              return (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center flex-1 group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  {/* Circle with icon */}
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center z-10 border-4 border-[var(--bg)] shadow-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={28} color="#ffffff" strokeWidth={2} />
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-heading font-black text-white border-2 border-[var(--bg)]"
                      style={{ backgroundColor: badgeColor }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="mt-6 w-full bg-[var(--bg-card)] rounded-2xl p-5 border border-[var(--border)] text-center transition-all duration-300 group-hover:border-[var(--green)]/40 group-hover:shadow-lg group-hover:-translate-y-1">
                    <span
                      className="text-[10px] font-heading font-bold uppercase tracking-widest mb-2 block"
                      style={{ color }}
                    >
                      {t("howToBook.step")} {i + 1}
                    </span>
                    <h3 className="text-[16px] font-heading font-bold text-[var(--text-1)] mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-2)] font-body text-[13px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: Vertical Timeline ── */}
        <div className="md:hidden flex flex-col">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            const color = stepColors[i];
            const isLast = i === steps.length - 1;
            return (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Left: icon + vertical line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={20} color="#ffffff" strokeWidth={2} />
                  </div>
                  {!isLast && (
                    <div className="w-[2px] flex-1 my-2 bg-gradient-to-b from-[var(--border-dark)] to-transparent min-h-[40px]" />
                  )}
                </div>

                {/* Right: content */}
                <div className={`flex-1 bg-[var(--bg-card)] rounded-2xl p-5 border border-[var(--border)] ${!isLast ? "mb-4" : ""}`}>
                  <span
                    className="text-[10px] font-heading font-bold uppercase tracking-widest mb-1 block"
                    style={{ color }}
                  >
                    {t("howToBook.step")} {i + 1}
                  </span>
                  <h3 className="text-[16px] font-heading font-bold text-[var(--text-1)] mb-1 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-2)] font-body text-[13px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
