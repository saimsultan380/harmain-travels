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
  Baby,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  HandCoins,
  HeartHandshake,
  HelpCircle,
  Phone,
  Scale,
  ShieldCheck,
  Utensils,
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

export function FidyahAndKaffarahClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/fidyah-and-kaffarah.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
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
                  Fidyah & Kaffarah
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Fidyah and Kaffarah Services| Meaning| Differences| Who Pays?
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Islam is a highly understanding and accommodative religion in terms of commitment fulfillment. Occasionally, individuals are unable to complete commitments due to unforeseen situations.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Islam presents alternatives such as Fidyah and Kaffarah to substitute missed commitments. Learn the meaning, differences, and who pays each.
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
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">What is Fidyah?</h2>
                <div className="space-y-4">
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    Fidyah is a compensation given by those who cannot fast due to valid reasons like chronic illness, old age, or other long-term disabilities.
                  </p>
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    In Ramadan, fasting is obligatory for all Muslims. Some people cannot fast due to legitimate reasons. For them, fidyah is a substitute method of fulfilling the fasts they missed.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Who Pays Fidya?</h2>
                <ul className="space-y-3 text-[var(--text-2)] font-body">
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Chronic illness and unable to fast</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Old age and physically unable to fast</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Pregnant or breastfeeding and unable to fast for health reasons</li>
                </ul>
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-10 bg-[var(--bg-card)] border-2 border-[var(--gold)]/15 rounded-[40px] p-8 md:p-12">
              <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">How is Fidya Paid?</h3>
              <div className="space-y-4">
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  Fidya is fulfilled by feeding the poor. The recompense is usually the equivalent of feeding a poor person two meals for each missed fast.
                </p>
                <ul className="space-y-3 text-[var(--text-2)] font-body">
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Often calculated based on staple foods like wheat or rice</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />If you miss all 30 fasts, you pay 30 days of fidya</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">What is Kaffarah?</h2>
                <div className="space-y-4">
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    Kaffarah is an expiation or punishment that becomes obligatory if someone commits a wilful infringement of a fast without a permissible cause.
                  </p>
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    If a person intentionally breaks a fast in Ramadan without valid reason, they must fast for 60 days consecutively or feed 60 poor persons if unable to fast.
                  </p>
                </div>
              </div>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Who Has to Pay Kaffarah?</h2>
                <ul className="space-y-3 text-[var(--text-2)] font-body">
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Eating or drinking deliberately in Ramadan</li>
                  <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Acts that invalidate the fast (e.g. intercourse during fasting hours)</li>
                </ul>
              </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12">
              <div className="text-center mb-12">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Comparison</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Fidyah vs Kaffarah</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  Fidyah is for those who cannot fast, while Kaffarah is for intentional breaking of fasts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/15 rounded-[40px] p-8 md:p-12">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 flex items-center gap-3">
                    <Utensils className="text-[var(--green)]" />
                    Fidyah
                  </h3>
                  <ul className="space-y-3 text-[var(--text-2)] font-body">
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />For chronic illness, old age, disability</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />Fulfilled by feeding the poor per missed fast</li>
                  </ul>
                </div>

                <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/15 rounded-[40px] p-8 md:p-12">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 flex items-center gap-3">
                    <Scale className="text-[var(--gold)]" />
                    Kaffarah
                  </h3>
                  <ul className="space-y-3 text-[var(--text-2)] font-body">
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />For intentional breaking of a Ramadan fast</li>
                    <li className="flex gap-3"><CheckCircle2 className="text-[var(--green)] mt-0.5" size={18} />60 consecutive fasts or feeding 60 poor people</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Our Service</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Fidyah and Kaffarah Services by Haramain Umrah Taxi</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  We help you carry out your obligations with simplicity, authenticity, and a Shariah-compliant process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card
                  title="Fidyah Payment Support"
                  description="We provide meals to the poor on your behalf."
                  icon={HandCoins}
                />
                <Card
                  title="Kaffarah Completion"
                  description="We facilitate feeding 60 poor persons when required."
                  icon={Utensils}
                />
                <Card
                  title="Shariah-Compliant"
                  description="We follow Islamic regulations to do your task correctly."
                  icon={ShieldCheck}
                />
                <Card
                  title="Clear & Stress-Free"
                  description="We provide confirmation and updates for peace of mind."
                  icon={HeartHandshake}
                />
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-[var(--text-1)] mb-4">Paying Fidyah and Kaffarah with Us</h3>
                <p className="text-[var(--text-2)] font-body max-w-3xl mx-auto text-lg">
                  Contact us, choose a payment option, and we take care of distribution—then you receive confirmation.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                <StepCard num="01" title="Contact Us" text="Tell us how many fasts were missed or broken." />
                <StepCard num="02" title="Choose Payment" text="Select a secure and easy payment option." />
                <StepCard num="03" title="We Distribute" text="We ensure proper distribution to deserving people." />
                <StepCard num="04" title="Get Confirmation" text="Receive proof that your obligation is fulfilled." />
              </div>

              <div className="mt-12 bg-[var(--bg-card)] border-2 border-[var(--gold)]/15 rounded-[40px] p-8 md:p-12">
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  Fidyah and kaffarah help Muslims complete their obligations. Fidyah is for those who cannot fast, while kaffarah is for those who intentionally break fast. If you understand the difference, you can fulfill your responsibilities correctly.
                </p>
                <p className="mt-4 text-[var(--text-2)] font-body leading-relaxed">
                  At Haramain Umrah Taxi, we provide dependable fidyah and kaffarah services to help you complete your obligations with ease and precision.
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
                  q="Can I Pay Fidyah in Money Instead of Food?"
                  a="Yes, but it is more desirable to give fidyah as meals. If donating money, it should equal the cost of a person's daily sustenance."
                />
                <FAQItem
                  q="Can a Pregnant Woman Pay Fidya in Lieu of Fasting?"
                  a="Yes, if it is harmful to her health or the baby's health, she is permitted to give fidyah instead of fasting."
                />
                <FAQItem
                  q="If someone missed fasts due to temporary illness?"
                  a="If the illness is temporary and the person recovers, they should make up the lost fasts later instead of paying fidyah."
                />
                <FAQItem
                  q="Whether Kaffarah May Be Paid in Instalments?"
                  a="No, kaffarah is either 60 consecutive fasts or feeding 60 poor people in one sitting."
                />
                <FAQItem
                  q="How do I determine if my Fidya or Kaffarah has been paid properly?"
                  a="We provide transparency and confirmation that your fidyah/kaffarah is fulfilled."
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Pay Your Fidyah or Kaffarah with Confidence</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Contact us today to have your kaffarah or fidyah organized with minimal hassle.
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
