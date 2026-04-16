"use client";

import { MoonCrescentIcon } from "@/components/graphics/MoonCrescentIcon";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/graphics/SocialIcons";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--bg-card)] border-t-2 border-[var(--gold)] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <MoonCrescentIcon size={32} />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-[var(--gold)] text-xl leading-none tracking-tight">Haramain</span>
                <span className="font-body font-semibold text-[var(--green)] text-[11px] uppercase tracking-widest mt-1">Umrah Taxi</span>
              </div>
            </Link>
            <p className="text-[var(--text-2)] font-body text-sm leading-relaxed mb-6">
              Your trusted partner for premium, reliable, and comfortable transportation across the holy cities of Saudi Arabia.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/haramainumrahtaxii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a 
                href="https://www.instagram.com/haramainumrah_taxi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[#E4405F] hover:border-[#E4405F] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/haramain-umrah-taxi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-1)] text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Jeddah Airport Transfers', 'Makkah to Madinah', 'Ziyarat Tours', 'VIP & Luxury Taxis', 'Group Bus Bookings', 'Hajj & Umrah Badal'].map((item, i) => (
                <li key={i}>
                  <Link href="#services" className="text-[var(--text-2)] font-body text-sm hover:text-[var(--gold)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cities */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-1)] text-lg mb-6">Cities We Cover</h4>
            <ul className="space-y-4">
              {['Makkah', 'Madinah', 'Jeddah', 'Taif', 'Badr', 'AlUla'].map((city, i) => (
                <li key={i} className="flex items-center gap-2">
                  <MapPin size={14} className="text-[var(--green)]" />
                  <span className="text-[var(--text-2)] font-body text-sm">{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-1)] text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/966598401594" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MessageCircle size={20} className="text-[var(--green)] mt-1" />
                  <div>
                    <span className="block font-heading font-bold text-[var(--text-1)] group-hover:text-[var(--gold)] transition-colors">+966 59 840 1594</span>
                    <span className="text-[var(--text-3)] font-body text-xs">Available 24/7 on WhatsApp</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@haramaintaxi.com" className="flex items-start gap-3 group">
                  <Mail size={20} className="text-[var(--gold)] mt-1" />
                  <div>
                    <span className="block font-heading font-bold text-[var(--text-1)] group-hover:text-[var(--gold)] transition-colors">info@haramaintaxi.com</span>
                    <span className="text-[var(--text-3)] font-body text-xs">For general inquiries</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-[var(--text-2)] mt-1" />
                <div>
                  <span className="block font-heading font-bold text-[var(--text-1)]">24/7 Operations</span>
                  <span className="text-[var(--text-3)] font-body text-xs">Always ready for your journey</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[var(--text-3)] font-body text-sm">
            &copy; {new Date().getFullYear()} Haramain Umrah Taxi. All rights reserved.
          </p>
          <p className="text-[var(--text-3)] font-body text-sm font-medium flex items-center gap-2">
            Proudly serving pilgrims across Saudi Arabia <span className="text-[var(--green)]">🇸🇦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}