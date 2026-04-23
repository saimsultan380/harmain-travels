import type { Metadata } from "next";
import { UmrahGuideAndPdfClient } from "./UmrahGuideAndPdfClient";

export const metadata: Metadata = {
  title: "Easy Umrah Guide & Steps|  PDF| Umrah Duas| Ihram Rules|",
  description:
    "Complete step-by-step Umrah guide with PDF, duas, Ihram rules, and special precautions for men and women. Learn how to perform Umrah correctly with Arabic duas and English translations.",
  keywords: [
    "Umrah guide",
    "Umrah steps",
    "Umrah duas",
    "Ihram rules",
    "Umrah PDF",
    "How to perform Umrah",
    "Umrah for beginners",
  ],
  alternates: {
    canonical: "/umrah-guide-and-pdf",
  },
};

export default function Page() {
  return <UmrahGuideAndPdfClient />;
}
