"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimatedSection({ 
  children, 
  className = "", 
  id 
}: { 
  children: ReactNode; 
  className?: string;
  id?: string;
}) {
  return (
    <motion.section 
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}