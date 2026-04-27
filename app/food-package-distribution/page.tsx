import type { Metadata } from "next";
import { FoodPackageDistributionClient } from "./FoodPackageDistributionClient";

export const metadata: Metadata = {
  title: "Food Packages Distribution & Distributors Services in Saudia",
  description:
    "If you want to distribute food packages all over Saudi Arabia with transparency, you can avail our Food Package Distribution or Distributor Services. Contact Us",
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
