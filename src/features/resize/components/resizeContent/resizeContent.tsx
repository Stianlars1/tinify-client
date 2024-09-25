import { ArrowDownIcon } from "@/assets/icons/icons";
import { ImageResponse } from "@/components/ui/compress/types";
import { getResizeImagesInfo, IMAGE_PLACEHOLDER } from "@/utils/imageUtils";
import Image from "next/image";
import { useState } from "react";
import { ResizeControls } from "../resizeControls/resizeControls";
import { ResizeProcessHeader } from "../resizeProcessHeader/resizeProcessHeader";
import styles from "./css/resizeContent.module.css";
export const ResizeContent = ({ images }: { images: File[] }) => {
  const slicedImagesArray = getResizeImagesInfo(images);
  const [resizedImages, setResizedImagesInState] = useState<ImageResponse[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const setResizedImages = (compressedFile: ImageResponse) => {
    setResizedImagesInState((prev) => [...prev, compressedFile]);
  };

  console.log("Loading", loading);

  return (
    <>
      {!loading && resizedImages.length === 0 && (
        <div className={styles.resizeContent}>
          <div className={styles.resizePreviewWrapper}>
            {slicedImagesArray.map((originalInfo, index) => {
              const indeX = index + 1;
              return (
                <Image
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
                  objectFit="cover"
                  objectPosition="center"
                  style={{
                    zIndex: -indeX,
                    left: indeX === 1 ? "50%" : indeX === 2 ? "70%" : "90%",
                    top: indeX === 1 ? "50%" : indeX === 2 ? "30%" : "10%",
                    transform: `translateX(${
                      indeX === 1 ? "-50%" : indeX === 2 ? "-70%" : "-90%"
                    }) translateY(${
                      indeX === 1 ? "-50%" : indeX === 2 ? "-30%" : "-10%"
                    }) scale(${indeX === 1 ? 1 : indeX === 2 ? 0.95 : 0.9}) `,
                  }}
                />
              );
            })}
          </div>

          <ArrowDownIcon className={styles.arrowRight} />

          <ResizeControls
            setResizedImages={setResizedImages}
            images={images}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      )}

      {(loading || resizedImages.length > 0) && (
        <ResizeProcessHeader
          isProcessing={loading}
          compressedFiles={resizedImages}
        />
      )}
    </>
  );
};
