import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Hajj Quota by Country, Hajj Cost & Waiting List by Country - Haramain Umrah Taxi",
  description: "Complete guide to Hajj quota by country for 2026, real costs from over 10 countries, government subsidies, and waiting list information for pilgrims worldwide.",
  alternates: {
    canonical: "/hajj-quota-by-country-hajj-cost-waiting-list-by-country",
  },
};

const post = {
  id: "hajj-quota-by-country-hajj-cost-waiting-list-by-country",
  title: "Hajj Quota by Country, Hajj Cost & Waiting List by Country",
  excerpt: "Complete guide to Hajj quota by country for 2026, real costs from over 10 countries, government subsidies, and waiting list information for pilgrims worldwide.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-04-08",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/hajj-quota-by-country-hajj-cost-waiting-list-by-country.jpg",
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
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Hajj is a journey that a Muslim can make during his or her lifetime. It is one of the most significant ones. However, there is one thing that you need to know before you pack your ihram: there is no definite number of seats assigned to each country, fares varies are all over the world, and in certain countries, the queue is longer than you have ever imagined.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">This guide covers the Hajj quota by country for 2026, real costs from over 10 countries, government subsidies, and how long you might actually wait. Let's get into it.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Hajj Quota by Country 2026</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The hajj quota by country list below gives a realistic estimate for 2026 based on recent data trends.</p>
                
                <div className="mb-8 overflow-x-auto">
                  <table className="w-full border-collapse border border-[var(--border)]">
                    <thead>
                      <tr className="bg-[var(--gold)]/10">
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold text-[var(--text-1)]">Country</th>
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold text-[var(--text-1)]">Estimated Muslim Population</th>
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold text-[var(--text-1)]">Hajj Quota 2026</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Indonesia</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">240 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">221,000</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Pakistan</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">230 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">179,210</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">India</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">210 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">175,025</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Bangladesh</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">150 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">127,198</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Turkey</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">85 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">37,770-85,000+</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Malaysia</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">20 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">31,600+</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">UK</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">3.5 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">3,500-4,000</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">USA</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">3.5 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">10,000</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Canada</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">1.5 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">1,500 – 2,000</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Australia</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">800,000</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">2,090 – 4,333</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Nigeria</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">242.4 million</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">66,910</td></tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">These figures highlight how hajj quota by country 2026 is distributed globally, with larger Muslim populations receiving higher allocations.</p>
                
                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Hajj-Quota-by-Country.jpg"
                    alt="Hajj Quota by Country"
                    width={1400}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Hajj Waiting List by Country</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In most of the countries, when you apply for Hajj, it does not imply that you are going the same year. Rather, you might join a queue that might take years to be cleared.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The Hajj waiting list relies greatly on the size of the population, quota, and the functioning of the local system. Some are strictly government managed queue, with some others being more dependent on the tour operators.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Hajj Waiting List in Indonesia</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The hajj quota is high in Indonesia, where there is the highest number of Muslims in the world, but the demand is extremely high. Consequently, the Hajj waiting period may be 20-30 years in some areas. In 2026, the waiting period is 26 years.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Hajj Waiting List in Malaysia</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The same case is evident in Malaysia, where the hajj quota of Malaysia is administered by Tabung Haji and the waiting time can take more than 15 years.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Hajj Waiting List in South Asia</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In South Asia, the situation is relatively equal. The Indian hajj quota permits a combination of both government and private pilgrims. The waiting period is normally 5 to 10 years, based on the state. The system has been enhanced, yet the supply has not met the demand.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Hajj Waiting List in Pakistan</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Similarly, the Pakistan hajj quota operates through a ballot system, where applicants may get selected within 3 to 7 years, although this can vary each year. The Bangladesh hajj quota also results in waiting periods of around 5 to 8 years.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Hajj Waiting List in Turkey</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Another interesting case is Turkey. Although the system is well-organized, the quota of Turkish hajj is lower than the demand, and it might take an applicant more than 10 years to be selected.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Conversely, long official wait lists are not found in countries such as the UK, USA, Canada, and Australia. The UK hajj quota, USA hajj quota, Canada hajj quota, and Australia hajj quota are not that big, yet pilgrims tend to go on board through licensed private operators. This saves time on waiting, but makes the overall cost higher.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">It is evident that when the hajj waiting list is compared by country, it depends on where you are located, which determines your wait time and also your financial planning.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">It is imperative to know the waiting list of Hajj before applying, particularly when you are planning to attend a particular year, such as 2026.</p>
                
                <div className="mb-8 overflow-x-auto">
                  <table className="w-full border-collapse border border-[var(--border)]">
                    <thead>
                      <tr className="bg-[var(--gold)]/10">
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold text-[var(--text-1)]">Country</th>
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold text-[var(--text-1)]">Waiting List System</th>
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold text-[var(--text-1)]">Approx. Wait Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Malaysia</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Tabung Haji queue</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">30 – 40 years</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Indonesia</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Government queue</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">20 – 26+ years</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">India</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Annual lottery (Qurrah)</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">0 – 2 years (luck-based)</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Pakistan</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Government + private</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Minimal currently (low demand due to high cost)</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Bangladesh</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Government queue</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">5 – 12 years</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Turkey</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Diyanet queue</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">3 – 8 years</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">UK</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">First-come, first-served (Nusuk)</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">No formal list; book early</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">USA</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">First-come, first-served (Nusuk)</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">No formal list; book early</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Canada</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">First-come, first-served (Nusuk)</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">No formal list; book early</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Australia</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">First-come, first-served (Nusuk)</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">No formal list; book early</td></tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6"><strong className="text-[var(--gold)]">Tip –</strong> In countries without a formal waiting list (UK, USA, Canada, Australia), your biggest risk is not time; it is slots running out. Register on Nusuk as early as possible.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Hajj Cost by Country 2026</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The next major question for most individuals is easy to answer: how much does Hajj cost?</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The response to this will be determined by the place you are departing, the kind of package you will opt for, and the kind of comfort you will be experiencing. The price of Hajj has been rising over the past few years because of inflation, demand for travel, and better facilities in Saudi Arabia.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The following is a real-life estimation of the Hajj price per country in 2026:</p>
                
                <div className="mb-8 overflow-x-auto">
                  <table className="w-full border-collapse border border-[var(--border)]">
                    <thead>
                      <tr className="bg-[var(--gold)]/10">
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold text-[var(--text-1)]">Country</th>
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold text-[var(--text-1)]">Average Cost</th>
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold text-[var(--text-1)]">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">USA</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">$6,000 – $8,999</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Premium packages</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">UK</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">£5,500 – £16,000+</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Flexible options</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Canada</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">CAD 11,000 – 16,000</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Similar to the USA</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Australia</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">AUD 12,000 – 18,000</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">High airfare</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">India</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">₹4,00,000 – ₹8,00,000</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Govt + private</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Pakistan</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">PKR 1,150,000 – 1,800,000</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Ballot system</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Bangladesh</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">BDT 500,000 – 7,00,000</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Private sector</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Indonesia</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">$3,500 – $5,500</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Structured pricing</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Malaysia</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">$5,000 – $8,000</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Financial support</td></tr>
                      <tr><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Turkey</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">$6,000 – $9,000</td><td className="border border-[var(--border)] px-4 py-2 text-[var(--text-2)]">Govt controlled</td></tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">These figures give a clear idea of the cost to go to Hajj from different regions. If you compare closely, you will notice that Western countries have significantly higher prices than Asian countries.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Hajj Subsidy – What You Should Know</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In the past, subsidies played a major role in reducing the cost of Hajj in certain countries. However, policies have changed over time. Not everyone pays the full price. Here is the truth on Hajj subsidies:</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Hajj Subsidy in India</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">India officially ended its central Hajj subsidy in 2018 under a Supreme Court ruling. However, certain state governments and the Hajj Committee of India still offer concessional rates under the government scheme compared to private operators.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Hajj Subsidy in Pakistan</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Pakistan reduced its subsidy significantly, but a limited subsidy remains under the government scheme for 2025 – 2026. High package costs mean fewer applicants than the available quota, an unusual reversal from previous years.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Hajj Subsidy in Indonesia</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Indonesia's BPKH (Hajj Financial Management Agency) provides partial subsidies, keeping costs lower than they would otherwise be for such a long-haul journey.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Hajj Subsidy in Malaysia</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Malaysia has the most structured subsidy system globally. Tabung Haji divides support by income group:</p>
                
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li className="mb-2"><strong className="text-[var(--gold)]">B40 (low income)</strong> – Pays only RM 15,000</li>
                  <li className="mb-2"><strong className="text-[var(--gold)]">M40 (middle income)</strong> – Pays RM 23,500</li>
                  <li className="mb-2"><strong className="text-[var(--gold)]">T20 (high income)</strong> – Pays RM 33,300 (near full cost)</li>
                </ul>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The government allocated RM 261 million in subsidies for 2025.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What is New In Hajj 2026?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">A few things have changed in 2026 worth knowing:</p>
                
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li className="mb-2">Iran is practically locked out, suspended visas and cancelled flights are a result of geopolitical tensions.</li>
                  <li className="mb-2">Pakistan needs a compulsory pre-departure training for all pilgrims.</li>
                  <li className="mb-2">India has also closed transit routes between the UAE/Qatar; all airlines are direct via Air India or Saudia.</li>
                  <li className="mb-2">Flights to Indonesia are undergoing a diversion around the Gulf airspace through a Southern Corridor, and this increases the fuel cost per pilgrim by $120 – 200.</li>
                  <li className="mb-2">The UAE had been given only 6,228 slots out of the 72,000 applicants; there is high competition.</li>
                  <li className="mb-2">Nusuk remains the only legal booking platform for international pilgrims.</li>
                </ul>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Frequently Asked Questions</h2>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">How much does it cost to do Hajj from the UK?</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">UK Hajj costs normally vary between £8,000 and £12,000. The prices vary according to the type of the package, the distance of the hotel to Haram, and the services included in the package, like transport and directions.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">How much does it cost to do Hajj from Canada?</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Hajj packages are also similar to those in the USA among Canadian pilgrims. It will cost between CAD 11,000 and CAD 16,000 on average, depending on the travel class and the level of accommodation.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">How much does it cost to do Hajj from India?</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The hajj package price in India is comparatively low compared to Western nations. The average cost of a pilgrimage is between 4000 and 7000 dollars, depending on whether it is a government or private package.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">How much does it cost to do Hajj from Pakistan?</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In Pakistan, the price of Hajj is between 4500 and 8000 dollars. The schemes by the government are normally cheaper, whereas the packages offered by the private companies are more comfortable.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">How much does it cost to do Hajj from Indonesia and Malaysia?</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In Indonesia, it costs between $3,500 and $5,500 and is one of the cheaper ones, as it has organized structures. In Malaysia, pilgrims can spend between $5,000 and 8,000 which is usually financed under the financial schemes.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">How much will the Hajj cost from the USA in 2026?</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">For 2026, the cost of Hajj from the USA is expected to remain between $10,000 and $15,000. The airfare changes and accommodation demand during the peak season can cause the prices to change slightly. Even higher quality packages with nearer accommodation and better services might be even more expensive.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Which country has the highest Hajj quota?</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">By country, the largest number of pilgrims is from Indonesia, which has approximately 240,000 pilgrims every year. This is due to its position as the country with the highest Muslim population in the world.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">What is the Hajj quota for the USA?</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The USA hajj quota is so small in comparison with Muslim-majority countries. It is typically estimated to be between 3,500 and 4,000 pilgrims annually, and the majority of pilgrims do so via the private tour operators.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Hajj is not only a journey but a calling in a lifetime. It can save you years of confusion and disappointment to know your quota as a citizen of your country, what it will really cost you in the beginning, and to have registered early through Nusuk.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">When you are standing in the queue in Malaysia, or you are buying a ticket in India, or you are getting first-come, first-served in the UK, the time to do it is now, not later.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">We have been assisting thousands of pilgrims to travel without any difficulties in the holy cities at Haramain Umrah Taxi, so once you have secured your spot, leave the means of transportation to us. May Allah accept the Hajj of all pilgrims who visit this holy place. Ameen.</p>
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
