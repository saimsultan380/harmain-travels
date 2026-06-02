import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, MapPin, CheckCircle, MessageSquare, Car, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "How to Get a Private Car for Makkah from Jeddah Airport?",
  description: "Do you want to get the best discounted private car for Makkah from Jeddah Airport? WhatsApp or Call Us, we provide 24/7 Jeddah airport to Makkah private cars",
  alternates: {
    canonical: "/private-car-for-makkah-from-jeddah-airport/",
  },
};

const post = {
  id: "private-car-for-makkah-from-jeddah-airport",
  title: "How to Get a Private Car for Makkah from Jeddah Airport?",
  excerpt: "Do you want to get the best discounted private car for Makkah from Jeddah Airport? WhatsApp or Call Us, we provide 24/7 Jeddah airport to Makkah private cars",
  category: "taxi-guides",
  categoryName: "Taxi Services",
  date: "2026-06-02",
  readTime: "8 min read",
  author: "M Umar Irfan",
  image: "/images/How to Get a Private Car for Makkah from Jeddah Airport.jpeg",
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
                  height={800}
                  className="w-full h-auto md:h-[500px] lg:h-[600px] object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  After a long flight, landing at the airport of Jeddah is one of those moments that every pilgrim will never forget. You are exhausted, you are in Ihram; your luggage is full, and Makkah is still 85-100 km away. You do not want to stand outside the terminal, haggling with random drivers or waiting for a common bus to fill up.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Before you even touch down at Jeddah Airport, the pre-booked private car from Jeddah Airport to Makkah takes care of all this. Your driver is already there. Your fare is already fixed. You walk off the plane, transfer to a private car, and head directly for your hotel.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-semibold text-[var(--green)]">
                  Book Haramain Umrah Taxi services on WhatsApp today for your airport transfers before your trip.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How to Book a Private Car from Jeddah Airport to Makkah?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Once you have confirmed your flight, the first thing you will need to arrange is your private car. Most pilgrims leave this for the last minute and end up paying inflated on-spot rates or settling for whatever is available.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking in advance with Haramain Umrah Taxi takes less than five minutes and can be done from anywhere in the world.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Steps to Book Your Private Car for Makkah from Jeddah Airport</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)]">
                    <div className="w-12 h-12 bg-[var(--green)]/10 rounded-full flex items-center justify-center mb-4">
                      <MessageSquare className="text-[var(--green)]" size={24} />
                    </div>
                    <h4 className="font-heading font-bold mb-2 text-[var(--text-1)]">Step 1 - Reach Us on WhatsApp</h4>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed">Please contact us providing your flight number, arrival date, group size, and hotel name in Makkah. There is no sign-up or paperwork needed.</p>
                  </div>

                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)]">
                    <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mb-4">
                      <Car className="text-[var(--gold)]" size={24} />
                    </div>
                    <h4 className="font-heading font-bold mb-2 text-[var(--text-1)]">Step 2 - Choose Your Vehicle</h4>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed">Our team can advise you on which vehicle would be the best fit for your group size and luggage. Sedan, GMC, Staria, or Hiace; whatever fits your group best.</p>
                  </div>

                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)]">
                    <div className="w-12 h-12 bg-[var(--green)]/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="text-[var(--green)]" size={24} />
                    </div>
                    <h4 className="font-heading font-bold mb-2 text-[var(--text-1)]">Step 3 - Confirm Your Fixed Fare</h4>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed">We send you a fixed price with no hidden charges. What we confirm is exactly what you pay on arrival, nothing more.</p>
                  </div>

                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)]">
                    <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mb-4">
                      <Smartphone className="text-[var(--gold)]" size={24} />
                    </div>
                    <h4 className="font-heading font-bold mb-2 text-[var(--text-1)]">Step 4 - Receive Your Driver Details</h4>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed">We assign your driver and share their name, contact number, and vehicle details well before your travel date.</p>
                  </div>

                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border border-[var(--border)]">
                    <div className="w-12 h-12 bg-[var(--green)]/10 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="text-[var(--green)]" size={24} />
                    </div>
                    <h4 className="font-heading font-bold mb-2 text-[var(--text-1)]">Step 5 - Get Picked Up at Arrivals</h4>
                    <p className="text-sm text-[var(--text-2)] leading-relaxed">Your driver awaits you at the arrivals hall wearing a sign with your name. No searching, no waiting, no stress.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Which Private Car Should You Book for This Route?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  A 60 - 90 minute travel time after a long flight makes all the difference with the right vehicle. On the way from Jeddah Airport to Makkah, Haramain Umrah Taxi provides the following services:
                </p>

                <div className="my-8 rounded-xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/Which Private Car Should You Book for This Route.jpeg"
                    alt="Which Private Car Should You Book for This Route"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border-l-4 border-[var(--gold)]">
                    <h4 className="font-heading font-bold mb-2 text-[var(--text-1)]">Camry or Sonata - Best for Small Families</h4>
                    <p className="text-[var(--text-2)] leading-relaxed">The Toyota Camry and Hyundai Sonata have seats that comfortably accommodate four passengers. They both offer complete air conditioning, adequate room for standard luggage, and are ideal for the single, the couple, or a small family looking for a comfortable, private car at a more affordable price.</p>
                  </div>

                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border-l-4 border-[var(--green)]">
                    <h4 className="font-heading font-bold mb-2 text-[var(--text-1)]">GMC - Best for Families Who Want Premium Comfort</h4>
                    <p className="text-[var(--text-2)] leading-relaxed">The GMC SUV is much more roomy and is much more luxurious than a standard sedan, accommodating up to 7 passengers. When travelling with older family members or simply when you want the most comfortable option available, the GMC is the best.</p>
                  </div>

                  <div className="p-6 bg-[var(--bg-alt)] rounded-xl border-l-4 border-[var(--gold)]">
                    <h4 className="font-heading font-bold mb-2 text-[var(--text-1)]">Staria or Hiace - Best for Larger Groups</h4>
                    <p className="text-[var(--text-2)] leading-relaxed">Staria or Toyota Hiace is designed to provide ample cabin space and quality air conditioning for groups of seven to 12 passengers. They are the best choices for extended families and travel groups that do not want to split up into several vehicles.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How Much Does a Private Car from Jeddah Airport to Makkah Cost?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  All fares below are estimated rates. Your exact fare will be confirmed and is fixed at the time of booking.
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse border border-[var(--border)] rounded-xl overflow-hidden">
                    <thead className="bg-[var(--green)] text-white">
                      <tr>
                        <th className="p-4 text-left font-heading">Vehicle</th>
                        <th className="p-4 text-left font-heading">Capacity</th>
                        <th className="p-4 text-left font-heading">Estimated Fare</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--text-2)]">
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold text-[var(--text-1)]">Camry or Sonata</td>
                        <td className="p-4">1 to 4 passengers</td>
                        <td className="p-4 font-bold text-[var(--green)]">250 to 300 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold text-[var(--text-1)]">GMC</td>
                        <td className="p-4">1 to 7 passengers</td>
                        <td className="p-4 font-bold text-[var(--green)]">450 to 500 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]">
                        <td className="p-4 font-bold text-[var(--text-1)]">Staria</td>
                        <td className="p-4">1 to 7 passengers</td>
                        <td className="p-4 font-bold text-[var(--green)]">300 to 350 SAR</td>
                      </tr>
                      <tr className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
                        <td className="p-4 font-bold text-[var(--text-1)]">Hiace or Hi-Roof</td>
                        <td className="p-4">1 to 12 passengers</td>
                        <td className="p-4 font-bold text-[var(--green)]">400 to 450 SAR</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Rates go up during the peak Umrah and Ramadan season. Booking early locks in your current rate before seasonal pricing applies. Reach out to Haramain Umrah Taxi on WhatsApp today to confirm your fare before your travel date.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Tips to Make Your Airport Pickup Smooth</h2>
                <ul className="space-y-4 text-[var(--text-2)] mb-8">
                  <li className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 bg-[var(--green)]/10 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    </div>
                    <span>When booking your flight, include your flight number, and your driver will be able to see when you arrive and make adjustments if flights are delayed.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 bg-[var(--green)]/10 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    </div>
                    <span>As soon as you have passed customs, message your driver via WhatsApp to let him or her know you are on your way out.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 bg-[var(--green)]/10 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    </div>
                    <span>There is no need to stop for taxi drivers or touts in the arrival area; your confirmed driver is waiting inside.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 bg-[var(--green)]/10 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    </div>
                    <span>Make sure you save the hotel name and address in your phone so you can verify with your driver before you depart.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="shrink-0 w-6 h-6 bg-[var(--green)]/10 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-[var(--green)] rounded-full"></div>
                    </div>
                    <span>Be sure to keep the entire group together at baggage claim.</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Umrah journey deserves a smooth start. Getting stuck at the airport searching for transport after a long flight is not something any pilgrim should deal with.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Haramain Umrah Taxi offers a reliable private car hire service from Jeddah Airport to Makkah with set prices, courteous drivers, early morning and late-night service, every day of the year.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-bold">
                  Call Haramain Umrah Taxi now on WhatsApp, provide the flight information, and have your private car arranged before you depart. Start your Umrah the right way from the moment you land.
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
