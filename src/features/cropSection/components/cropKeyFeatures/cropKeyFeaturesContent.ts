import {
  AdjustmentIcon,
  ArrowsExpandIcon,
  AspectRatioIcon,
  EyeIcon,
  ImagePreviewIcon,
  ShieldCheckIcon,
  UploadIcon,
} from "@/assets/icons/icons";

import { KeyFeatureContent } from "@/features/compressSections/keyFeaturesContent";

export const CropKeyFeaturesContent: KeyFeatureContent[] = [
  {
    icon: UploadIcon,
    title: "Seamless Image Upload",
    description: "Effortlessly upload images of any size and format instantly.",
  },
  {
    icon: ArrowsExpandIcon,
    title: "Advanced Crop Tool",
    description:
      "Precisely crop images using our intuitive, user-friendly interface.",
  },
  {
    icon: AspectRatioIcon,
    title: "Preset Aspect Ratios",
    description:
      "Quickly select from preset aspect ratios like 1:1, 4:3, 16:9, or choose freeform.",
  },
  {
    icon: AdjustmentIcon, // Chosen from heroicons.com
    title: "Custom Aspect Ratios",
    description:
      "Define your own aspect ratios for ultimate cropping flexibility and control.",
  },
  {
    icon: EyeIcon, // Chosen from heroicons.com
    title: "Real-Time Preview",
    description:
      "See your cropped image in real-time before finalizing changes.",
  },
  {
    icon: ImagePreviewIcon, // Chosen from heroicons.com
    title: "High-Resolution Support",
    description:
      "Crop high-resolution images without losing quality or detail.",
  },
  {
    icon: ShieldCheckIcon, // Chosen from heroicons.com
    title: "Secure Processing",
    description:
      "Your images are processed securely with our trusted backend system.",
  },
];
