import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Private Umrah Taxi Services Online from the USA Book at Discount - Haramain Umrah Taxi",
  description: "Book private Umrah taxi services online from the USA at discount. Reliable airport transfers, Makkah to Madinah travel, and comfortable transportation for USA pilgrims.",
  alternates: {
    canonical: "/private-umrah-taxi-services-online-from-the-usa-book-at-discount",
  },
};

const post = {
  id: "private-umrah-taxi-services-online-from-the-usa-book-at-discount",
  title: "Private Umrah Taxi Services Online from the USA Book at Discount",
  excerpt: "Book private Umrah taxi services online from the USA at discount. Reliable airport transfers, Makkah to Madinah travel, and comfortable transportation for USA pilgrims.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-04-27",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/private-umrah-taxi-services-online-from-the-usa-book-at-discount.png",
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
                <p className="text-[var(--text-2)] leading-relaxed mb-6">If you are planning to travel from the United States to KSA for Umrah, it needs careful preparation. Most of the people book flights, hotels, and visas in advance but they leave the transportation service for traveling inside Saudi Arabia for later.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">When pilgrims land at the airport, they find it stressful to find a comfortable and affordable taxi. Therefore, it is recommended to book a private Umrah taxi service in advance.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Haramain Umrah Taxi service is a better option for this purpose as we offer reliable and convenient transport. It helps you to focus on your spiritual journey.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why USA Pilgrims Prefer Private Umrah Taxi Services?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The journey from the USA to KSA is long. After arriving at the airport, the first thing pilgrims need is to find the best transportation at the airport.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">They have the option to book public taxis, but that requires negotiation. Similarly, in shared transport, pilgrims have to wait for other passengers. Therefore, many pilgrims coming from the USA now choose private Umrah taxi services. It gives you privacy, comfort, and direct travel to your destination.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In a private taxi, you travel with your family and do not share it with strangers. Your taxi will be waiting when you land at the airport.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Families, elderly pilgrims, and those visiting KSA for the first time can benefit from this taxi service. Your travel in a group without any unnecessary stops.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Book Your Umrah Taxi Online from the USA</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Before departure, USA pilgrims try to arrange everything. They book flights to the hotel online. Transportation within the city after landing should also be booked online.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Booking an Umrah taxi from the USA before the trip removes the uncertainty of finding a taxi after arrival. Your travel details and pick-up location will already be shared with drivers after advance booking.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Easy Online Booking Process</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Haramain Umrah Taxi offers online booking of taxi service in advance. You can book a service in easy steps.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Before departure, you can book Umrah taxi services online from the USA. Just share your travel details, including your arrival time, pickup location, and destination, through WhatsApp or the booking form given on the Haramain Umrah Taxi website.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Your taxi will be secured after confirmation. In this way, you can avoid the confusion at the airport and have a smooth journey.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">After confirmation of booking, you will be aware of your pickup time, location, and fare that will make your spiritual journey peaceful.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Comfortable Airport Transfers for USA Pilgrims</h2>
                
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Comfortable-Airport-Transfers-for-USA-Pilgrims.png"
                    alt="Comfortable Airport Transfers for USA Pilgrims"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">King Abdulaziz International Airport in Jeddah or Prince Mohammad bin Abdulaziz Airport in Madinah are the places from where the Umrah journey starts for the international pilgrims.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">All the pilgrims want a comfortable ride to their hotel after long flights from cities like New York, Chicago, or Houston.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Haramain Umrah Taxi offers a private taxi service for USA pilgrims from Jeddah airport to Makkah or Madinah without delay.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Our professional drivers will pick you up from the airport and provide assistance with luggage. They will drop you directly to Makkah. In this way, you do not have to wait in a long taxi line or deal with unfamiliar transport systems.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Your Umrah experience will become calm and comfortable with these airport transfers by private Umrah Taxi.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Travel in Comfort Between Makkah and Madinah at a Discount</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Your journey between Makkah and Madinah takes several hours, and during Umrah comfortable taxi service is a must.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">For this purpose, private taxi services offer the most peaceful environment during Umrah. Your group will travel at their own speed instead of traveling uncomfortably in crowded buses or shared transport that stops again and again. In a private Umrah taxi, you can stop and relax whenever you want.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">For intercity travels, most of the pilgrims traveling from the USA for Umrah choose a private Umrah taxi online in Makkah. As compared to group transport, this option offers privacy and flexibility.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The return journey is also simple and organized for services such as Madina hotel to Madinah airport with a private taxi. Our drivers arrive before schedule time and wait for you, so you can reach the airport without delay.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Book Your Ride with Haramain Umrah Taxi</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">If you are traveling from the USA for Umrah, transportation should be booked earlier to make your journey smoother. Pilgrims who need safe, private, and comfortable service in Saudi Arabia should choose Haramain Umrah Taxi.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">We have designed our private taxi service from Jeddah airport to Makkah, from Makkah to Madinah, or from a Madinah hotel to Madinah airport. You can easily book our private Umrah taxi online before arriving in Saudi Arabia.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Book your taxi in advance to make your Umrah journey comfortable, reliable, and peaceful.</p>
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
