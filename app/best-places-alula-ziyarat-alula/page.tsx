import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, Compass, Mountain, History, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "List of Best Places to Visit in AlUla & AlUla Ziyarat Tours - Haramain Umrah Taxi",
  description: "Explore the best places to visit in AlUla with guided Ziyarat tours. Ancient tombs, rock formations & sacred sites await in Saudi Arabia. Book your AlUla tour today!",
  alternates: {
    canonical: "/best-places-alula-ziyarat-alula/",
  },
};

const post = {
  id: "best-places-alula-ziyarat-alula",
  title: "List of Best Places to Visit in AlUla & AlUla Ziyarat Tours",
  excerpt: "Explore the best places to visit in AlUla with guided Ziyarat tours. Ancient tombs, rock formations & sacred sites await in Saudi Arabia.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-05-12",
  readTime: "15 min read",
  author: "M Umar Irfan",
  image: "/images/List of Best Places to Visit in AlUla & AlUla Ziyarat Tours.png",
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
                  AlUla is not just another tourist destination. It is a journey through 7,000 years of human history waiting to captivate your soul. From UNESCO World Heritage sites to stunning desert landscapes, explore the top attractions with Haramain Umrah Taxi.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <History className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">7,000 Years of History</h3>
                    <p className="text-sm text-[var(--text-2)]">Walk through the ancient kingdoms of Dadan, Lihyan, and the Nabataeans.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Mountain className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Natural Wonders</h3>
                    <p className="text-sm text-[var(--text-2)]">Witness iconic rock formations like Elephant Rock and stunning canyon views.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Compass className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Modern Marvels</h3>
                    <p className="text-sm text-[var(--text-2)]">See the world's largest mirrored building, Maraya, in the heart of the desert.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Hegra (Madain Saleh)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Hegra is Saudi Arabia&apos;s first UNESCO World Heritage Site, featuring over 110 remarkably preserved Nabataean tombs carved into sandstone cliffs. The intricate facades tell stories from 2,000 years ago.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Elephant Rock (Jabal AlFil)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Elephant Mountain is AlUla&apos;s most photographed natural wonder. Wind and water erosion sculpted this massive sandstone formation into an uncanny resemblance to an elephant, complete with a trunk.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Maraya - Hall of Mirrors</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Maraya, meaning "mirror" in Arabic, is the world&apos;s largest mirrored building. Located in Ashar Valley, its 9,740 mirrored panels reflect the stunning mountains and desert beauty.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. AlUla Oasis</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A lush agricultural area that has sustained communities for millennia. The Heritage Oasis Trail guides you through working farms where families still practice traditional agriculture.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Mount Ikmah (Jabal Ikmah)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Known as the "Open-Air Library," this site features hundreds of ancient inscriptions carved into rock faces, spanning multiple languages including Dadanitic and ancient Arabic scripts.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Other Highlights in AlUla</h2>
                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li><strong>AlMansheyah Square:</strong> The modern social and cultural hub for dining and shopping.</li>
                  <li><strong>Sharaan Nature Reserve:</strong> Protecting the unique desert ecosystem and Arabian leopard.</li>
                  <li><strong>Dadan and the Ancient Kingdoms:</strong> Capitals of the Dadanite and Lihyanite civilizations.</li>
                  <li><strong>Harrat Viewpoint:</strong> Offering panoramic views of the entire valley and rock formations.</li>
                  <li><strong>Wadi Ashar:</strong> Dramatic canyon scenery and home to luxury Bedouin camps.</li>
                </ul>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <Info className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Visitor Information</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        The best time to visit AlUla is between November and February when the weather is mild. Most travelers spend 3-4 days to fully explore the major attractions.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  AlUla is a destination like no other, blending deep history with breathtaking natural beauty. Contact Haramain Umrah Taxi today to book your customized AlUla ziyarat tour and experience this extraordinary destination with peace of mind.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your AlUla adventure with us today!
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
