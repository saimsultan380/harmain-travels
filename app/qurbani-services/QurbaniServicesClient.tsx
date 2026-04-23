"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { Canonical } from "@/components/SEO/Canonical";
import {
  ArrowRight,
  BadgeCheck,
  Baby,
  CheckCircle2,
  ClipboardCheck,
  HandCoins,
  HeartHandshake,
  HelpCircle,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
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

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-[32px] border-2 border-[var(--border)] bg-[var(--bg)] p-2 shadow-sm">
      <div className="aspect-video rounded-[28px] border border-[var(--border)] bg-[var(--bg-alt)] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/10 via-transparent to-[var(--green)]/10" />
        <span className="relative z-10 text-xs font-heading font-bold uppercase tracking-widest text-[var(--text-2)] opacity-70">
          {label}
        </span>
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mb-5">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-heading font-bold text-[var(--text-1)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--text-2)] leading-relaxed font-body">{description}</p>
    </motion.div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
      <div className="flex items-start gap-3">
        <HelpCircle className="text-[var(--gold)] shrink-0 mt-0.5" size={20} />
        <div>
          <h4 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">{q}</h4>
          <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function QurbaniServicesClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/qurbani-services.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80 z-10" />
          <IslamicGeometricBg opacity={0.04} />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-1.5 rounded-full bg-[var(--gold)] text-white font-heading font-bold text-xs uppercase tracking-widest shadow-lg shadow-[var(--gold)]/20">
                  Qurbani in Makkah
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Qurbani| Sadaqah, Aqeeqah, Hajj Qurbani Services in <span className="text-[var(--gold)]">Makkah</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Qurbani is a spiritual act of devotion, submission, and gratitude toward Allah. Performing it in the holiest city—Makkah—connects you to the legacy of Prophet Ibrahim (AS) in a deeper way.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Haramain Umrah offers end-to-end Qurbani services in Makkah, ensuring every sacrifice is completed according to Islamic guidelines, with reliable meat distribution and proof.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="https://wa.me/966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--green)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all border border-[var(--green)]/20"
                >
                  <WhatsAppIcon />
                  Book on WhatsApp Now
                </a>
                <Link
                  href="#types"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm"
                >
                  View Services
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/30 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest mb-6">
                  Meaning
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Why Qurbani in Makkah is So Meaningful</h2>
                <div className="space-y-5">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Qurbani is not just the sacrifice of an animal—it's a declaration of submitting to Allah’s will, inspired by Prophet Ibrahim’s (AS) devotion.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Whether it’s Sadaqah, Aqeeqah, Eid ul Adha, or Hajj sacrifices, each form offers spiritual enrichment and strengthens your connection with Allah.
                  </p>
                </div>
              </div>

              <ImagePlaceholder label="Image Placeholder: Qurbani / Makkah / Distribution" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="types" className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Types</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Types of Qurbani Services We Offer</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  Hajj Qurbani (Hady), Eid ul Adha, non-Hajj Qurbani, Aqeeqah, Sadaqah, Nafl, and Damm (compensatory sacrifice).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Hajj Qurbani (Hady)"
                  description="Mandatory for Tamattu’ and Qiran. Performed within Makkah limits with proper distribution."
                  icon={BadgeCheck}
                />
                <Card
                  title="Eid ul Adha Qurbani"
                  description="Goat, sheep, camel, or cow—with strict adherence to Islamic requirements."
                  icon={Sparkles}
                />
                <Card
                  title="Non-Hajj Qurbani in Makkah"
                  description="Perform your sacrifice in Makkah even if you're abroad—handled end-to-end."
                  icon={HeartHandshake}
                />
                <Card
                  title="Aqeeqah"
                  description="Celebrate a child's birth with a sunnah sacrifice in a blessed land."
                  icon={Baby}
                />
                <Card
                  title="Sadaqah Qurbani"
                  description="A charitable sacrifice with organized meat distribution to the needy."
                  icon={HandCoins}
                />
                <Card
                  title="Damm (Compensatory Sacrifice)"
                  description="If Damm becomes obligatory, we handle it with verified proof."
                  icon={Scale}
                />
              </div>

              <div className="mt-10 bg-[var(--bg-card)] border-2 border-[var(--gold)]/15 rounded-[40px] p-8 md:p-12">
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  For Damm specifically, you can also see our dedicated Damm page for more details.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Types of Animals for Qurbani</h2>
                <ul className="space-y-3 text-[var(--text-2)] font-body">
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Sheep & Dumba: at least one year, free from defects</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Goats: at least one year, healthy, Shariah compliant</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Camels: at least five years, healthy</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Cows: at least two years, healthy</li>
                </ul>
                <p className="mt-5 text-[var(--text-2)] text-sm leading-relaxed font-body">
                  We examine animals for Islamic suitability before selection.
                </p>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Qurbani Rules</h2>
                <ul className="space-y-3 text-[var(--text-2)] font-body">
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Performed for Allah (SWT)</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Meat shared: self, family/friends, poor/needy</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Within prescribed days of Dhul Hijjah</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Healthy animal, minimum age, no defects</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Takbeer recited at time of slaughter</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Respectful treatment of the animal</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[var(--bg-card)] border-2 border-[var(--gold)]/10 rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-48 -mt-48" />

              <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Why Choose Haramain Umrah for Qurbani?</h2>
                <p className="text-[var(--text-2)] font-body max-w-3xl mx-auto text-lg">
                  Transparent booking, high-quality animals, Shariah compliance, and verified distribution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                <Card
                  title="Hassle-Free Booking"
                  description="Simple online booking and payment process."
                  icon={ClipboardCheck}
                />
                <Card
                  title="Shariah Compliance"
                  description="All steps follow Qurbani laws as per Islam."
                  icon={ShieldCheck}
                />
                <Card
                  title="Reliable Distribution"
                  description="We ensure meat reaches those who need it (poor, travelers, etc.)."
                  icon={HeartHandshake}
                />
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="flex items-start gap-3">
                    <BadgeCheck className="text-[var(--gold)] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">High-Quality Animals</h3>
                      <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">We select only healthy, suitable animals for sacrifice.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="flex items-start gap-3">
                    <Scale className="text-[var(--gold)] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Transparent Processing</h3>
                      <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">You receive evidence for selection, Qurbani conduct, and distribution.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="faq" className="py-24 bg-[var(--bg-alt)] border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">FAQ</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Frequently Asked Questions</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FAQItem q="Can I book my Qurbani online?" a="Yes, you can book Qurbani services for Makkah conveniently online." />
                <FAQItem q="Who receives the meat of my Qurbani?" a="It is distributed among the poor and needy in Makkah, and you can receive proof of distribution." />
                <FAQItem q="Will my Qurbani be accepted if performed through a service?" a="Yes, as long as the provider complies with Islamic laws and regulations." />
                <FAQItem q="Will I have the liberty to choose animals for Qurbani?" a="Yes, you may choose your preferred animal type for Qurbani." />
                <FAQItem q="What if I make a mistake during Hajj, for which Damm is obligatory?" a="You can fulfill your Damm requirement with our professional Damm services in Makkah." />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-6 py-24 pb-32">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Book Your Qurbani Service in Makkah</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Let us handle the sacrifice and distribution correctly while you focus on worship.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://wa.me/966598401594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--green)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <WhatsAppIcon size={24} />
                    Book via WhatsApp Now
                  </a>
                  <a
                    href="tel:+966598401594"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--gold)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <Phone size={24} />
                    Call Us Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
