import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How to Feed Food to Pilgrims in Makkah from all over World?",
  description:
    "If you want to donate meal boxes & food to the pilgrims in Makkah, Saudi Arabia from anywhere in the world, we will distribute them for you with transparency",
  alternates: {
    canonical: "/how-to-feed-food-to-pilgrims-in-makkah/",
  },
  openGraph: {
    title: "How to Feed Food to Pilgrims in Makkah from all over World?",
    description:
      "If you want to donate meal boxes & food to the pilgrims in Makkah, Saudi Arabia from anywhere in the world, we will distribute them for you with transparency",
    url: "/how-to-feed-food-to-pilgrims-in-makkah/",
    type: "article",
    images: [
      {
        url: "/images/how-to-feed-food-to-pilgrims-in-makkah.webp",
        alt: "How to Feed Food to Pilgrims in Makkah from all over World?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Feed Food to Pilgrims in Makkah from all over World?",
    description:
      "If you want to donate meal boxes & food to the pilgrims in Makkah, Saudi Arabia from anywhere in the world, we will distribute them for you with transparency",
    images: ["/images/how-to-feed-food-to-pilgrims-in-makkah.webp"],
  },
};

const post = {
  id: "how-to-feed-food-to-pilgrims-in-makkah",
  title: "How to Feed Food to Pilgrims in Makkah from all over World?",
  excerpt:
    "If you want to donate meal boxes & food to the pilgrims in Makkah, Saudi Arabia from anywhere in the world, we will distribute them for you with transparency",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-08-31",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/how-to-feed-food-to-pilgrims-in-makkah.webp",
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
                  Every year millions of pilgrims travel to Makkah from every corner of the world. Many of them struggle financially during their stay. Feeding a pilgrim in Makkah is one of the most rewarding acts of charity in Islam. People living abroad want to donate food in Makkah but have no idea how to do it safely without getting scammed.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi makes this possible. We handle food distribution in Makkah on your behalf so you do not have to worry about your money going nowhere. You are sitting thousands of miles away, and we make sure the food actually reaches pilgrims who need it.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Why Feeding Pilgrims in Makkah Carries So Much Reward?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Prophet Muhammad, peace be upon him, spoke about feeding others as one of the greatest acts of kindness a person can do. Feeding a pilgrim in the holy cities carries a weight that most other acts of charity simply do not. These people left their homes, spent their savings, and came to the house of Allah. Many of them go without proper meals during their stay.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Scholars have spoken about how feeding someone in Makkah during Hajj or Umrah season multiplies the reward in ways that are hard to put into words. This is not just a regular donation. It is a direct link between your money and worship happening at the most sacred place on earth. If you have the means to feed even one pilgrim, do not let that chance pass.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Problem with Online Food Donation Scams
                </h2>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Too Many Fake Services, Too Little Accountability
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You search online for how to donate food in Makkah and within minutes you are looking at dozens of websites offering food distribution. Some of them look professional. Some even post photos and videos. But a lot of these services take your money and nothing reaches any pilgrim at all.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Fake charities and fraudulent accounts have become a real problem. People send money, get a receipt, and never hear anything again. No confirmation, no photos, no proof that food ever left a kitchen. There is no way to check from abroad what actually happened. That is exactly why so many people hold back from donating even when they genuinely want to help someone.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How Haramain Umrah Handles Food Distribution in Makkah?
                </h2>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  We are on the Ground, Not Behind a Website
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi is not a charity page run from outside Saudi Arabia. We operate on the ground in Makkah. We know the city, we work with local food suppliers, and we have built proper distribution channels over time.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When you contact us, you are talking to people who are physically present in Makkah, not someone managing a webpage from another country.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/how-haramain-umrah-handles-food-distribution.webp"
                    alt="How Haramain Umrah handles food distribution in Makkah"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Your Donation Gets Handled Properly
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When you arrange food donation through us, we take care of everything. We buy the food, organise where it goes, and get it into the hands of pilgrims who actually need it. You are not filling out a form and hoping for the best. You are dealing with a team that is already there and already doing this work regularly.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How to Donate Meal Boxes in Makkah?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Contact Haramain Umrah Taxi on WhatsApp or by phone. Tell us how many meal boxes you want and if you have a preferred date. We give you a straight price per meal box with nothing hidden on top of it.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Once payment is confirmed, we go ahead and buy the food and get the distribution organised. We send you confirmation once the meals have gone out. Not a vague certificate, actual confirmation that food reached pilgrims in Makkah. That&apos;s the whole point.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  What Kind of Food Gets Distributed?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We focus on full meal boxes, not something small that barely counts as food. Rice, protein, bread, and a drink are standard in what we put together. The pilgrims receiving these are often elderly visitors, people who have run short on money, or those staying in areas where buying food is not easy or cheap.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Everything is bought fresh from local suppliers in Makkah. The intention behind your sadaqah deserves to be honoured properly. If you are giving on behalf of someone who passed away or out of gratitude for something good in your life, the meal going out should reflect that.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/what-kind-of-food-gets-distributed.webp"
                    alt="What kind of food gets distributed to pilgrims in Makkah"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Reach Out From Wherever You Are
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Message Haramain Umrah Taxi on WhatsApp from wherever you are in the world. Tell us how many people you want to feed. We sort everything else out from there. The distance between you and Makkah does not have to stop your sadaqah from reaching the right hands.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Conclusion
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you have been wanting to donate food in Makkah but were not sure how to do it without getting burned, this is your answer. We are on the ground, we handle it all, and your donation goes where it is supposed to go without any detours.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Send us a message on WhatsApp today. Tell us what you want to give and we will make it happen. Feeding a pilgrim in Makkah is genuinely one of the best things your money can do. Let us help you make it count.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  <a
                    href="https://wa.me/966598401594"
                    className="text-[var(--green)] font-semibold hover:underline"
                  >
                    Message us on WhatsApp
                  </a>
                  {" "}to donate meal boxes in Makkah, or{" "}
                  <Link href="/food-package-distribution/" className="text-[var(--green)] font-semibold hover:underline">
                    learn more about our food package distribution services
                  </Link>
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
