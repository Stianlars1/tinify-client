import { ReactElement } from "react";
import { GradientBackground } from "react-gradient-animation";
import styles from "./css/footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © tinify.dev {new Date().getFullYear()} ® - Your go-to image processing
        tool
      </p>
      <Gradient />
    </footer>
  );
};

const Gradient = (): ReactElement => {
  return (
    <>
      <div className={styles.gradientBg} />
      <GradientBackground
        count={10} // Number of particles
        size={{ min: 600, max: 1000, pulse: 0.2 }} // Adjusted for visibility
        speed={{ x: { min: 1.5, max: 2 }, y: { min: 1.5, max: 2 } }}
        colors={{
          background: "hsl(var(--background))", // Solid background for better visibility
          particles: ["#ff681c", "#ff0a53", "#2563eb"],
        }}
        blending={"source-over"} // Adjust blending mode if necessary
        opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
        skew={0}
        shapes={["c"]} // Shapes: circle
        className={styles.gradientBackground}
        translateYcorrection={false}
        style={{ position: "absolute" }}
      />
    </>
  );
};
