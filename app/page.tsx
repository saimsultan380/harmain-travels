import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Fleet } from "@/components/sections/Fleet";
import { Pricing } from "@/components/sections/Pricing";
import { ZiyaratTours } from "@/components/sections/ZiyaratTours";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowToBook } from "@/components/sections/HowToBook";
import { Testimonials } from "@/components/sections/Testimonials";
import { OtherServices } from "@/components/sections/OtherServices";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Haramain Umrah Taxi: Best Private Umrah Taxi Service Book",
  description: "Haramain Umrah Taxi provides the best private umrah taxi services for families and pilgrims in Makkah & Madinah, Saudi Arabia. BOOK at Discounted Prices!",
  keywords: [
    "Umrah taxi",
    "Makkah taxi",
    "Madinah taxi",
    "Jeddah airport transfer",
    "Haramain taxi",
    "Saudi Arabia taxi service",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Services />
        <OtherServices />
        <Fleet />
        <Pricing />
        <ZiyaratTours />
        <About />
        <WhyChooseUs />
        <HowToBook />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}