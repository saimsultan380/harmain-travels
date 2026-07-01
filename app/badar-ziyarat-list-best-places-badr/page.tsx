import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Map, Shield, Droplets, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Badar Ziyarat List | Places to Visit in Badr | Things to Do",
  description: "Complete Badr Ziyarat list with 15 must-visit places including the battlefield, martyrs' graves, and sacred wells. Explore historical Islamic sites of Badr.",
  alternates: {
    canonical: "/badar-ziyarat-list-best-places-badr/",
  },
  openGraph: {
    title: "Badar Ziyarat List | Places to Visit in Badr | Things to Do",
    description: "Complete Badr Ziyarat list with 15 must-visit places including the battlefield, martyrs' graves, and sacred wells. Explore historical Islamic sites of Badr.",
    url: "/badar-ziyarat-list-best-places-badr/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badar Ziyarat List | Places to Visit in Badr | Things to Do",
    description: "Complete Badr Ziyarat list with 15 must-visit places including the battlefield, martyrs' graves, and sacred wells. Explore historical Islamic sites of Badr.",
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
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
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
                  Your heart connects with Islam&apos;s most decisive victory when you visit Badr. This blessed land witnessed 313 believers defeat 1,000 enemies through faith and divine help. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We will guide you through the best places to visit in Badar that bring history alive and strengthen your spiritual connection to early Islamic sacrifices. Here is a list of Badar Ziyarat places to visit in Badr.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Map className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Historical Battlefield</h3>
                    <p className="text-sm text-[var(--text-2)]">Visit the actual ground where the miraculous victory of Badr occurred.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Shield className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Martyrs&apos; Honor</h3>
                    <p className="text-sm text-[var(--text-2)]">Pay respects at the cemetery of the 14 blessed companions who sacrificed their lives.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Droplets className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Sacred Wells</h3>
                    <p className="text-sm text-[var(--text-2)]">Discover the ancient wells that played a tactical role in the early Islamic era.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Medan-e-Badar (Badr Battlefield)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Medan-e-Badar-Badr-Battlefield.png"
                    alt="Medan-e-Badar (Badr Battlefield)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should stand on the vast plain where Jang-e Badar occurred. This is the actual ground where 313 Muslims faced 1,000 Quraysh warriors. Prophet Muhammad (PBUH) lined up his small army here with complete trust in Allah&apos;s help. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The battlefield stretches before you, letting you visualize how the battle unfolded. Local guides explain where the Prophet stood, how Quraysh attacked, and where divine intervention occurred. This sacred ground ranks first among places in Badar for its profound historical significance.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Well of Badr (Bir Badr)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Well-of-Badr-Bir-Badr.png"
                    alt="Well of Badr (Bir Badr)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The well of Badr marks where Muslims set up camp before the battle. Prophet Muhammad (PBUH) made tactical decisions here and prayed through the night. You can see the ancient well where companions drew water before facing their enemies. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Standing here humbles you as you imagine the Prophet&apos;s complete dependence on Allah. This well witnessed the planning and preparation that led to Islam&apos;s first major victory. It&apos;s essential among Islamic places in Badar, requiring respectful reflection.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Martyrs&apos; Graveyard (Badr Shohada)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Martyrs-Graveyard-Badr-Shohada.png"
                    alt="Martyrs' Graveyard (Badr Shohada)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You pay respects to 14 blessed companions who sacrificed their lives at Badr. This sacred cemetery holds those who gave everything for Islam&apos;s survival. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The graves remind you of the courage and commitment early Muslims showed. You will make dua for the martyrs and reflect on their ultimate sacrifice. The cemetery sits near Masjid Al Areesh, making combined visits convenient.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Masjid Al-Areesh (The Shelter Mosque)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-Al-Areesh.png"
                    alt="Masjid Al-Areesh"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Prophet Muhammad (PBUH) commanded the battle from a simple shelter of palm branches here. This mosque marks that exact strategic position. You will pray where the Prophet made dua for victory as the battle raged. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The mosque underwent renovations but maintains its historical essence and spiritual atmosphere. Visiting here connects you directly to the Prophet&apos;s leadership during the Battle of Badar.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Mount Akhdar (Green Mountain)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Mount-Akhdar.png"
                    alt="Mount Akhdar"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must climb this mountain where angels reportedly descended during the battle. Allah sent thousands of angels to fight alongside the believers at Badr. The mountain offers panoramic views of the entire battlefield below. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can visualize the battle&apos;s flow from this elevated position. The climb takes moderate effort but rewards you with breathtaking perspectives.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">6. Ghaar-e-Tadbeer (Cave of Planning)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Prophet Muhammad (PBUH) consulted his companions about battle strategy in this cave. You enter where critical decisions shaped Islam&apos;s future. The cave symbolizes the importance of consultation (shura) in Islamic leadership. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Despite divine support, the Prophet still sought human wisdom and planning. These historical places in Badar teach a balance between trust in Allah and practical preparation.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">7. Masjid Al-Kubra (The Great Mosque)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Masjid-Al-Kubra-The-Great-Mosque.png"
                    alt="Masjid Al-Kubra"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This modern mosque serves Badr&apos;s community and visiting pilgrims. You will find comfortable prayer facilities and rest areas here. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The mosque accommodates large groups during peak visiting seasons. It provides essential amenities for those spending full days exploring places in Badar.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">8. Well of Shifaa (Healing Well)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Well-of-Shifaa-Healing-Well.png"
                    alt="Well of Shifaa"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You discover this blessed well-known from the Prophet&apos;s time. The well symbolizes the resilience and deep faith of early Muslims. Many visitors drink from its water, seeking blessings and spiritual connection.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">9. Ancient Battle Markers</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Ancient-Battle-Markers.jpg"
                    alt="Ancient Battle Markers"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You will find stones and markers indicating key battle positions throughout the area. These help you understand troop movements during Medan e Badar. Local guides explain which markers represent Muslim positions versus enemy lines. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">10. Date Palm Farms</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Date-Palm-Farms.png"
                    alt="Date Palm Farms"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You walk through lush date farms surrounding Badr&apos;s historical sites. These farms existed during the Prophet&apos;s time and still produce dates today. You can purchase fresh dates and experience traditional farming methods.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">11. Badr Museum</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Badr-Museum.png"
                    alt="Badr Museum"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should explore artifacts and displays documenting the Battle of Badar comprehensively. The museum houses weapon replicas, battle maps, and historical information panels. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">12. Valley of the Quraysh Camp</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must visit where the enemy army camped before the battle. This location shows you the Quraysh&apos;s advantageous position and superior numbers. Standing here helps you appreciate the Muslims&apos; disadvantage and their courage.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">13. Qulaib Badr (Pit of Bodies)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You discover the pit where the enemy dead were buried after the battle. Prophet Muhammad (PBUH) addressed the fallen Quraysh leaders here after victory. This sobering site reminds you of battle&apos;s harsh realities and consequences.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">14. Al-Adwa Al-Dunya (The Near Side)</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should stand on the sandy hill where Muslim forces positioned themselves strategically. This location is mentioned directly in the Quran (Surah Al-Anfal). The Quran describes Muslims camping on &quot;the near side of the valley.&quot;
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Haramain Umrah Taxi for Badr Ziyarat Tour?</h2>
                <ul className="list-disc pl-6 mb-8 text-[var(--text-2)] space-y-2">
                  <li><strong>Local Expertise:</strong> We provide comfortable vehicles with knowledgeable drivers who know Badr intimately.</li>
                  <li><strong>Spiritual Guidance:</strong> Our guides share historical insights and Quranic references at each stop.</li>
                  <li><strong>Flexibility:</strong> We accommodate your prayer times and provide flexibility for reflection moments.</li>
                  <li><strong>Comfortable Fleet:</strong> Choose from various vehicle types perfect for the 2-hour journey from Madinah.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Time to Visit Badr Ziyarat</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Visit during cooler months from <strong>November to February</strong> for comfortable outdoor experiences. Summer temperatures can exceed 40°C, making extended outdoor visits challenging. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Early morning visits offer beautiful sunrise views over the battlefield, while late afternoon provides golden hour photography opportunities.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What to Bring During Your Badr Ziyarat Tour?</h2>
                <ul className="list-disc pl-6 mb-8 text-[var(--text-2)] space-y-2">
                  <li><strong>Footwear:</strong> Wear comfortable walking shoes for uneven terrain.</li>
                  <li><strong>Hydration:</strong> Carry plenty of water; the desert climate causes quick dehydration.</li>
                  <li><strong>Protection:</strong> Bring hats and sunscreen for protection during outdoor explorations.</li>
                  <li><strong>Spirituality:</strong> Prayer mats allow you to pray at various locations comfortably.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusions</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your journey to Badr transforms how you understand early Islamic struggles and victories. The best places to visit in Badar connect you deeply to the courage of 313 believers who changed history. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Ziarat Badar tour today with Haramain Umrah Taxi and walk where Prophet Muhammad (PBUH) secured Islam&apos;s first major victory.
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
