import { SectionHeader } from "@/components/layout/sectionHeader/sectionHeader";
import { LightBeam } from "@stianlarsen/react-light-beam";
import styles from "./css/features.module.css";
export const Features = () => (
  <section className={styles.keyFeatures}>
    <LightBeam
      maskLightByProgress={true}
      className={styles.lightBeam}
      fullWidth={100}
      colorLightmode="hsl(var(--white))"
      colorDarkmode="hsl(var(--primary))"
    />
    <SectionHeader title="Key Features" />
    <ul className={styles.featuresList}>
      <li className={styles.feature}>
        <strong className={styles.title}>
          ⚡ Fast and Efficient Processing
        </strong>
        <span className={styles.description}>
          Optimize your images in seconds, whether you&apos;re compressing,
          resizing, or cropping. Our tools are built for speed to save you time.
        </span>
      </li>

      <li className={styles.feature}>
        <strong className={styles.title}>🖼️ High-Quality Results</strong>
        <span className={styles.description}>
          Maintain excellent image quality across all optimization processes. We
          ensure your images look their best, no matter the adjustments.
        </span>
      </li>

      <li className={styles.feature}>
        <strong className={styles.title}>💻 User-Friendly Interface</strong>
        <span className={styles.description}>
          Enjoy a seamless experience with an intuitive interface that&apos;s
          easy to navigate, making image optimization simple for everyone.
        </span>
      </li>

      <li className={styles.feature}>
        <strong className={styles.title}>💰 Free and Unlimited Access</strong>
        <span className={styles.description}>
          Access all our image optimization features completely free, with no
          hidden fees or usage limits.
        </span>
      </li>

      <li className={styles.feature}>
        <strong className={styles.title}>📷 Supports Multiple Formats</strong>
        <span className={styles.description}>
          Work with a wide range of image formats, including JPG, PNG, GIF,
          WEBP, PDF, TIFF, and more across all services.
        </span>
      </li>

      <li className={styles.feature}>
        <strong className={styles.title}>🔒 Secure and Private</strong>
        <span className={styles.description}>
          Your images are processed securely and are not stored on our servers.
          We respect your privacy across all our services.
        </span>
      </li>

      <li className={styles.feature}>
        <strong className={styles.title}>📱 Responsive Design</strong>
        <span className={styles.description}>
          Optimize images on any device. Our platform is fully responsive and
          works smoothly on desktop and mobile.
        </span>
      </li>
    </ul>
  </section>
);
