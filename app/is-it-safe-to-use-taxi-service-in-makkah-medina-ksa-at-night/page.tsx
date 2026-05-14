import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, Shield, UserCheck, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Is it Safe to Use Taxi Service in Makkah, Medina, KSA at Night?",
  description: "People ask, is it safe to use taxi service in Makkah, Medina, KSA at night? Haramain Umrah Taxi offers secure 24/7 travel with verified drivers & GPS tracking.",
  alternates: {
    canonical: "/is-it-safe-to-use-taxi-service-in-makkah-medina-ksa-at-night/",
  },
};

const post = {
  id: "is-it-safe-to-use-taxi-service-in-makkah-medina-ksa-at-night",
  title: "Is it Safe to Use Taxi Service in Makkah, Medina, KSA at Night?",
  excerpt: "People ask, is it safe to use taxi service in Makkah, Medina, KSA at night? Haramain Umrah Taxi offers secure 24/7 travel with verified drivers & GPS tracking.",
  category: "taxi-guides",
  categoryName: "Taxi Guides",
  date: "2026-05-12",
  readTime: "11 min read",
  author: "M Umar Irfan",
  image: "/images/Is-it-Safe-to-Use-Taxi-Service-in-Makkah-Medina-KSA-at-Night.png",
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
                  Many visitors wonder about transportation safety in Makkah, Medina, KSA at night, especially when unfamiliar with the area or traveling alone. The good news is, Saudi Arabia ranks among the safest countries for night travel. With low crime rates, extensive security measures, and 24/7 activity around holy sites, using legitimate taxi services at night is completely safe.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi specializes in secure, professional nighttime transportation with verified drivers, GPS tracking, and women-friendly options.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Night Safety in Saudi Arabia</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Crime rates in Saudi Arabia remain remarkably low compared to most countries. The government enforces strict security measures, police presence is visible, and surveillance systems operate extensively. These factors create an environment where nighttime travel feels secure.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Shield className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Secure Patrols</h3>
                    <p className="text-sm text-[var(--text-2)]">Visible police presence around all holy sites and major districts.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <UserCheck className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Verified Drivers</h3>
                    <p className="text-sm text-[var(--text-2)]">All professional taxi drivers undergo strict government background checks.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <MapPin className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">GPS Tracking</h3>
                    <p className="text-sm text-[var(--text-2)]">Real-time tracking of every journey ensures passenger accountability.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Is Makkah Safe at Night?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Absolutely. Makkah operates 24/7 because of its spiritual significance. The Haram area at night transforms into a bustling center of worship. Constant activity means streets stay well-lit and crowded. You can confidently book late-night transport for Tahajjud prayers or early-morning Fajr journeys.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Is Medina Safe for Women at Night?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Yes, Medina is safe for women at night. The city revolves around Masjid An-Nabawi, where worshippers gather throughout the night, creating a peaceful and respectful atmosphere. We provide women-friendly taxi services specifically designed for female passenger comfort, with drivers trained in cultural sensitivity.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Safety Features to Look For</h2>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Licensed Operations:</strong> Always check for official operator licenses and driver IDs.</li>
                  <li><strong>GPS Tracking:</strong> Use professional services that monitor routes in real-time.</li>
                  <li><strong>Trip Records:</strong> Maintain a digital trail of your journey via app or booking confirmation.</li>
                  <li><strong>24/7 Support:</strong> Choose companies that offer round-the-clock emergency assistance.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Addressing Common Concerns</h2>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Language Barriers</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Solution: Book with Haramain Umrah Taxi. Our drivers speak Arabic, English, and Urdu fluently, eliminating communication gaps during night travel.
                </p>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Pricing Disputes</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Solution: Use fixed-price pre-booked services. Knowing the exact cost before you start removes nighttime negotiation stress.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It is safe to use taxi services in Makkah, Medina, and across KSA at night. Your security is our priority. Haramain Umrah Taxi provides night travel that combines safety, comfort, and professionalism.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Contact us now for reliable nighttime transportation. Travel confidently knowing your safety comes first.
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
