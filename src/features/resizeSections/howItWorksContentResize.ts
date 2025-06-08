import {
  CompressIcon,
  DownloadIcon,
  IconProps,
  RepeatIcon,
  SettingsIcon,
  UploadIcon,
} from "@/assets/icons/icons";
import { ReactElement } from "react";

export interface HowItWorksStep {
  icon: ({ className, size }: IconProps) => ReactElement;
  title: string;
  description: string;
}

export const howItWorksStepsResize: HowItWorksStep[] = [
  {
    icon: UploadIcon,
    title: "Upload Your Images",
    description: "Drag and drop or select images from your device.",
  },
  {
    icon: SettingsIcon,
    title: "Choose Resize Options",
    description:
      "Select resizing by pixels or scale, and set your desired values.",
  },
  {
    icon: CompressIcon,
    title: "Optional Compression",
    description: "Enable compression to optimize images during resizing.",
  },
  {
    icon: DownloadIcon,
    title: "Download and Review",
    description:
      "Download all resized images and view detailed savings statistics.",
  },
  {
    icon: RepeatIcon,
    title: "Repeat As Needed",
    description: "Resize and compress images without any limitations.",
  },
];
