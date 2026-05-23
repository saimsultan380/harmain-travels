import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Wallet, ShieldCheck, MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "What is Makkah to Madinah Taxi Fare and Private Car Price?",
  description: "Find out the taxi fare from Makkah to Madinah with Us. Fixed prices from SAR 400, door-to-door service, and professional drivers. Book today!",
  alternates: {
    canonical: "/makkah-to-madinah-taxi-fare-distance/",
  },
};

const post = {
  id: "makkah-to-madinah-taxi-fare-distance",
  title: "What is Makkah to Madinah Taxi Fare and Private Car Price?",
  excerpt: "Find out the taxi fare from Makkah to Madinah with Us. Fixed prices from SAR 400, door-to-door service, and professional drivers. Book today!",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-05-12",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/What-is-Makkah-to-Madinah-Taxi-Fare-and-Private-Car-Price.png",
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
                  Are you completing your Umrah and need safe transportation to Madinah? We understand the importance of reliable travel between the holy cities. At Haramain Umrah Taxi, we make your journey comfortable with clear, fixed pricing and trusted service.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Wallet className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Fixed Pricing</h3>
                    <p className="text-sm text-[var(--text-2)]">Makkah to Madinah fares starting from SAR 400 for standard sedans.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <ShieldCheck className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Total Comfort</h3>
                    <p className="text-sm text-[var(--text-2)]">Modern vehicles with AC and professional drivers for a 4.5-hour journey.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <MapPin className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Door-to-Door</h3>
                    <p className="text-sm text-[var(--text-2)]">Direct pickup from your Makkah hotel and drop-off at your Madinah hotel.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Makkah to Madinah Fare List</h2>
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
                  The distance between Makkah and Madinah is approximately **434 kilometers**. By car, the journey typically takes about **4 hours and 25 minutes**. Our experienced drivers know the best routes to ensure your safety and timely arrival.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Benefits of Private Car Transfers</h2>
                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>**Flexibility:** Depart at your preferred time without waiting for bus schedules.</li>
                  <li>**Personal Service:** Your driver focuses solely on your group&apos;s comfort and luggage.</li>
                  <li>**Door-to-Door:** Direct hotel transfers eliminate the need for extra taxis to bus stations.</li>
                  <li>**Exclusive Use:** Ideal for families with children or elderly members who need extra space and care.</li>
                  <li>**Fixed Pricing:** No surprises or hidden fees regardless of traffic conditions.</li>
                </ul>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <Navigation className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Pro Travel Tip</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Depart from Makkah early in the morning to reach Madinah before the Zuhr prayer. This allows you to settle into your hotel comfortably and start your worship in Masjid al-Nabawi without feeling rushed.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Traveling between the holy cities is a vital part of your pilgrimage. With Haramain Umrah Taxi, you get fixed rates, professional service, and the comfort your spiritual journey deserves. Book your Makkah to Madinah transfer today for a stress-free experience.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your transfer with us today!
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
