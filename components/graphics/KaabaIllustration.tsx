"use client";

import { motion } from "framer-motion";

export function KaabaIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative w-full max-w-[400px] aspect-square flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Slow pulsing glow ring around base */}
      <motion.div 
        className="absolute bottom-10 w-3/4 h-20 bg-[var(--gold)] rounded-[100%] blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        {/* Base shadow */}
        <ellipse cx="200" cy="320" rx="140" ry="20" fill="black" opacity="0.3" />
        
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main Cube - Left Face */}
          <path d="M200 300 L90 260 L90 120 L200 160 Z" fill="#1A1A1A" />
          
          {/* Main Cube - Right Face */}
          <path d="M200 300 L310 260 L310 120 L200 160 Z" fill="#242424" />
          
          {/* Main Cube - Top Face */}
          <path d="M200 160 L90 120 L200 80 L310 120 Z" fill="#2A2A2A" />
          
          {/* Gold Band (Kiswa detail) */}
          <path d="M90 150 L200 190 L310 150 L310 165 L200 205 L90 165 Z" fill="var(--gold)" />
          
          {/* Calligraphy lines on gold band (abstract) */}
          <path d="M100 158 L190 190" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M210 190 L300 158" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="4 2" />
          
          {/* Golden Door */}
          <path d="M130 220 L170 235 L170 280 L130 265 Z" fill="var(--gold)" />
          
          {/* Door details */}
          <path d="M140 230 L160 238 L160 270 L140 262 Z" fill="#8A7020" />
          <path d="M150 235 L150 265" stroke="#1A1A1A" strokeWidth="1" />
          
          {/* Corner detail (Rukn Yamani area) */}
          <path d="M195 160 L205 160 L205 300 L195 300 Z" fill="#111" />
        </motion.g>
      </svg>
    </motion.div>
  );
}