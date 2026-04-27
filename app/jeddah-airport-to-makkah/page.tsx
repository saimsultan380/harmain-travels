import type { Metadata } from "next";
import { JeddahAirportToMakkahClient } from "./JeddahAirportToMakkahClient";

export const metadata: Metadata = {
  title: "Jeddah Airport to Makkah Taxi Services and Fares: Book Now!",
  description:
    "Get transparent Jeddah Airport to Makkah taxi services and fares on Haramain Umrah Taxi. We offer fixed pricing that starts from 250 SAR with online booking.",
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
