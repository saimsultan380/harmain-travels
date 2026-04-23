import type { Metadata } from "next";
import { UmrahTaxiPageClient } from "./UmrahTaxiPageClient";

export const metadata: Metadata = {
  title: "Online Umrah Taxi Services in Makkah & Madinah, Saudi Arabia",
  description: "Book your Umrah taxi online in seconds. Safe, comfortable, and punctual taxi services across Makkah and Madinah. Fixed rates, licensed drivers, and 24/7 support.",
  keywords: ["Umrah Taxi Services", "Makkah Taxi", "Madinah Taxi", "Online Umrah Taxi", "Umrah Transportation", "Haramain Umrah Taxi"],
  alternates: {
    canonical: "/umrah-taxi-services",
  },
};

export default function Page() {
  return <UmrahTaxiPageClient />;
}
