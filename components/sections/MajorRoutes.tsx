"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const routes = [
  { from: "Jeddah Airport", to: "Makkah", href: "/jeddah-airport-to-makkah" },
  { from: "Makkah", to: "Jeddah", href: "/makkah-to-jeddah" },
  { from: "Makkah", to: "Madinah", href: "/makkah-to-madinah" },
  { from: "Madinah", to: "Makkah", href: "/madinah-to-makkah" },
  { from: "Madinah", to: "Jeddah", href: "/madinah-aiport-to-hotels" },
  { from: "Makkah", to: "Taif", href: "/our-taxi-services-pricing" },
  { from: "Makkah", to: "Badr", href: "/madinah-to-badar-badr-ziyarat-return-taxi-fare-service" },
  { from: "Madinah", to: "Badr", href: "/madinah-to-badar-badr-ziyarat-return-taxi-fare-service" },
  { from: "Jeddah Airport", to: "Madinah", href: "/madinah-aiport-to-hotels" },
];

export function MajorRoutes() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/madinah-aiport-to-hotels.jpeg')",
          backgroundAttachment: "fixed"
        }}
      />
      {/* Strong overlay — ensures text is readable on both light and dark themes */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-5" style={{ color: '#ffffff' }}>
            Major Routes
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-5 leading-tight" style={{ color: '#ffffff', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
            Major Routes Covered by our<br className="hidden md:block" /> Taxi Service in Saudi Arabia
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
            We cover the most popular routes for pilgrims and travelers across Saudi Arabia. Whether you need a quick Umrah taxi in Makkah, a ziyarat trip, an inter-city or a long-distance transfer, we've got you covered.
          </p>
        </motion.div>

        {/* Routes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {routes.map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={route.href}
                className="group flex items-center justify-between gap-4 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-5 py-4 hover:bg-white/25 hover:border-[var(--gold)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[var(--gold)]/30 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[var(--gold)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/70 font-body text-[11px] uppercase tracking-wider">Taxi Services</p>
                    <p className="text-white font-heading font-bold text-[15px] leading-tight truncate">
                      {route.from} → {route.to}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-white/50 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition-all shrink-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
