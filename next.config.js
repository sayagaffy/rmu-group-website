// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/webp", "image/avif"],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig;
