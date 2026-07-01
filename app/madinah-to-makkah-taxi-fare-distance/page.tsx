import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Wallet, ShieldCheck, MapPin, Compass } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "What is Madinah to Makkah Taxi Fare or Price and Distance?",
  description: "Discover Madinah to Makkah taxi fare starting at SAR 400. We cover 440km in 4-5 hours with fixed prices and professional drivers. Book your comfortable travel.",
  alternates: {
    canonical: "/madinah-to-makkah-taxi-fare-distance/",
  },
  openGraph: {
    title: "What is Madinah to Makkah Taxi Fare or Price and Distance?",
    description: "Discover Madinah to Makkah taxi fare starting at SAR 400. We cover 440km in 4-5 hours with fixed prices and professional drivers. Book your comfortable travel.",
    url: "/madinah-to-makkah-taxi-fare-distance/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Madinah to Makkah Taxi Fare or Price and Distance?",
    description: "Discover Madinah to Makkah taxi fare starting at SAR 400. We cover 440km in 4-5 hours with fixed prices and professional drivers. Book your comfortable travel.",
  },
};

const post = {
  id: "madinah-to-makkah-taxi-fare-distance",
  title: "What is Madinah to Makkah Taxi Fare or Price and Distance?",
  excerpt: "Discover Madinah to Makkah taxi fare starting at SAR 400. We cover 440km in 4-5 hours with fixed prices and professional drivers. Book your comfortable travel.",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-05-12",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/What-is-Madinah-to-Makkah-Taxi.png",
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

              {/* Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1400}
                  height={1500}
                  className="w-full h-auto md:h-[600px] lg:h-[800px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Are you worried about finding reliable transportation between the holy cities? At Haramain Umrah Taxi, we provide a stress-free traveling experience with transparent, fixed pricing and trusted service from Madinah to Makkah.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Wallet className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Transparent Rates</h3>
                    <p className="text-sm text-[var(--text-2)]">Madinah to Makkah fares starting from SAR 400 with zero surprise charges.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <ShieldCheck className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Modern Fleet</h3>
                    <p className="text-sm text-[var(--text-2)]">Air-conditioned, well-maintained vehicles with ample space for luggage.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <MapPin className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Miqat Assistance</h3>
                    <p className="text-sm text-[var(--text-2)]">Dedicated stops at Miqat points for Ihram according to your spiritual needs.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Madinah to Makkah Taxi Fare List</h2>
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
                        <td className="p-4 font-bold">Standard Sedan</td>
                        <td className="p-4">4 Passengers</td>
                        <td className="p-4">400 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Staria Mini Van</td>
                        <td className="p-4">7 Passengers</td>
                        <td className="p-4">480 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Hiace Microbus</td>
                        <td className="p-4">12 Passengers</td>
                        <td className="p-4">530 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Luxury GMC</td>
                        <td className="p-4">7 Passengers</td>
                        <td className="p-4">830 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Coaster</td>
                        <td className="p-4">18 Passengers</td>
                        <td className="p-4">850 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Large Bus</td>
                        <td className="p-4">50 Passengers</td>
                        <td className="p-4">1200 SAR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Distance & Travel Duration</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The distance from Madinah to Makkah is approximately **440 kilometers (280 miles)**. The journey takes around **4 to 5 hours**. Our drivers know the route perfectly and ensure a safe, comfortable ride through the desert landscape.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Our Private Car Service?</h2>
                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>**Door-to-Door:** Pickup from your Madinah hotel and drop-off at your Makkah doorstep.</li>
                  <li>**Privacy:** Your family enjoys exclusive use of the vehicle without sharing with strangers.</li>
                  <li>**Spiritual Needs:** Our drivers are happy to stop at Miqat points so you can enter Ihram.</li>
                  <li>**Time Efficiency:** No waiting for bus schedules or multiple stops along the way.</li>
                  <li>**Multilingual Drivers:** Professional licensed drivers who speak Arabic, English, and Urdu.</li>
                </ul>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <Compass className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Important Travel Tip</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Inform your driver in advance if you need to stop at a Miqat point. Also, remember to book early during peak seasons like Ramadan and Hajj to guarantee your preferred vehicle type.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your journey between the holy cities deserves reliability and peace of mind. With Haramain Umrah Taxi, you get fixed pricing, professional drivers, and 24/7 service. Book your Madinah to Makkah taxi today and focus entirely on your spiritual journey.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your comfortable travel with us today!
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
