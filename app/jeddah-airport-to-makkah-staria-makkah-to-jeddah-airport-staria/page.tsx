import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Jeddah Airport to Makkah Staria & Makkah to Jeddah Airport Staria",
  description:
    "For most families and small groups, the Staria is the vehicle of choice for Jeddah Airport to Makkah. Find out why it's the best option and check the fares.",
  alternates: {
    canonical: "/jeddah-airport-to-makkah-staria-makkah-to-jeddah-airport-staria/",
  },
  openGraph: {
    title: "Jeddah Airport to Makkah Staria & Makkah to Jeddah Airport Staria",
    description:
      "For most families and small groups, the Staria is the vehicle of choice for Jeddah Airport to Makkah. Find out why it's the best option and check the fares.",
    url: "/jeddah-airport-to-makkah-staria-makkah-to-jeddah-airport-staria/",
    type: "article",
    images: [
      {
        url: "/images/Jeddah Airport to Makkah Staria & Makkah to Jeddah Airport Staria.png",
        alt: "Jeddah Airport to Makkah Staria & Makkah to Jeddah Airport Staria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeddah Airport to Makkah Staria & Makkah to Jeddah Airport Staria",
    description:
      "For most families and small groups, the Staria is the vehicle of choice for Jeddah Airport to Makkah. Find out why it's the best option and check the fares.",
    images: ["/images/Jeddah Airport to Makkah Staria & Makkah to Jeddah Airport Staria.png"],
  },
};

const post = {
  id: "jeddah-airport-to-makkah-staria-makkah-to-jeddah-airport-staria",
  title: "Jeddah Airport to Makkah Staria & Makkah to Jeddah Airport Staria",
  excerpt:
    "You just landed at Jeddah Airport and the first thing on your mind after collecting your bags is getting to Makkah. For most families and small groups, the Staria keeps coming up as the vehicle of choice on this route.",
  category: "taxi-guides",
  categoryName: "Taxi Guide",
  date: "2026-07-20",
  readTime: "6 min read",
  author: "M Umar Irfan",
  image: "/images/Jeddah Airport to Makkah Staria & Makkah to Jeddah Airport Staria.png",
};

const inboundFares = [
  ["Sedan (Camry/Sonata)", "Up to 3 passengers", "SAR 250"],
  ["Staria", "7-Seater", "SAR 300"],
  ["Luxury GMC", "7-Seater", "SAR 450"],
  ["Hiace Microbus", "12-Seater", "SAR 400"],
  ["Coaster", "18-Seater", "SAR 600"],
];

const outboundFares = [
  ["Sedan (Camry/Sonata)", "Up to 3 passengers", "SAR 200"],
  ["Staria", "7-Seater", "SAR 270"],
  ["Luxury GMC", "7-Seater", "SAR 400"],
  ["Hiace Microbus", "12-Seater", "SAR 280"],
  ["Coaster", "18-Seater", "SAR 500"],
  ["Bus", "50-Seater", "SAR 800"],
];

function FareTable({ fares }: { fares: string[][] }) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse border border-[var(--border)] rounded-xl overflow-hidden">
        <thead className="bg-[var(--green)] text-white">
          <tr>
            <th className="p-4 text-left font-heading">Vehicle</th>
            <th className="p-4 text-left font-heading">Capacity</th>
            <th className="p-4 text-left font-heading">Fare (SAR)</th>
          </tr>
        </thead>
        <tbody className="text-[var(--text-2)]">
          {fares.map(([vehicle, capacity, fare], index) => (
            <tr
              key={vehicle}
              className={`border-b border-[var(--border)] ${index % 2 ? "bg-[var(--bg-alt)]" : ""}`}
            >
              <td className="p-4 font-bold">{vehicle}</td>
              <td className="p-4">{capacity}</td>
              <td className="p-4">{fare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-[var(--green)] font-body font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            <article className="bg-[var(--bg)] border-2 border-t-[var(--gold)] border-b-[var(--green)] border-l-[var(--gold)] border-r-[var(--green)] rounded-2xl py-4 px-[10px] md:px-8 md:py-8 lg:px-12 lg:py-12 shadow-lg">
              <span className="inline-block px-4 py-1.5 bg-[var(--green)]/10 text-[var(--green)] font-body text-sm font-semibold rounded-full mb-4">
                {post.categoryName}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[var(--text-2)] font-body text-sm mb-8 pb-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[var(--gold)]" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[var(--gold)]" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--gold)]">By</span>
                  <span>{post.author}</span>
                </div>
              </div>

              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You just landed at Jeddah Airport and the first thing on your mind after collecting your bags is getting to Makkah. For most families and small groups, the Staria keeps coming up as the vehicle of choice on this route, and there are pretty clear reasons why.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It sits right in that comfortable middle ground between a basic sedan and a large microbus, where most pilgrim groups of four to seven people want to be.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  At Haramain Umrah Taxi, the Staria is one of our most requested vehicles specifically on this Jeddah to Makkah route. People book it on the way in and then call us again to book it on the way back.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Why Pilgrims Keep Choosing the Staria for This Route?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Jeddah Airport to Makkah drive is roughly 89.3 kilometres and takes around one to one and a half hours under normal conditions. During Ramadan nights or busy Umrah weekends, that can stretch depending on how the traffic behaves near the Haram.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Sitting in a cramped car for ninety minutes after a long international flight is genuinely unpleasant, and that is where the Staria earns its reputation.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Seven proper seats, real luggage room, and a cabin that does not feel like everyone is pressed against each other for the entire journey. When you have five or six people with bags coming off a flight, those things matter in a way they simply do not on a ten-minute city transfer.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Why Pilgrims Keep Choosing the Staria for This Route.png"
                    alt="Why Pilgrims Keep Choosing the Staria for This Route"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Jeddah Airport to Makkah Staria Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The confirmed fare for a Staria from Jeddah Airport to your hotel in Makkah is SAR 300. That is for the entire vehicle, not per person. Across five passengers, that works out to SAR 60 each, which for a private car covering 89.3 kilometres is genuinely hard to argue with.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  For comparison, here is how the other vehicles on this route are priced:
                </p>
                <FareTable fares={inboundFares} />
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are travelling with just two or three people, the sedan at SAR 250 is the sensible budget. If your group is larger than seven, the Hiace covers up to twelve. But for the typical family of five or six, the Staria at SAR 300 is where most people land and stay comfortable doing it.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Makkah to Jeddah Airport Staria Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The return journey from your hotel in Makkah back to Jeddah Airport is priced slightly differently. The Staria comes in at SAR 270 on this route, a small drop from the inbound fare, which is standard across most airport routes in Saudi Arabia.
                </p>
                <FareTable fares={outboundFares} />
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  One thing worth doing when you book your inbound transfer is locking in the return at the same time. You sort both in one conversation, both are confirmed, and you are not scrambling to arrange a car on your last morning in Makkah when you should be focused on leaving properly.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Luggage Situation In Staria
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Luggage problems come up more than people expect. After Umrah, most pilgrims are heading home with more than they arrived with. They have Zamzam water, prayer items, and gifts for family. The bags get heavier on the way out, and a sedan that seemed fine on the way in suddenly feels very full.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Staria has a proper boot. Seven people can travel with reasonable luggage without anyone needing to hold a bag on their lap for the whole journey. If you know your group is carrying a lot, mention it when you book so we can factor that into the vehicle recommendation.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  During Ramadan and peak Umrah periods, the Staria books up faster than most vehicles on this route. If your travel falls during those months, reach out a few days ahead rather than the night before. Leaving it last minute during busy season usually means the vehicle you wanted is already taken.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Luggage Situation In Staria.png"
                    alt="Luggage Situation In Staria"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Booking Your Staria with Haramain Umrah Taxi
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Send us a WhatsApp message or call with your flight number, arrival time, number of passengers, and hotel name in Makkah. We confirm your Staria and your fare in the same conversation. Your driver is assigned and will be at arrivals with your name before your flight lands.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  For the return, give us your departure date and flight time, and we handle that booking alongside the inbound one. Everything is confirmed; nothing left to figure out while you are in the middle of your trip.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book your Staria with Haramain Umrah Taxi on WhatsApp, and for general inquiries, contact us by email: info@haramainumrahtaxi.com
                </p>
              </div>

              <BlogNavigation currentPostId={post.id} />

              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                <div className="flex items-center justify-between">
                  <p className="text-[var(--text-2)] font-body font-semibold">Share this article</p>
                  <button
                    type="button"
                    aria-label="Share this article"
                    className="w-10 h-10 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
