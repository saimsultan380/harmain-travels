"use client";

import { motion } from "framer-motion";

export function MoonCrescentIcon({ className = "", size = 32 }: { className?: string, size?: number }) {
  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{ filter: ["drop-shadow(0 0 2px var(--gold))", "drop-shadow(0 0 8px var(--gold))", "drop-shadow(0 0 2px var(--gold))"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path 
        d="M16 2C16 2 24 6 24 16C24 26 16 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" 
        fill="var(--gold)" 
      />
      <motion.path 
        d="M10 10L12 14L16 16L12 18L10 22L8 18L4 16L8 14L10 10Z" 
        fill="var(--gold)" 
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </motion.svg>
  );
}