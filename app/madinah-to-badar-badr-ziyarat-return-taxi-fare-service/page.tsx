import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Madinah to Badar & Badr Ziyarat & Return Taxi Fare & Service - Haramain Umrah Taxi",
  description: "The trip from Madinah to Badar is one of the most demanded ziyarat visits by pilgrims. Book your Madinah to Badar and Badr ziyarat with a round-trip taxi that is easy, secure, and customer-oriented.",
  alternates: {
    canonical: "/madinah-to-badar-badr-ziyarat-return-taxi-fare-service",
  },
};

const post = {
  id: "madinah-to-badar-badr-ziyarat-return-taxi-fare-service",
  title: "Madinah to Badar & Badr Ziyarat & Return Taxi Fare & Service",
  excerpt: "The trip from Madinah to Badar is one of the most demanded ziyarat visits by pilgrims. Book your Madinah to Badar and Badr ziyarat with a round-trip taxi that is easy, secure, and customer-oriented.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-04-08",
  readTime: "6 min read",
  author: "M Umar Irfan",
  image: "/images/Madinah-to-Badar-Badr-Ziyarat-Return-Taxi-Fare-Service.jpg",
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
              className="inline-flex items-center gap-2 text-[var(--gold)] font-body font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            {/* Article Container */}
            <article className="bg-[var(--bg)] border-2 border-t-[var(--gold)] border-b-[var(--green)] border-l-[var(--gold)] border-r-[var(--green)] rounded-2xl py-4 px-[10px] md:px-8 md:py-8 lg:px-12 lg:py-12 shadow-lg">
              {/* Category Badge */}
              <span className="inline-block px-4 py-1.5 bg-[var(--gold)]/10 text-[var(--gold)] font-body text-sm font-semibold rounded-full mb-4">
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
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The trip from Madinah to Badar is one of the most demanded ziyarat visits by the pilgrims who desire to have a glimpse of the Islamic history beyond the city. It is not only about reaching Badar, but doing it in a comfortable way, spending your time, and returning without any stress.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">This is why the selection of the taxi service can be more important than many people think. When taking Haramain Umrah Taxi, you have an all-inclusive Madinah to Badar and Badr ziyarat with a round-trip taxi that is easy, secure, and customer-oriented.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Madinah to Badar Travel Route and Experience</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Badar is approximately 152 km from Madinah and the road trip typically takes 1:40 minutes to 2 hours. The path is clear, but the experience of the trip will be based on the quality of its planning. One can control his or her schedule in a private taxi, which is crucial in a ziyarat trip when time and destinations count.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">When you ride in a professional Madinah to Badar taxi, you have a feeling that the journey is very smooth and orderly. You need not worry about being confused with routes or delays.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Rather, you can concentrate on your purpose and leave the driving to your driver. He/she controls the road and ensures a smooth ride in and out.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Madinah to Badar Taxi Fare</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The Madinah to Badar taxi fare knowledge can assist you in making an appropriate plan for your trip and prevent surprises. According to the prevailing market rates, a round trip, including ziyarat, usually costs, according to the kind of vehicle you choose.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">As an example, a sedan will have an approximate price of 380 SAR, and bigger models, such as GMC or family cars, reach 750 SAR and beyond.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">When traveling as a family or in a group, a larger vehicle might appear to be costly initially, but it will be cost-effective when shared. A majority of the individuals will want to book a Madinah to Badar and Badr ziyarat with a taxi fare package, which includes waiting time and eliminates the necessity to hire another taxi in the future.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What You Are Offered in Badr Ziyarat Taxi Services?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">It is not only a transport Badr ziyarat taxi service, which is a taxi between one place and another. It is designed in such a way that it takes you to see the significant religious and historical sites.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Your chauffeur will take you to the most important places of interest and allow you time to visit every destination comfortably.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">This involves the battlefield of Badr, the graves of the martyrs and Masjid Al-Areesh. These places are not located in one place, and therefore, a special taxi can make this visit much easier.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You need not worry about local transportation or managing time strictly, as is the case with other modes of transport that are used.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Badar to Madinah Taxi Fare and Return</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The return journey is something that is not considered much when planning, but it contributes greatly to your experience as a whole. A pre-reserved Badar to Madinah taxi service makes sure that your journey finishes as smoothly as it began. You need not wait or bargain prices following your ziyarat.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The Badar to Madinah taxi fare is normally taken when you make a round trip. The method is time and energy-saving.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Having your driver available to take you back after spending hours in the historical sites is also an easy way, particularly for the family, the elderly traveler, or the first-time visitor.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why is Private Taxi the Best Option for the Madinah to Badr Route?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Badar has very limited public transport, and it is not created with convenience towards ziyarat. They are strict on timings and are not flexible with stops. Conversely, a private taxi will give you the freedom to move at your own speed and change plans to suit.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The most preferred Madinah to Badar taxi services are concerned with comfort, reliability, and customer comfort. Having clean cars, seasoned drivers, and effective communication is a difference.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You avoid the unnecessary stress, and instead of it, you have a smooth and focused journey that is comparable to the purpose of your visit.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Madinah to Badar Taxi Services</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Taxi providers are not all equal in terms of the quality of the service that they provide, although the fare might appear to be the same. Service quality, vehicle condition, and driver experience should always be the factors to be considered before making a decision. Even a slightly improved service will totally transform your travel experience.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Haramain Umrah Taxi is unique in that it provides reliable services, clear pricing, and good vehicles. Traveling alone or with family, you will receive an arrangement that best fits your needs and does not complicate the booking process.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Booking your taxi from Madinah to Badar saves you the hassle of just booking your taxi at the last minute and also saves you from price changes. It also makes sure that your whole journey, inclusive of Badr ziyarat and back, is already scheduled and arranged.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Haramain Umrah Taxi is a reliable taxi service in Madinah to Badar with transparent prices, experienced drivers, and comfortable cars.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Book your Madinah to Badar taxi with Haramain Umrah Taxi and finish your ziyarat trip with comfort and tranquility.</p>
              </div>

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
