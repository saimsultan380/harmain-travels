import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Difference Between Damm, Fidyah, and Kaffarah in Easy Words - Haramain Umrah Taxi",
  description: "Understand the difference between Damm, Fidyah, and Kaffarah in Islam. Learn when each applies, the type of compensation required, and examples for Umrah, Hajj, and Ramadan.",
  alternates: {
    canonical: "/difference-betweeen-damm-fidyah-kaffarah",
  },
};

const post = {
  id: "difference-betweeen-damm-fidyah-kaffarah",
  title: "Difference Between Damm, Fidyah, and Kaffarah in Easy Words",
  excerpt: "Understand the difference between Damm, Fidyah, and Kaffarah in Islam. Learn when each applies, the type of compensation required, and examples for Umrah, Hajj, and Ramadan.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-04-27",
  readTime: "7 min read",
  author: "M Umar Irfan",
  image: "/images/difference-betweeen-damm-fidyah-kaffarah.png",
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
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The three terms that most people listen to when preparing for Umrah or Hajj. These terms are Damm, Fidyah and Kaffarah. You may get confused between these three terms, as each term involves some form of compensation. However, these are not the same.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You must know the difference between these terms as each one applies to a different situation. By understanding this difference, you can save yourself from unnecessary stress during the Umrah journey.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Let's discuss the difference in easy words.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What is Damm?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In Arabic, the literal meaning of Damm is "Blood". It is the sacrifice of a small animal, like a sheep or goat, that the pilgrim does for the compensation of a mistake made during his Umrah or Hajj. If you violate a rule of Ihram or miss any obligatory act (wajib), then Damm becomes necessary for you.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The following are the conditions that require Damm for Umrah or Hajj:</p>
                
                <ul className="list-disc pl-6 text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>Violation of the rule of Ihram or missing any obligatory act</li>
                  <li>Shaving your hair before the specific time</li>
                  <li>Applying the perfume in ihram</li>
                  <li>Wearing stitched clothes</li>
                  <li>Crossing the Miqat without ihram</li>
                </ul>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">There is an important rule for Damm. It must be performed within the boundaries of the Haram in Makkah, not in any other place. You cannot perform Damm in your home. The meat of Damm needs to be distributed among the poor. Damm is a way to amend mistake or reaffirm the commitment to the Umrah or Hajj. It is not a punishment.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What is Fidyah?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Fidyah means "Compensation," but it is different in context and covers different things as compared to Damm. Fidyah is the lighter form of cleaning mistake or guilt for minor violations that occurred during Hajj or Umrah.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">For example, if you cover your head during Ihram or the removal of a few hairs due to any medical issues, then these are considered minor lapses. Such conditions do not need the sacrifice of animals. However, you have to feed 6 poor people, or if you cannot feed then must fast for 3 days as an alternative.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Fidyah context is different in Ramadan than in Umrah or Hajj. A person should pay Fidyah if they cannot fast during Ramadan due to any genuine issue like old age, a chronic disease, or a condition that makes fasting impossible.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Fidyah is for genuine issues, not for those people who do not fast out of laziness. For missing a fast, two meals a day are fed to one poor person to show an act of compassion. It allows people to take advantage of the spirit of Ramadan if they cannot physically fast.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What is Kaffarah?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Kaffarah is a heavier form of compensation for guilt or wrongdoings. If someone sins deliberately, not by mistake, then for the cleansing of sin Kaffarah is must.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">For example, if someone breaks the fast during Ramadan without a valid excuse, then the compensation for that sin is Kaffarah. To deliberately break the fast, 60 days of fasting or feeding 60 poor people are needed for cleansing or amendment of this mistake.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The major difference between Fidyah and Kaffarah is:</p>
                
                <ul className="list-disc pl-6 text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>In Fidyah, you have to fast or feed the poor if you cannot genuinely do something necessary.</li>
                  <li>In Kaffarah, if someone commits a mistake or sin deliberately, then they have to fast or feed the poor.</li>
                </ul>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Kaffarah is not a punishment, but it is designed to make a person realize their mistakes or wrong actions and seek sincere repentance with the physical act of compensation as well.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Difference Between Damm, Fidyah, and Kaffarah in an Easy Way</h2>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-[var(--border)] rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-[var(--gold)] text-white">
                        <th className="px-4 py-3 text-left font-heading font-bold">Aspect</th>
                        <th className="px-4 py-3 text-left font-heading font-bold">Damm</th>
                        <th className="px-4 py-3 text-left font-heading font-bold">Fidyah</th>
                        <th className="px-4 py-3 text-left font-heading font-bold">Kaffarah</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-[var(--border)]">
                        <td className="px-4 py-3 font-semibold text-[var(--text-1)]">When does it apply?</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">During Umrah or Hajj</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">During Umrah or Hajj, or Ramadan (minor violation)</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">When a major religious obligation is deliberately broken</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="px-4 py-3 font-semibold text-[var(--text-1)]">Reasons</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Missing a wajib act or violating an Ihram restriction (intentionally or unintentionally)</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Genuine inability (like chronic illness) or minor violation</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Intentional and serious violation (e.g., deliberately breaking a fast)</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="px-4 py-3 font-semibold text-[var(--text-1)]">Level of Seriousness</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Moderate</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Lighter form of compensation</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Most serious of the three</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="px-4 py-3 font-semibold text-[var(--text-1)]">Type of Compensation</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Animal sacrifice in the Haram</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Feeding the poor or fasting (depending on the situation)</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Fasting 60 consecutive days or feeding 60 poor people (depending on ruling)</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="px-4 py-3 font-semibold text-[var(--text-1)]">Location Requirement</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Must be done within the Haram area</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">No specific location (can be given where needed)</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">No specific location, but must fulfill the required conditions</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-[var(--text-1)]">Example</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Missing a wajib act in Hajj</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">An elderly person unable to fast in Ramadan</td>
                        <td className="px-4 py-3 text-[var(--text-2)]">Intentionally eating during a Ramadan fast</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Damm, Fidyah, and Kaffarah are all forms of compensation or cleansing of sin or guilt in Islam. However, the purpose of each is different.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Damm is an animal sacrifice in Makkah for violating any specific rules of Umrah or Hajj. Fidyah is a minor mistake during Umrah or Hajj by the pilgrim or inability of fasting in Ramadan.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">However, Kaffarah is the compensation for a serious violation in Islam, like breaking fast deliberately. After reading this blog post by Haramain Umrah Taxi, we believe that your confusion about these terms may be solved.</p>
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
