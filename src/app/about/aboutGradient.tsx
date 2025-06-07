"use client";

import { GradientBackground } from "react-gradient-animation";
import styles from "@/app/about/css/about.module.css";

export const AboutGradient = () => {
  return (
    <GradientBackground
      count={50} // Number of particles
      size={{ min: 2, max: 10, pulse: 0 }} // Adjusted for visibility
      speed={{
        x: { min: 0.1, max: 0.1 },
        y: { min: 0.1, max: 0.1 },
      }}
      colors={{
        background: "transparent", // Solid background for better visibility
        particles: ["#1DACBF", "#7AF0FF", "#1A90FF"],
      }}
      blending={"overlay"} // Adjust blending mode if necessary
      opacity={{ center: 1, edge: 0.5 }} // Center opacity and edge opacity
      skew={0}
      shapes={["c"]} // Shapes: circle
      className={styles.gradientBackground}
      translateYcorrection={true}
      style={{ position: "absolute", zIndex: "-10" }}
    />
  );
};
