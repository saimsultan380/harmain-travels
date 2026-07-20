import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How Much Taxi Fare from Jeddah or Jeddah Airport to Madinah?",
  description:
    "You land at Jeddah, your bags are heavy, and you are running on maybe two hours of sleep from the flight. The only thing on your mind is getting to Madinah without getting overcharged.",
  alternates: {
    canonical: "/jeddah-or-jeddah-airport-to-madinah-taxi-fare/",
  },
  openGraph: {
    title: "How Much Taxi Fare from Jeddah or Jeddah Airport to Madinah?",
    description:
      "Find out the real taxi fare from Jeddah or Jeddah Airport to Madinah. We provide honest pricing for all vehicle types and what actually affects the price.",
    url: "/jeddah-or-jeddah-airport-to-madinah-taxi-fare/",
    type: "article",
    images: [
      {
        url: "/images/How Much Taxi Fare from Jeddah or Jeddah Airport to Madinah.png",
        alt: "How Much Taxi Fare from Jeddah or Jeddah Airport to Madinah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Taxi Fare from Jeddah or Jeddah Airport to Madinah?",
    description:
      "Find out the real taxi fare from Jeddah or Jeddah Airport to Madinah. We provide honest pricing for all vehicle types and what actually affects the price.",
    images: ["/images/How Much Taxi Fare from Jeddah or Jeddah Airport to Madinah.png"],
  },
};

const post = {
  id: "jeddah-or-jeddah-airport-to-madinah-taxi-fare",
  title: "How Much Taxi Fare from Jeddah or Jeddah Airport to Madinah?",
  excerpt:
    "You land at Jeddah, your bags are heavy, and you are running on maybe two hours of sleep from the flight. The only thing on your mind is getting to Madinah without getting overcharged.",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-07-20",
  readTime: "6 min read",
  author: "M Umar Irfan",
  image: "/images/How Much Taxi Fare from Jeddah or Jeddah Airport to Madinah.png",
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
                  You land at Jeddah, your bags are heavy, and you are running on maybe two hours of sleep from the flight. The only thing on your mind is getting to Madinah without getting overcharged by the first driver who waves you down. Or you are already settled in Jeddah city and just planning for the transfer. Either way, you have the same question. What is this going to cost?
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  So here it is, no rounding up, no &quot;starting from&quot;. Haramain Umrah Taxi has real numbers, real vehicles, and what actually affects the price.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Distance Between Jeddah and Madinah
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The distance between Jeddah and Madinah is roughly 400 to 420 kilometres. From Jeddah Airport, which is located in the north of the city, the distance to central Madinah near the Haram is very similar, sometimes slightly shorter depending on the route the driver takes.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Under normal traffic conditions, the drive takes around 4 to 5 hours. During Hajj season, Ramadan, and busy Umrah months when the highway fills up with vehicles, expect that to stretch closer to 5 to 6 hours.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It is a proper long-distance intercity journey, which is why having a comfortable and confirmed private car matters much more than people realise until they are sitting on that road past the fourth hour.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Distance Between Jeddah and Madinah.png"
                    alt="Distance Between Jeddah and Madinah"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Jeddah City to Madinah Taxi Fare
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A sedan, Camry or Sonata type, runs SAR 400 for up to three people. That is the baseline, and honestly, for a couple or a small group of three it is more than enough.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Bigger group? A minivan fits seven and comes to SAR 450, which, split five or six people, barely dents anyone&apos;s wallet. Hiace Microbus is SAR 550 for twelve seats. If you want something nicer, the Luxury GMC is SAR 830 and genuinely feels different: wider seats, quieter cabin, worth it on five hours. Coaster for eighteen people comes to SAR 850, and if your whole group is fifty, a full bus runs SAR 1,200.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Taxi Fare From Jeddah Airport To Madinah Specifically
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Same sedan price here too, SAR 400. Mini van SAR 450, Hiace SAR 550, GMC SAR 830, and the Coaster&apos;s a touch higher at SAR 880 on this particular route.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  One thing to flag: there is no full bus option straight from the airport. If you have got a massive group landing together, book the coaster early because during busy months it goes fast.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Which Vehicle Should You Book?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Solo traveler, or you and your partner, just get the sedan. SAR 400, done, no need to overthink it.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Family of four to seven, you should book a mini van every time. It is the sweet spot between comfort and cost. Groups of eight to twelve, go Hiace, keeps everyone in one car instead of splitting into two and playing phone tag on the highway.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Anything past that up to eighteen, the Coaster handles it fine. And if comfort matters more than saving a hundred riyals, the GMC&apos;s worth the upgrade, especially if someone in your group has back problems or just hates long car rides.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Which Vehicle Should You Book.png"
                    alt="Which Vehicle Should You Book"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Bus or Private Car, Which Should Be Booked
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Shared buses exist on this route and they are cheaper per seat on paper. But they run on their own schedule, stop wherever they feel like along the way, and do not care that your flight landed at 2 am and you just want to sleep in a hotel bed already.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Once you split a private car fare across five or six people, the price difference from a bus seat basically disappears.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You will not be waiting around for a departure time or sharing space with strangers for five hours. You leave when you are ready, go straight to the hotel, no stops you did not ask for.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Increase In Taxi Fare Prices
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ramadan and Hajj season is when things get tight. Everyone is trying to book at once, drivers know it, and prices creep up because demand is high. Booking last minute at the airport does not help either. Drivers there know you are tired and in a hurry, and some will quote whatever they think you will pay. Lock your fare in beforehand and that number does not move, no matter how busy the road gets or how long the drive ends up taking.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Ready to Book?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  WhatsApp us your pickup spot, travel date, flight info if you have it, how many people, and where you are staying in Madinah. We will confirm the car and lock the price right there in the chat, nothing complicated about it.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Coming back from Madinah later in the trip too? Just book both routes now so you are not scrambling for a ride again while you are already exhausted from everything else going on.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Reach out to Haramain Umrah Taxi and get it sorted before you even leave home.
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
