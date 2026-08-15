import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Madinah Train Station to Masjid Nabawi & Med Hotel Taxi Fare",
  description:
    "The general taxi fare from Madinah train station to Masjid Nabawi or Madinah hotel ranges from 80 SAR to 200 SAR, depending on vehicle. The distance is 12km.",
  alternates: {
    canonical: "/madinah-train-station-to-masjid-nabawi-taxi-fare/",
  },
  openGraph: {
    title: "Madinah Train Station to Masjid Nabawi & Med Hotel Taxi Fare",
    description:
      "The general taxi fare from Madinah train station to Masjid Nabawi or Madinah hotel ranges from 80 SAR to 200 SAR, depending on vehicle. The distance is 12km.",
    url: "/madinah-train-station-to-masjid-nabawi-taxi-fare/",
    type: "article",
    images: [
      {
        url: "/images/madinah-train-station-to-masjid-nabawi-taxi-fare.webp",
        alt: "Madinah Train Station to Masjid Nabawi & Med Hotel Taxi Fare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madinah Train Station to Masjid Nabawi & Med Hotel Taxi Fare",
    description:
      "The general taxi fare from Madinah train station to Masjid Nabawi or Madinah hotel ranges from 80 SAR to 200 SAR, depending on vehicle. The distance is 12km.",
    images: ["/images/madinah-train-station-to-masjid-nabawi-taxi-fare.webp"],
  },
};

const post = {
  id: "madinah-train-station-to-masjid-nabawi-taxi-fare",
  title: "Madinah Train Station to Masjid Nabawi & Med Hotel Taxi Fare",
  excerpt:
    "The general taxi fare from Madinah train station to Masjid Nabawi or Madinah hotel ranges from 80 SAR to 200 SAR, depending on vehicle. The distance is 12km.",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-08-15",
  readTime: "7 min read",
  author: "M Umar Irfan",
  image: "/images/madinah-train-station-to-masjid-nabawi-taxi-fare.webp",
};

const stationFares = [
  ["Sedan (Camry/Sonata)", "Up to 3 passengers", "SAR 120"],
  ["Mini Van", "7 passengers", "SAR 150"],
  ["Hiace Microbus", "12 passengers", "SAR 200"],
  ["Luxury GMC", "7 passengers", "SAR 230"],
  ["Coaster", "18 passengers", "SAR 300"],
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
                  You step off the Haramain Train, bags in hand, and immediately there is noise. Ten different drivers calling out ten different prices, some in Arabic, some broken English. You have no real way of knowing who is being fair and who is just seeing a tired traveller and smells an opportunity. It is a rough way to end a train journey, especially when you are heading somewhere as meaningful as Masjid Nabawi.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  That is the exact situation Haramain Umrah Taxi was built to avoid. We run fixed-price pickups straight from Madinah Train Station to your hotel, the mosque, or the airport. The number you agree to before you travel is the number you pay when you arrive.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How Far Is Madinah Train Station from Masjid Nabawi?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The station is located about ten to twelve kilometres out from the mosque. On the road, that translates to roughly fifteen to twenty-five minutes, though it can run a bit longer during Hajj season or busy Ziyarat weeks when traffic near the Haram thickens up.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Plenty of people figure they will sort a ride out once they land, thinking it can not be that complicated. Then they are standing there with two suitcases, it has been a long day, and suddenly finding a fair-priced taxi feels like a chore they did not need.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking ahead flips that entirely. You walk out, your driver&apos;s already waiting, bags go in the car, and within twenty minutes you are reaching your hotel.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/how-far-is-madinah-train-station-from-masjid-nabawi.webp"
                    alt="How far is Madinah Train Station from Masjid Nabawi"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Madinah Train Station to Masjid Nabawi Taxi Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Most hotels near the mosque are located close enough to the Haram that the fare stays consistent whether you are dropped right at the entrance or a short walk away. A Sedan, Camry, or Sonata runs SAR 120, which covers one or two passengers with normal luggage comfortably.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If there is a family involved, the Mini Van seats seven for SAR 150. Want a bit more comfort for the same headcount? The Luxury GMC also takes seven passengers but comes in at SAR 230.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Bigger groups have options too. The Hiace Microbus fits twelve for SAR 200, the Coaster takes eighteen at SAR 300, and for a full group of fifty there is the Bus at SAR 500. Every fare listed is per vehicle, not per head, so travelling as a group actually works in your favour financially.
                </p>
                <FareTable fares={stationFares} />

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Madinah Train Station to Madinah Hotel Taxi Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Not every hotel is located right next to Masjid Nabawi. Some are a bit further into the city, and this is where a lot of transport services quietly start adding zone charges or vague &quot;distance fees.&quot; We do not do that.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The fare from the train station to any hotel within Madinah city stays flat, so you are never left guessing what your street is going to cost.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Sedan pickups run SAR 120, Mini Van at SAR 150, Luxury GMC is SAR 230, Hiace Microbus comes to SAR 200, Coaster is SAR 300, and the Bus is SAR 500.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are unsure which vehicle actually fits your group and your budget, just message us directly, and we will walk you through it rather than leaving you to guess.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Madinah Train Station to Madinah Airport Taxi Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Some travellers arrive by train and have a flight out of Prince Mohammad Bin Abdulaziz Airport not long after. This is one route where pre-booking genuinely changes the experience. Your driver tracks your train&apos;s arrival, so instead of pushing through a crowded platform trying to flag someone down, you walk out, and they are already there.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Give us your train arrival time and your flight departure time when you book, and we will work backward from there to make sure the timing actually holds up.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Reach out through our website, and we will confirm your exact fare for this route quickly.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/madinah-train-station-to-madinah-airport-taxi-fare.webp"
                    alt="Madinah Train Station to Madinah Airport taxi fare"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Haramain Train Station to Masjid Nabawi Distance and Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Quick clarification for anyone confused by the naming. Haramain Train Station and Madinah Train Station are the same building, same platform, same pickup point. Some people search one name, some the other, but nothing changes.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The distance to Masjid Nabawi stays at ten to twelve kilometres, and every fare listed above applies the same, whichever name you used to find us.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  SAR 120 for the Sedan, SAR 150 for the Mini Van, SAR 230 for the Luxury GMC, SAR 200 for the Hiace Microbus, SAR 300 for the Coaster, SAR 500 for the Bus. Whichever name shows up on your train ticket, step off that platform, and our driver will be standing there with your name on a board.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Book Haramain Umrah Taxi From Madinah Train Station
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  People remember getting quoted one price over the phone and a completely different one once they were already standing outside a station with nowhere else to go. We built our whole pricing structure so that never happens with us. Whatever you are told when you book is what you pay at the end.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our drivers also know this city properly. Which hotel entrances are awkward to reach by car, which roads slow to a crawl right before Maghrib, how to save ten minutes off a route.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book through our website, share your train details, and Madinah Train Station stops being something you have to think about at all.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  <Link href="/book-now/" className="text-[var(--green)] font-semibold hover:underline">
                    Book your Madinah train station taxi now
                  </Link>
                  {" "}or message us on{" "}
                  <a
                    href="https://wa.me/966598401594"
                    className="text-[var(--green)] font-semibold hover:underline"
                  >
                    WhatsApp
                  </a>
                  {" "}with your train arrival time and hotel name.
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
