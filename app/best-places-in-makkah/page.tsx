import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, Heart, Shield, Landmark, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "20 Best Places to Visit in Makkah During Umrah | Makkah Ziyarat",
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
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We will guide you through the best places to visit in Makkah that will deepen your spiritual connection and enrich your pilgrimage experience. Here are the 20 best places you must visit in Makkah during Umrah.
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

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Masjid al-Haram - The Sacred Mosque</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-al-Haram.png"
                    alt="Masjid al-Haram"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your journey begins and centers here. Masjid al-Haram houses the Kaaba, the holiest site in Islam. The mosque contains Maqam Ibrahim, Safa and Marwah hills, and the Zamzam well. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Jabal al-Nour (Mountain of Light)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Jabal-al-Nour.png"
                    alt="Jabal al-Nour"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Imagine standing where revelation began. Jabal al-Nour holds the Cave of Hira at its peak. Prophet Muhammad (PBUH) received the first verses of the Quran from Angel Jibreel here. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Jabal Thawr (Cave of Thawr)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Jabal-Thawr.png"
                    alt="Jabal Thawr"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This mountain witnessed divine protection during the Prophet&apos;s migration to Madinah. Prophet Muhammad (PBUH) and Abu Bakr (RA) hid in the Cave of Thawr from their enemies.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Jannat al-Mu&apos;alla Cemetery</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Jannat-al-Mualla-Cemetery.png"
                    alt="Jannat al-Mu'alla Cemetery"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can pay respects to the Prophet&apos;s beloved family members here. This ancient cemetery holds the graves of Hazrat Khadijah (RA), the Prophet&apos;s first wife.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Masjid Aisha (Al-Taneem Mosque)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-Aisha-Al-Taneem-Mosque.png"
                    alt="Masjid Aisha (Al-Taneem Mosque)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Want to perform another Umrah during your stay? Start from Masjid Aisha. It serves as the closest Miqat for those already in Makkah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">6. Mount Arafat (Jabal Rahmah)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Mount-Arafat-Jabal-Rahmah.png"
                    alt="Mount Arafat (Jabal Rahmah)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We know this as the Mountain of Mercy. Prophet Muhammad (PBUH) delivered his Final Sermon here. People believe Adam and Eve reunited on Earth here. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">7. Mina - The City of Tents</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Mina-The-City-of-Tents-1.png"
                    alt="Mina - The City of Tents"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Mina transforms during Hajj into a massive tent city. The Jamarat pillars stand here, symbolizing the rejection of evil. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">8. Hira Cultural District</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Hira-Cultural-District.png"
                    alt="Hira Cultural District"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Modern Makkah offers you cultural enrichment. The Hira Cultural District combines history with contemporary presentation through interactive exhibits.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">9. Makkah Museum (Al-Zaher Palace)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Makkah-Museum-Al-Zaher-Palace.png"
                    alt="Makkah Museum"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You step into Islamic history through rare artifacts and manuscripts. The Makkah museum houses treasures from Makkah&apos;s past and shows city development.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">10. Birthplace of Prophet Muhammad (PBUH)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Birthplace-of-Prophet-Muhammad-PBUH.png"
                    alt="Birthplace of Prophet Muhammad (PBUH)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A library now occupies this site that marks where Prophet Muhammad (PBUH) was born. The location reminds you powerfully of humble beginnings.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">11. Masjid al-Khayf</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-alKhayf.png"
                    alt="Masjid al-Khayf"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You will find this mosque in Mina, where numerous prophets prayed. Its legacy makes every prayer you offer here special.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">12. Hudaybiyyah</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Hudaybiyyah.jpg"
                    alt="Hudaybiyyah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Marks a turning point in Islamic history where the Treaty of Hudaybiyyah was signed. This site reflects the Prophet&apos;s wisdom and diplomacy.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">13. Badr - The Historic Battlefield</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Badr-The-Historic-Battlefield.png"
                    alt="Badr Battlefield"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Marks the site of Islam&apos;s most decisive battle. Prophet Muhammad (PBUH) and 313 Muslims defeated a much larger Quraysh army here with divine help.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">14. AlUla - Ancient Islamic Heritage</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AlUla-Ancient-Islamic-Heritage.png"
                    alt="AlUla"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ancient city containing Hegra (Madain Salih), home of the Thamud people. Showcases ancient rock-carved tombs and Islamic trade routes.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">15. Abraj Al-Bait (Clock Tower)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Abraj-Al-Bait-Clock-Tower.png"
                    alt="Abraj Al-Bait"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Modern architectural marvel and home to the Clock Tower Museum. Offers stunning views of Masjid al-Haram from the observation deck.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">16. House of Khadijah (RA)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/House-of-Khadijah-RA.png"
                    alt="House of Khadijah (RA)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Where the Prophet (PBUH) lived with Hazrat Khadijah (RA) for 28 years and received the first revelation. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">17. Kiswa Factory & Exhibition</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Kiswa-Factory-Exhibition-of-Two-Holy-Mosques-Architecture.png"
                    alt="Kiswa Factory"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Discover how artisans hand-embroider the sacred covering for the Kaaba with gold and silver threads on pure black silk. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">18. Masjid al-Bay&apos;ah (Pledge Mosque)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-al-Bayah-Pledge-Mosque.png"
                    alt="Masjid al-Bay'ah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Marks where 75 Ansar from Madinah pledged allegiance to the Prophet Muhammad (PBUH) before the Hijrah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">19. Muzdalifah</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Muzdalifah.png"
                    alt="Muzdalifah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Open plain where pilgrims spend the night during Hajj. A peaceful site that helps you understand the complete Hajj experience.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">20. Masjid Nimrah</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-Nimrah.png"
                    alt="Masjid Nimrah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Stands at the edge of Arafat where the Final Sermon was delivered, establishing fundamental Islamic principles.
                </p>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Why Visit Ziyarat Places in Makkah?</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Performing Umrah goes beyond completing rituals. You walk where prophets walked and touch history with your own hands. These sites connect you to the Prophet (PBUH) and his companions.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Umrah journey extends beyond rituals. The best places to visit in Makkah during umrah connect you deeply to Islamic history and strengthen your faith. From the Cave of Hira to Jannat al-Mu&apos;alla, each location enriches your spiritual experience.
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
