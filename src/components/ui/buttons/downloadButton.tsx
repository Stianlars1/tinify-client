// @/src/components/buttons/downloadButton.tsx
import { useState } from "react";
import { ArrowDownIcon } from "@/assets/icons/icons";
import styles from "./css/button.module.css";

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
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isDownloading) return;

    setIsDownloading(true);

    try {
      // Use fetch instead of direct link click for better control
      const response = await fetch(url);
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      // Extract filename from original filename or URL
      const filename =
        ariaLabel.replace("Download file ", "") ||
        url.split("/").pop() ||
        "compressed-image.jpg";

      // Create and trigger download
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = filename;
      link.style.display = "none";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(downloadUrl);
      setHasDownloaded(true);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      aria-label={ariaLabel}
      className={`${styles.button} ${styles.downloadButton} ${className} ${
        hasDownloaded ? styles.hasDownloaded : ""
      } ${isDownloading ? styles.isDownloading : ""}`}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <span className={styles.downloadButtonText}>
        {isDownloading
          ? "downloading..."
          : hasDownloaded
            ? "saved"
            : "download"}
      </span>
      <div className={styles.downloadButtonIconWrapper}>
        <ArrowDownIcon className={styles.downloadButtonIcon} />
      </div>
    </button>
  );
};
