import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Compass, Mountain, History, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "List of Best Places to Visit in AlUla & AlUla Ziyarat Tours",
  description: "Explore the best places to visit in AlUla with guided Ziyarat tours. Ancient tombs, rock formations & sacred sites await in Saudi Arabia. Book your AlUla tour today!",
  alternates: {
    canonical: "/best-places-alula-ziyarat-alula/",
  },
  openGraph: {
    title: "List of Best Places to Visit in AlUla & AlUla Ziyarat Tours",
    description: "Explore the best places to visit in AlUla with guided Ziyarat tours. Ancient tombs, rock formations & sacred sites await in Saudi Arabia. Book your AlUla tour today!",
    url: "/best-places-alula-ziyarat-alula/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "List of Best Places to Visit in AlUla & AlUla Ziyarat Tours",
    description: "Explore the best places to visit in AlUla with guided Ziyarat tours. Ancient tombs, rock formations & sacred sites await in Saudi Arabia. Book your AlUla tour today!",
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
                  AlUla is not just another tourist destination. It is a journey through 7,000 years of human history waiting to captivate your soul. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Whether you&apos;re a history enthusiast, adventure seeker, or spiritual traveler exploring Saudi Arabia beyond Makkah and Madinah, AlUla Saudi Arab tourism offers something truly extraordinary. From UNESCO World Heritage sites to stunning desert landscapes, explore the top attractions with Haramain Umrah Taxi.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Here is our complete list of the best places to visit in AlUla that will transform your understanding of Saudi Arabia&apos;s incredible heritage:
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
                    <p className="text-sm text-[var(--text-2)]">See the world&apos;s largest mirrored building, Maraya, in the heart of the desert.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. Hegra (Madain Saleh)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Hegra.png"
                    alt="Hegra (Madain Saleh)"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Hegra is Saudi Arabia&apos;s first UNESCO World Heritage Site and arguably the crown jewel of AlUla&apos;s attractions. The Stone features over 110 remarkably preserved Nabataean tombs carved directly into towering sandstone cliffs. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The intricate facades display elaborate carvings, inscriptions, and designs that tell stories of the Nabataean civilization from 2,000 years ago. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The site opens daily, and we recommend visiting during early morning or late afternoon when softer light enhances the natural beauty. Guided tours provide essential context about the Nabataean culture, trade routes, and burial customs.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Elephant Rock (Jabal AlFil)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Elephant-Rock.png"
                    alt="Elephant Rock"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Elephant Mountain stands as AlUla&apos;s most photographed natural wonder. Wind and water erosion sculpted this massive sandstone formation over millennia into an uncanny resemblance to an elephant, complete with a trunk. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The site transforms into a vibrant social space as evening approaches. Visitors gather around fire pits, enjoy food from the SALT truck, and watch the rock glow under sunset light. The surrounding area includes ancient inscriptions and petroglyphs that add historical depth to the geological spectacle. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Photography enthusiasts particularly love this location during golden hour, when warm light creates stunning contrasts against the desert landscape.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. Maraya - Hall of Mirrors</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Maraya.png"
                    alt="Maraya - Hall of Mirrors"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Maraya, meaning &quot;mirror&quot; in Arabic, holds the Guinness World Record as the world&apos;s largest mirrored building. This architectural marvel sits in Ashar Valley, where 9,740 mirrored panels reflect AlUla&apos;s surrounding mountains and desert beauty. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The building seemingly disappears into the landscape from certain angles, creating an optical illusion that mesmerizes visitors. Inside, the venue hosts world-class performances, art exhibitions, and cultural programs throughout the year. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. AlUla Oasis</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AlUla-Oasis.png"
                    alt="AlUla Oasis"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The AlUla Oasis offers a striking contrast to the surrounding desert landscapes. This lush agricultural area has sustained communities for thousands of years through ingenious irrigation systems. Date palms, citrus trees, and traditional farms create a green ribbon through the valley. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Heritage Oasis Trail guides visitors through working farms where families still practice traditional agriculture passed down through generations. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You will learn about ancient water management techniques, see heritage crops, and understand how life thrived in desert environments. Local families sometimes offer fresh dates and traditional hospitality along the route. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. AlMansheyah Square (Al Mansheyah Plaza)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AlMansheyah-Square.png"
                    alt="AlMansheyah Square"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Al Mansheyah Square serves as AlUla&apos;s modern social and cultural hub. This beautifully designed plaza blends contemporary architecture with traditional elements, creating a welcoming public space. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Cafes, restaurants, and shops surround the square, offering local cuisine, crafts, and artwork. The plaza feels alive during evenings when families gather, street performers entertain, and the atmosphere buzzes with energy. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Regular cultural events, markets, and festivals take place here throughout the year. The architecture incorporates traditional Hijazi design elements while providing modern amenities. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">6. Sharaan Nature Reserve</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Sharaan-Nature-Reserve.png"
                    alt="Sharaan Nature Reserve"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Sharaan Nature Reserve protects AlUla&apos;s unique desert ecosystem and serves as a haven for endangered Arabian wildlife. The reserve focuses on reintroducing species like the Arabian leopard to their natural habitat. Dramatic rock formations create a stunning backdrop for nature walks and wildlife observation. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Trained guides lead educational tours explaining conservation efforts, local flora and fauna, and the delicate desert ecosystem. The reserve prohibits general vehicle access to protect wildlife, but designated trails allow visitors to explore responsibly.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">7. Mount Ikmah (Jabal Ikmah)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Mount-Ikmah.png"
                    alt="Mount Ikmah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Mount Ikmah earns its nickname &quot;Open-Air Library&quot; through hundreds of ancient inscriptions carved into rock faces. These texts span multiple languages, including Dadanitic, Lihyanite, and ancient Arabic scripts dating back thousands of years. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Archaeologists continue studying these texts to unlock secrets about pre-Islamic Arabian societies. Guided tours with experts help visitors understand the significance of various inscriptions. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">8. Dadan and the Ancient Kingdoms</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Dadan-and-the-Ancient-Kingdoms.png"
                    alt="Dadan and the Ancient Kingdoms"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Dadan served as the capital city for successive Dadanite and Lihyanite kingdoms. The archaeological site reveals well-preserved ruins, including tombs carved into red sandstone cliffs, ancient inscriptions, and artifacts showcasing sophisticated urban planning. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The famous Lion Tombs feature carved lion statues that symbolized power and protection in ancient Arabian culture. Walking through Dadan connects you with history predating even the Nabataeans, offering rare glimpses into ancient Arabian society.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">9. Dadan Culinary Arts Center</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Dadan-Culinary-Arts-Center.png"
                    alt="Dadan Culinary Arts Center"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Dadan Culinary Arts Center celebrates traditional Saudi Arabian cuisine through immersive dining experiences. This unique venue combines exceptional food with cultural education about regional culinary traditions. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Chefs prepare authentic dishes using centuries-old recipes and locally sourced ingredients. The center offers cooking classes where visitors learn to make traditional bread, prepare aromatic spice blends, and master Saudi cooking techniques. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">10. Harrat Viewpoint (Al Harrah)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Harrat-Viewpoint.png"
                    alt="Harrat Viewpoint"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Al Harrah viewpoint provides spectacular panoramic views across AlUla&apos;s valleys, rock formations, and desert expanse. The elevated position showcases the dramatic contrast between red sandstone cliffs and green oasis valleys. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Sunrise and sunset transform the landscape with constantly shifting light and colors. The viewpoint includes comfortable seating areas and photography platforms perfect for capturing AlUla&apos;s grandeur. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">11. Husaak Adventure Center</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Husaak-Adventure-Center.png"
                    alt="Husaak Adventure Center"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Husaak Adventure Center offers adrenaline-pumping activities for adventure seekers. Options include rock climbing on natural sandstone formations, abseiling down cliff faces, zip-lining across valleys, mountain biking through desert trails, and guided canyon hikes. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Professional instructors ensure safety while helping participants challenge themselves physically. Booking adventures adds exciting variety to historical and cultural sightseeing. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">12. Wadi Ashar (Ashar Valley)</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Wadi-Ashar-Ashar-Valley.png"
                    alt="Wadi Ashar"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Wadi Ashar showcases AlUla&apos;s most dramatic natural scenery with towering canyon walls and winding valley floors. The valley hosts Maraya and provides hiking trails through stunning rock formations. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The changing light throughout the day creates endless photography opportunities as shadows play across canyon walls. Traditional Bedouin camps sometimes welcome visitors for authentic desert experiences.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">13. Khaybar and Tayma</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Khaybar-and-Tayma.png"
                    alt="Khaybar and Tayma"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Khaybar and Tayma make excellent day trips from AlUla. Khaybar features ancient fortresses, historic battlefields significant in Islamic history, and volcanic landscapes. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Tayma boasts archaeological sites dating to prehistoric times, including Bir Haddaj (one of Arabia&apos;s largest ancient wells), pre-Islamic inscriptions, and ruins of ancient civilizations. 
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Haramain Umrah Taxi for AlUla Ziyarat?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi provides services to visit the best places in AlUla and AlUla Ziyarat. Here&apos;s why you should choose us:
                </p>
                <ul className="list-disc pl-6 mb-8 text-[var(--text-2)] space-y-2">
                  <li><strong>Local Expertise:</strong> Our drivers know every route, hidden spot, and the best timing to visit each attraction without crowds.</li>
                  <li><strong>Fixed Pricing:</strong> You see the exact fare upfront with no hidden charges or surprise fees at journey&apos;s end.</li>
                  <li><strong>Comfortable Fleet:</strong> Choose from sedans to buses, all well-maintained with air conditioning, perfect for desert heat.</li>
                  <li><strong>Flexible Scheduling:</strong> We adapt to your pace, whether you want quick photo stops or hours exploring each site.</li>
                  <li><strong>Multilingual Drivers:</strong> Our team speaks Arabic, English, and Urdu to eliminate communication barriers during your tour.</li>
                  <li><strong>24/7 Availability:</strong> Book sunrise visits to Elephant Rock or an evening at Maraya, we are ready anytime.</li>
                  <li><strong>Group Friendly:</strong> We accommodate solo travelers through large families with vehicles sized perfectly for your party.</li>
                  <li><strong>Door-to-Door Service:</strong> Pickup from your hotel and drop-off at each attraction with no parking hassles.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our AlUla ziyarat tours provide comfortable, reliable transportation to every location mentioned above. We understand that AlUla ziyarat requires knowledgeable drivers who respect the historical and spiritual significance of these sites. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our vehicles accommodate groups of all sizes, from solo travelers to large family parties. Fixed-rate pricing eliminates surprises, and our drivers&apos; local expertise ensures you do not waste precious time getting lost or searching for landmarks. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Contact Haramain Umrah Taxi today to book your customized AlUla tours and experience this extraordinary destination with complete peace of mind.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-8 mt-12">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-[var(--bg-alt)] p-6 rounded-xl border border-[var(--border)]">
                    <h3 className="font-heading font-bold text-[var(--text-1)] mb-3">How many days should I spend in AlUla?</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed">
                      You should spend 3-4 days in AlUla, which allows sufficient time to explore the major attractions like Hegra, Elephant Rock, Old Town, and the surrounding natural landscapes. This timeframe gives you flexibility to take guided tours, enjoy outdoor activities, and experience the local dining scene without feeling rushed.
                    </p>
                  </div>
                  <div className="bg-[var(--bg-alt)] p-6 rounded-xl border border-[var(--border)]">
                    <h3 className="font-heading font-bold text-[var(--text-1)] mb-3">What is the best time of year to visit AlUla?</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed">
                      The ideal time to visit AlUla is from November to February during the winter months, when temperatures are more comfortable for outdoor exploration.
                    </p>
                  </div>
                  <div className="bg-[var(--bg-alt)] p-6 rounded-xl border border-[var(--border)]">
                    <h3 className="font-heading font-bold text-[var(--text-1)] mb-3">What is AlUla famous for?</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed">
                      AlUla is renowned for Hegra, Saudi Arabia&apos;s first UNESCO World Heritage Site, featuring over 100 intricately carved Nabatean tombs in sandstone cliffs.
                    </p>
                  </div>
                  <div className="bg-[var(--bg-alt)] p-6 rounded-xl border border-[var(--border)]">
                    <h3 className="font-heading font-bold text-[var(--text-1)] mb-3">Is AlUla expensive to visit?</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed">
                      AlUla is moderately to very expensive, with luxury resorts ranging from $300 to $500 per night, while budget accommodations start around $110.
                    </p>
                  </div>
                  <div className="bg-[var(--bg-alt)] p-6 rounded-xl border border-[var(--border)]">
                    <h3 className="font-heading font-bold text-[var(--text-1)] mb-3">Why was AlUla abandoned?</h3>
                    <p className="text-[var(--text-2)] text-sm leading-relaxed">
                      AlUla Old Town was continuously inhabited for 800 years until the 1980s, when residents relocated to a modern town nearby. The cramped medieval architecture and poor infrastructure could not meet 20th-century standards, prompting the abandonment.
                    </p>
                  </div>
                </div>
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
