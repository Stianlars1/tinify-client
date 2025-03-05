// components/cropProcessContainer.tsx

"use client";

import { FileUploadContext } from "@/providers/FileProvider";
import { useContext, useMemo } from "react";
import { CropContent } from "../cropContent/cropContent";
import dynamic from "next/dynamic";
import styles from "./css/cropProcessContainer.module.css";

const DropZoneDynamic = dynamic(
  () => import("@/components/ui/dropzones/dropzone/dropZone"),
  { ssr: false },
);

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
      {!isImageDropped && <DropZoneDynamic onLoaded={handleOnLoaded} />}

      {isImageDropped && (
        <>
          <CropContent resetFiles={handleOnLoaded} image={files[0]} />
        </>
      )}
    </section>
  );
};

export default CropProcessContainer;
