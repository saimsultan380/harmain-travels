import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, Heart, CheckCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How to Donate Quran in Makkah, Madinah & Masjid Al Haram? - Haramain Umrah Taxi",
  description: "Learn how to donate Quran in Makkah & Madinah properly. Complete guide to Waqaf a Quran in Masjid Al Haram & Masjid Nabawi online with official channels.",
  alternates: {
    canonical: "/donate-quran-makkah-madinah-haram/",
  },
};

const post = {
  id: "donate-quran-makkah-madinah-haram",
  title: "How to Donate Quran in Makkah, Madinah & Masjid Al Haram?",
  excerpt: "Learn how to donate Quran in Makkah & Madinah properly. Complete guide to Waqaf a Quran in Masjid Al Haram & Masjid Nabawi online with official channels.",
  category: "other-services",
  categoryName: "Other Services",
  date: "2026-05-12",
  readTime: "11 min read",
  author: "M Umar Irfan",
  image: "/images/How-to-Donate-Quran-in-Makkah-Madinah-andMasjid-Al-Haram-.png",
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
                <p className="text-[var(--text-2)] leading-relaxed mb-6 italic">
                  Imagine millions of pilgrims reading from a Quran you donated. Every recitation earns you rewards even after you return home. Every prayer someone offers using your donated Quran adds blessings to your account.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This is **Sadaqah Jariyah**, a continuous charity that benefits you in this life and the next. We will show you exactly how to donate Quran in Makkah and Madinah through proper channels that ensure your gift reaches the holiest mosques.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <BookOpen className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Permanent Waqf</h3>
                    <p className="text-sm text-[var(--text-2)]">Your donation stays in the mosque permanently as a religious endowment.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <CheckCircle className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Official Seals</h3>
                    <p className="text-sm text-[var(--text-2)]">Only copies with official mosque stamps and approved prints are accepted.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Heart className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Sadaqah Jariyah</h3>
                    <p className="text-sm text-[var(--text-2)]">Earn continuous blessings from every recitation of the Holy Quran.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Understanding Waqf A Quran</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Waqaf A Quran means dedicating a Quran as a permanent religious endowment. Once you donate it properly, the Quran stays in the mosque permanently. Not just any Quran qualifies for placement in Masjid al-Haram or Masjid Nabawi; copies need official seals and approvals from mosque management to ensure quality and consistency.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Donate in Makkah: 3 Best Options</h2>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">1. Official Partners & Online Platforms</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can donate Quran in Makkah online through verified organizations that work directly with Masjid al-Haram management. They provide certificates and proof of placement.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">2. Authorized Bookstores</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When visiting Makkah, authorized bookstores like **Dawah Corner** near Masjid al-Haram offer official donation services. They stamp the Quran with official seals and deliver it to mosque authorities following protocol.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">3. Special Campaigns</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  During Ramadan and Hajj, bulk donation campaigns often run. These allow you to dedicate Qurans to family members at discounted rates through official channels.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Online Donation Process for Madinah</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Donating to Masjid Nabawi follows a similar process:
                </p>
                <ol className="list-decimal list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>Choose a verified platform with official partnerships.</li>
                  <li>Select your preferred mosque (Makkah or Madinah).</li>
                  <li>Choose Quran size (normal or large print).</li>
                  <li>Provide dedication details (names of living or deceased).</li>
                  <li>Complete secure payment and receive confirmation.</li>
                  <li>Get photo or video proof after placement.</li>
                </ol>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Common Mistakes to Avoid</h4>
                      <p className="text-[var(--text-2)] text-sm mb-2">
                        • Never buy random Qurans and leave them in the mosque yourself; they will be removed if they lack official seals.
                      </p>
                      <p className="text-[var(--text-2)] text-sm">
                        • Avoid unverified platforms with impossibly low prices. Legit approved Qurans have standard costs.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How Haramain Umrah Taxi Can Help</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When you visit for Umrah, we can take you to authorized Quran donation locations. Our drivers know which bookstores (like Dawah Corner) work officially with mosque management. We handle your transportation while you fulfill your spiritual intention, ensuring your donation experience is smooth and blessed.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Donating a Quran to Makkah and Madinah creates endless rewards. Whether you donate online or in person, ensure you follow official procedures to secure your **Sadaqah Jariyah**.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Start your journey of continuous blessings today!
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
