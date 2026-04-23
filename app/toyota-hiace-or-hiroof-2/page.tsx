import type { Metadata } from "next";
import { ToyotaHiaceOrHiroof2Client } from "./ToyotaHiaceOrHiroof2Client";

export const metadata: Metadata = {
  title: "Book Ziyarat & Umrah Hi-Ace or Hi-Roof in Makkah & Madinah, KSA",
  description:
    "Book Toyota Hiace or Hi-Roof microbus taxi for Umrah, Ziyarat, and airport transfers in KSA. Spacious 13-seater taxi service in Makkah, Madinah, Jeddah with affordable fares and 24/7 availability.",
  keywords: [
    "Toyota Hiace taxi",
    "Hi-Roof taxi Saudi Arabia",
    "Microbus taxi KSA",
    "Toyota Hiace Umrah taxi",
    "Hiace Ziyarat taxi",
    "Makkah to Madinah taxi",
    "Jeddah to Makkah taxi",
    "Airport taxi Saudi Arabia",
    "Toyota Hiace rental",
  ],
  alternates: {
    canonical: "/toyota-hiace-or-hiroof-2",
  },
};

export default function Page() {
  return <ToyotaHiaceOrHiroof2Client />;
}
