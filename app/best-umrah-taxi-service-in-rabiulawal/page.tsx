import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Best Umrah Taxi Service in Rabi-ul-Awal in Makkah & Madinah",
  description: "Haramain Umrah Taxi offers the best Umrah taxi service in Rabi-ul-Awal in Makkah & Madinah. Book airport transfers, intercity routes & Ziyarat rides. Reserve Now!",
  alternates: {
    canonical: "/best-umrah-taxi-service-in-rabiulawal/",
  },
  openGraph: {
    title: "Best Umrah Taxi Service in Rabi-ul-Awal in Makkah & Madinah",
    description: "Haramain Umrah Taxi offers the best Umrah taxi service in Rabi-ul-Awal in Makkah & Madinah. Book airport transfers, intercity routes & Ziyarat rides. Reserve Now!",
    url: "/best-umrah-taxi-service-in-rabiulawal/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Umrah Taxi Service in Rabi-ul-Awal in Makkah & Madinah",
    description: "Haramain Umrah Taxi offers the best Umrah taxi service in Rabi-ul-Awal in Makkah & Madinah. Book airport transfers, intercity routes & Ziyarat rides. Reserve Now!",
  },
};

const post = {
  id: "best-umrah-taxi-service-in-rabiulawal",
  title: "Best Umrah Taxi Service in Rabi-ul-Awal in Makkah & Madinah",
  excerpt: "Haramain Umrah Taxi offers the best Umrah taxi service in Rabi-ul-Awal in Makkah & Madinah. Book airport transfers, intercity routes & Ziyarat rides. Reserve Now!",
  category: "taxi-guides",
  categoryName: "Taxi Guides",
  date: "2026-07-09",
  readTime: "9 min read",
  author: "M Umar Irfan",
  image: "/images/Best Umrah Taxi Service in Rabi-ul-Awal in Makkah & Madinah.png",
};

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-[var(--green)] font-body font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            {/* Article Container */}
            <article className="bg-[var(--bg)] border-2 border-t-[var(--gold)] border-b-[var(--green)] border-l-[var(--gold)] border-r-[var(--green)] rounded-2xl py-4 px-[10px] md:px-8 md:py-8 lg:px-12 lg:py-12 shadow-lg">
              {/* Category Badge */}
              <span className="inline-block px-4 py-1.5 bg-[var(--green)]/10 text-[var(--green)] font-body text-sm font-semibold rounded-full mb-4">
                {post.categoryName}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-6">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-[var(--text-2)] font-body text-sm mb-8 pb-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[var(--gold)]" />
                  <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
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

              {/* Main Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Rabi ul Awal means something different to Muslims. This is the month the Prophet Muhammad, peace be upon him, came into this world. For millions of people, that single fact is reason enough to want to be standing in Makkah or Madinah when these days arrive.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are already planning your trip, or sitting somewhere in Saudi Arabia right now during Rabi ul Awal, trying to figure out how to get between cities, this is written for you.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi has been transporting pilgrims throughout the Islamic calendar. We know Rabi ul Awal draws its own kind of crowd. Getting transport right this month is not just about comfort. It is about making sure nothing pulls your attention away from why you came in the first place.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What Makes Rabi ul Awal Different for Umrah Travellers?</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Simply, as more pilgrims come in, more movement across both cities, and more pressure on every service available. Hotels book out faster, roads slow down, and taxis that were easy to find a month earlier now need a bit of forward thinking.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  There is also the emotional weight of travelling in this particular month. People arrive with deeper intentions during Rabi ul Awal. Visiting Madinah to send salutations at the Prophet&apos;s Mosque, performing Umrah with the blessing of this month behind it, doing Ziyarat at places connected to the Prophet&apos;s life.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  All of that movement requires transport that actually shows up, stays consistent, and does not become another thing to worry about on a journey meant to bring peace.
                </p>

                {/* Inline Image 1 */}
                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/What Makes Rabi ul Awal Different for Umrah Travellers.png"
                    alt="What Makes Rabi ul Awal Different for Umrah Travellers"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Umrah Taxi Services in Makkah in Rabi ul Awal</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Makkah during Rabi ul Awal gets busy in a specific way. Pilgrims are not coming just to perform Umrah and head back. Many want to visit the historical Islamic sites scattered around the city, spend longer near the Haram, and move between different locations several times a day.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi covers all of this. If you need a private car for one transfer or a vehicle kept aside for a full day of Ziyarat around Makkah, we work around your schedule. Our drivers know these streets properly; they know where traffic builds up and when, and they understand that pilgrims often need to stop, pray, and move at their own pace rather than a hurried one.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Umrah Taxi in Rabi ul Awal in Madinah</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If Makkah is where you go to worship, Madinah is where you go to feel something harder to put into words. During Rabi ul Awal, the city carries an even heavier atmosphere. Pilgrims visit Masjid an Nabawi for Salah and salutations, go to Jannatul Baqi, travel out to Masjid Quba, and spend quiet stretches simply being present in the blessed city.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our Umrah taxi service in Rabi ul Awal in Madinah is built around how pilgrims actually move through these days. Flexible timing, drivers who are not rushing you, and a vehicle that is ready when you are rather than one you spend twenty minutes trying to locate outside your hotel.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Routes We Cover in Rabi ul Awal</h2>

                {/* Inline Image 2 */}
                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Routes We Cover in Rabi ul Awal.png"
                    alt="Routes We Cover in Rabi ul Awal"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Madinah to Makkah Umrah Taxi in Rabi ul Awal</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The intercity transfer between Madinah and Makkah is the route most pilgrims need this month. It covers around 450 kilometres and runs 4.5 to 6 hours depending on conditions. We run this route with private vehicles across all sizes so your group travels together in one car without splitting up.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Makkah to Madinah Umrah Taxi in Rabi ul Awal</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The return works the same way. Many pilgrims divide their Rabi ul Awal trip across both cities and make this drive more than once. Book both directions together, and neither journey is left uncertain.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Jeddah Airport to Makkah Umrah Taxi in Rabi ul Awal</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Most international pilgrims begin in Makkah straight from King Abdulaziz Airport. Your driver is at arrivals before your flight lands. No circling the terminal, no last-minute roadside negotiations, just a confirmed car already waiting.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Madinah Airport to Hotel Umrah Taxi Service in Rabi ul Awal</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Pilgrims flying directly into Madinah receive the same. A clean private vehicle, a driver who has tracked your flight, and a straight transfer to your hotel near the Haram.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Madinah Hotel to Airport Umrah Taxi in Rabi ul Awal</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book your departure transfer when you sort everything else. Give us your flight time and your driver will be at your hotel well before you need to leave, so you are not rushing through one of the most sacred cities you will ever visit.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Madinah to Jeddah Airport Umrah Taxi in Rabi ul Awal</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  For pilgrims ending their trip in Madinah and flying home out of Jeddah, we cover this intercity leg as well. Fixed price, private vehicle, no stops in between.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Book Your Rabi ul Awal Umrah Taxi Online</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You do not need to be in Saudi Arabia to arrange this. Haramain Umrah Taxi accepts bookings through WhatsApp and phone, so your transport can be confirmed from home before you have even packed your bags.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Share your travel dates, routes, group size, and hotel details, and we lock everything in during the same conversation. During Rabi ul Awal in particular, booking ahead genuinely matters. Vehicles go quickly this month, and waiting until you land leaves you with fewer choices and less room to adjust.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Reach out to Haramain Umrah Taxi today and move through this blessed month the way it deserves, without anything on the road adding to your stress.
                </p>
              </div>

              <BlogNavigation currentPostId={post.id} />

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                <div className="flex items-center justify-between">
                  <p className="text-[var(--text-2)] font-body font-semibold">Share this article</p>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
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
