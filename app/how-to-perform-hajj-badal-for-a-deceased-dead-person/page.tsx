import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How to Perform Hajj Badal for a Deceased & Dead Person?",
  description: "Learn how to perform Hajj Badal for deceased loved ones. Complete step-by-step guide by Haramain Umrah Taxi with rituals & requirements. Book Now.",
  alternates: {
    canonical: "/how-to-perform-hajj-badal-for-a-deceased-dead-person/",
  },
};

const post = {
  id: "how-to-perform-hajj-badal-for-a-deceased-dead-person",
  title: "How to Perform Hajj Badal for a Deceased & Dead Person?",
  excerpt: "Learn how to perform Hajj Badal for deceased loved ones. Complete step-by-step guide by Haramain Umrah Taxi with rituals & requirements. Book Now.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-12",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/How-to-Perform-Hajj-Badal-for-a-Deceased-Dead-Person-.png",
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
                  Hajj Badal means performing the Hajj pilgrimage on behalf of someone who cannot do it themselves. It is a proxy Hajj where you or another person becomes a substitute for the deceased. This beautiful Islamic practice allows you to fulfill religious obligations for those who passed away before completing their Hajj. The person performing it acts as a representative, carrying out every ritual as if the deceased were present.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We at Haramain Umrah Taxi connect you with qualified individuals who perform Hajj Badal with sincerity and proper knowledge for your departed loved ones.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Perform Hajj Badal for a Dead Person - Complete Guide</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The process of how to perform Hajj Badal for a deceased follows the same rituals as regular Hajj, with one crucial difference—your intention.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Step 1 - Make a Clear Intention at Miqat</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Before entering Ihram, state clearly in your heart and preferably aloud: &quot;Labbayka Hajjan &apos;an (deceased person&apos;s name).&quot; This means &quot;O Allah, I answer Your call to perform Hajj for (name).&quot; This intention separates this Hajj from yours. Without proper niyyah, the reward goes to you instead of the deceased.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Step 2 - Enter the State of Ihram</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  At the Miqat boundary, men wear two white unstitched cloths. Women wear modest Islamic clothing. Enter the sacred state with your intention firmly set.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Step 3 - Perform Tawaf al-Ifadah</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Next, you have to complete seven rounds of Tawaf around the Holy Kaaba. Walk counterclockwise starting from the Black Stone corner. Keep your deceased loved one in your thoughts and prayers.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Step 4 - Complete Sa&apos;i</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Walk seven times between Safa and Marwa hills. This commemorates Hajar&apos;s search for water. Each step you take earns rewards for your deceased family member.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Step 5 - Stand at Arafah</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  On the 9th of Dhul-Hijjah, stand at Mount Arafah from noon until sunset. This is the most important pillar of Hajj. Make heartfelt duas for your deceased loved one.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Step 6 - Stay in Muzdalifah</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  After sunset on Arafah day, proceed to Muzdalifah. You will spend the night under the open sky and collect pebbles for the next ritual.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Step 7 - Stone the Jamarat</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Over three days, throw pebbles at the pillars representing Satan. Perform this ritual carefully, maintaining your intention for the deceased.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Step 8 - Offer Qurbani</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You will sacrifice an animal (sheep, goat, cow, or camel) during the days of Eid al-Adha. This completes a major obligation of Hajj Badal for the deceased persons.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Step 9 - Final Tawaf</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  At the end, you will perform Tawaf al-Wida (farewell Tawaf) before leaving Makkah. Make final duas for the deceased person&apos;s forgiveness and acceptance of this Hajj.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Every single ritual must be completed with care, just as you would for yourself. The deceased person receives full spiritual benefits when done correctly.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Important Rules for Hajj Badal for the Deceased Person</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When performing hajj badal for a deceased person, remember these critical points:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>One person, one Hajj per year:</strong> You cannot perform Hajj Badal for multiple people in the same year. If you want to do Hajj Badal for your dead mother and father, you need separate Hajj journeys.</li>
                  <li><strong>Permission is not needed from the deceased:</strong> Since they have passed away, your sincere intention and the family&apos;s knowledge are sufficient.</li>
                  <li><strong>Women can perform for men:</strong> Gender does not restrict this. A daughter can perform hajj badal for her dead father. A son can do hajj badal for a dead mother.</li>
                  <li><strong>Strangers can perform:</strong> The performer does not need to be family. What matters is their qualification and sincerity.</li>
                  <li><strong>Use inheritance money if available:</strong> If the deceased left wealth and had not performed obligatory Hajj, scholars recommend using their inheritance to arrange Hajj Badal.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Is Hajj Badal Allowed in Islam?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Yes, Hajj Badal for the deceased is fully permissible according to Islamic teachings. A woman once asked Prophet Muhammad (peace be upon him) if she could perform Hajj for her elderly father, who could not endure the journey, and he replied affirmatively.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Another narration strengthens this permission. When a man asked about his deceased father, the Prophet compared it to paying off a debt, saying Allah&apos;s debt deserves to be fulfilled. Islamic scholars from all schools of thought agree on this practice. You can perform hajj badal for a dead person who had the intention but died before completing this obligation.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Who Needs Hajj Badal?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Hajj badal for a deceased person applies when:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>Your parent or relative died before performing the obligatory Hajj</li>
                  <li>They had the financial means, but could not go due to health reasons</li>
                  <li>They intended to perform Hajj, but passed away first</li>
                  <li>They made a vow to perform Hajj, but could not fulfill it</li>
                </ul>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You might need Hajj Badal for a dead father who worked hard his whole life but never got to visit Makkah. Or hajj badal for a dead mother who always dreamed of this journey but could not make it happen.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Who Can Perform Hajj Badal?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Not everyone qualifies to perform Hajj Badal for a deceased person. You must meet specific conditions:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Completed your own Hajj:</strong> You must have completed your own obligatory Hajj first. This is non-negotiable.</li>
                  <li><strong>Practicing Muslim:</strong> You need to be a practicing Muslim who understands the rituals properly and can perform them correctly.</li>
                  <li><strong>Physical fitness:</strong> Hajj is demanding. You should be healthy enough to complete all rites without difficulty.</li>
                  <li><strong>Pure intention:</strong> Your intention must be pure. You are doing this solely for Allah and the deceased person&apos;s benefit.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Can You Perform Multiple Hajj Badal?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Yes, you can perform hajj badal for a deceased multiple times for different people across different years. Each Act stands independently.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Haramain Umrah Taxi for Hajj Badal Services?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Arranging Hajj Badal requires trust. You want someone knowledgeable, sincere, and reliable. At Haramain Umrah Taxi, we understand this sacred responsibility. We provide:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>Qualified performers who have completed their own Hajj</li>
                  <li>Verified credentials and religious knowledge</li>
                  <li>Clear documentation of the entire process</li>
                  <li>Regular updates during the pilgrimage</li>
                  <li>Affordable pricing with complete transparency</li>
                  <li>Support services in Makkah and throughout the journey</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Do not let your parents or relatives miss this spiritual opportunity. We at Haramain Umrah Taxi make arranging Hajj Badal for the deceased simple, reliable, and trustworthy.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Whether you need to arrange hajj badal for a dead mother who always dreamed of Makkah, or hajj badal for a dead father who worked tirelessly but never made the journey. We are here to help. Contact Haramain Umrah Taxi today. Let us connect you with qualified, sincere individuals who will perform Hajj Badal with the reverence and care your loved ones deserve.
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
