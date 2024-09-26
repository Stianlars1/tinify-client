"use client";

import { FileUploadProvider } from "@/providers/FileProvider";
import { ReactElement } from "react";

export function Providers({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return <FileUploadProvider>{children}</FileUploadProvider>;
}
