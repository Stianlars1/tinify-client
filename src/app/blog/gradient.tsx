"use client";

import { GradientBackground } from "react-gradient-animation";

export const BlogGradient = ({ className }: { className: string }) => {
  return (
    <GradientBackground
      count={10} // Number of particles
      size={{ min: 600, max: 1000, pulse: 0.2 }} // Adjusted for visibility
      speed={{ x: { min: 1.5, max: 2 }, y: { min: 1.5, max: 2 } }}
      colors={{
        background: "#c2495c", // Solid background for better visibility
        particles: ["#ff681c", "#ff0a53", "#2563eb"],
      }}
      blending={"source-over"} // Adjust blending mode if necessary
      opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
      skew={0}
      shapes={["c"]} // Shapes: circle
      className={className}
      translateYcorrection={true}
      style={{ position: "absolute" }}
      onLoaded={() => console.log("Loaded")}
    />
  );
};
