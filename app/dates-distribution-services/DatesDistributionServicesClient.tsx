"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { Canonical } from "@/components/SEO/Canonical";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  Gift,
  HandHeart,
  HelpCircle,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Truck,
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

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
      <div className="flex items-start gap-3">
        <HelpCircle className="text-[var(--gold)] shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">{q}</h4>
          <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function DatesDistributionServicesClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/dates-distribution-services.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80 z-10" />
          <IslamicGeometricBg opacity={0.04} />

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
                  Sadaqah Jariyah
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Khajoor & Dates Distribution Services in <span className="text-[var(--gold)]">KSA Makkah & Madinah</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Donation in the holy cities of Makkah and Madinah is a beautiful act rewarded with immense blessings. Dates donation is a valued act from the Sunnah of Prophet Muhammad (PBUH).
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  We offer dates distribution in Makkah and Madinah, ensuring your donation reaches needy people—including pilgrims and fasting individuals—with proof of distribution.
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
                  Donate on WhatsApp Now
                </a>
                <Link
                  href="#why"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm"
                >
                  Learn More
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        <AnimatedSection id="why" className="py-24 bg-[var(--bg-alt)]/30 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest mb-6">
                  Hadith
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Why Dates Distribution is Highly Rewarding</h2>
                <div className="space-y-5">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    The Prophet (peace be upon him) said: "Whoever feeds a person fasting so that he breaks his fast, he gets a reward equal to their reward, without lessening their reward in any way." (Tirmidhi)
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Serving fasting people with dates in Makkah and Madinah—the holiest places on earth—brings immense spiritual rewards. Dates are healthy and hold a special place in Islam.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    For those unable to be in Saudi Arabia, our service lets you achieve this good deed from anywhere—whether for yourself, family, or as Sadaqah Jariyah.
                  </p>
                </div>
              </div>

              <ImagePlaceholder label="Image Placeholder: Dates / Khajoor / Pilgrims" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Why Us</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Why Use Haramain Umrah Taxi for Dates Distribution?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Effortless Process"
                  description="Book with us, and we'll do the rest."
                  icon={BadgeCheck}
                />
                <Card
                  title="Service in Makkah & Madinah"
                  description="We distribute dates in key areas for maximum benefit."
                  icon={MapPin}
                />
                <Card
                  title="Confirmation of Distribution"
                  description="Obtain photos and videos that prove your donation."
                  icon={CheckCircle2}
                />
                <Card
                  title="Optimize Rewards in Ramadan"
                  description="Coordinate distribution when all good works multiply."
                  icon={Calendar}
                />
                <Card
                  title="Personalized Options"
                  description="Choose the number and location of deliveries."
                  icon={Scale}
                />
                <Card
                  title="Large & Small Order Support"
                  description="From a few kilograms to bulk orders, we support all."
                  icon={Truck}
                />
              </div>

              <div className="mt-10 bg-[var(--bg-card)] border-2 border-[var(--gold)]/15 rounded-[40px] p-8 md:p-12">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="text-[var(--gold)] shrink-0 mt-0.5" size={24} />
                  <div>
                    <h3 className="text-[var(--text-1)] font-heading font-bold text-xl mb-2">Reliable & Trustworthy Service</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                      Our personnel operate directly in the holy cities, making timely and respectful deliveries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="how" className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Process</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">How It Works</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <Phone size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Contact Us</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">Share your preferred dates and location.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <Scale size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Choose Package</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">How many dates would you like to distribute?</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <BadgeCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Confirm & Pay</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">Reserve your donation securely.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <Truck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">We Distribute</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">We give dates to needy pilgrims and fasting people.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Get Proof</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">Photos and videos for your peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <ImagePlaceholder label="Image Placeholder: Ramadan / Iftar / Dates" />

              <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/10 rounded-[32px] p-8 md:p-10 shadow-sm">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest mb-6">
                  Ramadan
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Distribution of Special Dates in Ramadan</h2>
                <div className="space-y-5">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Ramadan is the most rewarding time for charitable acts. Rewards for date donations in Ramadan are multiplied.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Thousands of pilgrims and locals fast in Makkah and Madinah, breaking their fasts in Masjid Al-Haram and Masjid An-Nabawi. With our service, you can have your dates distributed among these fasting believers before Iftar.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    You can also donate as almsgiving in memory of a departed loved one so they receive rewards as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Significance</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">The Significance of Dates in Islamic Tradition</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mb-5">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3">High in Nutrients</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                    Great energy source full of important vitamins and minerals.
                  </p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mb-5">
                    <HandHeart size={22} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3">Easily Digestible</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                    Ideal for breaking the fast.
                  </p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mb-5">
                    <Gift size={22} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3">Representative of Sunnah</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                    Following the Prophet Muhammad's (PBUH) example of breaking fast with dates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="faq" className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">FAQ</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Frequently Asked Questions</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FAQItem
                  q="What is the price of Ajwa dates in Madinah?"
                  a="Premium Medium Ajwa: Around SAR 40 per kg. Jumbo/First-Class: SAR 120–150 per kg. Arjoon Ajwa Al Madinah (800g): SAR 111.95. Nakheel Alya Ajwa (250g): SAR 22.99."
                />
                <FAQItem
                  q="What is the price of Ajwa dates in Makkah?"
                  a="Ajwa Qubaa Premium (1kg): ~SAR 116. Ajwa Al Madinah First Class (800g): ~SAR 92."
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Join This Great Cause Today</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Don't miss this opportunity to distribute dates in Makkah and Madinah and earn unlimited rewards. Whether for a loved one, as Sadaqah, or for Allah's acceptance—this is your chance to make a difference.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://wa.me/966598401594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--green)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <WhatsAppIcon size={24} />
                    Donate via WhatsApp Now
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
