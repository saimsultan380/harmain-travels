"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { useI18n } from "@/lib/i18n";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Gift,
  HandHeart,
  HelpCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
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

function ImagePlaceholder({ label, imageUrl }: { label: string; imageUrl?: string }) {
  if (imageUrl) {
    return (
      <div className="rounded-[32px] overflow-hidden relative w-full h-full min-h-[280px]">
        <Image
          src={imageUrl}
          alt={label}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border-2 border-[var(--border)] bg-[var(--bg)] p-2 shadow-sm h-full min-h-[280px]">
      <div className="h-full rounded-[28px] border border-[var(--border)] bg-[var(--bg-alt)] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 via-transparent to-[var(--green)]/10" />
        <span className="relative z-10 text-xs font-heading font-bold uppercase tracking-widest text-[var(--text-2)] opacity-70">
          {label}
        </span>
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mb-5">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-heading font-bold text-[var(--text-1)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--text-2)] leading-relaxed font-body">{description}</p>
    </motion.div>
  );
}

export function QuranWaqfServicesClient() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage:
                "url('/images/quran-distribution-services.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80 z-10" />
          <IslamicGeometricBg opacity={0.04} />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-1.5 rounded-full bg-[var(--gold)] text-white font-heading font-bold text-xs uppercase tracking-widest shadow-lg shadow-[var(--gold)]/20">
                  {t("quranWaqf.heroBadge")}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                {t("quranWaqf.heroTitle").split(' in ')[0]} in <span className="text-[var(--gold)]">{t("quranWaqf.heroTitle").split(' in ')[1]}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  {t("quranWaqf.heroText1")}
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  {t("quranWaqf.heroText2")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="https://wa.me/966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--green)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all border border-[var(--green)]/20"
                >
                  <WhatsAppIcon />
                  {t("quranWaqf.heroDonateBtn")}
                </a>
                <Link
                  href="#services"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm"
                >
                  {t("quranWaqf.heroServicesBtn")}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/30 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest mb-6">
                  {t("quranWaqf.impactBadge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">{t("quranWaqf.impactTitle")}</h2>
                <div className="space-y-5">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    {t("quranWaqf.impactP1")}
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    {t("quranWaqf.impactP2")}
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    {t("quranWaqf.impactP3")}
                  </p>
                </div>
              </div>

              <ImagePlaceholder
                label={t("quranWaqf.impactTitle")}
                imageUrl="/images/why-quran-distribution.webp"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="services" className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("quranWaqf.servicesEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("quranWaqf.servicesTitle")}</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  {t("quranWaqf.servicesDesc")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title={t("quranWaqf.service1Title")}
                  description={t("quranWaqf.service1Desc")}
                  icon={BookOpen}
                />
                <Card
                  title={t("quranWaqf.service2Title")}
                  description={t("quranWaqf.service2Desc")}
                  icon={Sparkles}
                />
                <Card
                  title={t("quranWaqf.service3Title")}
                  description={t("quranWaqf.service3Desc")}
                  icon={HandHeart}
                />
                <Card
                  title={t("quranWaqf.service4Title")}
                  description={t("quranWaqf.service4Desc")}
                  icon={Gift}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[var(--bg-card)] border-2 border-[var(--gold)]/10 rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-48 -mt-48" />

              <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">{t("quranWaqf.whyTitle")}</h2>
                <p className="text-[var(--text-2)] font-body max-w-3xl mx-auto text-lg">
                  {t("quranWaqf.whyDesc")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                <Card
                  title={t("quranWaqf.why1Title")}
                  description={t("quranWaqf.why1Desc")}
                  icon={BadgeCheck}
                />
                <Card
                  title={t("quranWaqf.why2Title")}
                  description={t("quranWaqf.why2Desc")}
                  icon={ShieldCheck}
                />
                <Card
                  title={t("quranWaqf.why3Title")}
                  description={t("quranWaqf.why3Desc")}
                  icon={CheckCircle2}
                />
                <Card
                  title={t("quranWaqf.why4Title")}
                  description={t("quranWaqf.why4Desc")}
                  icon={BookOpen}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("quranWaqf.getInvolvedEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("quranWaqf.getInvolvedTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-8">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mb-5">
                    <Phone size={22} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3">{t("quranWaqf.step1Title")}</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                    {t("quranWaqf.step1Desc")}
                  </p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-8">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mb-5">
                    <Gift size={22} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3">{t("quranWaqf.step2Title")}</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                    {t("quranWaqf.step2Desc")}
                  </p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-8">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mb-5">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3">{t("quranWaqf.step3Title")}</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                    {t("quranWaqf.step3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-6 py-24 pb-32">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">{t("quranWaqf.ctaTitle")}</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  {t("quranWaqf.ctaText")}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://wa.me/966598401594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--green)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <WhatsAppIcon size={24} />
                    {t("quranWaqf.ctaWhatsAppBtn")}
                  </a>
                  <a
                    href="tel:+966598401594"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--gold)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <Phone size={24} />
                    {t("quranWaqf.ctaCallBtn")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
