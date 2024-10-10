// components/imageCropper/imageCropper.tsx

"use client";

import React, { useRef } from "react";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface ImageCropperProps {
  imageSrc: string;
  aspect?: number;
  crop: Crop;
  setCrop: React.Dispatch<React.SetStateAction<Crop>>;
  onCropComplete: (pixelCrop: PixelCrop) => void;
  onImageLoaded: (img: HTMLImageElement) => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({
  imageSrc,
  aspect,
  crop,
  setCrop,
  onCropComplete,
  onImageLoaded,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const onLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    imgRef.current = img;
    onImageLoaded(img);
  };

  return (
    <ReactCrop
      crop={crop}
      onChange={(newCrop) => setCrop(newCrop)}
      onComplete={(c) => {
        if (imgRef.current && c.width && c.height) {
          const img = imgRef.current;

          // Calculate the scaling factors
          const scaleX = img.naturalWidth / img.width;
          const scaleY = img.naturalHeight / img.height;

          // Calculate the pixel crop
          const pixelCrop: PixelCrop = {
            unit: "px",
            x: c.x * scaleX,
            y: c.y * scaleY,
            width: c.width * scaleX,
            height: c.height * scaleY,
          };

          onCropComplete(pixelCrop);
        }
      }}
      aspect={aspect}
    >
      <img src={imageSrc} alt="Source" onLoad={onLoad} ref={imgRef} />
    </ReactCrop>
  );
};

export default ImageCropper;
