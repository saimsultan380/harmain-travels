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
  XCircle,
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

export function JeddahAirportToMakkahClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/jeddah-airport-to-makkah.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
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
                Jeddah Airport to Makkah Taxi Services and Fares - <span className="text-[var(--gold)]">Book Now</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Are you tired of being overcharged by taxi drivers at Jeddah Airport? Our transparent Jeddah airport to Makkah taxi services eliminate these common problems. You'll get fixed pricing, professional drivers and guaranteed airport pickups for umrah pilgrims - no surprises, no stress.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Booking your taxi from Jeddah airport to Makkah has never been easier. Our online taxi fare from Jeddah Airport to Makkah provides instant quotes and secure reservations.
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
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Distance from Jeddah Airport to Makkah</h2>
                <div className="space-y-4 text-[var(--text-2)] text-lg leading-relaxed font-body">
                  <p>The distance from Jeddah airport to Makkah is approximately 94.0 kilometers (58.40 miles) through Route 15. This journey typically takes 1 hr 4 min. to 1.5 hours, depending on traffic conditions.</p>
                  <p>However, during peak pilgrimage seasons, such as Hajj and Umrah, travel times can extend to 2 hours. Many taxi drivers take longer routes to increase fares.</p>
                  <p>Our experienced drivers know the fastest and most direct paths from King Abdulaziz International Airport Jeddah, to the Holy City. We use GPS tracking to ensure efficient routes every time.</p>
                </div>
              </div>

              <ImagePlaceholder label="Image Placeholder: Jeddah Airport to Makkah Route" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">How to Book</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Jeddah Airport to Makkah by Car or Private Car - How to Book?</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">1</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Choose Your Vehicle</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Select from our fleet of Sedans (Camry/Sonata), Luxury SUV (GMC), Hiace, or buses based on your group size.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">2</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Set Your Pickup Time</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Provide flight details for precise airport pickup timing.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">3</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Confirm Payment</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Secure your booking with upfront payment - no cash negotiations required.</p>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mt-6">
                  Our car service from Jeddah airport to Makkah includes meet-and-greet service, flight monitoring, and free waiting time. We track your flight status to ensure we're there when you land, even if your flight is delayed.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Pricing</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Jeddah Airport to Makkah Taxi Fares</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-4 px-4 text-[var(--text-1)] font-heading font-bold">Vehicle Type</th>
                      <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">Fare (SAR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Economy Sedan (Camry/Sonata)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">250 SAR</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Staria (7 Seater)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">300 SAR</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Hi-Roof (10 Seater)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">400 SAR</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">GMC</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">450 SAR</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Coaster (18 Seater)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">600 SAR</td>
                    </tr>
                    <tr className="hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Buses (50 Seater)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">950 SAR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Our Fleet</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Haramain Umrah Taxi Fleet for Jeddah Airport to Makkah</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Private Car (Sedans)"
                  description="Our private sedan service offers the perfect solution for couples and small families. Sedan fleet includes reliable Toyota Camry and Hyundai Sonata vehicles."
                  imageLabel="Sedan Car"
                  imageUrl="/images/fleet/sedan.webp"
                />
                <Card
                  title="Camry/Sonata"
                  description="Our premium sedan fleet features reliable Toyota Camry and Hyundai Sonata models. The taxi fare from Jeddah Airport to Makkah for Camry and Sonata is 250 SAR."
                  imageLabel="Sedan Car"
                  imageUrl="/images/fleet/sedan.webp"
                />
                <Card
                  title="Bus for Large Groups"
                  description="Our bus fleet serves large groups with competitive pricing. The Jeddah airport to Makkah bus price starts at 950 SAR for 50 passenger buses."
                  imageLabel="Bus"
                  imageUrl="/images/fleet/bus.png"
                />
                <Card
                  title="GMC Yukon"
                  description="Our luxury GMC Yukon provides premium transport for 6-7 passengers. Priced at 450 SAR, this vehicle offers superior comfort and prestige."
                  imageLabel="GMC Yukon"
                  imageUrl="/images/fleet/luxury-gmc.png"
                />
                <Card
                  title="Coaster"
                  description="The Toyota Coaster accommodates 15-18 passengers, perfect for medium-sized groups. Our Coaster service ensures comfortable group travel at competitive rates."
                  imageLabel="Coaster"
                  imageUrl="/images/fleet/coaster.jpg"
                />
                <Card
                  title="Hiace or Hiroof"
                  description="Our Toyota Hiace and Hiroof vehicles serve 10-12 passengers efficiently. These vehicles balance cost and comfort for medium-sized families or groups."
                  imageLabel="Hiace Van"
                  imageUrl="/images/fleet/hiace-microbus.png"
                />
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[var(--bg)] border-2 border-red-500/20 rounded-3xl p-8">
                  <h3 className="text-xl font-heading font-bold text-red-500 mb-6 flex items-center gap-2">
                    <XCircle size={24} />
                    Red Flags to Avoid
                  </h3>
                  <ul className="space-y-3 text-[var(--text-2)] text-base leading-relaxed font-body">
                    <li className="flex gap-2"><XCircle size={16} className="text-red-500 mt-1 shrink-0" />Drivers without clear identification or proper licenses</li>
                    <li className="flex gap-2"><XCircle size={16} className="text-red-500 mt-1 shrink-0" />Refusal to provide upfront pricing</li>
                    <li className="flex gap-2"><XCircle size={16} className="text-red-500 mt-1 shrink-0" />Vehicles without proper taxi markings or company branding</li>
                    <li className="flex gap-2"><XCircle size={16} className="text-red-500 mt-1 shrink-0" />Cash-only payment demands</li>
                    <li className="flex gap-2"><XCircle size={16} className="text-red-500 mt-1 shrink-0" />Aggressive sales tactics at airport arrival areas</li>
                  </ul>
                </div>
                <div className="bg-[var(--bg)] border-2 border-[var(--green)]/20 rounded-3xl p-8">
                  <h3 className="text-xl font-heading font-bold text-[var(--green)] mb-6 flex items-center gap-2">
                    <CheckCircle2 size={24} />
                    Trust Indicators
                  </h3>
                  <ul className="space-y-3 text-[var(--text-2)] text-base leading-relaxed font-body">
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-[var(--green)] mt-1 shrink-0" />Clear company identification and driver credentials</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-[var(--green)] mt-1 shrink-0" />Transparent, fixed pricing displayed upfront</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-[var(--green)] mt-1 shrink-0" />Professional booking system (online, phone, or WhatsApp)</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-[var(--green)] mt-1 shrink-0" />Vehicle tracking and flight monitoring capabilities</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-[var(--green)] mt-1 shrink-0" />Customer reviews and established reputation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Why Us</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Why Choose Our Airport Transfer Service?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">No Price Negotiations</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Fixed rates eliminate bargaining stress.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <BadgeCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Professional Drivers</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Licensed, experienced, English-speaking drivers.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Zap size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Flight Tracking</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">We monitor your arrival and adjust pickup times.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Star size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">24/7 Availability</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Round-the-clock service for any flight schedule.</p>
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
                  question="Is it cheaper to book a taxi in advance or at the airport?"
                  answer="It's significantly cheaper to book in advance. Airport taxis often quote inflated prices around 500 SAR, while pre-booked services offer fixed rates of 250 SAR. Pre-booking fixed-price services eliminates negotiation stress entirely, and you will get transparent pricing."
                />
                <FAQItem
                  question="How long is a taxi from Jeddah to Makkah?"
                  answer="The journey typically takes 1 to 1.5 hours, covering approximately 94 kilometers. During peak pilgrimage seasons, travel time can extend to 2 hours due to heavy traffic."
                />
                <FAQItem
                  question="Is it customary to tip taxi drivers in Jeddah?"
                  answer="Yes, tipping is customary but modest. The standard tip is 3-10 SAR or up to 10% for good service. Cash tips are preferred and given directly to the driver."
                />
                <FAQItem
                  question="Is it better to negotiate taxi fares in Jeddah?"
                  answer="Negotiation is necessary but challenging for tourists. Airport taxis don't use meters, so you must agree on price beforehand. Pre-booking fixed-price services eliminates negotiation stress entirely."
                />
                <FAQItem
                  question="Are taxis readily available at Jeddah airport?"
                  answer="Yes, Haramain Taxis Services are available 24/7 at designated pickup areas outside terminals. Multiple options include official taxis, Uber, and pre-booked private transfers. Pre-booking is recommended during peak pilgrimage seasons."
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Book Your Jeddah Airport to Makkah Taxi Today</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Your comfortable, reliable taxi from Jeddah airport to Mecca awaits. Contact us now via +966 59 840 1594 for immediate reservation. Don't let airport taxi stress spoil the beginning of your spiritual journey.
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
