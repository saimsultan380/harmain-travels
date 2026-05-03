"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookOpen, Users, Heart, ArrowRight, Building, FileText, Package, Utensils } from "lucide-react";
import { BorderTraceCard } from "@/components/ui/BorderTraceCard";
import { useI18n } from "@/lib/i18n";

export function OtherServices() {
  const { t, tm } = useI18n();
  
  const icons = [Heart, Users, BookOpen, BookOpen, Building, Building, Package, Utensils];
  const colors = ["var(--green)", "var(--gold)", "var(--green)", "var(--gold)", "var(--green)", "var(--gold)", "var(--green)", "var(--gold)"];

  const services = tm("otherServices.items") as Array<{
    title: string;
    desc: string;
    href: string;
  }>;

  return (
    <AnimatedSection id="other-services" className="py-24 bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mb-4">
            {t("otherServices.title")}
          </h2>
          <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto">
            {t("otherServices.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = icons[i] || BookOpen;
            const color = colors[i] || "var(--green)";
            
            return (
              <BorderTraceCard key={i} className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center mb-6 shadow-sm">
                  <Icon size={32} style={{ color }} />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-2)] font-body mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <a href={service.href} className="inline-flex items-center text-[var(--gold)] font-body font-semibold hover:text-[#8A7020] transition-colors mt-auto">
                  {t("otherServices.cta")} <ArrowRight size={16} className="ml-2" />
                </a>
              </BorderTraceCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}