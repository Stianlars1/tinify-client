import { SectionHeader } from "@/components/layout/sectionHeader/sectionHeader";
import { Link } from "next-view-transitions";
import styles from "./css/resources.module.css";
import { ResourcesGradient } from "@/features/root/resources/ResourcesGradient";
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
        <ResourcesGradient />
      </Link>
      <Link className={styles.link} href="/blog/what-is-resizing">
        What is Resizing?
        <ResourcesGradient />
      </Link>
      <Link className={styles.link} href="/blog/what-is-cropping">
        What is Cropping?
        <ResourcesGradient />
      </Link>
    </nav>
  </section>
);
