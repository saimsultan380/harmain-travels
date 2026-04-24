import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Canonical } from "@/components/SEO/Canonical";

export const metadata: Metadata = {
  title: "Privacy Policy - Haramain Umrah Taxi",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information when you use our Umrah taxi services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Canonical />
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-32 pb-16 md:pb-20 lg:pb-24 px-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-[var(--bg)] border-2 border-t-[var(--gold)] border-b-[var(--green)] border-l-[var(--gold)] border-r-[var(--green)] rounded-2xl p-8 md:p-12 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[var(--text-1)] mb-8">Privacy Policy</h1>
            <p className="text-[var(--text-2)] font-body mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">1. Introduction</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  Haramain Umrah Taxi ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our taxi services in Saudi Arabia.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">2. Information We Collect</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed mb-4">
                  We collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-[var(--text-2)] font-body space-y-2">
                  <li><strong>Personal Information:</strong> Name, phone number, email address, WhatsApp number</li>
                  <li><strong>Booking Details:</strong> Pickup location, drop-off location, date and time of travel, number of passengers</li>
                  <li><strong>Payment Information:</strong> Payment method details (processed securely through third-party payment processors)</li>
                  <li><strong>Travel Information:</strong> Flight details, hotel information, special requirements</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">3. How We Use Your Information</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-[var(--text-2)] font-body space-y-2">
                  <li>Process and confirm your taxi bookings</li>
                  <li>Communicate with you about your reservations</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our services and customer experience</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">4. Data Security</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">5. Sharing Your Information</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only with:
                </p>
                <ul className="list-disc pl-6 text-[var(--text-2)] font-body space-y-2">
                  <li>Our drivers and service providers for booking fulfillment</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Law enforcement authorities when required by law</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">6. Your Rights</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-[var(--text-2)] font-body space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-heading font-bold text-[var(--text-1)] mb-4">7. Contact Us</h2>
                <p className="text-[var(--text-2)] font-body leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
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
