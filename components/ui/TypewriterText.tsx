"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function TypewriterText({ texts, className = "" }: { texts: string[], className?: string }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(prev => prev - 1), 50);
      } else {
        setIsDeleting(false);
        setTextIndex(prev => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => setCharIndex(prev => prev + 1), 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <div className={`inline-block ${className}`}>
      <span>{texts[textIndex].substring(0, charIndex)}</span>
      <motion.span 
        className="inline-block w-[2px] h-[1em] bg-[var(--gold)] ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </div>
  );
}