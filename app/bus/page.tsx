import type { Metadata } from "next";
import { BusClient } from "./BusClient";

export const metadata: Metadata = {
  title: "Book Bus for Umrah & Ziyarat Groups in Makkah & Madinah, KSA",
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
  openGraph: {
    title: "Book Bus for Umrah & Ziyarat Groups in Makkah & Madinah, KSA",
    description: "Book Our Bus at affordable prices in Saudi Arabia, Makkah, and Madinah. Airport, Hotels, Ziyarat, Business Tours, Events & Umrah Buses are available in KSA",
    url: "/bus/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Bus for Umrah & Ziyarat Groups in Makkah & Madinah, KSA",
    description: "Book Our Bus at affordable prices in Saudi Arabia, Makkah, and Madinah. Airport, Hotels, Ziyarat, Business Tours, Events & Umrah Buses are available in KSA",
  },
};

export default function Page() {
  return <BusClient />;
}
