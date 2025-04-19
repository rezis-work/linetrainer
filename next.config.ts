import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    turbo: false,
  },
  images: {
    domains: ["randomuser.me"],
  },
};

export default nextConfig;
