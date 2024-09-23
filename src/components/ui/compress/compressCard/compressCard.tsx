import { ArrowDownIcon, SparklesIcon } from "@/assets/icons/icons";
import {
  formatFileSize,
  getOriginalFileInfo,
  IMAGE_PLACEHOLDER,
} from "@/utils/imageUtils";
import { COMPRESS_URL } from "@/utils/urls";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import Image from "next/legacy/image";
import { memo, useEffect, useRef, useState } from "react";
import { DownloadButton } from "../../buttons/downloadButton";
import { Skeleton } from "../../loaders/skeleton";
import { Bolt } from "../assets";
import { CompressResponse } from "../types";
import styles from "./css/compressCard.module.css";
enum CompressionType {
  LOSSY = "LOSSY",
  LOSSLESS = "LOSSLESS",
}
interface CompressionCardProps {
  originalFile: File;
  perfectQuality: boolean;
  setCompressedFileInContext: (compressedFile: CompressResponse) => void;
  setIsProcessingFiles: (processing: boolean) => void;
}

const CompressionCard = ({
  originalFile,
  perfectQuality,
  setCompressedFileInContext,
  setIsProcessingFiles,
}: CompressionCardProps) => {
  const { originalName, originalSize, originalFormat, originalImage } =
    getOriginalFileInfo(originalFile);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isCompressed, setIsCompressed] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);
  const [compressedData, setCompressedData] = useState<CompressResponse | null>(
    null
  );

  // Use a ref to track if the file has been compressed to avoid multiple calls
  const hasCompressed = useRef(false);

  useEffect(() => {
    // Ensure compression runs only once for this file
    if (hasCompressed.current) {
      return;
    }

    const uploadAndCompress = async (file: File) => {
      console.log("perfectQuality", perfectQuality);
      console.log(
        "compressionType",
        perfectQuality ? CompressionType.LOSSLESS : CompressionType.LOSSY
      );
      try {
        setIsProcessingFiles(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
          "compressionType",
          perfectQuality ? CompressionType.LOSSLESS : CompressionType.LOSSY
        );

        const requestConfig: AxiosRequestConfig = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress(progressEvent) {
            if (progressEvent.lengthComputable && progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setUploadProgress(percentCompleted);
            }
          },
          onDownloadProgress(progressEvent) {
            if (progressEvent.lengthComputable && progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setDownloadProgress(percentCompleted);
            }
          },
        };

        const response = await axios.post<CompressResponse>(
          COMPRESS_URL,
          formData,
          requestConfig
        );

        if (response.status === 200) {
          setIsCompressed(true);
          hasCompressed.current = true; // Prevent future re-execution
          setCompressedData(response.data as CompressResponse);
          setCompressedFileInContext(response.data as CompressResponse);
          setIsProcessingFiles(false);
        }
      } catch (error: unknown) {
        console.error("Compression failed message:", error);
        const axiosError = error as AxiosError;
        console.error("Compression failed axiosError:", axiosError);
        if (axiosError.name === "AxiosError") {
          const data = axiosError.response?.data as CompressResponse;
          setCompressedData(data);
          setIsCompressed(false);
          hasCompressed.current = true; // Prevent future re-execution
          setIsProcessingFiles(false);
        }
      }
    };

    uploadAndCompress(originalFile);
  }, [originalFile]); // Dependency on originalFile ensures this only runs once for each file

  const loadingText =
    uploadProgress < 100
      ? "Uploading"
      : uploadProgress === 100 && downloadProgress === 0
      ? "Compressing"
      : downloadProgress > 0 && downloadProgress < 100
      ? "Downloading"
      : null;

  const savedPercentage =
    compressedData?.compressionPercentage &&
    parseInt(compressedData?.compressionPercentage);
  const compressedSize =
    compressedData &&
    formatFileSize(parseFloat(compressedData?.compressedSize));
  const isError = compressedData && compressedData.isError;
  // <ImagePreviewIcon className={styles.defaultImage} />
  const handlePreviewImageError = () => {
    console.error("Error loading image preview");
    setImageLoadError(true);
  };
  return (
    <li className={styles.card}>
      <div className={styles.compressCard}>
        <div className={styles.imageWrapper}>
          <Image
            alt={originalName}
            className={styles.image}
            src={imageLoadError ? IMAGE_PLACEHOLDER : originalImage}
            width={50}
            height={50}
            objectFit="cover"
            quality={75}
            priority={false}
            placeholder={IMAGE_PLACEHOLDER}
            onError={handlePreviewImageError}
          />
        </div>

        {uploadProgress >= 0 &&
          uploadProgress <= 100 &&
          downloadProgress === 0 &&
          !compressedData && (
            <progress
              className={styles.progress}
              value={uploadProgress}
              max={100}
            />
          )}
        {downloadProgress > 0 && downloadProgress <= 100 && !compressedData && (
          <progress
            className={styles.progress}
            value={downloadProgress}
            max={100}
          />
        )}
        <div className={styles.original}>
          <div className={styles.originalInfo}>
            <div className={styles.originalTitle}>{originalName}</div>
            <div className={styles.originalSpecs}>
              <p className={styles.originalFormat}>{originalFormat}</p>
              <p className={styles.originalSize}>{originalSize}</p>
            </div>
          </div>
        </div>

        {!isError && (
          <div className={styles.compressed}>
            <div className={styles.compressedSpecs}>
              <div className={styles.compressedPercent}>
                {!isCompressed && !compressedData?.isError && (
                  <Skeleton
                    width={81}
                    height={17.5}
                    className={styles.skeletonLoading}
                  >
                    {" "}
                    {loadingText}
                  </Skeleton>
                )}
                {isCompressed && (
                  <>
                    <div className={styles.saved}>You Saved</div>
                    <SparklesIcon className={styles.fireIconNative} />
                    <span>{savedPercentage}%</span>
                  </>
                )}
              </div>

              <div className={styles.compressedSize}>
                {compressedData?.compressedSize && (
                  <>
                    <Bolt className={styles.bolt} />
                    <span>{compressedSize}</span>
                  </>
                )}
              </div>
            </div>
            {compressedData?.url && (
              <DownloadButton
                onClick={() => setHasDownloaded(true)}
                ariaLabel={`Download file ${originalName}`}
                url={compressedData?.url || ""}
                className={hasDownloaded ? styles.hasDownloaded : ""}
              >
                <>
                  <span className={styles.downloadButtonText}>
                    {hasDownloaded ? "saved" : "download"}
                  </span>
                  <div className={styles.downloadButtonIconWrapper}>
                    <ArrowDownIcon className={styles.downloadButtonIcon} />
                  </div>
                </>
              </DownloadButton>
            )}
            {/* {!isError && loadingText && (
              <>
                <span className={styles.loadingText}>
                  <Spinner className={styles.spinner} />
                  {loadingText}
                </span>
              </>
            )} */}
          </div>
        )}

        {isError && (
          <span className={styles.compressErrorLabel}>
            {getErrorMessages(compressedData.error)}
          </span>
        )}
      </div>
    </li>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(CompressionCard, (prevProps, nextProps) => {
  return prevProps.originalFile === nextProps.originalFile;
});

const getErrorMessages = (errorMessage: string) => {
  // Error compressing image: getImageFromRequest: Unsupported image format: application/zip

  if (errorMessage.includes("Unsupported image format")) {
    const format = errorMessage.split(":")[3].trim();
    return `Unsupported image format: ${format}`;
  }

  if (errorMessage.includes("Failed to process image with ImageMagick")) {
    // Something happened, the backend couldnt process the image.
    // it may be due to the image´s format, but i cant tell 100% sure. but about 95% sure
    return "Failed";
  }

  return "An error occurred while compressing image";
};
