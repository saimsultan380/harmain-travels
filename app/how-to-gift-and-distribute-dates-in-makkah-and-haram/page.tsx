import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How to Gift and Distribute Dates in Makkah & Masjid Al Haram",
  description:
    "Get our trusted services to distribute & gift dates in Makkah & Masjid Al Haram to the pilgrims and worshippers from anywhere in the world with transparency",
  alternates: {
    canonical: "/how-to-gift-and-distribute-dates-in-makkah-and-haram/",
  },
  openGraph: {
    title: "How to Gift and Distribute Dates in Makkah & Masjid Al Haram",
    description:
      "Get our trusted services to distribute & gift dates in Makkah & Masjid Al Haram to the pilgrims and worshippers from anywhere in the world with transparency",
    url: "/how-to-gift-and-distribute-dates-in-makkah-and-haram/",
    type: "article",
    images: [
      {
        url: "/images/how-to-gift-and-distribute-dates-in-makkah.webp",
        alt: "How to Gift and Distribute Dates in Makkah & Masjid Al Haram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Gift and Distribute Dates in Makkah & Masjid Al Haram",
    description:
      "Get our trusted services to distribute & gift dates in Makkah & Masjid Al Haram to the pilgrims and worshippers from anywhere in the world with transparency",
    images: ["/images/how-to-gift-and-distribute-dates-in-makkah.webp"],
  },
};

const post = {
  id: "how-to-gift-and-distribute-dates-in-makkah-and-haram",
  title: "How to Gift and Distribute Dates in Makkah & Masjid Al Haram",
  excerpt:
    "Get our trusted services to distribute & gift dates in Makkah & Masjid Al Haram to the pilgrims and worshippers from anywhere in the world with transparency",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-08-31",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/how-to-gift-and-distribute-dates-in-makkah.webp",
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
                  Dates hold a special place in Islam. The Prophet, peace be upon him, broke his fast with dates, recommended them, and spoke about their blessings many times. Giving dates to pilgrims in Makkah or inside Masjid Al Haram is not just a nice gesture. For many people, it carries deep personal meaning: a way to give sadaqah from afar, honour someone who passed away, or simply share in the worship happening at the holiest place on earth.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The tricky part is doing it from outside Saudi Arabia. A lot of people have tried that and got nothing back except a receipt. Haramain Umrah Taxi is physically present in Makkah and handles date distribution on your behalf, properly, with confirmation sent back to you.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Dates and the Sunnah of the Prophet
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Prophet, peace be upon him, had a deep connection with dates throughout his life. He ate them, gifted them, and described their benefits in ways that have stayed with Muslims for centuries. When you distribute dates in Makkah, especially near the Haram, you are following a practice rooted directly in his Sunnah. That alone makes it worth doing.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Think about who is walking in and out of Masjid Al Haram every single day. These are people who saved for years to make this trip. Many of them are fasting, exhausted, or simply overwhelmed by the experience of being there.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Handing someone a date outside the Haram or inside it during those moments is not small. It lands differently when you are in that state of worship and someone offers you something with a smile.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Why People Want to Donate Dates Online in Makkah?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Most people who want to gift dates to pilgrims in Makkah are not in Saudi Arabia. They are in the UK, Canada, Pakistan, Nigeria, Malaysia, sitting at home wishing they could do something meaningful from where they are. The intention is real, but the distance feels like a wall. Online date donation through a trusted service on the ground breaks that wall down.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/why-people-want-to-donate-dates-online.webp"
                    alt="Why people want to donate dates online in Makkah"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">
                  Sadaqah on Behalf of Someone Else
                </h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A huge number of requests Haramain Umrah Taxi receives are from people distributing dates on behalf of a parent who passed away, a relative who never got to do Umrah, or someone going through a difficult time.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Distributing dates in Makkah as a form of sadaqah jariyah on someone&apos;s behalf is something scholars have encouraged. The fact that it happens near the Haram adds to that intention.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Problem With Random Online Date Distribution Services
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Search for how to distribute dates in Makkah and you will find dozens of social media pages and websites offering to do it for you. Some of them post nice photos. Some write very convincing captions. But when you send money, the follow-up is either silence or a generic photo that could have been taken anywhere at any time.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  People had the right intention, they sent money, and they got nothing back that proved their dates ever reached a single pilgrim. After that kind of experience, it becomes very hard to try again even when the desire to give is still there.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How Haramain Umrah Taxi Distributes Dates in Makkah?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi is not operating this service from an office outside Saudi Arabia. The team is on the ground in Makkah, working daily in and around the Haram area. That means when you place a date distribution request, there is no middleman passing it along to someone else. We handle it directly.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We buy fresh, good-quality dates from local suppliers in Makkah. Not cheap filler dates, proper ones that are actually worth gifting to a pilgrim. Once purchased, distribution is done in person near Masjid Al Haram or in areas where pilgrims are gathered. After it is done, we send you confirmation so you know your sadaqah went where you intended.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  How to Donate Dates in Makkah Through Haramain Umrah?
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Reach out on WhatsApp and tell us a few simple things. How many people you want to gift dates to, if you have a specific date in mind, and if you are distributing on someone&apos;s behalf. That is all we need to get started. We will come back to you with a clear price and no hidden additions on top.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Once you confirm and send payment, we sort the rest. Dates get purchased, distribution happens near the Haram, and confirmation comes back to you. No vague updates, no certificates that do not prove anything. Just real dates reaching real pilgrims in Makkah with proper follow-through from our side.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/how-to-donate-dates-through-haramain-umrah.webp"
                    alt="How to donate dates in Makkah through Haramain Umrah"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Conclusion
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you have been thinking about how to distribute dates to pilgrims in Makkah but were not sure who to trust, this is a straightforward answer. We are already there; we know how to do it, and we send you confirmation once it is done.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Send a WhatsApp message today. Tell us what you want to do and we will take it from there. Your sadaqah deserves to reach the right hands, and we make sure it does.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  <a
                    href="https://wa.me/966598401594"
                    className="text-[var(--green)] font-semibold hover:underline"
                  >
                    Message us on WhatsApp
                  </a>
                  {" "}to gift dates in Makkah, or{" "}
                  <Link href="/dates-distribution-services/" className="text-[var(--green)] font-semibold hover:underline">
                    learn more about our dates distribution services
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
