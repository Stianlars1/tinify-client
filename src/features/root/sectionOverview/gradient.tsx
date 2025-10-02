"use client";
import styles from "@/features/root/sectionOverview/css/sectionOverview.module.css";
import { GradientBackground } from "react-gradient-animation";

export const SectionOverviewGradient = () => {
  return (
    <GradientBackground
      count={10} // Number of particles
      size={{ min: 450, max: 500, pulse: 0 }} // Adjusted for visibility
      speed={{ x: { min: 0.2, max: 0.4 }, y: { min: 0.2, max: 0.4 } }}
      colors={{
        background: "#000000", // Solid background for better visibility
        particles: ["#ff4848", "#000000", "#2235e5", "#000000", "#ff0000"],
      }}
      blending={"overlay"} // Adjust blending mode if necessary
      opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
      skew={0}
      shapes={["c"]} // Shapes: circle
      className={styles.gradientBackground}
      translateYcorrection={false}
    />
  );
};
// const Gradient = () => {
//   return (
//     <GradientBackground
//       count={10} // Number of particles
//       size={{ min: 450, max: 500, pulse: 0 }} // Adjusted for visibility
//       speed={{ x: { min: 0.5, max: 0.6 }, y: { min: 0.5, max: 0.6 } }}
//       colors={{
//         background: "#000000", // Solid background for better visibility
//         particles: [
//           "#000000",
//           "#3c3c3c",
//           "#737373",
//           "#000000",
//           "#535353",
//           "#9c9c9c",
//           "#000",
//         ],
//       }}
//       blending={"overlay"} // Adjust blending mode if necessary
//       opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
//       skew={0}
//       shapes={["c"]} // Shapes: circle
//       className={styles.gradientBackground}
//       translateYcorrection={false}
//     />
//   );
// };
