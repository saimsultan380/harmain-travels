import type { Metadata } from "next";
import { SedanSonataTaxiClient } from "./SedanSonataTaxiClient";

export const metadata: Metadata = {
  title: "Sedan Sonata Private Umrah Taxi or Car & Ziyarat Taxi in KSA: Call for Special Offers",
  description:
    "Book Hyundai Sonata private taxi for Umrah, Ziyarat, and airport transfers in KSA. Luxury sedan service in Makkah, Madinah, Jeddah with transparent fares and 24/7 availability.",
  keywords: [
    "Hyundai Sonata taxi",
    "Sedan taxi Saudi Arabia",
    "Private Umrah taxi",
    "Ziyarat taxi KSA",
    "Makkah to Madinah taxi",
    "Jeddah to Makkah taxi",
    "Airport taxi Saudi Arabia",
    "Hyundai Sonata Umrah taxi",
  ],
  alternates: {
    canonical: "/sedan-sonata-taxi",
  },
};

export default function Page() {
  return <SedanSonataTaxiClient />;
}
