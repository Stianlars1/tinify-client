import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tinify",
    short_name: "tinify",
    description:
      "Optimize your images online without losing quality. Compress, resize, and crop images for free. Supports JPG, PNG, GIF, WEBP, JPEG, TIFF, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f9",
    theme_color: "#050505",

    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "developer",
      "productivity",
      "utilities",
      "compression",
      "image processing",
      "cropping",
      "resizing",
      "optimization",
    ],
    lang: "en",
  };
}
