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

export function MakkahToJeddahClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/makkah-to-jeddah.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
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
                Makkah to Jeddah Taxi, GMC, Bus & Fares: <span className="text-[var(--gold)]">24/7 Taxi Booking</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Are you searching for a reliable transportation service from Makkah to Jeddah? You've arrived at the perfect spot. We have years of experience helping tourists with this trip, so we are fully aware of your needs.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Our taxi service runs day and night. Early morning flight? Late-night arrival? We are available to you 24/7.
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
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Online Booking</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Best Online Taxi Services from Makkah to Jeddah</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  Why spend time calling around when you can book online instantly? Our website works perfectly on your phone or computer.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  You'll see the price upfront, pick your car, and get confirmation right away. Real-time updates keep you informed about your driver's location.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                  Most customers complete their booking in less than 90 seconds. That's faster than making a phone call and way easier than negotiating at the roadside.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Pricing</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Makkah to Jeddah Airport Taxi Services and Fixed Fares</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 overflow-x-auto mb-8">
                <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6">How much is Taxi from Makkah to Jeddah Airport? Price Details</h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-4 px-4 text-[var(--text-1)] font-heading font-bold">Vehicle Type</th>
                      <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">Fare (SAR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Sedan Cars</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">200 SAR</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Premium Vehicles</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">300 SAR</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Group Vans</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">350 SAR</td>
                    </tr>
                    <tr className="hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">GMC SUVs</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">400 SAR</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[var(--text-2)] text-base leading-relaxed font-body mt-6">
                  These are fixed prices. No meter running, no peak hour charges, no haggling required. What you see is what you pay.
                </p>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">Standard City Transfer Rates</h3>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                  Not heading to the airport? Our regular Makkah to Jeddah taxi price for city destinations ranges from 200-400 SAR based on your specific location and vehicle preference.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mt-4">
                  We offer discounts for return bookings and group reservations. The more you travel with us, the better deals you get.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">How to Book</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Book Online Makkah to Jeddah Taxi Services</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">1</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Visit our website or call us directly</h3>
                    <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Start the booking process through our online platform or phone.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">2</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Select your preferred vehicle type</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Choose from sedans, GMC, vans, or buses based on your needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">3</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Choose pickup time and location</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Provide your pickup details for precise service.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">4</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Receive instant confirmation</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Get your booking confirmation immediately.</p>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mt-6">
                  You can change or cancel your reservation up to 2 hours before pickup time. We accept cash, credit cards, and mobile payments for your convenience.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Our Fleet</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Haramain Umrah Taxi Fleet for Makkah to Jeddah Services</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Makkah to Jeddah GMC Vehicles"
                  description="Our GMC fleet attracts families and groups who value space and comfort. These vehicles accommodate up to 7 passengers with generous luggage room."
                  imageLabel="GMC Yukon"
                  imageUrl="/images/fleet/luxury-gmc.png"
                />
                <Card
                  title="Makkah to Jeddah Bus and Umrah Bus Services"
                  description="Large groups love our bus options. We operate coaches ranging from 15-seat minibuses to 50-passenger full-size buses."
                  imageLabel="Bus"
                  imageUrl="/images/fleet/bus.png"
                />
                <Card
                  title="Economy and Luxury Private Cars"
                  description="Budget-conscious travelers appreciate our sedan options, while those seeking premium comfort choose our luxury vehicles."
                  imageLabel="Sedan Car"
                  imageUrl="/images/fleet/sedan.webp"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Why Us</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Why Travelers Choose Us for Makkah to Jeddah Journeys?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Clear Pricing</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">No additional costs or hidden fees.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Zap size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">24/7 Accessibility</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Available throughout Hajj and Umrah seasons.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <Star size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Modern Vehicles</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Well-maintained automobiles for comfort.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <BadgeCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Multi-language Support</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Customer support in Urdu, English, and Arabic.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-5">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Full Insurance</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Complete insurance coverage is provided.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Route Info</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Route Details and Helpful Information</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">Distance & Time</h3>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-4">
                    The approximate distance between Makkah and Jeddah is 83.4 kilometers. To cut down on your journey time, our skilled drivers follow the best routes and are aware of patterns of traffic.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Typical journey time ranges from 50-75 minutes, depending on traffic conditions and your exact destinations. We track traffic in real-time and adjust routes accordingly.
                  </p>
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">Popular Jeddah Locations We Serve</h3>
                  <ul className="space-y-3 text-[var(--text-2)] text-base leading-relaxed font-body">
                    <li className="flex gap-2"><MapPin size={16} className="text-[var(--gold)] mt-1 shrink-0" />King Abdulaziz International Airport (all terminals)</li>
                    <li className="flex gap-2"><MapPin size={16} className="text-[var(--gold)] mt-1 shrink-0" />Downtown Jeddah hotels and business districts</li>
                    <li className="flex gap-2"><MapPin size={16} className="text-[var(--gold)] mt-1 shrink-0" />Historic Al-Balad area</li>
                    <li className="flex gap-2"><MapPin size={16} className="text-[var(--gold)] mt-1 shrink-0" />Corniche waterfront and shopping centers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Safety</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Safety Standards and Passenger Comfort</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  Vehicle safety isn't negotiable for us. Every car undergoes scheduled maintenance checks. All drivers hold valid licenses and pass background verification.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                  We follow strict hygiene protocols and ensure vehicles are clean before each trip. GPS tracking provides additional security for solo travelers.
                </p>
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
                  question="How much is a taxi from Makkah to Jeddah?"
                  answer="Taxi fares range from 200-400 SAR, depending on vehicle type. Sedan cars cost 200 SAR, while GMC vehicles cost 400 SAR."
                />
                <FAQItem
                  question="Are taxis expensive in Jeddah?"
                  answer="Our rates are competitive and fixed. You won't find surprise charges or inflated prices like some operators charge."
                />
                <FAQItem
                  question="How much is a private car from Makkah to Jeddah?"
                  answer="Private car rates start at 200 SAR for sedans and go up to 400 SAR for premium GMC vehicles."
                />
                <FAQItem
                  question="How many hours is a taxi from Makkah to Jeddah?"
                  answer="The journey takes 45 minutes to 1.5 hours, depending on traffic and your specific pickup/drop-off points."
                />
                <FAQItem
                  question="How many hours is a taxi from Jeddah to Makkah?"
                  answer="Return journey time is the same - 45 minutes to 1.5 hours covering the same 83.4-kilometer distance."
                />
                <FAQItem
                  question="How much does a taxi cost from Makkah to Jeddah airport?"
                  answer="Airport taxi service costs 200-400 SAR based on vehicle selection. Economy options start at 200 SAR."
                />
                <FAQItem
                  question="Is it cheaper to book Makkah to Jeddah taxi in advance or at the airport?"
                  answer="Pre-booking saves money and guarantees availability. Last-minute airport bookings often cost 10-20% more."
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Ready to Book Your Makkah to Jeddah Taxi?</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Don't let transportation concerns affect your travel plans. Contact us today and join thousands of satisfied customers who trust us for their Makkah-Jeddah journeys.
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
