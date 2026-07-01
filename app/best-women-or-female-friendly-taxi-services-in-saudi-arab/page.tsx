import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Shield, Heart, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Best Women or Female-Friendly Taxi Services in Saudi Arab",
  description: "Traveling as a woman in Saudi Arabia just got safer and more comfortable. Discover the best women or female-friendly taxi services in Saudi Arab. Book HUT!",
  alternates: {
    canonical: "/best-women-or-female-friendly-taxi-services-in-saudi-arab/",
  },
  openGraph: {
    title: "Best Women or Female-Friendly Taxi Services in Saudi Arab",
    description: "Traveling as a woman in Saudi Arabia just got safer and more comfortable. Discover the best women or female-friendly taxi services in Saudi Arab. Book HUT!",
    url: "/best-women-or-female-friendly-taxi-services-in-saudi-arab/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Women or Female-Friendly Taxi Services in Saudi Arab",
    description: "Traveling as a woman in Saudi Arabia just got safer and more comfortable. Discover the best women or female-friendly taxi services in Saudi Arab. Book HUT!",
  },
};

const post = {
  id: "best-women-or-female-friendly-taxi-services-in-saudi-arab",
  title: "Best Women or Female-Friendly Taxi Services in Saudi Arab",
  excerpt: "Traveling as a woman in Saudi Arabia just got safer and more comfortable. Discover the best women or female-friendly taxi services in Saudi Arab. Book HUT!",
  category: "taxi-guides",
  categoryName: "Taxi Guides",
  date: "2026-05-12",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/Best-Women-or-Female-Friendly-Taxi-Services-in-Saudi-Arab.png",
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
                  You deserve to travel with complete confidence and peace of mind. The women-friendly taxi services in Saudi Arab landscape have transformed dramatically since 2018, when Saudi women gained the right to drive. Today, you have access to professional transportation designed specifically with your comfort, safety, and cultural preferences in mind.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We at Haramain Umrah Taxi understand the unique concerns female travelers face. Our female-friendly taxi services in Saudi Arab provide the security you need. Our drivers respect your privacy, understand cultural sensitivities, and prioritize your well-being above everything else.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Women-Friendly Taxi Services Across Major Saudi Cities</h2>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Makkah</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Makkah holds special significance for Muslim women performing Umrah or Hajj. Our women-friendly taxi services in Makkah cater specifically to female pilgrims who need reliable transportation between hotels and Masjid Al Haram. You get professional drivers who understand prayer timings and respect your religious obligations.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Madinah</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Madinah&apos;s serene atmosphere requires equally respectful transportation. Our women-friendly taxi services in Madinah connect you to Masjid An-Nabawi and surrounding holy sites with comfort as the priority.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Jeddah</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Jeddah serves as the gateway for many international female travelers. Our women-friendly taxi services in Jeddah handle airport pickups, city tours, and business transportation, operating 24/7 for your convenience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Shield className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Verified Security</h3>
                    <p className="text-sm text-[var(--text-2)]">Thorough background checks for every driver to ensure absolute safety.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Heart className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Cultural Respect</h3>
                    <p className="text-sm text-[var(--text-2)]">Drivers trained to respect your privacy and cultural sensitivities.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <MapPin className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">24/7 Availability</h3>
                    <p className="text-sm text-[var(--text-2)]">Reliable transportation whenever you need it, day or night.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Specialized Services for Women</h2>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Umrah Taxi Services</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Performing Umrah as a woman requires thoughtful transportation planning. Solo female pilgrims receive extra attention to ensure complete safety. Our drivers maintain professional boundaries while providing necessary assistance.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Ziyarat Tours</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our women-friendly ziyarat taxi services operate in Makkah, Madinah, and Taif. These tours accommodate your pace, allowing extra time for reflection and prayer breaks without pressure.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What Makes Our Services Genuinely Women-Friendly?</h2>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Verified Professional Drivers:</strong> Every driver undergoes background checks and training on cultural sensitivity.</li>
                  <li><strong>Privacy Guaranteed:</strong> Your journey details remain confidential in a secure, private space.</li>
                  <li><strong>Real-Time Tracking:</strong> Share your live journey with family or friends for added peace of mind.</li>
                  <li><strong>Multiple Language Support:</strong> Drivers speak Arabic, English, and Urdu fluently for clear communication.</li>
                  <li><strong>Emergency Support:</strong> Our team responds immediately to any concerns reported during your journey.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Book?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking is simple:
                </p>
                <ol className="list-decimal pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Contact Us:</strong> Message via WhatsApp or call our dedicated line.</li>
                  <li><strong>Provide Details:</strong> Share your location, timing, and any specific requirements.</li>
                  <li><strong>Receive Confirmation:</strong> Get complete details including driver and vehicle info.</li>
                  <li><strong>Travel Confidently:</strong> Your verified driver arrives on time for a professional journey.</li>
                </ol>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ready to experience transportation designed specifically for female passengers? Contact Haramain Umrah Taxi now for women-friendly services that prioritize your safety and comfort across Saudi Arabia.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book now and travel with complete confidence!
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
