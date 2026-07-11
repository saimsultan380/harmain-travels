import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  allowedDevOrigins: ["192.168.100.10"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "haramainumrahtaxi.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/identify-tent-mina/",
        destination: "/find-or-identify-your-tents-in-mina-during-hajj/",
        permanent: true,
      },
      {
        source: "/taxi-booking-advance-ksa/",
        destination: "/benefits-of-booking-airport-or-umrah-taxi-in-advance-in-ksa/",
        permanent: true,
      },
      {
        source: "/umrah-taxi-south-african/",
        destination: "/online-umrah-taxi-for-south-african-pilgrams/",
        permanent: true,
      },
      {
        source: "/umrah-taxi-usa/",
        destination: "/private-umrah-taxi-services-online-from-the-usa-book-at-discount/",
        permanent: true,
      },
      {
        source: "/top-islamic-ziyarat-taif/",
        destination: "/islamic-ziyarat-historical-places-taif/",
        permanent: true,
      },
      {
        source: "/best-time-umrah/",
        destination: "/best-least-crowded-time-to-perform-umrah/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
