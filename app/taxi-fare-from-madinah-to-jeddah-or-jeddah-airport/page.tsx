import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How Much Taxi Fare from Madinah to Jeddah or Jeddah Airport?",
  description:
    "Madinah to Jeddah Airport taxi fare starts at SAR 400 for a sedan. Fixed prices for GMC, Mini Van, Hiace, Coaster & bus. Book Haramain Umrah Taxi now!",
  alternates: {
    canonical: "/taxi-fare-from-madinah-to-jeddah-or-jeddah-airport/",
  },
  openGraph: {
    title: "How Much Taxi Fare from Madinah to Jeddah or Jeddah Airport?",
    description:
      "Madinah to Jeddah Airport taxi fare starts at SAR 400 for a sedan. Fixed prices for GMC, Mini Van, Hiace, Coaster & bus. Book Haramain Umrah Taxi now!",
    url: "/taxi-fare-from-madinah-to-jeddah-or-jeddah-airport/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Taxi Fare from Madinah to Jeddah or Jeddah Airport?",
    description:
      "Madinah to Jeddah Airport taxi fare starts at SAR 400 for a sedan. Fixed prices for GMC, Mini Van, Hiace, Coaster & bus. Book Haramain Umrah Taxi now!",
  },
};

const post = {
  id: "taxi-fare-from-madinah-to-jeddah-or-jeddah-airport",
  title: "How Much Taxi Fare from Madinah to Jeddah or Jeddah Airport?",
  excerpt:
    "Madinah to Jeddah Airport taxi fare starts at SAR 400 for a sedan. Fixed prices for GMC, Mini Van, Hiace, Coaster & bus. Book Haramain Umrah Taxi now!",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-07-16",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/How Much Taxi Fare from Madinah to Jeddah or Jeddah Airport.webp",
};

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
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are in Madinah, your flight home is from Jeddah, and now you are stuck googling &quot;how much does a taxi cost&quot; at 11 pm because some guy outside your hotel just quoted you an insane number.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We have heard this story a hundred times from pilgrims. It is honestly one of the most common headaches after Umrah: figuring out transport at the last minute when you are tired and just want to get to your flight without drama.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Let&apos;s just get into the actual taxi fare, so you know what you should be paying.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Madinah to Jeddah Airport Taxi Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A regular sedan, Camry or Sonata, will cost you SAR 400 for the Madinah to Jeddah Airport trip. That is a fixed price, not something that changes once you are halfway there. If there are more of you, or you just want something roomier, here is the taxi fare for all fleets:
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse border border-[var(--border)] rounded-xl overflow-hidden">
                    <thead className="bg-[var(--green)] text-white">
                      <tr>
                        <th className="p-4 text-left font-heading">Vehicle Type</th>
                        <th className="p-4 text-left font-heading">Capacity</th>
                        <th className="p-4 text-left font-heading">Fare (SAR)</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--text-2)]">
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Sedan (Camry/Sonata)</td>
                        <td className="p-4">4 seats</td>
                        <td className="p-4">SAR 400</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Luxury GMC</td>
                        <td className="p-4">7 seats</td>
                        <td className="p-4">SAR 830</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Mini Van</td>
                        <td className="p-4">7 seats</td>
                        <td className="p-4">SAR 450</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Hiace Microbus</td>
                        <td className="p-4">12 seats</td>
                        <td className="p-4">SAR 550</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Coaster</td>
                        <td className="p-4">18 seats</td>
                        <td className="p-4">SAR 850</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Bus</td>
                        <td className="p-4">50 seats</td>
                        <td className="p-4">SAR 1200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We do not add anything on top for luggage or if the driver waits a few extra minutes at your hotel. What we quote is what you pay, full stop.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Taxi Fare From Jeddah Airport to Madinah
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You land at Jeddah, you need a ride up to your hotel in Madinah, and the pricing barely changes. Sedan is still SAR 400, Mini Van SAR 450, Hiace SAR 550, GMC around SAR 830, and Coaster comes in a bit higher on this route at SAR 880.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  One thing worth mentioning, we do not run the big 50-seat bus on this particular route. If you have got a huge group landing together, honestly your best bet is either the Coaster or splitting into two Hiace vans. Works out fine either way.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Taxi Fare From Jeddah Airport to Madinah.webp"
                    alt="Taxi Fare From Jeddah Airport to Madinah"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Distance Between Madinah to Jeddah
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It is about 420 km between the two cities. Give it 4 to 5 hours depending on traffic, time of day, and whether you stop for food or prayer along the way. It is not a short hop, so do not go booking the cheapest cramped car just to save twenty riyals and then regret it three hours in with your knees against the seat in front of you. Pick something with actual space if there are more than two of you.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Private Car or Shared Ride, Which Should You Book
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If it is just you and your spouse, the sedan at SAR 400 is honestly fine and gets the job done. But if you have got kids, elderly parents, or a lot of bags, that is where the Minivan or GMC starts making a lot more sense. Nobody wants to be squished in the back seat for four hours because the car was too small.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The GMC especially, at SAR 830, is one of those vehicles where people book it once and then request it every single time after. It is just comfortable in a way the smaller cars are not.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Book Taxi For Big Umrah Groups
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are coordinating for a whole group, like 20, 30, 50 people, the bus is genuinely the smart move. SAR 1200 split across 50 people barely comes to SAR 24 each. You cannot find cheaper group transport than that anywhere in the city.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Medium groups usually go for the Coaster at SAR 850 or the Hiace at SAR 550. Both get booked constantly by group leaders bringing pilgrims in from Pakistan and India, so we are used to handling the coordination on our end, timing, luggage, all of it.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Book Taxi For Big Umrah Groups.webp"
                    alt="Book Taxi For Big Umrah Groups"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Why Book Through Haramain Umrah Taxi?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We are not going to pretend we are the absolute cheapest option in Madinah. Some guy with a beat-up car outside your hotel might quote you less. But then he shows up late, or the AC does not work, or suddenly there will be an &quot;extra charge&quot; you did not agree to. We have seen it happen to people over and over.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  What we offer is simple: a fixed price agreed before you get in, drivers who actually know this route well and show up when they say they will, and a bit of Urdu and basic English on top of Arabic. So you are not stuck trying to explain your flight time through hand gestures.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Book Haramain Umrah Taxi For Madinah To Jeddah Airport
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Message us with your travel date, how many people you have, and where you are staying, and we will sort out the vehicle and price right away. No back and forth, no confusion.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Do not leave it till the morning of your flight. Lock it in a day or two ahead, so you are not stressing over transport when you should be focused on your trip. If it is one sedan or a full bus for your group, we have got the Madinah to Jeddah route covered. Call us and book now.
                </p>
              </div>

              <BlogNavigation currentPostId={post.id} />

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
