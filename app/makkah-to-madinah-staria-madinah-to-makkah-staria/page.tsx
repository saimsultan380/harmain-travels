import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Makkah to Madinah Staria | Madinah to Makkah Staria - 7-seater",
  description:
    "Book a 7-seater Hyundai Staria for Makkah to Madinah or Madinah to Makkah. Spacious cabin, fixed fare from SAR 450. Reserve with Haramain Umrah Taxi!",
  alternates: {
    canonical: "/makkah-to-madinah-staria-madinah-to-makkah-staria/",
  },
  openGraph: {
    title: "Makkah to Madinah Staria | Madinah to Makkah Staria - 7-seater",
    description:
      "Book a 7-seater Hyundai Staria for Makkah to Madinah or Madinah to Makkah. Spacious cabin, fixed fare from SAR 450. Reserve with Haramain Umrah Taxi!",
    url: "/makkah-to-madinah-staria-madinah-to-makkah-staria/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makkah to Madinah Staria | Madinah to Makkah Staria - 7-seater",
    description:
      "Book a 7-seater Hyundai Staria for Makkah to Madinah or Madinah to Makkah. Spacious cabin, fixed fare from SAR 450. Reserve with Haramain Umrah Taxi!",
  },
};

const post = {
  id: "makkah-to-madinah-staria-madinah-to-makkah-staria",
  title: "Makkah to Madinah Staria | Madinah to Makkah Staria - 7-seater",
  excerpt:
    "Book a 7-seater Hyundai Staria for Makkah to Madinah or Madinah to Makkah. Spacious cabin, fixed fare from SAR 450. Reserve with Haramain Umrah Taxi!",
  category: "taxi-guides",
  categoryName: "Taxi Guides",
  date: "2026-07-16",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/Makkah to Madinah Staria  Madinah to Makkah Staria - 7-seater.webp",
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
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you have done the Makkah to Madinah drive before in a packed minivan, you already know what five hours in a tight space with luggage piled around you feels like. Nobody enjoys it. You arrive stiff, tired, and slightly irritated, which is not how anyone wants to show up in either of these two cities.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  That is the problem the Staria solves. Haramain Umrah Taxi added it to the fleet because pilgrims kept asking for something between a regular sedan and a big Hiace. It is something with proper room, proper seats, and a cabin that does not feel like everyone is sitting on top of each other for half a day.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Features of Staria
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Hyundai Staria is a seven-seater premium MPV. In plain terms, it is a people carrier that was designed with actual comfort in mind, not just maximum headcount. Every seat has real legroom. The headroom throughout the cabin is generous enough that taller passengers are not hunching.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The interior is noticeably quieter than most vehicles on these roads. AC does its job properly even when Saudi temperatures are doing their worst outside.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It also looks different from the usual taxi options you see parked outside hotels in Makkah and Madinah. Staria is low and modern on the outside, calm and spacious on the inside. For a journey that takes five to six hours, that interior quality is not a small thing.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Makkah to Madinah Staria
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The drive from Makkah to Madinah is around 450 kilometres. On a good traffic day, you are looking at 4.5 hours. On a busier day, closer to 6. That is a lot of time to spend sitting down. The condition of your vehicle starts to matter a lot more around the three-hour mark, with another two hours to go.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Most pilgrims doing this route are heading to Madinah after completing their time in Makkah. Umrah done, final Tawafs done, and now they want to spend days near the Prophet&apos;s Mosque before flying home. They are usually already running on limited sleep when they get in the car. The last thing they need is a cramped, noisy ride on top of that.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Makkah to Madinah Staria at Haramain Umrah Taxi gives everyone in the group real space to settle in, recline properly, and rest for the journey. For families with children, this is not a luxury; it is genuinely what makes the trip manageable.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Madinah to Makkah Staria
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Same road, other direction. Same distance, same travel time, same logic applies. Pilgrims heading back from Madinah to Makkah, whether for one last Umrah, final Tawaf, or simply passing through before flying from Jeddah, all need the same thing on this route.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Staria is a vehicle they can trust, with enough room that the journey does not wear them out before they arrive.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Madinah to Makkah Staria fare at Haramain Umrah Taxi is confirmed at the time of booking. What you are quoted is what you pay when you get in the car. No revisions when the driver arrives, no conversation about extra charges for luggage. Just the price agreed and that is that.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How Does the Staria Fare Work for Groups?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Makkah to Madinah Staria fare is 450 SAR. It may shift slightly depending on travel dates, the season, and specific pickup locations. What we do is confirm your exact fare before you travel, and it does not change after that.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Staria falls between a standard sedan and a Hiace in price. This fare is more than a three-seater, which makes complete sense given you are getting seven seats and considerably more comfort.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  But for a group of five, six, or seven people splitting the cost between them, the per-person figure often ends up very close to what a sedan would have cost per head anyway. The experience will be genuinely better for everyone.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/How Does the Staria Fare Work for Groups.webp"
                    alt="How Does the Staria Fare Work for Groups"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Why the 7-Seater Staria Beats Booking Two Sedans?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The logic of booking two separate sedans to avoid paying for a bigger vehicle actually does not hold up most of the time. Two sedan fares added together usually cost more than a single Staria booking. On top of that, you are coordinating two drivers, splitting your group across two separate cars, and dealing with the logistics of that for a five-hour intercity drive.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  One Staria keeps everyone together. Parents with children, friends who want to talk, families who do not want to separate their luggage across two boots. It is simpler in every way and usually cheaper overall when you do the actual maths.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Book Your Staria with Haramain Umrah Taxi
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Getting in touch is simple. WhatsApp us or call with your route, date, number of passengers, and hotel details. We confirm your Staria and lock in the fare in the same conversation. Your driver is assigned, and everything is set before your travel day arrives.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  During Ramadan and Hajj season, the Staria books up faster than any other vehicle on this route. If your trip falls in either of those periods, reach out a few days ahead rather than the night before. Leaving it late during peak months usually means the vehicle is already taken and we have to offer alternatives.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Get in touch with Haramain Umrah Taxi and sort your Staria before the trip rather than after you land.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Book Your Staria with Haramain Umrah Taxi.webp"
                    alt="Book Your Staria with Haramain Umrah Taxi"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <BlogNavigation currentPostId={post.id} />

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
