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
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Truck,
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

function HotelTable({ hotels, title }: { hotels: any[]; title: string }) {
  return (
    <div className="bg-[var(--bg)] border border-[var(--border)] rounded-[32px] p-8 md:p-10 overflow-x-auto">
      <h3 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-6">{title}</h3>
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="text-left py-4 px-4 text-[var(--text-1)] font-heading font-bold">Hotel Name</th>
            <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">Stars</th>
            <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">Rating</th>
            <th className="text-center py-4 px-4 text-[var(--text-1)] font-heading font-bold">Distance</th>
            <th className="text-left py-4 px-4 text-[var(--text-1)] font-heading font-bold">Location</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel, index) => (
            <tr key={index} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--bg-alt)]/30 transition-colors">
              <td className="py-4 px-4 text-[var(--text-1)] font-body font-medium">{hotel.name}</td>
              <td className="py-4 px-4 text-center">
                <div className="flex justify-center gap-1">
                  {[...Array(hotel.stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-[var(--gold)] fill-[var(--gold)]" />
                  ))}
                </div>
              </td>
              <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">{hotel.rating}</td>
              <td className="py-4 px-4 text-center text-[var(--text-2)] font-body">{hotel.distance}</td>
              <td className="py-4 px-4 text-[var(--text-2)] font-body">{hotel.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function HotelBookingMadinahClient() {
  const threeStarHotels = [
    { name: "Emaar Elite Hotel Madinah", stars: 3, rating: "3.9", distance: "700-800m", location: "Saad Bin Muaz, Central Area" },
    { name: "Nusk Al Eman", stars: 3, rating: "3.7", distance: "150m", location: "Abu Ayyub Al-Ansari, Bani Khidrah" },
    { name: "Grand Plaza Badr Al Maqam", stars: 3, rating: "3.0", distance: "600m", location: "Central Area, Medina" },
    { name: "Durrat Al Eiman Hotel", stars: 3, rating: "3.7", distance: "300-800m", location: "Abu Dujanah Al Ansari, Bada'ah" },
    { name: "Rama Al Madinah Hotel", stars: 3, rating: "3.3", distance: "100-150m", location: "Prince Abdul Mohsen Rd" },
    { name: "Maien Taiba Hotel", stars: 3, rating: "4.5", distance: "400m", location: "Bani Khidrah" },
    { name: "Taiba Front Hotel", stars: 3, rating: "4.6", distance: "422-600m", location: "Musab Bin Omair St, Bada'ah" },
    { name: "Mokhtara International", stars: 3, rating: "3.2", distance: "544-800m", location: "Al Haram, Madinah" },
    { name: "Leader Al Muna Kareem", stars: 5, rating: "4.2", distance: "70m from Gate 25", location: "King Faisal Rd, Near Imam Bukhari" },
    { name: "Grand Plaza Madinah", stars: 3, rating: "3.6", distance: "700-750m", location: "Abu Ayyub Al-Ansari, Bada'ah" },
    { name: "Artal International Hotel", stars: 3, rating: "3.8", distance: "700m", location: "King Faisal Rd, Bada'ah" },
    { name: "Odst Madinah Hotel", stars: 3, rating: "3.5", distance: "0.5 miles", location: "Central area, near Quba Gate" },
    { name: "Taiba Al Diyafah Hotel", stars: 3, rating: "3.6", distance: "2 km", location: "Al Salam Rd, Al Naqa'" },
    { name: "Hotel Taiba Roaj", stars: 3, rating: "4.0", distance: "2.3 km", location: "As Salam Rd, Al Naqa'" },
    { name: "Faraj Al Madinah", stars: 3, rating: "4.1", distance: "7.1 km", location: "Uthman Ibn Affan Rd" },
    { name: "Diamond Suites", stars: 3, rating: "4.1", distance: "12.3 km", location: "Prince Naif Ibn Abdulaziz Rd" },
    { name: "Concorde Dar Al Khair", stars: 3, rating: "3.9", distance: "3.4 km", location: "Saad Bin Maaz, Bada'ah" },
  ];

  const fourStarHotels = [
    { name: "Saja Al Madinah Hotel", stars: 4, rating: "4.5", distance: "250m", location: "King Faisal Rd, Bada'ah" },
    { name: "Jayden Madinah Hotel", stars: 4, rating: "4.6", distance: "700m", location: "Jaafar bin Abi Talib St" },
    { name: "Deyar Al Eiman Hotel", stars: 4, rating: "3.8", distance: "700m", location: "Near Saqifah Bani Saidah" },
    { name: "Emaar Mektan Hotel", stars: 4, rating: "4.1", distance: "375m", location: "As Salam Rd, Al Manakhah" },
    { name: "Zowar International Hotel", stars: 4, rating: "3.3", distance: "170-180m", location: "Abdul Rahman Ibn Ouf St" },
    { name: "View Al Madinah Hotel", stars: 4, rating: "4.7", distance: "450m", location: "Bani Khidrah, Jabir bin Abdullah St" },
    { name: "Ritz Al Madinah Hotel", stars: 4, rating: "3.9", distance: "150m", location: "Bada'ah" },
    { name: "Osman Bin Affan Hotel", stars: 4, rating: "3.8", distance: "840m", location: "King Faisal Ring Rd" },
    { name: "Al Ansar Golden Tulip", stars: 4, rating: "3.7", distance: "1.2 km", location: "Abu Ayyub Al-Ansari" },
    { name: "Valy Al Madinah Hotel", stars: 4, rating: "4.4", distance: "500m", location: "Abdullah bin Haram St" },
    { name: "Nusk Al Madinah", stars: 4, rating: "3.6", distance: "150-330m", location: "Saad bin Obada, Bani Khidrah" },
    { name: "Sky View Hotel", stars: 1, rating: "3.2", distance: "50-100m", location: "Jafer Bin Abi Talib St" },
    { name: "Tabah Towers Hotel", stars: 4, rating: "4.0", distance: "3.1 km", location: "Saad Bin Maaz" },
    { name: "FLAVOUR Hotel", stars: 4, rating: "4.4", distance: "10.3 km", location: "Prince Muqrin Ibn Abdulaziz" },
    { name: "Hotel Bosphorus", stars: 4, rating: "4.4", distance: "2.1 km", location: "Shahrah Islan" },
    { name: "ELAF Taiba Hotel", stars: 4, rating: "3.8", distance: "3.3 km", location: "Saad Bin Maaz, Bada'ah" },
    { name: "Grand Safi Hotel", stars: 4, rating: "4.4", distance: "2.1 km", location: "Al Markaziya, Shahrah Islam" },
  ];

  const fiveStarHotels = [
    { name: "Anwar Al Madinah Mövenpick", stars: 5, rating: "4.5", distance: "100-200m", location: "Central Zone, Bada'ah" },
    { name: "Pullman ZamZam Madinah", stars: 5, rating: "4.6", distance: "150m", location: "Amr Bin Al Gmoh St" },
    { name: "Frontel Al Harithia (Oberoi)", stars: 5, rating: "4.3", distance: "25m", location: "Bada'ah, Madinah" },
    { name: "Shaza Regency Plaza", stars: 5, rating: "4.1", distance: "400-600m", location: "King Faisal Rd, Bada'ah" },
    { name: "Crowne Plaza Madinah", stars: 5, rating: "4.5", distance: "300-400m", location: "1st Ring Rd, King Faisal St" },
    { name: "Hilton Madinah", stars: 5, rating: "4.5", distance: "300m", location: "King Fahd Rd, Bada'ah" },
    { name: "Dar Al Eiman Haram", stars: 5, rating: "4.3", distance: "700m", location: "Al Saha St, Bada'ah" },
    { name: "Emaar Royal Hotel", stars: 5, rating: "4.1", distance: "100m", location: "King Faisal Rd, Bada'ah" },
    { name: "Worth Peninsula Hotel", stars: 5, rating: "4.4", distance: "200-700m", location: "King Fahd Rd, Bada'ah" },
    { name: "Dar Al-Taqwa Hotel", stars: 5, rating: "4.4", distance: "2.8 km", location: "Al Sitteen St, Near Masjid Al Nabawi" },
    { name: "InterContinental Dar al Iman", stars: 5, rating: "4.8", distance: "2.8 km", location: "Bada'ah, Madinah" },
    { name: "Sofitel Shahd Al Madinah", stars: 5, rating: "4.6", distance: "2.8 km", location: "King Fahd Rd, Bada'ah" },
    { name: "The Seasons Hotel", stars: 5, rating: "4.3", distance: "3.2 km", location: "King Abdullah Branch Rd" },
    { name: "The Oberoi, Madina", stars: 5, rating: "4.5", distance: "2.7 km", location: "Abi Zur Al Ghafari, Bada'ah" },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] selection:bg-[var(--gold-soft)] selection:text-[var(--gold)]">
      <Canonical />
      <Navbar />

      <main className="flex-grow overflow-hidden">
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-b from-[var(--gold)]/5 to-[var(--bg)] overflow-hidden flex flex-col justify-center min-h-[85vh]">
          <div className="absolute inset-0 bg-[url('/images/hotel-booking-madinah.jpeg')] bg-cover bg-center bg-no-repeat z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80 z-10" />
          <IslamicGeometricBg opacity={0.03} />

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
                  Hotel Booking
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl lg:text-[64px] font-heading font-extrabold !text-white mb-8 leading-tight"
              >
                Hotel Booking in Madinah, Saudi Arabia | <span className="text-[var(--gold)]">Contact Us to Book</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-3xl mx-auto mb-10 space-y-4"
              >
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  At Haramain Umrah Taxi, we have been serving pilgrims in Madinah for years. Our hotel booking service brings you the same reliability and local expertise you trust from our taxi operations.
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-body">
                  We connect you with the finest accommodations near Masjid Al Nabawi, ensuring your stay in the City of the Prophet (PBUH) is peaceful, comfortable, and spiritually fulfilling.
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
                  Book Hotel on WhatsApp
                </a>
                <a
                  href="tel:+966598401594"
                  className="flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-white font-heading font-bold rounded-xl hover:scale-105 transition-all shadow-sm"
                >
                  <Phone size={20} />
                  Call Us Now
                </a>
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
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--text-1)] mb-6">Hotel Booking in Madinah: Call Us to Book Medina Hotels</h2>
                <div className="space-y-5">
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Booking a hotel in Madinah should not be complicated. One call to Haramain Umrah Taxi, and we will do it for you.
                  </p>
                  <p className="text-[var(--text-2)] text-lg leading-relaxed font-body">
                    Our booking team has direct relationships with hotel managers across Madinah, which means faster confirmations, better room allocations, and rates that online platforms cannot match.
                  </p>
                </div>
              </div>

              <ImagePlaceholder label="Image Placeholder: Madinah / Masjid Al Nabawi" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Advantages</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Advantages of Booking Through Us</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card
                  title="Direct Access"
                  description="Direct access to hotels that our drivers visit daily."
                  icon={Truck}
                />
                <Card
                  title="Insider Knowledge"
                  description="Insider knowledge of which properties maintain quality standards."
                  icon={ShieldCheck}
                />
                <Card
                  title="Combined Packages"
                  description="Combined hotel + taxi packages for maximum convenience."
                  icon={BadgeCheck}
                />
                <Card
                  title="Instant Confirmations"
                  description="Instant confirmations without payment hassles."
                  icon={CheckCircle2}
                />
                <Card
                  title="Local Support"
                  description="Local support team available 24/7 in Madinah."
                  icon={Users}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">Affordable</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">Hotel Booking in Madinah Near Masjid Al Nabawi at Affordable Price</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  We specialize in securing properties within 100-500 meters of Masjid Al-Nabawi. You can cover this distance comfortably in a 2-5 minute walk.
                </p>
              </div>

              <div className="bg-[var(--bg-card)] border-2 border-[var(--gold)]/10 rounded-[32px] p-8 md:p-10">
                <p className="text-[var(--text-2)] text-lg leading-relaxed font-body mb-6">
                  Whether you want to book a cheap hotel in Madinah or prefer mid-range comfort, we ensure your accommodation has easy taxi access for Ziyarat trips, shopping, and airport transfers.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">3 Star</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">3 Star Hotel Booking in Madinah</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  Exceptional value for budget-conscious pilgrims with clean rooms and essential amenities.
                </p>
              </div>

              <HotelTable hotels={threeStarHotels} title="3-Star Hotels In Madinah" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">4 Star</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">4 Star Hotel Booking in Madinah</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  Enhanced comfort without luxury pricing with superior rooms and optimal locations.
                </p>
              </div>

              <HotelTable hotels={fourStarHotels} title="4-Star Hotels In Madinah" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">5 Star</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">5 Star Hotel Booking in Madinah</h2>
                <p className="mt-4 text-lg text-[var(--text-2)] max-w-3xl mx-auto font-body">
                  Luxury properties with world-class hospitality and unbeatable proximity to the Prophet's Mosque.
                </p>
              </div>

              <HotelTable hotels={fiveStarHotels} title="5-Star Premium Hotels In Madinah" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-24 bg-[var(--bg-alt)]/50 border-y border-[var(--border)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-[var(--gold)] font-heading font-bold text-sm uppercase tracking-widest block mb-4">How to Book</span>
                <h2 className="text-4xl font-heading font-bold text-[var(--text-1)]">How to Book Madinah Hotels in 5 Easy Steps?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <Phone size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Reach Out</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">Reach out via your preferred method.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <Calendar size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Share Dates</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">Share arrival/departure dates.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <Building2 size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Review Options</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">Review customized recommendations.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Select</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">Select your preferred accommodation.</p>
                </div>
                <div className="bg-[var(--bg)] border border-[var(--border)] rounded-3xl p-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--gold-soft)] flex items-center justify-center text-[var(--gold)] mx-auto mb-4">
                    <BadgeCheck size={22} />
                  </div>
                  <h3 className="text-[var(--text-1)] font-heading font-bold text-base mb-2">Confirm</h3>
                  <p className="text-[var(--text-2)] text-xs leading-relaxed font-body">Receive instant confirmation.</p>
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
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Ready to Secure Your Accommodation?</h2>
                <p className="text-[var(--text-2)] text-[18px] font-body mb-12 max-w-3xl mx-auto leading-relaxed">
                  Contact Haramain Umrah Taxi now and let our local team find you the perfect hotel near Masjid Al Nabawi. We combine years of transportation experience with trusted hotel partnerships for a worry-free stay.
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
