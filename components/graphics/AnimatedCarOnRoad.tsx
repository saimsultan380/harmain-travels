"use client";

import { motion } from "framer-motion";

export function AnimatedCarOnRoad({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-32 overflow-hidden ${className}`}>
      {/* The Road */}
      <div className="absolute bottom-4 left-0 w-full h-1 bg-[var(--border-dark)]" />
      <motion.div 
        className="absolute bottom-4 left-0 w-full h-1 bg-[var(--gold)]"
        style={{ backgroundImage: "linear-gradient(to right, transparent 50%, var(--gold) 50%)", backgroundSize: "40px 100%" }}
        animate={{ backgroundPositionX: ["0px", "-40px"] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* The Car Container */}
      <motion.div 
        className="absolute bottom-5"
        initial={{ x: "-100%" }}
        animate={{ x: "100vw" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Car Body */}
          <path d="M20 20 L30 10 L80 10 L100 20 L110 20 L110 30 L10 30 L10 20 Z" fill="var(--bg-card)" stroke="var(--border-dark)" strokeWidth="2" strokeLinejoin="round" />
          
          {/* Windows */}
          <path d="M35 12 L75 12 L90 20 L30 20 Z" fill="var(--bg-alt)" stroke="var(--border-dark)" strokeWidth="1" />
          <path d="M60 12 L60 20" stroke="var(--border-dark)" strokeWidth="2" />
          
          {/* Wheels */}
          <motion.circle 
            cx="30" cy="30" r="6" fill="var(--text-1)"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "30px 30px" }}
          />
          <motion.circle 
            cx="90" cy="30" r="6" fill="var(--text-1)"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "90px 30px" }}
          />
          
          {/* Wheel inner details */}
          <circle cx="30" cy="30" r="2" fill="var(--bg)" />
          <circle cx="90" cy="30" r="2" fill="var(--bg)" />
          
          {/* Headlight */}
          <path d="M105 22 L110 22 L110 25 L105 25 Z" fill="var(--gold)" />
          
          {/* Taillight */}
          <path d="M10 22 L15 22 L15 25 L10 25 Z" fill="#E63946" />
        </svg>
        
        {/* Dust particles */}
        <motion.div 
          className="absolute -left-4 bottom-0 w-2 h-2 rounded-full bg-[var(--border-dark)] opacity-50"
          animate={{ x: [-10, -30], y: [0, -10], opacity: [0.5, 0], scale: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute -left-2 bottom-2 w-1.5 h-1.5 rounded-full bg-[var(--border-dark)] opacity-30"
          animate={{ x: [-5, -20], y: [0, -15], opacity: [0.3, 0], scale: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
        />
      </motion.div>
    </div>
  );
}