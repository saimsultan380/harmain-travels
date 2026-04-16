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
        "We provide professional, licensed drivers for the best taxi services in Saudi Arabia.",
      ),
    },
    {
      icon: Tag,
      title: tm<string>("why.features.1.title", "Fixed Pricing"),
      desc: tm<string>(
        "why.features.1.desc",
        "We guarantee clear rates for Makkah taxi services, Madinah taxi services, Umrah taxi services, Ziyarat, and other mentioned services.",
      ),
    },
    {
      icon: Clock,
      title: tm<string>("why.features.2.title", "24/7 Availability"),
      desc: tm<string>(
        "why.features.2.desc",
        "We run round-the-clock Umrah taxi services in Makkah and Ziyarat taxi services in Makkah and Madinah, Saudia Arab.",
      ),
    },
    {
      icon: Car,
      title: tm<string>("why.features.3.title", "Modern Fleet"),
      desc: tm<string>(
        "why.features.3.desc",
        "We offer reliable cars like Sedans (Camry & Sonata), Hyundai Staria, GMC Yukon XL, and Hiace Hi-roof taxis for Umrah, Ziyarat and other taxi services in Saudi Arabia.",
      ),
    },
    {
      icon: MessageCircle,
      title: tm<string>("why.features.4.title", "Multilingual Support"),
      desc: tm<string>(
        "why.features.4.desc",
        "Our drivers speak and understand multiple languages and assist foreign pilgrims.",
      ),
    },
    {
      icon: Heart,
      title: tm<string>("why.features.5.title", "Women & Family Friendly"),
      desc: tm<string>(
        "why.features.5.desc",
        "We ensure safe, private, women-friendly Umrah taxi services, private and personal taxi services in Makkah, Jeddah and Madinah.",
      ),
    },
  ];

  return (
    <AnimatedSection
      id="why-choose-us"
      className="pt-12 pb-24 md:py-24 bg-[var(--bg)] border-t border-[var(--border)]"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Makkah Service Highlight Card */}
        <div className="mb-32 bg-[var(--bg-alt)] border border-[var(--border)] rounded-[28px] md:rounded-[40px] px-[6px] py-5 sm:p-8 md:p-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative h-[250px] sm:h-[320px] md:h-[420px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] order-2 lg:order-1 shadow-lg">
              <Image
                src="/images/umrah-taxi-makkah.jpg"
                alt="Umrah Taxi Services in Makkah"
                fill
                sizes="(max-width: 640px) calc(100vw - 12px), (max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
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
                  {tm<string[]>("common.cityList", [
                    "Makkah",
                    "Madinah",
                    "Jeddah",
                    "Riyadh",
                  ]).map((city) => (
                    <li
                      key={city}
                      className="flex items-center gap-3 text-[var(--text-2)] font-body text-lg"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--green)]" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
            {t("why.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
            {t("why.title")}
          </h2>
          <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto">
            {t("why.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:gap-12 items-start">
          {/* Features */}
          <div className="order-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-4 min-h-[140px] md:min-h-[160px] shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 select-none font-  text-5xl md:text-6xl font-extrabold text-[var(--text-1)]/[0.05] ${
                    i % 2 === 0 ? "right-2" : "left-2"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10 w-12 h-12 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                  <feature.icon size={24} className="text-[var(--green)]" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-2)] font-body">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
