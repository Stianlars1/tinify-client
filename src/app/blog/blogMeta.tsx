import { Metadata } from "next";

export const META_BLOG: Metadata = {
  title: "Blog - Image Optimization Tips & Tricks | Tinify.dev",
  description:
    "Explore our blog for tips, tricks, and insights on image compression, resizing, cropping, and more.",
  keywords: [
    "image optimization blog",
    "compress images tips",
    "resize images tips",
    "crop images tips",
    "tinify.dev blog",
  ],
  openGraph: {
    title: "Blog - Image Optimization Tips & Tricks | Tinify.dev",
    description:
      "Explore our blog for tips, tricks, and insights on image compression, resizing, cropping, and more.",
    url: "https://tinify.dev/blog",
    type: "website",
    images: [
      {
        url: "https://tinify.dev/tinify_op.png",
        width: 1200,
        height: 630,
        alt: "Blog - Image Optimization Tips & Tricks | Tinify.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Image Optimization Tips & Tricks | Tinify.dev",
    description:
      "Explore our blog for tips, tricks, and insights on image compression, resizing, cropping, and more.",
    images: ["https://tinify.dev/tinify_op.png"],
  },
  alternates: {
    canonical: "https://tinify.dev/blog",
  },
};
