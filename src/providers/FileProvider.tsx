"use client";
import { ImageResponse } from "@/components/ui/compress/types";
import { createContext, ReactNode, useState } from "react";

interface FileUploadContextType {
  files: File[];
  compressedFiles: ImageResponse[];
  setFiles: (files: File[]) => void;
  setCompressedFiles: (files: ImageResponse[]) => void;
}

export const FileUploadContext = createContext<FileUploadContextType>({
  files: [],
  setFiles: () => {},
  compressedFiles: [],
  setCompressedFiles: () => {},
});

export const FileUploadProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [compressedFiles, setCompressedFiles] = useState<ImageResponse[]>([]);

  return (
    <FileUploadContext.Provider
      value={{ files, setFiles, compressedFiles, setCompressedFiles }}
    >
      {children}
    </FileUploadContext.Provider>
  );
};
