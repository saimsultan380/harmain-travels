import type { Metadata } from "next";
import { AirportTaxiPageClient } from "./AirportTaxiPageClient";

export const metadata: Metadata = {
  title: "Airport Transfers | Madinah Airport & Jeddah Airport Taxi",
  description: "Reliable airport taxi services in Saudi Arabia. Fixed fares for Jeddah and Madinah airport transfers to Makkah and Masjid Nabawi. Book 24/7 on WhatsApp.",
  keywords: ["Jeddah Airport Taxi", "Madinah Airport Taxi", "Makkah Transfer", "Saudi Airport Taxi", "Haramain Taxi"],
  alternates: {
    canonical: "/airport-taxi-services",
  },
};

export default function Page() {
  return <AirportTaxiPageClient />;
}
