import type { Metadata } from "next";
import { UmrahGuiderServicesClient } from "./UmrahGuiderServicesClient";

export const metadata: Metadata = {
  title: "Umrah Guider| Umrah Guider Services in Makkah & Saudi Arab",
  description:
    "Need an Umrah Guider in Makkah? Our expert services ensure a smooth, enriching pilgrimage. Let us guide you through every step of your Umrah journey!",
  keywords: [
    "Umrah guide services",
    "Umrah guide in Makkah",
    "Umrah guide Saudi Arabia",
    "Umrah ritual guidance",
    "Ziyarat tours Makkah Madinah",
    "Umrah helper",
  ],
  alternates: {
    canonical: "/umrah-guider-services",
  },
};

export default function Page() {
  return <UmrahGuiderServicesClient />;
}
