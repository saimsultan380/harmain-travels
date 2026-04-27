import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "7 Best Tourist Places to Visit in Tabuk & Things to Do in Tabuk - Haramain Umrah Taxi",
  description: "Discover the best places to visit in Tabuk, KSA. From Tabuk Castle to Wadi Al Disah, explore top attractions and things to do in this fascinating northwestern Saudi city.",
  alternates: {
    canonical: "/7-best-tourist-places-to-visit-in-tabuk-things-to-do-in-tabuk",
  },
};

const post = {
  id: "7-best-tourist-places-to-visit-in-tabuk-things-to-do-in-tabuk",
  title: "7 Best Tourist Places to Visit in Tabuk & Things to Do in Tabuk",
  excerpt: "Discover the best places to visit in Tabuk, KSA. From Tabuk Castle to Wadi Al Disah, explore top attractions and things to do in this fascinating northwestern Saudi city.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-04-27",
  readTime: "10 min read",
  author: "M Umar Irfan",
  image: "/images/7-best-tourist-places-to-visit-in-tabuk-things-to-do-in-tabuk.png",
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
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In northwestern Saudi Arabia, Tabuk is one of the most important and fascinating destinations. This city attracts visitors who want to explore both ancient heritage and natural beauty, as it is known for its rich history, scenic landscapes, and cultural landmarks.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You can visit many historical places in Tabuk, such as historic forts, religious sites, beaches, and breathtaking valleys.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Tabuk gives a wide range of experiences to those who are interested in history, adventure, or relaxation. Therefore, most of the visitors add Tabuk to their travel plans due to the charm this city provides.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The following are the best places to visit in Tabuk and things to do in Tabuk.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Tabuk Castle</h2>
                
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Tabuk Castle.png"
                    alt="Tabuk Castle"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Tabuk Castle is one of the most prominent historical places in Tabuk. It played an important role in the history of the region, as it dates back to the Ottoman period. People who were traveling to Makkah and Madinah used this place as a key stop.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You can explore the traditional architecture and historical displays here, because nowadays, the castle has been transformed into a small museum.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You can enjoy the most important tourist attraction in Tabuk by understanding the cultural heritage of the region.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Al Tawba Mosque</h2>
                
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Al Tawba Mosque.png"
                    alt="Al Tawba Mosque"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">One of the most famous and spiritually significant mosques is Al Tawba mosque in Tabuk. During the Expedition of Tabuk, Prophet Muhammad (PBUH) performed Salah at the place where the mosque is located.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The atmosphere of this mosque is peaceful, and it has historical significance. Due to this, it is one of the most visited places in Tabuk. People who visit Tabuk Castle also stop in this mosque because both are located near each other.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Wadi Al Disah</h2>
                
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Wadi-Al-Disah.png"
                    alt="Wadi Al Disah"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Another beautiful place in Tabuk is Wadi Al Disah. Massive sandstone cliffs, green palm trees, and flowing water streams make this place beautiful and worth visiting, as it creates a unique natural landscape.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Travelers who love to enjoy nature and adventure include this place into their visit list. For photography and exploration, this is one of the most popular outdoor attractions.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In Wadi Al Disah, following are the few popular activities:</p>
                
                <ul className="list-disc pl-6 text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>Hiking through the valley</li>
                  <li>Photography of the rock formations</li>
                  <li>Exploring the palm groves and natural streams</li>
                </ul>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Jabal Al Lawz</h2>
                
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Jabal-Al-Lawz.png"
                    alt="Jabal Al Lawz"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">For adventure seekers, Jabal Al Lawz is the most impressive mountains in the region and a favorite destination. One of the rare sights in KSA is the snowfall during winter on the mountains of Jabal Al Lawz.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">For travelers who enjoy outdoor exploration, this mountain provides panoramic views and one of the top sights in Tabuk. People who want to experience the natural beauty of a mountain, visiting Jabal Al Lawz is one of the most exciting things to do.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Umluj Beach</h2>
                
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Umluj-Beach.png"
                    alt="Umluj Beach"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Umluj Beach, located near Tabuk along the Red Sea coast, is often called the "Saudi Maldives." The area is famous for its turquoise water, white sandy islands, and peaceful atmosphere.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Because of its natural beauty, it has become one of the most attractive tourist places in Tabuk for relaxation and coastal exploration. Visitors come here to enjoy boat trips and discover the stunning islands scattered across the Red Sea.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Malls in Tabuk</h2>
                
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Malls-in-Tabuk.png"
                    alt="Malls in Tabuk"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">For visitors who enjoy shopping and entertainment, several modern malls in Tabuk provide a comfortable indoor experience. These shopping centers include international brands, restaurants, and entertainment options for families.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Some popular malls include:</p>
                
                <ul className="list-disc pl-6 text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li><strong className="text-[var(--gold)]">Tabuk Park Mall</strong></li>
                  <li><strong className="text-[var(--gold)]">Al Hokair Mall</strong></li>
                  <li><strong className="text-[var(--gold)]">Tabuk Mall</strong></li>
                </ul>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">These locations are great places to visit in Tabuk after exploring the city's outdoor and historical attractions.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Prince Fahd Bin Sultan Park</h2>
                
                <div className="mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Prince-Fahd-Bin-Sultan-Park.png"
                    alt="Prince Fahd Bin Sultan Park"
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Prince Fahd Bin Sultan Park is one of the largest public parks in the city and a favorite place for families and tourists. The park offers green spaces, walking paths, and relaxing spots where visitors can spend time enjoying the peaceful environment.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">It is considered one of the best outdoor attractions in Tabuk and a nice place to unwind after visiting other tourist attractions in Tabuk.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Things to Do in Tabuk</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Visitors traveling to this region can enjoy a variety of activities. Some of the most popular things to do in Tabuk include:</p>
                
                <ul className="list-disc pl-6 text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>Exploring Tabuk Castle and other historical places in Tabuk</li>
                  <li>Visiting religious landmarks like Al Tawba Mosque</li>
                  <li>Discovering natural landscapes such as Wadi Al Disah</li>
                  <li>Enjoying mountain views at Jabal Al Lawz</li>
                  <li>Relaxing on the beautiful beaches near Umluj</li>
                  <li>Shopping at the popular malls in Tabuk</li>
                </ul>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Exploring all the amazing Tabuk tourist places becomes much easier with reliable transportation. Haramain Umrah Taxi provides comfortable travel services for visitors who want to explore the top sights in Tabuk and nearby attractions without any hassle.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">If you are traveling for tourism, sightseeing, or religious visits, our professional drivers ensure a safe and convenient journey across the region.</p>
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
