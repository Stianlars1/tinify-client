import { PageContent } from "@/components/layout/pageContent/pageContent";
import { TinifyServices } from "@/types";

import { Resize } from "@/app/resize/resize";
import { ResizeSections } from "@/features/resizeSections/resizeSections";
import { FileUploadProvider } from "@/providers/FileProvider";

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
            <strong>GIF</strong>, <strong>WEBP</strong>, <strong>PDF</strong>,
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
