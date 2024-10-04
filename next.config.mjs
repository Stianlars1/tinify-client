// @ts-check
import createMDX from "@next/mdx";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    nextScriptWorkers: true,
    adjustFontFallbacks: true,
    cssChunking: "strict",
    optimizePackageImports: ["axios", "lottie-light-react", "lottie-web"],
    workerThreads: true,
  },
  pageExtensions: ["mdx", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
