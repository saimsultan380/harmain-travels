import type { Metadata } from "next";
import { ToyotaHiaceOrHiroof2Client } from "./ToyotaHiaceOrHiroof2Client";

export const metadata: Metadata = {
  title: "Book Umrah & Ziyarat Hiace or Hiroof Taxi in Saudia, Makkah, Madina",
  description:
    "Do you need 10-seater Hiace or Hiroof taxi in Saudia, Makkah & Madinah for Umrah, Ziyarat, Airport, and Travel? Choose Haramain Umrah Taxi at cheap rates",
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
    canonical: "/toyota-hiace-or-hiroof-2/",
  },
  openGraph: {
    title: "Book Umrah & Ziyarat Hiace or Hiroof Taxi in Saudia, Makkah, Madina",
    description: "Do you need 10-seater Hiace or Hiroof taxi in Saudia, Makkah & Madinah for Umrah, Ziyarat, Airport, and Travel? Choose Haramain Umrah Taxi at cheap rates",
    url: "/toyota-hiace-or-hiroof-2/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Umrah & Ziyarat Hiace or Hiroof Taxi in Saudia, Makkah, Madina",
    description: "Do you need 10-seater Hiace or Hiroof taxi in Saudia, Makkah & Madinah for Umrah, Ziyarat, Airport, and Travel? Choose Haramain Umrah Taxi at cheap rates",
  },
};

export default function Page() {
  return <ToyotaHiaceOrHiroof2Client />;
}
