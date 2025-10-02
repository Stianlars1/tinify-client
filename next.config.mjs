// @ts-check
import createMDX from "@next/mdx";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compress: true,
  pageExtensions: ["mdx", "tsx"],

  experimental: {
    serverActions: {
      bodySizeLimit: "200mb",
    },
    reactCompiler: true,
    cssChunking: true,
    viewTransition: true,
    // Add optimizations for production
    optimizePackageImports: ["axios", "lottie-react", "lottie-web"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tinify.dev",
        port: "",
      },
    ],
  },

  typedRoutes: false,
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
