"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-1)] hover:border-[var(--gold)] transition-colors overflow-hidden"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          y: isDark ? 20 : 0,
          opacity: isDark ? 0 : 1,
          rotate: isDark ? 90 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          y: isDark ? 0 : -20,
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : -90
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon size={18} />
      </motion.div>
    </button>
  );
}