import { ArrowDownIcon } from "@/assets/icons/icons";
import { ResizedImage } from "@/components/ui/compress/types";
import { getResizeImagesInfo, IMAGE_PLACEHOLDER } from "@/utils/imageUtils";
import NextImage from "next/image";
import { ReactElement, useEffect, useState } from "react";
import {
  ProcessingStatuses,
  ResizeControls,
} from "../resizeControls/resizeControls";
import { ResizeProcessHeader } from "../resizeProcessHeader/resizeProcessHeader";
import styles from "./css/resizeContent.module.css";

export interface OriginalNewImage {
  file: File;
  name: string;
  originalWidth: number;
  originalHeight: number;
}

export interface ResizeOptions {
  width?: string;
  height?: string;
  scale?: string;
  keepAspectRatio?: boolean;
  addCompression?: boolean;
}

const initialOptionsResize = {
  width: undefined,
  height: undefined,
  scale: undefined,
  keepAspectRatio: true,
  addCompression: false,
};
export const ResizeContent = ({ images }: { images: File[] }): ReactElement => {
  const slicedImagesArray = getResizeImagesInfo(images);
  const [resizedImages, setResizedImagesInState] = useState<ResizedImage[]>([]);
  const [imageData, setImageData] = useState<OriginalNewImage[]>([]);
  const [processingStatuses, setProcessingStatuses] =
    useState<ProcessingStatuses>({});

  const [showImageNames, setShowImageName] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resizeOptions, setResizeOptions] =
    useState<ResizeOptions>(initialOptionsResize);
  const isHeaderHidden =
    document
      .getElementById("pageContentHeader")
      ?.getAttribute("data-hide-header") === "true";

  const setResizedImages = (resizedImage: ResizedImage) => {
    setResizedImagesInState((prev) => [...prev, resizedImage]);

    // Update the corresponding image data with resized dimensions
    // setImageData((prevData) =>
    //   prevData.map((data) =>
    //     data.name === resizedImage.originalFilename
    //       ? {
    //           ...data,
    //           resizedWidth: parseInt(resizedImage.width.toString()),
    //           resizedHeight: parseInt(resizedImage.height.toString()),
    //         }
    //       : data
    //   )
    // );
  };

  const updateResizeOptions = (options: ResizeOptions) => {
    setResizeOptions((prevOptions) => ({ ...prevOptions, ...options }));
  };
  useEffect(() => {
    const fetchImageDimensions = async () => {
      const promises = images.map((image) => {
        return new Promise<OriginalNewImage>((resolve, reject) => {
          const img = new Image();
          const url = URL.createObjectURL(image);
          img.onload = () => {
            resolve({
              file: image,
              name: image.name,
              originalWidth: img.width,
              originalHeight: img.height,
            } as OriginalNewImage);
            URL.revokeObjectURL(url);
          };
          img.onerror = () => {
            reject(new Error("Failed to load image"));
            URL.revokeObjectURL(url);
          };
          img.src = url;
        });
      });

      try {
        const data = await Promise.all(promises);
        setImageData(data);
      } catch (error) {
        console.error("Error loading image dimensions:", error);
      }
    };

    fetchImageDimensions();
  }, [images]);

  return (
    <div className={styles.resize}>
      <>
        {!loading && resizedImages.length === 0 && (
          <div
            className={`${styles.resizeContent} ${
              isHeaderHidden ? styles.headerHidden : ""
            }`}
          >
            <div className={styles.resizePreviewContainer}>
              <div className={styles.resizePreviewWrapper}>
                {slicedImagesArray.map((originalInfo, index) => {
                  const indeX = index + 1;
                  return (
                    <NextImage
                      alt="preview"
                      src={originalInfo.originalImage || IMAGE_PLACEHOLDER}
                      width={150}
                      height={150}
                      priority={true}
                      quality={indeX === 1 ? 100 : 20}
                      fetchPriority={indeX === 1 ? "high" : "low"}
                      key={indeX}
                      className={`${styles.resizePreviewImage} ${
                        indeX === 1
                          ? styles.firstImage
                          : indeX === 2
                            ? styles.secondImage
                            : styles.thirdImage
                      }`}
                      style={{ pointerEvents: "none" }}
                    />
                  );
                })}
              </div>
              <>
                <h3>Total images: {images.length}</h3>
                <ol className={styles.imageNames}>
                  {imageData
                    .slice(0, showImageNames ? undefined : 3)
                    .map((image, index) => {
                      return (
                        <ResizePreviewImageSpecs
                          key={index}
                          image={image}
                          index={index}
                          resizeOptions={resizeOptions}
                        />
                      );
                    })}
                </ol>
                {imageData.length > 3 && (
                  <button
                    className={styles.showHideImageNamesButton}
                    onClick={() => setShowImageName(!showImageNames)}
                  >
                    {showImageNames ? "Show less" : "Show all"}
                  </button>
                )}
              </>
            </div>

            <ArrowDownIcon className={styles.arrowRight} />

            <ResizeControls
              setResizedImages={setResizedImages}
              images={images}
              loading={loading}
              setLoading={setLoading}
              updateResizeOptions={updateResizeOptions}
              setProcessingStatuses={setProcessingStatuses}
            />
          </div>
        )}

        {(loading || resizedImages.length > 0) && (
          <ResizeProcessHeader
            isProcessing={loading}
            compressedFiles={resizedImages}
            totalFiles={images.length}
            imageData={imageData}
            resizeOptions={resizeOptions}
            processingStatuses={processingStatuses}
          />
        )}
      </>
    </div>
  );
};

