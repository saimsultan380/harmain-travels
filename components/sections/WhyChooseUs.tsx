"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Tag,
  Clock,
  Car,
  MessageCircle,
  Heart,
} from "lucide-react";
import Image from "next/image";

export function WhyChooseUs() {
  const { t, tm } = useI18n();

  const features = [
    {
      icon: ShieldCheck,
      title: tm<string>("why.features.0.title", "Licensed Drivers"),
      desc: tm<string>(
        "why.features.0.desc",
        "We provide professional, licensed drivers for the best taxi services in Saudi Arabia."
      ),
      accent: "var(--green)",
    },
    {
      icon: Tag,
      title: tm<string>("why.features.1.title", "Fixed Pricing"),
      desc: tm<string>(
        "why.features.1.desc",
        "We guarantee clear rates for Makkah taxi services, Madinah taxi services, Umrah taxi services, Ziyarat, and other mentioned services."
      ),
      accent: "var(--gold)",
    },
    {
      icon: Clock,
      title: tm<string>("why.features.2.title", "24/7 Availability"),
      desc: tm<string>(
        "why.features.2.desc",
        "We run round-the-clock Umrah taxi services in Makkah and Ziyarat taxi services in Makkah and Madinah, Saudia Arab."
      ),
      accent: "var(--green)",
    },
    {
      icon: Car,
      title: tm<string>("why.features.3.title", "Modern Fleet"),
      desc: tm<string>(
        "why.features.3.desc",
        "We offer reliable cars like Sedans (Camry & Sonata), Hyundai Staria, GMC Yukon XL, and Hiace Hi-roof taxis for Umrah, Ziyarat and other taxi services in Saudi Arabia."
      ),
      accent: "var(--gold)",
    },
    {
      icon: MessageCircle,
      title: tm<string>("why.features.4.title", "Multilingual Support"),
      desc: tm<string>(
        "why.features.4.desc",
        "Our drivers speak and understand multiple languages and assist foreign pilgrims."
      ),
      accent: "var(--green)",
    },
    {
      icon: Heart,
      title: tm<string>("why.features.5.title", "Women & Family Friendly"),
      desc: tm<string>(
        "why.features.5.desc",
        "We ensure safe, private, women-friendly Umrah taxi services, private and personal taxi services in Makkah, Jeddah and Madinah."
      ),
      accent: "var(--gold)",
    },
  ];

  return (
    <>
      {/* ── Makkah Service Highlight — light bg ── */}
      <AnimatedSection
        id="why-choose-us"
        className="pt-12 pb-24 md:py-24 bg-[var(--bg)] border-t border-[var(--border)]"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-[28px] md:rounded-[40px] px-[6px] py-5 sm:p-8 md:p-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="relative h-[250px] sm:h-[320px] md:h-[420px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] order-2 lg:order-1 shadow-lg">
                <Image
                  src="/images/Umrah Taxi Services in Makkah 1.png"
                  alt="Umrah Taxi Services in Makkah"
                  fill
                  sizes="(max-width: 640px) calc(100vw - 12px), (max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-5">
                  {t("why.eyebrow")}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-8">
                  {t("why.serviceTitle")}
                </h3>
                <div className="space-y-6 mb-10 text-[var(--text-2)] font-body text-lg leading-relaxed">
                  <p>{tm<string>("why.serviceParagraphs.0")}</p>
                  <p>{tm<string>("why.serviceParagraphs.1")}</p>
                </div>
                <div className="bg-[var(--bg-card)] p-8 rounded-3xl border border-[var(--gold-soft)] shadow-sm">
                  <h4 className="font-heading font-bold text-[var(--text-1)] text-xl mb-6">
                    {t("why.serviceLocations")}
                  </h4>
                  <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {tm<string[]>("common.cityList", ["Makkah", "Madinah", "Jeddah", "Riyadh"]).map((city) => (
                      <li key={city} className="flex items-center gap-3 text-[var(--text-2)] font-body text-lg">
                        <div className="w-2.5 h-2.5 rounded-full bg-[var(--green)]" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Why Choose Us — dark bg with image ── */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
              {t("why.eyebrow")}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-4" style={{ color: "#ffffff" }}>
              {t("why.title")}
            </h2>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
              {t("why.description")}
            </p>
          </div>

          {/* Content with image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: Feature list */}
            <div className="flex flex-col justify-between min-h-[800px]">
              <div className="space-y-6">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                    className="group relative flex gap-6 py-6 pl-5 border-b border-white/10 last:border-0"
                  >
                    {/* Hover accent bar */}
                    <div
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: f.accent }}
                    />

                    {/* Number */}
                    <div className="shrink-0">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-[13px]"
                        style={{ border: `2px solid ${f.accent}`, color: f.accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-heading font-bold mb-2" style={{ color: "#ffffff" }}>
                        {f.title}
                      </h3>
                      <p className="text-white/65 font-body text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[800px] rounded-lg overflow-hidden bg-black"
            >
              <Image
                src="/images/why-choose-us.jpg"
                alt="Why Choose Us - Haramain Umrah Taxi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                priority
                onError={(e) => {
                  console.log('Image failed to load:', e);
                  // Fallback to a placeholder or hide the image
                }}
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
