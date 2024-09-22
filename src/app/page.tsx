import { PageContent } from "@/components/layout/pageContent/pageContent";
import { TinifyServices } from "@/types";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { rootMeta } from "./rootMeta";
export const metadata: Metadata = rootMeta;
const CompressDropZone = dynamic(
  () => import("@/components/ui/compress/compressDropZone/compressDropZone"),
  {
    ssr: false,
    loading: () => <></>,
  }
);
const CompressProcessContainer = dynamic(
  () =>
    import(
      "@/components/ui/compress/compressProcessContainer/compressProcessContainer"
    ),
  {
    ssr: false,
    loading: () => <></>,
  }
);
export default async function CompressPage() {
  return (
    <PageContent
      service={TinifyServices.COMPRESS}
      title="Compress any images without losing quality"
      description={
        <span>
          Supports <strong>JPG</strong>, <strong>PNG</strong>,{" "}
          <strong>GIF</strong>, <strong>WEBP</strong>, and more formats. Fast
          and easy to use.
        </span>
      }
    >
      <Suspense fallback={<></>}>
        <CompressDropZone />
        <CompressProcessContainer />
      </Suspense>
    </PageContent>
  );
}
