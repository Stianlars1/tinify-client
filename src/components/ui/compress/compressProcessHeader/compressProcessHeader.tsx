import { formatFileSize } from "@/utils/imageUtils";
import { DownloadAllButton } from "../../buttons/downloadAllButton";
import { Skeleton } from "../../loaders/skeleton";
import { ImageResponse } from "../types";
import styles from "./css/compressProcessHeader.module.css";
export const CompressProcessHeader = ({
  compressedFiles,
  isProcessing,
}: {
  compressedFiles: ImageResponse[];
  isProcessing: boolean;
}) => {
  const totalBytesSaved = getTotalSavedBytes(compressedFiles);
  const totalPercentSaved = isProcessing ? (
    <Skeleton
      asSpan={true}
      width={72}
      height={28}
      style={{ marginLeft: "4px", marginRight: "4px" }}
    />
  ) : (
    getTotalSavedPercent(compressedFiles)
  );

  return (
    <>
      <div
        id="compress-processin-header"
        className={styles.compressProcessHeader}
      >
        <div className={styles.specs}>
          <h2 className={styles.title}>
            <span className={styles.savedSpan}>
              You Saved: {totalPercentSaved}% /
            </span>
            <span className={styles.smallTitle}>{totalBytesSaved}</span>
          </h2>
          <p className={styles.subtitle}>
            {isProcessing ? "" : "Finished"}{" "}
            {isProcessing ? "Processing" : "processing"}{" "}
            {isProcessing ? (
              <>
                <Skeleton
                  asSpan={true}
                  width={20}
                  height={18}
                  style={{ marginLeft: "4px", marginRight: "4px" }}
                />
              </>
            ) : (
              compressedFiles.length
            )}
            {compressedFiles.length === 0
              ? isProcessing
                ? ""
                : " files"
              : " file" + (compressedFiles.length > 1 ? "s" : "")}
          </p>
        </div>
        <DownloadAllButton compressedFiles={compressedFiles}>
          Download All Files
        </DownloadAllButton>
      </div>
    </>
  );
};

const getTotalSavedBytes = (compressedFiles: ImageResponse[]) => {
  const originalFileSizes = compressedFiles.reduce(
    (acc, file) => acc + parseFloat(file.originalFileSize),
    0
  );
  const compressedFileSizes = compressedFiles.reduce(
    (acc, file) => acc + parseFloat(file.compressedSize),
    0
  );
  return formatFileSize(originalFileSizes - compressedFileSizes);
};

const getTotalSavedPercent = (compressedFiles: ImageResponse[]) => {
  const originalFileSizes = compressedFiles.reduce(
    (acc, file) => acc + parseFloat(file.originalFileSize),
    0
  );
  const compressedFileSizes = compressedFiles.reduce(
    (acc, file) => acc + parseFloat(file.compressedSize),
    0
  );
  return parseInt(
    (
      ((originalFileSizes - compressedFileSizes) / originalFileSizes) *
      100
    ).toString()
  );
};
