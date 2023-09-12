/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    bankAddress: process.env.BANK_ADDRESS,
  },
};

module.exports = nextConfig;
