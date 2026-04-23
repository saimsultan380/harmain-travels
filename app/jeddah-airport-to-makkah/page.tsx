import type { Metadata } from "next";
import { JeddahAirportToMakkahClient } from "./JeddahAirportToMakkahClient";

export const metadata: Metadata = {
  title: "Jeddah Airport to Makkah Taxi Services and Fares - Book Now",
  description:
    "Book reliable Jeddah airport to Makkah taxi services with transparent fixed fares. Choose from sedans, Staria, GMC, Coaster, Hiace, and buses for comfortable airport transfers.",
  keywords: [
    "Jeddah airport to Makkah taxi",
    "Jeddah airport to Makkah fare",
    "King Abdulaziz airport taxi",
    "Jeddah to Makkah taxi",
    "Airport transfer Jeddah",
    "Jeddah airport pickup",
    "Umrah airport taxi",
    "Haramain Umrah Taxi",
  ],
  alternates: {
    canonical: "/jeddah-airport-to-makkah",
  },
};

export default function Page() {
  return <JeddahAirportToMakkahClient />;
}
