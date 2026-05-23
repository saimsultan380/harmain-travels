import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Best Umrah Taxi Service in Ramadan: Haramain Umrah Taxi Book",
  description: "Haramain Umrah Taxi offers the best Ramadan taxi service in Makkah & Madinah. Affordable, reliable, Clean Vehicles & 24/7 available. Book your Ride Now.",
  alternates: {
    canonical: "/best-umrah-taxi-service-in-ramadan/",
  },
};

const post = {
  id: "best-umrah-taxi-service-in-ramadan",
  title: "Best Umrah Taxi Service in Ramadan: Haramain Umrah Taxi Book",
  excerpt: "Haramain Umrah Taxi offers the best Ramadan taxi service in Makkah & Madinah. Affordable, reliable, Clean Vehicles & 24/7 available. Book your Ride Now.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-11",
  readTime: "10 min read",
  author: "M Umar Irfan",
  image: "/images/Best-Umrah-Taxi-Service-in-Ramadan-Haramain-Umrah-Taxi-Book.png",
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
                  Ramadan is the sacred month of the Islamic year. Muslims around the world dream of performing Umrah during this special time. The spiritual rewards multiply, and the atmosphere in Makkah and Madinah becomes truly magical. But planning your Umrah journey needs careful attention to every detail, especially your transportation.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi understands what you need during Ramadan. From the moment you land in Saudi Arabia until you complete your blessed journey, we are here to serve you.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Complete Umrah Taxi Services in Saudi Arabia</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi offers complete coverage across all major cities in Saudi Arabia. We are not just another taxi service. We are your dedicated travel partner who understands the sacred nature of your journey.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">From Airport to Holy Sites</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Umrah journey often starts at Jeddah Airport. Our Jeddah airport to Makkah taxi service in Ramadan ensures you reach your hotel quickly and safely. After a long flight and hours of fasting, you need comfortable, direct transportation. We provide that. Our drivers track your flight arrival times. Even if your flight gets delayed, your driver waits for you.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Moving Between Holy Cities</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Many pilgrims visit both Makkah and Madinah during their Umrah trip. The journey between these cities needs reliable transportation. Our Makkah to Madinah Umrah taxi services in Ramadan provide a comfortable connection between the two holy cities. Our team has been serving pilgrims for years. They understand the best routes, rest stops, and timing to make your journey pleasant.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We also provide Makkah to Madinah taxi services in Ramadan for those who want to visit the Prophet&apos;s Mosque after completing their Umrah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Special Features of Our Ramadan Umrah Taxi</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We have designed our service specifically keeping Ramadan&apos;s unique needs in mind. Here is what makes us the best Umrah taxi service in Makkah and across Saudi Arabia.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Fasting-Friendly Service</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We know you are fasting during Ramadan. Our drivers respect this completely. They maintain a quiet, peaceful environment in the car. No unnecessary chatter, no loud music. Just a calm space for you to rest or do dhikr during your journey. Our cars stay cool and comfortable even in the hot Saudi Arabian weather. You can relax without feeling drained before reaching your destination.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Prayer Time Flexibility</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Prayer times are sacred, especially during Ramadan. Our Umrah taxi Saudi Arabia service is completely flexible around Salah timings. We plan routes considering prayer times so you never miss a Salah. Many of our drivers pray with you at mosques along the way. They are not just drivers; they are fellow Muslims who understand the importance of worship.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Iftar and Suhoor Timing Support</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Breaking your fast on time matters greatly. Our drivers know the exact Iftar timings every day. They plan your trips to ensure you reach your destination before Maghrib. If you are traveling during Iftar time, they know the best places to stop. The same goes for Suhoor.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Book Your Umrah Taxi Online Easily</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Technology makes everything simpler. We offer the best online Umrah taxi services in Saudi Arabia in Ramadan through our easy booking system. You do not need to stand in queues or make countless phone calls. Visit our website or download our app. Enter your pickup location, destination, and timing. Choose your vehicle type based on your group size and confirm your booking in minutes.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You get instant confirmation with your driver&apos;s details. Our Ramadan online Umrah taxi service keeps you updated through SMS and app notifications.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Haramain Umrah Taxi In Ramadan?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You have several transportation options in Saudi Arabia. So why should you choose us? Let us explain what makes our Umrah taxi different.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Experienced Drivers Who Care</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our drivers are carefully selected professionals. Each one has years of experience serving Umrah pilgrims. They know the routes to all major hotels, the Haram entrances, and important landmarks. More importantly, they understand your spiritual journey. They have often performed Umrah themselves. This shared experience creates a bond of understanding and respect.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Clean and Comfortable Vehicles</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Every car in our fleet meets high standards of cleanliness and comfort. We clean and sanitize vehicles after every trip. During Ramadan, we take extra care to ensure everything is spotless. Our cars have strong air conditioning, comfortable seats, and plenty of luggage space.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Affordable and Transparent Pricing</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ramadan should not mean expensive transportation. We offer discounted Umrah taxi service in Ramadan to help more pilgrims travel comfortably within their budget. All prices are clear and fixed before you book. The fare you see is the fare you pay.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Available 24/7 Throughout Ramadan</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ramadan follows the lunar calendar, and schedules can be unpredictable. You might want to go to the Haram at 2 AM for Tahajjud or need a ride right after Taraweeh prayers. Our Umrah taxi in Makkah in Ramadan operates non-stop. Day or night, before Suhoor or after Iftar, we are always available. Just book through our app or call our 24/7 customer service.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Different Vehicle Options for Every Need</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Pilgrims travel in different group sizes. A solo traveler has different needs than a family of six. We understand this completely. Our fleet includes comfortable sedans for individuals and couples. We have spacious SUVs perfect for families with children. For larger groups, we offer vans that can accommodate up to eight passengers with luggage.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Thousands of pilgrims have trusted Haramain Umrah Taxi for their Ramadan Umrah transportation needs. They return to us year after year because they know we deliver on our promises.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  From your first ride from the airport to your last trip back, we are with you every step of the way. This Ramadan, let us handle your transportation while you immerse yourself in worship and reflection. Book your Ramadan Umrah taxi with Haramain Umrah Taxi today and enjoy stress-free, comfortable transportation throughout your blessed journey.
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
