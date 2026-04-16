"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PilgrimJourneyTimeline({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const milestones = [
    { id: 1, label: "Arrive Airport", y: 50 },
    { id: 2, label: "Reach Makkah", y: 150 },
    { id: 3, label: "Perform Umrah", y: 250 },
    { id: 4, label: "Ziyarat", y: 350 },
    { id: 5, label: "Madinah", y: 450 },
    { id: 6, label: "Return", y: 550 },
  ];

  return (
    <div ref={ref} className={`relative w-full h-[600px] ${className}`}>
      <svg width="100%" height="600" viewBox="0 0 320 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Line */}
        <line x1="120" y1="0" x2="120" y2="600" stroke="var(--border-dark)" strokeWidth="4" strokeDasharray="8 8" />
        
        {/* Animated Line */}
        <motion.line 
          x1="120" y1="0" x2="120" y2="600" 
          stroke="var(--gold)" strokeWidth="4"
          style={{ pathLength }}
        />

        {/* Milestones */}
        {milestones.map((m) => {
          return (
            <g key={m.id}>
              {/* Node */}
              <motion.circle 
                cx="120" cy={m.y} r="8" fill="var(--bg-card)" stroke="var(--gold)" strokeWidth="3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              
              {/* Label */}
              <motion.text 
                x="150" y={m.y + 5}
                textAnchor="start"
                fill="var(--text-1)" 
                fontSize="14" 
                fontWeight="600" 
                fontFamily="var(--font-poppins)"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {m.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}