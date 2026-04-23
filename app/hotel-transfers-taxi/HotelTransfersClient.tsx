"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IslamicGeometricBg } from "@/components/graphics/IslamicGeometricBg";
import { AnimatedCarOnRoad } from "@/components/graphics/AnimatedCarOnRoad";
import { 
  ArrowRight, 
  Plane, 
  MapPin, 
  Users, 
  Briefcase, 
  Phone, 
  ShieldCheck, 
  Zap, 
  Building,
  CheckCircle2,
  Clock,
  HeartHandshake
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Canonical } from "@/components/SEO/Canonical";

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

const FleetCard = ({ title, pax, bag, description, image }: { title: string, pax: string, bag: string, description: string, image: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/20 rounded-3xl p-6 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-[var(--gold)]/40"
  >
    <div className="h-[160px] w-full mb-6 flex items-center justify-center bg-[var(--bg-alt)] rounded-2xl overflow-hidden relative border border-[var(--border)]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 30vw"
        className="object-contain p-4 drop-shadow-lg hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4">{title}</h3>

    <div className="flex gap-4 mb-4">
      <div className="flex items-center gap-1.5 text-[var(--text-2)] font-body text-xs font-semibold">
        <Users size={14} className="text-[var(--gold)]" />
        <span>{pax}</span>
      </div>
      <div className="flex items-center gap-1.5 text-[var(--text-2)] font-body text-xs font-semibold">
        <Briefcase size={14} className="text-[var(--gold)]" />
        <span>{bag}</span>
      </div>
    </div>

    <p className="text-[var(--text-3)] text-sm leading-relaxed font-body mb-6 flex-grow">{description}</p>

    <div className="mt-auto pt-6 border-t border-[var(--border)]">
      <a
        href="https://wa.me/966598401594"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--green)] text-white font-body font-semibold rounded-xl hover:opacity-95 transition-all shadow-md text-sm"
      >
        <WhatsAppIcon size={18} />
        Book Now via WhatsApp
      </a>
    </div>
  </motion.div>
);

