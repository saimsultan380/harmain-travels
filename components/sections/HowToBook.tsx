"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PilgrimJourneyTimeline } from "@/components/graphics/PilgrimJourneyTimeline";
import { useI18n } from "@/lib/i18n";
import { MessageCircle, Calculator, ShieldCheck, Smile } from "lucide-react";
import { motion } from "framer-motion";

export function HowToBook() {
  const { t, tm } = useI18n();
  const steps = [
    { icon: MessageCircle, title: tm<string>("howToBook.steps.0.title"), desc: tm<string>("howToBook.steps.0.desc"), color: "var(--green)" },
    { icon: Calculator, title: tm<string>("howToBook.steps.1.title"), desc: tm<string>("howToBook.steps.1.desc"), color: "var(--gold)" },
    { icon: ShieldCheck, title: tm<string>("howToBook.steps.2.title"), desc: tm<string>("howToBook.steps.2.desc"), color: "var(--green)" },
    { icon: Smile, title: tm<string>("howToBook.steps.3.title"), desc: tm<string>("howToBook.steps.3.desc"), color: "var(--gold)" },
  ];

  return (
    <AnimatedSection id="how-to-book" className="py-24 bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
            {t("howToBook.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
            {t("howToBook.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Timeline SVG */}
          <div className="hidden lg:block w-full">
            <PilgrimJourneyTimeline />
          </div>

          {/* Right: Steps */}
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-[-3rem] w-px bg-[var(--border-dark)]" />
                )}
                
                <div className="w-12 h-12 rounded-full bg-[var(--bg-card)] border-2 flex items-center justify-center flex-shrink-0 z-10" style={{ borderColor: step.color }}>
                  <step.icon size={24} style={{ color: step.color }} />
                </div>
                
                <div className="pt-2">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-2">
                    {t("howToBook.step")} {i + 1}: {step.title}
                  </h3>
                  <p className="text-[var(--text-2)] font-body text-lg">
                    {step.desc}
                  </p>
                  
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
