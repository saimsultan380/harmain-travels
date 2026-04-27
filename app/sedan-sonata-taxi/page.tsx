import type { Metadata } from "next";
import { SedanSonataTaxiClient } from "./SedanSonataTaxiClient";

export const metadata: Metadata = {
  title: "Sedan Sonata (Camry) Taxi Services in Saudi Arab & Makkah",
  description:
    "Click to see Our routes, fares, and packages for Sedans Sonata (Camry) taxi in Makkah, Madina, Jeddah & Saudia. Book Ziyarat, Airport & Umrah Sonata taxi in KSA",
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
