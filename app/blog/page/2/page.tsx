import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", name: "All Posts" },
  { id: "taxi-guides", name: "Taxi Guides" },
  { id: "taxi-fares", name: "Taxi Fares" },
  { id: "sight-seeings", name: "Sight Seeings" },
  { id: "other-services", name: "Other Services Guides" },
];

const blogPosts = [
  {
    id: "madinah-to-badar-badr-ziyarat-return-taxi-fare-service",
    title: "Madinah to Badar & Badr Ziyarat & Return Taxi Fare & Service",
    excerpt: "The trip from Madinah to Badar is one of the most demanded ziyarat visits by pilgrims. Book your Madinah to Badar and Badr ziyarat with a round-trip taxi that is easy, secure, and customer-oriented.",
    categories: ["taxi-fares"],
    date: "2026-04-08",
    readTime: "6 min read",
    image: "/images/Madinah-to-Badar-Badr-Ziyarat-Return-Taxi-Fare-Service.jpg",
    author: "M Umar Irfan",
  },
  {
    id: "hajj-quota-by-country-hajj-cost-waiting-list-by-country",
    title: "Hajj Quota by Country, Hajj Cost & Waiting List by Country",
    excerpt: "Complete guide to Hajj quota by country for 2026, real costs from over 10 countries, government subsidies, and waiting list information for pilgrims worldwide.",
    categories: ["other-services"],
    date: "2026-04-08",
    readTime: "12 min read",
    image: "/images/hajj-quota-by-country-hajj-cost-waiting-list-by-country.jpg",
    author: "M Umar Irfan",
  },
  {
    id: "cheap-wadi-e-jinn-ziyarat-taxi-madinah-to-wadi-e-jinn-taxi",
    title: "Cheap Wadi e Jinn Ziyarat Taxi | Madinah to Wadi e Jinn Taxi",
    excerpt: "Discover affordable Wadi e Jinn ziyarat taxi service from Madinah. Book your comfortable ride to this popular desert destination with Haramain Umrah Taxi.",
    categories: ["other-services", "taxi-fares"],
    date: "2026-03-27",
    readTime: "5 min read",
    image: "/images/cheap-wadi-e-jinn-ziyarat-taxi-madinah-to-wadi-e-jinn-taxi.png",
    author: "M Umar Irfan",
  },
  {
    id: "best-places-to-visit-in-dammam-things-to-do-in-dammam-ksa",
    title: "Best Places to Visit in Dammam & Things to Do in Dammam, KSA",
    excerpt: "Discover the best places to visit in Dammam, KSA. From Half Moon Beach to shopping malls, explore top attractions and things to do in this vibrant Eastern Province city.",
    categories: ["other-services"],
    date: "2026-04-25",
    readTime: "8 min read",
    image: "/images/best-places-to-visit-in-dammam-things-to-do-in-dammam-ksa.png",
    author: "M Umar Irfan",
  },
  {
    id: "ziyarat-and-umrah-taxi-services-in-shawal-ksa",
    title: "Ziarat and Umrah Taxi Services in Shawal - Discounts Available",
    excerpt: "Discover discounted Umrah taxi services in Shawal. Reliable transport for Makkah to Madinah, airport transfers, and Ziarat tours with professional drivers.",
    categories: ["other-services", "taxi-fares"],
    date: "2026-04-25",
    readTime: "7 min read",
    image: "/images/ziyarat-and-umrah-taxi-services-in-shawal-ksa.png",
    author: "M Umar Irfan",
  },
  {
    id: "eid-ul-fitr-taxi-services-in-makkah-madinah-saudi-arabia",
    title: "Eid ul Fitr Taxi Services in Makkah & Madinah, Saudi Arabia",
    excerpt: "Reliable Eid ul Fitr taxi services in Makkah and Madinah. Book online for airport transfers, intercity travel, and Ziarat tours during the busy Eid season.",
    categories: ["other-services", "taxi-fares"],
    date: "2026-04-25",
    readTime: "6 min read",
    image: "/images/eid-ul-fitr-taxi-services-in-makkah-madinah-saudi-arabia.png",
    author: "M Umar Irfan",
  },
  {
    id: "private-umrah-taxi-services-from-indonesia",
    title: "Book Private Umrah Taxi Services Online from Indonesia",
    excerpt: "Book private Umrah taxi services online from Indonesia. Reliable transport for Indonesian pilgrims with comfortable vehicles and professional drivers.",
    categories: ["other-services", "taxi-fares"],
    date: "2026-04-25",
    readTime: "6 min read",
    image: "/images/private-umrah-taxi-services-from-indonesia.png",
    author: "M Umar Irfan",
  },
  {
    id: "7-best-tourist-places-to-visit-in-tabuk-things-to-do-in-tabuk",
    title: "7 Best Tourist Places to Visit in Tabuk & Things to Do in Tabuk",
    excerpt: "Discover the best places to visit in Tabuk, KSA. From Tabuk Castle to Wadi Al Disah, explore top attractions and things to do in this fascinating northwestern Saudi city.",
    categories: ["other-services"],
    date: "2026-04-27",
    readTime: "10 min read",
    image: "/images/7-best-tourist-places-to-visit-in-tabuk-things-to-do-in-tabuk.png",
    author: "M Umar Irfan",
  },
  {
    id: "private-umrah-taxi-services-online-from-the-usa-book-at-discount",
    title: "Private Umrah Taxi Services Online from the USA Book at Discount",
    excerpt: "Book private Umrah taxi services online from the USA at discount. Reliable airport transfers, Makkah to Madinah travel, and comfortable transportation for USA pilgrims.",
    categories: ["other-services", "taxi-fares"],
    date: "2026-04-27",
    readTime: "8 min read",
    image: "/images/private-umrah-taxi-services-online-from-the-usa-book-at-discount.png",
    author: "M Umar Irfan",
  },
  {
    id: "difference-betweeen-damm-fidyah-kaffarah",
    title: "Difference Between Damm, Fidyah, and Kaffarah in Easy Words",
    excerpt: "Understand the difference between Damm, Fidyah, and Kaffarah in Islam. Learn when each applies, the type of compensation required, and examples for Umrah, Hajj, and Ramadan.",
    categories: ["other-services"],
    date: "2026-04-27",
    readTime: "7 min read",
    image: "/images/difference-betweeen-damm-fidyah-kaffarah.png",
    author: "M Umar Irfan",
  },
];

