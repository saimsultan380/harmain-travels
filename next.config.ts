import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening dev server from local network devices (phone/tablet).
  allowedDevOrigins: ["192.168.100.10"],
};

export default nextConfig;
