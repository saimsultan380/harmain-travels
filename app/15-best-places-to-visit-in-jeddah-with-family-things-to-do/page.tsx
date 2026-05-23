import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Waves, Palmtree, ShoppingBag, Landmark } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "15 Best Places to Visit in Jeddah with Family | Things to Do",
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
                  Your family deserves unforgettable memories beyond your spiritual journey. Jeddah welcomes you with stunning Red Sea views, rich history, and modern attractions perfect for all ages. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We will show you the best places to visit in Jeddah that blend culture, entertainment, and relaxation for your complete family experience. Here is a list of a few must-visit places in Jeddah.
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

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">1. New Corniche Jeddah - Waterfront Paradise</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/New-Corniche-Jeddah-Waterfront-Paradise.png"
                    alt="New Corniche Jeddah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The new corniche Jeddah stretches 30 kilometers along the Red Sea coastline. You will find this stunning promenade perfect for evening family walks. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The area transformed into a world-class destination with modern facilities and breathtaking views. Your family can cycle on dedicated bike paths or jog along the waterfront. Children play safely in designated zones while you relax on benches. The Jeddah New Corniche features beautiful sculptures, dancing fountains, and palm-lined walkways.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">2. Jeddah Waterfront Park - Family Recreation Hub</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Jeddah-Waterfront-Park-Family-Recreation-Hub.png"
                    alt="Jeddah Waterfront Park"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Jeddah waterfront park occupies 730,000 square meters of beautifully designed space. You will discover landscaped gardens, children&apos;s play areas, and comfortable seating throughout. This public park welcomes families 24 hours a day with free entry.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your kids enjoy water games designed specifically for them. The park includes 13 commercial kiosks and restaurants serving delicious food. Free Wi-Fi and phone charging stations keep you connected.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">3. King Fahd&apos;s Fountain - World&apos;s Tallest Wonder</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/King-Fahds-Fountain-Worlds-Tallest-Wonder.png"
                    alt="King Fahd's Fountain"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should witness engineering magnificence at King Fahd&apos;s Fountain. This iconic landmark shoots water 312 meters into the sky, the world&apos;s highest fountain. Built in 1985, it symbolizes Jeddah&apos;s modernity and innovation.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  During daylight, you see the massive water column reaching incredible heights. After sunset, 500 LED lights illuminate the fountain in spectacular colors. Your family will remember this sight forever as one of the most impressive places to visit in Jeddah with family.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">4. Al-Balad Historic District - UNESCO Heritage Site</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Al-Balad-Historic-District-UNESCO-Heritage-Site.png"
                    alt="Al-Balad Historic District"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Step back centuries in Al-Balad, Jeddah&apos;s ancient heart. This UNESCO World Heritage Site showcases traditional Hijazi architecture with coral-stone buildings. You will walk through narrow alleys where history lives in every corner.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The famous Nassif House Museum displays Ottoman-style architecture beautifully. Your children discover how wealthy families lived centuries ago. Evening visits under fairy lights create magical experiences.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">5. Al Rahma Mosque - The Floating Mosque</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Al-Rahma-Mosque.png"
                    alt="Al Rahma Mosque"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You will marvel at this architectural masterpiece, appearing to float on water. Al Rahma Mosque, also called the Floating Mosque, sits on stilts over the Red Sea. During high tide, waves surround the white structure, creating illusions of floating.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The mosque features elegant Islamic designs with a turquoise dome. You find spiritual peace praying here with stunning sea views. It&apos;s among the best places to visit in Jeddah, combining faith and beauty.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">6. Fakieh Aquarium - Marine Life Discovery</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Fakieh-Aquarium-Marine-Life-Discovery.png"
                    alt="Fakieh Aquarium"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your children&apos;s eyes light up at Fakieh Aquarium&apos;s underwater wonders. This family-favorite attraction houses over 200 marine species, including sharks, stingrays, and exotic fish. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Interactive touch pools let children gently handle starfish under supervision. The air-conditioned galleries provide comfortable exploration during hot afternoons. This ranks high among things to do in Jeddah for educational entertainment.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">7. Al Shallal Theme Park - Adrenaline and Fun</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Al-Shallal-Theme-Park-Adrenaline-and-Fun.png"
                    alt="Al Shallal Theme Park"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You experience the Middle East&apos;s largest theme park at Al Shallal. Spread across 60,000 square meters, it features over 30 thrilling rides. The park is divided into Arabic, American, French, and Italian themed zones.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Teens test courage on the Scorpion roller coaster with heart-stopping loops. Younger children enjoy gentle carousels, teacups, and mini trains safely. This represents exciting places to visit in Jeddah with family, offering full-day entertainment.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">8. Red Sea Mall - Shopping and Entertainment</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Red-Sea-Mall.png"
                    alt="Red Sea Mall"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You escape the heat at Red Sea Mall, one of Jeddah&apos;s premier shopping destinations. Located near the corniche, it houses luxury international brands and local stores. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your children enjoy the expansive Kids Zone with arcade games and indoor amusement rides. This comfortable environment makes it ideal for places to visit in Jeddah at night when the outdoor heat subsides.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">9. Tahlia Mall Jeddah</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Tahlia-Mall-Jeddah.png"
                    alt="Tahlia Mall Jeddah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Tahlia Mall Jeddah sits on the famous Tahlia Street, Jeddah&apos;s premier shopping district. You will find high-end boutiques alongside popular chain stores. The mall attracts families seeking quality products in comfortable settings.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">10. Mall of Arabia - Largest Shopping Destination</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Mall-of-Arabia-Largest-Shopping-Destination.png"
                    alt="Mall of Arabia"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can enter Saudi Arabia&apos;s biggest mall, the Mall of Arabia. Spanning 261,000 square meters, it houses over 400 stores. Home to KidZania, it provides children with role-play experiences in a kid-sized city.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">11. Jeddah International Exhibition & Convention Center</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Jeddah-International-Exhibition-Convention-Center.png"
                    alt="Jeddah International Exhibition & Convention Center"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Jeddah International Exhibition & Convention Center hosts various events throughout the year. You might catch cultural exhibitions, trade shows, or family festivals during your visit.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">12. Silver Sands Beach</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Silver-Sands-Beach.png"
                    alt="Silver Sands Beach"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should discover a peaceful escape at Silver Sands Beach. This private beach offers family-safe swimming with lifeguard supervision. Gentle waves make it perfect for young swimmers learning water skills.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">13. Athr Gallery - Contemporary Art Experience</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Athr-Gallery-Contemporary-Art-Experience.png"
                    alt="Athr Gallery"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can explore Saudi Arabia&apos;s contemporary art scene at Athr Gallery on Tahlia Street. The gallery spans 1,800 square meters across multiple exhibition spaces. You will witness diverse artistic expressions from local and international artists.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">14. Obhur Corniche - Northern Beach Area</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Obhur-Corniche-Northern-Beach-Area.png"
                    alt="Obhur Corniche"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You venture to the Obhur Creek area north of central Jeddah. This quieter corniche section offers pristine beaches and water sports facilities. Your family enjoys less crowded environments here.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">15. Jeddah Yacht Club & Marina - Luxury Waterfront</h2>
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Jeddah-Yacht-Club-Marina-Luxury-Waterfront.png"
                    alt="Jeddah Yacht Club & Marina"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must experience maritime luxury at Jeddah&apos;s yacht clubs and marinas. The waterfront restaurants serve international cuisine with stunning sunset views. This represents a premium place to visit in Jeddah at night for special occasions.
                </p>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <Palmtree className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Why Visit Jeddah with Family?</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Jeddah stands as Saudi Arabia&apos;s vibrant coastal gateway. The city offers a perfect balance between spiritual significance and family fun. You can explore Islamic history one day and enjoy waterfront activities the next.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Jeddah offers your family incredible experiences beyond spiritual journeys. From the stunning Jeddah waterfront park to thrilling Al Shallal rides, every attraction creates lasting memories. The places to visit in Jeddah blend culture, entertainment, and relaxation perfectly.
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
