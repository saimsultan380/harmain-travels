import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Book Online Umrah Taxi for South African Pilgrims at Cheap Fares",
  description: "Book affordable online Umrah taxi services for South African pilgrims. Safe, comfortable transfers from Jeddah to Makkah & Madinah. Reserve your ride now!",
  alternates: {
    canonical: "/online-umrah-taxi-for-south-african-pilgrams/",
  },
  openGraph: {
    title: "Book Online Umrah Taxi for South African Pilgrims at Cheap Fares",
    description: "Book affordable online Umrah taxi services for South African pilgrims. Safe, comfortable transfers from Jeddah to Makkah & Madinah. Reserve your ride now!",
    url: "/online-umrah-taxi-for-south-african-pilgrams/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Online Umrah Taxi for South African Pilgrims at Cheap Fares",
    description: "Book affordable online Umrah taxi services for South African pilgrims. Safe, comfortable transfers from Jeddah to Makkah & Madinah. Reserve your ride now!",
  },
};

const post = {
  id: "online-umrah-taxi-for-south-african-pilgrams",
  title: "Book Online Umrah Taxi for South African Pilgrims at Cheap Fares",
  excerpt: "Book affordable online Umrah taxi services for South African pilgrims. Safe, comfortable transfers from Jeddah to Makkah & Madinah. Reserve your ride now!",
  category: "other-services",
  categoryName: "Other Services Guides",
  date: "2026-05-23",
  readTime: "10 min read",
  author: "M Umar Irfan",
  image: "/images/book-online-umrah-taxi-for-south-african.jpeg",
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
                  You need careful arrangements if you are planning an Umrah journey from South Africa. Every pilgrim after landing at the airport wants to avoid the transportation stress in the new country. You will also look for a service that provides a comfortable ride at the time of need.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Fater Transport provides a reliable, comfortable, safe Umrah taxi for South African pilgrims at a fair price. Our main focus is smooth transfer so that you can keep your concentration on worship and logistics.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Affordable Fares Of Fater Transport Without Compromising Quality</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you travel from South Africa to Saudi Arabia, then the cost for this journey is already high. Most of your budget is spent on flights, hotels, and packages. Therefore, your taxi cost inside Saudi Arabia should not be high.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Fater Transport provides quality service by keeping our fares competitive. Our Umrah taxi is cheap; however, cheap does not mean careless. We have well-maintained vehicles, professional drivers, and punctual service.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Fater Transport believes every pilgrim deserves reliable transport at a fair price. That is why many returning visitors recommend our umrah taxi for South African pilgrims to friends and family.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Comfortable Airport Transfers for South African Pilgrims</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Every pilgrim's journey starts at Jeddah or Madinah airport. It can be exhausting to stand in taxi lines and negotiate the fares. Therefore, advance booking is preferred by the traveller.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your driver will already be waiting if you book a private Umrah taxi online with Fater Transport for South African pilgrims.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We offer tracking of flights and the option to adjust according to delays. All the passengers are respectful to us, and we assist them with their luggage as well. We ensure that your journey from the airport to Makkah or Madinah remains calm and smooth.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why South African Pilgrims Choose Private Umrah Taxi Services?</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Group buses do not have privacy and convenience, while shared taxis are also crowded. Similarly, first-time visitors may get confused in public transport.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  However, for South African pilgrims, private umrah taxi services give privacy and a flexible environment. Only your family or group will travel with you.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your journey will be non-stop or without unnecessary stops. There will be no wait for other passengers, and no fixed departure times. If you have elderly pilgrims, families, or children with you and want privacy then private umrah taxi service is best for you.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  It is preferred by many South African pilgrims who want comfort after long flights from Johannesburg, Cape Town, or Durban. Fater Transport is available at your own schedule.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">How To Book Online Umrah Taxi For South African Pilgrims?</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Modern travelers want everything arranged before departure. That includes transport in Saudi Arabia.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking is simple with our private Umrah taxi services online for South African pilgrims. The following are the steps you have to follow for online booking.
                </p>

                <ul className="list-disc list-inside text-[var(--text-2)] leading-relaxed mb-6 space-y-2">
                  <li>Visit our website and book through the booking form. You can also book through a call.</li>
                  <li>Contact us, share your travel details, and confirm your taxi in advance.</li>
                  <li>After booking, you will be aware of the fare, pickup point, and details of your driver.</li>
                  <li>This will keep your peace of mind, especially for first-time Umrah travelers from South Africa.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Direct Transfers Between Makkah and Madinah</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Both holy cities are visited by most South African pilgrims. Transportation from Makkah to Madinah should have a driver who knows the way to your destination and respects your schedule.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Fater Transport has clean, sanitized vehicles and professional drivers for direct intercity transfers. We provide a smooth and comfortable ride, so you can rest, recite, or reflect during the tour.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our private Umrah taxi service is considered the best for South African pilgrims due to a peaceful ride with transparent pricing. Our pricing does not have any hidden charges.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Service Designed for South African Travelers</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  South African pilgrims often travel in organized groups or with extended family. Some speak English as their primary language. Some travel for the first time.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We understand these needs, and communication stays clear. Instructions are simple. Pickup locations are explained properly. If you have special timing requirements, we adjust.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Travel on Your Schedule</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Umrah schedule may change. You may want to visit Madinah earlier. You may need transport back to the airport at a specific time. Flexibility matters.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  With private umrah taxi services for South African pilgrims, you are not tied to fixed bus timings. You choose the departure time. You confirm the pickup. We arrive on time.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  That control helps you plan your worship without transport pressure.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Simple Process & Clear Communication</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Booking your ride should not feel complicated. We keep the process straightforward. Share your arrival details. Confirm your location. Receive booking confirmation.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our team remains available to answer questions before your travel date. We guide you step by step. When you land, everything is already arranged.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  This level of preparation removes uncertainty. It allows you to focus on your travel purpose.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Book Your Umrah Taxi with Fater Transport</h2>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Your Umrah is a spiritual journey. Transport should support it, not disturb it.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are traveling from South Africa and want a dependable ride between the airport, Makkah, and Madinah, book our taxi service with Fater Transport. We offer safe, affordable, and comfortable transfers designed especially for South African pilgrims.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Reserve your private Umrah taxi in advance and travel with confidence. Contact Fater Transport today and secure your booking before your departure.
                </p>

                <p className="text-[var(--text-2)] leading-relaxed mb-6 font-semibold">
                  Let us handle the road while you focus on your ibadah.
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