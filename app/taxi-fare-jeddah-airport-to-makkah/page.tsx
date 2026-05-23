import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Wallet, ShieldCheck, Clock8, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How Much is the Taxi Fare from Jeddah Airport to Makkah?",
  description: "Find out the taxi fare from Jeddah Airport to Makkah with Us. Fixed prices from SAR 250, airport pickup, and direct routes to Masjid al-Haram. Book today!",
  alternates: {
    canonical: "/taxi-fare-jeddah-airport-to-makkah/",
  },
};

const post = {
  id: "taxi-fare-jeddah-airport-to-makkah",
  title: "How Much is the Taxi Fare from Jeddah Airport to Makkah?",
  excerpt: "Find out the taxi fare from Jeddah Airport to Makkah with Us. Fixed prices from SAR 250, airport pickup, and direct routes to Masjid al-Haram. Book today!",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-05-12",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/How-Much-is-the-Taxi-Fare-from-Jeddah-Airport-to-Makkah-1.png",
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
              href="/blog"
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
                  Have you just landed at Jeddah Airport, wondering about the taxi fare to Makkah? At Haramain Umrah Taxi, we provide transparent, fixed pricing so you can reach the holy city stress-free. No bargaining, no hidden costs—just honest service.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Wallet className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Fixed Pricing</h3>
                    <p className="text-sm text-[var(--text-2)]">Transparent rates starting from SAR 250 with zero hidden charges.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <ShieldCheck className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Safe & Reliable</h3>
                    <p className="text-sm text-[var(--text-2)]">Modern, air-conditioned vehicles and professional licensed drivers.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Clock8 className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">24/7 Availability</h3>
                    <p className="text-sm text-[var(--text-2)]">Round-the-clock airport pickup with flight tracking for your convenience.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Jeddah Airport to Makkah Taxi Fare List</h2>
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
                        <td className="p-4">250 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Hyundai Staria</td>
                        <td className="p-4">7 Passengers</td>
                        <td className="p-4">300 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Hiace Microbus</td>
                        <td className="p-4">10 Passengers</td>
                        <td className="p-4">400 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Luxury GMC</td>
                        <td className="p-4">7 Passengers</td>
                        <td className="p-4">450 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Coaster</td>
                        <td className="p-4">18 Passengers</td>
                        <td className="p-4">600 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Large Bus</td>
                        <td className="p-4">50 Passengers</td>
                        <td className="p-4">950 SAR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What is Included in the Fare?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our taxi fare from Jeddah airport to Makkah is comprehensive. It includes:
                </p>
                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>Fuel and highway tolls.</li>
                  <li>Professional meet-and-greet at the airport arrivals hall.</li>
                  <li>Flight tracking and adjustment for delays.</li>
                  <li>Luggage assistance and direct drop-off at your hotel or Masjid al-Haram.</li>
                  <li>Air-conditioned, modern, and well-maintained vehicles.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Distance and Duration</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The distance from Jeddah Airport (JED) to Makkah is approximately **98.7 kilometers**. The journey usually takes between **60 to 90 minutes**, depending on traffic and the time of day.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Book Your Taxi</h2>
                <ol className="list-decimal list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>**Share Flight Details:** Provide your arrival date, time, and flight number.</li>
                  <li>**Select Vehicle:** Choose based on your group size and luggage needs.</li>
                  <li>**Confirm Booking:** Receive instant confirmation with your driver&apos;s contact details.</li>
                  <li>**Meet & Greet:** Look for our driver holding a name board at the arrivals gate.</li>
                </ol>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Direct to Haram</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Our drivers can drop you directly at the preferred gate of Masjid al-Haram, ensuring you don&apos;t have to walk long distances with heavy luggage after your flight.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Getting from Jeddah Airport to Makkah is simple and affordable with Haramain Umrah Taxi. Our fixed rates starting from SAR 250 ensure your journey begins smoothly. Book your ride today and start your sacred journey with complete peace of mind.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your reliable airport transfer with us today!
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
