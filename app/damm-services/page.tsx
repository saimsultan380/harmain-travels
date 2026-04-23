import type { Metadata } from "next";
import { DammServicesClient } from "./DammServicesClient";

export const metadata: Metadata = {
  title: "Damm| What is Damm? How to Give/Pay Damm for Umrah & Hajj",
  description:
    "Learn what Damm is in Hajj & Umrah, when it becomes obligatory, and how to give/pay Damm through a Shariah-compliant verified process in Makkah.",
  keywords: [
    "Damm",
    "What is Damm",
    "Damm for Umrah",
    "Damm for Hajj",
    "How to pay Damm",
    "Damm services in Makkah",
  ],
  alternates: {
    canonical: "/damm-services",
  },
};

export default function Page() {
  return <DammServicesClient />;
}


