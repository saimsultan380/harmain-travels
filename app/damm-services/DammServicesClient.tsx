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
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  HandCoins,
  HeartHandshake,
  HelpCircle,
  Phone,
  Scale,
  ShieldCheck,
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

function FeatureCard({
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

function StepCard({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-heading font-extrabold tracking-[0.25em] text-[var(--gold)]">{num}</span>
        <CheckCircle2 size={18} className="text-[var(--green)]" />
      </div>
      <h4 className="text-lg font-heading font-bold text-[var(--text-1)] mb-2">{title}</h4>
      <p className="text-sm text-[var(--text-2)] leading-relaxed font-body">{text}</p>
    </div>
  );
}

function FAQItem({
  q,
  a,
}: {
  q: string;
  a: string;
}) {
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

export function DammServicesClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/damm-services.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
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
                  Shariah-Compliant Service
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Damm| What is Damm? How to Give/Pay Damm for <span className="text-[var(--gold)]">Umrah</span> & <span className="text-[var(--gold)]">Hajj</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Learn what Damm means in Hajj and Umrah, when it becomes obligatory, and how to arrange it easily with verified proof.
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
                  href="#faq"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm"
                >
                  View FAQs
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
              <div>
                <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest mb-6">
                  Basics
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">What is Damm?</h2>
                <div className="space-y-6">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    The term Damm refers to an obligatory expiation or penalty during the period of Hajj and Umrah if the pilgrim has committed a violation of the pilgrim regulations.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Damm can be translated to sacrificial compensation in English, and it typically refers to the slaughter of an animal (Damm animal) to expiate the sins committed during the rituals.
                  </p>

                  <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                    <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3">Damm Meaning and Definition</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                      Islamic jurisprudence defines Damm to mean the slaughter of a goat or a sheep, or contributing to the sacrifice of a larger animal like a camel or a cow as an atonement for certain infractions. The sacrifice has to be done within Makkah and then given to the poor.
                    </p>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed font-body mt-4">
                      Damm serves to remind one to comply with the regulations stipulated for Hajj and Umrah, emphasizing obedience and humility to Allah.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <span className="text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest">Qur'an</span>
                <p className="mt-4 text-[var(--text-1)] font-body text-lg leading-relaxed">
                  وَأَتِمُّوا۟ ٱلْحَجَّ وَٱلْعُمْرَةَ لِلَّهِ ۚ فَإِنْ أُحْصِرْتُمْ فَمَا ٱسْتَيْسَرَ مِنَ ٱلْهَدْىِ (البقرة: ١٩٦)
                </p>
                <p className="mt-4 text-[var(--text-2)] font-body leading-relaxed">
                  “And complete the Hajj and Umrah for Allah. But if you are prevented, then [offer] what can be obtained with ease of sacrificial animals.” (Surah Al-Baqarah 2:196)
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Obligation</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">When Damm is Obligatory?</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  Damm becomes obligatory under specific situations—omissions, Ihram violations, ritual faults, or missing essential rites.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-5 flex items-center gap-3">
                    <ClipboardCheck className="text-[var(--gold)]" />
                    Common Situations
                  </h3>
                  <ul className="space-y-3 text-[var(--text-2)] font-body">
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Omitting a Wajib act</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Missing Tawaf al-Wada' during Hajj</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Not spending the night in Muzdalifah or Mina</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Performing Sa’i before Tawaf</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Leaving Muzdalifah before Fajr</li>
                  </ul>
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-5 flex items-center gap-3">
                    <Scale className="text-[var(--gold)]" />
                    Ihram Restrictions & Other Violations
                  </h3>
                  <ul className="space-y-3 text-[var(--text-2)] font-body">
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Using perfumes, soaps, lotions, etc.</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Trimming hair or nails before completing Umrah</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Covering the head (men) or using gloves (women)</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Hunting/killing animals inside the Haram zone</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Wearing stitched clothes (men) during Ihram</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-[var(--bg-card)] border-2 border-[var(--gold)]/15 rounded-[40px] p-8 md:p-12 text-center">
                <p className="text-[var(--text-2)] font-body leading-relaxed max-w-4xl mx-auto">
                  The Prophet (PBUH) said:
                </p>
                <p className="mt-4 text-[var(--text-1)] font-body text-lg leading-relaxed">
                  مَن حج فلم يرفث ولم يفسق رجع كيوم ولدته أمه (صحيح البخاري: ١٥٢١)
                </p>
                <p className="mt-4 text-[var(--text-2)] font-body leading-relaxed max-w-4xl mx-auto">
                  “Whoever performs Hajj and does not commit any obscenity or transgression will return as free from sins as the day he was born.” (Sahih al-Bukhari: 1521)
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Process</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">How to Pay/Give Damm through Haramain Umrah Taxi?</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  We make the process Shariah-compliant, transparent, and verified with proof.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <StepCard num="01" title="Transparent Pricing" text="Book in advance with fixed pricing and no hidden charges." />
                <StepCard num="02" title="Select Animal" text="Healthy goat/sheep or share in cow/camel, Shariah-compliant." />
                <StepCard num="03" title="Makkah Sacrifice" text="Performed in approved Makkah slaughterhouses and distributed to the poor." />
                <StepCard num="04" title="Verified Proof" text="Receive confirmation with evidence (receipt / proof options)." />
                <StepCard num="05" title="Affordable Service" text="Convenient and economical with trustworthy partners." />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[var(--bg-card)] border-2 border-[var(--gold)]/10 rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-48 -mt-48" />

              <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Why Choose Haramain Umrah Taxi for Damm Services?</h2>
                <p className="text-[var(--text-2)] font-body max-w-3xl mx-auto text-lg">
                  Trusted, verified, and Shariah-compliant handling of your Damm in Makkah.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                <FeatureCard
                  title="Reliable & Trustworthy"
                  description="We adhere to Islamic principles to ensure an authentic sacrifice."
                  icon={ShieldCheck}
                />
                <FeatureCard
                  title="Hassle-Free"
                  description="No need to find a butcher—we arrange everything for you."
                  icon={HeartHandshake}
                />
                <FeatureCard
                  title="Quick & Verified"
                  description="Get confirmation with evidence so you feel reassured."
                  icon={BadgeCheck}
                />
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="flex items-start gap-3">
                    <HandCoins className="text-[var(--gold)] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Affordable & Flat Rate Pricing</h3>
                      <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">No hidden charges—flat fee only.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="flex items-start gap-3">
                    <BookOpen className="text-[var(--gold)] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Shariah-Compliant</h3>
                      <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">Sacrifice is performed under Islamic law and distributed locally.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center relative z-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-[var(--text-1)] mb-4">Schedule Your Damm Service Now!</h3>
                <p className="text-[var(--text-2)] font-body max-w-3xl mx-auto text-lg">
                  Do you need Damm for Umrah or Damm for Hajj? We will professionally take care of the process with a quick, efficient, and reasonable option.
                </p>
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
                <FAQItem
                  q="Is Damm the same as Fidyah?"
                  a="No, Damm is an obligatory sacrifice, whereas Fidyah involves feeding the poor or fasting for minor mistakes."
                />
                <FAQItem
                  q="Can I pay Damm outside of Makkah?"
                  a="No, Damm must be performed in Makkah and the meat distributed locally."
                />
                <FAQItem
                  q="Can I perform Damm on behalf of someone else?"
                  a="Yes, you may arrange Damm services for family members or friends."
                />
                <FAQItem
                  q="How do I ensure my Damm is accepted?"
                  a="Use verified, Shariah-compliant services that provide confirmation and transparency."
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-6 py-24 pb-32">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Book Your Damm with Peace of Mind</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Let us handle the sacrifice correctly while you focus on worship.
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
