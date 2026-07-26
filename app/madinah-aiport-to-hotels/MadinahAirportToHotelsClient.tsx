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
        <img
          src={imageUrl}
          alt={label}
          className="absolute inset-0 w-full h-full object-cover"
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
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  const { t } = useI18n();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/20 rounded-3xl p-6 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-[var(--gold)]/40"
    >
      <div className="h-[250px] w-full mb-6 flex items-center justify-center bg-[var(--bg-alt)] rounded-2xl overflow-hidden relative border border-[var(--border)]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-contain p-2 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4">{title}</h3>
      <p className="text-[var(--text-2)] text-sm leading-relaxed font-body mb-6 flex-grow">{description}</p>

      <div className="mt-auto pt-6 border-t border-[var(--border)]">
        <div className="flex gap-3">
          <a
            href="https://wa.me/966598401594"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.2] flex items-center justify-center gap-2 py-3 bg-[var(--green)] text-white font-body font-semibold rounded-xl hover:opacity-95 transition-all shadow-md text-sm text-center"
          >
            <WhatsAppIcon size={18} />
            {t("common.whatsapp")}
          </a>
          <Link
            href="/book-now/"
            className="flex-1 flex items-center justify-center py-3 border-2 border-[var(--green)] text-[var(--green)] font-body font-semibold rounded-xl hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white transition-all text-sm text-center"
          >
            {t("common.bookNow")}
          </Link>
        </div>
      </div>
    </motion.div>
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

