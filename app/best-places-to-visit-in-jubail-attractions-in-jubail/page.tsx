import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Best Places to Visit in Jubail | Top Attractions in Jubail",
  description:
    "Discover the best places to visit in Jubail, from Al Fanateer Beach and Corniche Jubail to parks, markets, and historic spots. Plan your Eastern Province stop with Haramain Umrah Taxi.",
  alternates: {
    canonical: "/best-places-to-visit-in-jubail-attractions-in-jubail/",
  },
  openGraph: {
    title: "Best Places to Visit in Jubail | Top Attractions in Jubail",
    description:
      "Discover the best places to visit in Jubail, from Al Fanateer Beach and Corniche Jubail to parks, markets, and historic spots. Plan your Eastern Province stop with Haramain Umrah Taxi.",
    url: "/best-places-to-visit-in-jubail-attractions-in-jubail/",
    type: "article",
    images: [
      {
        url: "/images/best-places-to-visit-in-jubail.webp",
        alt: "Best Places to Visit in Jubail | Top Attractions in Jubail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Places to Visit in Jubail | Top Attractions in Jubail",
    description:
      "Discover the best places to visit in Jubail, from Al Fanateer Beach and Corniche Jubail to parks, markets, and historic spots. Plan your Eastern Province stop with Haramain Umrah Taxi.",
    images: ["/images/best-places-to-visit-in-jubail.webp"],
  },
};

const post = {
  id: "best-places-to-visit-in-jubail-attractions-in-jubail",
  title: "Best Places to Visit in Jubail | Top Attractions in Jubail",
  excerpt:
    "Discover the best places to visit in Jubail, from Al Fanateer Beach and Corniche Jubail to parks, markets, and historic spots.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-08-31",
  readTime: "9 min read",
  author: "M Umar Irfan",
  image: "/images/best-places-to-visit-in-jubail.webp",
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
                  Most people who mention Jubail are talking about its industrial zone, not its beaches. That is fair, since the refineries and petrochemical plants are what put the city on the map. But spend a weekend there, and a different picture emerges.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A city with palm-lined shorelines, a proper coastal walk, and a handful of spots that do not make it onto the usual Saudi travel lists. This guide informs you of what is worth visiting.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Al Fanateer Beach
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ask anyone in Jubail where to go first, and Fanateer comes up almost every time. The palm trees along the walkway give it a bit of shade, and the paths are kept clean. If jet skiing or diving is on your list, the operators here handle most of it.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Go early and you will mostly find joggers and a few fishermen. By the time the sun starts dropping, families take over with mats and folding chairs, and the whole beach shifts into a different rhythm. Catching the sunset here is one of those things people from Jubail don&apos;t think twice about, but visitors always end up filming.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/al-fanateer-beach.webp"
                    alt="Al Fanateer Beach in Jubail"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Al Nakheel Beach
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Locals call it Palm Beach more often than its official name. The water is calmer than at Fanateer and the sand runs whiter. There is enough tree cover that you are not stuck baking in direct sun the entire visit.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you can time it for spring, do that. The plants around the beach fill in and the heat backs off just enough to make walking around comfortable. Parents with younger kids usually pick this beach over the others because of the gentler waves and the small play area set up nearby.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Corniche Jubail
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This waterfront path stretches close to three kilometres, all paved, with no cars anywhere near it. There is free wifi along parts of the route and open views of the Gulf the entire way through.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  For residents, the Corniche is not really a &quot;sight&quot; so much as part of the daily routine. People show up after work to walk, run, or sit somewhere quiet with the wind coming off the water. If the goal is understanding how Jubail functions day to day instead of just checking boxes on a list, this is where that happens.
                </p>

                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="/images/corniche-jubail.webp"
                    alt="Corniche Jubail waterfront"
                    width={1400}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Galleria Mall
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Some afternoons in Jubail are just too hot to be outside, and that is when the Galleria fills up. It has the standard mix: clothing stores, a big hypermarket, a food court, and a play zone for kids, nothing unusual but reliable.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Because it is close to Al Fanateer, a lot of people treat the two as a pair: beach in the morning, air conditioning after lunch. Simple enough plan and it works.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Deffi Park
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Skip the sand for a day and head to Deffi instead. It is mostly open grass, big trees for shade, marked areas for grilling, and parking that does not turn into a fight on weekends.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Groups of friends use it a lot for evening hangouts, especially the ones who would rather not sit in a restaurant. Show up with your own grill and a cooler. You will be doing exactly what half the park is already doing.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Al Tawia Historical Tower
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Jubail&apos;s skyline is mostly new construction, so the Al Tawia Tower stands out just by being old. It is one of the last physical pieces connecting the city back to what it was before the industrial boom, back when fishing and pearl trading kept the place running.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You will not need more than twenty minutes to see it properly. But for anyone curious about the region&apos;s history before the refineries showed up, it is a small detour that pays off.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Jubail Fish Market
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Even people who do not eat seafood tend to find the fish market interesting. Fishermen bring in whatever they caught that morning and sell it right there, no middlemen, no polish. Early hours are the best time to catch the real energy of the place.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Crabs, prawns, and fish varieties most outsiders cannot name are laid out across the stalls. Prices beat anything you will pay at a restaurant later that day. Haggling is expected, so don&apos;t take the first number seriously.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Even if you are not buying, standing there for ten minutes tells you more about Jubail&apos;s roots than most of the polished attractions do.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Boat Circle and Fanateer Hillock
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Two smaller stops that rarely make it onto anyone&apos;s list. Boat Circle is a quiet point along the coast with barely any crowd, and Fanateer Hillock close by gives a raised view over the water that is worth the short climb.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Neither takes long. Pair them with a Fanateer Beach visit or a Corniche walk, and you have covered both without adding much extra time to your day.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">
                  Conclusion
                </h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Jubail tends to surprise people who show up expecting nothing but factories and refinery smoke. The beaches hold up well, and the Corniche deserves more than a quick photo stop. The parks stay busy on weekends because people use them, not because a guidebook told them to.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are passing through the Eastern Province and have room in your schedule, Jubail earns a stop. Pick a few spots from this list depending on how much time you have got, sort your transport ahead of time, and the rest falls into place on its own.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi handles transfers across the region if you need a ride booked before you land.{" "}
                  <Link href="/book-now/" className="text-[var(--green)] font-semibold hover:underline">
                    Book your transfer now
                  </Link>
                  {" "}or message us on{" "}
                  <a
                    href="https://wa.me/966598401594"
                    className="text-[var(--green)] font-semibold hover:underline"
                  >
                    WhatsApp
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
