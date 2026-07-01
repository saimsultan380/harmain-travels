"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const taxiServices = [
  {
    title: "Umrah and Hajj Transport",
    description: "Haramain Umrah Taxi provides Umrah and Hajj transport in the holy cities of Makkah and Madinah where millions of pilgrims are attracted every year.",
    image: "/images/umrah-taxi-services.png",
    href: "/umrah-taxi-services/",
  },
  {
    title: "Airport Transfer Services",
    description: "We offer the best and hassle-free hotel transfer services from Jeddah and Madinah airport. Reach safely at your destination with our premium airport transfer service.",
    image: "/images/airport-taxi-services.png",
    href: "/airport-taxi-services/",
  },
  {
    title: "Family Taxi Services",
    description: "In Saudi Arabia and nearby cities you can book Haramain Umrah Taxi's Family taxi services in reasonable prices.",
    image: "/images/Family, Group and Event Travel.jpg",
    href: "/private-taxi-services/",
  },
  {
    title: "Ziyarat Services",
    description: "We offer Ziyarat taxi services across the holy cities of Makkah, Madinah and extend it to Badar and Taif. As the best taxi service in KSA, our top priority is customer's satisfaction.",
    image: "/images/Ziyarat Tours (Makkah, Madinah, Taif, Jeddah, Badar, AlUla).jpg",
    href: "/umrah-taxi-services/",
  },
  {
    title: "Groups Taxi Services",
    description: "Haramain Umrah Taxi provides the best taxi transport services to large groups, schools, colleges, universities, tourists and umrah groups in Saudia.",
    image: "/images/Group  Bus Bookings.jpg",
    href: "/airport-taxi-services/",
  },
  {
    title: "Special Events Taxi Services",
    description: "For Special Events like weddings, picnics, tours, umrah and parties you can take the best taxi services in Saudi Arabia from Haramain Umrah Taxi.",
    image: "/images/eid-ul-fitr-taxi-services-in-makkah-madinah-saudi-arabia.png",
    href: "/private-taxi-services/",
  },
  {
    title: "Private Taxi Services",
    description: "Our private taxi service is specialized for visitors and pilgrims to visit any part of Saudi Arabia comfortably. This service includes our variety of fleet and their customized packages.",
    image: "/images/Private Taxi and VIP Services.jpg",
    href: "/private-taxi-services/",
  },
  {
    title: "Hotel Transfer Services",
    description: "Utilize our hotel transfer services in Makkah, Madinah and Jeddah with a variety of fleets. Be it a hotel to hotel, airport to hotel or hotel to airport transfer.",
    image: "/images/hotel-transfers-taxi.png",
    href: "/hotel-transfers-taxi/",
  },
];

const otherServices = [
  {
    title: "Damm Services",
    description: "Haramain Umrah Taxi provides Umrah and Hajj transport in the holy cities of Makkah and Madinah where millions of pilgrims are attracted every year.",
    image: "/images/Damm.jpg",
    href: "/damm-services/",
  },
  {
    title: "Qurbani Services",
    description: "We offer the best and hassle-free hotel transfer services from Jeddah and Madinah airport. Reach safely at your destination with our premium airport transfer service.",
    image: "/images/Qurbani Services.jpg",
    href: "/qurbani-services/",
  },
  {
    title: "Hajj and Umrah Badal",
    description: "We offer Ziyarat taxi services across the holy cities of Makkah, Madinah and extend it to Badar and Taif. As the best taxi service in KSA, our top priority is customer's satisfaction.",
    image: "/images/Umrah and Hajj Badal.jpg",
    href: "/hajj-and-umrah-badal/",
  },
  {
    title: "Fidyah and Kaffarah",
    description: "Haramain Umrah Taxi provides the best taxi transport services to large groups, schools, colleges, universities, tourists and umrah groups in Saudia.",
    image: "/images/fidyah-and-kaffarah.jpeg",
    href: "/fidyah-and-kaffarah/",
  },
  {
    title: "Quran Waqf Services",
    description: "In Saudi Arabia and nearby cities you can book Haramain Umrah Taxi's Family taxi services in reasonable prices.",
    image: "/images/Quran Waqaf.jpg",
    href: "/quran-waqf-services/",
  },
  {
    title: "Umrah Guide Services",
    description: "We offer the best and hassle-free hotel transfer services from Jeddah and Madinah airport. Reach safely at your destination with our premium airport transfer service.",
    image: "/images/Umrah guide.jpg",
    href: "/umrah-guider-services/",
  },
  {
    title: "Water Distribution Services",
    description: "Our private taxi service is specialized for visitors and pilgrims to visit any part of Saudi Arabia comfortably. This service includes our variety of fleet and their customized packages.",
    image: "/images/water-distribution-services.jpeg",
    href: "/water-distribution-services/",
  },
  {
    title: "Food Package Distribution",
    description: "Utilize our hotel transfer services in Makkah, Madinah and Jeddah with a variety of fleets. Be it a hotel to hotel, airport to hotel or hotel to airport transfer.",
    image: "/images/Food Package Distribution.jpg",
    href: "/food-package-distribution/",
  },
  {
    title: "Dates Distribution Services",
    description: "For Special Events like weddings, picnics, tours, umrah and parties you can take the best taxi services in Saudi Arabia from Haramain Umrah Taxi.",
    image: "/images/dates-distribution-services.jpeg",
    href: "/dates-distribution-services/",
  },
];

