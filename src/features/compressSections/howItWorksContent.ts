// howItWorksContent.ts

import {
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

export const howItWorksStepsCompress: HowItWorksStep[] = [
  {
    icon: SettingsIcon,
    title: "Select Compression Type",
    description:
      "Choose between lossy or lossless compression to fit your needs.",
  },
  {
    icon: UploadIcon,
    title: "Upload Your Files",
    description:
      "Drop your image or select it from your device to start the process.",
  },
  {
    icon: DownloadIcon,
    title: "Download",
    description: "Get your compressed image instantly after processing.",
  },
  {
    icon: RepeatIcon,
    title: "Repeat Without Limits",
    description:
      "Upload and compress as many images as you like, with no limitations on size or quantity.",
  },
];
