import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How much is Taxi Fare from Madinah Airport to Madinah Hotel?",
  description:
    "Madinah Airport to Madinah Hotel taxi fares start from SAR 170. Compare fixed fares for sedans, vans, GMCs, Coasters and buses, then book your ride.",
  alternates: {
    canonical: "/how-much-is-taxi-fare-from-madinah-airport-to-madinah-hotel/",
  },
  openGraph: {
    title: "How much is Taxi Fare from Madinah Airport to Madinah Hotel?",
    description:
      "Madinah Airport to Madinah Hotel taxi fares start from SAR 170. Compare fixed fares for every vehicle and book your transfer.",
    url: "/how-much-is-taxi-fare-from-madinah-airport-to-madinah-hotel/",
    type: "article",
    images: [
      {
        url: "/images/How much is Taxi Fare from Madinah Airport to Madinah Hotel.webp",
        alt: "Madinah Airport to Madinah Hotel taxi fare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How much is Taxi Fare from Madinah Airport to Madinah Hotel?",
    description:
      "Madinah Airport to Madinah Hotel taxi fares start from SAR 170. Compare fixed fares for every vehicle and book your transfer.",
    images: ["/images/How much is Taxi Fare from Madinah Airport to Madinah Hotel.webp"],
  },
};

const post = {
  id: "how-much-is-taxi-fare-from-madinah-airport-to-madinah-hotel",
  title: "How much is Taxi Fare from Madinah Airport to Madinah Hotel?",
  excerpt:
    "Madinah Airport to Madinah Hotel taxi fares start from SAR 170. Compare fixed fares for sedans, vans, GMCs, Coasters and buses, then book your ride.",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-07-18",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/How much is Taxi Fare from Madinah Airport to Madinah Hotel.webp",
};

const inboundFares = [
  ["Sedan (Camry/Sonata)", "Up to 3 passengers", "SAR 170"],
  ["Luxury GMC", "7 passengers", "SAR 350"],
  ["Mini Van", "7 passengers", "SAR 200"],
  ["Hiace Microbus", "12 passengers", "SAR 250"],
  ["Coaster", "18 passengers", "SAR 400"],
  ["Bus", "50 passengers", "SAR 600"],
];

const outboundFares = [
  ["Sedan (Camry/Sonata)", "Up to 3 passengers", "SAR 130"],
  ["Luxury GMC", "7 passengers", "SAR 300"],
  ["Mini Van", "7 passengers", "SAR 170"],
  ["Hiace Microbus", "12 passengers", "SAR 200"],
  ["Coaster", "18 passengers", "SAR 350"],
  ["Bus", "50 passengers", "SAR 500"],
];

function FareTable({ fares }: { fares: string[][] }) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse border border-[var(--border)] rounded-xl overflow-hidden">
        <thead className="bg-[var(--green)] text-white">
          <tr>
            <th className="p-4 text-left font-heading">Vehicle Type</th>
            <th className="p-4 text-left font-heading">Capacity</th>
            <th className="p-4 text-left font-heading">Fare</th>
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
                  You just landed at Prince Mohammad Bin Abdulaziz Airport in Madinah. Long flight done, bags collected, and now you need to get to your hotel near the Haram. It is a simple transfer, honestly one of the shorter rides you will do during your entire trip, but getting overcharged or ending up in a car with no confirmed price is not how anyone wants their Madinah stay to begin.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This post covers the taxi fare from Madinah Airport to Madinah Hotel for every vehicle type, the return fare to the airport, and how to book with Haramain Umrah Taxi before you land, so there is nothing left to figure out when you arrive, exhausted from your flight.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Madinah Airport to Madinah Hotel Taxi Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Here are the actual fares for a private taxi from Madinah Airport to your hotel in Madinah with Haramain Umrah Taxi. These are per vehicle, not per person.
                </p>
                <FareTable fares={inboundFares} />
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  These are fixed rates, not estimates. What you see above is what you pay; there are no additional charges when the driver drops you off at your hotel. For a family of three or four, the sedan or minivan covers this route without any issue and keeps the cost low.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Madinah Hotel to Madinah Airport Taxi Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The return journey from your hotel back to Madinah Airport follows a slightly different price structure since most airport departures involve earlier morning travel and shorter waiting times at the drop-off point.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Here are the confirmed fares for the Madinah Hotel to Madinah Airport transfer.
                </p>
                <FareTable fares={outboundFares} />
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The return fare is cheaper than the inbound transfer, which is common across most airport routes. A lot of pilgrims book for both routes together when they make their initial reservation, which means the return pickup is already sorted before they even arrive.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Which Vehicle Should You Choose?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  For solo travellers and couples, the sedan at SAR 170 inbound and SAR 130 outbound is the obvious call. It is the most affordable option and more than comfortable for a 20-minute airport transfer with standard luggage. There is no reason to pay for a bigger car unless you actually need the space.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  For families of four to seven, the mini van at SAR 200 inbound makes much more sense than trying to squeeze into a sedan with bags. The Hiace at SAR 250 is right for larger families or groups of eight to twelve travelling together. Groups bigger than that should look at the Coaster or Bus depending on their total headcount.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Which Vehicle Should You Choose1.webp"
                    alt="Which vehicle to choose for a Madinah Airport transfer"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Why Book with Haramain Umrah Taxi From Madinah Airport To Hotel?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  There are plenty of taxis outside Madinah Airport and some of them will quote you a reasonable price. The problem is you have no way of knowing which ones are trustworthy until you are already standing there, tired from a long flight, with luggage in your hands and no idea what the fair rate actually is.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Some drivers quote a number verbally and then find reasons to adjust it when you arrive at your hotel.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  With Haramain Umrah Taxi, your fare is confirmed in writing before you travel. Your driver is assigned and already waiting when your flight lands. You are not hunting around the airport exit trying to find a reliable car. You walk out, spot your driver, load your bags, and go directly to your hotel. That is the whole difference between booking ahead and trying to sort it out on the spot.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How Far Is Madinah Airport from Madinah Hotel?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The distance from Prince Mohammad Bin Abdulaziz Airport to the main hotel areas near Masjid an Nabawi is roughly 15 to 20 kilometres. Under normal conditions, the drive takes about 20 to 30 minutes.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It is genuinely not a long journey. But the traffic around the Haram area in Madinah can slow things down depending on what time of day you arrive and how busy the roads are near the mosque.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  As the distance is short, some people assume any taxi will do and do not bother booking in advance. That is where things go wrong. Drivers outside the airport know arriving passengers are tired and unfamiliar with local rates, and some take full advantage of that. Booking ahead locks in your fare before you land and removes that situation completely.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/How Far Is Madinah Airport from Madinah Hotel.webp"
                    alt="Distance from Madinah Airport to Madinah hotels"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Book Your Madinah Airport Taxi
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking takes a few minutes and can be done from anywhere in the world before you fly. WhatsApp us or call with your flight number, arrival time, number of passengers, and hotel name in Madinah. We confirm your vehicle and fare in the same conversation. Your driver is assigned before you board your flight.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you want to book the return journey at the same time, tell us your departure date and flight time during the same booking call. Everything gets confirmed together so there is nothing left to sort out while you are in Madinah. One conversation, both routes are covered, and you can focus entirely on your time near the Prophet&apos;s Mosque.
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