function ServiceCard({ service, index, learnMore }: { service: typeof taxiServices[0]; index: number; learnMore: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative h-[280px] rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      </div>

      {/* Default state: title at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5 transition-all duration-300 group-hover:opacity-0">
        <h3 className="text-[18px] font-heading font-extrabold leading-tight" style={{ color: '#ffffff' }}>
          {service.title}
        </h3>
      </div>

      {/* Hover state: full overlay with description */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60">
        <h3 className="text-[17px] font-heading font-extrabold mb-2 leading-tight" style={{ color: '#ffffff' }}>
          {service.title}
        </h3>
        <p className="text-white/85 font-body text-[13px] leading-relaxed mb-4 line-clamp-3">
          {service.description}
        </p>
        <Link
          href={service.href}
          className="inline-flex items-center gap-1.5 text-[var(--gold)] font-body font-semibold text-[12px] border border-[var(--gold)] px-3.5 py-1.5 rounded-lg hover:bg-[var(--gold)] hover:text-white transition-colors self-start"
        >
          {learnMore} <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
}

export function OurServicesClient() {
  const { t, tm } = useI18n();

  const p = tm<Record<string, any>>("ourServicesPage", {});

  const heroTitle       = p.heroTitle       ?? "Our Taxi Services";
  const heroSubtitle    = p.heroSubtitle    ?? "Haramain Umrah Taxi provides comprehensive transportation and pilgrimage support services across Saudi Arabia — from airport transfers to Ziyarat tours, and from Damm services to food distribution.";
  const heroBadge       = p.heroBadge       ?? "Our Services";
  const heroBookBtn     = p.heroBookBtn     ?? "Book on WhatsApp";
  const heroPricingBtn  = p.heroPricingBtn  ?? "View Pricing";
  const taxiTitle       = p.taxiTitle       ?? "Our Taxi Services";
  const taxiDesc        = p.taxiDesc        ?? "Reliable, comfortable, and affordable taxi services for pilgrims, families, and groups across Saudi Arabia.";
  const otherTitle      = p.otherTitle      ?? "Our Other Services";
  const otherDesc       = p.otherDesc       ?? "Beyond transportation, we offer a range of Islamic and charitable services to support pilgrims and the community.";
  const learnMore       = p.learnMore       ?? t("common.learnMore");

  // Merge translated titles/descriptions with static image/href data
  const taxiTitles: string[]       = p.taxiTitles       ?? [];
  const taxiDescs: string[]        = p.taxiDescs        ?? [];
  const otherTitles: string[]      = p.otherTitles      ?? [];
  const otherDescs: string[]       = p.otherDescs       ?? [];

  const taxiServicesData = taxiServices.map((s, i) => ({
    ...s,
    title:       taxiTitles[i]  ?? s.title,
    description: taxiDescs[i]   ?? s.description,
  }));

  const otherServicesData = otherServices.map((s, i) => ({
    ...s,
    title:       otherTitles[i] ?? s.title,
    description: otherDescs[i]  ?? s.description,
  }));

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">

        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[70vh]">
          <div className="absolute inset-0 bg-[url('/images/airport-taxi-services.png')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/85 z-10" />
          <IslamicGeometricBg className="opacity-10 dark:opacity-20" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="inline-block mb-6">
                <span className="px-4 py-1.5 rounded-full bg-[var(--gold)] text-white font-heading font-bold text-xs uppercase tracking-widest shadow-lg shadow-[var(--gold)]/20">
                  {heroBadge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-6 leading-tight"
              >
                {heroTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-white/85 leading-relaxed font-body max-w-3xl mx-auto mb-10"
              >
                {heroSubtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="https://wa.me/966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--green)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all"
                >
                  <WhatsAppIcon className="text-white" />
                  {heroBookBtn}
                </a>
                <Link
                  href="/our-taxi-services-pricing/"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all"
                >
                  {heroPricingBtn}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        {/* Our Taxi Services */}
        <AnimatedSection className="py-24 bg-[var(--bg)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
                Taxi Services
              </span>
              <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
                {taxiTitle}
              </h2>
              <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto">
                {taxiDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {taxiServicesData.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} learnMore={learnMore} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Our Other Services */}
        <AnimatedSection className="py-24 bg-[var(--bg-alt)] border-t border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
                Other Services
              </span>
              <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
                {otherTitle}
              </h2>
              <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto">
                {otherDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {otherServicesData.map((service, i) => (
                <ServiceCard key={i} service={service} index={i} learnMore={learnMore} />
              ))}
            </div>
          </div>
        </AnimatedSection>

      </main>
      <Footer />
    </>
  );
}