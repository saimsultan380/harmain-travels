"use client";

import { motion } from "framer-motion";

export function IslamicGeometricBg({ className = "", opacity = 0.03 }: { className?: string, opacity?: number }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ opacity }}>
      <motion.div 
        className="w-[200%] h-[200%] absolute -top-[50%] -left-[50%] will-change-transform"
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="var(--gold)" strokeWidth="1" />
              <path d="M25 25 L75 25 L75 75 L25 75 Z" fill="none" stroke="var(--gold)" strokeWidth="1" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="var(--gold)" strokeWidth="1" />
              <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="none" stroke="var(--gold)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </motion.div>
    </div>
  );
}