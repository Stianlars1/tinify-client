// @ts-check
import createMDX from "@next/mdx";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compress: true,
  pageExtensions: ["mdx", "tsx"],

  experimental: {
    typedRoutes: false,
    serverMinification: true,
    serverActions: {
      bodySizeLimit: "200mb",
    },
    reactCompiler: true,
    viewTransition: true,
    // Add optimizations for production
    optimizePackageImports: ["axios", "lottie-light-react", "lottie-web"],
  },
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tinify.dev",
        port: "",
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