export function HotelTransfersClient() {
  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />
      
      <main className="flex-grow overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/hotel-transfers-taxi.png')] bg-cover bg-center bg-no-repeat z-0" />
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-1.5 rounded-full bg-[var(--gold)] text-white font-heading font-bold text-xs uppercase tracking-widest shadow-lg shadow-[var(--gold)]/20">
                  Premium Hotel Transfers
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Hotel Transfer Services in <span className="text-[var(--gold)]">Makkah</span>, <span className="text-[var(--gold)]">Madinah</span> & Jeddah Book Now
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg text-white/90 leading-relaxed font-body">
                  Your flight lands after hours of travel. You are tired, carrying heavy luggage, and need to reach your hotel fast. The last thing you want is haggling with taxi drivers or waiting for crowded shuttles. We get it.
                </p>
                <p className="text-lg text-white/90 leading-relaxed font-body">
                  At Haramain Umrah Taxi, we take that stress away completely. Our hotel transfer in Saudi Arabia picks you up right at the airport and drops you at your hotel door. No waiting. No confusion. No overcharging. Just smooth, comfortable rides that let you start your sacred journey refreshed.
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
                  Book on WhatsApp Now
                </a>
                <Link
                  href="#fleet"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--bg-alt)] text-[var(--text-1)] font-heading font-bold rounded-xl border border-[var(--border)] hover:bg-[var(--gold)] hover:text-white transition-all shadow-sm"
                >
                  View Our Fleet
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none">
            <AnimatedCarOnRoad />
          </div>
        </section>

        {/* AIRPORT TO HOTEL TRANSFER */}
        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/30 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-lg bg-[var(--gold-soft)] text-[var(--gold)] font-heading font-bold text-xs uppercase tracking-widest mb-6">Seamless Connectivity</div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Airport to Hotel Transfer Taxi Services</h2>
                <div className="space-y-6">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Airport to hotel transfer taxi services form the backbone of comfortable travel in Saudi Arabia. You need reliable transport the moment you arrive. Our service covers all major airports, Jeddah, Madinah, and Riyadh.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    We offer vehicles for every group size. Solo travelers ride in comfortable sedans. Families with children get spacious vans with extra luggage room. Large groups travel together in minibuses, maintaining family unity throughout the journey.
                  </p>
                  <div className="p-6 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl flex gap-4 items-start shadow-sm">
                    <HeartHandshake className="text-[var(--gold)] shrink-0 mt-1" size={24} />
                    <p className="text-[var(--text-2)] font-body text-sm leading-relaxed">
                      Your driver helps with luggage loading and unloading. He opens doors for elderly passengers and assists families with children.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border-2 border-[var(--border)] p-2 bg-[var(--bg)]">
                <div className="aspect-square lg:aspect-auto lg:h-[500px] bg-[var(--bg-alt)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)] border border-[var(--border)] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[var(--gold)]/5 group-hover:bg-[var(--gold)]/10 transition-colors" />
                  <Plane size={80} className="mb-4 opacity-20 relative z-10" />
                  <span className="text-sm font-heading font-bold uppercase tracking-widest opacity-40 relative z-10">Airport Arrivals</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CITIES Z-PATTERN */}
        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-24">
              
              {/* MAKKAH */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                   <div className="absolute -left-8 -top-8 w-48 h-48 bg-[var(--gold)]/10 rounded-full blur-3xl" />
                   <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/20 rounded-[32px] p-8 md:p-12 relative z-10 shadow-sm">
                     <div className="w-12 h-12 bg-[var(--gold-soft)] rounded-xl flex items-center justify-center text-[var(--gold)] mb-6">
                       <Building size={24} />
                     </div>
                     <h3 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Hotel Transport Taxi Services Makkah</h3>
                     <div className="space-y-4">
                       <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                         Hotel transport taxi services Makkah operate 24/7 throughout the holy city. You can book rides any time, day or night. Our drivers know Makkah's complex street system perfectly. They navigate through traffic efficiently, even during peak Umrah seasons.
                       </p>
                       <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                         We pick you up from any hotel in Makkah. Whether you stay near Masjid al-Haram or in Aziziyah, we will reach you promptly. Do you want to visit Jabal al-Nour or shop at malls? We take you there comfortably. Need to reach the Haram for prayer times? We ensure you arrive with time to spare.
                       </p>
                       <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body font-semibold">
                         The hotel taxi Makkah service includes hotel-to-hotel transfers too. We move your luggage and family smoothly. You do not carry heavy bags through busy streets yourself.
                       </p>
                     </div>
                   </div>
                </div>
                <div className="order-1 lg:order-2 rounded-3xl border-2 border-[var(--border)] p-2 bg-[var(--bg-alt)]">
                  <div className="aspect-video bg-[var(--bg)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)] border border-[var(--border)] relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[var(--gold)]/5 group-hover:bg-[var(--gold)]/10 transition-colors" />
                     <MapPin size={64} className="mb-4 opacity-20 relative z-10" />
                     <span className="text-xs font-heading font-bold uppercase tracking-widest opacity-40 relative z-10">Makkah City Navigation</span>
                  </div>
                </div>
              </div>

              {/* MADINAH */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-1 rounded-3xl border-2 border-[var(--border)] p-2 bg-[var(--bg-alt)]">
                  <div className="aspect-video bg-[var(--bg)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)] border border-[var(--border)] relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[var(--green)]/5 group-hover:bg-[var(--green)]/10 transition-colors" />
                     <CheckCircle2 size={64} className="mb-4 opacity-20 relative z-10 text-[var(--green)]" />
                     <span className="text-xs font-heading font-bold uppercase tracking-widest opacity-40 relative z-10">Madinah Hotels & Ziyarat</span>
                  </div>
                </div>
                <div className="order-2 relative">
                   <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-[var(--green)]/5 rounded-full blur-3xl" />
                   <div className="bg-[var(--bg-card)] border-2 border-[var(--green)]/20 rounded-[32px] p-8 md:p-12 relative z-10 shadow-sm">
                     <div className="w-12 h-12 bg-[var(--green-soft)] rounded-xl flex items-center justify-center text-[var(--green)] mb-6">
                       <Building size={24} />
                     </div>
                     <h3 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Hotel Transport Taxi Services Madinah</h3>
                     <div className="space-y-4">
                       <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                         Hotel transport taxi services Madinah provide the same excellent service in the Prophet's city. Madinah's hotels are spread across different areas. Our drivers know them all intimately. You do not need to explain directions or show maps.
                       </p>
                       <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                         We handle hotel taxi Madinah bookings for visits to Masjid Nabawi, Quba Mosque, and Mount Uhud. Our drivers suggest the best visiting times to avoid crowds. They wait patiently while you complete your Ziyarat.
                       </p>
                       <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body font-semibold">
                         Evening visits to date markets or traditional souqs? We take you shopping and bring you back safely. Our drivers recommend authentic shops where locals buy. You avoid tourist traps that charge inflated prices.
                       </p>
                     </div>
                   </div>
                </div>
              </div>

              {/* JEDDAH */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                   <div className="absolute -left-8 -top-8 w-48 h-48 bg-[var(--gold)]/10 rounded-full blur-3xl" />
                   <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/20 rounded-[32px] p-8 md:p-12 relative z-10 shadow-sm">
                     <div className="w-12 h-12 bg-[var(--gold-soft)] rounded-xl flex items-center justify-center text-[var(--gold)] mb-6">
                       <Building size={24} />
                     </div>
                     <h3 className="text-3xl font-heading font-bold text-[var(--text-1)] mb-6">Hotel Transport Taxi Services Jeddah</h3>
                     <div className="space-y-4">
                       <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                         Hotel transport taxi services Jeddah cater to both pilgrims and business travelers. Jeddah serves as the gateway city for most Umrah visitors. Many people spend nights here before traveling to Makkah or after completing Umrah before flying home.
                       </p>
                       <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body">
                         We transfer you between hotels and tourist attractions. If you want to see the historic Al-Balad district or walk along the Corniche, we will take you comfortably.
                       </p>
                       <p className="text-[var(--text-2)] text-[17px] leading-relaxed font-body font-semibold">
                         Jeddah's hotels range from budget to five-star luxury. Our service covers all price categories. We do not judge based on where you stay. Every passenger receives the same respect and excellent service regardless of hotel status.
                       </p>
                     </div>
                   </div>
                </div>
                <div className="order-1 lg:order-2 rounded-3xl border-2 border-[var(--border)] p-2 bg-[var(--bg-alt)]">
                  <div className="aspect-video bg-[var(--bg)] rounded-2xl flex flex-col items-center justify-center text-[var(--text-3)] border border-[var(--border)] relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[var(--gold)]/5 group-hover:bg-[var(--gold)]/10 transition-colors" />
                     <Plane size={64} className="mb-4 opacity-20 relative z-10" />
                     <span className="text-xs font-heading font-bold uppercase tracking-widest opacity-40 relative z-10">Jeddah Gateway</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* SPECIFIC ROUTES */}
        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--text-1)]">Specialized Airport Routes</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-2xl mx-auto font-body">Direct, fast, and secure connections from major airports to your accommodation.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-8 lg:p-10 hover:border-[var(--gold)]/50 transition-colors">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 flex items-center gap-3">
                    <Zap className="text-[var(--gold)]" />
                    Jeddah Airport to Makkah Hotel
                  </h3>
                  <div className="space-y-4">
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                      The Jeddah airport to Makkah hotel taxi route is our specialty. This 92-kilometer journey takes 60-90 minutes depending on traffic. Our drivers have driven this road thousands of times. They know exactly which lanes move faster at which times.
                    </p>
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                      Your driver meets you at Jeddah Airport arrivals. He tracks your flight, so you do not call to explain delays. He carries a sign with your name printed clearly. You spot him easily among the crowds. Within minutes, you sit in a clean vehicle heading to Makkah.
                    </p>
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body bg-[var(--gold)]/5 p-4 rounded-xl border border-[var(--gold)]/10">
                      We stop at Miqat if you need to enter Ihram. Our driver shows you the facilities and waits patiently. He ensures you complete this important ritual properly. For families with young children, we allow bathroom breaks without extra charges.
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl p-8 lg:p-10 hover:border-[var(--green)]/50 transition-colors">
                  <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6 flex items-center gap-3">
                    <Zap className="text-[var(--green)]" />
                    Madinah Airport to Madinah Hotel
                  </h3>
                  <div className="space-y-4">
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                      The Madinah Airport to Madinah Hotel taxi brings you directly from Prince Mohammad bin Abdulaziz Airport to your accommodation. The airport is situated outside the city, requiring reliable transport. You cannot walk to hotels from there.
                    </p>
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body">
                      Madinah Airport is smaller than Jeddah Airport. Our drivers navigate it easily. They wait at the correct exit, ensuring quick meetups. The drive to the city center hotels takes 15-25 minutes, depending on location.
                    </p>
                    <p className="text-[var(--text-2)] text-[16px] leading-relaxed font-body bg-[var(--green)]/5 p-4 rounded-xl border border-[var(--green)]/10">
                      We drive past beautiful date farms and modern developments. Our drivers point out landmarks, helping you orient yourself in the city. This friendly introduction makes first-time visitors feel welcome and comfortable.
                    </p>
                  </div>
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
            
              <div className="text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Why Haramain Offers the Best Hotel Transfers?</h2>
                <p className="text-[var(--text-2)] font-body max-w-2xl mx-auto text-lg">
                  Best hotel transfers combine reliability, comfort, and fair pricing. We have perfected this balance over years of serving pilgrims and tourists.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                 <div className="space-y-4 bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6">
                   <div className="w-14 h-14 bg-[var(--gold)]/10 rounded-2xl flex items-center justify-center text-[var(--gold)]">
                     <ShieldCheck size={28} />
                   </div>
                   <h4 className="font-heading font-bold text-xl text-[var(--text-1)]">Immaculate Vehicles</h4>
                   <p className="text-[15px] text-[var(--text-2)] font-body leading-relaxed">
                     Our vehicles are always clean. We maintain high standards. Seats are comfortable. Air conditioning works perfectly. You do not sit in old taxis smelling bad or with broken seats. Our fleet includes recent models kept in excellent condition.
                   </p>
                 </div>
                 <div className="space-y-4 bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6">
                   <div className="w-14 h-14 bg-[var(--gold)]/10 rounded-2xl flex items-center justify-center text-[var(--gold)]">
                     <Users size={28} />
                   </div>
                   <h4 className="font-heading font-bold text-xl text-[var(--text-1)]">Professional Drivers</h4>
                   <p className="text-[15px] text-[var(--text-2)] font-body leading-relaxed">
                     Our drivers behave professionally. They dress neatly. They greet you respectfully. They follow traffic laws carefully and do not smoke in vehicles or play loud music. Your journey feels dignified and peaceful.
                   </p>
                 </div>
                 <div className="space-y-4 bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6">
                   <div className="w-14 h-14 bg-[var(--gold)]/10 rounded-2xl flex items-center justify-center text-[var(--gold)]">
                     <CheckCircle2 size={28} />
                   </div>
                   <h4 className="font-heading font-bold text-xl text-[var(--text-1)]">Transparent Pricing</h4>
                   <p className="text-[15px] text-[var(--text-2)] font-body leading-relaxed">
                     The quote we give is what you pay. No hidden fees appear at the end. No extra charges for luggage, late hours, or traffic delays. You pay one fair price covering everything.
                   </p>
                 </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* FLEET FOR HOTEL TRANSFER */}
        <AnimatedSection id="fleet" className="py-24 bg-[var(--bg-alt)] border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Fleet for Hotel Transfer Service</h2>
                <p className="text-[var(--text-2)] font-body max-w-2xl mx-auto text-lg">
                  We maintain a diverse fleet serving different group sizes and budgets. All our vehicles feature working air conditioning, comfortable seating, and clean interiors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FleetCard 
                  title="Sedan (Toyota Camry/Sonata)"
                  pax="Up to 4 Passengers"
                  bag="Moderate Luggage"
                  description="Accommodate 4 passengers with moderate luggage. Perfect for couples or small families traveling light."
                  image="/images/fleet/sedan.webp"
                />
                <FleetCard 
                  title="Toyota Hiace Van"
                  pax="6-8 Passengers"
                  bag="Generous Luggage Space"
                  description="Ideal for families with children or groups traveling together. The extra space makes long trips more comfortable."
                  image="/images/fleet/hiace-microbus.png"
                />
                <FleetCard 
                  title="Coaster Minibus"
                  pax="12-14 Passengers"
                  bag="Group Luggage Capacity"
                  description="These work perfectly for extended family groups or friends traveling together for Umrah. Everyone stays together."
                  image="/images/fleet/coaster.jpg"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CONCLUSION & FINAL CTA */}
        <AnimatedSection className="px-6 py-24 pb-32">
          <div className="max-w-7xl mx-auto lg:px-8">
            <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/30 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 text-center">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Conclusion</span>
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Traveling in Saudi Arabia Should Feel Smooth and Dignified</h2>
                <div className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto space-y-6">
                  <p className="leading-relaxed">
                    Your sacred journey deserves the best hotel transfer services in Saudi Arabia that respect your time, comfort, and budget. Whether you need a Jeddah airport to Makkah hotel taxi or Madinah hotel to Madinah airport taxi, we serve you professionally every time.
                  </p>
                  <p className="leading-relaxed font-semibold">
                    At Haramain Umrah Taxi, we have perfected hotel transport taxi services Makkah, Madinah, and Jeddah over the years of dedicated service.
                  </p>
                  <p className="leading-relaxed">
                    Book your hotel transfers Saudi Arabia with us today through WhatsApp or our website. Let us handle transportation while you focus on prayers, worship, and creating blessed memories.
                  </p>
                </div>
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
