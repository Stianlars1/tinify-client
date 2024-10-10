// components/cropProcessContainer.tsx

"use client";

import { DropZone } from "@/components/ui/dropzones/dropzone/dropZone";
import { FileUploadContext } from "@/providers/FileProvider";
import { useContext, useMemo } from "react";
import { CropContent } from "../cropContent/cropContent";
import styles from "./css/cropProcessContainer.module.css";

const CropProcessContainer: React.FC = () => {
  const { files, setFiles } = useContext(FileUploadContext);

  const isImageDropped = useMemo(() => {
    return files.length > 0;
  }, [files]);

  const handleOnLoaded = () => {
    setFiles([]);
  };

  return (
    <section className={styles.crop}>
      {!isImageDropped && <DropZone onLoaded={handleOnLoaded} />}

      {isImageDropped && (
        <>
          <CropContent resetFiles={handleOnLoaded} image={files[0]} />
        </>
      )}
    </section>
  );
};

export default CropProcessContainer;
