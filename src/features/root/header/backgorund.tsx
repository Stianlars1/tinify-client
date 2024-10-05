"use client";
import { useDarkMode } from "@/hooks/useDarkmode";
import { useEffect, useState } from "react";
import { GradientBackground } from "react-gradient-animation";

export const HeaderBackground = ({
  notMountedClass,
}: {
  notMountedClass?: string;
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  const isDarkmode = useDarkMode();

  // State to hold whether it's mobile size
  const [isMobileSize, setIsMobileSize] = useState<boolean | null>(null);

  useEffect(() => {
    setHasMounted(true);
    // Function to determine if the window width is less than 768px
    const checkMobileSize = () => {
      setIsMobileSize(window.innerWidth < 768);
    };

    // Initial check
    checkMobileSize();

    // Add event listener to handle window resize
    window.addEventListener("resize", checkMobileSize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", checkMobileSize);
  }, []);

  // Render a loader or null during the first render (to prevent mismatch)
  if (isMobileSize === null) {
    // You can return a placeholder or null
    return (
      <>
        {!hasMounted && notMountedClass && <div className={notMountedClass} />}
      </>
    );
  }

  // Common props for both themes
  const commonProps = {
    count: isDarkmode ? 10 : 12,
    size: {
      min: isMobileSize ? 350 : isDarkmode ? 1000 : 1000,
      max: isMobileSize ? 950 : isDarkmode ? 1350 : 1200,
      pulse: 0,
    },
    speed: {
      x: {
        min: isMobileSize ? (isDarkmode ? 0.1 : 0.5) : isDarkmode ? 0.2 : 0.6,
        max: isMobileSize ? (isDarkmode ? 0.5 : 1.5) : isDarkmode ? 0.9 : 3,
      },
      y: {
        min: isMobileSize ? (isDarkmode ? 0.1 : 0.5) : isDarkmode ? 0.2 : 0.6,
        max: isMobileSize ? (isDarkmode ? 0.5 : 1.5) : isDarkmode ? 0.9 : 3,
      },
    },
    blending: "overlay",
    opacity: { center: 0.45, edge: 0 },
    skew: -2,
    shapes: ["c"],
    translateYcorrection: true,
  };

  // Render the GradientBackground with appropriate props
  return (
    <>
      <GradientBackground
        {...(commonProps as any)}
        colors={
          isDarkmode
            ? {
                background: "#000000",
                particles: [
                  "#000000",
                  "#ff4848",
                  "#000000",
                  "#2235e5",
                  "#000000",
                  "#ff0000",
                ],
              }
            : {
                background: "#953eff",
                particles: ["#ff681c", "#ff0a53", "#2563eb"],
              }
        }
      />

      {!hasMounted && notMountedClass && (
        <div className={notMountedClass} style={{ marginTop: "-2rem" }} />
      )}
    </>
  );
};
