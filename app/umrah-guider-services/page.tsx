import type { Metadata } from "next";
import { UmrahGuiderServicesClient } from "./UmrahGuiderServicesClient";

export const metadata: Metadata = {
  title: "Umrah Guider| Umrah Guider Services in Makkah & Saudi Arab",
  description:
    "Professional Umrah Guide services in Makkah and Saudi Arabia. Step-by-step ritual guidance, Ziyarat tours, religious counseling, and reliable transportation for a spiritually rewarding Umrah.",
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
