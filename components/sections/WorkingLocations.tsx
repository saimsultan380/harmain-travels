"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WorkingLocations() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="working-locations">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-4 py-1.5 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-5">
              Service Areas
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-6 leading-tight">
              Our Working Locations
            </h2>
            <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
              We provide premium taxi services across the most vital hubs and spiritual cities in Saudi Arabia, ensuring you reach your destination with comfort and ease.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden"
        >
          <Image
            src="/images/Our Working Locations.jpeg"
            alt="Our Working Locations"
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-3xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
