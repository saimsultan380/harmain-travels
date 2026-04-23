"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import {
  CheckCircle2,
  ArrowRight,
  Plane,
  MapPin,
  Clock,
  Users,
  Briefcase,
  Phone,
  MessageCircle,
  ShieldCheck,
  Zap,
  AlertCircle,
  HelpCircle
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

import Image from "next/image";

const PriceCard = ({ title, pax, bag, price, image, extraClass = "" }: { title: string, pax: string, bag: string, price: string, image: string, extraClass?: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 transition-all duration-300 flex flex-col ${extraClass}`}
  >
    <div className="h-[180px] w-full mb-6 flex items-center justify-center bg-[var(--bg-alt)] rounded-xl overflow-hidden relative">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 20vw"
        className="object-contain p-2 drop-shadow-xl hover:scale-105 transition-transform duration-500"
      />
    </div>

    <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4">{title}</h3>

    <div className="flex flex-col gap-3 mb-6">
      <div className="flex items-center gap-2 text-[var(--text-2)] font-body text-sm">
        <Users size={16} className="text-[var(--gold)]" />
        <span>{pax}</span>
      </div>
      <div className="flex items-center gap-2 text-[var(--text-2)] font-body text-sm">
        <Briefcase size={16} className="text-[var(--gold)]" />
        <span>{bag}</span>
      </div>
    </div>

    <div className="mt-auto">
      <div className="text-[var(--gold)] font-heading font-extrabold text-2xl mb-6">
        {price}
      </div>
      <div className="flex flex-col xl:flex-row gap-3">
        <a
          href="https://wa.me/966598401594"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--green)] text-white font-body font-semibold rounded-lg hover:opacity-90 transition-all shadow-md text-xs sm:text-sm whitespace-nowrap"
        >
          <WhatsAppIcon className="text-white" />
          WhatsApp
        </a>
        <Link
          href="#pricing"
          className="flex-1 flex items-center justify-center py-3 border-2 border-[var(--green)] text-[var(--green)] font-body font-semibold rounded-lg hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white transition-all text-xs sm:text-sm whitespace-nowrap"
        >
          Book Now
        </Link>
      </div>
    </div>
  </motion.div>
);

export function AirportTaxiPageClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)] font-body">
      <Navbar />

      <main className="flex-grow overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/airport-taxi-services.png')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80 z-10" />
          <IslamicGeometricBg className="opacity-10 dark:opacity-20" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={itemVariants} className="inline-block mb-6">
                <span className="px-4 py-1.5 rounded-full bg-[var(--gold)] text-white font-heading font-bold text-xs uppercase tracking-widest shadow-lg shadow-[var(--gold)]/20">
                  Premium Airport Service
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-[72px] font-heading font-extrabold !text-white leading-tight mb-8"
              >
                Airport Transfers | <span className="text-[var(--gold)]">Madinah</span> & <span className="text-[var(--gold)]">Jeddah</span> Airport Taxi
              </motion.h1>

              <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-10">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Your plane touches down after hours in the air. You are exhausted, juggling luggage, and trying to figure out how to reach your hotel. The airport feels overwhelming with crowds pushing everywhere. You need <span className="text-[var(--gold)] font-bold">reliable transport right now</span>, not confusion and stress.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--green)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all border border-[var(--green)]/20"
                >
                  <WhatsAppIcon />
                  Book on WhatsApp Now
                </a>
                <Link
                  href="#pricing"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all"
                >
                  View Pricing Table
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        {/* INTRODUCTION & SOLUTION */}
        <AnimatedSection className="py-24 bg-[var(--bg)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto rounded-3xl border-2 border-[var(--gold)]/30 bg-[var(--bg-card)] p-10 md:p-20 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/5 rounded-full -mr-32 -mt-32 blur-3xl" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-[var(--gold)]/10 rounded-2xl flex items-center justify-center mb-6 text-[var(--gold)]">
                  <ShieldCheck size={36} />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-8">
                  Stress-Free <br className="hidden md:block" /> Arrival Fixed
                </h2>

                <div className="space-y-6 max-w-2xl mx-auto">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    We solved this problem completely. Our airport taxi in Saudi Arab service meets you at arrivals and takes you straight to your destination with no haggling and waiting. Just clean vehicles, professional drivers, and fixed prices you can trust.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Airport transfers in Jeddah and Madinah make or break your first impression of Saudi Arabia. Landing in an unfamiliar country, you need someone reliable waiting for you. Random taxi drivers at airports often overcharge tourists. They take longer routes. They argue about prices at the end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* WHY CHOOSE US */}
        <AnimatedSection id="why-us" className="py-24 bg-[var(--bg-alt)] border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">The Haramain Advantage</span>
              <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Why Choose Professional Airport Transfers?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Zap size={24} />,
                  title: "Flight Tracking",
                  text: "When you book with Haramain Umrah Taxi, your driver tracks your flight automatically. Delays do not matter. We adjust pickup times without you calling us."
                },
                {
                  icon: <Users size={24} />,
                  title: "Personalized Meetup",
                  text: "Your driver waits at arrivals holding a sign with your name clearly printed. You spot him immediately and walk straight to your vehicle."
                },
                {
                  icon: <ShieldCheck size={24} />,
                  title: "Comfort & Care",
                  text: "Our vehicles stay clean and comfortable always. Air conditioning works perfectly. Seats feel comfortable even after long rides."
                },
                {
                  icon: <Clock size={24} />,
                  title: "Fixed Pricing",
                  text: "You relax completely knowing you paid a fair, fixed price upfront. We eliminate the stress of haggling and unexpected terminal charges."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 transition-all group">
                  <div className="w-12 h-12 bg-[var(--gold)]/10 text-[var(--gold)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4">{feature.title}</h3>
                  <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* JEDDAH SECTIONS */}
        <section className="py-24 bg-[var(--bg)] overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -left-4 -top-4 w-24 h-24 bg-[var(--gold)]/10 rounded-full blur-2xl" />
                <div className="rounded-3xl border-2 border-[var(--border)] p-2 bg-[var(--bg-alt)]">
                  <div className="bg-[var(--bg)] rounded-2xl p-6 md:p-12 border border-[var(--border)]">
                    <Plane className="text-[var(--gold)] mb-6" size={40} />
                    <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">
                      Jeddah Airport Taxi Service from King Abdulaziz International Airport
                    </h2>
                    <p className="text-[var(--text-2)] leading-relaxed font-body mb-6">
                      King Abdulaziz International Airport Jeddah serves as the main gateway for international pilgrims. This massive airport handles millions of passengers yearly. You need expert navigation here. Our Jeddah airport taxi service operates from all terminals 24/7 throughout the year.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3 p-4 bg-[var(--green)]/5 rounded-xl border border-[var(--green)]/10">
                        <CheckCircle2 size={18} className="text-[var(--green)] mt-1 shrink-0" />
                        <p className="text-sm font-semibold text-[var(--text-1)] font-body">Terminal 1 Specialist Drivers</p>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-[var(--green)]/5 rounded-xl border border-[var(--green)]/10">
                        <CheckCircle2 size={18} className="text-[var(--green)] mt-1 shrink-0" />
                        <p className="text-sm font-semibold text-[var(--text-1)] font-body">Hajj Terminal Seasonal Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-heading font-bold text-[var(--gold)] mb-4">Terminal Expertise</h3>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-8">
                  Most international flights land at Terminal 1. Our drivers know this terminal intimately. They wait at the correct exit gates, saving you from wandering around confused. The taxi at King Abdul Aziz International Airport, Jeddah, pickup process takes just minutes from landing to sitting in your vehicle.
                </p>
                <div className="p-8 bg-[var(--gold)]/5 rounded-3xl border border-[var(--gold)]/10">
                  <p className="text-[var(--text-2)] font-body italic border-l-4 border-[var(--gold)] pl-6">
                    “We serve the North Terminal too, which handles budget airlines. The Hajj Terminal activates during pilgrimage seasons for dedicated Hajj flights. Regardless of which terminal you arrive at, we pick you up efficiently. Our drivers communicate with you via WhatsApp, confirming exact meeting points before your arrival.”
                  </p>
                </div>
              </div>
            </div>

            {/* REDESIGNED DISTANCE & TIME SECTION */}
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[40px] p-8 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-48 -mt-48" />

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">The Journey: <span className="text-[var(--gold)]">Jeddah to Makkah</span></h2>
                    <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                      The Jeddah airport to Makkah distance spans approximately 92.2 kilometers. This 60-90 minute drive represents your transition from the modern world to the spiritual sanctuary of the Haram.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[var(--bg)] border border-[var(--border)] p-6 rounded-2xl text-center">
                      <div className="text-[var(--gold)] font-heading font-extrabold text-3xl mb-1">92.2 km</div>
                      <div className="text-[var(--text-3)] text-xs uppercase tracking-widest font-bold">Total Distance</div>
                    </div>
                    <div className="bg-[var(--bg)] border border-[var(--border)] p-6 rounded-2xl text-center">
                      <div className="text-[var(--gold)] font-heading font-extrabold text-3xl mb-1">60-90m</div>
                      <div className="text-[var(--text-3)] text-xs uppercase tracking-widest font-bold">Average Time</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16 relative">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[var(--border)] hidden lg:block -translate-y-1/2 z-0" />

                  {[
                    { icon: <Plane className="rotate-90" />, title: "Terminal Pickup", desc: "Expert arrival meeting" },
                    { icon: <Zap />, title: "The Highway", desc: "Modern desert routes" },
                    { icon: <ShieldCheck />, title: "Miqat Pause", desc: "Optional spiritual prep" },
                    { icon: <MapPin />, title: "Hotel Arrival", desc: "Direct door-to-door" }
                  ].map((step, i) => (
                    <div key={i} className="relative z-10 bg-[var(--bg)] border border-[var(--border)] p-6 rounded-2xl group hover:border-[var(--gold)] transition-colors">
                      <div className="w-12 h-12 bg-[var(--gold)] text-white rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                      <h4 className="font-heading font-bold text-[var(--text-1)] text-center text-sm mb-1">{step.title}</h4>
                      <p className="text-[var(--text-3)] text-[10px] text-center uppercase font-bold tracking-tighter">{step.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: <ArrowRight />, title: "Direct Transfer", text: "Represent's our most popular Jeddah to Makkah route with expert drivers." },
                    { icon: <ArrowRight />, title: "Miqat Support", text: "If you arrive without Ihram, we take you to the designated Miqat points." },
                    { icon: <ArrowRight />, title: "Family Care", text: "Patience for families with elderly members or young children." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 border border-[var(--border)] rounded-2xl bg-[var(--bg-alt)]/50">
                      <h4 className="font-heading font-bold text-[var(--text-1)] flex items-center gap-2 mb-3">
                        <span className="text-[var(--gold)]">{item.icon}</span> {item.title}
                      </h4>
                      <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <AnimatedSection id="pricing" className="py-24 bg-[var(--bg-alt)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-[var(--text-1)] scroll-mt-24">Pricing for Jeddah to Makkah Transfer</h2>
              <p className="mt-4 text-[var(--text-2)] max-w-2xl mx-auto font-body">
                Our transparent pricing builds trust from your very first interaction with us. These prices include fuel, tolls, and all charges. You pay nothing extra at journey's end.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Top Row: 3 Cards spanning 2 columns each */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
                <div className="md:col-span-2">
                  <PriceCard title="Sedan Service" pax="Up to 4 Passengers" bag="2 Large Suitcases" price="SAR 250" image="/images/fleet/sedan.webp" />
                </div>
                <div className="md:col-span-2">
                  <PriceCard title="Staria" pax="7 Passengers" bag="4 Large Suitcases" price="SAR 300" image="/images/fleet/minivan.webp" />
                </div>
                <div className="md:col-span-2">
                  <PriceCard title="Luxury GMC" pax="7 Passengers" bag="Large Luggage Capacity" price="SAR 450" image="/images/fleet/luxury-gmc.png" extraClass="border-[var(--gold)]/30 ring-4 ring-[var(--gold)]/5" />
                </div>
              </div>

              {/* Bottom Row: 2 Cards centered, also spanning 2 columns each */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                <div className="md:col-start-2 md:col-span-2">
                  <PriceCard title="Hiace Microbus" pax="12 Passengers" bag="Group Luggage" price="SAR 400" image="/images/fleet/hiace-microbus.png" />
                </div>
                <div className="md:col-span-2">
                  <PriceCard title="Coaster Bus" pax="18 Passengers" bag="Full Group Luggage" price="SAR 600" image="/images/fleet/coaster.jpg" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* RETURN SERVICE & BUS COMPARISON */}
        <section className="py-24 bg-[var(--bg)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
              <div>
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-8">Makkah to Jeddah Airport Taxi - Return Service</h2>
                <div className="space-y-6">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Makkah to Jeddah airport taxi handles your departure just as professionally. You tell us your flight time. We calculate the perfect pickup time, ensuring you reach the airport with adequate check-in time. International flights need an early arrival. We factor this automatically into our timing.
                  </p>
                  <div className="aspect-[16/9] bg-[var(--bg-alt)] border-2 border-dashed border-[var(--border)] rounded-3xl flex flex-col items-center justify-center text-[var(--text-3)] overflow-hidden">
                    <Plane size={64} className="mb-4 opacity-20" />
                    <span className="text-sm font-heading font-bold uppercase tracking-widest opacity-40">Makkah Return Service Image</span>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-5 md:p-10 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/20 rounded-full blur-3xl -mr-32 -mt-32" />
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-8">Taxi vs. Bus Comparison</h3>

                  <div className="space-y-6 mb-8">
                    <div className="p-4 md:p-6 bg-[var(--bg)] rounded-2xl border border-[var(--border)]">
                      <div className="flex items-center gap-3 mb-4 text-[var(--gold)]">
                        <Zap size={24} />
                        <h4 className="font-heading font-bold uppercase tracking-wider">The Private Taxi Advantage</h4>
                      </div>
                      <p className="text-[var(--text-2)] font-body text-sm leading-relaxed">
                        Our private taxi costs more but saves you significant stress and time. You leave when you want. You do not adjust your schedule to bus timings and travel directly from your hotel door to the airport terminal. The extra cost is worth the convenience, especially after completing your spiritual journey.
                      </p>
                    </div>

                    <div className="p-4 md:p-6 bg-red-500/5 rounded-2xl border border-red-500/20">
                      <div className="flex items-center gap-3 mb-4 text-red-500">
                        <AlertCircle size={24} />
                        <h4 className="font-heading font-bold uppercase tracking-wider">Bus Service Realities</h4>
                      </div>
                      <p className="text-[var(--text-2)] font-body text-sm leading-relaxed">
                        Bus Service from Makkah To Jeddah Airport option exists for budget travelers. Buses cost less but offer no flexibility. They follow fixed schedules. You must reach the bus station yourself and share space with many passengers. Luggage space is limited.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 bg-[var(--gold)]/5 rounded-2xl border-2 border-dashed border-[var(--gold)]/20">
                    <h4 className="font-heading font-bold text-[var(--text-1)] text-sm mb-3">Our Dedicated Return Service</h4>
                    <p className="font-body text-[var(--text-2)] text-xs leading-relaxed italic">
                      "Our driver arrives at your Makkah hotel 10 minutes early. He helps with luggage loading. The Mecca to Jeddah airport journey follows the same efficient route we use for arrivals. You reach the airport relaxed and on time, never rushing or panicking about missing flights."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MADINAH DEEP DIVE - Z-PATTERN LAYOUT */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--green-soft)] text-[var(--green)] font-heading font-bold text-xs uppercase mb-6 tracking-widest">The Prophet's City Gateway</div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] max-w-4xl mx-auto">Madinah Airport Taxi Service from Prince Mohammad Bin Abdulaziz Airport</h2>
            </div>

            {/* ROW 1: Intro Text Card (L) + Image (R) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="order-2 lg:order-1">
                <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden h-full flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <div className="space-y-6 relative z-10">
                    <p className="text-[var(--text-2)] text-[18px] leading-relaxed font-body">
                      The Prince Mohammad bin Abdulaziz International Airport transfer connects you to the Prophet's city beautifully. This smaller airport feels less overwhelming than Jeddah. Our Madinah airport taxi service operates here with the same excellence you expect.
                    </p>
                    <p className="text-[var(--text-2)] text-[18px] leading-relaxed font-body">
                      The Mohammed bin Abdulaziz airport is situated outside the main city. You cannot walk to hotels from here. Reliable transport becomes essential. Our airport taxi in Madinah meets you at the single terminal building. The pickup process takes just minutes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--gold)]/10 rounded-full blur-2xl" />
                  <div className="rounded-3xl border-2 border-[var(--border)] p-2 bg-[var(--bg-alt)]">
                    <div className="aspect-video bg-[var(--bg)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)] border border-[var(--border)] relative overflow-hidden group">
                      <div className="absolute inset-0 bg-[var(--gold)]/5 group-hover:bg-[var(--gold)]/10 transition-colors" />
                      <Plane size={64} className="mb-4 opacity-20 relative z-10" />
                      <span className="text-xs font-heading font-bold uppercase tracking-widest opacity-40 relative z-10">Madinah Airport View</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2: Image (L) + Nabawi Taxi Box (R) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-1">
                <div className="relative">
                  <div className="absolute -left-4 -top-4 w-24 h-24 bg-[var(--gold)]/10 rounded-full blur-2xl" />
                  <div className="rounded-3xl border-2 border-[var(--border)] p-2 bg-[var(--bg-alt)]">
                    <div className="aspect-video bg-[var(--bg)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)] border border-[var(--border)] relative overflow-hidden group">
                      <div className="absolute inset-0 bg-[var(--gold)]/5 group-hover:bg-[var(--gold)]/10 transition-colors" />
                      <MapPin size={64} className="mb-4 opacity-20 relative z-10" />
                      <span className="text-xs font-heading font-bold uppercase tracking-widest opacity-40 relative z-10">Route to Masjid Nabawi</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 border-b border-[var(--gold)]/20 pb-4">Madinah Airport to Masjid Nabawi Taxi</h3>
                  <div className="space-y-6">
                    <p className="text-[var(--text-2)] text-[18px] leading-relaxed font-body">
                      The taxi from Madinah Airport to masjid nabawi represents a sacred journey for pilgrims. The distance spans approximately 20-22 kilometers. This drive takes 20-30 minutes, depending on traffic around the mosque.
                    </p>
                    <p className="text-[var(--text-2)] text-[18px] leading-relaxed font-body">
                      Our Madinah Airport to masjid nabawi taxi service takes you directly to hotels near the Prophet's Mosque. The area around Masjid Nabawi features numerous hotels at different price ranges. Our drivers know them all by name and location. You do not explain complicated directions.
                    </p>
                    <p className="text-[var(--text-2)] text-[18px] leading-relaxed font-body">
                      Your luggage stays safe in our locked vehicle. This flexibility shows our understanding of pilgrims' priorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICE INSIGHTS: Alternating Colored Boxes */}
            <div className="space-y-12">
              {/* Row 3: Bus Comparison (L) + Image (R) | Unified Style */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 border-b border-[var(--gold)]/20 pb-4">Madinah Airport Bus Fare Comparison</h3>
                  <div className="space-y-4">
                    <p className="text-[var(--text-2)] text-[18px] font-body leading-relaxed">
                      The Madinah airport to masjid nabawi bus fare costs significantly less than private taxis. However, buses do not run frequently. You might wait 30-60 minutes for the next bus. After long flights, this waiting feels exhausting.
                    </p>
                    <p className="text-[var(--text-2)] text-[18px] font-body leading-relaxed">
                      Buses drop you at main stations, not at your specific hotel. You still need additional transport with your luggage. The total time and hassle often equal or exceed private taxi costs when calculated properly. Our service provides better value considering comfort and convenience.
                    </p>
                  </div>
                </div>
                <div className="rounded-[32px] border-2 border-[var(--border)] p-2 bg-[var(--bg-alt)]">
                  <div className="h-full min-h-[300px] bg-[var(--bg)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)] border border-[var(--border)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[var(--green)]/5 group-hover:bg-[var(--green)]/10 transition-colors" />
                    <StarIcon size={48} className="mb-4 opacity-20 relative z-10 text-[var(--green)]" />
                    <span className="text-xs font-heading font-bold uppercase tracking-widest opacity-40 relative z-10">Bus vs Taxi Interior</span>
                  </div>
                </div>
              </div>

              {/* Row 4: Image (L) + Intercity Box (R) | Light Yellow BG */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="order-2 lg:order-1 rounded-[32px] border-2 border-[var(--border)] p-2 bg-[var(--bg-alt)]">
                  <div className="h-full min-h-[300px] bg-[var(--bg)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)] border border-[var(--border)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[var(--gold)]/5 group-hover:bg-[var(--gold)]/10 transition-colors" />
                    <Plane size={48} className="mb-4 opacity-20 relative z-10 text-[var(--gold)]" />
                    <span className="text-xs font-heading font-bold uppercase tracking-widest opacity-40 relative z-10">Jeddah - Madinah Highway</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[var(--gold)]/10 rounded-full blur-3xl" />
                  <h4 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 uppercase tracking-wider relative z-10 border-b border-[var(--gold)]/20 pb-4">Jeddah Airport to Madinah Intercity</h4>
                  <div className="space-y-4 relative z-10">
                    <p className="text-[var(--text-2)] text-[18px] font-body leading-relaxed">
                      Some pilgrims fly directly to Jeddah but want to visit Madinah first. The Jeddah airport to Madinah taxi handles this longer journey. The distance is approximately 416 kilometers. This drive takes 4-5 hours on excellent highways.
                    </p>
                    <p className="text-[var(--text-2)] text-[18px] font-body leading-relaxed">
                      Our taxi from Jeddah airport to Madinah service uses comfortable vehicles perfect for long journeys. We provide rest stops at clean facilities along the way. You stretch your legs and use the bathroom. We never rush you during these breaks.
                    </p>
                    <p className="text-[var(--text-2)] text-[18px] font-body leading-relaxed">
                      The drive passes through changing landscapes showing Saudi Arabia's geographical diversity. Our drivers explain what you see, making the journey educational and interesting.
                    </p>
                    <p className="text-[var(--text-2)] text-[18px] font-body text-xs mt-4 opacity-60">
                      Car rentals at Jeddah Airport and car rentals Madinah Airport exist for travelers preferring to drive themselves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONCLUSION & FINAL CTA */}
        <AnimatedSection className="py-32 bg-[var(--bg-alt)] border-t border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8 bg-[var(--bg)] border-2 border-[var(--gold)]/30 p-10 md:p-20 rounded-[40px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />

                <div className="relative z-10 space-y-8">
                  <p className="text-xl md:text-2xl text-[var(--text-1)] font-heading font-semibold leading-relaxed">
                    Conclusion
                  </p>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-10 leading-tight">
                    Your sacred journey deserves <span className="text-[var(--gold)]">smooth, reliable transportation</span> from the moment you land.
                  </h2>
                  <div className="space-y-6">
                    <p className="text-[var(--text-2)] text-lg leading-relaxed font-body text-center">
                      Whether you need an airport taxi in Jeddah or airport transfers in Madinah, we serve you with professionalism and respect. At Haramain Umrah Taxi, we have perfected airport transfer services through years of dedicated work. Our fixed prices, licensed drivers, and 24/7 availability make us the trusted choice for thousands of pilgrims.
                    </p>
                    <p className="text-[var(--text-2)] text-lg font-bold font-body text-center">
                      Book your airport transfer today through WhatsApp or our website.
                    </p>
                  </div>
                </div>

                <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-6">
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

function StarIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
