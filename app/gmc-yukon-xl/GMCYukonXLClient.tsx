"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { useI18n } from "@/lib/i18n";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Zap,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

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

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-[32px] border-2 border-[var(--border)] bg-[var(--bg)] p-2 shadow-sm">
      <div className="aspect-video rounded-[28px] border border-[var(--border)] bg-[var(--bg-alt)] relative overflow-hidden flex items-center justify-center">
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

function PricingTable({ routes, title }: { routes: any[]; title: string }) {
  const { t } = useI18n();
  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 overflow-x-auto">
      <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6">{title}</h3>
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="text-left py-4 px-4 text-[var(--text-1)] font-heading font-bold">{t("pricing.tableHeaderRoute", "Route")}</th>
            <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">{t("pricing.tableHeaderFare", "Fare (SAR)")}</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route, index) => (
            <tr key={index} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--bg-alt)]/30 transition-colors">
              <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">{route.route}</td>
              <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">{route.fare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--bg-alt)]/30 transition-colors"
      >
        <div className="flex items-start gap-3 flex-1">
          <HelpCircle className="text-[var(--gold)] shrink-0 mt-0.5" size={20} />
          <h4 className="text-[var(--text-1)] font-heading font-bold text-base">{question}</h4>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown className="text-[var(--text-2)]" size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 pl-11">
              <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const icons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Users,
  Star,
  Zap,
  ShieldCheck,
  BadgeCheck,
  Car,
};

export function GMCYukonXLClient() {
  const { t, tm } = useI18n();

  const umrahMiqatRoutes = tm<any[]>("gmcYukonXl.routes.umrahMiqat", []);
  const ziyaratRoutes = tm<any[]>("gmcYukonXl.routes.ziyarat", []);
  const airportTrainRoutes = tm<any[]>("gmcYukonXl.routes.airportTrain", []);
  const intercityRoutes = tm<any[]>("gmcYukonXl.routes.intercity", []);

  const serviceItems = tm<string[]>("gmcYukonXl.serviceItems", []);
  const specialties = tm<any[]>("gmcYukonXl.specialties", []);
  const whyFeatures = tm<any[]>("gmcYukonXl.whyFeatures", []);
  const faqs = tm<any[]>("gmcYukonXl.faqs", []);

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/gmc-yukon-xl.png')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80 z-10" />
          <IslamicGeometricBg opacity={0.03} />

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
                  {t("gmcYukonXl.heroBadge")}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                {t("gmcYukonXl.heroTitle")} <span className="text-[var(--gold)]">{t("gmcYukonXl.heroTitleHighlight")}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  {t("gmcYukonXl.heroText1")}
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  {t("gmcYukonXl.heroText2")}
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
                  {t("gmcYukonXl.heroBookBtn")}
                </a>
                <a
                  href="tel:+966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all shadow-sm"
                >
                  <Phone size={20} />
                  {t("gmcYukonXl.heroCallBtn")}
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/30 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest mb-6">
                  {t("gmcYukonXl.servicesEyebrow")}
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">{t("gmcYukonXl.servicesTitle")}</h2>
                <ul className="space-y-4 text-[var(--text-2)] text-lg leading-relaxed font-body">
                  {serviceItems.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="text-[var(--green)] mt-1" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <ImagePlaceholder label="Image Placeholder: GMC Yukon XL SUV" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("gmcYukonXl.specialtiesEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("gmcYukonXl.specialtiesTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specialties.map((item, index) => {
                  const iconKeys = ["Users", "Star", "Zap", "ShieldCheck", "BadgeCheck", "Car"];
                  const Icon = icons[iconKeys[index]] || Car;
                  return (
                    <Card
                      key={index}
                      title={item.title}
                      description={item.description}
                      icon={Icon}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("gmcYukonXl.pricingEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("gmcYukonXl.pricingTitle")}</h2>
              </div>

              <div className="space-y-8">
                <PricingTable routes={umrahMiqatRoutes} title={t("gmcYukonXl.pricingTables.umrahMiqat")} />
                <PricingTable routes={ziyaratRoutes} title={t("gmcYukonXl.pricingTables.ziyarat")} />
                <PricingTable routes={airportTrainRoutes} title={t("gmcYukonXl.pricingTables.airportTrain")} />
                <PricingTable routes={intercityRoutes} title={t("gmcYukonXl.pricingTables.intercity")} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("gmcYukonXl.whyEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("gmcYukonXl.whyTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyFeatures.map((item, index) => {
                  const whyIcons = [Users, BadgeCheck, ShieldCheck, Zap];
                  const Icon = whyIcons[index] || Users;
                  return (
                    <div key={index} className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("gmcYukonXl.faqEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("gmcYukonXl.faqTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-6 py-24 pb-32">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">{t("gmcYukonXl.ctaTitle")}</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  {t("gmcYukonXl.ctaText")}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://wa.me/966598401594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--green)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <WhatsAppIcon size={24} />
                    {t("gmcYukonXl.ctaWhatsAppBtn")}
                  </a>
                  <a
                    href="tel:+966598401594"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--gold)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <Phone size={24} />
                    {t("gmcYukonXl.ctaCallBtn")}
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
