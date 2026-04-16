"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BorderTraceCard } from "@/components/ui/BorderTraceCard";
import { ziyarat } from "@/lib/data/ziyarat";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export function ZiyaratTours() {
  const { t, tm } = useI18n();
  return (
    <AnimatedSection id="ziyarat" className="py-24 bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
            {t("ziyarat.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
            {t("ziyarat.title")}
          </h2>
          <div className="text-[var(--text-2)] font-body text-lg max-w-4xl mx-auto space-y-4">
            <p className="font-bold text-[var(--gold)]">{t("ziyarat.intro")}</p>
            <p>
              {t("ziyarat.body")}
            </p>
            <p className="font-bold">{t("ziyarat.cta")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ziyarat.map((tour, i) => (
            <BorderTraceCard key={tour.id} className="p-8">
              <h3 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">
                {tm<string>(`ziyarat.cities.${i}`, tour.city)}
              </h3>
              
              <ul className="space-y-4 mb-8">
                {tour.sites.map((site, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[var(--green)] mt-2" />
                    <span className="text-[var(--text-2)] font-body">{site}</span>
                  </li>
                ))}
              </ul>
              
              <a href="https://wa.me/966598401594" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[var(--gold)] font-body font-semibold hover:text-[#8A7020] transition-colors">
                {t("ziyarat.cardCta")} <ArrowRight size={16} className="ml-2" />
              </a>
            </BorderTraceCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
