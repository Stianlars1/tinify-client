import { Link } from "next-view-transitions";
import { useState } from "react";

import styles from "./css/button.module.css";
import { ArrowDownIcon } from "@/assets/icons/icons";

export const DownloadButton = ({
  url,
  ariaLabel,
  className = "",
}: {
  url: string;
  ariaLabel: string;
  className?: string;
}) => {
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const handleOnClick = () => {
    setHasDownloaded(true);
  };
  return (
    <Link
      download={true}
      aria-label={ariaLabel}
      className={`${styles.button} ${styles.downloadButton} ${className} ${hasDownloaded ? styles.hasDownloaded : ""}`}
      href={url}
      onClick={handleOnClick}
    >
      <>
        <span className={styles.downloadButtonText}>
          {hasDownloaded ? "saved" : "download"}
        </span>
        <div className={styles.downloadButtonIconWrapper}>
          <ArrowDownIcon className={styles.downloadButtonIcon} />
        </div>
      </>
    </Link>
  );
};
