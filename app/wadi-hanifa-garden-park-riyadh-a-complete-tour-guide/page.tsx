import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogNavigation } from "@/components/blog/BlogNavigation";

export const metadata: Metadata = {
  title: "Wadi Hanifa Garden & Park, Riyadh: A Complete Tour Guide",
  description: "Explore Wadi Hanifa Garden & Park in Riyadh with our complete tour guide with attractions, tips, and travel help by Haramain Umrah Taxi.",
  alternates: {
    canonical: "/wadi-hanifa-garden-park-riyadh-a-complete-tour-guide/",
  },
};

const post = {
  id: "wadi-hanifa-garden-park-riyadh-a-complete-tour-guide",
  title: "Wadi Hanifa Garden & Park, Riyadh: A Complete Tour Guide",
  excerpt: "Explore Wadi Hanifa Garden & Park in Riyadh with our complete tour guide with attractions, tips, and travel help by Haramain Umrah Taxi.",
  category: "sight-seeings",
  categoryName: "Sight Seeings",
  date: "2026-05-12",
  readTime: "11 min read",
  author: "M Umar Irfan",
  image: "/images/Wadi-Hanifa-Garden-Park-Riyadh-A-Complete-Tour-Guide.png",
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
                  height={1500}
                  className="w-full h-auto md:h-[600px] lg:h-[800px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  If you are looking for a green escape in Riyadh&apos;s desert landscape, Wadi Hanifa offers 80 kilometers of natural beauty just minutes from the city center. Here is everything you need to know about visiting this stunning valley.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">What is Special in Wadi Hanifa?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Wadi Hanifa Riyadh stretches as a narrow valley running through western Riyadh. This is not your typical city park. The Hanifa Valley spans over 80 kilometers, making it one of the longest natural valleys in the region.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The valley was once Riyadh&apos;s largest dumping ground. Industrial waste and urban expansion nearly destroyed it. The Riyadh Development Authority transformed this wasteland into an award-winning natural oasis. Today, it serves as proof that environmental restoration is effective. The name &quot;Wadi Hanifa&quot; originates from the Bani Hanifa tribe, which once inhabited this area. Historically, locals called it Wadi e Hanifa or Wadi al-Arad. The valley acts as a natural water drainage system covering over 4,000 square kilometers.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Why Visit Wadi Hanifa?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  You need a break from Riyadh&apos;s concrete and traffic. Wadi Hanifa Park delivers exactly that. The valley features man-made lakes, flowing water channels, and over 30,000 desert trees alongside 7,000 date palms.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The transformation won the prestigious Aga Khan International Award for Architecture. This recognition highlights the project&apos;s success in balancing urban development with environmental preservation.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Families love the open spaces for picnics. Cyclists appreciate the dedicated paths. Hikers explore the 47 kilometers of well-maintained trails. Bird watchers spot over 300 migratory bird species. Everyone finds something here.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Location and How to Reach Wadi Hanifa?</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Wadi Hanifa in Saudi Arab runs through Riyadh&apos;s western districts. It starts northwest of the city and extends southeast through Diriyah, the Diplomatic Quarter, Al Ha&apos;ir, and several other neighborhoods.
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>By Car</strong> - Highway 65 connects central Riyadh directly to various valley access points. Navigation apps like Google Maps provide real-time directions to specific entrances.</li>
                  <li><strong>By Taxi</strong> - Ride-hailing services like Fater Transport operate throughout Riyadh. Simply enter &quot;Wadi Hanifa&quot; and specify which section you want to visit.</li>
                  <li><strong>From the Airport</strong> - King Khalid International Airport, situated about 35-40 kilometers from the valley. Taxi rides take approximately 30-40 minutes, depending on traffic and your specific destination within the valley.</li>
                </ul>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  We at Fater Transport provide comfortable rides from any location in Riyadh to Wadi Hanifa garden access points. Our drivers know the area well and can recommend the best entry points based on what you want to experience.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Best Time to Visit Wadi Hanifa</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  October through April offers the most pleasant weather for visiting Wadi Hanifa. Temperatures during these cooler months range from 15-25°C, perfect for outdoor activities. Summer months (May-September) bring intense heat, often exceeding 40°C. If you must visit during summer, go early morning (before 8 AM) or late afternoon (after 5 PM).
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The valley opens 24/7, allowing flexibility in planning your Wadi Hanifa visit. However, daylight hours provide the best experience for hiking and photography.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Places to See in Wadi Hanifa</h2>
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Wadi Hanifa Dam</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The dam serves as a crucial reservoir managing excess water from northern regions during flooding. The surrounding area features 27 distinct sitting areas scattered throughout the valley. A scenic 5.6-kilometer walking path circles the dam area.
                </p>
                
                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Five Main Parks</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  The valley contains five interconnected parks: Dam Dam Park, Wadi Hanifa Dam area, Stone Dam Park, Factory Lake, and Al Jazaa Lake. Each park offers unique features. Some focus on playgrounds for children. Others emphasize quiet contemplation areas near water features.
                </p>

                <h3 className="text-xl font-heading font-bold text-[var(--text-1)] mb-4 mt-6">Historic Diriyah</h3>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  UNESCO World Heritage Site Diriyah is situated at the northern end of Wadi Hanifa. The ruins of old mud-brick buildings tell stories of Saudi Arabia&apos;s founding. The historic At-Turaif District shows traditional Najdi architecture. Walking through Diriyah&apos;s adobe streets feels like time travel. The area played a crucial role in Saudi unification. You should not miss this cultural experience when visiting the valley.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Activities You Can Enjoy In Wadi Hanifa</h2>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Walking and Hiking:</strong> Well-maintained paths run along both sides of the water channels. Trails range from easy walks to moderate hikes.</li>
                  <li><strong>Cycling:</strong> Dedicated cycling paths make the valley popular among Riyadh&apos;s cycling community. Bike rental facilities operate near main entry points.</li>
                  <li><strong>Picnicking:</strong> Shaded areas under date palms and desert trees provide perfect picnic spots. Many families spend entire afternoons relaxing on blankets.</li>
                  <li><strong>Bird Watching:</strong> Over 300 bird species visit the valley during migration seasons. Bring binoculars for better viewing.</li>
                  <li><strong>Fishing:</strong> Designated fishing areas allow this activity in certain sections. Check locally posted signs for permitted zones.</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Fater Transport For the Tour Of Wadi Hanifa</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Planning a family day out at Wadi Hanifa park? Our vehicles accommodate groups of all sizes. We offer:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[var(--text-2)]">
                  <li><strong>Sedans</strong> - Perfect for couples or small families visiting for a quick outing</li>
                  <li><strong>Staria Vans</strong> - Comfortable for families of 6-7 with picnic supplies</li>
                  <li><strong>Hiace</strong> - Great for extended family groups up to 12 people</li>
                  <li><strong>Buses</strong> - Ideal for large groups and organized tours</li>
                </ul>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Our drivers can wait while you explore, or arrange pickup at a scheduled time. We know which entry points offer the best experiences based on your interests.
                </p>

                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4 mt-8">Conclusion</h2>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Wadi Hanifa garden proves that Saudi Arabia offers more than desert and skyscrapers. This 80-kilometer oasis provides natural beauty, recreational activities, and historical significance within Riyadh&apos;s urban landscape.
                </p>
                <p className="text-[var(--text-2)] leading-relaxed mb-6">
                  Book your transportation with Fater Transport to explore this remarkable destination comfortably. Our team knows Riyadh intimately and ensures you reach the valley sections that match your interests. Contact us today to arrange your Wadi Hanifa visit.
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
