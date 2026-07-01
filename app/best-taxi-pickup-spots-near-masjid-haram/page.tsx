import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Safe & Best Taxi Pickup Points & Spots near Masjid Al Haram",
  description: "Best pickup points near Haram for pilgrims. Read about safe, convenient locations at all gates. Book your Haramain Umrah Taxi ride now at Discounted Price!",
  alternates: {
    canonical: "/best-taxi-pickup-spots-near-masjid-haram/",
  },
  openGraph: {
    title: "Safe & Best Taxi Pickup Points & Spots near Masjid Al Haram",
    description: "Best pickup points near Haram for pilgrims. Read about safe, convenient locations at all gates. Book your Haramain Umrah Taxi ride now at Discounted Price!",
    url: "/best-taxi-pickup-spots-near-masjid-haram/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe & Best Taxi Pickup Points & Spots near Masjid Al Haram",
    description: "Best pickup points near Haram for pilgrims. Read about safe, convenient locations at all gates. Book your Haramain Umrah Taxi ride now at Discounted Price!",
  },
};

const post = {
  id: "best-taxi-pickup-spots-near-masjid-haram",
  title: "Safe & Best Taxi Pickup Points & Spots near Masjid Al Haram",
  excerpt: "Best pickup points near Haram for pilgrims. Read about safe, convenient locations at all gates. Book your Haramain Umrah Taxi ride now at Discounted Price!",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-11",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/Safe-Best-Taxi-Pickup-Points-Spots-near-Masjid-Al-Haram-Haramain-Umrah-Taxi.png",
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
                  Visiting Masjid Al Haram is the most special moment of your Umrah journey. After completing your prayers and worship, you need safe and convenient transportation back to your hotel. Finding the right pickup spot can be confusing, especially during busy times when thousands of pilgrims are moving around. Haramain Umrah Taxi makes this easy for you.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We know every pickup point, every gate, and every safe spot around the Haram. This guide helps you understand the best pickup locations near Masjid Al-Haram so you can find your taxi quickly and start your ride without any stress.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Main Pickup Points Near Masjid Al-Haram</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Haram has multiple gates, and each gate has nearby pickup locations. Let&apos;s explore the main pickup points that work best for different situations.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">King Fahd Gate Area</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  King Fahd Gate is one of the most popular entry and exit points. The best pickup point near King Fahd Gate Haram is located on Ibrahim Al Khalil Street. This wide road allows taxis to stop safely without blocking traffic. After you exit from King Fahd Gate, walk towards Ibrahim Al Khalil Street. You will see designated taxi waiting areas clearly marked. During regular hours, this spot works perfectly. Your driver can easily spot you here and pick you up without delays.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">King Abdul Aziz Gate Pickup Spot</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  King Abdul Aziz Gate serves the hotels on the eastern side of the Haram. The pickup area here connects to Ajyad Street. This location is particularly good for pilgrims staying in hotels like Fairmont, Swissotel, or Pullman Zamzam. The road layout here makes pickup and drop-off smooth. Taxis can wait in designated zones without causing traffic jams. This makes it one of the safest pickup points in the Haram area for families and elderly pilgrims.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Umrah Gate and Nearby Spots</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Umrah Gate faces the Clock Tower area. The pickup spots near this gate connect to the main roads leading to the Abraj Al Bait area. If you are staying in hotels near the Clock Tower, this becomes your most convenient option. The area gets busy during peak hours, but designated taxi zones keep things organized. Our drivers know the exact waiting points and can navigate through the crowd easily.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Marwa and Safa Gate Areas</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  These gates connect to the eastern and southern sides of the Haram. Pickup areas near these gates serve hotels in the Aziziyah and Jarwal neighborhoods. The roads here are slightly less busy compared to the main gates. For pilgrims staying farther from the Haram, these Haram pickup locations offer quick access to main roads leading out of the central area.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Pickup Locations During Peak Hours</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Peak hours around the Haram present special challenges. Right after Fajr, Maghrib, and Isha prayers, thousands of pilgrims exit simultaneously. Regular pickup spots can get overcrowded and chaotic. During these times, we recommend using pickup points near Masjid Al-Haram during peak hours that are slightly away from the main gates but still close enough for easy walking.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Alternative Spots During Rush Times</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  When main pickup areas get too crowded, secondary locations work better. Streets like Ajyad, Misfalah, and certain sections of Ibrahim Al Khalil have designated taxi zones that remain accessible even during rush hours. These traffic-free pickup points near Masjid Al-Haram help you avoid the worst congestion. Your driver reaches you faster, and you start your journey home without long waits.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Ready for stress-free transportation from the Haram? Book Haramain Umrah Taxi now and get picked up from the most convenient spot near your location.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Easiest Pickup Point for Families Near Haram</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Families with children and elderly members need pickup spots that require minimal walking. The areas near King Abdul Aziz Gate and certain sections near King Fahd Gate offer the shortest walking distances. These locations have smooth pathways without stairs or steep slopes. Wheelchairs and strollers can move easily. Our drivers wait at these family-friendly spots and help with any assistance you need.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Find Your Taxi Pickup Point Easily?</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It is simple to find the right taxi pickup points when you follow these tips. First, always note which gate you are using to exit the Haram. Different gates lead to different streets and pickup zones. Second, use Google Maps or our app&apos;s location feature. We can guide you step by step from your current location to the nearest pickup spot. Third, look for the official taxi waiting signs. Saudi authorities have marked designated pickup areas around the Haram. These marked zones ensure safe and legal pickup operations.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Navigating pickup points around Masjid Al Haram becomes simple when you know the right spots. From King Fahd Gate to King Abdul Aziz Gate, each pickup location serves specific areas and needs. Haramain Umrah Taxi helps you choose the best spot based on your exit gate, hotel location, and current traffic conditions. Don&apos;t waste time searching for taxis or struggling with crowded areas.
                </p>
                
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book Haramain Umrah Taxi now through our app or website. Experience safe, convenient pickups from the best locations near Masjid Al Haram. Your comfortable ride is just one click away.
                </p>
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
