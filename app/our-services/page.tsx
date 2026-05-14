import type { Metadata } from "next";
import { OurServicesClient } from "./OurServicesClient";

export const metadata: Metadata = {
  title: "Haramain Umrah Taxi All Services",
  description: "We specialize in Taxi Services & also provides Damm, Hajj & Umrah Badal, Qurbani, Fidyah, Kaffarah, Quran, Water & Food Distributions Services allover Saudia.",
  keywords: [
    "Umrah taxi services",
    "Hajj transport",
    "Airport transfer Saudi Arabia",
    "Ziyarat taxi",
    "Family taxi KSA",
    "Group taxi services",
    "Private taxi Makkah",
    "Hotel transfer services",
    "Damm services",
    "Qurbani services"
  ],
  alternates: {
    canonical: "/our-services/",
  },
};

export default function Page() {
  return <OurServicesClient />;
}
