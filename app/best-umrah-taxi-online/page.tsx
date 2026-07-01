import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Best Umrah Taxi Online in Makkah, Madinah | Umrah Taxi Service",
  description: "Book the best online Umrah taxi service in Makkah and Madinah. Professional drivers, reliable service, transparent pricing & 24/7 support. Reserve your ride now!",
  alternates: {
    canonical: "/best-umrah-taxi-online/",
  },
  openGraph: {
    title: "Best Umrah Taxi Online in Makkah, Madinah | Umrah Taxi Service",
    description: "Book the best online Umrah taxi service in Makkah and Madinah. Professional drivers, reliable service, transparent pricing & 24/7 support. Reserve your ride now!",
    url: "/best-umrah-taxi-online/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Umrah Taxi Online in Makkah, Madinah | Umrah Taxi Service",
    description: "Book the best online Umrah taxi service in Makkah and Madinah. Professional drivers, reliable service, transparent pricing & 24/7 support. Reserve your ride now!",
  },
};

const post = {
  id: "best-umrah-taxi-online",
  title: "Best Umrah Taxi Online in Makkah, Madinah | Umrah Taxi Service",
  excerpt: "Book the best online Umrah taxi service in Makkah and Madinah. Professional drivers, reliable service, transparent pricing & 24/7 support. Reserve your ride now!",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-23",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/best-umrah-taxi-online.jpeg",
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
                  Your Umrah journey demands peace of mind, not transportation headaches. Standing in the hot Saudi sun, negotiating taxi fares drains your energy. You came to worship, not argue about prices with drivers. We understand this completely.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our best umrah taxi online services in Makkah and Madinah eliminate every transport worry before you even board your flight. You can book from home and know the exact prices. Your driver waits at arrivals with your name.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Read this complete guide to discover how our umrah taxi online booking system in Makkah and Madinah transforms your sacred journey.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Online Umrah Taxi Service Standards</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  What makes the best umrah taxi service stand apart? It is respect, reliability, and reasonable pricing combined perfectly. Respect means treating you with the dignity your spiritual journey deserves. Our drivers greet you properly. They help with luggage. They maintain clean vehicles.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Reliability means showing up on time when promised. We track your flights automatically. Delays do not matter. We adjust without you calling. Your driver waits no matter how long immigration takes. This dependability matters immensely after exhausting international flights.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Umrah Taxi Services in Makkah</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Umrah taxi services in Makkah require deep local knowledge. Makkah's streets confuse even GPS systems during peak seasons. Hotels near Masjid al-Haram share similar names. Traffic patterns change constantly based on prayer times and crowd movements.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our drivers navigate Makkah blindfolded if needed. They grew up here. They know every alley, every hotel entrance, every checkpoint location. You reach your destination via the fastest route possible. No circling lost. No frustration from communication failures.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Makkah Hotel to Haram Transfers</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Makkah Umrah taxi specializes in frequent Haram trips. You pray five times daily at a minimum. You might visit for Tahajjud prayers too. Each trip needs reliable transport, especially for families with elderly members or young children.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We offer package deals for multiple rides. This saves money compared to booking each time individually. The same driver serves you when possible, building comfortable familiarity throughout your stay.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Online Makkah Ziyarat Tours</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our online Umrah taxi in Makkah extends beyond just Haram trips. You want to visit Jabal al-Nour, Cave Hira, Jabal Thawr, and Jannat al-Mualla. These sacred sites hold profound Islamic history. Our drivers know them intimately and explain their significance during visits.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You can visit all major sites comfortably. Our driver waits at each location, letting you explore without rushing. This comprehensive tour deepens your spiritual connection to Makkah's Islamic heritage.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Umrah Taxi Services in Madinah</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Umrah taxi services in Madinah cater to the Prophet's city's unique atmosphere. Madinah feels more relaxed than Makkah. Traffic moves smoothly. Hotels spread wider across the city. Yet you still need reliable transport for meaningful visits.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our umrah taxi in Madinah service connects you to Masjid Nabawi effortlessly. Most hotels are situated within 10-15 minutes of the mosque. Your worship schedule guides our service timing completely.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Online Madinah Ziyarat Services</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The umrah taxi services in Madinah include comprehensive Ziyarat tours. Mount Uhud, Masjid Quba, Battle of Trench sites, and Jannat al-Baqi require proper transportation. Walking these distances in Saudi heat proves difficult for most people.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We offer half-day and full-day Ziyarat packages. Half-day tours cover Masjid Quba and Mount Uhud. Full-day tours include all major sites. Our drivers share authentic historical information, enriching your visit tremendously.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Five Star Umrah Taxi in KSA</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We believe that combining vehicle condition, driver professionalism, and customer service excellence makes a 5-star taxi in KSA. Our fleet includes only recent-model vehicles maintained properly. Air conditioning works perfectly. Seats stay clean and comfortable.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our drivers dress professionally and speak clearly in Arabic, English, and Urdu. They understand Islamic etiquette perfectly and do not play music unnecessarily. Our driver drives calmly and safely, respecting your spiritual state of mind.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Luxury Umrah Taxi Options</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Luxury umrah taxi service offers premium comfort for special needs. Our GMC vehicles provide spacious leather seating for up to seven passengers. These SUVs handle rough roads smoothly. They offer superior comfort for elderly passengers or those with back problems.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The luxury option costs vary on the basis of routes. It costs more than a Sedan but also offers more than a standard vehicle. This slight price difference delivers significantly better comfort. Families traveling with parents or grandparents appreciate this option greatly. The extra space makes journeys more comfortable for everyone.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How Online Booking of Umrah Taxi Service Works?</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking your umrah taxi online takes just minutes through our simple system.
                </p>

                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>Visit our website or WhatsApp our number.</li>
                  <li>Tell us your travel dates, arrival airport, and hotel locations in both cities.</li>
                  <li>We respond within minutes with customized package options and individual trip pricing.</li>
                  <li>You receive a detailed quote covering all the trips you will need.</li>
                  <li>The breakdown shows each journey separately with transparent pricing.</li>
                  <li>You choose which trips you want to book.</li>
                  <li>We send confirmation via email and WhatsApp, including all driver details and contact numbers.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Haramain Umrah Taxi Is Best for Umrah?</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We specialize exclusively in serving Umrah pilgrims and tourists. This focus means we understand your needs intimately. Our drivers appreciate the spiritual significance of your journey. They treat you with the respect your worship deserves.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our transparent pricing builds trust immediately. Many competitors quote low prices, then add charges for luggage, waiting, tolls, or traffic. We include everything up front. The price you see is the total price. This honesty reflects our Islamic values completely.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Licensed and Insured</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  All our drivers hold valid Saudi taxi licenses. Every vehicle carries comprehensive insurance coverage. You travel legally and safely always. If accidents occur, insurance handles everything properly. Your safety remains our absolute top priority.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We maintain vehicles through regular professional servicing. Brakes, tires, engines, and everything receive proper maintenance. You never ride in poorly maintained vehicles, risking breakdowns or safety issues. This attention to mechanical details reflects our commitment to excellence.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Customer Service Excellence</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our support team operates 24/7, answering questions and solving problems. You can reach us via WhatsApp, phone, or email anytime. We respond in minutes, not hours. Our multilingual team communicates clearly in Arabic, English, Urdu, and other major languages.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Booking Confirmation Process</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  After booking, you receive a detailed confirmation covering everything. This includes driver name, phone number, vehicle model, and license plate number. You also get our 24/7 support number for emergencies or questions during your trip.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We send reminder messages the day before each scheduled pickup. These reminders confirm timing and pickup location.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Special Requests Accommodation</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you need child car seats, want female drivers for women-only groups, or require wheelchair-accessible vehicles, tell us during booking. We accommodate special requests whenever possible. Our goal is to make your transportation experience comfortable and worry-free.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Reviews and Reputation</h3>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Thousands of satisfied pilgrims have used our services successfully. You can check our website for authentic reviews from previous customers. Read about their experiences in their own words. This social proof demonstrates our consistent service quality over the years.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We maintain five-star average ratings across multiple platforms. These ratings reflect genuine customer satisfaction, not fake reviews. We earned this reputation through years of honest, professional service to the Umrah community worldwide.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Umrah deserves the best Umrah taxi service supporting your spiritual journey properly. Whether you need umrah taxi services Makkah or Madinah, we serve you with professionalism and Islamic values. Our luxury umrah taxi options provide premium comfort, while our standard vehicles offer excellent value.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book your Umrah taxi online today through our website or WhatsApp. Let us handle all transportation while you focus on worship, dua, and creating blessed memories in the holy cities.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-semibold">
                  At Haramain Umrah Taxi, your comfort is our promise. Your satisfaction is our mission. Your blessed journey is our honor to serve.
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