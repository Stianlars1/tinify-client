import type { Viewport } from "next";
import { Metadata } from "next";

export const useThisViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b " },
  ],
};

export const ROOT_META: Metadata = {
  title: "Tinify.dev | Free Online Image Compression, Resizing, and Cropping",
  description:
    "Optimize your images online without losing quality. Compress, resize, and crop images for free. Supports JPG, PNG, GIF, WEBP, JPEG, TIFF, and more.",
  keywords: [
    "free image compressor",
    "online image compression",
    "image resizer",
    "online image resizing",
    "image cropper",
    "online image cropping",
    "reduce image size",
    "image optimization",
    "compress images online",
    "resize images online",
    "crop images online",
    "tinify.dev",
    "lossless image compression",
    "web performance optimization",
    "JPG",
    "PNG",
    "GIF",
    "WEBP",
    "JPEG",
    "TIFF",
  ],
  openGraph: {
    title: "Tinify.dev | Free Online Image Compression, Resizing, and Cropping",
    description:
      "Optimize your images online without losing quality. Compress, resize, and crop images for free. Supports JPG, PNG, GIF, WEBP, JPEG, TIFF, and more.",
    url: "https://tinify.dev/",
    type: "website",
    images: [
      {
        url: "https://tinify.dev/tinify_op.png",
        width: 1200,
        height: 630,
        alt: "Tinify.dev - Free Online Image Compression, Resizing, and Cropping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tinify.dev | Free Online Image Compression, Resizing, and Cropping",
    description:
      "Optimize your images online without losing quality. Compress, resize, and crop images for free. Supports JPG, PNG, GIF, WEBP, JPEG, TIFF, and more.",
    images: ["https://tinify.dev/tinify_op.png"],
  },
  alternates: {
    canonical: "https://tinify.dev/",
  },
};
