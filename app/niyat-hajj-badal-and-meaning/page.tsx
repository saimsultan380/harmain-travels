import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Hajj Badal Niyat: How to Perform Hajj Badal for Others?",
  description:
    "Learn the correct Niyat Hajj Badal, Arabic niyyah, and how to make the intention for Hajj Badal on behalf of a deceased parent or another person, step by step.",
  alternates: {
    canonical: "/niyat-hajj-badal-and-meaning/",
  },
  openGraph: {
    title: "Hajj Badal Niyat: How to Perform Hajj Badal for Others?",
    description:
      "Learn the correct Niyat Hajj Badal, Arabic niyyah, and how to make the intention for Hajj Badal on behalf of a deceased parent or another person, step by step.",
    url: "/niyat-hajj-badal-and-meaning/",
    type: "article",
    images: [
      {
        url: "/images/hajj-badal-niyat-how-to-perform.webp",
        alt: "Hajj Badal Niyat: How to Perform Hajj Badal for Others?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hajj Badal Niyat: How to Perform Hajj Badal for Others?",
    description:
      "Learn the correct Niyat Hajj Badal, Arabic niyyah, and how to make the intention for Hajj Badal on behalf of a deceased parent or another person, step by step.",
    images: ["/images/hajj-badal-niyat-how-to-perform.webp"],
  },
};

const post = {
  id: "niyat-hajj-badal-and-meaning",
  title: "Hajj Badal Niyat: How to Perform Hajj Badal for Others?",
  excerpt:
    "Learn the correct Niyat Hajj Badal, Arabic niyyah, and how to make the intention for Hajj Badal on behalf of a deceased parent or another person, step by step.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-09-25",
  readTime: "9 min read",
  author: "M Umar Irfan",
  image: "/images/hajj-badal-niyat-how-to-perform.webp",
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
                  Someone you love passed away before they could perform Hajj. Or they wanted to go, but their body gave out before they could make it. Now you want to stand in Arafat for them. That is Hajj Badal. Before you step into Ihram, the niyat has to be correct. The wrong intention means the Hajj does not reach them.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This post covers what Hajj Badal niyat means, the exact Arabic words, and how to make the niyat for your father, mother, or anyone else who could not perform Hajj themselves.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  What Is Hajj Badal?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Badal means substitute. Hajj Badal refers to doing the Hajj on another person&apos;s behalf. You go. You do all the rituals. But the reward is for the person you made the niyat for.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Hajj Badal is proven from authentic hadith. It was approved by the Prophet Muhammad, peace be upon him. A woman came and asked if she could perform Hajj for her elderly father who could not ride. He said yes. Scholars across all four major schools of jurisprudence accept Hajj Badal as valid.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/what-is-hajj-badal-explained.webp"
                    alt="What is Hajj Badal"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Who Can Perform Hajj Badal?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You must have already performed your own Fardh Hajj. Your own obligation comes first. You cannot do Hajj Badal before that. This is a condition most scholars agree on without exception.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Additionally, you need to be physically fit to do the Hajj. You must be able to perform each ritual on your own. Someone who cannot complete Hajj due to illness cannot perform Hajj Badal for another person either.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Hajj Badal Niyat Meaning
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Niyat means intention. For Hajj Badal, the niyat is made at the Miqat before entering Ihram. You say it out loud with the person&apos;s name and hold it firmly in your heart that this entire Hajj is for them, not for yourself.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The niyat is what makes this Hajj Badal instead of a regular Hajj. Everything you do from the Miqat to the final Tawaf is done on their behalf. Every dua, every step of Sa&apos;i, every stone thrown at Mina; it all goes to the person you named.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How to Make Niyyah for Hajj Badal?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  At the Miqat, put on your Ihram. Then say the niyat out loud before starting Talbiyah. Say the name of the person you are performing Hajj for.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The niyat in Arabic:
                </p>
                <p className="text-[var(--text-1)] leading-relaxed mb-2 font-semibold">
                  Labbayk Allahumma Hajjan an [name of person]
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Meaning: O Allah, I respond to You with the intention of Hajj on behalf of [name].
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Say the name clearly. Then start the Talbiyah and proceed with the Hajj exactly as you would for yourself.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Niyat Hajj Badal in Arabic
                </h2>
                <p
                  className="text-[var(--text-1)] leading-relaxed mb-4 text-2xl font-semibold text-center"
                  dir="rtl"
                  lang="ar"
                >
                  لَبَّيْكَ اَللَّهُمَّ حَجّاً عَنْ [اسم الشخص]
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Transliteration: Labbayk Allahumma Hajjan an [name]
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Say this at the Miqat. Say it out loud. Keep the person&apos;s name and face in your heart before you say it.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Hajj Badal Niyat for Deceased Father
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The niyat for your deceased father:
                </p>
                <p className="text-[var(--text-1)] leading-relaxed mb-4 font-semibold">
                  Labbayk Allahumma Hajjan an [father&apos;s name]
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Say his name. If his name was Yusuf, say: Labbayk Allahumma Hajjan an Yusuf.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Carry him in your heart through every moment of the Hajj. Arafat is for him. Muzdalifah is for him. Every stone you throw is thrown on his behalf.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Niyat Hajj Badal for Deceased Mother
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The niyat for your deceased mother:
                </p>
                <p className="text-[var(--text-1)] leading-relaxed mb-4 font-semibold">
                  Labbayk Allahumma Hajjan an [mother&apos;s name]
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Say her name clearly. If you do not know her exact full name, say your mother with her in your heart. Allah knows who you mean.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Hajj Badal Niyat for Someone Else
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The formula is the same for anyone. A grandparent, a sibling, a friend.
                </p>
                <p className="text-[var(--text-1)] leading-relaxed mb-4 font-semibold">
                  Labbayk Allahumma Hajjan an [person&apos;s name]
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  One Hajj, one niyat, one person. The name is said in the place where the brackets are.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How to Perform Hajj Badal Step by Step?
                </h2>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/how-to-perform-hajj-badal-step-by-step.webp"
                    alt="How to perform Hajj Badal step by step"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Enter Ihram at the Miqat
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Wear your Ihram at the correct Miqat for the direction you are coming from. Make the niyat for Hajj Badal. Say the name. Begin Talbiyah.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Perform All Hajj Rituals
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Complete every ritual of Hajj as you would for yourself. Tawaf al-Qudum on arrival, staying at Mina on the 8th of Dhul Hijjah, standing at Arafat on the 9th, spending the night at Muzdalifah, throwing stones at Mina, the Qurbani, shaving or cutting hair, Tawaf al-Ifadah, and Sa&apos;i.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Nothing Is Skipped
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Hajj Badal requires the full Hajj. Not a shortened version. Every wajib and every rukn must be completed for the Hajj to be valid on behalf of the other person.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Hajj Badal Dua
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  After completing the Hajj, make a personal dua for the person. Ask Allah to accept this Hajj on their behalf. Ask for their sins to be forgiven. Ask for their place in Jannah to be raised.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This dua has no fixed words. Whatever comes from your heart is what matters. Many people cry at this point, especially when it is a parent. That is a sign of sincerity, not weakness.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Important Points
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  One Hajj will be considered for one person only. You cannot make one Hajj count for two people at the same time. If you want to do Hajj Badal for both parents, you need two separate Hajj journeys.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Hajj Badal can be performed for a lady by a man. It can be done for a man by a woman also. There is no restriction on this. The niyat is what matters.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Conclusion
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Giving someone a gift after they are gone is known as Hajj Badal. Your legs carry you around the Kaaba, but the reward travels to them. Your hands throw the stones, but their record receives the good deeds.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Get the niyat right at the Miqat. Say their name. Perform the full Hajj with them in your heart. Make dua when it is complete. May Allah accept every Hajj Badal and unite us with our loved ones in Jannah. Ameen.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Need help arranging Hajj Badal?{" "}
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
