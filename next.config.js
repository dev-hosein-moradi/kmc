/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/app",
  sw: "service-worker.js",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  disableDevLogs: true,
});

module.exports = withPWA({
  experimental: { optimizeCss: true },
  compress: true,
});
