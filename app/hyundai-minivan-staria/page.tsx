import type { Metadata } from "next";
import { HyundaiMinivanStariaClient } from "./HyundaiMinivanStariaClient";

export const metadata: Metadata = {
  title: "Hyundai Minivan Staria Umrah Taxi in Saudia, Makkah, Madina. Book Now!",
  description:
    "Book Our 7-seater minivan Staria taxi at affordable prices in Saudia, Makkah, and Madinah. Airport, Hotels, Ziyarat, Umrah Staria Taxis are available in KSA",
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
    canonical: "/hyundai-minivan-staria/",
  },
};

export default function Page() {
  return <HyundaiMinivanStariaClient />;
}