const POSTS_PER_PAGE = 9;
const currentPage = 2;
const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
const endIndex = startIndex + POSTS_PER_PAGE;
const currentPosts = blogPosts.slice(startIndex, endIndex);

export default function BlogPage2() {
  return (
    <>
      <Canonical />
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-4">
              Our Blog
            </h1>
            <p className="text-lg text-[var(--text-2)] font-body max-w-2xl mx-auto">
              Stay updated with the latest guides, tips, and information about Umrah travel, taxi services, and religious sites in Saudi Arabia.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[var(--bg-card)] border-2 border-t-[var(--gold)] border-b-[var(--green)] border-l-[var(--gold)] border-r-[var(--green)] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((catId) => {
                      const category = categories.find((c) => c.id === catId);
                      const isGreen = catId === "other-services" || catId === "taxi-guides";
                      return (
                        <span 
                          key={catId} 
                          className={`inline-block px-3 py-1 font-body text-xs font-semibold rounded-full ${
                            isGreen 
                              ? "bg-[var(--green)]/10 text-[var(--green)]" 
                              : "bg-[var(--gold)]/10 text-[var(--gold)]"
                          }`}
                        >
                          {category?.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* Title */}
                  <Link href={`/${post.id}`}>
                    <h3 className="text-xl font-heading font-bold text-[var(--green)] mb-3 line-clamp-2 hover:text-[var(--gold)] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-[var(--text-2)] font-body text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[var(--text-3)] font-body text-xs mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/${post.id}`}
                    className="inline-flex items-center gap-2 text-[var(--green)] font-body font-semibold text-sm hover:text-[var(--gold)] hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Posts Message */}
          {currentPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--text-2)] font-body text-lg">
                No posts found in this category.
              </p>
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            {/* Previous Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            >
              <ChevronLeft size={18} />
              Previous
            </Link>

            {/* Page Numbers */}
            <Link
              href="/blog"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] text-[var(--text-1)] hover:border-[var(--gold)] hover:text-[var(--gold)] font-body font-semibold transition-colors"
            >
              1
            </Link>
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--gold)] text-white font-body font-semibold">
              2
            </div>

            {/* Next Button - disabled since this is the last page */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
