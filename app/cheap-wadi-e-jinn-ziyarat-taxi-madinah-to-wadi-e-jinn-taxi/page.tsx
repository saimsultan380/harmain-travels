import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Cheap Wadi e Jinn Ziyarat Taxi | Madinah to Wadi e Jinn Taxi - Haramain Umrah Taxi",
  description: "Discover affordable Wadi e Jinn ziyarat taxi service from Madinah. Book your comfortable ride to this popular desert destination with Haramain Umrah Taxi.",
  alternates: {
    canonical: "/cheap-wadi-e-jinn-ziyarat-taxi-madinah-to-wadi-e-jinn-taxi",
  },
};

const post = {
  id: "cheap-wadi-e-jinn-ziyarat-taxi-madinah-to-wadi-e-jinn-taxi",
  title: "Cheap Wadi e Jinn Ziyarat Taxi | Madinah to Wadi e Jinn Taxi",
  excerpt: "Discover affordable Wadi e Jinn ziyarat taxi service from Madinah. Book your comfortable ride to this popular desert destination with Haramain Umrah Taxi.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-03-27",
  readTime: "5 min read",
  author: "M Umar Irfan",
  image: "/images/cheap-wadi-e-jinn-ziyarat-taxi-madinah-to-wadi-e-jinn-taxi.png",
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
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Wadi e Jinn is a popular tourist attraction just outside Madinah, which is usually a part of ziyarats because of its scenic views and the serene desert atmosphere. The experience is simple, but it takes proper planning to get to the location.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">There are no frequent means of transport available in the area. The use of random options may lead to time wastage and confusion.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Here, a Madinah to Wadi e Jinn taxi is a convenient way to let you get there and back without any questions, on time, and in one piece. Take a comfortable and affordable ride with Haramain Umrah Taxi in order to book your Wadi e Jinn taxi.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Cheap Wadi e Jinn Ziyarat Taxi from Madinah</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Getting a cheap taxi in Wadi e Jinn ziyarat will provide you with a convenient means of controlling the price and comfort.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Rather than having to take into account a variety of means of transportation, you receive a direct trip to the destination and back to your hotel. This saves time and makes the journey simple.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The word affordable does not imply the basic. Even a good taxi service will have a clean car, a comfortable ride, and a driver who knows the way.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You do not waste time with useless turns and arrive at Wadi e Jinn without delays. This is suitable among families and small groups due to the potential to share the cost and still enjoy privacy and comfort.</p>
                
                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Cheap-Wadi-e-Jinn-Ziyarat-Taxi-from-Madinah-1.png"
                    alt="Wadi e Jinn Ziyarat Taxi from Madinah"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Madinah to Wadi e Jinn Distance and Travel Time</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Wadi e Jinn is approximately 40.8 km from Masjid Nabawi and so it is a short journey out of the city. Drive time by taxi takes 30 to 40 minutes, depending on the time of day and the traffic.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">This distance can be easily planned to visit without interfering with the rest of your day. You may leave Madinah, spend the day at Wadi e Jinn and come back in a couple of hours.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">A taxi can keep you on time, particularly when you have other ziyarat plans and prayers to attend. The straight path can also prevent unnecessary reroutings, a factor that makes the path clear and uncomplicated.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What to Expect from Wadi e Jinn Taxi Service?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">To make the journey straightforward, a reliable taxi service to Wadi e Jinn ziyarat is available. It normally begins with a hotel pick up in and around Masjid Nabawi. Then a direct drive to Wadi e Jinn. Our cars are in good, clean condition and the ride is comfortable.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The driver brings you to the major spot where tourists tend to experience the well-known road effect.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The same taxi returns you to your hotel after you have explored, taken photos, and enjoyed the surroundings without feeling rushed. This is a full-service package that covers the loopholes in your travel plan.</p>
                
                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Cheap-Wadi-e-Jinn-Ziyarat-Taxi-from-Madinah-2.png"
                    alt="Wadi e Jinn Taxi Service"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Budget-Friendly Options for Every Traveler</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Different types of travelers can travel flexibly by a cheap Wadi e Jinn taxi. Standard cars can be chosen by individuals and couples, though larger cars can be selected by families and groups. This will enable you to suit your travelling needs to your budget.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Another method to save on cost without compromising on comfort is by sharing the ride. When the cost is shared with the passengers, it makes the cost more affordable.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">As a bonus, it is a private organized trip, even at a lower price, and you cannot say the same thing about the shared or public means of transport.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Haramain Umrah Taxi for Wadi e Jinn Travel</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Haramain Umrah Taxi is a leading taxi business that ensures comfort, time and cost efficiency of Madinah to Wadi e Jinn taxi. Our service will satisfy the demand of the customers interested in having a relaxing and hassle-free vacation.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Drivers know the route well and can avoid delays or confusion. Cars are serviced to provide a comfortable ride regardless of if you are on a short trip or you are factoring in this trip as part of an overall ziyarat trip.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The service has a distinct focus on convenience to customers and helps to keep your journey well-organized between pickup and drop-off.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Flexible Timing and Easy Booking</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">A Wadi e Jinn Ziyarat taxi gives you the option to choose the time of your travel. A schedule can be adjusted to your day, either in the morning or in the afternoon. This allows you to escape the heat and manage your general plan in Madinah.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">It takes no complicated steps and is easy to book. After confirmation, your ride is booked at your own time, thus you do not need to stress over last-minute problems. This contributes to the whole experience being much easier to bear.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Visiting Wadi e Jinn in Madinah can easily be planned, but the experience in the entire activity relies on how you organize your traveling. It is not too far, but at the same time, far enough to warrant a convenient and direct mode of transport.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">With its taxi service, Madinah to Wadi e Jinn, everything is clear and well organized. It also allows you to concentrate on the visit itself rather than routes and transport problems.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">A cheap Wadi e Jinn ziyarat taxi gives you the right balance of cost and convenience, making the trip easy to include in your Madinah stay without adding stress to your schedule.</p>
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
