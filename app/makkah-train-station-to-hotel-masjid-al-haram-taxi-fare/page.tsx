import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, Train, MapPin, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Makkah Train Station to Hotel & Masjid Al Haram Taxi Fare - Haramain Umrah Taxi",
  description: "Find the affordable Makkah Train Station to Hotel & Masjid Al Haram Taxi Fare at HUT. We offer comfortable transfers for pilgrims. Reserve your ride with Us!",
  alternates: {
    canonical: "/makkah-train-station-to-hotel-masjid-al-haram-taxi-fare/",
  },
};

const post = {
  id: "makkah-train-station-to-hotel-masjid-al-haram-taxi-fare",
  title: "Makkah Train Station to Hotel & Masjid Al Haram Taxi Fare",
  excerpt: "Find the affordable Makkah Train Station to Hotel & Masjid Al Haram Taxi Fare at HUT. We offer comfortable transfers for pilgrims. Reserve your ride with Us!",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-05-12",
  readTime: "11 min read",
  author: "M Umar Irfan",
  image: "/images/Makkah-Train-Station-to-Hotel-Masjid-Al-Haram-Taxi-Fare-1.png",
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
                  Are you arriving at Makkah Train Station and thinking about your journey to the Haram? We understand your excitement. But, finding reliable information on Makkah Train Station to Hotel and Masjid Al Haram Taxi Fare should not add stress to your blessed pilgrimage.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book your Haramain Umrah Taxi now and travel comfortably from the station to your hotel or directly to the Haram without worry.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Makkah Train Station to Masjid Al Haram: Distance and Time</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The distance from Makkah train station to Masjid Al Haram measures approximately 11.5 kilometers through the 2nd Ring road. The journey typically takes 15-18 minutes under normal traffic conditions. During peak seasons like Hajj or Ramadan, expect 20-25 minutes due to road restrictions around the Haram area.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Makkah Train Station to Hotel Taxi Fare</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The taxi fare depends on your accommodation location and vehicle choice. We offer fixed, transparent rates:
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
                        <td className="border border-[var(--border)] p-4">Sedans (Camry/Sonata)</td>
                        <td className="border border-[var(--border)] p-4">120 SAR</td>
                        <td className="border border-[var(--border)] p-4">4 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Hyundai Staria</td>
                        <td className="border border-[var(--border)] p-4">150 SAR</td>
                        <td className="border border-[var(--border)] p-4">7 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Toyota Hiace</td>
                        <td className="border border-[var(--border)] p-4">200 SAR</td>
                        <td className="border border-[var(--border)] p-4">10-12 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">GMC Yukon</td>
                        <td className="border border-[var(--border)] p-4">230 SAR</td>
                        <td className="border border-[var(--border)] p-4">6-7 Passengers (Luxury)</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] p-4">Toyota Coaster</td>
                        <td className="border border-[var(--border)] p-4">300 SAR</td>
                        <td className="border border-[var(--border)] p-4">15-18 Passengers</td>
                      </tr>
                      <tr>
                        <td className="border border(--border) p-4">Bus</td>
                        <td className="border border-[var(--border)] p-4">500 SAR</td>
                        <td className="border border-[var(--border)] p-4">50 Passengers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Train className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Station Pickup</h3>
                    <p className="text-sm text-[var(--text-2)]">Meet-and-greet service at the railway terminal exit.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Shield className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Fixed Fare</h3>
                    <p className="text-sm text-[var(--text-2)]">No hidden charges or surprise negotiations at arrival.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <MapPin className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Direct Drop-off</h3>
                    <p className="text-sm text-[var(--text-2)]">Hassle-free transport directly to your hotel or Haram gate.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Specific Routes</h2>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Voco Hotel Makkah:</strong> Distance is ~10km, fare is 120 SAR for Sedan.</li>
                  <li><strong>Jabal Omar:</strong> 6-seater Staria fare is 150 SAR to Haram train station.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Us?</h2>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Train Monitoring:</strong> We track arrivals and adjust pickup if your train is delayed.</li>
                  <li><strong>Multilingual Support:</strong> Drivers speak Arabic, English, and Urdu fluently.</li>
                  <li><strong>Luggage Assistance:</strong> Professional help with loading and unloading your bags.</li>
                  <li><strong>24/7 Availability:</strong> Round-the-clock service to match every train schedule.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Book?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  1. Contact us via WhatsApp or our website form.<br />
                  2. Provide arrival time and hotel name.<br />
                  3. Receive confirmation with driver and vehicle details.<br />
                  4. Meet your driver at the station taxi area!
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ready to secure reliable transportation from Makkah Haramain Station? Contact Haramain Umrah Taxi now. Whether you are arriving tomorrow or planning travel next month, we are ready to serve you with professional station transfers that eliminate transportation worries.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book now and travel with confidence!
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
