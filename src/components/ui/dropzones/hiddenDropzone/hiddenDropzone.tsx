"use client";
import { FileUploadContext } from "@/providers/FileProvider";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./css/hiddenDropzone.module.css";

export const HiddenDropZone = () => {
  const context = useContext(FileUploadContext);
  const { files, setFiles } = context;
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  useEffect(() => {
    const handleDragEnter = (event: any) => {
      //typescript-eslint.io/rules/no-explicit-any
      https: event.preventDefault();
      dragCounter.current++;
      if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (event: any) => {
      event.preventDefault();
      dragCounter.current--;
      if (dragCounter.current === 0) {
        setIsDragging(false);
      }
    };

    const handleDragOver = (event: any) => {
      event.preventDefault();
    };

    window.addEventListener("dragenter", handleDragEnter);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("dragover", handleDragOver);

    return () => {
      window.removeEventListener("dragenter", handleDragEnter);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("dragover", handleDragOver);
    };
  }, [files, setFiles]);

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    if (files && setFiles && droppedFiles.length > 0) {
      setFiles([...files, ...droppedFiles]);
    }
    setIsDragging(false);
    dragCounter.current = 0;
  };

  return (
    <>
      {isDragging && (
        <div
          className={`${styles.hiddenDropzone} ${styles.isOver}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <div className={styles.backdropText}>Drop&apos;em 🔥</div>
        </div>
      )}
    </>
  );
};
