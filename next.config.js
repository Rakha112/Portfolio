/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  // SCSS Config
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
