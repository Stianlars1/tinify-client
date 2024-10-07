import { Metadata } from "next";

export const aboutMeta: Metadata = {
  title: "About Us - Learn More About Tinify.dev",
  description:
    "Learn more about Tinify.dev, our mission, and how we help you optimize your images effortlessly and for free.",
  keywords: [
    "about tinify.dev",
    "image optimization platform",
    "free image tools",
    "compress resize crop images",
  ],
  openGraph: {
    title: "About Us - Learn More About Tinify.dev",
    description:
      "Learn more about Tinify.dev, our mission, and how we help you optimize your images effortlessly and for free.",
    url: "https://tinify.dev/about",
    type: "website",
    images: [
      {
        url: "https://tinify.dev/tinify_op.png",
        width: 1200,
        height: 630,
        alt: "About Us - Learn More About Tinify.dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Learn More About Tinify.dev",
    description:
      "Learn more about Tinify.dev, our mission, and how we help you optimize your images effortlessly and for free.",
    images: ["https://tinify.dev/tinify_op.png"],
  },
  alternates: {
    canonical: "https://tinify.dev/about",
  },
};
