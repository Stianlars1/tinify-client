import { ImageResponse } from "@/components/ui/compress/types";
import {
  CustomInput,
  CustomInputLabel,
  CustomInputWrapper,
} from "@/components/ui/form/customInput/customInput";
import limit from "@/utils/uploadLimit";
import { RESIZE_URL } from "@/utils/urls";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export const ResizeControls = ({
  images,
  loading,
  setResizedImages,
  setLoading,
}: {
  images: File[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  setResizedImages: (compressedFile: ImageResponse) => void;
}) => {
  const [width, setWidth] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [scale, setScale] = useState<number | "">("");
  const [keepAspectRatio, setKeepAspectRatio] = useState<boolean>(true);

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
        console.log("response", response);
        const data = response.data;
        if (data.isError) {
        } else {
          setResizedImages(data as ImageResponse);
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          // Axios error
          const axiosError = err as AxiosError;
          if (axiosError.response && axiosError.response.data) {
            const data = axiosError.response.data as { error?: string };
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

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <CustomInputWrapper>
            <CustomInputLabel>Width:</CustomInputLabel>
            <CustomInput
              type="number"
              disabled={scale !== ""}
              value={width}
              onFocus={() => {
                setScale("");
              }}
              onChange={(e) =>
                setWidth(e.target.value === "" ? "" : parseInt(e.target.value))
              }
            />
          </CustomInputWrapper>
          <CustomInputWrapper>
            <CustomInputLabel>Height:</CustomInputLabel>
            <CustomInput
              type="number"
              disabled={scale !== ""}
              value={height}
              onFocus={() => {
                setScale("");
              }}
              onChange={(e) =>
                setHeight(e.target.value === "" ? "" : parseInt(e.target.value))
              }
            />
          </CustomInputWrapper>
          <CustomInputWrapper>
            <CustomInputLabel>Scale (e.g., 0.5 for 50%):</CustomInputLabel>
            <CustomInput
              type="number"
              disabled={width !== "" || height !== ""}
              step="0.01"
              value={scale}
              onChange={(e) =>
                setScale(
                  e.target.value === "" ? "" : parseFloat(e.target.value)
                )
              }
            />
          </CustomInputWrapper>
          <CustomInputWrapper>
            <CustomInputLabel>
              <CustomInput
                type="checkbox"
                checked={keepAspectRatio}
                onFocus={() => {
                  setWidth("");
                  setHeight("");
                }}
                onChange={(e) => setKeepAspectRatio(e.target.checked)}
              />
              Keep Aspect Ratio
            </CustomInputLabel>
          </CustomInputWrapper>
          <button type="submit" disabled={loading}>
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
