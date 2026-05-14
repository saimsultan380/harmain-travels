import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2, ShieldCheck, FileText, Lock, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Why Taxi Services in KSA Request Visa and Passport Details?",
  description: "Discover why KSA taxi services require visa and passport details for pilgrim safety and compliance. Book secure Haramain Umrah Taxi today.",
  alternates: {
    canonical: "/why-taxi-services-in-ksa-request-visa-and-passport-details/",
  },
};

const post = {
  id: "why-taxi-services-in-ksa-request-visa-and-passport-details",
  title: "Why Taxi Services in KSA Request Visa and Passport Details?",
  excerpt: "Discover why KSA taxi services require visa and passport details for pilgrim safety and compliance. Book secure Haramain Umrah Taxi today.",
  category: "taxi-guides",
  categoryName: "Taxi Guides",
  date: "2026-05-12",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/Why-Taxi-Services-in-KSA-Request-Visa-and-Passport-Details1.png",
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
                  Your phone buzzes with a taxi booking confirmation request. Then comes the unexpected part: they ask for your passport number and visa copy. You pause. Is this normal? Is it safe? Why does a simple taxi ride need these personal documents?
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  At Haramain Umrah Taxi, we request these details too, and we want you to know exactly why. This is not about invading your privacy. It is about following Saudi government regulations that protect both you and us.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <ShieldCheck className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Legal Compliance</h3>
                    <p className="text-sm text-[var(--text-2)]">Following Saudi transport authority (TGA) regulations for legitimate transfers.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <FileText className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Official Permits</h3>
                    <p className="text-sm text-[var(--text-2)]">Creating the mandatory transfer permits needed for checkpoints.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Lock className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Secure Data</h3>
                    <p className="text-sm text-[var(--text-2)]">Your information is encrypted and used only for official registration.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why do Saudi taxis need visa proof?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Saudi taxis require visa proof to protect you from fraudulent services. Legitimate registered companies always request documentation. If a taxi service never asks for these details, consider it a red flag. Unlicensed operators avoid these requirements because they cannot generate transfer permits.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">The Official Transfer Permit</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Saudi taxi companies require passport and visa details to create your official transfer permit. This permit is checked at various checkpoints between cities. Without it, security may stop the vehicle and deny entry, especially in holy cities like Makkah and Madinah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">City-Specific Requirements</h2>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Makkah</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Makkah has the strictest monitoring. Only Muslims with valid visas can enter. Your taxi driver presents the transfer permit at checkpoints to ensure authorized pilgrim entry and maintain safety standards.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Jeddah</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  As the main entry point, Jeddah taxi services need your passport to coordinate airport pickups and verify legal entry status for intercity travel.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Riyadh</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  In the capital, high security protocols for government and diplomatic areas require passenger verification to ensure drivers use appropriate routes.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Data Security and Privacy</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  At Haramain Umrah Taxi, we use encrypted connections for all data transmission. Your details go directly into government-approved systems and are deleted from our temporary databases after your journey is complete. We follow international data protection standards strictly.
                </p>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <Info className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Important Note</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Taxi company insurance policies also require passenger verification. Without valid documentation, insurance claims may be rejected in the event of an accident, leaving you unprotected.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Taxi services in KSA request visa and passport details due to government regulations, passenger safety, and legal compliance. At Haramain Umrah Taxi, we handle your information with utmost security and respect, ensuring a smooth and legal journey across the Kingdom.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book secure and professional transportation with us today!
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
