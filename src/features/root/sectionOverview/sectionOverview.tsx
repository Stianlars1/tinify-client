// src/components/sections/sectionOverview.tsx
import Link from "next/link";
import styles from "./css/sectionOverview.module.css";
export const SectionOverview = () => (
  <section
    className={`${styles.overviewSection} section-header overview-header`}
  >
    <header className={styles.header}>
      <h2 className={styles.title}>Optimize Your Images with Tinify.dev</h2>
      <p className={styles.description}>
        Compress, resize, and crop your images online for free with our fast and
        easy-to-use tools.
      </p>
    </header>
    <ul className={styles.featuresList}>
      <Link className={styles.feature} href="/compress">
        Compress Images
      </Link>
      <Link className={styles.feature} href="/resize">
        Resize Images
      </Link>
      <Link className={styles.feature} href="/crop">
        Crop Images
      </Link>
    </ul>

    {/* <OverviewSectionBackground /> */}
  </section>
);
