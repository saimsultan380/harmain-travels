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

function ImagePlaceholder({ label, imageUrl }: { label: string; imageUrl?: string }) {
  if (imageUrl) {
    return (
      <div className="rounded-[32px] border-2 border-[var(--border)] bg-[var(--bg)] p-2 shadow-sm overflow-hidden">
        <div className="aspect-video rounded-[28px] overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={label}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
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
  imageLabel,
  imageUrl,
}: {
  title: string;
  description: string;
  imageLabel: string;
  imageUrl?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="mb-5">
        <ImagePlaceholder label={imageLabel} imageUrl={imageUrl} />
      </div>
      <h3 className="text-lg font-heading font-bold text-[var(--text-1)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--text-2)] leading-relaxed font-body">{description}</p>
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

export function MakkahToMadinahClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/makkah-to-madinah.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
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
                  Routes
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Makkah to Madinah Taxi and Fare: <span className="text-[var(--gold)]">Book Haramain Umrah Taxi</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Traveling between the holy cities of Makkah and Madinah is one of the most important journeys for pilgrims and visitors. Haramain Umrah Taxi provides professional and reliable Makkah to Madinah taxi services online that make this sacred trip easier, safer, and more comfortable.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  With just a few clicks, you can book a taxi from Makkah to Madinah in advance and avoid the stress of last-minute arrangements.
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
                  Book Taxi Now
                </a>
                <a
                  href="tel:+966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all shadow-sm"
                >
                  <Phone size={20} />
                  Call Us Direct
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
                  Distance & Travel
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Makkah to Madinah Distance</h2>
                <div className="space-y-4 text-[var(--text-2)] text-lg leading-relaxed font-body">
                  <p>The distance from Makkah to Madinah is approximately 450 kilometers by road. On average, the travel time ranges from four to five hours depending on traffic conditions and chosen vehicle type.</p>
                  <p>Our taxis are designed to provide maximum comfort during this long journey, whether you select a private car, a family van, or a group bus.</p>
                  <p>Many travelers prefer booking a private Makkah to Madinah taxi to avoid delays and unnecessary waiting times. This makes the journey smoother, especially for pilgrims who have a schedule to follow for their Umrah or Ziyarat.</p>
                </div>
              </div>

              <ImagePlaceholder label="Image Placeholder: Makkah to Madinah Route Map" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">How to Book</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">How to Book Makkah to Madinah Private Car?</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  Booking a Makkah to Madinah private car with Haramain Umrah Taxi is quick and convenient. You can reserve your ride online before arriving in Saudi Arabia or book on the spot when you are ready to travel.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  Simply choose your pickup point in Makkah, select your preferred vehicle type, and confirm your booking.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                  Once booked, your driver will arrive at your location on time, assist with luggage, and ensure a smooth transfer to Madinah. With clear pricing and professional support, you do not need to worry about hidden charges or last-minute fare increases.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Our Fleet</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Haramain Umrah Taxi Fleet for Makkah to Madinah</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Private Car (Sedans)"
                  description="Sedans like Camry and Sonata are perfect for small groups, individuals, or couples. Budget-friendly with enough space for luggage."
                  imageLabel="Sedan Car"
                  imageUrl="/images/fleet/sedan.webp"
                />
                <Card
                  title="Staria"
                  description="For families or small groups, the Staria offers more seating capacity, luggage space, and comfort compared to sedans."
                  imageLabel="Staria Van"
                  imageUrl="/images/fleet/minivan.webp"
                />
                <Card
                  title="Bus for Large Groups"
                  description="Buses are available at affordable fares and are suitable for Umrah groups, schools, or family gatherings."
                  imageLabel="Bus"
                  imageUrl="/images/fleet/bus.png"
                />
                <Card
                  title="GMC Yukon"
                  description="Luxury ride with spacious interiors, modern facilities, and powerful drive. Perfect for families and business travelers."
                  imageLabel="GMC Yukon"
                  imageUrl="/images/fleet/luxury-gmc.png"
                />
                <Card
                  title="Coaster"
                  description="Excellent option for medium-sized groups with plenty of seating, air conditioning, and reliable transfers."
                  imageLabel="Coaster"
                  imageUrl="/images/fleet/coaster.jpg"
                />
                <Card
                  title="Hiace or Hiroof"
                  description="Practical choice for groups that need additional space for passengers and luggage. Competitive fares for group travel."
                  imageLabel="Hiace Van"
                  imageUrl="/images/fleet/hiace-microbus.png"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Pricing</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Makkah to Madinah Taxi Fares</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  Understanding the Makkah to Madinah taxi fare is important before booking. At Haramain Umrah Taxi, we provide clear and transparent prices with no hidden charges.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  The cost varies based on the type of vehicle you select. Sedans like Camry and Sonata are budget friendly, while larger vehicles like Staria, GMC Yukon, and Coasters are ideal for groups.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                  By booking in advance, you can secure the best taxi fare from Makkah to Madinah without worrying about last-minute price hikes.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Tips</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">How to Identify Affordable Taxi Service</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Check Fare Structure</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Reputable companies display clear prices online, making it easier to compare options.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Users size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Calculate Per Person Cost</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">A Staria or Coaster may seem expensive but when divided among passengers, cost per head is lower.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Zap size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Book in Advance</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Online booking platforms help you lock the price in advance, saving from fluctuating fares.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <BadgeCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Compare Vehicle Types</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Sedans have lowest fares, while premium SUVs and buses cost more but offer more space.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Travel Insights</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Additional Travel Insights</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6">
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Travel Time</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">On average, it takes about four to five hours by road. Choosing a private car ensures minimal delays.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6">
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Best Option for Pilgrims</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Private sedans are best for individuals and couples, while Staria, GMC, and Coasters suit families and groups.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6">
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Advance Booking Benefits</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Booking your taxi online ensures guaranteed availability and confirmed pricing.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6">
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Affordable Alternatives</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Shared taxis and buses are available for budget travelers.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6">
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Comfort Considerations</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">For long journeys, larger vehicles like Staria or GMC Yukon provide more space and comfort.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6">
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Alternative Transport</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">You can also use inter-city buses, shared transportation, or the Haramain High-Speed Railway train.</p>
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
                  question="Should I tip my taxi driver in Saudi Arabia?"
                  answer="Tipping in Saudi Arabia is not required, but it's a good gesture if the service is excellent. A 10-20 SAR tip is generous if your driver helped with luggage or offered exceptional care on your trip. Our Haramain Umrah Taxi drivers are polite and professional. Tips are entirely up to you, but they're always appreciated when you feel the service was more than you expected."
                />
                <FAQItem
                  question="How much does a taxi cost from Madinah Airport to Masjid Nabawi?"
                  answer="A Madinah Airport to Masjid Nabawi (Prophet's Mosque) taxi fare ranges from 170 SAR for a Camry/Sonata sedan to 600 SAR for a 50-seater bus, according to your choice of vehicle. The distance is not too long, so it is a fast and efficient ride for pilgrims. Our fixed rate guarantees clear pricing, professional chauffeurs, and luggage-carrying support."
                />
                <FAQItem
                  question="How much is a private car from Madinah to Makkah?"
                  answer="A private car from Madinah to Makkah ranges from 380 SAR for a sedan to 1000 SAR for a large bus, based on your group size and comfort requirements. The journey covers approximately 450 kilometers and our fixed rates include experienced drivers, fuel, and toll charges. Booking a private taxi with Haramain Umrah Taxi ensures a comfortable, direct journey between the two holy cities with flexible departure times."
                />
                <FAQItem
                  question="Are there any other ways to travel from Makkah to Madinah?"
                  answer="Yes, you can travel between Makkah and Madinah using several alternatives, including inter-city buses, shared transportation, or the Haramain High-Speed Railway train. Buses and trains offer budget-friendly options but follow fixed schedules and make multiple stops. Private taxi services like Haramain Taxi Service provide door-to-door convenience with flexible timings and direct routes. This makes taxis ideal for families, elderly pilgrims, or those with tight schedules during their Umrah journey."
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Book Your Makkah to Madinah Taxi Today</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Traveling from Makkah to Madinah is a sacred and memorable journey. Choose Haramain Umrah Taxi for comfort, affordability, and reliability. Book now and travel with complete peace of mind!
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
