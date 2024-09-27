import { PageContent } from "@/components/layout/pageContent/pageContent";
import { TinifyServices } from "@/types";

import { Resize } from "@/app/resize/resize";
import { ResizeSections } from "@/features/resizeSections/resizeSections";
import { FileUploadProvider } from "@/providers/FileProvider";
import { Metadata, Viewport } from "next";
import { resizeMeta } from "./metadata";
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b " },
  ],
};

export const metadata: Metadata = resizeMeta;

export default async function ResizePage() {
  return (
    <FileUploadProvider>
      <PageContent
        service={TinifyServices.RESIZE}
        title="Resize any images"
        height="full"
        description={
          <span>
            Supports <strong>JPG</strong>, <strong>PNG</strong>,{" "}
            <strong>GIF</strong>, <strong>WEBP</strong>, <strong>TIFF</strong>{" "}
            and more formats. Fast and easy to use.
          </span>
        }
      >
        <Resize />
        <ResizeSections />
      </PageContent>
    </FileUploadProvider>
  );
}