const ResizePreviewImageSpecs = ({
  image,
  index,
  resizeOptions,
}: {
  image: OriginalNewImage;
  index: number;
  resizeOptions: ResizeOptions;
}) => {
  const indexDisplay = index + 1;

  // Initialize intended dimensions
  let intendedWidth: number | undefined = undefined;
  let intendedHeight: number | undefined = undefined;

  if (resizeOptions) {
    const { scale, keepAspectRatio, width, height } = resizeOptions;

    if (scale) {
      const scaleValue = parseFloat(scale);
      if (keepAspectRatio) {
        intendedWidth = Math.round(image.originalWidth * scaleValue);
        intendedHeight = Math.round(image.originalHeight * scaleValue);
      } else {
        // If not keeping aspect ratio, scale width and height independently
        const scaleWidth = parseFloat(width || "1");
        const scaleHeight = parseFloat(height || "1");
        intendedWidth = Math.round(image.originalWidth * scaleWidth);
        intendedHeight = Math.round(image.originalHeight * scaleHeight);
      }
    } else {
      if (keepAspectRatio) {
        if (width && !height) {
          intendedWidth = parseInt(width, 10);
          const aspectRatio = image.originalHeight / image.originalWidth;
          intendedHeight = Math.round(intendedWidth * aspectRatio);
        } else if (height && !width) {
          intendedHeight = parseInt(height, 10);
          const aspectRatio = image.originalWidth / image.originalHeight;
          intendedWidth = Math.round(intendedHeight * aspectRatio);
        } else if (width && height) {
          // If both are set, calculate scale based on one dimension to maintain aspect ratio
          const scaleWidth = parseFloat(width) / image.originalWidth;
          const scaleHeight = parseFloat(height) / image.originalHeight;
          const scaleValue = Math.min(scaleWidth, scaleHeight);
          intendedWidth = Math.round(image.originalWidth * scaleValue);
          intendedHeight = Math.round(image.originalHeight * scaleValue);
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

  return (
    <li className={styles.imageInfo} key={image.file.lastModified}>
      <span className={styles.actualName}>
        <span>{indexDisplay}. </span>
        {image.name}
      </span>
      <div className={styles.sizeTags}>
        <span className={styles.fromSizeTag}>
          {image.originalWidth} x {image.originalHeight}
        </span>
        {intendedWidth && intendedHeight && (
          <>
            →
            <span className={styles.toSizeTag}>
              {" "}
              {intendedWidth} x {intendedHeight}
            </span>
          </>
        )}
      </div>
    </li>
  );
};
