"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookOpen, Users, Heart, ArrowRight } from "lucide-react";
import { BorderTraceCard } from "@/components/ui/BorderTraceCard";

export function OtherServices() {
  const services = [
    {
      title: "Damm Service",
      desc: "Professional sacrifice services are performed according to Islamic guidelines on your behalf in the Holy Cities of Makkah and Madinah.",
      icon: Heart,
      color: "var(--green)"
    },
    {
      title: "Umrah and Hajj Badal",
      desc: "Perform Umrah or Hajj through our qualified and experienced representatives when you are unable to travel yourself.",
      icon: Users,
      color: "var(--gold)"
    },
    {
      title: "Quran Waqaf",
      desc: "Donate and distribute beautiful copies of the Holy Quran as an ongoing charity for your loved ones or the deceased.",
      icon: BookOpen,
      color: "var(--green)"
    },
    {
      title: "Umrah Guide",
      desc: "Complete step-by-step guidance and support services to ensure your Umrah journey is spiritually fulfilling.",
      icon: BookOpen,
      color: "var(--gold)"
    }
  ];

  return (
    <AnimatedSection id="other-services" className="py-24 bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[48px] font-heading font-bold text-[var(--text-1)] mb-4">
            Our Other Services
          </h2>
          <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto">
            Beyond transportation, we support your complete Umrah experience with essential religious services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <BorderTraceCard key={i} className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center mb-6 shadow-sm">
                <service.icon size={32} style={{ color: service.color }} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">
                {service.title}
              </h3>
              
              <p className="text-[var(--text-2)] font-body mb-8 flex-grow">
                {service.desc}
              </p>
              
              <a href="#" className="inline-flex items-center text-[var(--gold)] font-body font-semibold hover:text-[#8A7020] transition-colors mt-auto">
                Learn More <ArrowRight size={16} className="ml-2" />
              </a>
            </BorderTraceCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}