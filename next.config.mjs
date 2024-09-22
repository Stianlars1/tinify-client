/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    nextScriptWorkers: true,
    adjustFontFallbacks: true,
    cssChunking: "strict",
    optimizePackageImports: ["axios", "lottie-react", "lottie-web"],
    nextScriptWorkers: false,
  },
};

export default nextConfig;
