"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { 
  CheckCircle2, 
  ArrowRight, 
  Plane, 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  Star,
  Bus,
  Search,
  CheckCircle,
  HelpCircle,
  Info,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

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

const PriceCard = ({ title, pax, bag, price, description, image, popularBadge, paxLabel, bagLabel }: { 
  title: string, 
  pax: string, 
  bag: string, 
  price: string, 
  description: string, 
  image: string,
  popularBadge?: string,
  paxLabel?: string,
  bagLabel?: string,
  bookNowBtn?: string
}) => {
  const { t } = useI18n();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/20 rounded-3xl p-6 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-[var(--gold)]/40"
    >
      <div className="h-[250px] w-full mb-6 flex items-center justify-center bg-[var(--bg-alt)] rounded-2xl overflow-hidden relative border border-[var(--border)]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className="object-contain p-2 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-heading font-bold text-[var(--text-1)]">{title}</h3>
        <span className="bg-[var(--gold-soft)] text-[var(--gold)] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{popularBadge ?? "Most Popular"}</span>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex items-center gap-1.5 text-[var(--text-2)] font-body text-xs">
          <Users size={14} className="text-[var(--gold)]" />
          <span>{pax} {paxLabel ?? "Pax"}</span>
        </div>
        <div className="flex items-center gap-1.5 text-[var(--text-2)] font-body text-xs">
          <Briefcase size={14} className="text-[var(--gold)]" />
          <span>{bag} {bagLabel ?? "Bags"}</span>
        </div>
      </div>

      <p className="text-[var(--text-3)] text-xs font-body mb-6 flex-grow">{description}</p>

      <div className="mt-auto pt-6 border-t border-[var(--border)]">
        <div className="flex gap-3">
          <a
            href="https://wa.me/966598401594"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[1.2] flex items-center justify-center gap-2 py-3 bg-[var(--green)] text-white font-body font-semibold rounded-xl hover:opacity-95 transition-all shadow-md text-sm text-center"
          >
            <WhatsAppIcon size={18} />
            {t("common.whatsapp")}
          </a>
          <Link
            href="/book-now/"
            className="flex-1 flex items-center justify-center py-3 border-2 border-[var(--green)] text-[var(--green)] font-body font-semibold rounded-xl hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-white transition-all text-sm text-center"
          >
            {t("common.bookNow")}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--gold)]/30 transition-all group">
    <div className="w-12 h-12 bg-[var(--gold-soft)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} className="text-[var(--gold)]" />
    </div>
    <h4 className="text-lg font-heading font-bold text-[var(--text-1)] mb-3">{title}</h4>
    <p className="text-[var(--text-2)] text-sm leading-relaxed font-body">{description}</p>
  </div>
);

const BenefitItem = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
  <div className="flex gap-5 items-start">
    <div className="w-12 h-12 shrink-0 bg-[var(--gold-soft)] rounded-2xl flex items-center justify-center text-[var(--gold)] border border-[var(--gold)]/10">
      <Icon size={22} />
    </div>
    <div className="space-y-1">
      <h4 className="text-[var(--text-1)] font-heading font-bold text-lg">{title}</h4>
      <p className="text-[var(--text-2)] text-sm font-body leading-relaxed">{description}</p>
    </div>
  </div>
);

