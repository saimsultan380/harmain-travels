import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Landmark, Shield, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "15 Best Places to Visit in Madinah| Tourist & Holy Sites Madina",
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
                  Your heart beats faster as you approach the city where our beloved Prophet (PBUH) lived and rests. Madinah welcomes you with peace and blessings that you will feel instantly. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We will guide you through the best places to visit in Madinah that connect you deeply to Islamic history and strengthen your faith journey. Here are the places that you must visit in Madinah.
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
                    <p className="text-sm text-[var(--text-2)]">Visit Islam&apos;s first mosques, including Masjid Quba and Masjid Qiblatain.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Masjid al-Nabawi - The Prophet&apos;s Mosque</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-al-Nabawi-The-Prophets-Mosque.png"
                    alt="Masjid al-Nabawi (The Prophet's Mosque)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should start your journey at the most sacred site in Madinah. Masjid al-Nabawi houses the Prophet&apos;s (PBUH) blessed grave. This ranks as the second-holiest mosque in Islam after Masjid al-Haram. Praying here earns you rewards equivalent to 1,000 prayers elsewhere.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You will visit Rawdah, the area between the Prophet&apos;s pulpit and his house. This piece of Jannah on Earth fills your heart with indescribable peace. This tops every Madinah ziyarat list for obvious reasons.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Masjid Quba - The First Mosque</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-Quba-The-First-Mosque.png"
                    alt="Masjid Quba (The First Mosque)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Prophet Muhammad (PBUH) himself founded this mosque after migrating to Madinah. You are standing in Islam&apos;s first-ever mosque.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Prophet (PBUH) said whoever purifies themselves at home and prays two rakats here receives the reward of an Umrah. The peaceful atmosphere invites extended worship.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Masjid Qiblatain - The Two Qiblas Mosque</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-Qiblatain-The-Two-Qiblas-Mosque.png"
                    alt="Masjid Qiblatain (The Two Qiblas Mosque)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This mosque witnessed history change mid-prayer. You are visiting where the qibla direction shifted from Jerusalem to Makkah. Prophet Muhammad (PBUH) received revelation during congregational prayer here. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The mosque features two qibla walls, one facing Jerusalem and one toward Makkah. This unique architecture makes it stand out among religious places to visit in Madinah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Mount Uhud - Site of Sacrifice</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Mount-Uhud-Site-of-Sacrifice.png"
                    alt="Mount Uhud (Site of Sacrifice)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You feel the weight of history approaching this mountain. The Battle of Uhud took place here in 625 CE. Seventy companions became martyrs defending Madinah, including the Prophet&apos;s uncle Hamza (RA). 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The site teaches you about patience, trust, and following the Prophet&apos;s commands. This ranks high among the best historical places to visit in Madinah for its profound lessons.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Jannat al-Baqi - The Sacred Cemetery</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Jannat-al-Baqi-The-Sacred-Cemetery.png"
                    alt="Jannat al-Baqi (The Sacred Cemetery)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You will pay respects to the Prophet&apos;s family and companions here. This ancient cemetery holds over 10,000 blessed companions, including the Prophet&apos;s wives and children. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The cemetery follows simple Islamic tradition without elaborate structures. This sacred ground is among the best holy places to visit in Madinah, requiring utmost respect.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">6. Seven Mosques (Sab&apos;a Masajid)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Seven-Mosques-Saba-Masajid.png"
                    alt="Seven Mosques (Sab'a Masajid)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You discover seven small mosques marking the battle of trench site. These Islamic historical mosques in Madinah witnessed Muslims defending Madinah in 627 CE. The area shows you early Muslims&apos; ingenuity and unity.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">7. Garden of Salman Farsi</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Garden-of-Salman-Farsi.png"
                    alt="Garden of Salman Farsi"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should walk through the blessed garden planted by Prophet Muhammad (PBUH) himself. The Prophet and companions planted 300 date palms to free Salman al-Farsi from slavery. The garden still produces dates today.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">8. Masjid al-Jumu&apos;ah</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-al-Jumuah.png"
                    alt="Masjid al-Jumu'ah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Prophet Muhammad (PBUH) performed Islam&apos;s first Friday congregational prayer here. The mosque marks the Prophet&apos;s arrival route to Madinah and established Friday as the Muslim weekly holy day.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">9. Masjid Ghamama (Mosque of Clouds)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-Ghamama-Mosque-of-Clouds.png"
                    alt="Masjid Ghamama (Mosque of Clouds)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must visit where Prophet Muhammad (PBUH) prayed for rain, and clouds immediately appeared. This miracle gave the mosque its name. The Prophet led Salat al-Istisqa here during a severe drought.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">10. Dar al-Madinah Museum</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Dar-al-Madinah-Museum.png"
                    alt="Dar al-Madinah Museum"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Must explore 14 centuries of Islamic history under one roof. This museum brings Madinah&apos;s past to life through detailed exhibits and models. It is among the tourist places in Madinah that educate while entertaining.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">11. Khaybar Fort</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Khaybar-Fort.png"
                    alt="Khaybar Fort"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should travel 150 kilometers to witness where courage triumphed. The famous Battle of Khaybar occurred here in 628 CE. Prophet Muhammad (PBUH) gave the flag to Ali (RA), who uprooted the fort&apos;s gate.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">12. Battle of Badr Site</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Battle-of-Badr-Site.png"
                    alt="Battle of Badr Site"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must visit where Islam&apos;s most decisive battle occurred in 624 CE. Just 313 Muslims defeated 1,000 Quraysh warriors here with divine help. The site lies 150 kilometers from Madinah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">13. Masjid al-Ijabah</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-al-Ijabah.png"
                    alt="Masjid al-Ijabah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Prophet Muhammad (PBUH) made three supplications at this mosque. Allah granted two of them immediately. The mosque&apos;s name means &quot;mosque of answered prayers.&quot;
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">14. Masjid al-Mustarah</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-al-Mustarah-1.png"
                    alt="Masjid al-Mustarah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Prophet Muhammad (PBUH) rested here after the Battle of Uhud. The name &quot;Mustarah&quot; means &quot;place of rest.&quot; It marks his regular route between Madinah and the battlefield.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">15. Al-Noor Mall & Markets</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Al-Noor-Mall-Markets.png"
                    alt="Al-Noor Mall & Markets"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Al-Noor Mall offers shopping, dining, and entertainment. The traditional markets near Masjid al-Nabawi sell prayer beads, perfumes, and authentic Arabian products. These top attractions balance spiritual and practical needs.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Madinah journey offers spiritual transformation beyond imagination. The best places to visit in Madinah connect you deeply to our Prophet&apos;s life and Islamic history. At Haramain Umrah Taxi, we help you explore these sacred sites comfortably.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Madinah tour today and walk where the Prophet walked. We handle transportation while you focus on prayers and creating blessed memories.
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
