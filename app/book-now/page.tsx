import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/BookingForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Book Now - Haramain Umrah Taxi",
  description: "Book your Umrah taxi services online. Fill out our easy booking form to reserve your ride in Makkah, Madinah, and across Saudi Arabia.",
  keywords: [
    "Book Umrah taxi",
    "Online taxi booking",
    "Makkah taxi booking",
    "Madinah taxi booking",
    "Airport transfer booking",
    "Ziyarat tour booking",
  ],
  alternates: {
    canonical: "/book-now",
  },
};

export default function BookNowPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <BookingForm />
      <Footer />
    </div>
  );
}
