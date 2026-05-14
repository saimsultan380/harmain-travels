import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, MapPin, Camera, Building, Landmark } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "13 Best Places to Visit in Riyadh & Things to Do in Riyadh",
  description: "Discover the best places to visit in Riyadh. Read our complete guide to top attractions & things to do in the Saudi capital. Book your Riyadh tour with Us!",
  alternates: {
    canonical: "/best-places-in-riyadh/",
  },
};

const post = {
  id: "best-places-in-riyadh",
  title: "13 Best Places to Visit in Riyadh & Things to Do in Riyadh",
  excerpt: "Discover the best places to visit in Riyadh. Read our complete guide to top attractions & things to do in the Saudi capital.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-05-12",
  readTime: "14 min read",
  author: "M Umar Irfan",
  image: "/images/13-Best-Places-to-Visit-in-Riyadh-Things-to-Do-in-Riyadh.png",
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
                  Saudi Arabia&apos;s capital surprises you at every corner. Glass skyscrapers pierce desert skies while ancient fortresses whisper centuries-old secrets. You step into a city where tradition meets innovation dramatically. Riyadh offers you experiences you cannot find anywhere else, from hiking cliff edges that drop into endless desert to shopping in souqs unchanged for generations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Building className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Modern Wonders</h3>
                    <p className="text-sm text-[var(--text-2)]">Experience the futuristic skyline and world-class architecture of the capital.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Landmark className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Ancient Heritage</h3>
                    <p className="text-sm text-[var(--text-2)]">Discover UNESCO sites and centuries-old fortresses that tell the Saudi story.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Camera className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Stunning Views</h3>
                    <p className="text-sm text-[var(--text-2)]">Capture breathtaking desert landscapes and glittering city lights.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Kingdom Centre Tower</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Kingdom-Centre-Tower-1.png"
                    alt="Kingdom Centre Tower"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You cannot miss the iconic 302-meter tower dominating Riyadh&apos;s skyline. Take two elevators to reach the 99th-floor Sky Bridge for panoramic views spreading Riyadh beneath you in every direction. Visit during sunset for the best experience.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Edge of the World (Jebel Fihrayn)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Edge-of-the-World-or-Jebel-Fihrayn.png"
                    alt="Edge of the World"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You stand on 1131-meter-high cliffs overlooking endless desert plains. This geological wonder sits 90 kilometers northwest of Riyadh. It offers a dramatic escape into nature where ancient ocean beds once flowed.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Masmak Fortress</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masmak Fortress Where History Lives.png"
                    alt="Masmak Fortress"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Enter the 19th-century clay fortress that witnessed the founding of Saudi Arabia. The museum inside displays weapons, photographs, and artifacts from the Kingdom&apos;s establishment. It is a cornerstone of Saudi history.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. At-Turaif UNESCO World Heritage Site</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/At-Turaif-UNESCO-World-Heritage-Site.png"
                    alt="At-Turaif"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Walk through Saudi Arabia&apos;s first capital in Diriyah. At-Turaif served as the royal family&apos;s home until 1818. The mud-brick architecture showcases traditional Najdi building techniques beautifully.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. National Museum of Saudi Arabia</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/National-Museum-of-Saudi-Arabia.png"
                    alt="National Museum"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Discover 3,700 rare artifacts spanning Arabian Peninsula history in this crescent-shaped building. Eight galleries guide you from prehistoric times through the modern age, emphasizing Islamic history.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">6. Diriyah - Cultural Renaissance</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Diriyah-Cultural-Renaissance.png"
                    alt="Diriyah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Experience a world-class heritage destination where restored districts connect with modern entertainment. It is the heart of Saudi culture, offering traditional performances and high-end dining.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">7. Souq Al-Zal (Deerah Souq)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Souq-Al-Zal-Deerah-Souq.png"
                    alt="Souq Al-Zal"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haggle for treasures in Riyadh&apos;s most authentic traditional market. From gold jewelry to antique coffee pots and handmade carpets, this is the place for authentic cultural immersion.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">8. Boulevard Riyadh City</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Enter Riyadh&apos;s answer to Times Square. This entertainment zone recreates international urban experiences with restaurants, cafes, and massive seasonal festivals during Riyadh Season.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">9. Riyadh Zoo</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Riyadh-Zoo-Wildlife-Conservation.png"
                    alt="Riyadh Zoo"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Visit the Kingdom&apos;s oldest zoo, spanning 55 acres and housing over 1,500 animals. It is a family favorite that emphasizes conservation and provides shaded paths for comfortable viewing.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">10. King Abdullah Park</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/King-Abdullah-Park-Urban-Oasis.png"
                    alt="King Abdullah Park"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Relax in an urban oasis with landscaped gardens and a dancing musical fountain show. It is the perfect place to unwind after a day of sightseeing.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">11. Al-Masmak Museum</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Al-Masmak-Museum-Royal-History.png"
                    alt="Al-Masmak Museum"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Explore the restored palace displaying royal history and personal belongings of King Abdulaziz. The traditional Najdi architecture is a highlight in itself.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">12. Red Sand Dunes</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Red-Sand-Dunes-Desert-Adventures.png"
                    alt="Red Sand Dunes"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Try quad biking or camel riding on naturally red sand dunes just outside the city. It is a premier spot for desert adventure and photography.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">13. Imam Turki bin Abdullah Grand Mosque</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Imam-Turki-bin-Abdullah-Grand-Mosque.png"
                    alt="Imam Turki bin Abdullah Grand Mosque"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Admire Riyadh&apos;s largest mosque, featuring stunning Islamic architecture. Its brownstone exterior glows beautifully at night, serving as a spiritual landmark in the city.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Riyadh surprises visitors with its fascinating contrast of ancient fortresses and ultramodern skyscrapers. You experience authentic Arabian culture while enjoying world-class amenities. At Haramain Umrah Taxi, we make exploring the capital comfortable and comprehensive.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Riyadh tour with us today and discover Saudi Arabia&apos;s dynamic capital!
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
