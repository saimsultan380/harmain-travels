"use client";

import { motion } from "framer-motion";

export function VehicleSVG({ type, className = "" }: { type: string, className?: string }) {
  const renderVehicle = () => {
    switch (type) {
      case 'sedan':
        return (
          <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M15 20 L25 10 L65 10 L85 20 L95 20 L95 30 L10 30 L10 20 Z" fill="var(--bg-alt)" stroke="var(--border-dark)" strokeWidth="2" />
            <circle cx="25" cy="30" r="6" fill="var(--text-1)" />
            <circle cx="75" cy="30" r="6" fill="var(--text-1)" />
            <path d="M30 12 L60 12 L75 20 L25 20 Z" fill="var(--bg)" stroke="var(--border-dark)" strokeWidth="1" />
          </svg>
        );
      case 'mini-van':
        return (
          <svg viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M10 15 L25 5 L80 5 L95 20 L95 35 L10 35 Z" fill="var(--bg-alt)" stroke="var(--border-dark)" strokeWidth="2" />
            <circle cx="25" cy="35" r="6" fill="var(--text-1)" />
            <circle cx="75" cy="35" r="6" fill="var(--text-1)" />
            <path d="M30 8 L75 8 L85 20 L25 20 Z" fill="var(--bg)" stroke="var(--border-dark)" strokeWidth="1" />
          </svg>
        );
      case 'luxury-gmc':
        return (
          <svg viewBox="0 0 110 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M10 20 L20 5 L90 5 L105 20 L105 40 L10 40 Z" fill="var(--bg-alt)" stroke="var(--gold)" strokeWidth="2" />
            <circle cx="30" cy="40" r="7" fill="var(--text-1)" />
            <circle cx="85" cy="40" r="7" fill="var(--text-1)" />
            <path d="M25 8 L85 8 L95 20 L20 20 Z" fill="var(--bg)" stroke="var(--border-dark)" strokeWidth="1" />
          </svg>
        );
      case 'hiace-microbus':
        return (
          <svg viewBox="0 0 120 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M5 20 L15 5 L105 5 L115 25 L115 45 L5 45 Z" fill="var(--bg-alt)" stroke="var(--border-dark)" strokeWidth="2" />
            <circle cx="25" cy="45" r="8" fill="var(--text-1)" />
            <circle cx="95" cy="45" r="8" fill="var(--text-1)" />
            <path d="M20 10 L100 10 L105 25 L15 25 Z" fill="var(--bg)" stroke="var(--border-dark)" strokeWidth="1" />
          </svg>
        );
      case 'coaster':
        return (
          <svg viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M5 25 L15 5 L125 5 L135 25 L135 50 L5 50 Z" fill="var(--bg-alt)" stroke="var(--border-dark)" strokeWidth="2" />
            <circle cx="30" cy="50" r="9" fill="var(--text-1)" />
            <circle cx="110" cy="50" r="9" fill="var(--text-1)" />
            <path d="M20 10 L120 10 L125 25 L15 25 Z" fill="var(--bg)" stroke="var(--border-dark)" strokeWidth="1" />
          </svg>
        );
      case 'bus':
        return (
          <svg viewBox="0 0 160 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M5 30 L15 5 L145 5 L155 30 L155 60 L5 60 Z" fill="var(--bg-alt)" stroke="var(--border-dark)" strokeWidth="2" />
            <circle cx="35" cy="60" r="10" fill="var(--text-1)" />
            <circle cx="125" cy="60" r="10" fill="var(--text-1)" />
            <path d="M20 10 L140 10 L145 30 L15 30 Z" fill="var(--bg)" stroke="var(--border-dark)" strokeWidth="1" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {renderVehicle()}
    </motion.div>
  );
}