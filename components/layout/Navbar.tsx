"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoonCrescentIcon } from "@/components/graphics/MoonCrescentIcon";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/graphics/SocialIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { Menu, X, ChevronDown, ChevronRight, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    items?: { label: string; href: string }[];
    href?: string;
  }[];
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredChild, setHoveredChild] = useState<string | null>(null);
  const [activeChildAccordion, setActiveChildAccordion] = useState<string | null>(null);
  const { t, tm } = useI18n();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setHoveredChild(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = tm<NavItem[]>("nav.items", []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--gold)]/20 py-2 shadow-lg" 
          : "bg-[var(--bg)] py-3 md:py-4 border-b border-[var(--border)]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 sm:gap-3">
            <MoonCrescentIcon size={32} className="sm:w-10 sm:h-10 transition-transform group-hover:scale-110 text-[var(--gold)]" />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl leading-none tracking-tight text-[var(--text-1)]">Haramain</span>
              <span className="font-body font-semibold text-[10px] uppercase tracking-[0.2em] mt-1 text-[var(--green)]">
                {t("nav.brandBottom")}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative group p-1"
                onMouseEnter={() => {
                  setActiveDropdown(item.label);
                  if (item.children && item.children.length > 0) {
                    setHoveredChild(item.children[0].label);
                  }
                }}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setHoveredChild(null);
                }}
              >
                {item.href ? (
                  <Link 
                    href={item.href}
                    className={`px-3 py-2 flex items-center gap-1.5 font-body font-semibold text-sm transition-all rounded-lg ${
                      isActive(item.href)
                        ? "bg-[var(--gold-soft)] text-[var(--gold)]"
                        : "text-[var(--text-1)] hover:bg-[var(--gold-soft)] hover:text-[var(--gold)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button 
                    className="px-3 py-2 flex items-center gap-1.5 font-body font-semibold text-sm transition-all rounded-lg text-[var(--text-1)] hover:bg-[var(--gold-soft)] hover:text-[var(--gold)]"
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                )}

                {/* Submenu - Smart Side Hover */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute left-0 top-full mt-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden"
                    >
                      {/* Check if all children are direct links (no sub-items) */}
                      {item.children.every(child => !child.items) ? (
                        /* Simple single-column list for direct links */
                        <div className="p-2 min-w-[200px]">
                          {item.children.map((child) => (
                            child.href ? (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`block px-4 py-3 text-[14px] font-normal rounded-xl transition-all ${
                                  isActive(child.href)
                                    ? "bg-[var(--gold-soft)] text-[var(--gold)]"
                                    : "text-[var(--text-1)] hover:text-[var(--gold)] hover:bg-[var(--gold-soft)]"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ) : null
                          ))}
                        </div>
                      ) : (
                        /* Complex two-panel layout for categories with sub-items */
                        <div className="flex min-w-[600px]">
                          {/* Sidebar (Categories) */}
                          <div className="w-[260px] bg-[var(--bg-alt)]/50 border-r border-[var(--border)] p-2">
                            {item.children.map((child) => (
                              <div 
                                key={child.label}
                                onMouseEnter={() => setHoveredChild(child.label)}
                                className="relative"
                              >
                                {child.href && !child.items ? (
                                  <Link
                                    href={child.href}
                                    className={`flex items-center justify-between w-full px-4 py-3 text-[14px] font-normal rounded-xl transition-all ${
                                      isActive(child.href) || hoveredChild === child.label
                                        ? "bg-[var(--gold)] text-white shadow-md"
                                        : "text-[var(--text-1)] hover:bg-[var(--bg)]"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                ) : (
                                  <div
                                    className={`flex items-center justify-between w-full px-4 py-3 text-[14px] font-normal rounded-xl transition-all cursor-default ${
                                      hoveredChild === child.label 
                                        ? "bg-[var(--gold)] text-white shadow-md" 
                                        : "text-[var(--text-1)] hover:bg-[var(--bg)]"
                                    }`}
                                  >
                                    {child.label}
                                    {child.items && <ChevronRight size={14} className={hoveredChild === child.label ? "opacity-100" : "opacity-30"} />}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Content Panel (Sub-items) */}
                          <div className="flex-1 p-6 bg-[var(--bg-card)]">
                            <AnimatePresence mode="wait">
                              {item.children.map((child) => 
                                hoveredChild === child.label && child.items ? (
                                  <motion.div
                                    key={child.label}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-full"
                                  >
                                    <h4 className="text-[var(--gold)] font-heading font-bold text-[10px] uppercase tracking-[0.2em] mb-4 pb-2 border-b border-[var(--gold)]/10">
                                      {child.label}
                                    </h4>
                                    <div className="grid grid-cols-1 gap-1">
                                      {child.items.map((subItem) => (
                                        <Link
                                          key={subItem.label}
                                          href={subItem.href}
                                          className={`group/item flex items-center justify-between px-4 py-2.5 rounded-xl text-[14px] font-normal transition-all ${
                                            isActive(subItem.href)
                                              ? "text-[var(--gold)] bg-[var(--gold-soft)]"
                                              : "text-[var(--text-2)] hover:text-[var(--gold)] hover:bg-[var(--gold-soft)]"
                                          }`}
                                        >
                                          <span>{subItem.label}</span>
                                          <div className="w-6 h-6 rounded-lg bg-[var(--gold)]/0 group-hover/item:bg-[var(--gold)]/10 flex items-center justify-center transition-all">
                                            <ChevronRight size={12} className="opacity-0 group-hover/item:opacity-100 transition-all" />
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                ) : null
                              )}
                            </AnimatePresence>
                            
                            {/* Placeholder if no items */}
                            {item.children.find(c => c.label === hoveredChild && !c.items) && (
                              <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                <MoonCrescentIcon size={48} className="text-[var(--gold)] mb-4" />
                                <p className="text-xs font-body italic">Direct Link Category</p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-xl p-2.5 border border-[var(--border)] text-[var(--text-1)] hover:bg-[var(--bg-alt)] transition-all"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-[var(--bg)] shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-[var(--border)] bg-[var(--bg-alt)]/50">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <MoonCrescentIcon size={32} className="text-[var(--gold)]" />
                  <span className="font-heading font-bold text-xl text-[var(--text-1)]">Haramain</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-[var(--border)] p-2 text-[var(--text-1)] hover:bg-[var(--bg-card)] transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-4 custom-scrollbar">
                <div className="flex flex-col gap-2">
                  {navItems.map((item, i) => (
                    <div key={item.label} className="flex flex-col">
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-heading font-semibold text-lg transition-colors ${
                            isActive(item.href)
                              ? "bg-[var(--gold-soft)] text-[var(--gold)]"
                              : "text-[var(--text-1)] hover:bg-[var(--bg-alt)]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div className="flex flex-col">
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                            className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-heading font-semibold text-lg text-[var(--text-1)] transition-colors ${activeDropdown === item.label ? "bg-[var(--gold-soft)] text-[var(--gold)]" : "hover:bg-[var(--bg-alt)]"}`}
                          >
                            {item.label}
                            <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.label && item.children && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-[var(--bg-alt)]/50 rounded-xl mt-1 ml-2"
                              >
                                {item.children.map((child) => (
                                  <div key={child.label} className="p-2">
                                    {child.items ? (
                                      <div className="flex flex-col gap-1">
                                        <button
                                          onClick={() => setActiveChildAccordion(activeChildAccordion === child.label ? null : child.label)}
                                          className={`flex items-center justify-between w-full px-3 py-2 font-heading font-medium text-[14px] uppercase tracking-wider rounded-md transition-all ${
                                            activeChildAccordion === child.label
                                              ? "text-[var(--gold)] bg-[var(--gold-soft)]"
                                              : "text-[var(--green)] bg-[var(--green-soft)] hover:bg-[var(--gold-soft)] hover:text-[var(--gold)]"
                                          }`}
                                        >
                                          {child.label}
                                          <ChevronDown size={16} className={`transition-transform duration-300 ${activeChildAccordion === child.label ? "rotate-180" : ""}`} />
                                        </button>
                                        <AnimatePresence>
                                          {activeChildAccordion === child.label && (
                                            <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: "auto", opacity: 1 }}
                                              exit={{ height: 0, opacity: 0 }}
                                              className="overflow-hidden ml-2"
                                            >
                                              {child.items.map((sub) => (
                                                <Link
                                                  key={sub.label}
                                                  href={sub.href}
                                                  onClick={() => setMobileMenuOpen(false)}
                                                  className={`block px-4 py-2 text-[14px] font-medium border-l-2 transition-all ${
                                                    isActive(sub.href)
                                                      ? "text-[var(--gold)] border-[var(--gold)] bg-[var(--gold-soft)]"
                                                      : "text-[var(--text-2)] border-transparent hover:text-[var(--gold)] hover:border-[var(--gold)]"
                                                  }`}
                                                >
                                                  {sub.label}
                                                </Link>
                                              ))}
                                            </motion.div>
                                          )}
                                        </AnimatePresence>
                                      </div>
                                    ) : child.href ? (
                                      <Link
                                        href={child.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block px-4 py-2 text-[14px] font-medium transition-all ${
                                          isActive(child.href)
                                            ? "text-[var(--gold)] bg-[var(--gold-soft)]"
                                            : "text-[var(--text-1)] hover:text-[var(--gold)]"
                                        }`}
                                      >
                                        {child.label}
                                      </Link>
                                    ) : null}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-[var(--border)] bg-[var(--bg-alt)]/30">
                <a
                  href="https://wa.me/966598401594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[var(--green)] px-5 py-4 font-body font-bold text-white shadow-xl shadow-green-900/10 active:scale-95 transition-transform"
                >
                  <WhatsAppIcon size={24} />
                  <span>{t("common.bookOnWhatsApp")}</span>
                </a>
                
                <div className="mt-8 flex items-center justify-center gap-6">
                  <a href="https://www.facebook.com/haramainumrahtaxii" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-2)] hover:text-[#1877F2] shadow-sm transition-all">
                    <FacebookIcon size={22} />
                  </a>
                  <a href="https://www.instagram.com/haramainumrah_taxi/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-2)] hover:text-[#E4405F] shadow-sm transition-all">
                    <InstagramIcon size={22} />
                  </a>
                  <a href="https://www.linkedin.com/company/haramain-umrah-taxi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-2)] hover:text-[#0A66C2] shadow-sm transition-all">
                    <LinkedinIcon size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