export function MadinahAirportToHotelsClient() {
  const { t, tm } = useI18n();

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage:
                "url('/images/madinah-airport-to-hotel-services.webp')",
            }}
          />
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
                  {t("madinahAirportToHotels.heroBadge")}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                {t("madinahAirportToHotels.heroTitle").split('and')[0]} and <span className="text-[var(--gold)]">{t("madinahAirportToHotels.heroTitle").split('and')[1]}</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  {t("madinahAirportToHotels.heroText1")}
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  {t("madinahAirportToHotels.heroText2")}
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
                  {t("madinahAirportToHotels.heroBookBtn")}
                </a>
                <a
                  href="tel:+966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all shadow-sm"
                >
                  <Phone size={20} />
                  {t("madinahAirportToHotels.heroCallBtn")}
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
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("madinahAirportToHotels.onlineBookingEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("madinahAirportToHotels.onlineBookingTitle")}</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  {t("madinahAirportToHotels.onlineBookingP1")}
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  {t("madinahAirportToHotels.onlineBookingP2")}
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                  {t("madinahAirportToHotels.onlineBookingP3")}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-10">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("madinahAirportToHotels.howToBookEyebrow")}</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)]">{t("madinahAirportToHotels.howToBookTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">1</div>
                      <div>
                        <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">{t("madinahAirportToHotels.step1Title")}</h3>
                        <p className="text-[var(--text-2)] text-base leading-relaxed font-body">{t("madinahAirportToHotels.step1Desc")}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">2</div>
                      <div>
                        <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">{t("madinahAirportToHotels.step2Title")}</h3>
                        <p className="text-[var(--text-2)] text-base leading-relaxed font-body">{t("madinahAirportToHotels.step2Desc")}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">3</div>
                      <div>
                        <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">{t("madinahAirportToHotels.step3Title")}</h3>
                        <p className="text-[var(--text-2)] text-base leading-relaxed font-body">{t("madinahAirportToHotels.step3Desc")}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[280px] rounded-[32px] overflow-hidden bg-[var(--bg-alt)]">
                  <img
                    src="/images/book-madinah-airport-to-hotel.webp"
                    alt={t("madinahAirportToHotels.howToBookTitle")}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("madinahAirportToHotels.routeInfoEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("madinahAirportToHotels.routeInfoTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">{t("madinahAirportToHotels.distanceTimeTitle")}</h3>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-4">
                    {t("madinahAirportToHotels.distanceTimeP1")}
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    {t("madinahAirportToHotels.distanceTimeP2")}
                  </p>
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">{t("madinahAirportToHotels.areasWeServeTitle")}</h3>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-4">
                    {t("madinahAirportToHotels.areasWeServeP1")}
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    {t("madinahAirportToHotels.areasWeServeP2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("madinahAirportToHotels.pricingEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("madinahAirportToHotels.pricingTitle")}</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 overflow-x-auto mb-8">
                <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6">{t("madinahAirportToHotels.pricingTableTitle")}</h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-4 px-4 text-[var(--text-1)] font-heading font-bold">{t("madinahAirportToHotels.tableVehicleType")}</th>
                      <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">{t("madinahAirportToHotels.tableFare")}</th>
                      <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">{t("madinahAirportToHotels.tableDescription")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">{t("madinahAirportToHotels.vehicleSedan")}</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">170 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">{t("madinahAirportToHotels.descSedan")}</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">{t("madinahAirportToHotels.vehicleStaria")}</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">200 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">{t("madinahAirportToHotels.descStaria")}</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">{t("madinahAirportToHotels.vehicleHiRoof")}</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">250 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">{t("madinahAirportToHotels.descHiRoof")}</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">{t("madinahAirportToHotels.vehicleGmc")}</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">350 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">{t("madinahAirportToHotels.descGmc")}</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">{t("madinahAirportToHotels.vehicleCoaster")}</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">370 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">{t("madinahAirportToHotels.descCoaster")}</td>
                    </tr>
                    <tr className="hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">{t("madinahAirportToHotels.vehicleBus")}</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">600 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">{t("madinahAirportToHotels.descBus")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">{t("madinahAirportToHotels.busPricingTitle")}</h3>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-4">
                  {t("madinahAirportToHotels.busPricingP1")}
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                  {t("madinahAirportToHotels.busPricingP2")}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("madinahAirportToHotels.fleetEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("madinahAirportToHotels.fleetTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title={tm<string>("fleet.names.0", "Sedan")}
                  description={t("madinahAirportToHotels.fleetSedanDesc")}
                  imageUrl="/images/fleet/sedan.webp"
                />
                <Card
                  title={tm<string>("fleet.names.1", "Luxury GMC")}
                  description={t("madinahAirportToHotels.fleetGmcDesc")}
                  imageUrl="/images/fleet/luxury-gmc.png"
                />
                <Card
                  title={tm<string>("fleet.names.2", "Mini Van")}
                  description={t("madinahAirportToHotels.fleetStariaDesc")}
                  imageUrl="/images/fleet/minivan.webp"
                />
                <Card
                  title={tm<string>("fleet.names.3", "Hiace Microbus")}
                  description={t("madinahAirportToHotels.fleetHiRoofDesc")}
                  imageUrl="/images/fleet/hiace-microbus.png"
                />
                <Card
                  title={tm<string>("fleet.names.4", "Coaster")}
                  description={t("madinahAirportToHotels.fleetCoasterDesc")}
                  imageUrl="/images/fleet/coaster.png"
                />
                <Card
                  title={tm<string>("fleet.names.5", "Bus")}
                  description={t("madinahAirportToHotels.fleetBusDesc")}
                  imageUrl="/images/fleet/bus.png"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">{t("madinahAirportToHotels.faqsEyebrow")}</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{t("madinahAirportToHotels.faqsTitle")}</h2>
              </div>

              <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                <FAQItem
                  question={t("madinahAirportToHotels.faq1Q")}
                  answer={t("madinahAirportToHotels.faq1A")}
                />
                <FAQItem
                  question={t("madinahAirportToHotels.faq2Q")}
                  answer={t("madinahAirportToHotels.faq2A")}
                />
                <FAQItem
                  question={t("madinahAirportToHotels.faq3Q")}
                  answer={t("madinahAirportToHotels.faq3A")}
                />
                <FAQItem
                  question={t("madinahAirportToHotels.faq4Q")}
                  answer={t("madinahAirportToHotels.faq4A")}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-6 py-24 pb-32">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">{t("madinahAirportToHotels.ctaTitle")}</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  {t("madinahAirportToHotels.ctaText")}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://wa.me/966598401594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--green)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <WhatsAppIcon size={24} />
                    {t("madinahAirportToHotels.ctaWhatsAppBtn")}
                  </a>
                  <a
                    href="tel:+966598401594"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--gold)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <Phone size={24} />
                    {t("madinahAirportToHotels.ctaCallBtn")}
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
