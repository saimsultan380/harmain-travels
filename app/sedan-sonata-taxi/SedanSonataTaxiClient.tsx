"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { Canonical } from "@/components/SEO/Canonical";
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
  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 overflow-x-auto">
      <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6">{title}</h3>
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="text-left py-4 px-4 text-[var(--text-1)] font-heading font-bold">Route</th>
            <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">Fare (SAR)</th>
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

export function SedanSonataTaxiClient() {
  const umrahMiqatRoutes = [
    { route: "Makkah Hotel to Ayesha Miqat Mosque (Umrah)", fare: "150 SAR" },
    { route: "Makkah Hotel to Masjid Jaranah Miqat (Umrah)", fare: "170 SAR" },
  ];

  const ziyaratRoutes = [
    { route: "Makkah Hotel to Ziyarat", fare: "170 SAR" },
    { route: "Makkah Ziyarat + Jaranah Miqat", fare: "220 SAR" },
    { route: "Madinah Ziyarat", fare: "170 SAR" },
    { route: "Madinah Ziyarat + Wadi-e-Jinn", fare: "220 SAR" },
    { route: "Madinah to Badr Ziyarat & Return", fare: "380 SAR" },
    { route: "Makkah to Taif Pilgrimage & Return", fare: "380 SAR" },
  ];

  const airportTrainRoutes = [
    { route: "Jeddah to Makkah", fare: "230 SAR" },
    { route: "Makkah to Jeddah", fare: "200 SAR" },
    { route: "Madinah Airport to Madinah Hotel", fare: "170 SAR" },
    { route: "Madinah Hotel to Madinah Airport", fare: "130 SAR" },
    { route: "Makkah Train Station to Hotel", fare: "120 SAR" },
  ];

  const intercityRoutes = [
    { route: "Makkah to Madinah", fare: "400 SAR" },
    { route: "Jeddah to Madinah", fare: "400 SAR" },
    { route: "Madinah to Jeddah", fare: "400 SAR" },
    { route: "Makkah to Madinah via Badr", fare: "500 SAR" },
    { route: "Madinah to Makkah via Badr", fare: "500 SAR" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/sedan-sonata-taxi.png')] bg-cover bg-center bg-no-repeat z-0" />
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
                  Our Fleet
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Sedan Sonata Private Umrah Taxi or Car & <span className="text-[var(--gold)]">Ziyarat Taxi in KSA</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Saudi Arabia is blessed with two of the world's holiest sites in Islam, Makkah and Madinah. Millions of believers travel every year to perform Umrah and visit religious sites.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Our Hyundai Sonata taxi service ensures a hassle-free traveling experience with a smooth ride, be it from Makkah, Madinah, or even from the international airports.
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
                  Book Sonata Taxi
                </a>
                <a
                  href="tel:+966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all shadow-sm"
                >
                  <Phone size={20} />
                  Call for Special Offers
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
                  Services
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Hyundai Sonata Taxi Service in Saudi Arabia</h2>
                <ul className="space-y-4 text-[var(--text-2)] text-lg leading-relaxed font-body">
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />Hyundai Sonata Umrah taxi in Makkah</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />Hyundai Sonata Ziyarat taxi Service</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />Sedan Private Taxi Service</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />Hyundai Sonata airport taxi in Saudi Arabia</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />City-to-City Transfers</li>
                </ul>
              </div>

              <ImagePlaceholder label="Image Placeholder: Hyundai Sonata Car" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Specialties</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Specialties of the Hyundai Taxi</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Luxury & Convenience"
                  description="Comfortable seating, tasteful interior, and advanced suspension for a smooth ride."
                  icon={Star}
                />
                <Card
                  title="Fuel Efficiency"
                  description="Made for maximum fuel efficiency, which makes traveling economical."
                  icon={Zap}
                />
                <Card
                  title="Advanced Safety Features"
                  description="Equipped with airbags, anti-lock brakes, and stability control."
                  icon={ShieldCheck}
                />
                <Card
                  title="Climate-Controlled Interiors"
                  description="Keep comfortable all the way through with advanced air-conditioning."
                  icon={Car}
                />
                <Card
                  title="Quiet and Calm Ride"
                  description="Noise reduction makes the ride tranquil."
                  icon={Users}
                />
                <Card
                  title="Professional Drivers"
                  description="Our veteran drivers ensure a comfortable and hassle-free ride."
                  icon={BadgeCheck}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Pricing</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Popular Routes and Hyundai Sonata Taxi Fares in KSA</h2>
              </div>

              <div className="space-y-8">
                <PricingTable routes={umrahMiqatRoutes} title="Umrah and Miqat Transfers" />
                <PricingTable routes={ziyaratRoutes} title="Ziyarat Routes" />
                <PricingTable routes={airportTrainRoutes} title="Airport and Train Station Transfers" />
                <PricingTable routes={intercityRoutes} title="Intercity Transfers" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Why Us</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Why Choose Our Hyundai Sonata Taxi in Saudi Arabia?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Star size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Luxury & Spacey Interiors</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Ideal for long flights with extra legroom & relaxation.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <BadgeCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Experienced Drivers</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Our experienced professional drivers ensure comfortable trips.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Low & Transparent Prices</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Transparent fares without any additional fees.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Zap size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">24/7 Availability</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Available door-to-door every hour of every day.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">FAQs</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Frequently Asked Questions</h2>
              </div>

              <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                <FAQItem
                  question="What is the capacity of the Hyundai Sonata taxi?"
                  answer="The Sonata comfortably seats 4 passengers. We provide enough trunk space for your suitcases and bags. Couples and small families choose this option frequently."
                />
                <FAQItem
                  question="How much does a taxi cost from Jeddah Airport to Makkah?"
                  answer="We charge 250 SAR from Jeddah to Makkah. The return trip costs you only 200 SAR. You pay exactly what we quote upfront. We never add hidden fees or surprise charges."
                />
                <FAQItem
                  question="Is the Hyundai Sonata taxi service available 24/7?"
                  answer="Yes, we operate every hour of every day. You can book us for 3 AM airport pickups without any issue. We handle late-night transfers to hotels regularly."
                />
                <FAQItem
                  question="What routes and services does Haramain Umrah Taxi offer with the Hyundai Sonata taxi?"
                  answer="We cover all major pilgrimage routes in Saudi Arabia. Our service includes Umrah trips to Taneem and Jaranah Miqat, Ziyarat tours throughout Makkah and Madinah, airport pickups, train station transfers, and intercity journeys."
                />
                <FAQItem
                  question="Are there luxury taxi options from Makkah to Madinah?"
                  answer="Yes, the Hyundai Sonata is one of the best luxury taxi options from Makkah to Madinah. The Sonata offers significantly more legroom, climate control, and multiple airbags for safety. We deliver premium comfort without charging luxury prices."
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Book Your Hyundai Sonata Taxi Today</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Enjoy hassle-free, smooth transportation with our Hyundai Sonata taxi in Makkah, Madinah, and Jeddah. Book us now and enjoy a hassle-free traveling experience.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://wa.me/966598401594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--green)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <WhatsAppIcon size={24} />
                    Book via WhatsApp Now
                  </a>
                  <a
                    href="tel:+966598401594"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--gold)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <Phone size={24} />
                    Call Us Direct
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
