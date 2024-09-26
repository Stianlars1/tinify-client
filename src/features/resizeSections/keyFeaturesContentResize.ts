import {
  ArrowsExpandIcon,
  // ArrowsExpandIcon,
  AspectRatioIcon,
  CompressIcon,
  IconProps,
  UploadIcon,
} from "@/assets/icons/icons";

export interface KeyFeatureContent {
  icon: ({ className, size }: IconProps) => JSX.Element;
  title: string;
  description: string;
}

export const keyFeaturesContentResize: KeyFeatureContent[] = [
  {
    icon: UploadIcon,
    title: "Bulk Image Upload",
    description: "Upload multiple images at once without any limitations.",
  },
  {
    icon: ArrowsExpandIcon,
    title: "Flexible Resize Options",
    description:
      "Resize by exact dimensions or scale percentage to fit your needs.",
  },
  {
    icon: AspectRatioIcon,
    title: "Aspect Ratio Preservation",
    description:
      "Maintain original aspect ratios effortlessly with a simple toggle.",
  },
  {
    icon: CompressIcon,
    title: "Compression Integration",
    description:
      "Optionally compress images during resizing for optimized results.",
  },
];
