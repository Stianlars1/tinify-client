// src/components/sections/sectionOverview.tsx
import {CompressImageIcon, CropIcon, ResizeIcon} from "@/assets/icons/icons";
import {SectionHeader} from "@/components/layout/sectionHeader/sectionHeader";
import {Link} from "next-view-transitions";
import styles from "./css/sectionOverview.module.css";
import {SectionOverviewGradient} from "@/features/root/sectionOverview/gradient";

export const SectionOverview = () => (
    <section
        className={`${styles.overviewSection} section-header overview-header`}
    >
        <header className={styles.header}>
            <SectionHeader title="Our Services"/>
        </header>
        <ul className={styles.featuresList}>
            <Link
                aria-label="Click here to go to the image-compression page"
                className={styles.feature}
                href="/compress"
            >
                <CompressImageIcon className={styles.cardIcon} size={24}/>
                <h3 className={styles.cardTitle}>Compress</h3>
                <p className={styles.cardDescription}>
                    Reduce image file sizes without losing quality.
                </p>
                <SectionOverviewGradient/>
            </Link>
            <Link
                aria-label="Click here to go to the resize images page"
                className={styles.feature}
                href="/resize"
            >
                <ResizeIcon className={styles.cardIcon} size={24}/>
                <h3 className={styles.cardTitle}>Resize</h3>
                <p className={styles.cardDescription}>
                    Adjust image dimensions to fit your needs.
                </p>
                <SectionOverviewGradient/>
            </Link>
            <Link
                aria-label="Click here to go to the crop-images page"
                className={styles.feature}
                href="/crop"
            >
                <CropIcon className={styles.cardIcon} size={24}/>
                <h3 className={styles.cardTitle}>Crop</h3>
                <p className={styles.cardDescription}>
                    Trim images to focus on essential parts.
                </p>
                <SectionOverviewGradient/>
            </Link>
        </ul>

        {/* <OverviewSectionBackground /> */}
    </section>
);

