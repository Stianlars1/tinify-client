"use client";
import { LottieOptions } from "lottie-light-react";
import emailAnimationData from "./animations/email.json";
import imageUploadV1 from "./animations/imageUpload_v1.json";
import imageUploadV2 from "./animations/imageUpload_v2.json";
import imageUploadV3 from "./animations/imageUpload_v3.json";
import imageUploadV4 from "./animations/imageUpload_v4.json";
import imageUploadV5 from "./animations/imageUpload_v5.json";
import successAnimationData from "./animations/success.json";
import "./lotties.css";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LottieDynamic = dynamic(
  () => import("lottie-light-react").then((mod) => mod.default),
  { ssr: false },
);

export const ImageUploadV1 = ({
  widthHeight = 200,
}: {
  widthHeight?: number | undefined;
}) => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: imageUploadV1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: "lottie-animation",
  };

  return <LottieDynamic {...defaultLottieOptions} />;
};
export const ImageUploadV2 = ({
  widthHeight = 100,
}: {
  widthHeight?: number | undefined;
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const defaultLottieOptions: LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: imageUploadV2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: "lottie-animation imageUpload",
    renderer: "svg",
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Prevents server-side rendering issues
  }

  return <LottieDynamic {...defaultLottieOptions} />;
};
export const ImageUploadV3 = ({
  widthHeight = 200,
}: {
  widthHeight?: number | undefined;
}) => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: imageUploadV3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: "lottie-animation",
  };

  return <LottieDynamic {...defaultLottieOptions} />;
};
export const ImageUploadV4 = ({
  widthHeight = 200,
}: {
  widthHeight?: number | undefined;
}) => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: imageUploadV4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: "lottie-animation",
  };

  return <LottieDynamic {...defaultLottieOptions} />;
};
export const ImageUploadV5 = ({
  widthHeight = 200,
}: {
  widthHeight?: number | undefined;
}) => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: imageUploadV5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: "lottie-animation",
  };

  return <LottieDynamic {...defaultLottieOptions} />;
};

export const SuccessAnimation = ({
  widthHeight = 200,
}: {
  widthHeight?: number | undefined;
}) => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: successAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: "lottie-animation",
  };

  return <LottieDynamic {...defaultLottieOptions} />;
};

export const EmailSentAnimation = ({
  widthHeight = 200,
}: {
  widthHeight?: number | undefined;
}) => {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: emailAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: "lottie-animation",
  };

  return <LottieDynamic {...defaultLottieOptions} />;
};
