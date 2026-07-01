import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Globe, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How to Book a Taxi in Saudi Arabia for International Visitors? ",
  description: "Learn how to book taxi in Saudi Arabia for international visitors. You can travel comfortably between holy cities and do ziyarats. Book HUT today!",
  alternates: {
    canonical: "/how-to-book-a-taxi-in-saudi-arabia-for-international-visitors/",
  },
  openGraph: {
    title: "How to Book a Taxi in Saudi Arabia for International Visitors? ",
    description: "Learn how to book taxi in Saudi Arabia for international visitors. You can travel comfortably between holy cities and do ziyarats. Book HUT today!",
    url: "/how-to-book-a-taxi-in-saudi-arabia-for-international-visitors/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Book a Taxi in Saudi Arabia for International Visitors? ",
    description: "Learn how to book taxi in Saudi Arabia for international visitors. You can travel comfortably between holy cities and do ziyarats. Book HUT today!",
  },
};

const post = {
  id: "how-to-book-a-taxi-in-saudi-arabia-for-international-visitors",
  title: "How to Book a Taxi in Saudi Arabia for International Visitors?",
  excerpt: "Learn how to book taxi in Saudi Arabia for international visitors. You can travel comfortably between holy cities and do ziyarats. Book HUT today!",
  category: "taxi-guides",
  categoryName: "Taxi Guides",
  date: "2026-05-12",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/How-to-Book-a-Taxi-in-Saudi-Arabia-for-International-Visitors.png",
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
                  Saudi Arabia has transformed its transportation landscape dramatically since 2018. The taxi booking process for international visitors is straightforward once you understand the basics. We at Haramain Umrah Taxi serve thousands of international visitors annually and have learned what questions you have before arriving.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Globe className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Global Ready</h3>
                    <p className="text-sm text-[var(--text-2)]">Specialized services for international tourists and pilgrims.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <FileText className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Easy Docs</h3>
                    <p className="text-sm text-[var(--text-2)]">Simple documentation requirements for booking your rides.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <CheckCircle className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Licensed</h3>
                    <p className="text-sm text-[var(--text-2)]">Fully registered and compliant with TGA regulations.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Documents Needed to Book a Taxi in Saudi Arab</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking taxis requires minimal documentation. For pre-booked services with established companies like HUT, you typically need:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>Valid Passport copy.</li>
                  <li>Active Saudi Visa (Umrah or Tourist).</li>
                  <li>Hotel address or destination details.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">8 Essential Rules for Tourists</h2>
                <ol className="list-decimal pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Carry Valid Documents:</strong> Keep your passport and visa active at all times.</li>
                  <li><strong>Share Personal Info:</strong> Provide your full name and nationality for travel permits.</li>
                  <li><strong>Book Licensed Services:</strong> Only use registered companies like Haramain Umrah Taxi.</li>
                  <li><strong>Pre-Book Ahead:</strong> Reserve at least 24 hours in advance during peak seasons.</li>
                  <li><strong>Digital Payment:</strong> Keep cash in SAR or credit cards ready.</li>
                  <li><strong>Respect Customs:</strong> Female passengers can travel alone freely.</li>
                  <li><strong>Save Details:</strong> Keep your driver&apos;s contact and hotel address (in Arabic) handy.</li>
                  <li><strong>Check the Meter:</strong> Ensure licensed street taxis use their meters correctly.</li>
                </ol>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Book in Makkah and Madinah</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  1. Visit our website and fill out the booking form.<br />
                  2. Choose your vehicle (Sedan, Van, or Luxury).<br />
                  3. Contact us directly on WhatsApp for quick confirmation.<br />
                  4. Meet your driver who will assist with luggage and routes.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Book with Haramain Umrah Taxi?</h2>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Multilingual Drivers:</strong> We speak English, Arabic, and Urdu.</li>
                  <li><strong>Fixed Pricing:</strong> Transparent fares with no hidden charges.</li>
                  <li><strong>24/7 Operations:</strong> We match your flight and prayer schedules.</li>
                  <li><strong>Clean Vehicles:</strong> Well-maintained and fully air-conditioned fleet.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ready to arrange reliable transportation for your Saudi Arabia visit? Contact Haramain Umrah Taxi today through WhatsApp, phone, or our website. We specialize in reducing the stress of navigating unfamiliar taxi systems for our international guests.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Saudi Arabia taxi today with us and travel with peace of mind!
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
