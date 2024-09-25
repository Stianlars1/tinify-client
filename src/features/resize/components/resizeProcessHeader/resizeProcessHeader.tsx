import { DownloadAllButton } from "@/components/ui/buttons/downloadAllButton";
import { ImageResponse } from "@/components/ui/compress/types";
import { Skeleton } from "@/components/ui/loaders/skeleton";
import { formatFileSize } from "@/utils/imageUtils";
import styles from "./css/resizeProcessHeader.module.css";
export const ResizeProcessHeader = ({
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
      <div className={styles.compressProcessHeader}>
        <div className={styles.specs}>
          <h2 className={styles.title}>
            <span className={styles.savedSpan}>
              You Saved: {totalPercentSaved}% /
            </span>
            <span className={styles.smallTitle}>{totalBytesSaved}</span>
          </h2>
          <p className={styles.subtitle}>
            {isProcessing ? "" : "Finished"}{" "}
            {isProcessing ? "Processing" : "resizing"}{" "}
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
