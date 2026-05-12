import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, Waves, Palmtree, ShoppingBag, Landmark } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "15 Best Places to Visit in Jeddah with Family | Things to Do - Haramain Umrah Taxi",
  description: "Discover best places to visit in Jeddah with family. From New Corniche & Jeddah Waterfront Park to theme parks & malls, explore top attractions with our guide.",
  alternates: {
    canonical: "/15-best-places-to-visit-in-jeddah-with-family-things-to-do/",
  },
};

const post = {
  id: "15-best-places-to-visit-in-jeddah-with-family-things-to-do",
  title: "15 Best Places to Visit in Jeddah with Family | Things to Do",
  excerpt: "Discover best places to visit in Jeddah with family. From New Corniche & Jeddah Waterfront Park to theme parks & malls, explore top attractions with our guide.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-05-12",
  readTime: "15 min read",
  author: "M Umar Irfan",
  image: "/images/15-Best-Places-to-Visit-in-Jeddah-with-Family-Things-to-Do.png",
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
                  Your family deserves unforgettable memories beyond your spiritual journey. Jeddah welcomes you with stunning Red Sea views, rich history, and modern attractions perfect for all ages. We will show you the best places to visit in Jeddah that blend culture, entertainment, and relaxation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Waves className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Waterfront Magic</h3>
                    <p className="text-sm text-[var(--text-2)]">Experience the stunning 30km New Corniche and world-class Waterfront Parks.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Landmark className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Ancient Heritage</h3>
                    <p className="text-sm text-[var(--text-2)]">Step back centuries in Al-Balad, a UNESCO World Heritage site with coral-stone houses.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <ShoppingBag className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Family Fun</h3>
                    <p className="text-sm text-[var(--text-2)]">From giant theme parks like Al Shallal to massive malls like Red Sea and Arabia.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. New Corniche Jeddah</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The New Corniche stretches 30 kilometers along the Red Sea. It is a world-class destination for evening walks, cycling, and enjoying the dancing fountains. It ranks top among places to visit in Jeddah at night.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Jeddah Waterfront Park</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Occupying 730,000 square meters, this park features landscaped gardens, children's water games, and numerous restaurants. It is a free, 24-hour recreation hub for families.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. King Fahd's Fountain</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Witness the world's tallest fountain, shooting water 312 meters into the sky. It is particularly spectacular at night when 500 LED lights illuminate the water column.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Al-Balad (Old Jeddah)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Explore the UNESCO World Heritage site known for its traditional Hijazi architecture. Visit the Nassif House Museum and the historic souqs for an authentic cultural experience.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Al Rahma (The Floating Mosque)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Built on stilts over the Red Sea, this turquoise-domed mosque appears to float during high tide. It is a masterpiece of modern Islamic architecture.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">6. Fakieh Aquarium</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Discover over 200 marine species and enjoy seasonal dolphin shows. It is a perfect educational stop for children during the hot afternoons.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">7. Al Shallal Theme Park</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The largest theme park in the Middle East with over 30 thrilling rides across themed zones like Arabic, American, and Italian.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">More Family Highlights</h2>
                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li><strong>Red Sea Mall:</strong> Premier shopping with a massive Kids Zone and cinema.</li>
                  <li><strong>Mall of Arabia:</strong> Home to KidZania, a role-play city for children.</li>
                  <li><strong>Silver Sands Beach:</strong> A private, family-safe beach for swimming and water sports.</li>
                  <li><strong>Athr Gallery:</strong> A sophisticated contemporary art space on Tahlia Street.</li>
                  <li><strong>Obhur Corniche:</strong> A quieter northern beach area for tranquility and kayaks.</li>
                  <li><strong>Jeddah Yacht Club:</strong> The height of waterfront luxury and fine dining.</li>
                </ul>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <Palmtree className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Why Visit Jeddah?</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Jeddah offers a perfect balance between spiritual significance and modern family fun. Whether you want to explore history or relax by the sea, the city has it all.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  From the stunning waterfront to historical alleys, Jeddah creates lasting memories for every family. At Haramain Umrah Taxi, we help you explore all these attractions comfortably with our reliable service.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Jeddah family tour with us today!
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
