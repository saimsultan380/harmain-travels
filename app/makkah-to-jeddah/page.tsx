import type { Metadata } from "next";
import { MakkahToJeddahClient } from "./MakkahToJeddahClient";

export const metadata: Metadata = {
  title: "Makkah to Jeddah Taxi, GMC, Bus & Fares: 24/7 Taxi Booking",
  description:
    "Book 24/7 Makkah to Jeddah taxi, GMC, or bus with ease. Your ride is just a call away with affordable fares, reliable service, luxury fleet and quick travel.",
  keywords: [
    "Makkah to Jeddah taxi",
    "Makkah to Jeddah fare",
    "Makkah to Jeddah airport taxi",
    "Makkah to Jeddah bus",
    "Makkah to Jeddah GMC",
    "Jeddah airport transfer",
    "Haramain Umrah Taxi",
    "Saudi Arabia taxi",
  ],
  alternates: {
    canonical: "/makkah-to-jeddah",
  },
};

export default function Page() {
  return <MakkahToJeddahClient />;
}
