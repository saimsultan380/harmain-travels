import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Book Private Haramain Umrah Taxi Online for UK Pilgrims",
  description: "Book your private umrah taxi online before you travel from the UK. Enjoy a smooth airport transfer to Makkah or Madinah without stress. Book with Discounts!",
  alternates: {
    canonical: "/book-private-haramain-umrah-taxi-online-for-uk-pilgrims/",
  },
};

const post = {
  id: "book-private-haramain-umrah-taxi-online-for-uk-pilgrims",
  title: "Book Private Haramain Umrah Taxi Online for UK Pilgrims",
  excerpt: "Book your private umrah taxi online before you travel from the UK. Enjoy a smooth airport transfer to Makkah or Madinah without stress. Book with Discounts!",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-11",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/book-private-haramain-umrah-taxi-online-for-uk-pilgrims.png",
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
                  className="w-full h-auto md:h-[600px] lg:h-[800px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are coming from the UK for Umrah, do not leave your airport transfer to chance. Arrange your ride with Haramain Umrah Taxi before you travel, so that when you land, you are not searching for a car; you simply meet your driver and head straight to your hotel.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  After a long flight, relief really matters. A lot of pilgrims carefully book their flights and hotels, but forget about transport until they arrive. Planning your transfer in advance takes only a few minutes, but it saves you from that first wave of stress.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why UK Pilgrims Prefer a Private Umrah Taxi?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Anyone who has flown from London, Manchester, or Birmingham to Jeddah knows how draining it can be. You land tired, sometimes dehydrated, often with family members who just want to rest. In that moment, comfort matters more than anything else.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Shared transport can delay you because it waits for other passengers. Public taxis may not always offer the space or comfort you expect. When you book a private Umrah taxi online for UK pilgrims, you skip that scramble. Your driver is assigned, and your car is ready. You walk out and leave without standing around trying to agree on a price.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Comfort After a Long Flight</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Think about who is travelling with you. Maybe your parents or young children just want to lie down. After a long journey, even small inconveniences feel heavier. Private Umrah taxi services for UK pilgrims give you space to breathe. You sit with your own family. Your luggage fits properly. No one rushes you to move faster.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Safety and Trust</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When you are in a different country, trust matters. You want a driver who arrives on time and drives responsibly. Not someone rushing or checking their phone while driving.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah taxi for UK pilgrims is built around reliability. It works with drivers who handle these transfers daily. They understand the routes between Jeddah, Makkah, and Madinah. The drivers are used to airport pickups and Umrah travellers. They understand that you want a smooth, quiet journey.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Suitable for Families</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  UK families often travel in groups. Managing everyone in separate taxis is not ideal. Keeping your family together feels safer and more organised. Private Umrah taxi services for UK pilgrims provide vehicles that fit families comfortably. In a private taxi, everyone travels together, and luggage stays secure. There will be no confusion about meeting points.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Booking Before You Fly</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  There is peace of mind in knowing everything is arranged before departure. When your transfer from the UK is confirmed, you land with one less worry. You can book our taxi service online in minutes. Once it&apos;s done, you receive confirmation and clear details. Haramain Umrah Taxi makes the process straightforward, so you arrive knowing your ride is already arranged.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Clear Pricing Without Last-Minute Changes</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  One common worry for travellers coming from the UK is unclear fares. Some people end up paying more simply because they did not agree on the price beforehand. When you choose the best private Umrah taxi for UK pilgrims through Haramain Umrah Taxi, the price is confirmed at booking. You know what you are paying. That transparency builds trust.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Easy Travel Between Jeddah, Makkah and Madinah</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Umrah journey does not end at the airport. You still need to travel between cities. Jeddah to Makkah is over an hour. Makkah to Madinah is even longer.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah taxi services for UK pilgrims handle these routes every day. The driver knows the roads. You do not need to figure anything out. You simply sit back and focus on your intention for Umrah. You do not waste precious hours trying to organise travel while you should be resting or preparing for worship.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Private Is Better Than Shared Transport?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Shared transport may seem convenient at first. But it usually means waiting for others. Sometimes the vehicle stops at multiple hotels before yours. After a tiring flight, even small delays feel bigger than they are.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A private Umrah taxi for UK pilgrims takes you straight to your destination. There will be no delays or extra stops. You reach your hotel faster and settle in sooner.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Umrah is a spiritual journey. You prepare your heart for it. Your arrival should feel calm, not stressful. If you are coming from the UK, arrange your transport now rather than later. It is a simple step, but it changes how your journey begins.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book your private Umrah taxi online with Haramain Umrah Taxi today. Land, step into your car, and head straight to your hotel without unnecessary delays. Focus on your Umrah and leave the transport to us.
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
