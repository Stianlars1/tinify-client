"use client";

import { HiddenDropZone } from "@/components/ui/dropzones/hiddenDropzone/hiddenDropzone";
import { FileUploadContext } from "@/providers/FileProvider";
import { useContext, useMemo } from "react";
import { ResizeContent } from "./components/resizeContent/resizeContent";

import dynamic from "next/dynamic";
import styles from "./css/resize.module.css";

const DropZoneDynamic = dynamic(
  () => import("@/components/ui/dropzones/dropzone/dropZone"),
  { ssr: false },
);

export const Resize = () => {
  const { files, setFiles } = useContext(FileUploadContext);

  // make sure to empty the files array on load.
  const handleOnLoaded = () => {
    setFiles([]);
  };

  // Memoize the list of resize cards
  const isImageDropped = useMemo(() => {
    return files.length > 0;
  }, [files]); // Recalculate only when `files` changes

  return (
    <section className={styles.resize}>
      {!isImageDropped && <DropZoneDynamic onLoaded={handleOnLoaded} />}

      {isImageDropped && (
        <>
          <HiddenDropZone />
          <ResizeContent images={files} />
        </>
      )}
    </section>
  );
};
