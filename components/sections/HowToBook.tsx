"use client";

import { useI18n } from "@/lib/i18n";
import { MessageCircle, Calculator, ShieldCheck, Smile, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stepIcons = [MessageCircle, Calculator, ShieldCheck, Smile];
const stepColors = ["#007A3E", "#9D812E", "#007A3E", "#9D812E"];

export function HowToBook() {
  const { t, tm } = useI18n();

  const steps = [
    {
      title: tm<string>("howToBook.steps.0.title", "Contact Us"),
      desc: tm<string>("howToBook.steps.0.desc", "Contact us through WhatsApp or simply click the book now button."),
    },
    {
      title: tm<string>("howToBook.steps.1.title", "Get an Estimate"),
      desc: tm<string>("howToBook.steps.1.desc", "We provide an estimate based on your selected route and fleet."),
    },
    {
      title: tm<string>("howToBook.steps.2.title", "Secure your Ride"),
      desc: tm<string>("howToBook.steps.2.desc", "Finalize your ride after complete satisfaction."),
    },
    {
      title: tm<string>("howToBook.steps.3.title", "Relax & Enjoy"),
      desc: tm<string>("howToBook.steps.3.desc", "Now sit back and enjoy your journey."),
    },
  ];

  return (
    <section className="py-28 bg-white border-t border-[var(--border)] overflow-hidden" id="how-to-book">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header - Centered */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full bg-[var(--green-soft)] px-4 py-1.5 text-[var(--green)] font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-5">
              {t("howToBook.eyebrow")}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-6 leading-tight">
              {t("howToBook.title")}
            </h2>
            <p className="text-[var(--text-2)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Simple, transparent, and designed for your peace of mind during your sacred journey. Follow these steps to secure your premium ride.
            </p>
          </motion.div>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-[var(--border)] z-0" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              const color = stepColors[i];
              const isLast = i === steps.length - 1;

              return (
                <motion.div
                  key={i}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Icon Circle */}
                  <div className="relative mb-6 md:mb-8">
                    <div 
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center bg-white border-2 border-[var(--border)] shadow-lg group-hover:border-[var(--green)] group-hover:scale-110 transition-all duration-500 z-10 relative"
                    >
                      <div 
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-inner"
                        style={{ backgroundColor: color }}
                      >
                        <Icon size={24} className="md:w-[30px] md:h-[30px]" strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    {/* Step Number */}
                    <div 
                      className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-black text-sm border-4 border-white shadow-md z-20"
                      style={{ backgroundColor: color }}
                    >
                      {i + 1}
                    </div>

                    {/* Desktop Connector Arrow */}
                    {!isLast && (
                      <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-full -translate-y-1/2 text-[var(--border)]">
                        <ArrowRight size={24} className="group-hover:text-[var(--green)] group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="max-w-xs mx-auto">
                    <span 
                      className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] mb-3 block"
                      style={{ color }}
                    >
                      Step 0{i + 1}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 group-hover:text-[var(--green)] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-2)] font-body text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="https://wa.me/966598401594" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--green)] text-white font-body font-bold rounded-full hover:bg-[var(--gold)] hover:scale-105 transition-all shadow-xl"
          >
            <MessageCircle size={20} />
            Start Booking on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

