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
      className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/80 bg-white/90 text-[#9D812E] shadow-sm shadow-[#9D812E]/15 transition-all hover:bg-white hover:shadow-[#9D812E]/30 dark:border-[#D4AF37] dark:bg-black/70 dark:text-[#F2D373] dark:shadow-[#D4AF37]/20 dark:hover:bg-black/85"
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
        <Sun size={18} className="text-[#9D812E] dark:text-[#D4AF37]" />
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
        <Moon size={18} className="text-[#F8E7A8]" />
      </motion.div>
    </button>
  );
}