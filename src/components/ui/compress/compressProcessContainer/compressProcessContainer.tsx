"use client";
import { FileUploadContext } from "@/providers/FileProvider";
import { useContext, useMemo, useState } from "react";
import CompressionCard from "../compressCard/compressCard";
import { CompressProcessHeader } from "../compressProcessHeader/compressProcessHeader";
import { CompressResponse } from "../types";
import styles from "./css/compressProcessContainer.module.css";
const CompressProcessContainer = () => {
  const context = useContext(FileUploadContext);
  const { files } = context;
  const [compressedFiles, setCompressedFiles] = useState<CompressResponse[]>(
    []
  );
  const [perfectQuality, setPerfectQuality] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const setCompressedFileInContext = (compressedFile: CompressResponse) => {
    setCompressedFiles((prev) => [...prev, compressedFile]);
  };

  const setIsProcessingFiles = (processing: boolean) => {
    setIsProcessing(() => processing);
  };
  // Memoize the list of compression cards
  const fileCards = useMemo(() => {
    return files.map((file) => (
      <CompressionCard
        key={file.name + file.lastModified}
        originalFile={file}
        setCompressedFileInContext={setCompressedFileInContext}
        setIsProcessingFiles={setIsProcessingFiles}
        perfectQuality={perfectQuality}
      />
    ));
  }, [files]); // Recalculate only when `files` changes

  const handleQualityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setPerfectQuality(isChecked);
  };
  return (
    <div>
      <label>Perfect quality</label>
      <input type="checkbox" onChange={handleQualityChange} />
      {files.length > 0 ? (
        <div>
          <CompressProcessHeader
            isProcessing={isProcessing}
            compressedFiles={compressedFiles}
          />

          <ul className={styles.cardsList}>{fileCards}</ul>
        </div>
      ) : (
        <p>No files uploaded yet</p>
      )}
    </div>
  );
};

export default CompressProcessContainer;
