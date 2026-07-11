import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How Can You Find or Identify Your Tents in Mina during Hajj?",
  description: "Complete guide to finding your tent in Mina during Hajj. Learn Maktab system, landmarks & tips to avoid getting lost among thousands of tents. Expert advice inside!",
  alternates: {
    canonical: "/find-or-identify-your-tents-in-mina-during-hajj/",
  },
  openGraph: {
    title: "How Can You Find or Identify Your Tents in Mina during Hajj?",
    description: "Complete guide to finding your tent in Mina during Hajj. Learn Maktab system, landmarks & tips to avoid getting lost among thousands of tents. Expert advice inside!",
    url: "/find-or-identify-your-tents-in-mina-during-hajj/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Can You Find or Identify Your Tents in Mina during Hajj?",
    description: "Complete guide to finding your tent in Mina during Hajj. Learn Maktab system, landmarks & tips to avoid getting lost among thousands of tents. Expert advice inside!",
  },
};

const post = {
  id: "find-or-identify-your-tents-in-mina-during-hajj",
  title: "How Can You Find or Identify Your Tents in Mina during Hajj?",
  excerpt: "Complete guide to finding your tent in Mina during Hajj. Learn Maktab system, landmarks & tips to avoid getting lost among thousands of tents. Expert advice inside!",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-23",
  readTime: "11 min read",
  author: "M Umar Irfan",
  image: "/images/how-to identify-you-tent-in-mina.jpeg",
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
                  Over two million pilgrims come to Mina, and all of them set up their tents in the same spot. Each of the thousands of white tents looks exactly alike. It is not unusual for anyone to become lost here, as experienced pilgrims do so every year.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Without knowing your Maktab number, your street number, and a few landmarks around your tent, it will be a very difficult task to find your way back. This guide by Haramain Umrah Taxi covers everything you need to know so your days in Mina stay focused on worship, not on searching.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Read this before you leave for Mina.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How Mina Is Organized - The Maktab System</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Saudi Ministry of Hajj has divided Mina into numbered areas known as Maktabs. A Maktab is a set of camps distributed to pilgrims according to their nationality and the Hajj operator.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Mina currently has over 70 Maktabs, organized into four categories based on distance from Jamarat and facility quality:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border border-[var(--border)]">
                    <thead>
                      <tr className="bg-[var(--green)]/10">
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold">Category</th>
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold">Maktab Numbers</th>
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold">Distance from Jamarat</th>
                        <th className="border border-[var(--border)] px-4 py-2 text-left font-heading font-bold">Facilities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-[var(--border)] px-4 py-2">A</td>
                        <td className="border border-[var(--border)] px-4 py-2">1 to 6</td>
                        <td className="border border-[var(--border)] px-4 py-2">Closest</td>
                        <td className="border border-[var(--border)] px-4 py-2">Air-conditioned, premium</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] px-4 py-2">B</td>
                        <td className="border border-[var(--border)] px-4 py-2">7 to 25</td>
                        <td className="border border-[var(--border)] px-4 py-2">Moderate</td>
                        <td className="border border-[var(--border)] px-4 py-2">Air-conditioned, standard</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] px-4 py-2">C</td>
                        <td className="border border-[var(--border)] px-4 py-2">26 to 77</td>
                        <td className="border border-[var(--border)] px-4 py-2">Further</td>
                        <td className="border border-[var(--border)] px-4 py-2">Fan-cooled, basic</td>
                      </tr>
                      <tr>
                        <td className="border border-[var(--border)] px-4 py-2">D</td>
                        <td className="border border-[var(--border)] px-4 py-2">77 and beyond</td>
                        <td className="border border-[var(--border)] px-4 py-2">Furthest</td>
                        <td className="border border-[var(--border)] px-4 py-2">Basic, New Mina area</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Identify and Find Your Tent in Mina During Hajj?</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The moment you arrive at your camp in Mina, these are the steps you need to take immediately before you do anything else.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">1. Write Down Your Maktab Number Before Leaving for Mina</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You receive your Maktab number from your Operator before your trip to Mina. Write it on a piece of paper, put it in your phone, and have each person in your group know it before you leave Makkah.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Even a number becomes a distant memory after hours of walking in high temperatures and packed crowds. Your Maktab number is the only thing that gets you back to your tent, so treat it as the most important piece of information you carry.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">2. Note Your Street Number the Moment You Arrive</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Streets inside Mina are all numbered, and your street number combined with your Maktab number forms your complete address inside the valley. The moment you step into your camp, look for the street number and write it down immediately alongside your Maktab number.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  These two numbers together tell you where your tent is located inside Mina. Without both of them, you are navigating one of the world's most crowded temporary cities with half the information you actually need.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">3. Photograph Your Camp Entrance Sign Right Away</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Before you settle into your tent, take a clear photo of your camp entrance sign. It shows your Maktab number, street number, and camp details all in one place, giving you a permanent reference saved directly in your phone gallery.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This photo becomes your backup on the busy days ahead when your memory is stretched thin. Whenever you feel uncertain about your location, you open your gallery, and your complete tent details are right there.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">4. Find Two Landmarks Close to Your Tent</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Each camp has an element that makes it unique: a different gate color, a signboard of another camp nearby, a water cooler in a different location, or a special marking on the street. Walk around on your first day and write down 2 landmarks that are near your tent.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Numbers are not as effective when the body is tired, and the mind is exhausted after long walks or runs with the Jamarat. Your brain processes familiar images faster than it recalls numbers under fatigue.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  So, these landmarks genuinely guide you home when numbers alone are not enough.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  So, these landmarks genuinely guide you home when numbers alone are not enough.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">5. Wear Your Wristband at All Times Without Exception</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Hajj operator gives you a wristband with your Maktab number and camp details printed on it. This wristband is your most important identification inside Mina. It needs to be worn every hour of your stay, even while sleeping and while showering, all the time.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Most camps require wristbands at the door and will not allow you to enter without a wristband. Never remove it for any reason, as it will be one of the worst experiences a pilgrim can have if they have to leave their tent in the middle of Mina.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">6. Save Your Group Leader's Number Before You Enter Mina</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Even inside Mina, put your group leader's cellphone number in your phone and give your leader your number. It's the one contact that can help you reunite with your group quicker than anything else if you do get separated from your group.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are unable to contact your group leader, locate the nearest Hajj guide or security officer and present your Maktab number. They will be present at various locations in Mina with a specific duty to assist pilgrims in this condition.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">7. Pin Your Tent Location on Google Maps When You Arrive</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Once you arrive at your tent, drop a pin on Google Maps at the exact coordinates where you are and save it. The Nusuk app can also be utilized to search one's Maktab number and find where the camp is located, directly on the map.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  These are digital tools that operate even if your memory fails. A saved pin gets you back to your tent even after the longest and most exhausting days in Mina.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How Many Tents Are in Mina?</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Over two million pilgrims stay in more than 100,000 tents at Mina during the Hajj. The per capita provision per standard tent is 30-50 pilgrims. All tents are fireproof and uniformly indistinguishable from the outside, so that many pilgrims cannot identify their tents.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It is a stressful thing to get lost in Mina, but it is easily preventable by getting ready before arriving. Write the Maktab number down, wear the wristband, and pin the location on day one. These are small steps that keep the most significant days of your Hajj safe.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If your basics are right from day one, then there is no excuse for you to be distracted from your ibadah from Mina, as it is crowded, intense, and physically demanding.
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