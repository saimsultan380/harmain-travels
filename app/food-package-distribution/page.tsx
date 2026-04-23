import type { Metadata } from "next";
import { FoodPackageDistributionClient } from "./FoodPackageDistributionClient";

export const metadata: Metadata = {
  title: "Food Packages Distribution & Distributors Services in Saudi Arab",
  description:
    "Reliable food package distribution services in Saudi Arabia. We deliver food parcels to needy people, families, and charities—with on-time delivery, volunteer assistance, and proof of distribution.",
  keywords: [
    "Food distribution services in Saudi Arabia",
    "Food package distribution",
    "Ramadan food distribution",
    "Food donation in Saudi Arabia",
    "Food parcel delivery",
    "Charity food distribution",
  ],
  alternates: {
    canonical: "/food-package-distribution",
  },
};

export default function Page() {
  return <FoodPackageDistributionClient />;
}
