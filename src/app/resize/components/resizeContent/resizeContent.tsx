import { ArrowDownIcon } from "@/assets/icons/icons";
import { ResizedImages } from "@/components/ui/compress/types";
import { getResizeImagesInfo, IMAGE_PLACEHOLDER } from "@/utils/imageUtils";
import Image from "next/image";
import { ReactElement, useState } from "react";
import { ResizeControls } from "../resizeControls/resizeControls";
import { ResizeProcessHeader } from "../resizeProcessHeader/resizeProcessHeader";
import styles from "./css/resizeContent.module.css";
export const ResizeContent = ({ images }: { images: File[] }): ReactElement => {
  const slicedImagesArray = getResizeImagesInfo(images);
  const [resizedImages, setResizedImagesInState] = useState<ResizedImages[]>(
    []
  );
  const [showImageNames, setShowImageName] = useState(false);
  const [loading, setLoading] = useState(false);

  const isHeaderHidden =
    document
      .getElementById("pageContentHeader")
      ?.getAttribute("data-hide-header") === "true";

  const setResizedImages = (compressedFile: ResizedImages) => {
    setResizedImagesInState((prev) => [...prev, compressedFile]);
  };

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
                      // style={{
                      //   zIndex: -indeX,
                      //   left: indeX === 1 ? "50%" : indeX === 2 ? "70%" : "90%",
                      //   top: indeX === 1 ? "50%" : indeX === 2 ? "30%" : "10%",
                      //   transform: `translateX(${
                      //     indeX === 1 ? "-50%" : indeX === 2 ? "-70%" : "-90%"
                      //   }) translateY(${
                      //     indeX === 1 ? "-50%" : indeX === 2 ? "-30%" : "-10%"
                      //   }) scale(${indeX === 1 ? 1 : indeX === 2 ? 0.95 : 0.9}) `,
                      // }}
                    />
                  );
                })}
              </div>
              <>
                <h3>Total images: {images.length}</h3>
                <ol className={styles.imageNames}>
                  {images
                    .slice(0, showImageNames ? undefined : 3)
                    .map((image, index) => (
                      <li className={styles.imageName} key={index}>
                        {image.name}
                      </li>
                    ))}
                </ol>
                <button
                  className={styles.showHideImageNamesButton}
                  onClick={() => setShowImageName(!showImageNames)}
                >
                  {showImageNames ? "Show less" : "Show all"}
                </button>
              </>
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
            totalFiles={images.length}
          />
        )}
      </>
    </div>
  );
};
