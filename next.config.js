/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.delhaize.be", "cdn.carrefour.eu", "www.aldi.be", "courseco.s3.eu-west-3.amazonaws.com"],
  },
};

module.exports = nextConfig;
