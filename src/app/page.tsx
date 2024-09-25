import { PageContent } from "@/components/layout/pageContent/pageContent";
import { TinifyServices } from "@/types";
import { Metadata } from "next";

import CompressProcessContainer from "@/components/ui/compress/compressProcessContainer/compressProcessContainer";
import { DropZone } from "@/components/ui/dropzone/dropZone";
import { CompressSections } from "@/features/compressSections/CompressSections";
import FileUploadProvider from "@/providers/FileProvider";
import { CompressBackgrounds } from "./_components/compressBackgrounds";
import { rootMeta } from "./rootMeta";
export const metadata: Metadata = rootMeta;

export default async function CompressPage() {
  return (
    <PageContent
      service={TinifyServices.COMPRESS}
      title="Compress any images without losing quality"
      description={
        <span>
          Supports <strong>JPG</strong>, <strong>PNG</strong>,{" "}
          <strong>GIF</strong>, <strong>WEBP</strong>, <strong>PDF</strong>, and
          more formats. Fast and easy to use.
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
  );
}
