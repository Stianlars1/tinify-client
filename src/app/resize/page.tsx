import { PageContent } from "@/components/layout/pageContent/pageContent";
import { TinifyServices } from "@/types";
import { Metadata } from "next";

import { Resize } from "@/features/resize/resize";
import FileUploadProvider from "@/providers/FileProvider";
// resize emtadata
export const metadata: Metadata = {
  title: "Resize Image Online",
  description:
    "Resize any image without losing quality. Supports JPG, PNG, GIF, and more formats. Fast and easy to use.",
};

export default async function CompressPage() {
  return (
    <PageContent
      service={TinifyServices.RESIZE}
      title="Resize any images"
      description={
        <span>
          Supports <strong>JPG</strong>, <strong>PNG</strong>,{" "}
          <strong>GIF</strong>, <strong>WEBP</strong>, <strong>PDF</strong>, and
          more formats. Fast and easy to use.
        </span>
      }
    >
      <FileUploadProvider>
        <Resize />
      </FileUploadProvider>
    </PageContent>
  );
}
