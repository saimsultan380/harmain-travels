"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

export function TaxiServicesPricingClient() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Navbar />

      <main className="flex-grow">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/umrah-taxi-services.png')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80 z-10" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
                {t("pricing.eyebrow")}
              </span>
              <h1 className="mt-4 font-heading text-4xl md:text-6xl lg:text-[72px] font-extrabold !text-white leading-tight mb-4">
                {t("pricing.pageTitle", "Haramain Umrah Taxi Major Routes Pricing With Variety of Fleet Options")}
              </h1>
              <p className="mt-4 font-body text-lg md:text-xl text-white/90 leading-relaxed">
                {t("pricing.subtitle")}
              </p>
            </div>
          </div>
        </section>

        <AnimatedSection className="border-t border-[var(--border)] bg-[var(--bg)] py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <Image
                src="/images/haramain rate list12-01.png"
                alt="Haramain Umrah Taxi Price List"
                width={1200}
                height={800}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
