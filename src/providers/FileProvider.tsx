"use client";
import { CompressResponse } from "@/components/ui/compress/types";
import { createContext, ReactNode, useState } from "react";

interface FileUploadContextType {
  files: File[];
  compressedFiles: CompressResponse[];
  setFiles: (files: File[]) => void;
  setCompressedFiles: (files: CompressResponse[]) => void;
}

export const FileUploadContext = createContext<FileUploadContextType>({
  files: [],
  setFiles: () => {},
  compressedFiles: [],
  setCompressedFiles: () => {},
});

export default function FileUploadProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [compressedFiles, setCompressedFiles] = useState<CompressResponse[]>(
    []
  );

  return (
    <FileUploadContext.Provider
      value={{ files, setFiles, compressedFiles, setCompressedFiles }}
    >
      {children}
    </FileUploadContext.Provider>
  );
}
