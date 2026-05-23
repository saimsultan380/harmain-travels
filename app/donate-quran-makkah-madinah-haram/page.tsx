import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, Heart, CheckCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How to Donate Quran in Makkah, Madinah & Masjid Al Haram?",
  description: "Learn how to donate Quran in Makkah & Madinah properly. Complete guide to Waqaf a Quran in Masjid Al Haram & Masjid Nabawi online with official channels.",
  alternates: {
    canonical: "/donate-quran-makkah-madinah-haram/",
  },
};

const post = {
  id: "donate-quran-makkah-madinah-haram",
  title: "How to Donate Quran in Makkah, Madinah & Masjid Al Haram?",
  excerpt: "Learn how to donate Quran in Makkah & Madinah properly. Complete guide to Waqaf a Quran in Masjid Al Haram & Masjid Nabawi online with official channels.",
  category: "other-services",
  categoryName: "Other Services",
  date: "2026-05-12",
  readTime: "11 min read",
  author: "M Umar Irfan",
  image: "/images/How-to-Donate-Quran-in-Makkah-Madinah-andMasjid-Al-Haram-.png",
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
                  Imagine millions of pilgrims reading from a Quran you donated. Every recitation earns you rewards even after you return home. Every prayer someone offers using your donated Quran adds blessings to your account. This is <strong>Sadaqah Jariyah</strong>, a continuous charity that benefits you in this life and the next. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We will show you exactly how to donate quran in Makkah and Madinah through proper channels that ensure your gift reaches the holiest mosques.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <BookOpen className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Permanent Waqf</h3>
                    <p className="text-sm text-[var(--text-2)]">Your donation stays in the mosque permanently as a religious endowment.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <CheckCircle className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Official Seals</h3>
                    <p className="text-sm text-[var(--text-2)]">Only copies with official mosque stamps and approved prints are accepted.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Heart className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Sadaqah Jariyah</h3>
                    <p className="text-sm text-[var(--text-2)]">Earn continuous blessings from every recitation of the Holy Quran.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Understanding Waqf A Quran</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Waqaf A Quran means dedicating a Quran as a permanent religious endowment. Once you donate it properly, the Quran stays in the mosque permanently. You cannot take it back. This makes it true Sadaqah Jariyah.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The concept comes from the Islamic law of Waqf. You dedicate something permanently to Allah. The mosque authorities maintain your donated Quran. They replace damaged copies and ensure proper handling.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your waqaf a quran follows specific rules. Not just any Quran qualifies for placement in Masjid al-Haram or Masjid Nabawi. The copies need official seals and approvals from mosque management.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Official Requirements for Quran Donation</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You cannot simply buy a Quran from any store and leave it in the mosque. The authorities will remove unauthorized copies later. This wastes your money and intention.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Authorized Qurans need special stamps and seals. These show that mosque management approved them officially. Only certified publishers work with the mosque authorities directly.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Quran must meet size and print quality standards. Masjid al-Haram prefers specific dimensions and clear Arabic fonts. Binding quality matters because millions of hands will touch it over the years.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Donate Quran in Makkah - 3 Best Options</h2>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Option 1 - Donate Through Official Partners</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can donate quran in Makkah online through verified organizations. These groups work directly with Masjid al-Haram management. They handle all official requirements for you.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Reputable platforms include established Islamic charities with proven track records. They show you photo or video proof of placement. You receive certificates confirming your donation reached the mosque.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Option 2 - Visit Authorized Bookstores</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When you visit Makkah physically, authorized bookstores near Masjid al-Haram offer donation services. Dawah Corner Bookstore is one example working officially with mosque management.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You pay for the Quran at these stores. They stamp it with official seals. Then they deliver it to mosque authorities following proper protocols. You can watch the process if you want.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Option 3 - Ramadan and Special Campaigns</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  During Ramadan and Hajj seasons, special campaigns run for quran donation in Makkah. These campaigns often offer discounted rates because of bulk purchases.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can donate one Quran or sponsor multiple copies. Some campaigns let you dedicate each Quran to different family members. This multiplies your blessings. Always verify that Ramadan campaigns work through official channels.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Donate Quran to Masjid Al Haram?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Donating the quran to masjid al haram specifically requires understanding the mosque&apos;s unique system. Masjid al-Haram management maintains strict quality controls.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You cannot hand a Quran directly to mosque staff. You must go through authorized partners or certified bookstores.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When you donate quran to masjid al haram online, choose platforms that show verification stamps in their photos. These stamps prove official approval from mosque management. Without stamps, your Quran might get removed later.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Donate Quran in Madinah?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Donation of the quran to Masjid Nabawi also requires official approvals and proper seals. Authorized bookstores exist in Madinah, too. You can visit them when performing Umrah or visiting the Prophet&apos;s mosque.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Madinah donation shops operate near Masjid Nabawi. You can complete your donation process between prayers. This makes it convenient during your stay.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Donate Quran to Masjid Nabawi - Online Donation Process</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Let us tell you how to donate the quran to Masjid Nabwi online completely in simple and easy steps:
                </p>
                <ol className="list-decimal pl-6 mb-8 text-[var(--text-2)] space-y-2">
                  <li><strong>Research:</strong> Choose a verified platform. Check their credentials, reviews, and official partnerships.</li>
                  <li><strong>Selection:</strong> Select your preferred mosque, Masjid al-Haram or Masjid Nabawi.</li>
                  <li><strong>Details:</strong> Choose Quran size and quantity. Normal size suits most people.</li>
                  <li><strong>Dedication:</strong> Write the beneficiary&apos;s name, either living or deceased.</li>
                  <li><strong>Payment:</strong> Complete payment through secure methods like credit cards or PayPal.</li>
                  <li><strong>Confirmation:</strong> Receive confirmation email with donation details.</li>
                  <li><strong>Proof:</strong> Get photo or video proof after placement.</li>
                </ol>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Common Mistakes to Avoid During Waqf A Quran</h2>
                <ul className="list-disc pl-6 mb-8 text-[var(--text-2)] space-y-2">
                  <li><strong>Random Placement:</strong> Never buy random Qurans and leave them in the mosque yourself. They will be removed without proper seals.</li>
                  <li><strong>Low-Cost Scams:</strong> Do not use unverified platforms promising impossibly low prices. Proper Qurans with official seals have standard costs.</li>
                  <li><strong>Lack of Verification:</strong> Avoid platforms that cannot provide placement verification through photos or videos.</li>
                  <li><strong>Vague Intentions:</strong> Do not forget to make clear dedications for whose name you want the Quran donated.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How Haramain Umrah Taxi Can Help in Quran Donation?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When you visit Makkah or Madinah for Umrah, we can take you to authorized Quran donation locations. Our drivers know which bookstores work officially with mosque management.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We transport you safely to Dawah Corner and other certified shops. You can purchase and donate Qurans while we wait. Our drivers speak multiple languages and explain the donation process clearly.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Umrah transportation with us and include a Quran donation as part of your spiritual journey. We help you create lasting Sadaqah Jariyah while visiting the holy cities.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Donating a Quran to Makkah and Madinah creates endless rewards for you and your loved ones. Whether you donate quran in Makkah online or visit authorized bookstores in person, ensure you follow official procedures. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Waqaf a quran in Masjid al-Haram or Masjid Nabawi multiplies your rewards beyond imagination. Start your Sadaqah Jariyah today and secure ongoing rewards for this life and the hereafter.
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
