import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Taif Ziyarat Taxi Services & Private Car for Ziyarat in Taif",
  description:
    "Book Taif Ziyarat taxi services. Get Private cars to visit Taif Ziyarat places. You can also book a round trip from Makkah to Taif, Taif Ziyarat & return",
  alternates: {
    canonical: "/taif-ziyarat-taxi-services-ziyarat-in-taif/",
  },
  openGraph: {
    title: "Taif Ziyarat Taxi Services & Private Car for Ziyarat in Taif",
    description:
      "Book Taif Ziyarat taxi services. Get Private cars to visit Taif Ziyarat places. You can also book a round trip from Makkah to Taif, Taif Ziyarat & return",
    url: "/taif-ziyarat-taxi-services-ziyarat-in-taif/",
    type: "article",
    images: [
      {
        url: "/images/taif-ziyarat-taxi-services-private-car.webp",
        alt: "Taif Ziyarat Taxi Services & Private Car for Ziyarat in Taif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taif Ziyarat Taxi Services & Private Car for Ziyarat in Taif",
    description:
      "Book Taif Ziyarat taxi services. Get Private cars to visit Taif Ziyarat places. You can also book a round trip from Makkah to Taif, Taif Ziyarat & return",
    images: ["/images/taif-ziyarat-taxi-services-private-car.webp"],
  },
};

const post = {
  id: "taif-ziyarat-taxi-services-ziyarat-in-taif",
  title: "Taif Ziyarat Taxi Services & Private Car for Ziyarat in Taif",
  excerpt:
    "Book Taif Ziyarat taxi services. Get Private cars to visit Taif Ziyarat places. You can also book a round trip from Makkah to Taif, Taif Ziyarat & return",
  category: "taxi-guides",
  categoryName: "Taxi Guides",
  date: "2026-08-15",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/taif-ziyarat-taxi-services-private-car.webp",
};

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-[var(--green)] font-body font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            <article className="bg-[var(--bg)] border-2 border-t-[var(--gold)] border-b-[var(--green)] border-l-[var(--gold)] border-r-[var(--green)] rounded-2xl py-4 px-[10px] md:px-8 md:py-8 lg:px-12 lg:py-12 shadow-lg">
              <span className="inline-block px-4 py-1.5 bg-[var(--green)]/10 text-[var(--green)] font-body text-sm font-semibold rounded-full mb-4">
                {post.categoryName}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[var(--text-2)] font-body text-sm mb-8 pb-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[var(--gold)]" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
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

              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Taif is one of those places that pilgrims often add to their itinerary at the last minute and then come back wondering why they almost skipped it. The Prophet Muhammad ﷺ came here seeking support and faced one of the hardest days of his life. Every site you visit in Taif carries that weight.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Getting there from Makkah and doing the Ziyarat properly requires a vehicle you can actually trust for the day. Book Haramain Umrah Taxi and the whole trip works best when the car side of things is already sorted before you leave your hotel.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  What the Taif Ziyarat Covers?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A proper Taif Ziyarat is not one or two stops. It is a full day of moving between sites that matter. Masjid Abdullah bin Abbas, Masjid Al-Addas where the story of the young Christian servant who accepted Islam took place, the grave of Sayyiduna Abdullah bin Abbas, the Miqat at Qarn al-Manazil, the old walls of the city, Wadi Waj, and the mountain towns of Al-Hada and Al-Shafa on the road up.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Each site needs time, not a rushed five-minute stop. A good Taif Ziyarat taxi service understands that. Your driver waits at each location, knows where each site is without needing directions on the day. They keep the day moving at a pace that lets you absorb what you are seeing rather than rushing from one GPS pin to the next.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/what-the-taif-ziyarat-covers.webp"
                    alt="What the Taif Ziyarat covers"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Vehicles We Offer for Taif Ziyarat
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Not every group travels the same way, which is why Haramain Umrah Taxi keeps a proper range of vehicles ready for this route specifically.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Sedan for Taif Ziyarat
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  For solo travellers or a small group of two or three, a sedan handles the Makkah to Taif Ziyarat route comfortably. The mountain road is smooth and well-maintained, and a sedan gives you a simple, affordable private car option without paying for space you do not need.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  GMC for Taif Ziyarat
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The GMC is a favourite for small families and groups of four to six who want extra comfort over what a sedan offers. It is a proper 7-seater with real legroom and a quieter ride, which makes the drive up the mountain far more enjoyable. People who have done Taif Ziyarat in a GMC tend to say the drive itself was part of the experience.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Staria for Taif Ziyarat
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Staria is another strong option for families and small groups. Seven seats, modern interior, excellent AC, and a comfortable ride over the mountain road. A lot of pilgrims specifically request the Staria when they have elderly family members in the group who need that extra comfort during the drive.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Hiace and Hi-Roof for Taif Ziyarat
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  For groups of eight to twelve, the Hiace and Hi-Roof step in and handle the headcount without squeezing anyone. Enough room for the whole group, luggage, and any shopping or items picked up along the way in Taif, where the rose products and honey are genuinely hard to walk past.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Coaster for Taif Ziyarat Groups
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Bigger Ziyarat groups often come through Haramain Umrah Taxi needing a coaster, and this is where group travel to Taif makes the most practical sense. One vehicle, everyone together, one driver who knows every site, and a fare that splits very reasonably across eighteen passengers.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Makkah to Taif Ziyarat - What the Journey Looks Like
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Taif is about 75 to 85 kilometres from Makkah. The drive takes roughly 1.5 to 2 hours depending on the route and traffic. The road climbs steadily through mountain passes, and depending on which route your driver takes, the scenery can be genuinely striking, especially if you have not seen this part of Saudi Arabia before.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A full Taif Ziyarat day trip from Makkah typically runs around 8 to 10 hours door to door. That includes both routes of the drive and enough time at each site to visit properly without rushing.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Most pilgrims leave after Fajr and return to Makkah by evening, which gives a comfortable window for the full Ziyarat list without needing to hurry through any of it.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/makkah-to-taif-ziyarat-journey.webp"
                    alt="Makkah to Taif Ziyarat - what the journey looks like"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Why Your Driver Matters on This Route?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Taif Ziyarat is not a route where any driver will do. The sites are not all on main roads; some require local knowledge to find properly. A driver who has done this route many times is the difference between a Ziyarat that flows well and one that wastes half the day on wrong turns and confusion.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  All our drivers at Haramain Umrah Taxi know the Taif Ziyarat route. They know which order to visit the sites in, which roads to avoid at which times, and where to wait while you spend time at each location. That local knowledge genuinely matters when you are trying to make the most of a full day in Taif.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Booking Your Taif Ziyarat Taxi
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Reach out through WhatsApp or call us with your travel date, the number of people in your group, and your hotel name in Makkah. We will match you with the right vehicle and confirm your fare in the same conversation.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking a day or two ahead is recommended. During Ramadan and busy Umrah periods, Taif Ziyarat is a popular day trip. The coasters and Hiace vehicles fill up faster than most people expect. Sort your vehicle early and the day will take care of itself.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  <Link href="/book-now/" className="text-[var(--green)] font-semibold hover:underline">
                    Book your Taif Ziyarat taxi now
                  </Link>
                  {" "}or message us on{" "}
                  <a
                    href="https://wa.me/966598401594"
                    className="text-[var(--green)] font-semibold hover:underline"
                  >
                    WhatsApp
                  </a>
                  {" "}with your travel date, group size, and Makkah hotel name.
                </p>
              </div>

              <BlogNavigation currentPostId={post.id} />

              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                <div className="flex items-center justify-between">
                  <p className="text-[var(--text-2)] font-body font-semibold">Share this article</p>
                  <button
                    type="button"
                    aria-label="Share this article"
                    className="w-10 h-10 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
                  >
                    <Share2 size={18} />
                  </button>
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
