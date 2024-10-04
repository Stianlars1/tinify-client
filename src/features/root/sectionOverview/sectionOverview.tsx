// src/components/sections/sectionOverview.tsx
import { CompressImageIcon, CropIcon, ResizeIcon } from "@/assets/icons/icons";
import { SectionHeader } from "@/components/layout/sectionHeader/sectionHeader";
import Link from "next/link";
import { GradientBackground } from "react-gradient-animation";
import styles from "./css/sectionOverview.module.css";
export const SectionOverview = () => (
  <section
    className={`${styles.overviewSection} section-header overview-header`}
  >
    <header className={styles.header}>
      <SectionHeader title="Our Services" />
    </header>
    <ul className={styles.featuresList}>
      <Link
        aria-label="Click here to go to the image-compression page"
        className={styles.feature}
        href="/compress"
      >
        <CompressImageIcon className={styles.cardIcon} size={24} />
        <h3 className={styles.cardTitle}>Compress</h3>
        <p className={styles.cardDescription}>
          Reduce image file sizes without losing quality.
        </p>
      </Link>
      <Link
        aria-label="Click here to go to the resize images page"
        className={styles.feature}
        href="/resize"
      >
        <ResizeIcon className={styles.cardIcon} size={24} />
        <h3 className={styles.cardTitle}>Resize</h3>
        <p className={styles.cardDescription}>
          Adjust image dimensions to fit your needs.
        </p>
      </Link>
      <Link
        aria-label="Click here to go to the crop-images page"
        className={styles.feature}
        href="/crop"
      >
        <CropIcon className={styles.cardIcon} size={24} />
        <h3 className={styles.cardTitle}>Crop</h3>
        <p className={styles.cardDescription}>
          Trim images to focus on essential parts.
        </p>
      </Link>
      <GradientBackground
        count={10} // Number of particles
        size={{ min: 450, max: 500, pulse: 0 }} // Adjusted for visibility
        speed={{ x: { min: 0.5, max: 0.6 }, y: { min: 0.5, max: 0.6 } }}
        colors={{
          background: "#000000", // Solid background for better visibility
          particles: [
            "#000000",
            "#3c3c3c",
            "#737373",
            "#000000",
            "#535353",
            "#9c9c9c",
            "#000",
          ],
        }}
        blending={"overlay"} // Adjust blending mode if necessary
        opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
        skew={0}
        shapes={["c"]} // Shapes: circle
        className={styles.gradientBackground}
        translateYcorrection={false}
      />
    </ul>

    {/* <OverviewSectionBackground /> */}
  </section>
);
