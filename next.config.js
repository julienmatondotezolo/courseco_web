/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.delhaize.be", "cdn.carrefour.eu", "www.aldi.be"],
  },
};

module.exports = nextConfig;
