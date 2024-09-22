"use client";
import { createContext, ReactNode, useState } from "react";

interface FileDownloadContextType {
  compressedFiles: File[];
  setCompressedFiles: (files: File[]) => void;
}

export const FileDownloadContext = createContext<FileDownloadContextType>({
  compressedFiles: [],
  setCompressedFiles: () => {},
});

export default function FileUploadProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [compressedFiles, setCompressedFiles] = useState<File[]>([]);

  return (
    <FileDownloadContext.Provider
      value={{ compressedFiles, setCompressedFiles }}
    >
      {children}
    </FileDownloadContext.Provider>
  );
}

// expected usage
// const context = useContext(FileDownloadContext);
// const { compressedFile } = context;
