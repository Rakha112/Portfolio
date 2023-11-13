/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  // SCSS Config
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
