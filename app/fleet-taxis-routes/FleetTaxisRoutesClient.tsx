"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { fleet } from "@/lib/data/fleet";
import { useMouseTilt } from "@/lib/hooks/useMouseTilt";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Users, Briefcase, MapPin, Clock, Shield, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const featureIcons = [Shield, Clock, Star, MapPin];

export function FleetTaxisRoutesClient() {
  const { t, tm } = useI18n();
  const p = tm<Record<string, any>>("fleetRoutesPage", {});

  const heroBadge      = p.heroBadge      ?? "Our Fleet & Routes";
  const heroTitle      = p.heroTitle      ?? "Haramain Umrah Taxi's Fleet and Routes";
  const heroSubtitle   = p.heroSubtitle   ?? "Saudi Arabia's No.1 Umrah and Ziyarat Taxi Service";
  const heroText       = p.heroText       ?? "Traveling for Umrah, Ziyarat, and intercity transfers requires a reliable, comfortable, and spacious taxi service. Haramain Umrah Taxi provides the best transport solutions with a modern fleet and extensive routes across Saudi Arabia. Unlike competitors that lack well-maintained vehicles or transparent pricing, we offer luxurious, air-conditioned taxis with professional drivers and affordable fixed fares.";
  const heroBookBtn    = p.heroBookBtn    ?? t("common.bookOnWhatsApp");
  const heroBookNow    = p.heroBookNow    ?? t("common.bookNow");

  const fleetEyebrow   = p.fleetEyebrow   ?? t("fleet.eyebrow");
  const fleetTitle     = p.fleetTitle     ?? t("fleet.title");
  const fleetDesc      = p.fleetDesc      ?? "We provide reliable, air-conditioned cars, vans, and buses for every journey. Our best taxi services in Saudi Arabia ensure comfort, luggage space, and affordable fares for Umrah, Makkah, Madinah, and Ziyarat travel.";
  const fromSar        = p.fromSar        ?? t("common.fromSar");
  const passengers     = p.passengers     ?? t("common.passengers");
  const luggages       = p.luggages       ?? t("common.luggages");
  const whatsappBtn    = p.whatsappBtn    ?? t("common.whatsapp");
  const bookNowBtn     = p.bookNowBtn     ?? t("common.bookNow");

  const diverseTitle   = p.diverseTitle   ?? "Diverse Fleet for Every Travel Need";
  const diverseDesc    = p.diverseDesc    ?? "Our fleet includes Toyota Camry, Sonata, GMC, Staria 7-Seater, HiRoof, Coaster (18-Seater), and 50-Seater Buses, ensuring a perfect vehicle for every travel requirement. Whether you're booking an Umrah taxi in Makkah, a Ziyarat taxi in Madinah, or an airport transfer taxi in Jeddah, we guarantee smooth and stress-free transportation.";

  const featureTitles: string[]  = p.featureTitles  ?? ["Licensed & Insured", "24/7 Availability", "Professional Drivers", "Fixed Pricing"];
  const featureDescs: string[]   = p.featureDescs   ?? [
    "All our vehicles are fully licensed and insured for your safety",
    "Round-the-clock service for all your transportation needs",
    "Experienced, courteous drivers who know the routes well",
    "Transparent, fixed fares with no hidden charges",
  ];

  const routesEyebrow  = p.routesEyebrow  ?? "Our Routes";
  const routesTitle1   = p.routesTitle1   ?? "Extensive Routes Covering";
  const routesTitle2   = p.routesTitle2   ?? "Major Pilgrimage Destinations";
  const routesDesc     = p.routesDesc     ?? "We operate key routes including Makkah to Madinah, Jeddah to Makkah, and airport transfers. Our dedicated Ziyarat services cover historical Islamic landmarks in both holy cities. With 24/7 availability, fixed pricing, and professional drivers, we're Saudi Arabia's top choice for Hajj and Umrah transportation.";
  const routesList: string[] = p.routesList ?? [
    "Makkah to Madinah",
    "Jeddah to Makkah",
    "Madinah to Taif",
    "Makkah to Jeddah",
    "Jeddah Airport to Hotels",
    "Madinah Airport to Hotels",
    "Ziyarat Tours in Makkah",
    "Ziyarat Tours in Madinah",
  ];

  // Fleet names/descriptions from i18n (same as homepage Fleet section)
  const fleetNames: string[]        = tm("fleet.names", []);
  const fleetDescriptions: string[] = tm("fleet.descriptions", []);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/airport-taxi-services.png')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/85 z-10" />
          <IslamicGeometricBg className="opacity-10 dark:opacity-20" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="inline-block mb-6">
                <span className="px-4 py-1.5 rounded-full bg-[var(--gold)] text-white font-heading font-bold text-xs uppercase tracking-widest shadow-lg shadow-[var(--gold)]/20">
                  {heroBadge}
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight">
                {heroTitle}
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-3xl mx-auto mb-4">
                <p className="text-xl md:text-2xl text-white/90 font-body font-semibold mb-6">{heroSubtitle}</p>
                <p className="text-lg text-white/80 leading-relaxed font-body">{heroText}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mt-10">
                <a href="https://wa.me/966598401594" className="flex items-center gap-2 px-8 py-4 bg-[var(--green)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all border border-[var(--green)]/20">
                  <WhatsAppIcon />
                  {heroBookBtn}
                </a>
                <Link href="/book-now/" className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all">
                  {heroBookNow}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        {/* Fleet Section */}
        <AnimatedSection className="py-24 bg-[var(--bg)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
                {fleetEyebrow}
              </span>
              <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
                {fleetTitle}
              </h2>
              <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto">{fleetDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fleet.map((vehicle, i) => {
                const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useMouseTilt();
                const isEven = i % 2 === 0;
                const name = fleetNames[i] ?? vehicle.name;
                const desc = fleetDescriptions[i] ?? vehicle.description;

                return (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  >
                    <div className="h-[250px] w-full mb-6 flex items-center justify-center bg-[var(--bg-alt)] rounded-xl overflow-hidden relative">
                      <Image src={vehicle.image} alt={name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-2 drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-1">{name}</h3>
                    <p className="text-[var(--text-2)] font-body text-sm mb-4 line-clamp-2">{desc}</p>

                    <div className="text-[var(--gold)] font-heading font-extrabold text-xl mb-6">
                      {fromSar} {vehicle.price}
                    </div>

                    <div className="flex items-center gap-6 mb-8 mt-auto">
                      <div className="flex items-center gap-2 text-[var(--text-2)] font-body">
                        <Users size={18} className="text-[var(--green)]" />
                        <span>{vehicle.passengers} {passengers}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--text-2)] font-body">
                        <Briefcase size={18} className="text-[var(--green)]" />
                        <span>{vehicle.luggage} {luggages}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <a href="https://wa.me/966598401594" target="_blank" rel="noopener noreferrer" className="flex-[1.2] flex items-center justify-center gap-2 py-3 bg-[var(--green)] text-white font-body font-semibold rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all shadow-sm">
                        <WhatsAppIcon className="text-white" />
                        {whatsappBtn}
                      </a>
                      <a href="/book-now/" className="flex-1 flex items-center justify-center py-3 border-2 border-[var(--green)] text-[var(--green)] font-body font-semibold rounded-lg hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white transition-all">
                        {bookNowBtn}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Fleet Diversity Section */}
        <AnimatedSection className="py-24 bg-[var(--bg-alt)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-6">{diverseTitle}</h2>
              <p className="text-[var(--text-2)] font-body text-lg max-w-4xl mx-auto leading-relaxed">{diverseDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureIcons.map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[var(--green)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-2">{featureTitles[i]}</h3>
                  <p className="text-[var(--text-2)] font-body">{featureDescs[i]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Routes Section */}
        <AnimatedSection className="py-24 bg-[var(--bg)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
                {routesEyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-6">
                {routesTitle1}<br />{routesTitle2}
              </h2>
              <p className="text-[var(--text-2)] font-body text-lg max-w-4xl mx-auto leading-relaxed">{routesDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {routesList.map((route, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-[var(--green-soft)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin size={24} className="text-[var(--green)]" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-[var(--text-1)]">{route}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </main>
      <Footer />
    </>
  );
}
