"use client";

import { useState, useEffect } from "react";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { useI18n } from "@/lib/i18n";
import { CheckCircle2, ArrowRight } from "lucide-react";

const WhatsAppIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
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

const bannerSlides = [
  {
    id: 1,
    image: "/images/banner 1.png",
    alt: "Banner 1"
  },
  {
    id: 2,
    image: "/images/banner 2.png",
    alt: "Banner 2"
  },
  {
    id: 3,
    image: "/images/banner3.png",
    alt: "Banner 3"
  }
];

export function Hero() {
  const [particles, setParticles] = useState<
    {
      id: number;
      width: string;
      height: string;
      backgroundColor: string;
      left: string;
      opacity: number;
      xAnim: number;
      duration: number;
      delay: number;
    }[]
  >([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, tm } = useI18n();

  useEffect(() => {
    setParticles(
      Array.from({ length: 16 }).map((_, i) => ({
        id: i,
        width: Math.random() * 3 + 2 + "px",
        height: Math.random() * 3 + 2 + "px",
        backgroundColor: i % 2 === 0 ? "#F5C842" : "#00A854",
        left: Math.random() * 100 + "%",
        opacity: Math.random() * 0.25 + 0.08,
        xAnim: (Math.random() - 0.5) * 80,
        duration: Math.random() * 10 + 18,
        delay: Math.random() * 6,
      }))
    );
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" },
    },
  };

  const trustBadges = tm<string[]>("hero.trustBadges", [
    "Licensed Drivers",
    "Fixed Pricing",
    "24/7",
    "Multilingual",
  ]);

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Banner Slider Background */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={bannerSlides[currentSlide].image}
              alt={bannerSlides[currentSlide].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#F5C842] scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-black/45 z-10" />

      {/* Islamic pattern */}
      <IslamicGeometricBg className="opacity-[0.04] z-10" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none z-15"
          style={{
            width: p.width,
            height: p.height,
            backgroundColor: p.backgroundColor,
            left: p.left,
            bottom: "-10%",
            opacity: p.opacity,
            willChange: "transform",
          }}
          animate={{ y: ["0vh", "-120vh"], x: [0, p.xAnim] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      {/* Content — centered */}
      <div className="container mx-auto px-6 lg:px-8 relative z-30 flex flex-col items-center text-center py-12">
        <motion.div
          className="flex flex-col items-center max-w-3xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 text-white font-body font-semibold text-[10px] uppercase tracking-[0.25em] px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block animate-pulse shrink-0" />
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold leading-[1.12] mb-4"
          >
            <span
              className="block text-[42px] md:text-[56px] lg:text-[72px]"
              style={{ color: "#F5C842" }}
            >
              {t("hero.titleGold")}
            </span>
            <span className="block text-[42px] md:text-[56px] lg:text-[72px] text-white">
              {t("hero.titleMain")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-white/75 font-body text-sm md:text-base max-w-xl mb-5 leading-[1.75]"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Typewriter */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-3 font-heading font-bold text-white mb-8 h-8"
          >
            <span
              className="w-[3px] h-5 rounded-full shrink-0"
              style={{ backgroundColor: "#F5C842" }}
            />
            <span className="text-base md:text-[17px]">
              <TypewriterText
                texts={tm<string[]>("hero.typewriter", [
                  "Makkah Transfer",
                  "Madinah Transfer",
                  "Jeddah Airport Pickup",
                  "Ziyarat Tours",
                ])}
              />
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <a
              href="https://wa.me/966598401594"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 bg-[var(--green)] text-white font-body font-semibold rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-black/30 text-sm"
            >
              <WhatsAppIcon size={19} className="text-white shrink-0" />
              {t("common.bookOnWhatsApp")}
            </a>
            <a
              href="#services"
              className="flex items-center gap-2.5 px-7 py-3.5 border-2 border-white/50 text-white font-body font-semibold rounded-xl hover:bg-white/15 hover:border-white/70 active:scale-95 transition-all backdrop-blur-sm text-sm"
            >
              {t("common.viewServices")}
              <ArrowRight size={17} className="shrink-0" />
            </a>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="w-12 h-px bg-white/20 mb-6"
          />

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[12px] font-body font-medium text-white border border-white/20 bg-white/10 backdrop-blur-sm"
              >
                <CheckCircle2 size={13} className="text-[#4ade80] shrink-0" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
