import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Taxi Fare from Makkah to Taif & Taif to Makkah & Taif Ziyarat - Haramain Umrah Taxi",
  description: "Affordable taxi service from Makkah to Taif. Rates from SAR 380. Ziyarat tours included. Book Camry, GMC, Hiace, Coaster & Bus. Available 24/7.",
  alternates: {
    canonical: "/taxi-fare-from-makkah-to-taif-taif-to-makkah-taif-ziyarat/",
  },
};

const post = {
  id: "taxi-fare-from-makkah-to-taif-taif-to-makkah-taif-ziyarat",
  title: "Taxi Fare from Makkah to Taif & Taif to Makkah & Taif Ziyarat",
  excerpt: "Affordable taxi service from Makkah to Taif. Rates from SAR 380. Ziyarat tours included. Book Camry, GMC, Hiace, Coaster & Bus. Available 24/7.",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-05-12",
  readTime: "11 min read",
  author: "M Umar Irfan",
  image: "/images/Taxi-Fare-from-Makkah-to-Taif-Taif-to-Makkah-Taif-Ziyarat.png",
};

export default function BlogPostPage() {
  return (
    <>
      <Canonical />
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
                  Are you planning to visit Taif from Makkah? We understand you need clear pricing and reliable service for your journey. Taif is just 92.8 kilometers from Makkah, but the mountain roads make choosing the right taxi service important. If you are visiting for ziyarat, escaping the heat, or seeing the famous rose gardens, we make your trip comfortable and affordable.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  At Haramain Umrah Taxi, we specialize in Makkah to Taif routes. Our drivers know every turn of the mountain road. You will enjoy scenic views while traveling in clean, air-conditioned vehicles.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Our Fleet and Pricing</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We offer six different vehicle options to match your group size and budget. Each vehicle is well-maintained and comfortable.
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Sedans (Camry and Sonata)</strong> - Perfect for small families or couples (up to 4 passengers).</li>
                  <li><strong>GMC SUV</strong> - Luxury for up to 7 passengers with significant luggage space.</li>
                  <li><strong>Hyundai Staria</strong> - More room for families, seating 6-7 passengers comfortably.</li>
                  <li><strong>Toyota Hiace</strong> - Accommodates 10-12 passengers.</li>
                  <li><strong>Toyota Coaster</strong> - Minibus for groups of 20-25 people.</li>
                  <li><strong>Bus</strong> - Handles 30-40+ passengers for large organized tours.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Taxi Fare from Makkah to Taif</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our taxi rent from Makkah to Taif varies by vehicle size. We offer transparent, fixed pricing with no hidden charges:
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-[var(--border)]">
                    <thead>
                      <tr className="bg-[var(--bg-alt)] text-[var(--text-1)]">
                        <th className="border border-[var(--border)] p-4 text-left">Vehicle Type</th>
                        <th className="border border-[var(--border)] p-4 text-left">Fare (SAR)</th>
                        <th className="border border-[var(--border)] p-4 text-left">Capacity</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--text-2)]">
                      <tr>
                        <td className="border border-[var(--border)] p-4">Camry/Sonata</td>
                        <td className="border border-[var(--border)] p-4">380 SAR</td>
                        <td className="border border-[var(--border)] p-4">4 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Hyundai Staria</td>
                        <td className="border border-[var(--border)] p-4">450 SAR</td>
                        <td className="border border-[var(--border)] p-4">7 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Toyota Hiace</td>
                        <td className="border border-[var(--border)] p-4">550 SAR</td>
                        <td className="border border-[var(--border)] p-4">10 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">GMC SUV</td>
                        <td className="border border-[var(--border)] p-4">750 SAR</td>
                        <td className="border border-[var(--border)] p-4">7 Passengers (Luxury)</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Toyota Coaster</td>
                        <td className="border border-[var(--border)] p-4">750 SAR</td>
                        <td className="border border-[var(--border)] p-4">20-25 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Bus</td>
                        <td className="border border-[var(--border)] p-4">1000 SAR</td>
                        <td className="border border-[var(--border)] p-4">40-50 Passengers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Taif to Makkah Taxi Fare</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Coming back from Taif? Our Taif to Makkah taxi fare matches the price from Makkah to Taif, for fairness and simplicity. We pick you up anywhere in Taif—your hotel, tourist spots, or shopping districts.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Taxi Fare from Taif Airport to Makkah</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are landing at Taif Regional Airport, we provide smooth pickup service. The taxi fare from Taif airport to Makkah is competitive, and your driver tracks flight schedules to handle any delays. Total travel time is approximately 1 hour and 30 minutes.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Haramain Umrah Taxi?</h2>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Licensed Drivers:</strong> Experienced and multilingual drivers (English, Urdu, Turkish, etc.).</li>
                  <li><strong>Safety First:</strong> Regular vehicle maintenance and inspections for mountain road safety.</li>
                  <li><strong>24/7 Support:</strong> Round-the-clock customer service for bookings and inquiries.</li>
                  <li><strong>Reliability:</strong> Trusted by hundreds of families annually for Makkah-Taif trips.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Book Haramain Umrah Taxi Now</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking is simple. Call or message us on WhatsApp anytime for instant confirmation. We send driver and vehicle details 24 hours before your pickup.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Contact us today to arrange your comfortable journey to the beautiful city of Taif!
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
