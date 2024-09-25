// import {
//   BadgeCheckIcon,
//   BoltIcon,
//   GiftIcon,
//   IconProps,
//   MobileIcon,
// } from "@/assets/icons/icons";

// export interface KeyFeatureContent {
//   icon: ({ className, size }: IconProps) => JSX.Element;
//   title: string;
//   description: string;
// }
// export const keyFeaturesContent: KeyFeatureContent[] = [
//   {
//     icon: BoltIcon,
//     title: "Fast Compression",
//     description: "Compress images quickly without delay.",
//   },
//   {
//     icon: BadgeCheckIcon,
//     title: "High-Quality Results",
//     description: "Preserve image quality while reducing file size.",
//   },
//   {
//     icon: GiftIcon,
//     title: "Free Service",
//     description: "Compress images for free with no hidden costs.",
//   },
//   {
//     icon: MobileIcon,
//     title: "Responsive Interface",
//     description: "Seamless experience across all devices.",
//   },
// ];
import {
  BadgeCheckIcon,
  BoltIcon,
  GiftIcon,
  IconProps,
  MobileIcon,
} from "@/assets/icons/icons";

export interface KeyFeatureContent {
  icon: ({ className, size }: IconProps) => JSX.Element;
  title: string;
  description: string;
}
export const keyFeaturesContent: KeyFeatureContent[] = [
  {
    icon: BoltIcon,
    title: "Fast Compression",
    description:
      "Compress images instantly, saving time without compromising efficiency.",
  },
  {
    icon: BadgeCheckIcon,
    title: "High-Quality Results",
    description:
      "Maintain excellent image quality while drastically reducing file sizes for better performance.",
  },
  {
    icon: GiftIcon,
    title: "Free Service",
    description:
      "Access our premium image compression features completely free, with no hidden fees or limits.",
  },
  {
    icon: MobileIcon,
    title: "Responsive Interface",
    description:
      "Enjoy a seamless, responsive interface optimized for desktop and mobile devices.",
  },
];
