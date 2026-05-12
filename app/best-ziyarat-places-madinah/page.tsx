import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, Landmark, Shield, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "15 Best Places to Visit in Madinah | Holy Sites Ziyarat - Haramain Umrah Taxi",
  description: "Discover 15 best places to visit in Madinah including Masjid al-Nabawi, Mount Uhud, and sacred Ziyarat sites. Get complete guide with history and tips.",
  alternates: {
    canonical: "/best-ziyarat-places-madinah/",
  },
};

const post = {
  id: "best-ziyarat-places-madinah",
  title: "15 Best Places to Visit in Madinah| Tourist & Holy Sites Madina",
  excerpt: "Discover 15 best places to visit in Madinah including Masjid al-Nabawi, Mount Uhud, and sacred Ziyarat sites. Get complete guide with history and tips.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-05-12",
  readTime: "15 min read",
  author: "M Umar Irfan",
  image: "/images/15-Best-Places-to-Visit-in-Madinah.png",
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
                  Your heart beats faster as you approach the city where our beloved Prophet (PBUH) lived and rests. Madinah welcomes you with peace and blessings that you will feel instantly. We will guide you through the best places to visit in Madinah that connect you deeply to Islamic history.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Heart className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Spiritual Peace</h3>
                    <p className="text-sm text-[var(--text-2)]">Experience the tranquility of Masjid al-Nabawi and the blessed Rawdah.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Shield className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Historic Sacrifice</h3>
                    <p className="text-sm text-[var(--text-2)]">Walk the grounds of Mount Uhud and honor the martyrs of the early Islamic era.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Landmark className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Sacred Heritage</h3>
                    <p className="text-sm text-[var(--text-2)]">Visit Islam's first mosques, including Masjid Quba and Masjid Qiblatain.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Masjid al-Nabawi (The Prophet's Mosque)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Start your journey at the second-holiest mosque in Islam. Masjid al-Nabawi houses the Prophet&apos;s (PBUH) blessed grave. Visiting the Rawdah, a piece of Jannah on Earth, fills your heart with peace.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Masjid Quba (The First Mosque)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Prophet Muhammad (PBUH) founded this mosque after migrating to Madinah. It is Islam&apos;s first mosque, and praying two rakats here receives the reward of an Umrah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Masjid Qiblatain (The Two Qiblas)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Witness where the qibla direction shifted from Jerusalem to Makkah mid-prayer. The mosque features unique architecture with two qibla walls, signifying this historic change.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Mount Uhud (Site of Sacrifice)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Visit the battlefield where 70 companions became martyrs. Honor the grave of Hamza (RA) and reflect on the lessons of patience and obedience from this pivotal battle.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Jannat al-Baqi (Sacred Cemetery)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Pay respects to the Prophet&apos;s family and over 10,000 companions resting in this ancient cemetery next to the Prophet's Mosque.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Other Essential Ziyarat Sites</h2>
                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li><strong>Seven Mosques:</strong> Marking the site of the Battle of the Trench.</li>
                  <li><strong>Garden of Salman Farsi:</strong> The date farm planted by the Prophet to free Salman (RA).</li>
                  <li><strong>Masjid Ghamama:</strong> The Mosque of Clouds, where the rain miracle occurred.</li>
                  <li><strong>Dar al-Madinah Museum:</strong> Bringing 14 centuries of history to life.</li>
                  <li><strong>Khaybar Fort:</strong> Witnessing the courage of Ali (RA) and the believers.</li>
                  <li><strong>Masjid al-Jumu'ah:</strong> Site of the first Friday congregational prayer.</li>
                </ul>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Ziyarat Services</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Madinah's holy sites are best explored with a knowledgeable driver who understands the historical context. At Haramain Umrah Taxi, we offer comprehensive tours covering all these sacred locations.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A journey to Madinah is a spiritual transformation. From the peace of the Prophet&apos;s Mosque to the historical depths of Khaybar, each site enriches your faith. Let us help you explore these blessed places comfortably.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Madinah Ziyarat tour with us today!
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
