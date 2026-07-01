import type { Metadata } from "next";
import { QuranWaqfServicesClient } from "./QuranWaqfServicesClient";

export const metadata: Metadata = {
  title: "Quran Distribution Services & Waqaf Quran in Saudia & Makkah",
  description:
    "Book Our Quran Distribution Services in Saudia & Makkah. Help share the Quran with those in need. Donate now to spread Quranic guidance and blessings!",
  keywords: [
    "Quran distribution in Saudi Arabia",
    "Waqaf Quran",
    "Quran charity in Makkah",
    "Quran donation in Madinah",
    "Mushaf Al-Madina",
    "Sadaqah Jariyah Quran",
  ],
  alternates: {
    canonical: "/quran-waqf-services/",
  },
  openGraph: {
    title: "Quran Distribution Services & Waqaf Quran in Saudia & Makkah",
    description: "Book Our Quran Distribution Services in Saudia & Makkah. Help share the Quran with those in need. Donate now to spread Quranic guidance and blessings!",
    url: "/quran-waqf-services/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Distribution Services & Waqaf Quran in Saudia & Makkah",
    description: "Book Our Quran Distribution Services in Saudia & Makkah. Help share the Quran with those in need. Donate now to spread Quranic guidance and blessings!",
  },
};

export default function Page() {
  return <QuranWaqfServicesClient />;
}
