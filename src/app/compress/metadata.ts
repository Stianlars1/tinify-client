import type { Viewport } from "next";
import { Metadata } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b " },
  ],
};

export const compressMeta: Metadata = {
  title: "Compress Images Online - Free & High Quality | Tinify.dev",
  description:
    "Compress your images without losing quality. Supports JPG, PNG, GIF, WEBP, and more. Quick and easy image compression online for free.",
  keywords: [
    "compress images online",
    "free image compressor",
    "image compression",
    "online image compression",
    "reduce image size",
    "JPG",
    "PNG",
    "GIF",
    "WEBP",
    "JPEG",
    "TIFF",
  ],
  openGraph: {
    title: "Compress Images Online - Free & High Quality | Tinify.dev",
    description:
      "Compress your images without losing quality. Supports JPG, PNG, GIF, WEBP, and more. Quick and easy image compression online for free.",
    url: "https://tinify.dev/compress",
    type: "website",
    images: [
      {
        url: "https://tinify.dev/tinify_op.png",
        width: 1200,
        height: 630,
        alt: "Compress Images Online - Free & High Quality | Tinify.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress Images Online - Free & High Quality | Tinify.dev",
    description:
      "Compress your images without losing quality. Supports JPG, PNG, GIF, WEBP, and more. Quick and easy image compression online for free.",
    images: ["https://tinify.dev/tinify_op.png"],
  },
  alternates: {
    canonical: "https://tinify.dev/compress",
  },
};
