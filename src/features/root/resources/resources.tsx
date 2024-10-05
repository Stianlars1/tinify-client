import { SectionHeader } from "@/components/layout/sectionHeader/sectionHeader";
import Link from "next/link";
import { GradientBackground } from "react-gradient-animation";
import styles from "./css/resources.module.css";
// src/components/sections/blogPreview.tsx
export const Resources = () => (
  <section className={styles.resources}>
    {/* Understanding Our Services Section
    <Suspense fallback={<div>Loading Services...</div>}>
    <h2>Resources</h2>
    <UnderstandingServices />
    <WhatIsOurServices />
    </Suspense>
    
    <Suspense fallback={<div>Loading Technology Stack...</div>}>
    <TechnologyStack />
    </Suspense> */}

    {/* Our Technology Stack Section */}
    <SectionHeader title="Resources" />
    <nav className={styles.navLinks}>
      <Link className={styles.link} href="/blog/what-is-compression">
        What is Compression?
        <Gradient />
      </Link>
      <Link className={styles.link} href="/blog/what-is-resizing">
        What is Resizing?
        <Gradient />
      </Link>
      <Link className={styles.link} href="/blog/what-is-cropping">
        What is Cropping?
        <Gradient />
      </Link>
    </nav>
  </section>
);

const Gradient = () => {
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
