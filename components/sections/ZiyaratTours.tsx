"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BorderTraceCard } from "@/components/ui/BorderTraceCard";
import { ziyarat } from "@/lib/data/ziyarat";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
            <BorderTraceCard key={tour.id} className="p-0 h-full cursor-pointer group/card">
              <div className="relative h-full min-h-[350px] md:min-h-[420px] p-8 flex flex-col justify-end">
                {/* Background Image */}
                <Image
                  src={tour.image || ""}
                  alt={tour.city}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  priority={i < 3}
                />
                
                {/* Overlay - Dark gradient for readability */}
                <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/50 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 w-full translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-heading font-bold !text-white mb-2 transition-all duration-500">
                    {tm<string>(`ziyarat.cities.${i}`, tour.city)}
                  </h3>
                  
                  <div className="grid grid-rows-[0fr] group-hover/card:grid-rows-[1fr] transition-all duration-500 opacity-0 group-hover/card:opacity-100">
                    <div className="overflow-hidden">
                      <ul className="space-y-2 mb-6 pt-2 border-t border-white/10">
                        {tour.sites.map((site, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mt-2 flex-shrink-0" />
                            <span className="text-gray-200 font-body text-sm leading-relaxed">{site}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="https://wa.me/966598401594" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[var(--gold)] font-body font-semibold hover:text-white transition-colors text-sm group/link">
                        {t("ziyarat.cardCta")} 
                        <ArrowRight size={14} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </BorderTraceCard>

          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

