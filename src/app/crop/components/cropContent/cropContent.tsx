// components/cropContent/cropContent.tsx

"use client";

import { ImageResponse } from "@/components/ui/compress/types";
import { Spinner } from "@/components/ui/loaders/loaders";
import { CROP_URL } from "@/utils/urls";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { centerCrop, Crop, makeAspectCrop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { CropControls } from "../cropControls/cropControls";
import ImageCropper from "../imageCropper/imageCropper";
import { ResultProcessContainer } from "../resultProcessContainer/resultProcessContainer";
import styles from "./css/cropContent.module.css";

interface CropContentProps {
  image: File;
  resetFiles: () => void;
}

export const CropContent: React.FC<CropContentProps> = ({
  image,
  resetFiles,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>({
    unit: "%", // Can be 'px' or '%'
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const [aspect, setAspect] = useState<number | undefined>(1); // 1:1 aspect ratio default
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [hasLoadedImage, setHasLoadedImage] = useState<boolean>(false);

  // State variables for processing
  const [processing, setProcessing] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [imageResponse, setImageResponse] = useState<ImageResponse | null>(
    null,
  );

  useEffect(() => {
    const reader = new FileReader();

    reader.onload = () => {
      const imgSrc = reader.result as string;
      setImageSrc(imgSrc);
    };

    reader.readAsDataURL(image);
  }, [image]);

  // Helper function to center the crop with the new aspect ratio
  const centerAspectCrop = (
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
  ): Crop => {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    );
  };

  const handleAspectChange = (newAspect: number | undefined) => {
    setAspect(newAspect);

    if (imgRef.current) {
      const { naturalWidth: width, naturalHeight: height } = imgRef.current;

      let newCrop: Crop;

      if (newAspect) {
        // If an aspect ratio is defined, create a new crop with that aspect ratio
        newCrop = centerAspectCrop(width, height, newAspect);
      } else {
        // If free aspect ratio, reset the crop to cover the whole image
        newCrop = {
          unit: "%",
          x: 0,
          y: 0,
          width: 100,
          height: 100,
        };
      }

      setCrop(newCrop);
    }
  };

  const onImageLoaded = (img: HTMLImageElement) => {
    imgRef.current = img;
    setHasLoadedImage(true);
    const { naturalWidth: width, naturalHeight: height } = img;

    let newCrop: Crop;

    if (aspect) {
      newCrop = centerAspectCrop(width, height, aspect);
    } else {
      newCrop = {
        unit: "%",
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      };
    }

    setCrop(newCrop);
  };

  // Recalculate completedCrop whenever crop changes
  useEffect(() => {
    if (imgRef.current && crop.width && crop.height) {
      const img = imgRef.current;
      const { naturalWidth: width, naturalHeight: height } = img;

      const pixelCrop: PixelCrop = {
        unit: "px",
        x: (crop.x / 100) * width,
        y: (crop.y / 100) * height,
        width: (crop.width / 100) * width,
        height: (crop.height / 100) * height,
      };

      setCompletedCrop(pixelCrop);
    }
  }, [crop, imgRef.current]);

  const handleCrop = async () => {
    if (!completedCrop) {
      alert("Please select an area to crop.");
      return;
    }

    setProcessing(true);
    setUploadProgress(0);
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("x", Math.round(completedCrop.x).toString());
      formData.append("y", Math.round(completedCrop.y).toString());
      formData.append("width", Math.round(completedCrop.width).toString());
      formData.append("height", Math.round(completedCrop.height).toString());

      const response = await axios.post<ImageResponse>(CROP_URL, formData, {
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            setUploadProgress(percentCompleted);
          }
        },
      });

      const data = response.data;
      setImageResponse(data);
    } catch (error) {
      console.error("Error cropping image:", error);
      alert("An error occurred while cropping the image.");
    } finally {
      setProcessing(false);
    }
  };

  const handleCancel = () => {
    setImageSrc(null);
    setImageResponse(null);
    setProcessing(false);
    setCrop({
      unit: "%",
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
    setCompletedCrop(null);
    setAspect(undefined);
    if (typeof window !== "undefined") {
      document.body.setAttribute("data-hide-header", "false");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return resetFiles();
  };

  const showCropper = imageSrc && !imageResponse && !processing;
  const showProcessing = processing && !imageResponse;
  const showResult = !processing && imageResponse;
  const showControls = !processing && imageSrc;

  const isLoading = !hasLoadedImage;

  return (
    <div className={styles.cropContent}>
      {isLoading && (
        <Spinner style={{ borderWidth: "3px", margin: "200px" }} size={32} />
      )}

      {showProcessing && (
        <ResultProcessContainer
          uploadProgress={uploadProgress}
          imageResponse={null}
          processing={processing}
        />
      )}
      {showResult && (
        <ResultProcessContainer
          uploadProgress={100}
          imageResponse={imageResponse}
          processing={false}
        />
      )}

      {showCropper && (
        <div className={styles.cropContainer}>
          <ImageCropper
            imageSrc={imageSrc}
            aspect={aspect}
            crop={crop}
            setCrop={setCrop}
            onCropComplete={setCompletedCrop}
            onImageLoaded={onImageLoaded}
          />
          {showControls && (
            <CropControls
              handleAspectChange={handleAspectChange}
              aspect={aspect}
              handleCrop={handleCrop}
              handleCancel={handleCancel}
              processing={processing}
            />
          )}
        </div>
      )}
    </div>
  );
};
