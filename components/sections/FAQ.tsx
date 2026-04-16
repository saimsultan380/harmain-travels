"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { faqs } from "@/lib/data/faqs";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export function FAQ() {
  const { t } = useI18n();
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  return (
    <AnimatedSection id="faq" className="pt-24 pb-12 md:pb-24 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
            {t("faq.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
            {t("faq.title")}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id} 
                className={`border border-[var(--border)] rounded-xl overflow-hidden bg-[var(--bg-card)] transition-colors duration-300 ${isOpen ? 'border-[var(--gold)] shadow-sm' : ''}`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-heading font-bold text-lg text-[var(--text-1)] pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? 'bg-[var(--gold-soft)] text-[var(--gold)]' : 'bg-[var(--bg-alt)] text-[var(--text-3)]'}`}
                  >
                    <Plus size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 border-t border-[var(--border)] mt-2">
                        <div className="relative pl-4">
                          {/* Active left-border slide animation */}
                          <motion.div 
                            className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--gold)] rounded-full"
                            initial={{ height: 0 }}
                            animate={{ height: "100%" }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                          />
                          <p className="text-[var(--text-2)] font-body leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
