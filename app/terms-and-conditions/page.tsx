import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";

export const metadata: Metadata = {
  title: "Terms & Conditions - Haramain Umrah Taxi",
  description: "Read our terms and conditions to understand the rules and regulations for using our Umrah taxi services in Saudi Arabia.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditions() {
  return (
    <>
      <Canonical />
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-[var(--bg)] border-2 border-t-[var(--gold)] border-b-[var(--green)] border-l-[var(--gold)] border-r-[var(--green)] rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Terms & Conditions</h1>
            <p className="text-[var(--text-2)] font-body mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">1. Acceptance of Terms</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  By booking or using the services provided by Haramain Umrah Taxi, you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">2. Booking and Payment</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed mb-4">
                  All bookings are subject to availability and confirmation. Payment must be made in full or as agreed upon at the time of booking.
                </p>
                <ul className="list-disc pl-6 text-[var(--text-2)] font-body space-y-2">
                  <li>Bookings can be made via WhatsApp, phone, or our website</li>
                  <li>Advance payment may be required for certain bookings</li>
                  <li>Cancellation policies apply as specified in your booking confirmation</li>
                  <li>Prices are subject to change without prior notice</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">3. Cancellation Policy</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed mb-4">
                  Cancellations must be made at least 24 hours before the scheduled pickup time for a full refund. Cancellations made less than 24 hours before pickup may be charged a cancellation fee.
                </p>
                <ul className="list-disc pl-6 text-[var(--text-2)] font-body space-y-2">
                  <li><strong>24+ hours notice:</strong> Full refund</li>
                  <li><strong>12-24 hours notice:</strong> 50% refund</li>
                  <li><strong>Less than 12 hours:</strong> No refund</li>
                  <li><strong>No-show:</strong> Full charge applies</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">4. Passenger Responsibilities</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed mb-4">
                  Passengers are responsible for:
                </p>
                <ul className="list-disc pl-6 text-[var(--text-2)] font-body space-y-2">
                  <li>Being at the pickup location on time</li>
                  <li>Providing accurate booking information</li>
                  <li>Behaving respectfully towards drivers and other passengers</li>
                  <li>Not damaging the vehicle in any way</li>
                  <li>Following Saudi Arabian laws and regulations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">5. Luggage Policy</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  Each passenger is allowed standard luggage (1 suitcase + 1 carry-on). Additional luggage may incur extra charges. Haramain Umrah Taxi is not responsible for lost or damaged luggage, except in cases of driver negligence.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">6. Driver Conduct</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  Our drivers are professional, licensed, and trained. They are expected to:
                </p>
                <ul className="list-disc pl-6 text-[var(--text-2)] font-body space-y-2">
                  <li>Arrive on time for pickups</li>
                  <li>Drive safely and follow traffic laws</li>
                  <li>Maintain clean and comfortable vehicles</li>
                  <li>Provide excellent customer service</li>
                  <li>Assist with luggage when possible</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">7. Liability</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  Haramain Umrah Taxi is not liable for:
                </p>
                <ul className="list-disc pl-6 text-[var(--text-2)] font-body space-y-2">
                  <li>Delays caused by traffic, weather, or other circumstances beyond our control</li>
                  <li>Personal belongings left in vehicles</li>
                  <li>Injuries resulting from passenger negligence</li>
                  <li>Third-party services or accommodations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">8. Modifications</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">9. Contact Information</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  For questions about these Terms & Conditions, please contact us:
                </p>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  <strong>Email:</strong> info@haramaintaxi.com<br />
                  <strong>WhatsApp:</strong> +966 59 840 1594
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
