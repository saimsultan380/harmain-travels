import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, Map, Shield, Droplets, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Badar Ziyarat List | 15 Places to Visit in Badr - Haramain Umrah Taxi",
  description: "Complete Badr Ziyarat list with must-visit places including the battlefield, martyrs' graves, and sacred wells. Explore historical Islamic sites of Badr.",
  alternates: {
    canonical: "/badar-ziyarat-list-best-places-badr/",
  },
};

const post = {
  id: "badar-ziyarat-list-best-places-badr",
  title: "Badar Ziyarat List | Places to Visit in Badr | Things to Do",
  excerpt: "Complete Badr Ziyarat list with 15 must-visit places including the battlefield, martyrs' graves, and sacred wells. Explore historical Islamic sites of Badr.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-05-12",
  readTime: "13 min read",
  author: "M Umar Irfan",
  image: "/images/Badar-Ziyarat-List-Places-to-Visit-in-Badr-Things-to-Do-768x559.png",
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
                <p className="text-[var(--text-2)] leading-relaxed mb-6 italic text-center text-xl">
                  "Faith is the strongest weapon on the battlefield of Badr."
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your heart connects with Islam&apos;s most decisive victory when you visit Badr. This blessed land witnessed 313 believers defeat 1,000 enemies through faith and divine help. We will guide you through the best places to visit in Badr that bring history alive.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Map className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Historical Battlefield</h3>
                    <p className="text-sm text-[var(--text-2)]">Visit the actual ground where the miraculous victory of Badr occurred.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Shield className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Martyrs' Honor</h3>
                    <p className="text-sm text-[var(--text-2)]">Pay respects at the cemetery of the 14 blessed companions who sacrificed their lives.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Droplets className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Sacred Wells</h3>
                    <p className="text-sm text-[var(--text-2)]">Discover the ancient wells that played a tactical role in the early Islamic era.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Medan-e-Badar (Badr Battlefield)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Stand on the vast plain where Jang-e Badar occurred. This is the actual ground where 313 Muslims faced 1,000 Quraysh warriors. Local guides explain where the Prophet (PBUH) stood and how divine intervention unfolded.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Well of Badr (Bir Badr)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The well of Badr marks where Muslims set up camp. Prophet Muhammad (PBUH) made tactical decisions here. It remains a humbling site of preparation and complete dependence on Allah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Martyrs' Graveyard (Badr Shohada)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Pay respects to 14 blessed companions who sacrificed their lives. This sacred cemetery is a powerful reminder of the commitment shown by early Muslims.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Masjid Al-Areesh (The Shelter Mosque)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This mosque marks the exact position of the palm-branch shelter where the Prophet (PBUH) commanded the battle and made dua for victory.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Mount Akhdar (Green Mountain)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Climb this mountain for panoramic views of the entire battlefield. It is the site where angels reportedly descended to assist the believers.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Other Key Ziyarat Sites</h2>
                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li><strong>Ghaar-e-Tadbeer:</strong> The Cave of Planning where shura was practiced.</li>
                  <li><strong>Masjid Al-Kubra:</strong> A modern mosque providing amenities for pilgrims.</li>
                  <li><strong>Well of Shifaa:</strong> A blessed well symbolizing resilience and faith.</li>
                  <li><strong>Ancient Battle Markers:</strong> Stones indicating troop movements.</li>
                  <li><strong>Badr Museum:</strong> Housing artifacts, maps, and replica weapons.</li>
                  <li><strong>Qulaib Badr:</strong> The pit where fallen enemy leaders were addressed.</li>
                  <li><strong>Al-Adwa Al-Dunya:</strong> The "Near Side" of the valley mentioned in the Quran.</li>
                </ul>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <Info className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Travel Tip</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Badr is located 150km from Madinah (approx. 2 hours). It is best to visit during cooler months (Nov-Feb) and carry plenty of water for the desert exploration.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your journey to Badr transforms your understanding of early Islamic history. Each site, from the battlefield to the martyrs&apos; graves, strengthens your faith. At Haramain Umrah Taxi, we provide comfortable vehicles and knowledgeable drivers to make your Badr Ziyarat tour unforgettable.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Badr Ziyarat tour with us today!
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
