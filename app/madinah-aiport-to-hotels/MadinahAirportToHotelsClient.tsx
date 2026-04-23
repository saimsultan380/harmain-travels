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

export function MadinahAirportToHotelsClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/madinah-aiport-to-hotels.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
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
                Madinah Airport to Hotel Taxi Services and <span className="text-[var(--gold)]">Fares</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Landing at Prince Mohammad Bin Abdulaziz Airport in Madinah, with heavy luggage and no transportation, can ruin your spiritual journey before it even begins. Haramain Umrah Taxi eliminates this stress with reliable Madinah Airport to hotel taxi services.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Our professional drivers wait for you at arrivals with your name board. Reserve your Madinah airport taxi services online before departure. Our booking system guarantees your ride upon landing.
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
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Best Online Taxi Services from Madinah Airport to Hotel</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  Our online taxi services from Madinah Airport to hotel save you time and money. Reserve your seat in advance through our digital platform. Get instant confirmation with driver details sent to your phone.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  We specialize in Madinah airport pickups for Umrah pilgrims. Our drivers are aware of your religious schedule and prayer time requirements. They know the fastest routes to all major hotels in Madinah.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                  Our best taxi services from Madinah Airport to hotel include GPS tracking and 24/7 customer support. Your family's safety remains our top priority throughout the journey. Our professional drivers speak multiple languages to assist international pilgrims.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">How to Book</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Book Your Madinah Airport to Hotel Taxi Transfers</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">1</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Select your arrival time and hotel destination</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Provide your flight details and hotel information.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">2</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Choose your preferred vehicle type</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Select from sedans, GMC, vans, or buses based on your needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] text-white flex items-center justify-center font-heading font-bold shrink-0">3</div>
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Receive instant confirmation with driver contact</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body">Get your booking confirmation immediately with driver details.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Route Info</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Madinah Airport to Masjid Nabawi Taxi Services</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">Distance & Time</h3>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-4">
                    The journey from Madinah Airport to Masjid Nabawi spans 21.6 kilometers across sacred terrain. This 26-minute drive connects you to the Prophet's Mosque at reasonable rates every pilgrim can afford.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Our experienced drivers navigate the quickest paths to reduce your journey time. Group pilgrims often choose bus transportation from Madinah Airport to Masjid Nabawi for collective travel.
                  </p>
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">Areas We Serve</h3>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-4">
                    Our Madinah Airport to Sofitel hotel taxi service offers premium comfort. The Madinah Airport to Pullman Zamzam Medinah Hotel taxi puts you steps from Masjid Nabawi.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Other popular destinations include Madinah Airport to Ost Hotel, Madinah Airport to Dar al hijra hotel, Madinah Airport to Mirage Al Salam Hotel, Madinah Airport to Dar Al Taqwa Hotel, Madinah Airport to Anwar al Madinah hotel, Madinah Airport to Zaha Taiba hotel, and Madinah Airport to Taiba Front Hotel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Pricing</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Madinah Airport to Hotel Taxi Fares</h2>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 overflow-x-auto mb-8">
                <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6">Current Madinah Airport to Hotel Rates</h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="text-left py-4 px-4 text-[var(--text-1)] font-heading font-bold">Vehicle Type</th>
                      <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">Fare (SAR)</th>
                      <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Sedan (Camry/Sonata)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">170 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">Perfect for couples</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Staria (7-Seater)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">200 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">Ideal for small groups</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Hi-Roof (10-Seater)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">250 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">Spacious family vehicle</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">GMC Yukon</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">350 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">Luxury comfort for families</td>
                    </tr>
                    <tr className="border-b border-[var(--border)] hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Coaster (18-Seater)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">370 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">Group transportation</td>
                    </tr>
                    <tr className="hover:bg-[var(--bg-alt)]/30">
                      <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">Bus (50-Seater)</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body font-bold text-[var(--gold)]">600 SAR</td>
                      <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">Large pilgrim groups</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">How much is the Madinah Airport to Hotels Bus Price and Fare?</h3>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-4">
                  Bus from Madinah Airport to hotel costs significantly less per person for groups. A 50-seater bus costs 600 SAR from Madinah Airport to Madinah hotels. That's 12 SAR per person.
                </p>
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                  Families of 8 or more save up to 60% compared to separate taxis. Our buses include comfortable seating and climate control.
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
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Haramain Umrah Taxi Fleet for Madinah Airport to Hotels</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Sedan Vehicles (Camry/Sonata)"
                  description="Provide reliable Madinah airport to hotels taxi services for couples. Starting at 170 SAR, these vehicles offer excellent value for hotel transfers."
                  imageLabel="Sedan Car"
                  imageUrl="/images/fleet/sedan.webp"
                />
                <Card
                  title="GMC Yukon SUVs"
                  description="Deliver premium Madinah airport to hotels taxi services at 350 SAR. Luxury features include leather seating and enhanced comfort systems."
                  imageLabel="GMC Yukon"
                  imageUrl="/images/fleet/luxury-gmc.png"
                />
                <Card
                  title="Staria 7-Seater Vans"
                  description="Serve extended families requiring spacious Madinah airport to hotels taxi services. Modern interiors accommodate luggage from long pilgrimages."
                  imageLabel="Staria Van"
                  imageUrl="/images/fleet/minivan.webp"
                />
                <Card
                  title="Hi-Roof 10-Seater Vehicles"
                  description="Handle medium groups needing reliable Madinah Airport to hotels taxi services. Flexible seating arrangements suit various family configurations."
                  imageLabel="Hiace Van"
                  imageUrl="/images/fleet/hiace-microbus.png"
                />
                <Card
                  title="Coaster 18-Seater Buses"
                  description="Coordinate organized group Madinah airport to hotels taxi services efficiently. Professional drivers manage multiple hotel drop-offs for tour groups."
                  imageLabel="Coaster"
                  imageUrl="/images/fleet/coaster.jpg"
                />
                <Card
                  title="50-Seater Buses"
                  description="Provide large-scale Madinah airport to hotels taxi services for pilgrim groups. Climate-controlled interiors ensure passenger comfort throughout hotel journeys."
                  imageLabel="Bus"
                  imageUrl="/images/fleet/bus.png"
                />
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
                  question="Can I get an English-speaking driver when traveling to Madinah?"
                  answer="Our drivers communicate effectively in English with international visitors. They know hotel names, understand basic directions, and assist with simple city questions. This eliminates the communication difficulties you might face with standard airport transportation services."
                />
                <FAQItem
                  question="Do your drivers know where the Umrah hotels are located in Madinah?"
                  answer="Our team knows every major hotel around Masjid Nabawi and across the city. We regularly serve guests at properties like Hilton, Marriott, and local accommodations near the Prophet's Mosque. You avoid the frustration of explaining hotel locations to unfamiliar drivers."
                />
                <FAQItem
                  question="Can families request child seats for airport hotel transfers?"
                  answer="We have child seats when you mention your children's ages during the booking process. This keeps your family safe and compliant with local transportation requirements. Just let us know each child's age when making your reservation."
                />
                <FAQItem
                  question="When should I reserve my airport hotel transfer?"
                  answer="Book your ride 24 hours ahead for guaranteed service availability. We sometimes handle last-minute requests depending on fleet availability. During peak pilgrimage periods, reserve 2-3 days early to secure your preferred vehicle option."
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Ready to Book Your Madinah Airport to Hotel Taxi?</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Secure your Madinah Airport to Hotel taxi service now. Contact us for immediate reservation. Keep your spiritual journey peaceful - reserve now and travel comfortably.
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
