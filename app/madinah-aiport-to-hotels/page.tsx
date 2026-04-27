import type { Metadata } from "next";
import { MadinahAirportToHotelsClient } from "./MadinahAirportToHotelsClient";

export const metadata: Metadata = {
  title: "Madinah Airport to Hotel Taxi Services and Fares: Book Now!",
  description:
    "Get your Madinah Airport hotel taxi services starting from 170 SAR. We provide professional drivers and fixed rates. Book your ride online - available 24/7!",
  keywords: [
    "Madinah airport to hotel taxi",
    "Madinah airport to hotel fare",
    "Prince Mohammad airport taxi",
    "Madinah airport to Masjid Nabawi",
    "Madinah airport pickup",
    "Madinah hotel transfer",
    "Umrah airport taxi",
    "Haramain Umrah Taxi",
  ],
  alternates: {
    canonical: "/madinah-aiport-to-hotels",
  },
};

export default function Page() {
  return <MadinahAirportToHotelsClient />;
}
