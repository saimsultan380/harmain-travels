import type { Metadata } from "next";
import { MadinahAirportToHotelsClient } from "./MadinahAirportToHotelsClient";

export const metadata: Metadata = {
  title: "Madinah Airport to Hotel Taxi Services and Fares",
  description:
    "Book reliable Madinah Airport to hotel taxi services with transparent fixed fares. Choose from sedans, Staria, GMC, Coaster, Hiace, and buses for comfortable transfers to all Madinah hotels.",
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
