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
  FileVideo,
  HeartHandshake,
  HelpCircle,
  Phone,
  ShieldCheck,
  UserCheck,
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

export function HajjAndUmrahBadalClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/hajj-and-umrah-badal.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
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
                  Proxy Pilgrimage
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Umrah & Hajj e Badal Services- We Perform Umrah/Hajj For You
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Want to perform Umrah or Hajj but cannot travel?
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Let Haramain Umrah do it for you with our Umrah & Hajj e Badal services. Our team performs the sacred pilgrimage with devotion and sincerity on your behalf.
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
                  href="#process"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm"
                >
                  View Process
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
                  Definition
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">What is Hajj e Badal?</h2>
                <div className="space-y-5">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Hajj Badal and Hajj e Badal refer to the performance of the obligatory pilgrimage on behalf of those who have died without having done so, or those unable due to illness/disability. It is also known as Proxy Hajj.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    The proxy carries out all rituals with devotion and sincerity: entering Ihram, Tawaf of the Kaaba, and Sa’i, with the intention to fulfill the duty on behalf of the person represented.
                  </p>
                </div>
              </div>

              <ImagePlaceholder label="Image Placeholder: Kaaba / Ihram / Tawaf" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <ImagePlaceholder label="Image Placeholder: Student of Knowledge" />

              <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/20 rounded-[32px] p-8 md:p-12 shadow-sm">
                <div className="w-12 h-12 bg-[var(--gold-soft)] rounded-xl flex items-center justify-center text-[var(--gold)] mb-6">
                  <UserCheck size={24} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Haramain Umrah’s Hajj Badal Service</h2>
                <div className="space-y-4">
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    Haramain Umrah Taxi provides a trusted Hajj Badal (proxy Hajj) service for your parents or grandparents, living or deceased, or other relatives.
                  </p>
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    A qualified student of knowledge from Makkah or Madinah—having already performed his own Hajj—performs one person’s Hajj Badal (Tamattu: Umrah + Hajj + sacrifice) with sincerity, in shaa Allah.
                  </p>
                  <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                    Your fee also supports a student of knowledge, helping him care for himself and his family while studying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 shadow-sm">
                <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest mb-6">
                  Umrah Badal
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">What is Umrah Badal?</h2>
                <div className="space-y-5">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Umrah Badal is the performance of Umrah on behalf of a person who cannot do it due to illness, old age, disability, or permanent restriction. “Badal (بدل)” means substitution.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    The proxy assumes the intention and fulfills Ihram, Tawaf, and Sa’i, striving to perform the rituals according to Shariah.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    It is a charitable act that allows the one represented to gain the spiritual rewards of Umrah.
                  </p>
                </div>
              </div>

              <ImagePlaceholder label="Image Placeholder: Masjid Al Haram / Tawaf" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[var(--bg-card)] border-2 border-[var(--gold)]/10 rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-48 -mt-48" />

              <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Specialties of Our Umrah and Hajj Badal Service</h2>
                <p className="text-[var(--text-2)] font-body max-w-3xl mx-auto text-lg">
                  A complete, respectful service focused on Shariah compliance, ease, and peace of mind.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                <Card
                  title="Discharge of Religious Duty"
                  description="Fulfill Umrah/Hajj obligations when travel isn’t possible."
                  icon={BadgeCheck}
                />
                <Card
                  title="Convenience & Ease"
                  description="We handle arrangements and preparation—saving you time and stress."
                  icon={HeartHandshake}
                />
                <Card
                  title="Expertise & Knowledge"
                  description="Performed by individuals who understand rituals and Shariah requirements."
                  icon={ShieldCheck}
                />
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="flex items-start gap-3">
                    <BookOpen className="text-[var(--gold)] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Peace of Mind</h3>
                      <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                        Your intentions are respected and fulfilled with sincerity and care.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="flex items-start gap-3">
                    <FileVideo className="text-[var(--gold)] shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="text-[var(--text-1)] font-heading font-bold text-lg mb-2">Documentation & Verification</h3>
                      <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">
                        Receive confirmation and a video of key phases as proof of completion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="process" className="py-24 bg-[var(--bg-alt)] border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Process</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Process of Our Umrah and Hajj Badal Service</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card
                  title="Provide Essential Information"
                  description="Enter the person's name and gender, then add to cart."
                  icon={ClipboardCheck}
                />
                <Card
                  title="Complete Transaction"
                  description="Review your cart and proceed to secure checkout."
                  icon={ShieldCheck}
                />
                <Card
                  title="Student Notified"
                  description="We inform the student of knowledge with the exact details and requests."
                  icon={UserCheck}
                />
                <Card
                  title="Confirmation & Documentation"
                  description="We email confirmation and provide a video as proof of completion."
                  icon={FileVideo}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[var(--bg-card)] border-2 border-[var(--gold)]/15 rounded-[48px] p-12 lg:p-20">
              <div className="text-center mb-10">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Hadith</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)]">Hadith Confirming Hajj/Umrah Badal</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <p className="text-[var(--text-2)] font-body leading-relaxed">
                    Abdullah ibn Abbas narrated: A woman asked about her old father who could not perform Hajj/Umrah. The Prophet ﷺ replied: “Yes, you may perform Hajj and Umrah on his behalf... Fulfill the obligations of your parents.” (Abu Dawood)
                  </p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <p className="text-[var(--text-2)] font-body leading-relaxed">
                    The Prophet ﷺ said: “Whoever performs Hajj for Allah’s sake... will return as if born anew...” and encouraged fulfilling pledges and debts. (Bukhari)
                  </p>
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
                <FAQItem
                  q="What is Hajj e Badal Service?"
                  a="Hajj e Badal is the performance of Hajj on behalf of someone unable due to long illness, old age, or death."
                />
                <FAQItem
                  q="Hajj e badal ka tarika (Procedure of Hajj e Badal)"
                  a="The proxy must have performed obligatory Hajj, intend on behalf of the person, mention them in Talbiyah, then perform all rituals as regular Hajj."
                />
                <FAQItem
                  q="Badal Hajj for a Deceased Person"
                  a="Yes, it is allowed for someone obligated to do Hajj but died without performing it (Sahih Bukhari 1852, Sahih Muslim 1148)."
                />
                <FAQItem
                  q="Can we do Umrah Badal?"
                  a="Yes, Umrah Badal is permissible if the person is permanently unable or has passed away without performing it."
                />
                <FAQItem
                  q="For whom may Hajj e Badal be performed?"
                  a="For those who had the means but couldn't due to old age, prolonged illness, disability, or death (not temporary illness)."
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Book Umrah/Hajj Badal with Confidence</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Leave everything to Haramain Umrah Taxi and have a hassle-free, spiritually fulfilling experience.
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
