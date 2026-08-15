"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function Pricing() {
  const { t } = useI18n();
  return (
    <AnimatedSection id="pricing" className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
            {t("pricing.eyebrow")}
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold text-[var(--text-1)] md:text-[48px]">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 font-body text-[var(--text-2)]">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-6xl">
          <Image
            src="/images/rate-list.jpg"
            alt="Haramain Umrah Taxi Price List"
            width={1920}
            height={1746}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
