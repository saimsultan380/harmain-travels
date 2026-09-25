import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Niat Umrah Badal: Meaning & How to Make Umrah Badal Niyat?",
  description:
    "Learn the correct Niyat Umrah Badal, Arabic niyyah, and how to make the intention for Umrah on behalf of a deceased parent or another person, step by step.",
  alternates: {
    canonical: "/niat-umrah-badal-and-meaning/",
  },
  openGraph: {
    title: "Niat Umrah Badal: Meaning & How to Make Umrah Badal Niyat?",
    description:
      "Learn the correct Niyat Umrah Badal, Arabic niyyah, and how to make the intention for Umrah on behalf of a deceased parent or another person, step by step.",
    url: "/niat-umrah-badal-and-meaning/",
    type: "article",
    images: [
      {
        url: "/images/niat-umrah-badal-meaning.webp",
        alt: "Niat Umrah Badal: Meaning & How to Make Umrah Badal Niyat?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niat Umrah Badal: Meaning & How to Make Umrah Badal Niyat?",
    description:
      "Learn the correct Niyat Umrah Badal, Arabic niyyah, and how to make the intention for Umrah on behalf of a deceased parent or another person, step by step.",
    images: ["/images/niat-umrah-badal-meaning.webp"],
  },
};

const post = {
  id: "niat-umrah-badal-and-meaning",
  title: "Niat Umrah Badal: Meaning & How to Make Umrah Badal Niyat?",
  excerpt:
    "Learn the correct Niyat Umrah Badal, Arabic niyyah, and how to make the intention for Umrah on behalf of a deceased parent or another person, step by step.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-09-25",
  readTime: "9 min read",
  author: "M Umar Irfan",
  image: "/images/niat-umrah-badal-meaning.webp",
};

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-[var(--green)] font-body font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            <article className="bg-[var(--bg)] border-2 border-t-[var(--gold)] border-b-[var(--green)] border-l-[var(--gold)] border-r-[var(--green)] rounded-2xl py-4 px-[10px] md:px-8 md:py-8 lg:px-12 lg:py-12 shadow-lg">
              <span className="inline-block px-4 py-1.5 bg-[var(--green)]/10 text-[var(--green)] font-body text-sm font-semibold rounded-full mb-4">
                {post.categoryName}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[var(--text-1)] mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[var(--text-2)] font-body text-sm mb-8 pb-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[var(--gold)]" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
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

              <div className="mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your parent passed away before they could perform Umrah. Or they were too sick to travel. Now you want to do it for them. That is Umrah Badal. Before you step into Ihram, the niyat has to be right. Wrong intention means the Umrah does not count for them.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This post tells you what the niyat for Umrah Badal is and how to make it for your father, mother, or anyone else.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  What Is Umrah Badal?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Badal means substitute. Umrah Badal means you perform Umrah in place of someone else.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Most people do it for a parent who passed away. Many people do Umrah Badal for a person who is alive, but they are not able to travel due to illness or old age. Either way, you perform the Umrah. The reward goes to them. You get rewarded too for doing it.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Just imagine this for a second: you are standing in front of the Kaaba and making Tawaf. Your parents in their grave will receive the reward of every step. That is what Umrah Badal is. One of the most powerful acts of love a child can do for a parent after they pass.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This is valid in Islam. Scholars agree on it. You just need to meet a couple of conditions first.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/what-is-umrah-badal-explained.webp"
                    alt="What is Umrah Badal"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Who Can Perform Umrah Badal?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must have already done your own Umrah or Hajj. Your own obligation comes first and you cannot skip that and do Umrah Badal instead.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can only perform Umrah Badal for a Muslim. Your niyat must name that specific person. Not a general intention. A specific one.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  That is all. If those are met, you can proceed.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Niat Umrah Badal Meaning
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Niat means intention. Before entering Ihram at the Miqat, you say the niyat out loud and keep it firm in your heart. You make the intention that this Umrah is for the person whose name you are about to say. That single difference in intention is what makes it Umrah Badal.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Everything else, the Tawaf, the Sa&apos;i, the cutting of hair, stays the same.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How to Make Niyyah for Umrah Badal?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Put on your Ihram at the Miqat. Before you start the Talbiyah, say the niyat out loud.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The words in Arabic are:
                </p>
                <p className="text-[var(--text-1)] leading-relaxed mb-2 font-semibold">
                  Labbayk Allahumma Umratan an (name of person)
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Meaning: O Allah, I am here to perform Umrah on behalf of (NAME)
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Say the name clearly. Keep that person in your mind and heart throughout the full Umrah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Niyat Umrah Badal in Arabic
                </h2>
                <p
                  className="text-[var(--text-1)] leading-relaxed mb-4 text-2xl font-semibold text-center"
                  dir="rtl"
                  lang="ar"
                >
                  لَبَّيْكَ اللَّهُمَّ عُمْرَةً عَنْ [اسم الشخص]
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Transliteration - Labbayk Allahumma Umratan an (name)
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Say this at the Miqat before starting. Say it out loud. Say it with full intention in your heart.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Umrah Badal Niyat for Deceased Father
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The niyat for your deceased father:
                </p>
                <p className="text-[var(--text-1)] leading-relaxed mb-4 font-semibold">
                  Labbayk Allahumma Umratan an (father&apos;s name)
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Say his name. If your father&apos;s name was Ibrahim, you say: Labbayk Allahumma Umratan an Ibrahim. Think of him at every step. The Tawaf is for him. The Sa&apos;i is for him. All of it.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Niyat Umrah Badal for Deceased Mother
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The niyat for your deceased mother:
                </p>
                <p className="text-[var(--text-1)] leading-relaxed mb-4 font-semibold">
                  Labbayk Allahumma Umratan an (mother&apos;s name)
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Say her name clearly. If you are unsure of her full name, say your mother with her name in your heart. Allah knows exactly who you mean.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Umrah Badal Niyat for Someone Else
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The same formula works for any person. Brother, sister, grandparent, or a friend who passed away.
                </p>
                <p className="text-[var(--text-1)] leading-relaxed mb-4 font-semibold">
                  Labbayk Allahumma Umratan an (person&apos;s name)
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Just say their name in place of the brackets. One name, one niyat, one Umrah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Umrah Badal Dua
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  There is no specific fixed dua for Umrah Badal. After completing the Umrah, make your own dua. Ask for their forgiveness and mercy. Ask for their rank in Jannah to be raised.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Some people sit near the Kaaba after completing everything and just talk to Allah. No fixed words. Just whatever is in the heart. That is perfectly fine. In fact, that kind of raw, personal dua is often the most sincere.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This moment hits hard for most people, especially for parents. Tears are common here. That is not weakness. That is love.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Important Points to Remember
                </h2>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  One Person Per Umrah
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  For one umrah, you can make niyat for one person. If you want to do Umrah Badal for both your father and your mother, you need to perform two separate Umrahs with separate niyats. You cannot combine them into one.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Complete the Full Umrah
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must complete the entire Umrah. Tawaf, Sa&apos;i, and the cutting of hair. Leaving any part incomplete means the Umrah is not done. Do not rush through it. Give it the time it deserves.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Your Own Umrah First
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Do not forget. Your own Umrah or Hajj must come before you do Umrah Badal for anyone else. This is a condition scholars agree on. Your obligation comes first.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Gender Does Not Matter
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A man can perform Umrah Badal for a woman and for a man; a woman can perform Umrah Badal as well. There is no restriction on this. What matters is the correct niyat, not who is making it.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Conclusion
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Umrah Badal is not complicated. The niyat is simple. The words are short. The conditions are clear. What makes it heavy is the reason behind it. You are doing something for someone who can no longer do it themselves. Someone you loved and someone you miss.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Get the niyat right. Say their name. Keep them in your heart through every step of the Umrah. Make dua for them when it is done. That is everything.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  May Allah accept every Umrah Badal performed for deceased parents and loved ones. May He grant them the full reward and forgive them completely. Ameen.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Need help arranging Umrah Badal in Makkah?{" "}
                  <Link
                    href="/hajj-and-umrah-badal/"
                    className="text-[var(--green)] font-semibold hover:underline"
                  >
                    Learn about our Hajj and Umrah Badal services
                  </Link>
                  {" "}or{" "}
                  <a
                    href="https://wa.me/966598401594"
                    className="text-[var(--green)] font-semibold hover:underline"
                  >
                    message us on WhatsApp
                  </a>
                  .
                </p>
              </div>

              <BlogNavigation currentPostId={post.id} />

              <div className="mt-12 pt-8 border-t border-[var(--border)]">
                <div className="flex items-center justify-between">
                  <p className="text-[var(--text-2)] font-body font-semibold">Share this article</p>
                  <button
                    type="button"
                    aria-label="Share this article"
                    className="w-10 h-10 rounded-full bg-[var(--bg-alt)] border border-[var(--border)] flex items-center justify-center text-[var(--text-2)] hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
                  >
                    <Share2 size={18} />
                  </button>
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
