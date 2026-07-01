import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "List of 9 Top Islamic Ziyarat & Historical Places in Taif",
  description: "Discover 9 must-visit Islamic Ziyarat sites in Taif. Explore Prophet Muhammad's sacred journey, ancient mosques & blessed valleys. Book your Taif tour now!",
  alternates: {
    canonical: "/top-islamic-ziyarat-taif/",
  },
  openGraph: {
    title: "List of 9 Top Islamic Ziyarat & Historical Places in Taif",
    description: "Discover 9 must-visit Islamic Ziyarat sites in Taif. Explore Prophet Muhammad's sacred journey, ancient mosques & blessed valleys. Book your Taif tour now!",
    url: "/top-islamic-ziyarat-taif/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "List of 9 Top Islamic Ziyarat & Historical Places in Taif",
    description: "Discover 9 must-visit Islamic Ziyarat sites in Taif. Explore Prophet Muhammad's sacred journey, ancient mosques & blessed valleys. Book your Taif tour now!",
  },
};

const post = {
  id: "top-islamic-ziyarat-taif",
  title: "List of 9 Top Islamic Ziyarat & Historical Places in Taif",
  excerpt: "Discover 9 must-visit Islamic Ziyarat sites in Taif. Explore Prophet Muhammad's sacred journey, ancient mosques & blessed valleys. Book your Taif tour now!",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-05-23",
  readTime: "13 min read",
  author: "M Umar Irfan",
  image: "/images/list-of-9-top-islamic-ziyarat.jpeg",
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
                  Your Umrah journey holds more than you imagine. Just 90 kilometers from Makkah is a mountain city soaked in tears, blood, and ultimately, divine mercy. Prophet Muhammad (PBUH) faced his darkest day here when people stoned him until blood filled his shoes.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Yet this same place became a gateway to Islam's expansion. We will tell you about the Taif ziyarat places where pain transformed into patience and rejection turned into victory.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Masjid Addas - Symbol of A Slave's Compassion</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should stand where humanity conquered pride. After brutal rejection, a Christian slave named Addas showed our bleeding Prophet the kindness his own people denied him.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Addas served grapes to the wounded messenger. The Prophet said, "Bismillah" before eating. That single word puzzled Addas because nobody in Arabia spoke like this. Their conversation sparked immediate recognition in his heart. Islam gained a new believer through simple kindness.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The mosque is in the original garden where this meeting happened. Ancient trees still grow here, descendants of the vines that once fed our Prophet. You can pray where rejection met mercy, where a slave became a brother.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This remains essential among historical places in Taif because it proves that Allah's plan works through unexpected people.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Masjid Abdullah ibn Abbas</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must discover Taif's oldest mosque, built by the Prophet's cousin. Abdullah ibn Abbas (RA) led Taif's community after the city embraced Islam. He taught Quranic interpretation here for decades.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The mosque preserves its ancient character despite renovations. Original stonework remains visible in foundation sections. You pray where companions once stood, learning directly from the Prophet's family.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ibn Abbas later became known as "the ocean of knowledge." His teachings spread across the Muslim world from this very spot. The mosque represents a transformation from a city that rejected truth to one that spread it globally.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6 italic">
                  Note - Visit during Fajr when the mountain air feels pure and the atmosphere invites deep reflection.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Al Hada Mountain</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must climb where the Prophet (PBUH) fled from attacking mobs. Al Hada's rocky terrain provided cover as stones rained down on him. Blood soaked into this mountain's soil that terrible day.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The mountain offers panoramic views of the Taif valley below. You see the entire city that once refused to listen. Standing here makes you feel the Prophet's isolation, his physical pain, his emotional devastation.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Yet he prayed for their guidance, not their destruction. He asked Allah to guide their children even if the parents remained stubborn. This mountain witnessed the greatest display of prophetic mercy in Islamic history.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Masjid al-Kuhaf - Cave of Refuge</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should enter the cave where Prophet Muhammad (PBUH) rested after escaping the mob. Exhausted, bleeding, and heartbroken, he sat here contemplating his mission's future.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Angel Jibreel appeared, offering to crush Taif between two mountains if the Prophet wished. Instead, our beloved messenger chose hope over revenge. He told the angel he expects their descendants to worship Allah alone.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The mosque built around this cave preserves the exact refuge spot. You can sit in the same space where the greatest decision of mercy was made. The cave feels small, intimate, and sacred beyond description.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Taif National Park</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should breathe the mountain air in parks where Prophet Muhammad (PBUH) walked. Taif's elevation brings cooler temperatures and lush greenery rare in the Arabian Peninsula.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The park contains walking trails through rose gardens. Taif produces the world's finest rose oil, continuing a tradition from the Islamic golden ages. You can purchase authentic Taif rose products from local vendors.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Families enjoy picnic spots with stunning valley views. Children play safely while adults rest after visiting intense emotional sites. The park balances your spiritual journey with natural peace.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">6. Shubra Palace - Ottoman Heritage</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We recommend that you explore Taif's grandest historical structure, built in 1905. While not directly from the Prophet's time, this palace showcases historical places in Taif from the Ottoman era.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The palace served as King Abdulaziz's summer residence. Its unique architecture blends Roman columns with traditional Arabian design.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The museum inside displays artifacts, photographs, and historical documents. This adds cultural depth to your Taif ziyarat places tour, showing Islam's architectural legacy through the centuries.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">7. Al-Khudari Mosque - Ancient Minaret</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You find one of Taif's oldest surviving mosques tucked in the historic quarter. Al-Khudari Mosque showcases traditional Hijazi architecture with its distinctive mud-brick minaret standing for centuries.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The structure underwent careful restoration, preserving its original character and historical authenticity. Local elders maintain continuous worship traditions that their ancestors started generations ago.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can see hand-carved inscriptions detailing the mosque's construction history on weathered walls. The ancient ablution facilities are carved from local stone, showing masterful craftsmanship.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">8. Shifa Valley - Healing Waters</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You discover this blessed valley named for its legendary healing properties. Shifa Valley contains natural springs where residents have collected water for centuries, believing in their curative blessings. The valley is near where Prophet Muhammad (PBUH) walked during his difficult Taif visit.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can hike rocky terrain surrounded by mountain peaks with rare vegetation fed by underground springs. Local families picnic here, enjoying cooler mountain temperatures and trickling water sounds.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The peaceful atmosphere offers spiritual refreshment after visiting emotionally intense ziyarat places in Taif.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">9. Taif's Ancient Walls and Gates</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You walk along defensive wall remnants that once protected Taif from invaders. These fortifications witnessed the siege when Prophet Muhammad (PBUH) returned with Muslim forces before Taif peacefully accepted Islam.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Several original gates still stand, including Bab al-Haram and Bab Sherif, marking historic entry points. You can touch stones that have been defended against multiple conflicts throughout centuries.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  These fortifications complete your Taif ziyarat understanding from military-historical perspectives. Early morning walks offer stunning views before tourist crowds arrive.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Visit Ziyarat in Taif?</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ziyarat in Taif means walking where the Prophet (PBUH) walked during his most difficult days. You discover how rejection transformed into victory through patience and trust in Allah.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The taif ziyarat list includes mosques, valleys, and mountains that witnessed pivotal Islamic moments. Each location teaches resilience, mercy, and complete reliance on divine wisdom. Your spiritual journey extends beyond rituals when you explore these blessed sites.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Understanding ziyarat places in Taif helps you appreciate early Muslims' sacrifices. You will return home with deeper faith and a stronger connection to Islamic history.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your faith deepens when you walk where prophets walked during their hardest trials. The taif ziyarat list takes you beyond comfort into spaces of profound sacrifice and mercy. From Masjid Addas to Wadi Waj, each location teaches patience through the Prophet's example.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  At Haramain Umrah Taxi, we make your Taif journey comfortable and meaningful. Our knowledgeable drivers guide you through all major historical places in Taif with authentic insights.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book your tour today and discover how rejection transformed into Islam's greatest expansion story.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">FAQs</h2>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">What is Taif famous for in Islam?</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Taif is famous for the Prophet Muhammad's (PBUH) journey in 619 CE when he sought support for Islam but faced rejection and persecution. The Angel Jibreel appeared, offering to destroy the city, but the Prophet showed mercy and prayed for the people's guidance.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Where is the prophet's stone in Taif?</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Prophet's stone is located at Masjid Al-Kif in Taif, where Prophet Muhammad (PBUH) sought refuge. This sacred site marks where he rested against a rock, and visitors can still see the historical mosque commemorating this significant Islamic event today.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">What is the history of Masjid e Ali in Taif?</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Masjid Ali marks where Hazrat Ali (RA) led prayers during early Islamic times and served as a gathering place for companions. The mosque played a role in spreading Islam throughout the Taif region during the faith's formative years.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Why is Taif called Taif?</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Taif derives its name from the Arabic word meaning "encircling wall" or "surrounding barrier." The Banu Thaqif tribe built a protective stone wall around the city in pre-Islamic times to defend against invasions. This distinctive fortification gave the city its name, reflecting its historical importance as a fortified mountain settlement.
                </p>
              </div>

              {/* Blog Navigation */}
              <BlogNavigation currentPostId={post.id} />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}