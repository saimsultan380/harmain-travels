"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function BorderTraceCard({ 
  children, 
  className = "" 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div 
      className={`relative group rounded-xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] ${className}`}
      whileHover="hover"
    >
      {/* SVG Border Trace */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 rounded-xl" xmlns="http://www.w3.org/2000/svg">
        <motion.rect 
          x="0" y="0" width="100%" height="100%" rx="12" ry="12"
          fill="none" 
          stroke="var(--gold)" 
          strokeWidth="2"
          strokeDasharray={1000}
          initial={{ strokeDashoffset: 1000 }}
          variants={{
            hover: { strokeDashoffset: 0 }
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </svg>
      
      <div className="relative z-0 h-full">
        {children}
      </div>
    </motion.div>
  );
}