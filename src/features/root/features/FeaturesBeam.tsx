"use client";

import { LightBeam } from "@stianlarsen/react-light-beam";
import { useEffect, useState } from "react";

export const FeaturesBeam = ({ className }: { className?: string }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // Prevents server-side rendering issues
  }
  return (
    <LightBeam
      className={className}
      fullWidth={0.8}
      colorLightmode="hsl(var(--white))"
      colorDarkmode="hsl(var(--primary))"
      scrollElement={document.body}
    />
  );
};
