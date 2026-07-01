import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How to Book The Best Umrah Taxi Online in Makkah from the UK?",
  description: "Book your Umrah taxi from the UK to Madinah with ease. Enjoy reliable service, comfortable vehicles, transparent pricing, and smooth transfers with Us!",
  alternates: {
    canonical: "/how-to-book-the-best-umrah-taxi-online-in-makkah-from-the-uk/",
  },
  openGraph: {
    title: "How to Book The Best Umrah Taxi Online in Makkah from the UK?",
    description: "Book your Umrah taxi from the UK to Madinah with ease. Enjoy reliable service, comfortable vehicles, transparent pricing, and smooth transfers with Us!",
    url: "/how-to-book-the-best-umrah-taxi-online-in-makkah-from-the-uk/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Book The Best Umrah Taxi Online in Makkah from the UK?",
    description: "Book your Umrah taxi from the UK to Madinah with ease. Enjoy reliable service, comfortable vehicles, transparent pricing, and smooth transfers with Us!",
  },
};

const post = {
  id: "how-to-book-the-best-umrah-taxi-online-in-makkah-from-the-uk",
  title: "How to Book The Best Umrah Taxi Online in Makkah from the UK?",
  excerpt: "Book your Umrah taxi from the UK to Madinah with ease. Enjoy reliable service, comfortable vehicles, transparent pricing, and smooth transfers with Us!",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-12",
  readTime: "9 min read",
  author: "M Umar Irfan",
  image: "/images/How-to-Book-The-Best-Umrah-Taxi-Online-in-Makkah-from-the-UK.png",
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
                  Planning your Umrah journey from the UK brings excitement, spiritual preparation, and many travel decisions to make. You need a safe, reliable, and comfortable taxi that understands pilgrims&apos; needs.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When you know how to book an Umrah taxi from the UK, you save time, reduce stress, and enjoy peace of mind. You avoid language barriers, hidden charges, and last-minute confusion. This guide from Haramain Umrah Taxi shows you how to book an Umrah taxi online from the UK with confidence.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Book Umrah Taxi Online from the UK Step by Step?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking your taxi online feels simple when you follow a clear process. You stay organized and avoid mistakes.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Choose a Trusted Umrah Taxi Website</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can start by selecting a professional website with clear contact details, transparent prices, and real reviews. Avoid platforms that hide pricing or provide limited information.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should look for websites that specialize in Umrah transport, like Haramain Umrah Taxi, rather than general taxi listings. Specialized companies understand pilgrims&apos; needs and local routes. When you search for the best Umrah taxi from the UK, focus on experience, responsiveness, and the quality of customer support.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Select Your Route and Vehicle</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should enter your pickup location, usually Jeddah Airport, Makkah hotel, or Madinah hotel. Choose your destination clearly. Select the vehicle type based on passenger count and luggage. Always check the vehicle photos and descriptions. Make sure the car offers air conditioning, comfortable seating, and sufficient storage.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Provide Travel Details</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Fill in your arrival date, flight number, pickup time, and hotel address. Accurate information helps the driver meet you smoothly. Add special requests if needed. You may ask for child seats, wheelchair access, or extra luggage space.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Confirm Pricing and Payment</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should review the total cost carefully. Confirm whether the price includes tolls, parking, and waiting time. Reliable providers show final pricing without surprises. Complete your payment using secure online methods. Some services offer partial payment with the remaining balance on arrival.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Book Umrah Taxi in Madinah from UK?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Many pilgrims continue their journey to Madinah after completing Umrah. You may need transport from Makkah to Madinah or from Madinah Airport to your hotel.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  To book an Umrah taxi in Madinah from the UK, visit a trusted Umrah taxi website, such as Haramain Umrah Taxi. Select your pickup and drop-off locations along with your travel date and time. Enter your flight or hotel details carefully so the driver can track your arrival and meet you on time.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Choose the vehicle that fits your group size and confirm the transparent price before making a secure online payment. Once confirmed, you will receive instant booking details and enjoy a smooth, stress-free transfer when you arrive in Madinah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Booking Your Umrah Taxi from the UK Is Necessary?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When you arrange your taxi before you travel, you stay in control. You avoid searching for transport after a long flight. It will help you skip crowded taxi queues and unnecessary negotiations.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Many travelers overpay when they book locally. When you book an Umrah taxi online from the UK, you see transparent pricing and vehicle options. You choose what suits your family size, luggage, and comfort level.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Pre-booking also guarantees reliability. Professional Umrah taxi companies track your flight and adjust pickup times. You step out of the airport and meet your driver without stress.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Fleet of Umrah Taxi</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Before you learn how to book an Umrah taxi service from the UK, you should understand what services they usually offer. You can choose between private cars, family vans, and luxury vehicles. Private cars work well for couples or solo travelers. Family vans suit groups with luggage. Luxury cars offer premium comfort if you want extra space and privacy. When you book a private Umrah car from the UK, you enjoy direct transfers without sharing the vehicle.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Book Umrah Taxi in Makkah from the UK for Local Transfers?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Many pilgrims also need local transfers inside Makkah. You may travel between hotels, Haram, shopping areas, or Ziyarat locations. When you learn how to book an Umrah taxi in Makkah from the UK, you arrange local rides before arrival. This approach saves time and protects you from price fluctuations during busy seasons.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You simply select Makkah as the pickup and destination on the booking form. Choose hourly or point-to-point services depending on your plan. This method keeps your daily movements smooth and stress-free.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Book Makkah Umrah Taxi from the UK for Airport Transfers?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Airport transfers remain the most popular booking. You want a smooth journey after a long flight. When you understand how to book Makkah Umrah taxi from the UK, you secure a driver waiting at the terminal with your name board. You avoid taxi negotiations and unfamiliar routes.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Provide flight details accurately. Professional services monitor delays and adjust pickup times automatically.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Haramain Umrah Taxi Is the Best Choice?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi focuses exclusively on pilgrim transportation. We understand your spiritual journey and respect your time. We offer clean vehicles, experienced drivers, transparent pricing, and 24/7 support. You enjoy smooth airport transfers, Makkah local rides, and Madinah intercity travel.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We simplify the booking of Umrah taxi from the UK with an easy online system. You receive instant confirmation and professional service from start to finish.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Umrah journey deserves smooth transportation, comfort, and reliability. When you understand the process of booking an Umrah taxi service from the UK, you eliminate stress and focus fully on worship.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Do not wait until the last moment. Secure your taxi today and travel with confidence. Book your ride now with Haramain Umrah Taxi and experience professional service from the moment you land. If you want safe, reliable, and comfortable travel, take action today and reserve your Umrah taxi online.
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
