// @ts-check
import createMDX from "@next/mdx";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ["axios", "lottie-light-react", "lottie-web"],
  },
  pageExtensions: ["mdx", "tsx"],
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
