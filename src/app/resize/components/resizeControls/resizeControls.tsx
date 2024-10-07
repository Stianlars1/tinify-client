import { ImageResponse, ResizedImage } from "@/components/ui/compress/types";
import {
  CustomInput,
  CustomInputLabel,
  CustomInputWrapper,
} from "@/components/ui/form/customInput/customInput";
import { limit } from "@/utils/uploadLimit";
import { RESIZE_URL } from "@/utils/urls";
import axios, { AxiosError } from "axios";
import { ReactElement, useState } from "react";
import { ResizeOptions } from "../resizeContent/resizeContent";
import styles from "./css/resizeControls.module.css";
export const ResizeControls = ({
  images,
  loading,
  updateResizeOptions,
  setResizedImages,
  setLoading,
}: {
  images: File[];
  loading: boolean;
  updateResizeOptions: (options: ResizeOptions) => void;
  setLoading: (loading: boolean) => void;
  setResizedImages: (compressedFile: ResizedImage) => void;
}): ReactElement => {
  const [activeTab, setActiveTab] = useState<"scale" | "pixels">("pixels");
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [scale, setScale] = useState<number | "">("");
  const [keepAspectRatio, setKeepAspectRatio] = useState<boolean>(true);
  const [addCompression, setAddCompression] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!images) {
      return;
    }

    if (width === "" && height === "" && scale === "") {
      return;
    }
    setLoading(true);

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
          // onUploadProgress: (progressEvent) => {
          //   if (progressEvent.total) {
          //     const percentCompleted = Math.round(
          //       (progressEvent.loaded * 100) / progressEvent.total
          //     );
          //   }
          // },
          // onDownloadProgress: (progressEvent) => {
          //   if (progressEvent.total) {
          //     const percentCompleted = Math.round(
          //       (progressEvent.loaded * 100) / progressEvent.total
          //     );
          //   }
          // },
        });
        const data = response.data;
        if (data.isError) {
        } else {
          const resizedImages: ResizedImage = {
            ...data,
            width,
            height,
            scale,
            keepAspectRatio,
          };
          setResizedImages(resizedImages);
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          // Axios error
          const axiosError = err as AxiosError;
          if (axiosError.response && axiosError.response.data) {
            //const data = axiosError.response.data as { error?: string };
            //setError(data.error || "An error occurred during resizing.");
          } else {
            //setError("An error occurred during resizing.");
          }
        } else {
          // Non-Axios error
          console.error(err);

          //setError("An error occurred during resizing.");
        }
      } finally {
      }
    };

    // Collect all promises
    const promises = images.map((file) =>
      limit(() => resizeImages(file)).catch((error) => {
        console.error("Resize failed message:", error);
      })
    );

    // Wait for all promises to resolve
    await Promise.all(promises);

    // Set loading to false after all images are processed
    setLoading(false);
  };

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateResizeOptions({ width: e.target.value });
    setWidth(e.target.value === "" ? "" : parseInt(e.target.value));
  };
  // const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

  return (
    <>
      <div className={styles.resizeControlsWrapper}>
        <div className={styles.tabs}>
          <button
            onClick={() => {
              setScale("");
              updateResizeOptions({
                scale: "",
                width: "",
                height: "",
              });
              setActiveTab("pixels");
            }}
            className={
              activeTab === "pixels"
                ? `${styles.activeTab} ${styles.tab}`
                : `${styles.tab}`
            }
          >
            By pixels
          </button>

          <button
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
            className={
              activeTab === "scale"
                ? `${styles.activeTab} ${styles.tab}`
                : `${styles.tab}`
            }
          >
            By scale
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {activeTab === "pixels" && (
            <>
              <CustomInputWrapper>
                <CustomInputLabel>Width:</CustomInputLabel>
                <CustomInput
                  type="number"
                  width="100%"
                  value={width}
                  onFocus={() => {
                    setScale("");
                  }}
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
                  onFocus={() => {
                    setScale("");
                  }}
                  onChange={(e) => {
                    // if aspect ratio is set, update width to keep aspect ratio

                    updateResizeOptions({ height: e.target.value });
                    setHeight(
                      e.target.value === "" ? "" : parseInt(e.target.value)
                    );
                  }}
                />
              </CustomInputWrapper>
            </>
          )}

          {activeTab === "scale" && (
            <>
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
                      e.target.value === "" ? "" : parseFloat(e.target.value)
                    );
                  }}
                />
              </CustomInputWrapper>
            </>
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
          <button
            className={styles.resizeButton}
            type="submit"
            disabled={loading}
          >
            {images.length > 1 ? "Resize Images" : "Resize image"}
          </button>
        </form>

        {/* {resizedData && (
          <DownloadButton
            ariaLabel={`Download file ${originalName}`}
            url={resizedData?.url || ""}
          >
            <>
              <span className={styles.downloadButtonText}>download</span>
              <div className={styles.downloadButtonIconWrapper}>
                <ArrowDownIcon className={styles.downloadButtonIcon} />
              </div>
            </>
          </DownloadButton>
        )} */}
      </div>
    </>
  );
};
