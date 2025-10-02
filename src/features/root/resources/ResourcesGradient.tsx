"use client";

import { GradientBackground } from "react-gradient-animation";
import styles from "@/features/root/resources/css/resources.module.css";

export const ResourcesGradient = () => {
  return (
    <GradientBackground
      count={10} // Number of particles
      size={{ min: 600, max: 1000, pulse: 0 }} // Adjusted for visibility
      speed={{ x: { min: 0.4, max: 0.6 }, y: { min: 0.3, max: 0.5 } }}
      colors={{
        background: "hsl(var(--background))", // Solid background for better visibility
        particles: ["#2563eb", "#e517db", "#ff0a53", "#2563eb"],
      }}
      blending={"source-over"} // Adjust blending mode if necessary
      opacity={{ center: 1, edge: 0 }} // Center opacity and edge opacity
      skew={0}
      shapes={["c"]} // Shapes: circle
      className={styles.gradientBackground}
      translateYcorrection={false}
      style={{ position: "absolute" }}
    />
  );
};
