/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "49.0.2.250",
        port: "3002",
        pathname: "/file",
      },
    ],
    domains: ["source.unsplash.com", "49.0.2.250"],
  },
};

module.exports = nextConfig;
