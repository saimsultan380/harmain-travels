import type { Metadata } from "next";
import { BusClient } from "./BusClient";

export const metadata: Metadata = {
  title: "Book Bus for Umrah & Ziyarat Groups in Makkah & Madinah, KSA",
  description:
    "Book bus for Umrah, Ziyarat, and airport transfers in KSA. Spacious group bus service in Makkah, Madinah, Jeddah with affordable fares and 24/7 availability.",
  keywords: [
    "Bus Saudi Arabia",
    "Umrah bus",
    "Ziyarat bus",
    "Makkah to Madinah bus",
    "Jeddah to Makkah bus",
    "Airport bus transfer",
    "Group travel bus",
    "Large bus rental",
  ],
  alternates: {
    canonical: "/bus",
  },
};

export default function Page() {
  return <BusClient />;
}
