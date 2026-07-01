import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Wallet, Clock8, ShieldCheck, Plane } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How Much is the Makkah to Jeddah & Jeddah Airport Taxi Fare?",
  description: "Discover the Makkah to Jeddah & Jeddah Airport taxi fare with Haramain Umrah Taxi. Fixed rates from SAR 200, professional drivers, and 24/7 service. Book Now!",
  alternates: {
    canonical: "/makkah-to-jeddah-and-jeddah-airport-fare/",
  },
  openGraph: {
    title: "How Much is the Makkah to Jeddah & Jeddah Airport Taxi Fare?",
    description: "Discover the Makkah to Jeddah & Jeddah Airport taxi fare with Haramain Umrah Taxi. Fixed rates from SAR 200, professional drivers, and 24/7 service. Book Now!",
    url: "/makkah-to-jeddah-and-jeddah-airport-fare/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much is the Makkah to Jeddah & Jeddah Airport Taxi Fare?",
    description: "Discover the Makkah to Jeddah & Jeddah Airport taxi fare with Haramain Umrah Taxi. Fixed rates from SAR 200, professional drivers, and 24/7 service. Book Now!",
  },
};

const post = {
  id: "makkah-to-jeddah-and-jeddah-airport-fare",
  title: "How Much is the Makkah to Jeddah & Jeddah Airport Taxi Fare?",
  excerpt: "Discover the Makkah to Jeddah & Jeddah Airport taxi fare with Haramain Umrah Taxi. Fixed rates from SAR 200, professional drivers, and 24/7 service. Book Now!",
  category: "taxi-fares",
  categoryName: "Taxi Fares",
  date: "2026-05-12",
  readTime: "12 min read",
  author: "M Umar Irfan",
  image: "/images/How-Much-is-the-Makkah-to-Jeddah-Jeddah-Airport-Taxi.png",
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
                  Are you completing your Umrah and need to know the Makkah to Jeddah & Jeddah Airport taxi fare for your return flight? We understand how crucial timing and clear pricing are when catching international flights after your spiritual journey. 
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  At Haramain Umrah Taxi, we provide transparent rates and punctual service so you reach your destination on time, every time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Wallet className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Budget Friendly</h3>
                    <p className="text-sm text-[var(--text-2)]">Makkah to Jeddah fares starting from just SAR 200 for standard sedans.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <Clock8 className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Punctual Pickups</h3>
                    <p className="text-sm text-[var(--text-2)]">Flight tracking and early arrival to ensure you never miss your flight.</p>
                  </div>
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)] text-center">
                    <ShieldCheck className="mx-auto text-[var(--gold)] mb-4" size={32} />
                    <h3 className="font-heading font-bold mb-2">Professional Care</h3>
                    <p className="text-sm text-[var(--text-2)]">Licensed drivers who handle your luggage and understand airport routes.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Makkah to Jeddah Taxi Fare List</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our Makkah to Jeddah taxi fare is clearly defined for every vehicle type. We eliminate confusion with straightforward pricing.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse border border-[var(--border)] rounded-xl overflow-hidden">
                    <thead className="bg-[var(--green)] text-white">
                      <tr>
                        <th className="p-4 text-left font-heading">Vehicle Type</th>
                        <th className="p-4 text-left font-heading">Capacity</th>
                        <th className="p-4 text-left font-heading">Fare (SAR)</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--text-2)]">
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Standard Sedan (Camry/Sonata)</td>
                        <td className="p-4">4 Passengers</td>
                        <td className="p-4">200 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Hyundai Staria</td>
                        <td className="p-4">7 Passengers</td>
                        <td className="p-4">270 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Hiace Microbus</td>
                        <td className="p-4">10 Passengers</td>
                        <td className="p-4">350 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Luxury GMC (Yukon/Tahoe)</td>
                        <td className="p-4">7 Passengers</td>
                        <td className="p-4">450 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold">Coaster</td>
                        <td className="p-4">18 Passengers</td>
                        <td className="p-4">500 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold">Large Bus</td>
                        <td className="p-4">50 Passengers</td>
                        <td className="p-4">800 SAR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 italic">
                  The Makkah to Jeddah taxi price covers everything from pickup to drop-off. No additional charges surprise you at the end of your journey.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why is our Makkah to Jeddah Airport Taxi Fare reasonable?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Makkah to Jeddah airport taxi fare matches our standard city rates. We do not charge extra for airport drop-offs. Our taxi fare from Makkah to Jeddah airport includes flight terminal access. Your driver drops you at your airline&apos;s departure area with your luggage.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Wondering how much taxi is from Makkah to Jeddah Airport? Check our pricing above. The Makkah to Jeddah airport car fare depends solely on vehicle selection, not destination within Jeddah.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Distance and Travel Time</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The distance from Makkah to Jeddah is approximately 84.3 kilometers along Route 40. When you travel from Makkah to Jeddah by car, expect 60 to 90 minutes, depending on traffic. Our drivers monitor traffic conditions and choose optimal routes. We ensure you reach the airport with time to spare for check-in procedures.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Makkah to Jeddah by Private Car</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Traveling from Makkah to Jeddah by car offers comfort and convenience. Our modern fleet provides air-conditioned vehicles for your journey. The Makkah to Jeddah by car price starts at SAR 200 for a Sedan, and SAR 450 for luxury GMC vehicles. This affordable rate includes professional drivers and clean, maintained cars.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Cheapest Taxi Options</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Searching for the cheapest taxi fare from Makkah to Jeddah? Our Sedan (Camry/Sonata) vehicles at SAR 200 offer excellent value. You get luxury comfort at budget-friendly rates. Solo travelers find sedans economical, while families benefit from our van pricing.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Private Car for Umrah Services</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our private car for Umrah in Makkah extends to Jeddah transfers. Complete your spiritual journey with reliable transportation to your departure point. The private car for umrah from Makkah to Jeddah includes experienced drivers familiar with pilgrim schedules. They understand flight timing and ensure punctual service.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Group Transportation Economics</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The Makkah to Jeddah bus price begins at SAR 500 for our 18-passenger Coaster. For larger groups, our Makkah to Jeddah group umrah bus price is SAR 800 for 50 people. That&apos;s only SAR 18 per person, extremely economical for group travel. The Makkah to Jeddah fare per person decreases significantly with larger vehicles.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Choose Our Service</h2>
                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li><strong>Flight Tracking:</strong> We monitor your flight schedule and adjust pickup times for any changes.</li>
                  <li><strong>Luggage Assistance:</strong> Drivers help load and unload all your bags, making travel hassle-free.</li>
                  <li><strong>Multiple Stops:</strong> Need to stop for last-minute shopping? We accommodate reasonable requests.</li>
                  <li><strong>Clean Vehicles:</strong> Every car is sanitized and maintained to high standards for your comfort.</li>
                  <li><strong>Licensed Drivers:</strong> All our drivers hold valid licenses and know Jeddah routes expertly.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Booking Your Ride</h2>
                <ol className="list-decimal list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li><strong>Provide Travel Information:</strong> Share your hotel location in Makkah, flight time, and passenger count.</li>
                  <li><strong>Choose Your Vehicle:</strong> Select from our fleet based on group size and comfort preferences.</li>
                  <li><strong>Get Instant Quote:</strong> Receive immediate fare confirmation with no hidden charges.</li>
                  <li><strong>Confirm and Relax:</strong> Book your ride and receive driver details before your travel date.</li>
                </ol>

                <div className="bg-[var(--bg-alt)] border-l-4 border-[var(--gold)] p-6 my-8 rounded-r-xl">
                  <div className="flex items-start gap-4">
                    <Plane className="text-[var(--gold)] shrink-0" size={24} />
                    <div>
                      <h4 className="font-heading font-bold mb-2">Travel Tips for Makkah to Jeddah</h4>
                      <p className="text-[var(--text-2)] text-sm">
                        Plan to leave Makkah 3-4 hours before international flights. Reserve your taxi at least 24 hours in advance to guarantee availability during busy seasons.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your departure from Makkah to Jeddah deserves reliable and timely transportation. Haramain Umrah Taxi offers fixed pricing from SAR 200, professional drivers who understand flight schedules, and vehicles for every group size. We ensure you reach the airport with adequate time for check-in and boarding.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Book your Makkah to Jeddah taxi now and end your sacred journey as smoothly as it began.
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
