import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Jeddah Airport Parking Fees: Hajj, North & Terminal 1",
  description: "Complete guide by Haramain Umrah Taxi to Jeddah Airport parking charges at Terminal 1, Hajj & North terminals. Long-term & VIP options. Plan your budget now.",
  alternates: {
    canonical: "/jeddah-airport-parking-fees-hajj-north-terminal-1/",
  },
};

const post = {
  id: "jeddah-airport-parking-fees-hajj-north-terminal-1",
  title: "Jeddah Airport Parking Fees: Hajj, North & Terminal 1",
  excerpt: "Complete guide by Haramain Umrah Taxi to Jeddah Airport parking charges at Terminal 1, Hajj & North terminals. Long-term & VIP options. Plan your budget now.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-12",
  readTime: "11 min read",
  author: "M Umar Irfan",
  image: "/images/Jeddah-Airport-Parking-Charges-Hajj-North-Terminal-1.png",
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
                  King Abdulaziz International Airport serves millions of travelers every year. You will find comprehensive parking facilities across all terminals that serve pilgrims, tourists, and business travelers alike.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are coming for Hajj, visiting family, or here for business, knowing the parking charges helps you plan your budget better. At Haramain Umrah Taxi, we help travelers navigate airport logistics daily. Our experience with King Abdulaziz International Airport parking fees comes from years of serving passengers at every terminal.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Terminal 1 Parking Charges and Rates</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Terminal 1 handles most international flights and serves approximately 19 major airlines, including British Airways, Emirates, and Thai Airways International. Parking rates depend on the duration and parking type you choose.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Short-Term Parking at Terminal 1</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are looking for convenient parking during quick airport visits, Terminal 1 hourly rates give you comfort and peace of mind. Here&apos;s what you pay per hour:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>Your first hour costs just 10 SAR</li>
                  <li>Stay 1-3 hours and pay only 20 SAR total</li>
                  <li>Need 3-6 hours? You&apos;ll pay 30 SAR</li>
                  <li>Park up to 24 hours for 50 SAR</li>
                </ul>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  These fixed rates ensure you never overpay. The parking spots near the terminal entrance save you precious time, especially when managing luggage or traveling with elderly family members.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Long-Term Parking Rates at Terminal 1</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Terminal 1 extended parking packages suit you if you are heading out for multiple days or weeks. This terminal provides real value for your money. Smart pricing for longer stays:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>Daily parking - 50 SAR</li>
                  <li>Full week package - 280 SAR</li>
                  <li>Monthly rate - 800 SAR</li>
                </ul>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Instead of paying 350 SAR for seven days at the daily rate, you only spend 280 SAR with the weekly package. Monthly parking brings even bigger benefits at roughly 27 SAR per day. This pricing works wonderfully for business travelers, foreign visitors to their home countries, or pilgrims spending extended time in Saudi Arabia.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Premium and Assisted Parking Options</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Premium parking at Terminal 1 puts luxury and convenience first. You pay more but gain valuable time and comfort. Premium rates:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>For an hour - 30 SAR</li>
                  <li>Full day - 150 SAR</li>
                </ul>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You simply hand over your keys upon arrival and find your car waiting when you return. Business executives, families with small children, and elderly pilgrims benefit from minimal walking distances. Your vehicle gets security monitoring.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">North Terminal Parking Fees</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  North Terminal handles international airlines and budget carriers. The parking costs here offer excellent value compared to Terminal 1.
                </p>
                <h4 className="text-lg font-heading font-bold text-[var(--text-1)] mb-2">Hourly parking costs:</h4>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>First hour - 10 SAR</li>
                  <li>Stay 1-3 hours - 15 SAR</li>
                  <li>Park 3-6 hours - 25 SAR</li>
                  <li>Up to a full day - 40 SAR</li>
                </ul>
                <h4 className="text-lg font-heading font-bold text-[var(--text-1)] mb-2">Extended stay pricing:</h4>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>Per day - 40 SAR</li>
                  <li>Weekly package - 220 SAR</li>
                  <li>Monthly parking - 600 SAR</li>
                </ul>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your weekly stay costs only 220 SAR, while monthly parking drops to an amazing 600 SAR total.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Hajj Terminal Parking Charges</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Hajj Terminal&apos;s distinctive tent design welcomes up to 80,000 pilgrims at once during peak seasons. Its parking system focuses on serving pilgrims and their families efficiently.
                </p>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Standard Parking for Regular Vehicles</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Regular car parking is typically available at about 100 SAR per hour during busy pilgrimage times. This hourly system keeps traffic flowing smoothly when thousands of vehicles arrive for pilgrim drop-offs.
                </p>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Bus and Large Vehicle Parking</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Special zones welcome tour buses and large coaches carrying pilgrim groups. Large vehicles pay different rates based on their bigger space needs. These dedicated areas prevent overcrowding and keep pickup schedules running smoothly even during the busiest weeks.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6 italic">
                  Book your Haramain Umrah Taxi today and eliminate parking worries. Our professional drivers handle pick-ups and drop-offs, while you focus on your spiritual journey.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Special Arrangements During Peak Season</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Hajj season brings temporary parking expansions to handle the massive visitors. You will find continuous shuttle services moving pilgrims between the parking and terminals. Pilgrim groups receive coordinated assistance, making transfers easier for everyone.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This choice saves time, and you will concentrate on your pilgrimage preparations instead of parking stress.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Tips for Getting Jeddah Airport Parking</h2>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Pre-booking</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can reduce your parking expenses with smart planning. Pre-booking through platforms like ParkVia sometimes offers discounted rates. Compare the Jeddah airport parking rates before your trip; a few minutes of research saves you money.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Long-term Parking</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Choose long-term parking if you are traveling for more than three days. The rate drop after 48 hours makes a significant difference in your total cost. For a 10-day trip, you only pay 580 SAR instead of 1,300 SAR with daily short-term rates.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Ride-Sharing</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Consider alternative transportation for very long trips. Taxi services or ride-sharing might cost less than weeks of parking fees. Calculate both options before deciding. Sometimes a combination approach works best.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Arrive during off-peak hours</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You find parking spots more easily during off-peak hours, which are early mornings or late nights. This reduces stress and saves time searching for available spaces. Peak hours typically run from 8 AM to 11 AM and 4 PM to 8 PM.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Verify Your Terminal</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Confirm which terminal your airline uses before parking. Jeddah Airport Terminal 1 car parking sits far from the North Terminal, requiring shuttle transfers that add travel time.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Monitor Space Availability</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The airport&apos;s mobile app displays parking lot status in real-time. Check before leaving home to avoid wasting time searching for spots.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Terminal 1 offers the most comprehensive facilities with flexible pricing. The North Terminal provides the most economical long-term rates starting at just 40 SAR daily and 600 SAR monthly. The Hajj Terminal accommodates pilgrims with specialized services during the holy season.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book Haramain Umrah Taxi. Instead of dealing with Jeddah airport parking charges, many travelers choose our professional airport transfer service. We provide fixed pricing, skilled drivers who monitor flight schedules, and complete door-to-door service that eliminates parking worries.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ready to skip parking hassles? Contact Haramain Umrah Taxi for reliable airport transfers at honest rates.
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
