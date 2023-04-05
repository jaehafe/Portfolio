/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "pbs.twimg.com", "cdn.hashnode.com"],
  },
};

module.exports = nextConfig;
