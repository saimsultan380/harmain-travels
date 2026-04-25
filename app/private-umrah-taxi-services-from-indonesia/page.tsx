import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Book Private Umrah Taxi Services Online from Indonesia - Haramain Umrah Taxi",
  description: "Book private Umrah taxi services online from Indonesia. Reliable transport for Indonesian pilgrims with comfortable vehicles and professional drivers.",
  alternates: {
    canonical: "/private-umrah-taxi-services-from-indonesia",
  },
};

const post = {
  id: "private-umrah-taxi-services-from-indonesia",
  title: "Book Private Umrah Taxi Services Online from Indonesia",
  excerpt: "Book private Umrah taxi services online from Indonesia. Reliable transport for Indonesian pilgrims with comfortable vehicles and professional drivers.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-04-25",
  readTime: "6 min read",
  author: "M Umar Irfan",
  image: "/images/private-umrah-taxi-services-from-indonesia.png",
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
                  className="w-full h-[800px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Thinking about your Umrah pilgrimage trip in Indonesia is an enormous spiritual achievement, but sometimes this journey becomes a nightmare due to transportation.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">When leaving Jakarta and landing in a crowded Saudi airport, the last thing you will want is to fight over the taxi prices and carry huge bags. This is why more families now choose to book a private car online from Indonesia before they even leave home.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">At Haramain Umrah Taxi, we believe your focus should remain on your Ibadah, not on how you get to your hotel. By arranging your ride early, you step off the plane and straight into a waiting car.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Pre-Book Umrah Taxi Services Online From Indonesia?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">We have seen it many times: pilgrims landing after a 10-hour flight only to find that local transport is packed or overpriced. Our private umrah taxi online for Indonesian pilgrims solves this immediately.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You get a driver who knows exactly where you need to go. If you are a solo traveler or a large family from Surabaya, we have the right vehicle size for you.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Using private umrah taxi services for Indonesian pilgrims means you are not tied to a bus schedule. You move at your own pace, which is exactly how a sacred journey should feel.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Booking Your Umrah Taxi Online from Indonesia</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">One reason many pilgrims prefer private transport is the convenience of online booking. Today, you can book an Umrah taxi from Indonesia before leaving home, which removes a lot of uncertainty.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Instead of searching for transport after landing, everything is already arranged. You know who will pick you up, where you will meet the driver, and how you will reach your hotel.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">For many travelers, Umrah taxi services online from Indonesia make the whole trip feel better organized. It allows you to focus on your spiritual journey rather than worrying about travel logistics.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Through Haramain Umrah Taxi, Indonesian pilgrims can easily reserve their ride and confirm their travel schedule in advance.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Many Pilgrims Choose Haramain Umrah Taxi?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Umrah transportation must be good and comfortable. Instead of being concerned with the travel arrangements, pilgrims desire to concentrate on their prayers and spiritual aspirations.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Haramain Umrah Taxi attempts to offer a reliable service to people who travel between the holy cities. The drivers are conversant with the routes involving Jeddah, Makkah, and Madinah. The vehicles are ready to cover a long route.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">When seeking the most favorable private Umrah taxi to pick up and drop Indonesian pilgrims, the pilgrims will seek the services of companies like Haramain Umrah Taxi that provide clear communications, drivers who are on time, and services that are easy to book.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Such information counts when a trip already includes long flights and hectic traveling time.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Better Comfort for Your Family</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You work hard to save for this trip, so you deserve a ride that does not leave you exhausted. We offer premium umrah taxi services for Indonesian pilgrims who want that extra bit of quality.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Our fleet is modern and well-maintained because we know how much the Saudi heat can drain you.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Having a private umrah taxi online in Makkah gives you the freedom to visit the various Ziyarat sites on your own terms. You do not have to follow a tour guide's clock. You stay as long as you want at each holy site, and your ride will be ready when you are.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Easy Transport in Madinah</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Madinah is a place of peace, and your transport should be just as calm. We provide a dedicated private taxi online in Madinah to help you get around the city without any fuss.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">If it is a quick trip to Masjid Quba or getting your family to the airport, we have got it covered. Our Madinah hotel to Madinah airport private taxi for Indonesian pilgrims is especially popular because it takes the "rush" out of your departure.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">We make sure you arrive at the terminal with plenty of time to spare, so your final moments in the Prophet's city (PBUH) are not spent worrying about the clock.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The process of booking Haramain Umrah Taxi is incredibly simple. You can book an Umrah taxi from Indonesia directly through our website in just a few minutes.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">At Haramain Umrah Taxi, we pride ourselves on being the best private Umrah taxi for Indonesian pilgrims because we actually care about your experience. We offer fair prices, honest drivers, and cars that actually fit your luggage.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Do not leave your transport to the last minute. Book our taxi service now through the Haramain Umrah Taxi website and let us take care of the roads while you take care of your soul.</p>
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
