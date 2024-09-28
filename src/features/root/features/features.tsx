// BoltIcon
// BadgeCheckIcon
// GiftIcon
// MobileIcon
import Link from "next/link";
import styles from "./css/features.module.css";
export const Features = () => (
  <section className={styles.keyFeatures}>
    <h2>Key Features</h2>
    <ul className={styles.featuresList}>
      <Link href={"/compress"} className={styles.feature}>
        <strong className={styles.title}>Fast Compression:</strong>
        <span className={styles.description}>
          Compress images instantly, saving time without compromising
          efficiency.
        </span>
      </Link>
      <Link href={"/resize"} className={styles.feature}>
        <strong className={styles.title}>High-Quality Results:</strong>
        <span className={styles.description}>
          Maintain excellent image quality while drastically reducing file
          sizes.
        </span>
      </Link>
      <Link href={"/"} className={styles.feature}>
        <strong className={styles.title}>Free Service:</strong>
        <span className={styles.description}>
          Access premium image processing features completely free of charge.
        </span>
      </Link>
      <Link href={"/"} className={styles.feature}>
        <strong className={styles.title}>Responsive Interface:</strong>
        <span className={styles.description}>
          Seamless experience on both desktop and mobile devices.
        </span>
      </Link>
    </ul>
  </section>
);
