import type { Metadata } from "next";
import { CoasterClient } from "./CoasterClient";

export const metadata: Metadata = {
  title: "18-Seater Coaster for Umrah & Ziyarat in Makkah & Madinah, KSA",
  description:
    "Book 18-seater Coaster bus for Umrah, Ziyarat, and airport transfers in KSA. Spacious group taxi service in Makkah, Madinah, Jeddah with affordable fares and 24/7 availability.",
  keywords: [
    "Coaster taxi Saudi Arabia",
    "18 seater Coaster",
    "Coaster Umrah taxi",
    "Coaster Ziyarat taxi",
    "Makkah to Madinah Coaster",
    "Jeddah to Makkah Coaster",
    "Airport Coaster transfer",
    "Group travel Coaster",
  ],
  alternates: {
    canonical: "/coaster",
  },
};

export default function Page() {
  return <CoasterClient />;
}
