// @/src/components/buttons/downloadAllButton.tsx
"use client";

import JSZip from "jszip";
import { ReactElement, ReactNode, useState } from "react";
import { ImageResponse } from "../compress/types";
import styles from "./css/button.module.css";
import { DOMAIN_ENDING } from "@/utils/urls";

export const DownloadAllButton = ({
  children,
  className = "",
  compressedFiles,
}: {
  children: ReactElement | ReactNode;
  compressedFiles: ImageResponse[];
  className?: string;
}) => {
  const [isCreatingZip, setIsCreatingZip] = useState(false);

  const createAndDownloadZip = async () => {
    if (compressedFiles.length === 0) return;

    setIsCreatingZip(true);

    try {
      const zip = new JSZip();

      // Fetch all files and add them to zip concurrently
      const filePromises = compressedFiles.map(async (file) => {
        try {
          const response = await fetch(file.url);
          if (!response.ok) {
            console.warn(`Failed to fetch ${file.originalFilename}`);
            return null;
          }
          const blob = await response.blob();
          return { filename: file.originalFilename, blob };
        } catch (error) {
          console.warn(`Error fetching ${file.originalFilename}:`, error);
          return null;
        }
      });

      const results = await Promise.all(filePromises);

      // Add successfully fetched files to zip
      results.forEach((result) => {
        if (result) {
          zip.file(result.filename, result.blob);
        }
      });

      // Generate zip file
      const zipBlob = await zip.generateAsync({
        type: "blob",
        compression: "DEFLATE",
        compressionOptions: {
          level: 6,
        },
      });

      // Create download link
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `tinify_${DOMAIN_ENDING}.zip`;
      link.style.display = "none";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up object URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to create zip file:", error);
    } finally {
      setIsCreatingZip(false);
    }
  };

  return (
    <button
      className={`${styles.button} ${styles.downloadAllButton} ${className}`}
      onClick={createAndDownloadZip}
      disabled={isCreatingZip || compressedFiles.length === 0}
    >
      {isCreatingZip ? "Creating zip..." : children}
    </button>
  );
};
