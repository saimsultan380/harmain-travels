import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  allowedDevOrigins: ["192.168.100.10"],
  images: {
    unoptimized: true,
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
  generateBuildId: () => "build",
};

export default nextConfig;
