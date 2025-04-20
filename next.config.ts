import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "randomuser.me",
      },
      {
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
