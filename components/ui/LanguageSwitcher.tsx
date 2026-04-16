"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Locale, useI18n } from "@/lib/i18n";
import Image from "next/image";

const languages: Record<Locale, { label: string; code: string }> = {
  en: { label: "English", code: "gb" },
  ar: { label: "Arabic", code: "sa" },
  id: { label: "Indonesia", code: "id" },
  ms: { label: "Malaysia", code: "my" },
};

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]/50 px-2 py-1.5 text-[var(--text-1)] shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[var(--gold)] hover:bg-[var(--bg-card)] active:scale-95 sm:gap-2.5 sm:px-3.5 sm:py-2"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="w-5 h-5 rounded-full overflow-hidden border border-[var(--border)] flex-shrink-0 relative">
          <Image 
            src={`https://flagcdn.com/w40/${languages[locale].code}.png`} 
            alt={languages[locale].label}
            width={20}
            height={20}
            className="w-full h-full object-cover scale-110 transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <span className="text-sm font-body font-semibold hidden sm:inline-block">
          {languages[locale].label}
        </span>
        <ChevronDown 
          size={14} 
          className={`text-[var(--text-2)] transition-transform duration-500 ${isOpen ? 'rotate-180 text-[var(--gold)]' : 'group-hover:text-[var(--text-1)]'}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 12, scale: 0.9, filter: "blur(4px)" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute right-0 mt-3 min-w-[180px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/95 backdrop-blur-md shadow-2xl z-50 p-1.5 ring-1 ring-black/5"
          >
            <div className="flex flex-col gap-1">
              {(Object.keys(languages) as Locale[]).map((code) => (
                <button
                  key={code}
                  onClick={() => handleSelect(code)}
                  className={`group/item flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-body text-left transition-all ${
                    locale === code
                      ? "bg-[var(--gold)] text-white shadow-md shadow-[var(--gold)]/20"
                      : "text-[var(--text-2)] hover:bg-[var(--bg-alt)] hover:text-[var(--text-1)]"
                  }`}
                  role="option"
                  aria-selected={locale === code}
                >
                  <div className={`w-6 h-6 rounded-full overflow-hidden border border-[var(--border)] flex-shrink-0 shadow-sm ${locale === code ? 'border-white/40' : ''}`}>
                    <Image 
                      src={`https://flagcdn.com/w40/${languages[code].code}.png`} 
                      alt={languages[code].label}
                      width={24}
                      height={24}
                      className="w-full h-full object-cover scale-110 transition-transform duration-300 group-hover/item:scale-125"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold uppercase text-[10px] opacity-70 mb-0.5">{languages[code].code}</span>
                    <span className="font-medium">{languages[code].label}</span>
                  </div>
                  {locale === code && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="ml-auto"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
