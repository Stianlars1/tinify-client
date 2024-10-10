// pages/crop/index.tsx

import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import { PageContent } from "@/components/layout/pageContent/pageContent";
import { CropSections } from "@/features/cropSection/cropSections";
import { FileUploadProvider } from "@/providers/FileProvider";
import { TinifyServices } from "@/types";
import { Metadata, Viewport } from "next";
import { CropBackgrounds } from "../compress/components/compressBackgrounds";
import { useThisViewport } from "../metadata";
import CropProcessContainer from "./components/cropProcessContainer/cropProcessContainer";
import { cropMeta } from "./cropMeta";

export const metadata: Metadata = cropMeta;
export const viewport: Viewport = useThisViewport;

export default function CropPage() {
  return (
    <PageContainer>
      <PageContent
        service={TinifyServices.CROP}
        title="Crop any images without losing quality"
        description={
          <span>
            Supports <strong>JPG</strong>, <strong>PNG</strong>,{" "}
            <strong>GIF</strong>, <strong>WEBP</strong>, and more formats. Fast
            and easy to use.
          </span>
        }
      >
        <FileUploadProvider>
          <CropProcessContainer />
        </FileUploadProvider>
        <CropSections />
        <CropBackgrounds />
      </PageContent>
    </PageContainer>
  );
}
