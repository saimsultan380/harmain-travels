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

export function GMCYukonXLClient() {
  const umrahMiqatRoutes = [
    { route: "Makkah Hotel to Ayesha Miqat Mosque (Umrah)", fare: "250 SAR" },
    { route: "Makkah Hotel to Masjid Jaranah Miqat (Umrah)", fare: "400 SAR" },
  ];

  const ziyaratRoutes = [
    { route: "Makkah Ziyarat + Jaranah Miqat", fare: "400 SAR" },
    { route: "Madinah Ziyarat", fare: "300 SAR" },
    { route: "Madinah Ziyarat & Wadi-e-Jinn", fare: "400 SAR" },
    { route: "Madinah to Badr Ziyarat & Back", fare: "750 SAR" },
    { route: "Makkah to Taif Pilgrimage & Back", fare: "750 SAR" },
  ];

  const airportTrainRoutes = [
    { route: "Jeddah to Makkah", fare: "450 SAR" },
    { route: "Makkah to Jeddah", fare: "400 SAR" },
    { route: "Madinah Airport to Madinah Hotel", fare: "350 SAR" },
    { route: "Madinah Hotel to Madinah Airport", fare: "300 SAR" },
    { route: "Makkah Train Station to Hotel", fare: "230 SAR" },
    { route: "Madinah Train Station to Hotel", fare: "230 SAR" },
  ];

  const intercityRoutes = [
    { route: "Makkah to Madinah", fare: "830 SAR" },
    { route: "Jeddah to Madinah", fare: "830 SAR" },
    { route: "Madinah to Jeddah", fare: "830 SAR" },
    { route: "Makkah to Madinah via Badr", fare: "1000 SAR" },
    { route: "Madinah to Makkah via Badr", fare: "1000 SAR" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
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
                  Our Fleet
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Reserve Private GMC Taxi in KSA | <span className="text-[var(--gold)]">GMC Ziyarat & Umrah Taxi</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  For those traveling to Saudi Arabia for Umrah, Ziyarat, or a vacation, choosing the right transportation is essential for a smooth and comfortable journey.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Designed for families and groups, the GMC Yukon XL combines advanced safety features with premium comfort, making it ideal for long-distance travel across the Kingdom's religious, historical, and cultural landmarks.
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
                  Reserve GMC Taxi
                </a>
                <a
                  href="tel:+966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all shadow-sm"
                >
                  <Phone size={20} />
                  Call Us Now
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
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">GMC Yukon XL Taxi Service in Saudi Arabia</h2>
                <ul className="space-y-4 text-[var(--text-2)] text-lg leading-relaxed font-body">
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />GMC XL Umrah Taxi Service</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />GMC XL Ziyarat Taxi Service</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />GMC XL Private Taxi Service</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />GMC XL Airport Transfers</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />Tourism & Recreation</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-1" size={20} />GMC XL City-to-City Transfers</li>
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
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Specialties</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Specialties of the GMC Yukon XL Taxi</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Spacious & Comfort"
                  description="Ideal for families or large parties with extra legroom & luggage allowance."
                  icon={Users}
                />
                <Card
                  title="Luxury Features"
                  description="Premium leather upholstery, air conditioning control, and cutting-edge entertainment."
                  icon={Star}
                />
                <Card
                  title="Powerful Performance"
                  description="Equipped with a strong engine for a smooth, powerful ride through Saudi Arabia."
                  icon={Zap}
                />
                <Card
                  title="Safety & Security"
                  description="Outfitted with advanced safety features such as airbags, lane support, and stability control."
                  icon={ShieldCheck}
                />
                <Card
                  title="Professional Drivers"
                  description="Experienced, courteous, and well-trained drivers ensure a stress-free journey."
                  icon={BadgeCheck}
                />
                <Card
                  title="Smooth & Quiet Ride"
                  description="Noise insulation ensures a serene traveling experience even on long distances."
                  icon={Car}
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
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Popular Routes & GMC Yukon XL Taxi Fare in KSA</h2>
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
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Why Select our GMC Yukon XL Taxi in Saudi Arabia?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Users size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Ultimate Comfort & Abundant Seating Space</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Ideal for long-haul flights with extra luggage space.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <BadgeCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Highly Skilled Drivers</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Our drivers have been well-trained to drive safely and effectively.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Transparent & Cost-Effective Prices</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">No hidden fees, with budget prices for traveling in luxury.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Zap size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">24/7 Availability</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Our 24/7 GMC Yukon XL taxi service is available 24/7.</p>
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
                  question="What is the difference between a regular taxi and a GMC Yukon XL?"
                  answer="The GMC Yukon XL offers luxury features that many taxis lack. It features premium leather seats, advanced air conditioning, and an entertainment system. You also get more legroom and luggage space for your family or group."
                />
                <FAQItem
                  question="Is the GMC Yukon XL good for long-distance trips?"
                  answer="Yes, the GMC Yukon XL is perfect for long-distance travel. It has a powerful engine for smooth highway driving. The noise insulation keeps the ride quiet and peaceful. Passengers enjoy maximum comfort even on trips from Makkah to Madinah."
                />
                <FAQItem
                  question="What luxury features does the GMC Yukon XL include?"
                  answer="The GMC Yukon XL comes with premium leather seats and climate control. It offers advanced entertainment systems for passenger comfort. Safety features include multiple airbags, lane assistance, and stability control. With spacious interior seating, families can comfortably travel with extra luggage."
                />
                <FAQItem
                  question="How much does it cost to travel from Makkah to Madinah in a GMC Yukon XL?"
                  answer="The direct trip from Makkah to Madinah costs 830 SAR. If you want to visit Badr during the journey, the fare is 1000 SAR. These are fixed rates with no extra charges."
                />
                <FAQItem
                  question="Is the GMC Yukon XL suitable for the elderly or children?"
                  answer="Yes, the GMC Yukon XL is ideal for elderly passengers and families. The vehicle has easy entry and exit with spacious doors. Comfortable seats and smooth suspension reduce travel fatigue. Our experienced drivers ensure safe, careful driving throughout your journey."
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Book Your GMC Yukon XL Taxi Today</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Experience the peak of convenience and relaxation with our GMC Yukon XL taxi in Makkah, Madinah, and Jeddah. Book now and enjoy a hassle-free ride!
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
