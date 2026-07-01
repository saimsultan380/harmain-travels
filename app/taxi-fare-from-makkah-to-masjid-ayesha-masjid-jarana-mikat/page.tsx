import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Taxi Fare from Makkah to Masjid Ayesha & Masjid Jarana Mikat",
  description: "Get reasonable taxi fares from Makkah to Masjid Ayesha & Masjid Jarana Miqat. Fixed rates, 24/7 service. Book your Umrah transport with Haramain Umrah Taxi.",
  alternates: {
    canonical: "/taxi-fare-from-makkah-to-masjid-ayesha-masjid-jarana-mikat/",
  },
  openGraph: {
    title: "Taxi Fare from Makkah to Masjid Ayesha & Masjid Jarana Mikat",
    description: "Get reasonable taxi fares from Makkah to Masjid Ayesha & Masjid Jarana Miqat. Fixed rates, 24/7 service. Book your Umrah transport with Haramain Umrah Taxi.",
    url: "/taxi-fare-from-makkah-to-masjid-ayesha-masjid-jarana-mikat/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Fare from Makkah to Masjid Ayesha & Masjid Jarana Mikat",
    description: "Get reasonable taxi fares from Makkah to Masjid Ayesha & Masjid Jarana Miqat. Fixed rates, 24/7 service. Book your Umrah transport with Haramain Umrah Taxi.",
  },
};

const post = {
  id: "taxi-fare-from-makkah-to-masjid-ayesha-masjid-jarana-mikat",
  title: "Taxi Fare from Makkah to Masjid Ayesha & Masjid Jarana Mikat",
  excerpt: "Get reasonable taxi fares from Makkah to Masjid Ayesha & Masjid Jarana Miqat. Fixed rates, 24/7 service. Book your Umrah transport with Haramain Umrah Taxi.",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-05-12",
  readTime: "11 min read",
  author: "M Umar Irfan",
  image: "/images/Taxi-Fare-from-Makkah-to-Masjid-Ayesha-Masjid-Jarana-Mikat.png",
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
                  Haramain Umrah Taxi specializes in providing taxi services to the sacred Miqat points of Masjid Ayesha (Taneem) and Masjid Jarana for pilgrims performing Umrah. We understand the spiritual significance of your journey and the importance of reaching these blessed locations comfortably and on time. We offer fixed, transparent fares with no hidden charges or last-minute surprises.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Makkah Hotel to Masjid Ayesha Miqat Taxi Fare</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Masjid Ayesha is situated closest to the Haram, making it the most popular choice for an additional Umrah. The distance measures approximately 6.6 kilometers. Our Makkah hotel to Masjid Ayesha Miqat taxi fare and pricing structure offers options for every group size:
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-[var(--border)]">
                    <thead>
                      <tr className="bg-[var(--bg-alt)] text-[var(--text-1)]">
                        <th className="border border-[var(--border)] p-4 text-left">Vehicle Type</th>
                        <th className="border border-[var(--border)] p-4 text-left">Round Trip (SAR)</th>
                        <th className="border border-[var(--border)] p-4 text-left">Capacity</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--text-2)]">
                      <tr>
                        <td className="border border-[var(--border)] p-4">Sedans (Camry/Sonata)</td>
                        <td className="border border-[var(--border)] p-4">150 SAR</td>
                        <td className="border border-[var(--border)] p-4">4 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Hyundai Staria</td>
                        <td className="border border-[var(--border)] p-4">170 SAR</td>
                        <td className="border border-[var(--border)] p-4">7 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Toyota Hiace</td>
                        <td className="border border-[var(--border)] p-4">200 SAR</td>
                        <td className="border border-[var(--border)] p-4">10-12 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">GMC Luxury</td>
                        <td className="border border-[var(--border)] p-4">250 SAR</td>
                        <td className="border border-[var(--border)] p-4">6-7 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Toyota Coaster</td>
                        <td className="border border-[var(--border)] p-4">300 SAR</td>
                        <td className="border border-[var(--border)] p-4">15-18 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Bus</td>
                        <td className="border border-[var(--border)] p-4">400 SAR</td>
                        <td className="border border-[var(--border)] p-4">50 Passengers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Makkah Hotel to Masjid Jarana Miqat Taxi Fare</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Masjid Jarana (also spelled Ji&apos;ranah) holds special historical significance. Located approximately 25 kilometers northeast of Masjid Al Haram, this Miqat offers a less crowded experience. Our Makkah hotel to Masjid Jarana Miqat taxi fare and pricing provides value for the extended journey:
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse border border-[var(--border)]">
                    <thead>
                      <tr className="bg-[var(--bg-alt)] text-[var(--text-1)]">
                        <th className="border border-[var(--border)] p-4 text-left">Vehicle Type</th>
                        <th className="border border-[var(--border)] p-4 text-left">Round Trip (SAR)</th>
                        <th className="border border-[var(--border)] p-4 text-left">Capacity</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--text-2)]">
                      <tr>
                        <td className="border border-[var(--border)] p-4">Sedans (Camry/Sonata)</td>
                        <td className="border border-[var(--border)] p-4">170 SAR</td>
                        <td className="border border-[var(--border)] p-4">4 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Hyundai Staria</td>
                        <td className="border border-[var(--border)] p-4">200 SAR</td>
                        <td className="border border-[var(--border)] p-4">7 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Toyota Hiace</td>
                        <td className="border border-[var(--border)] p-4">250 SAR</td>
                        <td className="border border-[var(--border)] p-4">10-12 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">GMC Luxury</td>
                        <td className="border border-[var(--border)] p-4">300 SAR</td>
                        <td className="border border-[var(--border)] p-4">6-7 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Toyota Coaster</td>
                        <td className="border border-[var(--border)] p-4">300 SAR</td>
                        <td className="border border-[var(--border)] p-4">15-18 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Bus</td>
                        <td className="border border-[var(--border)] p-4">450 SAR</td>
                        <td className="border border-[var(--border)] p-4">50 Passengers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Haramain Umrah Taxi for Miqat Services?</h2>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Fixed Transparent Pricing</strong> - The price you see is what you pay. No negotiations.</li>
                  <li><strong>Round-Trip Service Included</strong> - We wait at the Miqat while you prepare and enter Ihram.</li>
                  <li><strong>Professional Drivers</strong> - Our team understands the spiritual significance and provides timely service.</li>
                  <li><strong>24/7 Availability</strong> - We operate continuously to serve your schedule, day or night.</li>
                  <li><strong>Flexible Timing</strong> - Our drivers accommodate reasonable wait times at the Miqat for your preparations.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Importance of the Miqat Journey</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Performing additional Umrah from Makkah requires leaving the Haram boundary to assume the sacred state of Ihram. You cannot simply intend Ihram from your hotel inside the Haram area. Masjid Ayesha serves as the closest option, while Masjid Jarana offers a deeper historical connection to the Prophet Muhammad (PBUH).
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Book Your Miqat Transport Today</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Contact Haramain Umrah Taxi for reliable taxi services to Masjid Ayesha or Masjid Jarana. We respond quickly on WhatsApp with availability and confirmation. Whether it&apos;s your second Umrah or your tenth, we ensure your journey is smooth and stress-free.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Experience the Haramain Umrah Taxi difference—professional, reliable, and dedicated to serving pilgrims.
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