export function UmrahTaxiPageClient() {
  const { t, tm } = useI18n();
  const p = tm<Record<string, any>>("umrahTaxiPage", {});

  const stepItems = [
    { num: "01", title: p.step1Title ?? "Message Us", text: p.step1Text ?? "WhatsApp us with your pickup location and destination." },
    { num: "02", title: p.step2Title ?? "Get Fare", text: p.step2Text ?? "We send you instant fare confirmation." },
    { num: "03", title: p.step3Title ?? "Select Car", text: p.step3Text ?? "You choose your preferred vehicle type." },
    { num: "04", title: p.step4Title ?? "Arrive Safe", text: p.step4Text ?? "Your driver arrives at your exact location on time." }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Navbar />
      
      <main className="flex-grow overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/umrah-taxi-services.png')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85 z-10" />
          <IslamicGeometricBg opacity={0.04} />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-1.5 rounded-full bg-[var(--gold)] text-white font-heading font-bold text-xs uppercase tracking-widest shadow-lg shadow-[var(--gold)]/20">
                  {p.heroBadge ?? "Trusted Umrah Taxi Service"}
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[72px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                {p.heroTitle ?? "Online Umrah Taxi Services in"} <span className="text-[var(--gold)]">Makkah</span> & <span className="text-[var(--gold)]">Madinah</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  {p.heroSubtitle ?? "Book Your Umrah Taxi Online in Seconds and Get Safe, Comfortable & Punctual Service across the Holy Cities of Saudi Arabia."}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="https://wa.me/966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--green)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all border border-[var(--green)]/20"
                >
                  <WhatsAppIcon />
                  {p.heroPrimaryBtn ?? "Book on WhatsApp Now"}
                </a>
                <Link
                  href="#fleet"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm"
                >
                  {p.heroSecondaryBtn ?? "View Our Fleet"}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        {/* ABOUT & STEPS */}
        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/30 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest">{p.aboutEyebrow ?? "About Us"}</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)]">{p.aboutTitle ?? "Haramain Umrah Taxi Services"}</h2>
              <div className="space-y-6">
                <p className="text-[var(--text-2)] text-[18px] leading-relaxed font-body">
                  {p.aboutText1 ?? "Haramain Umrah Taxi provides professional online taxi services across Makkah and Madinah. We help pilgrims travel safely between airports, hotels, and holy sites with just a few clicks."}
                </p>
                <p className="text-[var(--text-2)] text-[18px] leading-relaxed font-body">
                  {p.aboutText2 ?? "Book your ride through WhatsApp or our website. Our drivers arrive on time, every time. We make your Umrah transportation simple and stress-free."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
                <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-10 flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-[var(--gold)] text-white flex items-center justify-center text-lg">4</span>
                  {p.stepsTitle ?? "Easy & Quick Steps to Book"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10 font-body">
                  {stepItems.map((step) => (
                    <div key={step.num} className="group">
                      <div className="text-[var(--gold)] opacity-30 text-4xl font-heading font-bold mb-2 group-hover:opacity-100 transition-opacity">
                        {step.num}
                      </div>
                      <h4 className="text-[var(--text-1)] font-bold text-lg mb-2">{step.title}</h4>
                      <p className="text-[var(--text-2)] text-sm leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 pt-10 border-t border-[var(--gold)]/10 text-[var(--text-2)] leading-relaxed font-body text-[18px]">
                  {p.stepsSubtitle ?? "There are no complicated forms or long wait times. Just simple, fast booking for your Umrah taxi services. Our online booking system works 24/7."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

        {/* MAKKAH SERVICES */}
        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase mb-6 tracking-widest">{p.makkahEyebrow ?? "Holy City Makkah"}</div>
              <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{p.makkahTitle ?? "Transportation in Makkah"}</h2>
              <p className="text-[var(--text-2)] mt-4 font-body max-w-2xl mx-auto">{p.makkahSubtitle ?? "Complete Umrah taxi services in Makkah for all your religious and logistical needs."}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ServiceCard 
                icon={Plane}
                title={p.makkahService1Title ?? "Airport to Hotel Transfers"}
                description={p.makkahService1Desc ?? "Flying into Jeddah? We pick you up and drive you straight to your Makkah hotel. Your driver helps with luggage and knows the fastest routes."}
              />
              <ServiceCard 
                icon={MapPin}
                title={p.makkahService2Title ?? "Makkah Ziyarat Tours"}
                description={p.makkahService2Desc ?? "Visit sacred sites like Jabal Al-Noor, Cave of Hira, Jannat Al-Mualla, and Masjid Ayesha. Historical insights provided at each location."}
              />
              <ServiceCard 
                icon={Star}
                title={p.makkahService3Title ?? "Hotel to Haram Transfers"}
                description={p.makkahService3Desc ?? "Stay focused on your worship. We handle your daily rides to Masjid Al-Haram and back to your hotel punctually."}
              />
              <ServiceCard 
                icon={Bus}
                title={p.makkahService4Title ?? "Makkah to Madinah Travel"}
                description={p.makkahService4Desc ?? "Comfortable intercity rides with prayer stops along the way. We make the journey between holy cities smooth and peaceful."}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

        {/* MADINAH SERVICES */}
        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--green-soft)] text-[var(--green)] font-heading font-bold text-xs uppercase mb-6 tracking-widest">{p.madinahEyebrow ?? "Blessed City Madinah"}</div>
              <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">{p.madinahTitle ?? "Service in Madinah Munawwarah"}</h2>
              <p className="text-[var(--text-2)] mt-4 font-body max-w-2xl mx-auto">{p.madinahSubtitle ?? "Explore the blessed city of the Prophet (PBUH) with trusted and reliable transport."}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <BenefitItem 
                   icon={Clock}
                   title={p.madinahBenefit1Title ?? "Madinah Airport Transfers"}
                   description={p.madinahBenefit1Desc ?? "We pick you up from Prince Mohammad bin Abdulaziz Airport and take you directly to your hotel within minutes."}
                />
                <BenefitItem 
                   icon={MapPin}
                   title={p.madinahBenefit2Title ?? "Madinah Ziyarat Tours"}
                   description={p.madinahBenefit2Desc ?? "Visit Masjid Quba, Mount Uhud, Masjid Al-Qiblatain, and other significant sites with historical context."}
                />
              </div>
              <div className="space-y-6">
                <BenefitItem 
                   icon={ShieldCheck}
                   title={p.madinahBenefit3Title ?? "Masjid Al-Nabawi Transfers"}
                   description={p.madinahBenefit3Desc ?? "Daily rides scheduled around prayer times to the Prophet's Mosque and back to your hotel."}
                />
                <BenefitItem 
                   icon={ArrowRight}
                   title={p.madinahBenefit4Title ?? "Madinah to Makkah Travel"}
                   description={p.madinahBenefit4Desc ?? "Direct intercity service with comfortable vehicles. We stop for prayers and refreshments as needed."}
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

        {/* WHY CHOOSE US */}
        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto bg-[var(--bg-card)] border-2 border-[var(--gold)]/10 rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-48 -mt-48" />
            
            <div className="text-center mb-20 relative z-10">
              <h2 className="text-4xl font-heading font-bold text-[var(--text-1)] mb-6">{p.whyTitle ?? "Why Choose Haramain for Umrah Taxi?"}</h2>
              <p className="text-[var(--text-2)] font-body max-w-xl mx-auto">{p.whySubtitle ?? "We combine spiritual respect with professional transport excellence."}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
               <div className="space-y-3">
                 <h4 className="font-heading font-bold text-lg text-[var(--gold)] uppercase tracking-wider">{p.whyFeature1Title ?? "Professional Drivers"}</h4>
                 <p className="text-sm text-[var(--text-2)] font-body leading-relaxed">{p.whyFeature1Desc ?? "Licensed experts who speak English, Urdu, and Arabic. They know the holy cities like the back of their hand."}</p>
               </div>
               <div className="space-y-3">
                 <h4 className="font-heading font-bold text-lg text-[var(--gold)] uppercase tracking-wider">{p.whyFeature2Title ?? "24/7 Booking"}</h4>
                 <p className="text-sm text-[var(--text-2)] font-body leading-relaxed">{p.whyFeature2Desc ?? "Book anytime through WhatsApp. We respond within minutes and confirm your booking instantly."}</p>
               </div>
               <div className="space-y-3">
                 <h4 className="font-heading font-bold text-lg text-[var(--gold)] uppercase tracking-wider">{p.whyFeature3Title ?? "Clean Fleet"}</h4>
                 <p className="text-sm text-[var(--text-2)] font-body leading-relaxed">{p.whyFeature3Desc ?? "Working AC, leather seats, and ample luggage space. Every vehicle is deep-cleaned before your trip."}</p>
               </div>
               <div className="space-y-3">
                 <h4 className="font-heading font-bold text-lg text-[var(--gold)] uppercase tracking-wider">{p.whyFeature4Title ?? "Fixed Rates"}</h4>
                 <p className="text-sm text-[var(--text-2)] font-body leading-relaxed">{p.whyFeature4Desc ?? "No hidden charges. The price we quote is the price you pay. HUT offers total transparency."}</p>
               </div>
               <div className="space-y-3">
                 <h4 className="font-heading font-bold text-lg text-[var(--gold)] uppercase tracking-wider">{p.whyFeature5Title ?? "Salah Respect"}</h4>
                 <p className="text-sm text-[var(--text-2)] font-body leading-relaxed">{p.whyFeature5Desc ?? "We plan journeys around prayer times. Your driver waits patiently while you fulfill your worship."}</p>
               </div>
               <div className="space-y-3">
                 <h4 className="font-heading font-bold text-lg text-[var(--gold)] uppercase tracking-wider">{p.whyFeature6Title ?? "Instant Support"}</h4>
                 <p className="text-sm text-[var(--text-2)] font-body leading-relaxed">{p.whyFeature6Desc ?? "Dedicated support team on WhatsApp to help you book, modify, or track your ride 24/7."}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

        {/* FLEET SELECTION */}
        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-heading font-bold text-[var(--text-1)] mb-6">{p.fleetTitle ?? "Choose From Our Luxury Umrah Taxi Fleet"}</h2>
              <p className="text-[var(--text-2)] font-body max-w-2xl mx-auto">{p.fleetSubtitle ?? "Modern, clean vehicles fully air-conditioned for your maximum comfort."}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PriceCard 
                title={tm<string>("fleet.names.0", "Sedan")}
                pax="4"
                bag="3"
                description={p.fleet1Desc ?? "Perfect for couples or small families. Comfortable, fuel-efficient, and ideal for airport transfers."}
                price={p.fleet1Price ?? "Standard Rate"}
                image="/images/fleet/sedan.webp"
                popularBadge={p.popularBadge ?? "Most Popular"}
                paxLabel={p.paxLabel ?? "Pax"}
                bagLabel={p.bagLabel ?? "Bags"}
                bookNowBtn={p.bookNowBtn ?? "Book Now via WhatsApp"}
              />
              <PriceCard 
                title={tm<string>("fleet.names.1", "Luxury GMC")}
                pax="7"
                bag="7"
                description={p.fleet2Desc ?? "Luxury Umrah taxi with premium features & leather seats. Five-star KSA comfort."}
                price={p.fleet2Price ?? "Premium Rate"}
                image="/images/fleet/luxury-gmc.png"
                popularBadge={p.popularBadge ?? "Most Popular"}
                paxLabel={p.paxLabel ?? "Pax"}
                bagLabel={p.bagLabel ?? "Bags"}
                bookNowBtn={p.bookNowBtn ?? "Book Now via WhatsApp"}
              />
              <PriceCard 
                title={tm<string>("fleet.names.2", "Mini Van")}
                pax="7"
                bag="10"
                description={p.fleet3Desc ?? "Spacious for families with children. Great for intercity travel between Makkah and Madinah."}
                price={p.fleet3Price ?? "Elite Rate"}
                image="/images/fleet/minivan.webp"
                popularBadge={p.popularBadge ?? "Most Popular"}
                paxLabel={p.paxLabel ?? "Pax"}
                bagLabel={p.bagLabel ?? "Bags"}
                bookNowBtn={p.bookNowBtn ?? "Book Now via WhatsApp"}
              />
              <PriceCard 
                title={tm<string>("fleet.names.3", "Hiace Microbus")}
                pax="12"
                bag="16"
                description={p.fleet4Desc ?? "Best for small groups traveling together. Comfortable seating and large luggage trunk."}
                price={p.fleet4Price ?? "Group Rate"}
                image="/images/fleet/hiace-microbus.png"
                popularBadge={p.popularBadge ?? "Most Popular"}
                paxLabel={p.paxLabel ?? "Pax"}
                bagLabel={p.bagLabel ?? "Bags"}
                bookNowBtn={p.bookNowBtn ?? "Book Now via WhatsApp"}
              />
              <PriceCard 
                title={tm<string>("fleet.names.4", "Coaster")}
                pax="18"
                bag="25"
                description={p.fleet5Desc ?? "Perfect for larger groups. Ideal for Ziyarat tours and group Umrah taxi KSA services."}
                price={p.fleet5Price ?? "Group Coach"}
                image="/images/fleet/coaster.jpg"
                popularBadge={p.popularBadge ?? "Most Popular"}
                paxLabel={p.paxLabel ?? "Pax"}
                bagLabel={p.bagLabel ?? "Bags"}
                bookNowBtn={p.bookNowBtn ?? "Book Now via WhatsApp"}
              />
              <PriceCard 
                title={tm<string>("fleet.names.5", "Bus")}
                pax="50"
                bag="65"
                description={p.fleet6Desc ?? "Great for Hajj groups. Fully air-conditioned with professional drivers for large pilgrim groups."}
                price={p.fleet6Price ?? "Group Bus"}
                image="/images/fleet/bus.png"
                popularBadge={p.popularBadge ?? "Most Popular"}
                paxLabel={p.paxLabel ?? "Pax"}
                bagLabel={p.bagLabel ?? "Bags"}
                bookNowBtn={p.bookNowBtn ?? "Book Now via WhatsApp"}
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

        {/* POPULAR ROUTES */}
        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-12 overflow-hidden relative">
              <h3 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-12">{p.routesTitle ?? "Popular Umrah Taxi Routes"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                {[
                  { route: p.route1 ?? "Jeddah Airport to Makkah", detail: p.route1Detail ?? "Direct transfer (1.5 hours approx.)" },
                  { route: p.route2 ?? "Makkah to Madinah", detail: p.route2Detail ?? "Intercity travel with prayer stops (4-5 hours)" },
                  { route: p.route3 ?? "Madinah to Jeddah Airport", detail: p.route3Detail ?? "Ensuring timely return after pilgrimage" },
                  { route: p.route4 ?? "Makkah to Jeddah City", detail: p.route4Detail ?? "Day trips or shopping visits to malls" },
                  { route: p.route5 ?? "Taif Day Tours from Makkah", detail: p.route5Detail ?? "Explore cool weather and rose gardens" },
                  { route: p.route6 ?? "Madinah Airport to Hotel", detail: p.route6Detail ?? "Quick transfer within minutes of landing" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-[var(--border)] last:border-0 md:last:border-b">
                    <div className="font-heading font-bold text-[var(--text-1)]">{item.route}</div>
                    <div className="text-xs text-[var(--gold)] font-body italic">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

        {/* ZIYARAT SECTION - Z PATTERN */}
        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/40 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 px-4">
              <div className="inline-block px-4 py-1.5 bg-[var(--gold-soft)] text-[var(--gold)] rounded-lg text-xs font-bold font-heading uppercase mb-4 tracking-widest">{p.ziyaratEyebrow ?? "Cultural & Religious Heritage"}</div>
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)]">{p.ziyaratTitle ?? "Sacred Ziyarat Tours"}</h2>
            </div>

            {/* Z-PATTERN 1: MAKKAH */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1">
                <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-sm">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 border-b border-[var(--gold)]/20 pb-4">{p.ziyaratMakkahTitle ?? "Ziyarat in Makkah Mukarramah"}</h3>
                  <div className="space-y-6 text-[18px] text-[var(--text-2)] font-body leading-relaxed">
                    <p>{p.ziyaratMakkahText1 ?? "Our Ziyarat tours in Makkah include visits to the Cave of Hira at Jabal Al-Noor, Jabal Thawr, Jannat Al-Mualla, and Masjid Aisha."}</p>
                    <p>{p.ziyaratMakkahText2 ?? "Drivers know every location's significance and share meaningful insights during your journey. We offer half-day and full-day tours that match your prayer schedule."}</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 rounded-3xl overflow-hidden aspect-video relative border-2 border-[var(--border)] p-2">
                <div className="w-full h-full bg-[var(--bg-alt)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)]">
                  <MapPin size={48} className="opacity-20 mb-4" />
                  <span className="text-xs font-heading font-bold opacity-40 uppercase tracking-widest">Makkah Ziyarat Landmarks</span>
                </div>
              </div>
            </div>

            {/* Z-PATTERN 2: MADINAH */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-1 lg:order-1 rounded-3xl overflow-hidden aspect-video relative border-2 border-[var(--border)] p-2">
                <div className="w-full h-full bg-[var(--bg-alt)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)]">
                  <CheckCircle size={48} className="opacity-20 mb-4" />
                  <span className="text-xs font-heading font-bold opacity-40 uppercase tracking-widest">Madinah Historic Sites</span>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-sm">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 border-b border-[var(--gold)]/20 pb-4">{p.ziyaratMadinahTitle ?? "Ziyarat in Madinah Munawwarah"}</h3>
                  <div className="space-y-6 text-[18px] text-[var(--text-2)] font-body leading-relaxed">
                    <p>{p.ziyaratMadinahText1 ?? "In Madinah, we guide you to Masjid Quba, Masjid Al-Qiblatain, the battlefield of Uhud, and Jannat Al-Baqi."}</p>
                    <p>{p.ziyaratMadinahText2 ?? "Experience the rich history of the Prophet's city. Let Haramain Umrah Taxi connect you with the sacred footsteps of the Prophet (PBUH) and his companions."}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Z-PATTERN 3: BEYOND */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-sm">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 border-b border-[var(--gold)]/20 pb-4">{p.ziyaratTaifTitle ?? "Taif & Jeddah Day Tours"}</h3>
                  <div className="space-y-6 text-[18px] text-[var(--text-2)] font-body leading-relaxed">
                    <p>{p.ziyaratTaifText1 ?? "We offer day trips to the beautiful city of Taif with its cool mountain weather and rose gardens, and historical sites in Jeddah."}</p>
                    <p>{p.ziyaratTaifText2 ?? "Our team at Haramain Umrah Taxi is committed to making your pilgrimage comfortable and worry-free. We serve thousands of pilgrims every year with dedication and care."}</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 rounded-3xl overflow-hidden aspect-video relative border-2 border-[var(--border)] p-2">
                <div className="w-full h-full bg-[var(--bg-alt)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)]">
                  <Search size={48} className="opacity-20 mb-4" />
                  <span className="text-xs font-heading font-bold opacity-40 uppercase tracking-widest">Taif & Jeddah Exploration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

        {/* FINAL CTA */}
        <AnimatedSection className="px-6 py-24 pb-32">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 text-center">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-6">{p.ctaEyebrow ?? "Start Your Spiritual Journey"}</span>
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">{p.ctaTitle ?? "Book Your Umrah Taxi Online Now"}</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-2xl mx-auto leading-relaxed">
                  {p.ctaText ?? "Ready to book the best Umrah taxi service for your sacred journey? We are available 24/7 to take your booking. Let us handle your transportation while you focus on your worship and spiritual connection."}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://wa.me/966598401594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--green)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <WhatsAppIcon size={24} />
                    {p.ctaWhatsAppBtn ?? "Book via WhatsApp Now"}
                  </a>
                  <a
                    href="tel:+966598401594"
                    className="flex items-center gap-3 px-10 py-5 bg-[var(--gold)] text-white font-heading font-bold rounded-2xl hover:scale-105 transition-all w-full md:w-auto"
                  >
                    <Phone size={24} />
                    {p.ctaCallBtn ?? "Call Us Direct"}
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
