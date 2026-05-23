import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How to Perform Umrah Badal for a Deceased & Dead Person?",
  description: "Discover how to perform Umrah Badal for a deceased person with proper intention and rituals. Trust Haramain Umrah Taxi for reliable Umrah Badal services.",
  alternates: {
    canonical: "/how-to-perform-umrah-badal-for-a-deceased-dead-person/",
  },
};

const post = {
  id: "how-to-perform-umrah-badal-for-a-deceased-dead-person",
  title: "How to Perform Umrah Badal for a Deceased & Dead Person?",
  excerpt: "Discover how to perform Umrah Badal for a deceased person with proper intention and rituals. Trust Haramain Umrah Taxi for reliable Umrah Badal services.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-12",
  readTime: "10 min read",
  author: "M Umar Irfan",
  image: "/images/How-to-Perform-Umrah-Badal-for-a-Deceased-Dead-Person.png",
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
                  Umrah Badal means performing Umrah on behalf of someone else. You are essentially acting as their proxy. This blessed practice allows you to earn continuous rewards for a deceased family member while giving them spiritual benefits in the hereafter.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The term &quot;Badal&quot; means substitute or replacement. When you perform umrah badal for deceased loved ones, you are completing a worship act they can no longer do themselves. We at Haramain Umrah Taxi help you arrange this sacred act with trusted, knowledgeable individuals who perform Umrah Badal for your loved ones.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Perform Umrah Badal for a Dead Person - 6 Steps to Guide</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The process of how to perform umrah badal for a deceased is straightforward. Here is what you need to do:
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">1. Make Your Intention Clear</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Before entering Ihram at the Miqat, make a clear niyyah. Say in your heart: &quot;O Allah, I am performing this Umrah for (name of deceased person).&quot; You can specifically say &quot;for my mother&quot; or &quot;for my father.&quot; This intention separates this Umrah from your own. Without proper niyyah, the reward goes to you instead.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">2. Enter Ihram</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  In the second step, you have to wear your Ihram garments at the designated Miqat point. Men wear two white unstitched cloths. Women wear modest clothing. Make your intention clear at this point.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">3. Perform Tawaf</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Complete seven rounds of Tawaf around the Holy Kaaba. Walk counterclockwise, starting from the Black Stone. You should keep your deceased loved one in your prayers throughout.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">4. Complete Sa&apos;i</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  In this step, perform Sa&apos;i by walking seven times between Safa and Marwa hills. This commemorates Hajar&apos;s search for water for her son Ismail.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">5. Cut Your Hair</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Next, men shave their heads or trim their hair. Women cut a fingertip&apos;s length from the ends of their hair. This marks the completion of your Umrah Badal.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">6. Make Dua</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You should offer special prayers for your deceased family member. Ask Allah to accept this Umrah on their behalf and grant them forgiveness.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  The entire ritual remains identical to performing Umrah for yourself. The only difference is your intention at the start.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Umrah Badal for Deceased Person - Important Points</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When performing umrah badal for a deceased person, keep these points in mind:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Cannot combine intentions:</strong> Each Umrah needs a separate intention. If you want to perform Umrah badal for your dead mother and father, you need to do two separate Umrahs.</li>
                  <li><strong>Inform the family if possible:</strong> While not mandatory, telling the family brings them peace and comfort.</li>
                  <li><strong>Choose knowledgeable performers:</strong> If you are arranging an umrah badal for a deceased through a service, select trustworthy individuals who understand the rituals properly.</li>
                  <li><strong>No time restrictions:</strong> You can perform Umrah Badal any time of year. Off-season months like Safar or Rajab offer less crowded experiences.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Is Umrah Badal Permissible in Islam?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Yes, Islamic scholars agree that umrah badal for a dead person is completely permissible. A hadith narrated by Fadl ibn Abbas mentions that a woman asked Prophet Muhammad (peace be upon him) about performing pilgrimage on behalf of her elderly father, who could not travel, and the Prophet instructed her to do so.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This permission extends to both Hajj and Umrah. If you can perform these acts for living individuals who are physically unable, you can certainly do them for those who have passed away.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Who Can Perform Umrah Badal for Deceased?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can perform umrah badal for a deceased person if you meet these conditions:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>You must be Muslim</li>
                  <li>You should have already completed your own obligatory Umrah first.</li>
                  <li>You need to understand the rituals properly.</li>
                  <li>Your intention must be purely for the deceased person.</li>
                </ul>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Whether you want to do umrah badal for a dead father or umrah badal for a dead mother, these rules apply equally. You are carrying a spiritual responsibility, so fulfilling your own obligation first matters.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Can You Perform Multiple Umrah Badal?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Yes, you can perform umrah badal for a deceased multiple times for different people. Each requires:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>Fresh Ihram from the Miqat</li>
                  <li>Clear intention for that specific person</li>
                  <li>Complete performance of all rituals</li>
                </ul>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You might do umrah badal for your dead father on one trip and umrah badal for your dead mother on another. Or perform both during the same journey, but as separate acts.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Haramain Umrah Taxi for Umrah Badal Services?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We understand how deeply you care about your deceased loved ones. At Haramain Umrah Taxi, we connect you with experienced individuals who perform umrah badal for the deceased with sincerity and proper knowledge. Our services include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li>Verified performers who have completed their own Umrah</li>
                  <li>Clear communication throughout the process</li>
                  <li>Proper documentation and confirmation</li>
                  <li>Competitive pricing with transparency</li>
                  <li>Support in Makkah and Madinah</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Benefits of Umrah Badal</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Performing umrah badal for a dead person brings immense rewards. The Prophet (peace be upon him) said that when a person dies, their deeds end except for three things: ongoing charity, beneficial knowledge, and a righteous child who prays for them.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Umrah Badal acts as an ongoing charity. Every step you take in Masjid al-Haram, every Tawaf around the Kaaba, every prayer at the sacred sites, all these rewards flow to your deceased loved one. Think of it as sending light into darkness. Your loved one benefits spiritually while you earn rewards for facilitating this blessed act.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book Your Umrah Badal Service Today. Do not let your deceased loved ones miss out on this spiritual gift.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We at Haramain Umrah Taxi make the process simple and trustworthy. If you need umrah badal for a dead mother, father, or any deceased family member, we are here to help. Contact us today to arrange umrah badal for your loved ones. Give them the gift of worship that continues to benefit them in the hereafter. Your parents raised you with love; now you can honor them with this sacred act.
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
