"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { KaabaIllustration } from "@/components/graphics/KaabaIllustration";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { MoonCrescentIcon } from "@/components/graphics/MoonCrescentIcon";
import { useI18n } from "@/lib/i18n";
import { CheckCircle2, ArrowRight } from "lucide-react";

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Hero() {
  const [particles, setParticles] = useState<any[]>([]);
  const [videoReady, setVideoReady] = useState(false);
  const { t, tm } = useI18n();

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        width: Math.random() * 4 + 2 + "px",
        height: Math.random() * 4 + 2 + "px",
        backgroundColor: i % 2 === 0 ? "var(--gold)" : "var(--green)",
        left: Math.random() * 100 + "%",
        opacity: Math.random() * 0.3 + 0.1,
        xAnim: (Math.random() - 0.5) * 100,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      }))
    );
  }, []);
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const trustBadges = tm<string[]>("hero.trustBadges", ["Licensed Drivers", "Fixed Pricing", "24/7", "Multilingual"]);

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-[var(--bg)] flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero%20bg%20image.avif')" }}
      />
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        onCanPlayThrough={() => setVideoReady(true)}
        onLoadedData={() => setVideoReady(true)}
      >
        <source src="/images/hero-bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-black/40" />

      <IslamicGeometricBg className="opacity-[0.03]" />
      
      {/* Floating Dots */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.width,
            height: p.height,
            backgroundColor: p.backgroundColor,
            left: p.left,
            bottom: "-10%",
            opacity: p.opacity
          }}
          animate={{
            y: ["0vh", "-120vh"],
            x: [0, p.xAnim]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay
          }}
        />
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow py-12">
        {/* Left Column */}
        <motion.div 
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-[var(--green-soft)]">
              {t("hero.badge")}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-[72px] leading-tight font-heading font-extrabold text-white mb-6"
          >
            <span className="block text-[var(--gold)]">{t("hero.titleGold")}</span>
            <span className="block text-white">{t("hero.titleMain")}</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-white/85 font-body text-lg max-w-xl mb-8 leading-relaxed">
            {t("hero.subtitle")}
          </motion.p>
          
          <motion.div variants={itemVariants} className="text-xl font-heading font-bold text-white mb-10 h-8">
            <TypewriterText 
              texts={tm<string[]>("hero.typewriter", ["Makkah Transfer", "Madinah Transfer", "Jeddah Airport Pickup", "Ziyarat Tours"])} 
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <a href="https://wa.me/966598401594" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[var(--green)] text-white font-body font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-[var(--green-soft)]">
              <WhatsAppIcon size={20} className="text-white" />
              {t("common.bookOnWhatsApp")}
            </a>
            <a href="#services" className="flex items-center gap-2 px-6 py-3 border-2 border-[var(--green)] text-[var(--green)] font-body font-semibold rounded-lg hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white transition-all">
              {t("common.viewServices")}
              <ArrowRight size={20} />
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-alt)] border border-[var(--border)] rounded-md text-sm font-body font-medium text-[var(--text-2)]">
                <CheckCircle2 size={14} className="text-[var(--green)]" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right Column */}
        <motion.div 
          className="relative flex flex-col items-center justify-center lg:h-[600px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <MoonCrescentIcon className="absolute top-0 right-0 opacity-10 w-64 h-64 -z-10" />
          <KaabaIllustration className="w-full max-w-[450px] z-10" />
          <div className="w-full max-w-[400px] mt-[-40px] z-20">
            <AnimatedCarOnRoad />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
