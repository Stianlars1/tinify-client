import { getTotalUsageData } from "@/app/actions/tags";
import { SparklesIcon } from "@/assets/icons/icons";
import styles from "./css/usageSection.module.css";
export const UsageSection = async () => {
  const totalUsage = await getTotalUsageData();
  if (totalUsage === 0) {
    return null;
  }
  return (
    <section className={styles.usageSection}>
      <span>
        <SparklesIcon className={styles.icon} size={24} />
        Join our users who&apos;ve optimized <strong>{totalUsage}+</strong>{" "}
        images with Tinify.dev
      </span>
    </section>
  );
};
