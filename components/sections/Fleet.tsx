"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fleet } from "@/lib/data/fleet";
import { useMouseTilt } from "@/lib/hooks/useMouseTilt";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Users, Briefcase } from "lucide-react";
import Image from "next/image";

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width="20"
    height="20"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Fleet() {
  const { t, tm } = useI18n();
  return (
    <AnimatedSection id="fleet" className="py-24 bg-[var(--bg)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-3 py-1 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em]">
            {t("fleet.eyebrow")}
          </span>
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mt-4 mb-4">
            {t("fleet.title")}
          </h2>
          <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto">
            {t("fleet.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((vehicle, i) => {
            const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useMouseTilt();
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ rotateX, rotateY, perspective: 1000 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="h-[250px] w-full mb-6 flex items-center justify-center bg-[var(--bg-alt)] rounded-xl overflow-hidden relative">
                  <Image src={vehicle.image} alt={vehicle.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain p-2 drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-1">
                  {tm<string>(`fleet.names.${i}`, vehicle.name)}
                </h3>
                
                <p className="text-[var(--text-2)] font-body text-sm mb-4 line-clamp-2">
                  {tm<string>(`fleet.descriptions.${i}`, vehicle.description)}
                </p>
                
                <div className="text-[var(--gold)] font-heading font-extrabold text-xl mb-6">
                  {t("common.fromSar")} {vehicle.price}
                </div>
                
                <div className="flex items-center gap-6 mb-8 mt-auto">
                  <div className="flex items-center gap-2 text-[var(--text-2)] font-body">
                    <Users size={18} className="text-[var(--green)]" />
                    <span>{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-2)] font-body">
                    <Briefcase size={18} className="text-[var(--green)]" />
                    <span>{vehicle.luggage}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a href="https://wa.me/966598401594" target="_blank" rel="noopener noreferrer" className="flex-[1.2] flex items-center justify-center gap-2 py-3 bg-[var(--green)] text-white font-body font-semibold rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all shadow-sm">
                    <WhatsAppIcon className="text-white" />
                    {t("common.whatsapp")}
                  </a>
                  <a href="#how-to-book" className="flex-1 flex items-center justify-center py-3 border-2 border-[var(--green)] text-[var(--green)] font-body font-semibold rounded-lg hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white transition-all">
                    {t("common.bookNow")}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
