import { ImageResponse, ResizedImage } from "@/components/ui/compress/types";
import {
  CustomInput,
  CustomInputLabel,
  CustomInputWrapper,
} from "@/components/ui/form/customInput/customInput";
import { limit } from "@/utils/uploadLimit";
import { RESIZE_URL } from "@/utils/urls";
import axios, { AxiosError } from "axios";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import { ResizeOptions } from "../resizeContent/resizeContent";
import styles from "./css/resizeControls.module.css";

export interface ProcessingStatus {
  fileName: string;
  progress: number;
  status: "uploading" | "processing" | "completed" | "error";
  error?: string;
}
export type ProcessingStatuses = Record<string, ProcessingStatus>;

interface ResizeErrorResponse {
  error: string;
  isError: true;
}

export const ResizeControls = ({
  images,
  loading,
  updateResizeOptions,
  setResizedImages,
  setLoading,
  setProcessingStatuses,
}: {
  images: File[];
  loading: boolean;
  updateResizeOptions: (options: ResizeOptions) => void;
  setLoading: (loading: boolean) => void;
  setResizedImages: (compressedFile: ResizedImage) => void;
  setProcessingStatuses: Dispatch<SetStateAction<ProcessingStatuses>>;
}): ReactElement => {
  const [activeTab, setActiveTab] = useState<"scale" | "pixels">("pixels");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [scale, setScale] = useState<number | "">("");
  const [keepAspectRatio, setKeepAspectRatio] = useState<boolean>(true);
  const [addCompression, setAddCompression] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateFileStatus = (
    fileName: string,
    updates: Partial<ProcessingStatus>,
  ) => {
    setProcessingStatuses((prev) => ({
      ...prev,
      [fileName]: {
        ...prev[fileName],
        ...updates,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!images || (width === "" && height === "" && scale === "")) {
      return;
    }

    setLoading(true);

    // Initialize processing statuses
    const initialStatuses: Record<string, ProcessingStatus> = {};
    images.forEach((file) => {
      initialStatuses[file.name] = {
        fileName: file.name,
        progress: 0,
        status: "uploading",
      };
    });
    setProcessingStatuses(initialStatuses);

    const resizeImages = async (imageFile: File) => {
      try {
        const formData = new FormData();
        formData.append("file", imageFile);

        if (width !== "") {
          formData.append("width", width.toString());
        }
        if (height !== "") {
          formData.append("height", height.toString());
        }
        if (scale !== "") {
          formData.append("scale", scale.toString());
        }
        formData.append("keepAspectRatio", keepAspectRatio.toString());
        formData.append("compress", addCompression.toString());

        const response = await axios.post<ImageResponse>(RESIZE_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              updateFileStatus(imageFile.name, {
                progress: percentCompleted,
                status: "uploading",
              });
            }
          },
          onDownloadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              updateFileStatus(imageFile.name, {
                progress: percentCompleted,
                status: "processing",
              });
            }
          },
        });

        const data = response.data;
        if (data.isError) {
          updateFileStatus(imageFile.name, {
            status: "error",
            error: data.error || "Unknown error occurred",
          });
          throw new Error(data.error || "Image processing failed");
        }

        const resizedImages: ResizedImage = {
          ...data,
          width,
          height,
          scale,
          keepAspectRatio,
        };

        updateFileStatus(imageFile.name, {
          status: "completed",
          progress: 100,
        });

        setResizedImages(resizedImages);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError<ResizeErrorResponse>;
          const errorMessage =
            axiosError.response?.data?.error ||
            axiosError.message ||
            "An error occurred during processing";

          updateFileStatus(imageFile.name, {
            status: "error",
            error: errorMessage,
          });

          throw new Error(errorMessage);
        }

        updateFileStatus(imageFile.name, {
          status: "error",
          error: "Unknown error occurred",
        });

        throw err;
      }
    };

    try {
      const promises = images.map((file) =>
        limit(() => resizeImages(file)).catch((error) => {
          console.error("Resize failed:", error);
          setError(`Failed to process ${file.name}: ${error.message}`);
        }),
      );

      await Promise.all(promises);
    } finally {
      setLoading(false);
    }
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateResizeOptions({ width: e.target.value });
    setWidth(e.target.value === "" ? "" : parseInt(e.target.value));
  };

  return (
    <>
      <div className={styles.resizeControlsWrapper}>
        <div className={styles.tabs}>
          <button
            type="button"
            onClick={() => {
              setScale("");
              updateResizeOptions({
                scale: "",
                width: "",
                height: "",
              });
              setActiveTab("pixels");
            }}
            className={`${styles.tab} ${activeTab === "pixels" ? styles.activeTab : ""}`}
          >
            By pixels
          </button>

          <button
            type="button"
            onClick={() => {
              setWidth("");
              setHeight("");
              updateResizeOptions({
                scale: "",
                width: "",
                height: "",
              });
              setActiveTab("scale");
            }}
            className={`${styles.tab} ${activeTab === "scale" ? styles.activeTab : ""}`}
          >
            By scale
          </button>
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <form className={styles.form} onSubmit={handleSubmit}>
          {activeTab === "pixels" && (
            <>
              <CustomInputWrapper>
                <CustomInputLabel>Width:</CustomInputLabel>
                <CustomInput
                  type="number"
                  width="100%"
                  value={width}
                  onFocus={() => setScale("")}
                  onChange={handleWidthChange}
                />
              </CustomInputWrapper>
              <CustomInputWrapper>
                <CustomInputLabel>Height:</CustomInputLabel>
                <CustomInput
                  width="100%"
                  type="number"
                  value={height}
                  placeholder={
                    keepAspectRatio && width !== undefined && width !== ""
                      ? "auto"
                      : ""
                  }
                  onFocus={() => setScale("")}
                  onChange={(e) => {
                    updateResizeOptions({ height: e.target.value });
                    setHeight(
                      e.target.value === "" ? "" : parseInt(e.target.value),
                    );
                  }}
                />
              </CustomInputWrapper>
            </>
          )}

          {activeTab === "scale" && (
            <CustomInputWrapper>
              <CustomInputLabel>Scale (e.g., 0.5 for 50%):</CustomInputLabel>
              <CustomInput
                width="100%"
                type="number"
                step="0.01"
                value={scale}
                onChange={(e) => {
                  updateResizeOptions({ scale: e.target.value });
                  setScale(
                    e.target.value === "" ? "" : parseFloat(e.target.value),
                  );
                }}
              />
            </CustomInputWrapper>
          )}

          <CustomInputWrapper>
            <CustomInputLabel className={styles.checkbox}>
              <CustomInput
                type="checkbox"
                checked={keepAspectRatio || activeTab === "scale"}
                disabled={activeTab === "scale"}
                onChange={(e) => {
                  updateResizeOptions({ keepAspectRatio: e.target.checked });
                  setKeepAspectRatio(e.target.checked);
                }}
              />
              Keep Aspect Ratio
            </CustomInputLabel>
          </CustomInputWrapper>

          <CustomInputWrapper>
            <CustomInputLabel className={styles.checkbox}>
              <CustomInput
                type="checkbox"
                checked={addCompression}
                onChange={(e) => {
                  updateResizeOptions({ addCompression: e.target.checked });
                  setAddCompression(e.target.checked);
                }}
              />
              Compression
            </CustomInputLabel>
          </CustomInputWrapper>

          {/*            {Object.values(processingStatuses).map(status => (
                <div key={status.fileName} className={styles.processingStatus}>
                  <div className={styles.fileName}>{status.fileName}</div>
                  <div className={styles.progressBar}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${status.progress}%` }}
                    />
                  </div>
                  <div className={styles.status}>
                    {status.status === 'uploading' && 'Uploading...'}
                    {status.status === 'processing' && 'Processing...'}
                    {status.status === 'completed' && 'Completed'}
                    {status.status === 'error' && `Error: ${status.error}`}
                  </div>
                </div>
            ))}*/}

          <button
            className={styles.resizeButton}
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : images.length > 1
                ? "Resize Images"
                : "Resize image"}
          </button>
        </form>
      </div>
    </>
  );
};
