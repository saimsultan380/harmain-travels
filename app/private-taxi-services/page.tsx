import type { Metadata } from "next";
import { PrivateTaxiPageClient } from "./PrivateTaxiPageClient";

export const metadata: Metadata = {
  title: "Private Taxi Services| Private Umrah Taxi Makkah & Madinah",
  description:
    "Private Umrah taxi services for families in Makkah & Madinah. Enjoy exclusive vehicles, flexible stops, and stress-free airport and intercity transfers. Book on WhatsApp 24/7.",
  keywords: [
    "Private taxi services",
    "Private Umrah taxi",
    "Private taxi Makkah",
    "Private taxi Madinah",
    "Private taxi near Haram",
    "Madinah to Makkah private car",
    "Jeddah airport to Makkah private car",
  ],
  alternates: {
    canonical: "/private-taxi-services",
  },
};

export default function Page() {
  return <PrivateTaxiPageClient />;
}
