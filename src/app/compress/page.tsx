import { TinifyServices } from "@/types";
import { Metadata, Viewport } from "next";

import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import PageContent from "@/components/layout/pageContent/pageContent";
import { CompressProcessContainer } from "@/components/ui/compress/compressProcessContainer/compressProcessContainer";
import { CompressSections } from "@/features/compressSections/CompressSections";
import { FileUploadProvider } from "@/providers/FileProvider";
import { useThisViewport } from "../metadata";
import { CompressBackgrounds } from "./components/compressBackgrounds";
import { compressMeta } from "./compressMeta";
import DropZone from "@/components/ui/dropzones/dropzone/dropZone";

export const metadata: Metadata = compressMeta;
export const viewport: Viewport = useThisViewport;

export default async function CompressPage() {
  return (
    <PageContainer>
      <PageContent
        service={TinifyServices.COMPRESS}
        title="Compress any images without losing quality"
        description={
          <span>
            Supports <strong>JPG</strong>, <strong>PNG</strong>,{" "}
            <strong>GIF</strong>, <strong>WEBP</strong>, <strong>PDF</strong>,
            and more formats. Fast and easy to use.
          </span>
        }
      >
        <FileUploadProvider>
          <DropZone />
          <CompressProcessContainer />
        </FileUploadProvider>

        <CompressSections />

        <CompressBackgrounds />
      </PageContent>
    </PageContainer>
  );
}
