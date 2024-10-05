import { DownloadAllButton } from "@/components/ui/buttons/downloadAllButton";
import { ResizedImage } from "@/components/ui/compress/types";
import { Spinner } from "@/components/ui/loaders/loaders";
import { Skeleton } from "@/components/ui/loaders/skeleton";
import { formatFileSize } from "@/utils/imageUtils";
import { default as Image } from "next/image";
import { ReactElement, useEffect } from "react";
import {
  OriginalNewImage,
  ResizeOptions,
} from "../resizeContent/resizeContent";
import styles from "./css/resizeProcessHeader.module.css";

export const ResizeProcessHeader = ({
  compressedFiles,
  isProcessing,
  totalFiles,
  imageData,
  resizeOptions,
}: {
  compressedFiles: ResizedImage[];
  isProcessing: boolean;
  totalFiles: number;
  imageData: OriginalNewImage[];
  resizeOptions: ResizeOptions;
}): ReactElement => {
  const totalBytesSaved = getTotalSavedBytes(compressedFiles);

  const youSavedOrAddedPercent = getSavedText(isProcessing, compressedFiles);
  const subtitle = getSubtitle(isProcessing, compressedFiles, totalFiles);
  const handleResetAndGoAgain = () => {
    // reload page
    window.location.reload();
  };

  useEffect(() => {
    if (isProcessing) {
      document.getElementById("resize-processing-header")?.scrollIntoView();
    }
  }, []);

  console.log("compressedFiles", compressedFiles);
  console.log("imageData", imageData);
  return (
    <>
      <div className={styles.resizeProcessHeader} id="resize-processing-header">
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
        {!isProcessing && compressedFiles.length > 0 && (
          <div className={styles.finishedResizeContainer}>
            <DownloadAllButton compressedFiles={compressedFiles}>
              Download All Images
            </DownloadAllButton>
            <ul className={styles.resizedList}>
              {compressedFiles.map((file) => (
                <ResizedCard
                  key={file.originalFilename}
                  file={file}
                  imageData={imageData.find(
                    (currentFile) => currentFile.name === file.originalFilename
                  )}
                  resizeOptions={resizeOptions}
                />
              ))}
            </ul>
            <button
              onClick={handleResetAndGoAgain}
              className={styles.resetButton}
            >
              Resize more
            </button>
          </div>
        )}

        {isProcessing && <Spinner size={24} />}
      </div>
    </>
  );
};

const ResizedCard = ({
  file,
  imageData,
  resizeOptions,
}: {
  file: ResizedImage;
  imageData: OriginalNewImage | undefined;
  resizeOptions: ResizeOptions;
}) => {
  const { intendedWidth, intendedHeight } = getImageDimensions(
    imageData,
    file,
    resizeOptions
  );
  return (
    <li className={styles.resizedCard}>
      <div className={styles.resizedImage}>
        <Image
          src={file.url}
          width={40}
          height={40}
          alt={file.originalFilename}
          fetchPriority="auto"
          className={styles.image}
        />
      </div>

      <div className={styles.resizedSpecs}>
        <p className={styles.resizedFilename}>{file.originalFilename}</p>
        <div className={styles.resizedInfo}>
          <p className={styles.originalFormat}>
            {file.originalFormat.toUpperCase()}
          </p>
          {imageData && (
            <p className={styles.originalSize}>
              {imageData.originalWidth} x {imageData.originalHeight}
            </p>
          )}
        </div>
      </div>

      <div className={styles.arrow}>
        <p>→</p>
      </div>

      <div className={styles.resizedNewSpecs}>
        <div className={styles.resizedPercent}>
          <div className={styles.saved}>
            <span className={styles.youSavedFirstPart}>You </span>
            <span>Saved</span>
          </div>
          <span className={styles.percent}>
            {parseInt(
              (
                ((parseFloat(file.originalFileSize) -
                  parseFloat(file.compressedSize)) /
                  parseFloat(file.originalFileSize)) *
                100
              ).toString()
            )}
            %
          </span>
        </div>
        <div className={styles.sizeDimensionWrapper}>
          <div className={styles.resizedSize}>
            <span>{formatFileSize(parseFloat(file.compressedSize))}</span>
          </div>

          <div className={styles.resizedDimensions}>
            {intendedWidth} x {intendedHeight}
          </div>
        </div>
      </div>
    </li>
  );
};

const getImageDimensions = (
  imageData: OriginalNewImage | undefined,
  resizedImage: ResizedImage,
  resizeOptions: ResizeOptions
) => {
  let intendedWidth: number | undefined = undefined;
  let intendedHeight: number | undefined = undefined;

  if (imageData && resizedImage) {
    const { scale, keepAspectRatio, width, height } = resizeOptions;

    if (scale) {
      const scaleValue = parseFloat(scale);
      if (keepAspectRatio) {
        intendedWidth = Math.round(imageData.originalWidth * scaleValue);
        intendedHeight = Math.round(imageData.originalHeight * scaleValue);
      } else {
        // If not keeping aspect ratio, scale width and height independently
        const scaleWidth = parseFloat(width || "1");
        const scaleHeight = parseFloat(height || "1");
        intendedWidth = Math.round(imageData.originalWidth * scaleWidth);
        intendedHeight = Math.round(imageData.originalHeight * scaleHeight);
      }
    } else {
      if (keepAspectRatio) {
        if (width && !height) {
          intendedWidth = parseInt(width, 10);
          const aspectRatio =
            imageData.originalHeight / imageData.originalWidth;
          intendedHeight = Math.round(intendedWidth * aspectRatio);
        } else if (height && !width) {
          intendedHeight = parseInt(height, 10);
          const aspectRatio =
            imageData.originalWidth / imageData.originalHeight;
          intendedWidth = Math.round(intendedHeight * aspectRatio);
        } else if (width && height) {
          // If both are set, calculate scale based on one dimension to maintain aspect ratio
          const scaleWidth = parseFloat(width) / imageData.originalWidth;
          const scaleHeight = parseFloat(height) / imageData.originalHeight;
          const scaleValue = Math.min(scaleWidth, scaleHeight);
          intendedWidth = Math.round(imageData.originalWidth * scaleValue);
          intendedHeight = Math.round(imageData.originalHeight * scaleValue);
        }
      } else {
        // Without keeping aspect ratio, use provided width and/or height
        if (width) {
          intendedWidth = parseInt(width, 10);
        }
        if (height) {
          intendedHeight = parseInt(height, 10);
        }
      }
    }
  }

  return { intendedWidth, intendedHeight };
};

const getTotalSavedBytes = (compressedFiles: ResizedImage[]) => {
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

const getTotalSavedPercent = (compressedFiles: ResizedImage[]) => {
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
  compressedFiles: ResizedImage[]
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
  compressedFiles: ResizedImage[],
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
