import type { Metadata } from "next";
import { BusClient } from "./BusClient";

export const metadata: Metadata = {
  title: "Book Bus for Hajj, Umrah, Ziyarat in Saudia, Makkah, Madina",
  description:
    "Book Our Bus at affordable prices in Saudi Arabia, Makkah, and Madinah. Airport, Hotels, Ziyarat, Business Tours, Events & Umrah Buses are available in KSA",
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
    canonical: "/bus/",
  },
};

export default function Page() {
  return <BusClient />;
}
