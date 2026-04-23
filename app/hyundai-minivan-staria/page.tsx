import type { Metadata } from "next";
import { HyundaiMinivanStariaClient } from "./HyundaiMinivanStariaClient";

export const metadata: Metadata = {
  title: "Hyundai Minivan Staria Umrah Taxi in Makkah, Madina, KSA: Get Discounts!",
  description:
    "Book Hyundai Staria minivan taxi for Umrah, Ziyarat, and airport transfers in KSA. Spacious 7-seater taxi service in Makkah, Madinah, Jeddah with transparent fares and 24/7 availability.",
  keywords: [
    "Hyundai Staria taxi",
    "Minivan taxi Saudi Arabia",
    "7 seater taxi KSA",
    "Hyundai Staria Umrah taxi",
    "Ziyarat taxi minivan",
    "Makkah to Madinah taxi",
    "Jeddah to Makkah taxi",
    "Airport taxi Saudi Arabia",
    "Hyundai Staria minivan",
  ],
  alternates: {
    canonical: "/hyundai-minivan-staria",
  },
};

export default function Page() {
  return <HyundaiMinivanStariaClient />;
}
