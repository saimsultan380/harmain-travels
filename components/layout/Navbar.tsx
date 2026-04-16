"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoonCrescentIcon } from "@/components/graphics/MoonCrescentIcon";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/graphics/SocialIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, tm } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const links = (tm<string[]>("nav.links", ["Services", "Fleet", "Pricing", "Ziyarat", "About", "FAQ"])).map((name, idx) => ({
    name,
    href: ["#services", "#fleet", "#pricing", "#ziyarat", "#about", "#faq"][idx] ?? "#",
  }));

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--gold)]/30 py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <MoonCrescentIcon size={36} />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-[var(--gold)] text-xl leading-none tracking-tight">Haramain</span>
            <span className="font-body font-semibold text-[var(--green)] text-[11px] uppercase tracking-widest mt-1">{t("nav.brandBottom")}</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative font-body font-medium text-[var(--text-2)] hover:text-[var(--gold)] transition-colors group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--gold)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <a 
            href="https://wa.me/966598401594" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--green)] text-white font-body font-semibold rounded-lg hover:bg-[#006633] transition-colors shadow-md shadow-[var(--green-soft)]"
          >
            <WhatsAppIcon size={18} />
            {t("common.whatsapp")}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--text-1)] p-2 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[1px]"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 top-0 z-50 h-dvh w-[86%] max-w-[340px] overflow-y-auto border-r border-[var(--border)] bg-[var(--bg-card)] p-5 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <MoonCrescentIcon size={28} />
                  <span className="font-heading font-bold text-lg text-[var(--text-1)]">Haramain</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md border border-[var(--border)] p-2 text-[var(--text-1)]"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg border border-transparent px-3 py-2.5 font-heading font-semibold text-lg text-[var(--text-1)] transition-colors hover:border-[var(--border)] hover:bg-[var(--bg-alt)]"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.a
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="https://wa.me/966598401594"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--green)] px-5 py-3 font-body font-semibold text-white"
              >
                <WhatsAppIcon size={20} />
                {t("common.bookOnWhatsApp")}
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 flex items-center gap-6 border-t border-[var(--border)] pt-5"
              >
                <a href="https://www.facebook.com/haramainumrahtaxii" target="_blank" rel="noopener noreferrer" className="text-[var(--text-2)] hover:text-[#1877F2] transition-colors">
                  <FacebookIcon size={24} />
                </a>
                <a href="https://www.instagram.com/haramainumrah_taxi/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-2)] hover:text-[#E4405F] transition-colors">
                  <InstagramIcon size={24} />
                </a>
                <a href="https://www.linkedin.com/company/haramain-umrah-taxi" target="_blank" rel="noopener noreferrer" className="text-[var(--text-2)] hover:text-[#0A66C2] transition-colors">
                  <LinkedinIcon size={24} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
