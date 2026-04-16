"use client";

import { motion } from "framer-motion";

export function RouteMapGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-square max-w-[500px] ${className}`}>
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Paths */}
        <path id="jed-mak" d="M100 400 Q 200 350 250 250" stroke="var(--border-dark)" strokeWidth="4" strokeDasharray="8 8" fill="none" />
        <path id="mak-mad" d="M250 250 Q 350 150 400 100" stroke="var(--border-dark)" strokeWidth="4" strokeDasharray="8 8" fill="none" />
        
        {/* Animated Path Lines */}
        <motion.path 
          d="M100 400 Q 200 350 250 250" 
          stroke="var(--gold)" strokeWidth="4" strokeDasharray="8 8" fill="none"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M250 250 Q 350 150 400 100" 
          stroke="var(--gold)" strokeWidth="4" strokeDasharray="8 8" fill="none"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* City Nodes */}
        {/* Jeddah */}
        <g transform="translate(100, 400)">
          <motion.circle cx="0" cy="0" r="16" fill="var(--green-soft)" 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} 
            transition={{ duration: 2, repeat: Infinity }} 
          />
          <circle cx="0" cy="0" r="8" fill="var(--green)" />
          <text x="-15" y="25" fill="var(--text-1)" fontSize="14" fontWeight="600" fontFamily="var(--font-poppins)">Jeddah</text>
        </g>

        {/* Makkah */}
        <g transform="translate(250, 250)">
          <motion.circle cx="0" cy="0" r="20" fill="var(--gold-soft)" 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} 
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} 
          />
          <circle cx="0" cy="0" r="10" fill="var(--gold)" />
          <text x="15" y="5" fill="var(--text-1)" fontSize="16" fontWeight="700" fontFamily="var(--font-poppins)">Makkah</text>
        </g>

        {/* Madinah */}
        <g transform="translate(400, 100)">
          <motion.circle cx="0" cy="0" r="16" fill="var(--green-soft)" 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} 
            transition={{ duration: 2, repeat: Infinity, delay: 1 }} 
          />
          <circle cx="0" cy="0" r="8" fill="var(--green)" />
          <text x="-25" y="-15" fill="var(--text-1)" fontSize="14" fontWeight="600" fontFamily="var(--font-poppins)">Madinah</text>
        </g>
        
        {/* Moving Cars */}
        <motion.circle r="4" fill="var(--text-1)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M100 400 Q 200 350 250 250" />
        </motion.circle>
        <motion.circle r="4" fill="var(--text-1)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M250 250 Q 350 150 400 100" />
        </motion.circle>
      </svg>
    </div>
  );
}