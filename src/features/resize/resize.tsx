"use client";
import { DropZone } from "@/components/ui/dropzone/dropZone";
import { FileUploadContext } from "@/providers/FileProvider";
import { useContext, useMemo } from "react";
import { ResizeContent } from "./components/resizeContent/resizeContent";
import styles from "./css/resize.module.css";
export const Resize = () => {
  const { files, setFiles } = useContext(FileUploadContext);

  // make sure to empty the files array on load.
  const handleOnLoaded = () => {
    setFiles([]);
  };

  // Memoize the list of compression cards
  const isImageDropped = useMemo(() => {
    return files.length > 0;
  }, [files]); // Recalculate only when `files` changes

  return (
    <>
      <section className={styles.resize}>
        {!isImageDropped && <DropZone onLoaded={handleOnLoaded} />}

        {isImageDropped && <ResizeContent images={files} />}
      </section>
    </>
  );
};
