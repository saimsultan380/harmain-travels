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
  FileText,
  Heart,
  HelpCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
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

function DuaBox({ arabic, translation }: { arabic: string; translation: string }) {
  return (
    <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-6">
      <p className="text-right text-xl md:text-2xl font-arabic text-[var(--text-1)] leading-relaxed mb-4" dir="rtl">
        {arabic}
      </p>
      <p className="text-sm text-[var(--text-2)] leading-relaxed font-body italic">{translation}</p>
    </div>
  );
}

export function UmrahGuideAndPdfClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/umrah-guide-and-pdf.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
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
                  Complete Guide
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Easy Umrah Guide & Steps|  PDF| Umrah Duas| Ihram Rules|
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  Umrah is a religious pilgrimage made by Muslims in the holy city of Makkah. It is not obligatory like Hajj but is very rewarding and spiritually enriching.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  This step-by-step Umrah guide includes required duas, regulations for Ihram, and special precautions for men and women.
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
                  Book Umrah Guide Now
                </a>
                <Link
                  href="#steps"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm"
                >
                  View Steps
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
                  Introduction
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">The Spiritual Journey of Umrah</h2>
                <div className="space-y-5">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Umrah consists of four major rites: Ihram, Tawaf, Sa'i, and Hal. It can be done at any time of the year and is a great way of seeking Allah's forgiveness.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    All the actions of Umrah follow the example of Prophet Ibrahim (AS) and Prophet Muhammad (PBUH).
                  </p>
                </div>
              </div>

              <ImagePlaceholder label="Image Placeholder: Kaaba / Umrah Pilgrims" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Preparation</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Preparation for Umrah</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Sincere Intention (Niyyah)"
                  description="Perform Umrah for Allah's sake alone."
                  icon={Heart}
                />
                <Card
                  title="Understanding Rituals"
                  description="Learn each step to get it right."
                  icon={BookOpen}
                />
                <Card
                  title="Ghusl (Purification)"
                  description="Clean the entire body before donning Ihram."
                  icon={ShieldCheck}
                />
                <Card
                  title="Financial Preparedness"
                  description="Make all the expenses halal."
                  icon={BadgeCheck}
                />
                <Card
                  title="Personal Matters"
                  description="Ask others for forgiveness and clear outstanding debts."
                  icon={Users}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="steps" className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Steps</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Step-by-Step Umrah Guide</h2>
              </div>

              <div className="space-y-12">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] shrink-0">
                      <span className="text-2xl font-heading font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-2">Ihram & Niyyah (Entering the State of Ihram)</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body mb-6">
                        Ihram is the sacred state required for the performance of Umrah. Men wear two white unstitched garments (Izar & Rida). Women dress in proper attire covering the whole body (except hands and face).
                      </p>
                    </div>
                  </div>
                  <DuaBox
                    arabic="اللَّهُمَّ إِنِّي أُرِيدُ العُمْرَةَ فَيَسِّرْهَا لِي وَتَقَبَّلْهَا مِنِّي"
                    translation="“Ya Allah, I am planning to do the Umrah, make it easy for me and accept it from me.”"
                  />
                  <div className="mt-6">
                    <p className="text-[var(--text-2)] text-sm font-body mb-2">Recite Talbiyah:</p>
                    <DuaBox
                      arabic="لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لاَ شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الحَمْدَ وَالنِّعْمَةَ لَكَ وَالمُلْكَ، لاَ شَرِيكَ لَكَ"
                      translation="“Here I am, O Allah. There is no partner with You. Indeed, all the blessings and the grace and the kingdom are Yours.”"
                    />
                  </div>
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] shrink-0">
                      <span className="text-2xl font-heading font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-2">Entering the Al-Haram</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body mb-6">
                        Step with the right foot and say the dua. Walk towards the Ka'bah with a humble and respectful demeanour.
                      </p>
                    </div>
                  </div>
                  <DuaBox
                    arabic="للهم افتح لي ابواب رحمت"
                    translation="“Oh Allah, open the doors of mercy for me.”"
                  />
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] shrink-0">
                      <span className="text-2xl font-heading font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-2">Tawaf (Circumambulation of the Ka'bah)</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body mb-6">
                        Tawaf consists of seven circuits around the Ka'bah anticlockwise. Start with the Black Stone (Hajar al-Aswad). If possible, kiss or touch it. If not, point toward it with your right hand.
                      </p>
                    </div>
                  </div>
                  <DuaBox
                    arabic="بسم الله، والله أكبر"
                    translation="“In the name of Allah. Allah is the greatest.”"
                  />
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] shrink-0">
                      <span className="text-2xl font-heading font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-2">Sa'i (Between Safa and Marwah)</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body mb-6">
                        At the beginning of Safa, recite the verse from Surah Al-Baqarah. Walk seven rounds from Marwah to Safa. Men must cross between green lights, and women must cross normally.
                      </p>
                    </div>
                  </div>
                  <DuaBox
                    arabic="إِنَّ الصَّفَا وَالمَرْوَةَ مِن شَعَائِرِ اللَّهِ"
                    translation="“Indeed, Safa and Marwah are among the signs of Allah.” (Surah Al-Baqarah 2:158)"
                  />
                </div>

                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] shrink-0">
                      <span className="text-2xl font-heading font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-2">Halq/Taqsir (Shaving or Trimming Hair)</h3>
                      <p className="text-[var(--text-2)] text-base leading-relaxed font-body mb-6">
                        For men: Shave the head completely (Halq) or trim hair from all areas equally (Taqsir). For women: Clip a tip-of-the-fingertip amount of hair (only Taqsir is allowed).
                      </p>
                    </div>
                  </div>
                  <p className="text-[var(--text-2)] text-base leading-relaxed font-body">
                    Once this step is complete, Umrah is finished. You are now allowed to leave Ihram.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Duas</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Obligatory Duas for Umrah</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4">Dua for Flying by Airplane</h3>
                  <DuaBox
                    arabic="سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ"
                    translation="“Glory be to Him who subjected this unto us; we were incapable.”"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4">Dua for Tawaf</h3>
                  <DuaBox
                    arabic="رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ"
                    translation="“Our Lord, grant us good in the world and the Hereafter and save us from the torment of the Fire.”"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Special Rules</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Special Rules for Women</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[var(--green)] shrink-0 mt-0.5" size={20} />
                    <p className="text-[var(--text-2)] text-base leading-relaxed font-body">
                      Women cannot wear perfume or makeup in Ihram.
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[var(--green)] shrink-0 mt-0.5" size={20} />
                    <p className="text-[var(--text-2)] text-base leading-relaxed font-body">
                      Prayers during menses: Women are required to delay their Tawaf after their purification.
                    </p>
                  </div>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-7">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-[var(--green)] shrink-0 mt-0.5" size={20} />
                    <p className="text-[var(--text-2)] text-base leading-relaxed font-body">
                      Modest attire must be worn, but face masks are not allowed while wearing Ihram.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="px-6 py-24 pb-32">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Conclusion</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Performing the Umrah is a spiritually enriching experience which deepens faith and piety. May Allah accept your Umrah and bless you. Ameen!
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
