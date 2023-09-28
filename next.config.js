/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mediacloud.carbuyer.co.uk"],
  },
  output: 'export',
  distDir: 'dist',
};

module.exports = nextConfig;
