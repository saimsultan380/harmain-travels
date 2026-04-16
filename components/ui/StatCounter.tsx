"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/lib/hooks/useCountUp";

export function StatCounter({ 
  end, 
  label, 
  suffix = "" 
}: { 
  end: number; 
  label: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCountUp(end, 2000, isInView);

  return (
    <motion.div 
      ref={ref}
      className="relative p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl flex flex-col items-center justify-center text-center overflow-hidden group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {/* Animated Border Trace */}
      <motion.div 
        className="absolute inset-0 border border-[var(--gold)] rounded-xl pointer-events-none"
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      <div className="text-[var(--text-2)] font-medium mb-3">
        {label}
      </div>
      <div className="text-4xl md:text-5xl font-heading font-extrabold text-[var(--gold)] leading-none">
        {count}{suffix}
      </div>
    </motion.div>
  );
}