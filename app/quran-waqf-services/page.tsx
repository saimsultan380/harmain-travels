import type { Metadata } from "next";
import { QuranWaqfServicesClient } from "./QuranWaqfServicesClient";

export const metadata: Metadata = {
  title: "Quran Distribution Services and Waqaf Quran in Saudia & Makkah",
  description:
    "Donate Quran in Makkah and Madinah through our Quran distribution and Waqaf services. Authentic Mushaf Al-Madina with proof of placement and Sadaqah Jariyah.",
  keywords: [
    "Quran distribution in Saudi Arabia",
    "Waqaf Quran",
    "Quran charity in Makkah",
    "Quran donation in Madinah",
    "Mushaf Al-Madina",
    "Sadaqah Jariyah Quran",
  ],
  alternates: {
    canonical: "/quran-waqf-services",
  },
};

export default function Page() {
  return <QuranWaqfServicesClient />;
}
