import { DownloadAllButton } from "@/components/ui/buttons/downloadAllButton";
import { ResizedImages } from "@/components/ui/compress/types";
import { Skeleton } from "@/components/ui/loaders/skeleton";
import { formatFileSize } from "@/utils/imageUtils";
import { ReactElement } from "react";
import styles from "./css/resizeProcessHeader.module.css";

export const ResizeProcessHeader = ({
  compressedFiles,
  isProcessing,
  totalFiles,
}: {
  compressedFiles: ResizedImages[];
  isProcessing: boolean;
  totalFiles: number;
}): ReactElement => {
  const totalBytesSaved = getTotalSavedBytes(compressedFiles);

  const youSavedOrAddedPercent = getSavedText(isProcessing, compressedFiles);
  const subtitle = getSubtitle(isProcessing, compressedFiles, totalFiles);
  const handleResetAndGoAgain = () => {
    // reload page
    window.location.reload();
  };
  return (
    <>
      <div className={styles.resizeProcessHeader}>
        <div className={styles.specs}>
          <h2 className={styles.title}>
            <span className={styles.savedSpan}>{youSavedOrAddedPercent}</span>
            <span className={styles.smallTitle}>
              <span>≈</span>
              <span>{totalBytesSaved}</span>
            </span>
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <DownloadAllButton compressedFiles={compressedFiles}>
          Download All Images
        </DownloadAllButton>

        <button onClick={handleResetAndGoAgain} className={styles.resetButton}>
          Resize more
        </button>
      </div>
    </>
  );
};

const getTotalSavedBytes = (compressedFiles: ResizedImages[]) => {
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

const getTotalSavedPercent = (compressedFiles: ResizedImages[]) => {
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

const getSavedText = (
  isProcessing: boolean,
  compressedFiles: ResizedImages[]
) => {
  if (isProcessing) {
    return (
      <>
        You Saved
        <Skeleton
          asSpan={true}
          width={72}
          height={31}
          style={{ marginLeft: "4px", marginRight: "4px" }}
        />
      </>
    );
  }

  const totalPercentSaved = getTotalSavedPercent(compressedFiles);
  if (typeof totalPercentSaved === "number" && totalPercentSaved < 0) {
    return (
      <span>
        Added size
        <span className={styles.percent}>{totalPercentSaved}</span>%
      </span>
    );
  }
  return (
    <span>
      You Saved
      <span className={styles.percent}>{totalPercentSaved}</span>%
    </span>
  );
};

const getSubtitle = (
  isProcessing: boolean,
  compressedFiles: ResizedImages[],
  totalFiles: number
) => {
  // {isProcessing ? "" : "Finished"}{" "}
  // {isProcessing ? "Processing" : "resizing"}{" "}
  // {isProcessing ? (
  //   <>
  //     <Skeleton
  //       asSpan={true}
  //       width={20}
  //       height={18}
  //       style={{ marginLeft: "4px", marginRight: "4px" }}
  //     />
  //   </>
  // ) : (
  //   compressedFiles.length
  // )}
  // {compressedFiles.length === 0
  //   ? isProcessing
  //     ? ""
  //     : " images"
  //   : " image" + (compressedFiles.length > 1 ? "s" : "")}
  if (isProcessing) {
    return (
      <>
        Processing
        <Skeleton
          asSpan={true}
          width={20}
          height={18}
          style={{
            marginLeft: "4px",
            marginRight: "4px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {compressedFiles.length}
        </Skeleton>
        / {totalFiles}
      </>
    );
  }

  if (compressedFiles.length === 1) {
    return `Finished resizing ${compressedFiles.length} image`;
  }
  return `Finished resizing ${compressedFiles.length} images`;
};
