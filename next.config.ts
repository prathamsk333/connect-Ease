import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@stream-io/video-react'],
  /* config options here */
};

export default nextConfig;
