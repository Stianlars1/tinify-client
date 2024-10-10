// components/cropControls/cropControls.tsx

"use client";

import React from "react";
import styles from "./css/cropControls.module.css";

interface CropControlsProps {
  handleAspectChange: (aspect: number | undefined) => void;
  handleCrop: () => void;
  handleCancel: () => void;
  processing: boolean;
  aspect: number | undefined;
}

export const CropControls: React.FC<CropControlsProps> = ({
  handleAspectChange,
  handleCrop,
  handleCancel,
  processing,
  aspect,
}) => {
  return (
    <div className={styles.cropControls}>
      <div className={styles.controlsButtons}>
        {/* Aspect Ratio Buttons */}
        <button
          className={`${styles.controlButton} ${styles.fourThree}   ${
            aspect === 4 / 3 ? styles.active : ""
          }`}
          onClick={() => handleAspectChange(4 / 3)}
        >
          4:3
        </button>
        <button
          className={`${styles.controlButton} ${styles.sixteen}  ${
            aspect === 16 / 9 ? styles.active : ""
          }`}
          onClick={() => handleAspectChange(16 / 9)}
        >
          16:9
        </button>
        <button
          className={`${styles.controlButton} ${styles.oneOne} ${
            aspect === 1 ? styles.active : ""
          }`}
          onClick={() => handleAspectChange(1)}
        >
          1:1
        </button>
        <button
          className={`${styles.controlButton} ${styles.free} ${
            aspect === undefined ? styles.active : ""
          }`}
          onClick={() => handleAspectChange(undefined)}
        >
          Free
        </button>
      </div>

      <div className={styles.cropCTAS}>
        <button
          className={`${styles.CTA} ${styles.submitCTA}`}
          onClick={handleCrop}
          disabled={processing}
        >
          Crop
        </button>
        <button
          className={`${styles.CTA} ${styles.cancelCTA}`}
          onClick={handleCancel}
          disabled={processing}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
