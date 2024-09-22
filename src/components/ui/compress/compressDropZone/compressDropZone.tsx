"use client";
import { ImageUploadV2 } from "@/assets/lotties/lotties";
import { useDarkMode } from "@/hooks/useDarkmode";
import { FileUploadContext } from "@/providers/FileProvider";
import Image from "next/image";
import { useContext, useState } from "react";
import styles from "./css/compressDropZone.module.css";

const CompressDropZone = () => {
  const context = useContext(FileUploadContext);
  const { files, setFiles } = context;
  const [isOver, setIsOver] = useState(false);
  const [hasDropped, setHasDropped] = useState(false);
  const isDarkMode = useDarkMode();
  const BOX_DARK_URL = "/assets/box/v3/box_black_v3.png";
  const BOX_LIGHT_URL = "/assets/box/v3/box_beige_v3.png";
  const BOX_CLOSED_LIGHT_URL = "/assets/box/v3/box_closed_beige.png";
  const BOX_CLOSED_BLACK_URL = "/assets/box/v3/box_closed_black.png";
  const IS_HOVERING_IMAGE = isDarkMode ? BOX_LIGHT_URL : BOX_DARK_URL;
  const HAS_DROPPED_IMAGE = isDarkMode
    ? BOX_CLOSED_LIGHT_URL
    : BOX_CLOSED_BLACK_URL;

  const onDrop = () => {
    setHasDropped(true);
    setIsOver(false);

    setTimeout(() => {
      setHasDropped(false);
    }, 2500);
  };
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files); // Convert FileList to Array
    if (files && setFiles && droppedFiles.length > 0) {
      setFiles([...files, ...droppedFiles]); // Append new files to existing files
    }
    onDrop();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []); // Convert FileList to Array
    if (files && setFiles && selectedFiles.length > 0) {
      setFiles([...files, ...selectedFiles]); // Append new files to existing files
    }
    onDrop();
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    setIsOver(false);
  };
  return (
    <>
      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`${styles.compressDropZone} ${isOver ? styles.isOver : ""}`}
        htmlFor="compress-dropzone"
      >
        {!isOver && !hasDropped && <ImageUploadV2 />}
        {hasDropped && (
          <Image
            alt="Image dropped"
            src={HAS_DROPPED_IMAGE}
            width={100}
            height={100}
            className="imageUpload"
          />
        )}
        {isOver && !hasDropped && (
          <Image
            alt="Image dropped"
            src={IS_HOVERING_IMAGE}
            width={100}
            height={100}
            className="imageUpload"
          />
        )}
        Drop your files here
      </label>
      <input
        onChange={handleChange}
        style={{ display: "none" }}
        type="file"
        multiple
        id="compress-dropzone"
      />
    </>
  );
};
export default CompressDropZone;
