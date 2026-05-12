import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, Heart, Shield, Landmark, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "20 Best Places to Visit in Makkah During Umrah | Makkah Ziyarat - Haramain Umrah Taxi",
  description: "Discover the 20 best places to visit in Makkah during Umrah. From Jabal al-Nour to Jannat al-Mu'alla, explore sacred Ziyarat sites with our complete guide.",
  alternates: {
    canonical: "/best-places-in-makkah/",
  },
};

const post = {
  id: "best-places-in-makkah",
  title: "20 Best Places to Visit in Makkah During Umrah | Makkah Ziyarat",
  excerpt: "Discover the 20 best places to visit in Makkah during Umrah. From Jabal al-Nour to Jannat al-Mu'alla, explore sacred Ziyarat sites with our complete guide.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-05-12",
  readTime: "15 min read",
  author: "M Umar Irfan",
  image: "/images/Best-Places-to-Visit-in-Makkah.png",
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
                  Your Umrah journey is about to begin. Makkah holds centuries of Islamic history within its blessed boundaries. Beyond the rituals of Umrah, these sacred sites offer a deeper spiritual connection to the life of the Prophet (PBUH) and his companions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Heart className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Sacred Devotion</h3>
                    <p className="text-sm text-[var(--text-2)]">Experience the ultimate peace at Masjid al-Haram and the holy Kaaba.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Shield className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Historic Caves</h3>
                    <p className="text-sm text-[var(--text-2)]">Climb the mountains to see Cave Hira and Cave Thawr, sites of revelation and protection.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Landmark className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Blessed Grounds</h3>
                    <p className="text-sm text-[var(--text-2)]">Visit the historical cemeteries, birthplaces, and mosques that shaped Islam.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Masjid al-Haram (The Sacred Mosque)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The center of your journey. Home to the Kaaba, the Zamzam well, and the hills of Safa and Marwa. Every prayer here is multiplied in reward.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Jabal al-Nour (Mountain of Light)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Home to the Cave of Hira, where revelation began. The 1-2 hour climb rewards you with a profound sense of reflection on the Prophet&apos;s (PBUH) dedication to worship.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Jabal Thawr (Cave of Thawr)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The site where the Prophet (PBUH) and Abu Bakr (RA) sought refuge during the migration. It is a powerful symbol of trust in Allah (Tawakkul).
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Jannat al-Mu'alla Cemetery</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  One of the most important cemeteries, holding the graves of Hazrat Khadijah (RA) and the Prophet&apos;s ancestors.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Masjid Aisha (Al-Taneem Mosque)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The closest Miqat for those already in Makkah. It is the perfect starting point for pilgrims wishing to perform additional Umrahs during their stay.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Other Essential Highlights</h2>
                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li><strong>Mount Arafat:</strong> The Mountain of Mercy and site of the Final Sermon.</li>
                  <li><strong>Hira Cultural District:</strong> A modern center combining history with technology.</li>
                  <li><strong>Abraj Al-Bait (Clock Tower):</strong> Iconic architecture and a museum of timekeeping.</li>
                  <li><strong>Birthplace of the Prophet:</strong> Now a library, marking the humble beginnings.</li>
                  <li><strong>Kiswa Factory:</strong> Witness the artisans creating the Kaaba's sacred covering.</li>
                  <li><strong>Makkah Museum:</strong> Exploring the development of the holy city through artifacts.</li>
                </ul>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Ziyarat Tip</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        To see all 20 locations comfortably, we recommend booking a dedicated Ziyarat service. At Haramain Umrah Taxi, we handle all logistics so you can focus on the spiritual significance of each site.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A visit to Makkah is a life-changing experience. Exploring the sites that witnessed the birth and expansion of Islam deepens your devotion and creates lasting memories. Let us make your journey stress-free and blessed.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Makkah Ziyarat tour with us today!
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
