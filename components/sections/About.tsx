"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function About() {
  const { t, tm } = useI18n();
  return (
    <AnimatedSection id="about" className="pt-24 pb-12 md:pb-24 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
                {t("about.eyebrow")}
              </span>
              <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4">
                {t("about.title")}
              </h2>
            </div>
            <div className="text-[var(--text-2)] font-body text-lg leading-relaxed space-y-6">
            <p>
              {tm<string>("about.paragraphs.0")}
            </p>
            <p>
              {tm<string>("about.paragraphs.1")}
            </p>
            <p>
              {tm<string>("about.paragraphs.2")}
            </p>
            </div>
          </div>
          <div className="relative h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--bg-alt)] shadow-lg">
            <Image 
              src="/images/your-trusted-patner.jpg" 
              alt="Haramain Luxury Fleet" 
              fill 
              sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
