import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Best Places to Visit in Dammam & Things to Do in Dammam, KSA - Haramain Umrah Taxi",
  description: "Discover the best places to visit in Dammam, KSA. From Half Moon Beach to shopping malls, explore top attractions and things to do in this vibrant Eastern Province city.",
  alternates: {
    canonical: "/best-places-to-visit-in-dammam-things-to-do-in-dammam-ksa",
  },
};

const post = {
  id: "best-places-to-visit-in-dammam-things-to-do-in-dammam-ksa",
  title: "Best Places to Visit in Dammam & Things to Do in Dammam, KSA",
  excerpt: "Discover the best places to visit in Dammam, KSA. From Half Moon Beach to shopping malls, explore top attractions and things to do in this vibrant Eastern Province city.",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-04-25",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/best-places-to-visit-in-dammam-things-to-do-in-dammam-ksa.png",
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
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Dammam is the liveliest city in Saudi Arabia, located in the Eastern Province. It is situated on the Arabian Gulf and offers a combination of beaches, parks, shopping centers, and family attractions.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Dammam has several tourists who find the most perfect places to visit in order to relax, shop, or to have a good time with their loved ones.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">In case you are planning a short trip or weekend outing, then this guide will assist in determining the things to do best in Dammam.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Places to Visit in Dammam</h2>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Half Moon Beach</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Half Moon Beach is simply among the most preferred destinations in Dammam. The beach derives its name from its wavy shore, which appears like a half moon.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">It is also a popular place among families or groups of friends due to the clean water and the smooth sand. You are free to spend time swimming, jet skiing, or just sitting and enjoying the waves of the Gulf.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Picnic preparations are also brought by many visitors and they spend the entire day here. This beach will give you the right ambience in case you want to get away from the noise of the city.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">King Fahd Park</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">King Fahd Park is the most visited area in Dammam with family. It is among the biggest green areas in the region.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The park contains extensive grass, walking paths and beautiful lakes that creates cool environment. The families enjoy picnics here, evening walk as well as weekend outings with children.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">It is a serene area where one can relax and have fun with nature in the city due to the fountains and lawns.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Marjan Island</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Marjan Island is one of the best places in Dammam where one can enjoy scenic beauty. The island is linked with the mainland via a bridge, and it provides a lovely view of the Arabian Gulf.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Several tourists visit here to stroll by the water, capture photographs, or even see the sunset. It is a good place to relax after having a working day in the city due to the serene atmosphere.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Heritage Village</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">When it comes to the investigation of the local culture, one of the popular sights in Dammam is Heritage Village. The structure is an example of the classic Saudi architecture and exhibits the historical artifacts of the territory.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">There are cultural exhibits, antiques and custom decor inside that will provide you with a peek into Saudi history.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The place also includes a restaurant where one can have a taste of local food with a view of the sea.</p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-3 mt-6">Dammam Corniche</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Dammam Corniche is also among the most tranquilizing city parks. The waterfront walk is long and runs along the sea coastline and provides open areas where one can walk, go cycling, and have family outings.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">It is regarded as one of the best places to go in Dammam without any charges by many locals.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You may sit by water, and see the boats, or have sea-air in the evening. Corniche is a good place to have an informal visit at night after the sun has gone down.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Popular Shopping Malls in Dammam</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">One of the best things to do in Dammam is shopping. The city has various modern malls where people can have entertainment, food, and international brands.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6"><strong className="text-[var(--gold)]">Lulu Mall Dammam</strong> is a place that provides various shops and can be visited with the company of children. You will be able to shop for clothes, electronics, and groceries, and eat in restaurants or cafes within the mall.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6"><strong className="text-[var(--gold)]">Nakheel Mall Dammam</strong> has a higher-end shopping experience. The fashion brands, dining and indoor entertainment areas are a favorite with the visitors.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">The other family-friendly attraction is <strong className="text-[var(--gold)]">Othaim Mall Dammam</strong>. The shopping centers are not only covered by shops, but also by entertainment centers where children spend their time.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6"><strong className="text-[var(--gold)]">Dareen Mall Dammam</strong> is a shopping mall that involves recreational activities. A large number of individuals like to shop there on a casual basis or during the weekend.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6"><strong className="text-[var(--gold)]">Nesto Hypermarket Dammam</strong> is a one-stop place to go in terms of grocery shopping and day-to-day needs. It has a great variety of products and appeals to people who live and work there, as well as tourists.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Things to Do in Dammam with Family</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Dammam is a city that is friendly to families, and therefore, you will never lack activities that fit each age category. Parks, beaches and malls are safe and comfortable spaces to be spent together by children and adults.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Sightseeing activities in King Fahd Park, Half Moon Bay beach in the afternoon, and shopping or dinner at a mall in the evening are some of the activities that families do in this order.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">This mixture of outdoor and indoor entertainment makes Dammam a super place to enjoy with the family.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Tourist attractions are well accessible to most of the tourists in Dammam and the city links well with Khobar and Dhahran. You can visit various attractions in one day with easy means of transport.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Once you decide to visit Dammam or any other cities, it is possible to book our taxi service in Haramain Umrah Taxi and have a comfortable ride during your journey.</p>
                
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">Dammam is a place that has a moderate combination of relaxation, entertainment and culture. There is something for everyone in the city, including its calm and quiet beach of Half Moon, and bustling shopping malls.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">You are either in need of finding places to see in Dammam with the family, picturesque seashores, or fun shopping places; you will not have a shortage of these here.</p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">And, when you are willing to move easily between attractions, Haramain Umrah Taxi is always willing to drive you there.</p>
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
