/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    CALLINK: "chriscooper/30min",
  },
  basePath:
    process.env.NODE_ENV === "production"
      ? "https://chriscooper0.github.io/consulting"
      : undefined,
};

module.exports = nextConfig;
