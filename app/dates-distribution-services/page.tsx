import type { Metadata } from "next";
import { DatesDistributionServicesClient } from "./DatesDistributionServicesClient";

export const metadata: Metadata = {
  title: "Khajoor & Dates Distribution Services in KSA Makkah & Madinah",
  description:
    "Donate dates in Makkah and Madinah through our Khajoor distribution services. Sadaqah Jariyah with proof of distribution, especially during Ramadan for fasting pilgrims.",
  keywords: [
    "Dates distribution in Makkah",
    "Khajoor distribution in Madinah",
    "Ajwa dates donation",
    "Dates charity in Saudi Arabia",
    "Ramadan dates distribution",
    "Sadaqah Jariyah dates",
  ],
  alternates: {
    canonical: "/dates-distribution-services",
  },
};

export default function Page() {
  return <DatesDistributionServicesClient />;
}
