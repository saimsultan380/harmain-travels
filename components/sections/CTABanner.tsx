"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, ShieldCheck, Clock3, BadgeDollarSign } from "lucide-react";

const WhatsAppIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function CTABanner() {
  const { t } = useI18n();
  return (
    <AnimatedSection
      id="contact"
      className="relative pt-12 pb-24 md:py-32 lg:py-40 overflow-hidden bg-[var(--bg)] border-t border-[var(--border)]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-[var(--gold-soft)]/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-[var(--green-soft)]/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--bg-card)] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] scale-110 rotate-3">
              <IslamicGeometricBg />
            </div>

            <div className="relative z-10 px-6 py-14 md:px-12 md:py-16 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-[var(--gold-soft)]/35 px-4 py-2 text-[var(--gold)] font-body font-bold text-xs md:text-sm uppercase tracking-[0.15em] mb-6">
                {t("cta.subtitle")}
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-[var(--text-1)] leading-[1.15] mb-8 tracking-tight">
                {t("cta.title")}
              </h2>

              <div className="mx-auto mb-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm font-body text-[var(--text-2)]">
                  <ShieldCheck size={16} className="text-[var(--green)]" />
                  Trusted Drivers
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm font-body text-[var(--text-2)]">
                  <Clock3 size={16} className="text-[var(--green)]" />
                  24/7 Support
                </div>
                <div className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm font-body text-[var(--text-2)]">
                  <BadgeDollarSign size={16} className="text-[var(--green)]" />
                  Fixed Pricing
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/966598401594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[var(--green)] text-white font-body font-semibold text-lg rounded-xl shadow-lg shadow-[var(--green-soft)] hover:opacity-90 transition-all"
                >
                  <WhatsAppIcon size={22} className="text-white" />
                  {t("common.bookOnWhatsApp")}
                </a>

                <a
                  href="#fleet"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--green)] text-[var(--green)] font-body font-semibold text-lg rounded-xl hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white transition-all group"
                >
                  {t("common.viewFleet")}
                  <ArrowRight
                    size={22}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
