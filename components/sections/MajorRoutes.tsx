"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const routes = [
  { 
    title: "Taxi Service From Jeddah Airport to Makkah", 
    image: "/images/jeddah airport to makkah.png", 
    href: "/jeddah-airport-to-makkah/" 
  },
  { 
    title: "Taxi Service From Jeddah Airport to Madinah", 
    image: "/images/jeddah airport to madinah.png", 
    href: "/madinah-aiport-to-hotels/" 
  },
  { 
    title: "Taxi Service From Madinah to Badar", 
    image: "/images/madinah to badar.png", 
    href: "/madinah-to-badar-badr-ziyarat-return-taxi-fare-service/" 
  },
  { 
    title: "Taxi Service From Madinah to Jeddah", 
    image: "/images/madinah to jeddah.png", 
    href: "/madinah-aiport-to-hotels/" 
  },
  { 
    title: "Taxi Service From Madinah to Makkah", 
    image: "/images/madinah to makkah.png", 
    href: "/madinah-to-makkah/" 
  },
  { 
    title: "Taxi Service From Makkah to Badar", 
    image: "/images/makkah to badar.png", 
    href: "/madinah-to-badar-badr-ziyarat-return-taxi-fare-service/" 
  },
  { 
    title: "Taxi Service From Makkah to Jeddah", 
    image: "/images/makkah to jeddah.png", 
    href: "/makkah-to-jeddah/" 
  },
  { 
    title: "Taxi Service From Makkah to Madinah", 
    image: "/images/makkah to madinah.png", 
    href: "/makkah-to-madinah/" 
  },
  { 
    title: "Taxi Service From Makkah to Taif", 
    image: "/images/makkah to taif.png", 
    href: "/our-taxi-services-pricing/" 
  },
];

export function MajorRoutes() {
  const [currentIndex, setCurrentIndex] = useState(routes.length); // Start at the middle set for infinite feel
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoSlideInterval = 4000; // 4 seconds

  // Triple the routes for seamless looping
  const extendedRoutes = [...routes, ...routes, ...routes];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, autoSlideInterval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset index when reaching ends of the middle set to maintain infinite loop
  useEffect(() => {
    if (currentIndex >= routes.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(routes.length);
      }, 500); // Match transition duration
    } else if (currentIndex < routes.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(routes.length * 2 - 1);
      }, 500);
    }
  }, [currentIndex]);

  return (
    <section className="relative py-24 bg-[var(--bg)] overflow-hidden" id="major-routes">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-4 py-1.5 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-5">
              Major Routes
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-6 leading-tight">
              Popular Routes Covered by our Taxi Service
            </h2>
            <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Reliable and comfortable taxi services between major cities and spiritual hubs in Saudi Arabia. We ensure a safe and smooth journey for every pilgrim.
            </p>

            {/* Navigation Arrows for all devices */}
            <div className="flex justify-center gap-4">
              <button
                onClick={handlePrev}
                className="p-3.5 rounded-full bg-[var(--bg-card)] shadow-md border border-[var(--border)] text-[var(--text-2)] hover:bg-[var(--green)] hover:text-white hover:border-[var(--green)] transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={handleNext}
                className="p-3.5 rounded-full bg-[var(--bg-card)] shadow-md border border-[var(--border)] text-[var(--text-2)] hover:bg-[var(--green)] hover:text-white hover:border-[var(--green)] transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Slider Container */}
        <div className="relative group/slider">
          {/* Slider Content */}
          <div className="relative overflow-hidden px-1 py-4">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / extendedRoutes.length)}%` }}
              transition={isTransitioning ? { type: "spring", stiffness: 200, damping: 25 } : { duration: 0 }}
              style={{ 
                width: `${(extendedRoutes.length / itemsToShow) * 100}%`
              }}
            >
              {extendedRoutes.map((route, i) => (
                <div 
                  key={i} 
                  style={{ width: `${100 / extendedRoutes.length}%` }}
                  className="px-4 shrink-0"
                >
                  <Link
                    href={route.href}
                    className="group block"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-3xl mb-6 bg-[var(--bg-card)] border border-[var(--border)] shadow-sm group-hover:shadow-2xl group-hover:border-[var(--green)] transition-all duration-500">
                      <Image
                        src={route.image}
                        alt={route.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 right-4 bg-[var(--bg-card)]/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[var(--green)] uppercase tracking-wider shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Top Rated
                      </div>
                    </div>
                    
                    {/* Centered Title */}
                    <div className="text-center px-2">
                      <h3 className="text-xl font-heading font-bold text-[var(--text-1)] group-hover:text-[var(--green)] transition-colors duration-300 leading-snug mb-3">
                        {route.title}
                      </h3>
                      <div className="inline-flex items-center text-[var(--gold)] font-body text-sm font-bold uppercase tracking-widest gap-2">
                        <span>Book Ride</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Navigation Dots (Representing original routes) */}
          <div className="flex justify-center gap-2 mt-10 md:hidden">
            {routes.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(routes.length + i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  (currentIndex % routes.length) === i ? "w-8 bg-[var(--green)]" : "bg-[var(--border)]"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



