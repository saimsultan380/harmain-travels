import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "14 Important Taxi Tips for Pilgrims or Travelers in KSA",
  description: "Learn 14 taxi tips for pilgrims or travelers in KSA. Trust Haramain Umrah Taxi, we follow every safety guideline to protect our pilgrims and tourists.",
  alternates: {
    canonical: "/14-important-taxi-tips-for-pilgrims-or-travelers-in-ksa/",
  },
  openGraph: {
    title: "14 Important Taxi Tips for Pilgrims or Travelers in KSA",
    description: "Learn 14 taxi tips for pilgrims or travelers in KSA. Trust Haramain Umrah Taxi, we follow every safety guideline to protect our pilgrims and tourists.",
    url: "/14-important-taxi-tips-for-pilgrims-or-travelers-in-ksa/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "14 Important Taxi Tips for Pilgrims or Travelers in KSA",
    description: "Learn 14 taxi tips for pilgrims or travelers in KSA. Trust Haramain Umrah Taxi, we follow every safety guideline to protect our pilgrims and tourists.",
  },
};

const post = {
  id: "14-important-taxi-tips-for-pilgrims-or-travelers-in-ksa",
  title: "14 Important Taxi Tips for Pilgrims or Travelers in KSA",
  excerpt: "Learn 14 taxi tips for pilgrims or travelers in KSA. Trust Haramain Umrah Taxi, we follow every safety guideline to protect our pilgrims and tourists.",
  category: "taxi-guides",
  categoryName: "Taxi Guides",
  date: "2026-05-12",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/14-Important-Taxi-Tips-for-Pilgrims-or-Travelers-in-KSA.png",
};

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:py-24 px-4">
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
                  Traveling through Saudi Arabia becomes easier when you know what to expect. If you are visiting for Umrah, Hajj, or tourism, navigating taxis safely is essential for a smooth journey. Many pilgrims and travelers face confusion about booking reliable rides, avoiding scams, and staying secure on the road.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We have gathered 14 practical tips that help you stay safe and avoid common problems during your journey through the holy cities. Let&apos;s make your travel experience hassle-free and comfortable.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Choose Only Licensed Services</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Never accept rides from unlicensed street taxis. Licensed drivers display official permits inside their vehicles and company logos on doors. You can verify their credentials through visible ID badges. We recommend booking with established companies like Haramain Umrah Taxi. Pre-booking gives you the driver&apos;s details before pickup.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Watch Out for Common Scams</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Scammers target tourists at airports and hotels. Never accept rides from drivers who approach you randomly. They charge triple the normal rates without accountability. Always confirm your fare before starting the ride. Get price confirmation through WhatsApp or text message.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Use GPS to Monitor Your Journey</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Open your map app before entering any taxi. Type your destination and start navigation. Watch if your driver follows this path carefully. Tracking protects you from overcharging and helps you learn the city better for future trips.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Book Ahead During Busy Seasons</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should reserve your taxis 24 hours before traveling between holy cities. Peak Umrah and Hajj seasons see heavy demand. Early booking guarantees availability and better rates for your group.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Safety Guidelines for Women Traveling Alone</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Women travel freely in Saudi taxis now. Always sit in the back seat when traveling alone for your comfort. Share your trip details with family through the app&apos;s tracking feature. Modest dress and trusting your instincts are key.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">6. Plan Extra Time During Rush Hours</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Hajj and Ramadan bring millions of visitors. Book your rides several days ahead during these months. Prices increase with demand, but legitimate companies maintain fair rates. Plan extra travel time generously.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">7. Handle Payments Wisely</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Carry small bills in denominations of SAR 50 and SAR 100. Many drivers claim they lack change for large notes. Never pay the full amount before reaching your destination unless using verified apps.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">8. Speak Up When Routes Look Wrong</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Stay calm but alert when you notice route changes. Politely ask your driver why they chose this path. If the explanation sounds suspicious, call your booking company immediately.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">9. Understand Why Licensing Matters</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Unlicensed taxis lack proper insurance coverage and safety inspections. Legitimate companies maintain driver records and accountability systems, following government pricing regulations strictly.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">10. Navigate Makkah Roads Effectively</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Roads around the Grand Mosque close frequently for prayers. Book taxis with drivers who know alternative routes well. Avoid travel 30 minutes before prayer times to skip traffic.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">11. Travel Smoothly in Madinah</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Prophet&apos;s Mosque area has strict traffic rules. Your taxi drops you at designated zones only. Plan for the extra walking time to the entrances.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">12. Get Around Jeddah Without Stress</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Jeddah airport has official taxi stands with posted rates. Skip drivers offering rides inside terminals. Show drivers your exact pin location on maps to avoid confusion.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">13. Know When to Reserve in Advance</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Pre-booking saves money during high-demand periods. We always recommend advance booking for airport transfers and intercity travel to lock in standard rates.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">14. Keep Emergency Information Ready</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Save numbers for your hotel, taxi company, and local police. Take screenshots of booking confirmations and driver details. Share your itinerary with family back home.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your safety and comfort matter most during your sacred journey through Saudi Arabia. These 14 essential tips protect you from scams and ensure smooth travel between Makkah, Madinah, and Jeddah.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Ready to book your safe and comfortable ride? Contact Haramain Umrah Taxi today for reliable transportation across all holy cities.
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
