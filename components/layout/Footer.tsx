"use client";

import { MoonCrescentIcon } from "@/components/graphics/MoonCrescentIcon";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/graphics/SocialIcons";
import { Mail, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t, tm } = useI18n();
  
  const services = tm("footer.services") as string[];
  const fleets = tm("footer.fleets") as Array<{ title: string; href: string }>;
  const routes = tm("footer.routes") as Array<{ title: string; href: string }>;

  return (
    <footer className="bg-[var(--bg-card)] border-t-2 border-[var(--gold)] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/images/logo.png" 
                alt="Haramain Umrah Taxi Logo" 
                width={144}
                height={56}
                className="object-contain w-36 h-14"
              />
            </Link>
            <p className="text-[var(--text-2)] font-body text-sm leading-relaxed mb-6">
              {t("footer.description")}
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
            <h4 className="font-heading font-bold text-[var(--text-1)] text-lg mb-6">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-4">
              {services.map((item, i) => (
                <li key={i}>
                  <Link href="#services" className="text-[var(--text-2)] font-body text-sm hover:text-[var(--gold)] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Fleets */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-1)] text-lg mb-6">{t("footer.fleetsTitle")}</h4>
            <ul className="space-y-4">
              {fleets.map((fleet, i) => (
                <li key={i}>
                  <Link href={fleet.href} className="text-[var(--text-2)] font-body text-sm hover:text-[var(--gold)] transition-colors">
                    {fleet.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Routes */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-1)] text-lg mb-6">{t("footer.routesTitle")}</h4>
            <ul className="space-y-4">
              {routes.map((route, i) => (
                <li key={i}>
                  <Link href={route.href} className="text-[var(--text-2)] font-body text-sm hover:text-[var(--gold)] transition-colors">
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="font-heading font-bold text-[var(--text-1)] text-lg mb-6">{t("footer.contactTitle")}</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/966598401594" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5 mt-0.5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <span className="block font-heading font-bold text-[var(--text-1)] group-hover:text-[var(--gold)] transition-colors">{t("footer.whatsappNumber")}</span>
                    <span className="text-[var(--text-3)] font-body text-xs">{t("footer.whatsappNote")}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${t("footer.email")}`} className="flex items-start gap-3 group">
                  <Mail size={20} className="text-[var(--gold)] mt-1" />
                  <div>
                    <span className="block font-heading font-bold text-[var(--text-1)] group-hover:text-[var(--gold)] transition-colors">{t("footer.email")}</span>
                    <span className="text-[var(--text-3)] font-body text-xs">{t("footer.mailNote")}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-[var(--text-2)] mt-1" />
                <div>
                  <span className="block font-heading font-bold text-[var(--text-1)]">{t("footer.operationTitle")}</span>
                  <span className="text-[var(--text-3)] font-body text-xs">{t("footer.operationNote")}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-[var(--text-3)] font-body text-sm">
            &copy; {new Date().getFullYear()} Haramain Umrah Taxi. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6 text-[var(--text-3)] font-body text-sm">
            <Link href="/privacy-policy" className="hover:text-[var(--gold)] transition-colors">{t("footer.privacyPolicy")}</Link>
            <Link href="/terms-and-conditions" className="hover:text-[var(--gold)] transition-colors">{t("footer.termsConditions")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}