import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Best Time to Perform Umrah | Least Crowded Time for Umrah",
  description: "Discover the best time to perform Umrah. Learn about least crowded months, weather conditions & budget-friendly seasons. Plan your perfect Umrah journey!",
  alternates: {
    canonical: "/best-time-umrah/",
  },
  openGraph: {
    title: "Best Time to Perform Umrah | Least Crowded Time for Umrah",
    description: "Discover the best time to perform Umrah. Learn about least crowded months, weather conditions & budget-friendly seasons. Plan your perfect Umrah journey!",
    url: "/best-time-umrah/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Time to Perform Umrah | Least Crowded Time for Umrah",
    description: "Discover the best time to perform Umrah. Learn about least crowded months, weather conditions & budget-friendly seasons. Plan your perfect Umrah journey!",
  },
};

const post = {
  id: "best-time-umrah",
  title: "Best Time to Perform Umrah | Least Crowded Time for Umrah",
  excerpt: "Discover the best time to perform Umrah. Learn about least crowded months, weather conditions & budget-friendly seasons. Plan your perfect Umrah journey!",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-23",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/best-time-to-perform-umrah.jpeg",
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
              href="/blog/"
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
                  Your blessed Umrah journey deserves perfect timing. Unlike Hajj, you can perform Umrah any time throughout the year. This flexibility lets you choose dates that match your schedule, budget, and comfort needs.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  What matters most to you shapes the best time for Umrah, pleasant weather offers comfort, quieter months bring peace and focus, and budget-friendly seasons make the journey more affordable. Each priority leads to a different ideal time to go.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Months to Perform Umrah</h2>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Winter Months (November to February) - Most Comfortable</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Winter brings the best time to perform Umrah in Makkah for families and elderly pilgrims. Temperatures stay pleasant between 18°C and to 28°C. You can walk comfortably between holy sites without heat exhaustion worries.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  November, early December, late January, and February offer excellent conditions. You get comfortable weather without extreme crowds.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  These months work wonderfully for Umrah with kids. Children handle the moderate climate better. Elderly parents find outdoor rituals manageable. Everyone stays energized throughout the day.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Post-Hajj Season - Least Crowded Months</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The least crowded months for Umrah are Safar, Rabi al-Awwal, and Sha'ban. These months ensure a spiritual environment and allow you to complete all your Umrah without rushing.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Safar comes right after Hajj, when most pilgrims have left, making the holy sites calm with shorter lines at every ritual. Rabi al-Awwal is special as the month of the Prophet Muhammad's (PBUH) birth, offering spiritual rewards with fewer crowds and more affordable hotels near Masjid al-Haram.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  These months are ideal for budget-conscious pilgrims, as Umrah packages, flights, and accommodation costs drop by 30–50%.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Late June is also quieter, as the summer heat keeps many visitors away, giving those who can manage the warmth great value and a more peaceful experience.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Spring (March to May) - Balanced Option</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Spring delivers moderate weather and reasonable crowds. The best month to perform Umrah during spring depends on your specific needs. March sees pre-Ramadan spiritual energy building. April and May bring warmer days but still manageable conditions.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You discover good package deals during spring. Hotels offer competitive rates before the summer slowdown. Airlines maintain regular pricing without extreme peaks. This balance suits first-time pilgrims learning the rituals.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Summer (June to August) - Budget-Friendly Choice</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Summer brings the least crowded month for Umrah due to the intense heat. Temperatures soar above 40°C regularly. Many pilgrims avoid these months, creating enough space at holy sites.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you tolerate heat well, summer offers incredible advantages. Package prices hit yearly lows. You save 40-50% on accommodations, and flight tickets cost significantly less. The Kaaba becomes remarkably accessible during prayer times.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Ramadan - Most Spiritually Rewarding</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Performing Umrah during Ramadan carries immense blessings. Rewards multiply exponentially. Night prayers (Taraweeh) in Masjid al-Haram create unforgettable experiences.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your accommodation costs triple compared to off-season rates. Despite challenges, many pilgrims consider Ramadan the best time for Umrah spiritually.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Time of Day to Perform Umrah</h2>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Early Morning Hours (8:00 AM - 10:00 AM)</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Morning presents optimal conditions for rituals. The weather stays cooler and more comfortable. Crowds thin out after Fajr prayers when many worshippers return to hotels. Tawaf and Sa'i become easy for pilgrims.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You complete rituals efficiently before the afternoon heat builds, and your energy levels stay high throughout the process.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Between Zuhr and Asr</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The afternoon period between Zuhr and Asr prayers offers surprising advantages. Many pilgrims get back to air-conditioned hotels during peak heat. If you handle warmth, you will find good access to holy sites.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Midnight to Early Morning (12:00 AM - 3:00 AM)</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Late night provides the quietest time to do Umrah. The Kaaba is least crowded between midnight and 3:00 AM. The best time to touch the Kaaba happens during these peaceful hours.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can approach the Black Stone (Hajar al-Aswad) more easily. The atmosphere feels deeply spiritual without the daytime rush. Many pilgrims choose these hours for their most important prayers. You feel a genuine connection with Allah without distractions.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Time for Umrah with Kids</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Traveling for Umrah with children needs extra care, with comfort and safety as top priorities. The winter months from November to February are best for families, as mild weather keeps children comfortable and reduces fatigue and health risks.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It is best to avoid Ramadan, as heavy crowds and long fasting hours can unease children and make routines difficult. Off-peak months like Safar or Rabi al-Awwal offer fewer crowds and a calmer, safer environment for kids.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Choosing a hotel close to Masjid al-Haram also helps, allowing short walks and easy breaks for rest.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Time to Visit Makkah for Different Nationalities</h2>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">For US Residents</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Summer holidays from June to August suit families, as children are free from school, though the heat can be intense. Thanksgiving week and Christmas break are excellent options, offering pleasant winter weather and reasonable prices outside peak Islamic dates.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">For Pakistani Pilgrims</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Post-Hajj months like Safar and Rabi al-Awwal are ideal, with lower package prices and better value for money. Winter, from November to February, is also comfortable and familiar. It is best to avoid peak summer heat, but if traveling then, prepare well for extreme temperatures.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">For Indian Pilgrims</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Off-peak months such as April, May, and September provide good weather and affordable costs. School vacations allow family travel, though summer heat should be considered. Festival breaks like Diwali can align well with Umrah, while winter is best for seniors and health-conscious travelers due to mild temperatures.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The best time to perform Umrah depends on your needs, as no single month suits everyone. Winter brings pleasant weather but higher costs, while summer offers lower prices with intense heat. Post-Hajj months like Safar, Rabi al-Awwal, and Sha'ban are quieter and more affordable.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  November, early December, late January, February, and late June balance comfort and crowds well, while early mornings and midnight to 3:00 AM are the calmest times for worship. Above all, sincere intention matters more than timing.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book your Umrah taxi with Haramain Umrah Taxi for trusted guidance, comfortable stays, and clear pricing.
                </p>
              </div>

              {/* Blog Navigation */}
              <BlogNavigation currentPostId={post.id} />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}