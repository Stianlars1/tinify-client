import { PageContent } from "@/components/layout/pageContent/pageContent";
import { TinifyServices } from "@/types";

import { Resize } from "@/app/resize/resize";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import { ResizeSections } from "@/features/resizeSections/resizeSections";
import { FileUploadProvider } from "@/providers/FileProvider";
import { Metadata, Viewport } from "next";
import { useThisViewport } from "../metadata";
import { resizeMeta } from "./metadata";
export const viewport: Viewport = useThisViewport;

export const metadata: Metadata = resizeMeta;

export default async function ResizePage() {
  return (
    <PageContainer>
      <FileUploadProvider>
        <PageContent
          service={TinifyServices.RESIZE}
          title="Resize any images"
          height="full"
          fullWidth
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
    </PageContainer>
  );
}
