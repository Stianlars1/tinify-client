"use client";

import { ReactElement, ReactNode } from "react";
import { ImageResponse } from "../compress/types";
import styles from "./css/button.module.css";

export const DownloadAllButton = ({
  children,
  className = "",
  compressedFiles,
}: {
  children: ReactElement | ReactNode;
  compressedFiles: ImageResponse[];
  className?: string;
}) => {
  const isBrowser = typeof document !== "undefined";

  const handleDownloadAll = async () => {
    if (isBrowser) {
      for (const file of compressedFiles) {
        await new Promise<void>((resolve) => {
          const link = document?.createElement("a");
          link.setAttribute("href", file.url);
          link.setAttribute("download", file.originalFilename); // Set the correct filename
          link.style.display = "none";
          document?.body.appendChild(link);
          link.click();
          document?.body.removeChild(link);
          setTimeout(() => resolve(), 100); // Slight delay to allow the download to process
        });
      }
    }
  };

  return (
    <button
      className={`${styles.button} ${styles.downloadAllButton} ${className}`}
      onClick={handleDownloadAll}
    >
      {children}
    </button>
  );
};
