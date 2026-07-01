import type { Metadata } from "next";
import { MakkahToMadinahClient } from "./MakkahToMadinahClient";

export const metadata: Metadata = {
  title: "Makkah to Madinah Taxi and Fare: Book Haramain Umrah Taxi",
  description:
    "Book Haramain Umrah Taxi Makkah to Madinah taxi services with luxury fleet. Our Makkah to Madinah taxi fare is very affordable as compared to others. Call Now!",
  keywords: [
    "Makkah to Madinah taxi",
    "Makkah to Madinah fare",
    "Makkah to Madinah distance",
    "Makkah to Madinah private car",
    "Makkah to Madinah bus",
    "Haramain Umrah Taxi",
    "Makkah Madinah transfer",
    "Intercity taxi Saudi Arabia",
  ],
  alternates: {
    canonical: "/makkah-to-madinah/",
  },
  openGraph: {
    title: "Makkah to Madinah Taxi and Fare: Book Haramain Umrah Taxi",
    description: "Book Haramain Umrah Taxi Makkah to Madinah taxi services with luxury fleet. Our Makkah to Madinah taxi fare is very affordable as compared to others. Call Now!",
    url: "/makkah-to-madinah/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makkah to Madinah Taxi and Fare: Book Haramain Umrah Taxi",
    description: "Book Haramain Umrah Taxi Makkah to Madinah taxi services with luxury fleet. Our Makkah to Madinah taxi fare is very affordable as compared to others. Call Now!",
  },
};

export default function Page() {
  return <MakkahToMadinahClient />;
}
