// components/resultProcessContainer/resultProcessContainer.tsx

"use client";

import { ImageResponse } from "@/components/ui/compress/types";
import { Spinner } from "@/components/ui/loaders/loaders";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";
import styles from "./css/resultProcessContainer.module.css";

interface ResultProcessContainerProps {
  uploadProgress: number;
  imageResponse: ImageResponse | null;
  processing: boolean;
}

export const ResultProcessContainer: React.FC<ResultProcessContainerProps> = ({
  uploadProgress,
  imageResponse,
  processing,
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  if (processing) {
    // Show processing state
    return (
      <div className={styles.processingContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            {uploadProgress < 100 ? "Uploading" : "Processing"}
          </h1>
          {uploadProgress < 100 ? (
            <p className={styles.subTitle}>
              Upload Progress: {uploadProgress}%
            </p>
          ) : (
            <p className={styles.subTitle}>Processing Image...</p>
          )}
        </header>
        {/* Add a spinner or progress bar here if desired */}
      </div>
    );
  } else if (imageResponse) {
    // Show the result
    return (
      <div className={styles.resultContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Cropped Image</h1>
          <p className={styles.subTitle}>Your cropped image is ready:</p>

          <Link
            href={imageResponse.url}
            download={imageResponse.originalFilename}
            className={styles.download}
          >
            Download Image
          </Link>
          <button
            onClick={() =>
              typeof window !== "undefined"
                ? window.location.reload()
                : undefined
            }
            className={styles.cropAgain}
          >
            Crop Another Image
          </button>
        </header>
        <div className={styles.imageContainer}>
          <figure className={styles.figure}>
            {!imageLoaded && <Spinner size={32} />}
            <Image
              width={0}
              height={0}
              style={{ width: "auto", height: "auto", maxHeight: "250px" }}
              priority
              fetchPriority="auto"
              src={imageResponse.url}
              quality={100}
              sizes="100vw"
              alt="Preview of your cropped image"
              onLoad={() => setImageLoaded(true)}
              className={styles.croppedImage}
            />
            {imageLoaded && (
              <figcaption>
                Note: The image above is a preview. Please use the{" "}
                <strong>Download Image</strong> button to get the original file.
                Right-clicking may save the image in a different format.
              </figcaption>
            )}
          </figure>
        </div>

        {/* 
        <div className={styles.imageSpecs}>
          <p className={styles.imageSpec}>
            Original Filename: {imageResponse.originalFilename}
          </p>
          <p className={styles.imageSpec}>
            Original Size: {imageResponse.originalFileSize} bytes
          </p>
          <p className={styles.imageSpec}>
            Cropped Size: {imageResponse.compressedSize} bytes
          </p>
          <p className={styles.imageSpec}>
            Compression Percentage: {imageResponse.compressionPercentage}%
          </p>
        </div>
        <a href={imageResponse.url} download={imageResponse.originalFilename}>
          Download Cropped Image
        </a> */}
      </div>
    );
  } else {
    // Should not reach here, but handle it just in case
    return (
      <div className={styles.processingContainer}>
        <p>No image available. Please try uploading your image again.</p>
      </div>
    );
  }
};
