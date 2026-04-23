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
  HeartHandshake,
  Users,
  ShieldCheck,
  Clock,
  MapPin,
  Baby,
  BookOpen,
  Car,
  Route,
  Plane,
  CheckCircle2,
  Phone,
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

function InfoCard({
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

function StepCard({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-heading font-extrabold tracking-[0.25em] text-[var(--gold)]">{num}</span>
        <CheckCircle2 size={18} className="text-[var(--green)]" />
      </div>
      <h4 className="text-lg font-heading font-bold text-[var(--text-1)] mb-2">{title}</h4>
      <p className="text-sm text-[var(--text-2)] leading-relaxed font-body">{text}</p>
    </div>
  );
}

export function PrivateTaxiPageClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/private-taxi-services.png')] bg-cover bg-center bg-no-repeat z-0" />
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
                  Private Umrah Taxi
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[72px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Private Taxi Services| Private Umrah Taxi <span className="text-[var(--gold)]">Makkah</span> & <span className="text-[var(--gold)]">Madinah</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  After 12 hours of flights, your exhausted family deserves better than squeezing into crowded vehicles, making five stops before reaching your hotel.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Our private umrah taxi gives you the whole vehicle to your family, direct to your destination. No detours. No strangers are listening to your conversations, and no fighting for luggage space.
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
                  Book on WhatsApp Now
                </a>
                <Link
                  href="#how-to-book"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm"
                >
                  How to Book
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/30 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest mb-6">
                  Built for Families
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Private Umrah Taxi for Families</h2>
                <div className="space-y-6">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    We at Haramain Umrah Taxi offer private Umrah taxi for families that understand unique family needs perfectly. Mothers nursing babies need privacy. Elderly parents need frequent rest stops. Children get restless on long drives, requiring breaks for stretching and playing.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Shared taxis force you to suppress these natural needs. Other passengers get annoyed by crying babies. Drivers refuse extra stops.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    You suffer silently, trying to accommodate strangers instead of focusing on your family's comfort and your worship.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InfoCard
                  title="Privacy for Mothers"
                  description="Comfortable, private rides for families with babies and special needs."
                  icon={Baby}
                />
                <InfoCard
                  title="Flexible Rest Stops"
                  description="Stop for prayers, meals, or breaks whenever your family needs it."
                  icon={Clock}
                />
                <InfoCard
                  title="Respectful Drivers"
                  description="Professional drivers who keep your space calm and dignified."
                  icon={ShieldCheck}
                />
                <InfoCard
                  title="Family Unity"
                  description="Stay together in one vehicle instead of splitting between strangers."
                  icon={Users}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/20 rounded-[32px] p-8 md:p-12 shadow-sm">
                <div className="w-12 h-12 bg-[var(--gold-soft)] rounded-xl flex items-center justify-center text-[var(--gold)] mb-6">
                  <MapPin size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Private Umrah Taxi in Makkah</h2>
                <div className="space-y-4">
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    Private umrah taxi in Makkah navigates the holy city's complex streets exclusively for you. Makkah's traffic intensifies around prayer times. Hotels near Masjid al-Haram cluster tightly together.
                  </p>
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    Our private taxi in Makkah drivers know every alley intimately. They drop you at your exact hotel entrance, not nearby streets requiring you to walk with luggage. This precision saves the energy you need for worship and Tawaf.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[32px] p-8 md:p-12 shadow-sm">
                <div className="w-12 h-12 bg-[var(--green-soft)] rounded-xl flex items-center justify-center text-[var(--green)] mb-6">
                  <HeartHandshake size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Private Taxi Near Masjid Al Haram</h2>
                <div className="space-y-4">
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    Private umrah taxi near masjid al haram provides crucial convenience during your stay. You pray five times daily at Haram. Many pilgrims wake for Tahajjud prayers too.
                  </p>
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    Our private umrah taxi near haram responds within minutes of your call. No waiting for shared taxis to fill with passengers. There will not be any argument about prices. Your dedicated driver knows your hotel and routine preferences from previous trips together.
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
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Madinah Service</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Private Umrah Taxi Services in Madinah</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  Private umrah taxi services in Madinah cater to the Prophet's city's peaceful atmosphere. Yet you still need reliable private transport for comfortable worship and Ziyarat visits.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-5 flex items-center gap-3">
                    <ShieldCheck className="text-[var(--green)]" />
                    Private Taxi in Madinah
                  </h3>
                  <div className="space-y-4">
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                      Our private taxi in Madinah connects you to Masjid Nabawi effortlessly multiple times daily. The emotional significance of visiting the Prophet's mosque requires transportation that respects your spiritual state.
                    </p>
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                      Our drivers understand this deeply and serve you accordingly.
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-5 flex items-center gap-3">
                    <Route className="text-[var(--gold)]" />
                    Madinah Ziyarat Tours In Private Taxi
                  </h3>
                  <div className="space-y-4">
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                      Private umrah taxi services in Madinah include a comprehensive Ziyarat to Mount Uhud, Masjid Quba, and other blessed sites. Private tours let you spend as much time as you want at each location.
                    </p>
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                      You control the tour pace completely. Need to pray at Masjid Quba peacefully? We wait patiently. This flexibility makes Ziyarat truly meaningful rather than just tourist checkboxes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/20 rounded-[40px] p-8 md:p-12 shadow-sm">
                <div className="w-12 h-12 bg-[var(--gold-soft)] rounded-xl flex items-center justify-center text-[var(--gold)] mb-6">
                  <Car size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Intercity Private Travel</h2>
                <div className="space-y-4">
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    Madinah to Makkah private car service handles the 435-kilometer journey exclusively for your group. You stop for prayers, meals, or rest whenever needed without accommodating other passengers' schedules.
                  </p>
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    The Makkah to Madinah private car return journey offers the same flexibility and comfort, especially when traveling with children or elderly parents.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[40px] p-8 md:p-12 shadow-sm">
                <div className="w-12 h-12 bg-[var(--green-soft)] rounded-xl flex items-center justify-center text-[var(--green)] mb-6">
                  <BookOpen size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Vehicle Options for Private Taxi</h2>
                <div className="space-y-4">
                  <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-lg text-[var(--text-1)] mb-2">2 Seater Private Umrah Taxi</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                      Our sedans are perfect for couples traveling without children. You enjoy spacious, comfortable transport at economical rates meant for small groups.
                    </p>
                  </div>
                  <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-lg text-[var(--text-1)] mb-2">4 Seater Private Umrah Taxi</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                      Sedans accommodate four passengers with reasonable luggage. Families of three or four travel together privately without paying for larger unnecessary vehicles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/30 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Airport Transfers</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Airport Transfer Private Services</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-5 flex items-center gap-3">
                    <Plane className="text-[var(--gold)]" />
                    Jeddah Airport to Makkah Private Car
                  </h3>
                  <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                    Get direct, comfortable transport after exhausting international flights. One vehicle for your family and luggage, with no waiting for shuttles and no sharing with strangers.
                  </p>
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-5 flex items-center gap-3">
                    <Plane className="text-[var(--green)]" />
                    Madinah to Madinah Airport Private Car
                  </h3>
                  <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                    Smooth departures with pickup times based on your flight schedule. Your driver helps with luggage and ensures everyone reaches the airport with time for check-in and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[var(--bg-card)] border-2 border-[var(--gold)]/10 rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-48 -mt-48" />

              <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Why Choose Private Taxi Services?</h2>
                <p className="text-[var(--text-2)] font-body max-w-3xl mx-auto text-lg">
                  Private and personal taxi services in Saudi Arabia offer benefits that shared taxis never match. You control the vehicle environment, stops, and departure times.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                <InfoCard
                  title="Full Vehicle Control"
                  description="Choose your schedule, routes, temperature, and breaks without compromise."
                  icon={Car}
                />
                <InfoCard
                  title="True Privacy"
                  description="Make dua freely and have family conversations without strangers listening."
                  icon={ShieldCheck}
                />
                <InfoCard
                  title="Family-Focused Comfort"
                  description="Ideal for young children and elderly family members who need extra care."
                  icon={HeartHandshake}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="how-to-book" className="py-24 bg-[var(--bg-alt)] border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Booking</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">How to Book Your Private Taxi Service?</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  Reserving your private umrah taxi takes minutes. Contact us via WhatsApp or our website, share dates and passenger count, and get a customized quote instantly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StepCard num="01" title="Message Us" text="Contact us on WhatsApp with dates, route, and passenger count." />
                <StepCard num="02" title="Get Options" text="We respond with packages and per-trip pricing—transparent and clear." />
                <StepCard num="03" title="Confirm Details" text="Receive driver name, phone number, and vehicle details in confirmation." />
                <StepCard num="04" title="Pay Easily" text="Pay online or in cash to the driver—no extra processing fees." />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-6 py-24 pb-32">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 text-center">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Conclusion</span>
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Your Umrah Deserves Privacy, Dignity, and Comfort</h2>
                <div className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto space-y-6">
                  <p className="leading-relaxed">
                    Your Umrah deserves the dignity and comfort only a private Umrah taxi for families provides. Whether you need a private umrah taxi in Makkah, Madinah, or intercity travel, we serve you with excellence.
                  </p>
                  <p className="leading-relaxed">
                    Book your private service today through WhatsApp or our website. Experience the difference that exclusive, flexible, family-focused transportation makes during your sacred journey.
                  </p>
                  <p className="leading-relaxed font-semibold">
                    At Haramain Umrah Taxi, your privacy is protected, and your comfort is guaranteed. Your satisfaction is our mission.
                  </p>
                </div>
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
