// @ts-check
module.exports = async (phase, { defaultConfig }) => {
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
  };
  return nextConfig;
};
