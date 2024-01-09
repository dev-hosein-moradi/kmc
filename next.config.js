/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  fallbacks: {
    document: "/offline",
  },
});

module.exports = withPWA({
  experimental: { optimizeCss: true },
  compress: true,
});
