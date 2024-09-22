import { PageContent } from "@/components/layout/pageContent/pageContent";
import { CompressDropZone } from "@/components/ui/compress/compressDropZone/compressDropZone";
import { CompressProcessContainer } from "@/components/ui/compress/compressProcessContainer/compressProcessContainer";
import { Metadata } from "next";
import { getCompressionTag } from "./actions/tags";
import { rootMeta } from "./rootMeta";
export const metadata: Metadata = rootMeta;

export default async function CompressPage() {
  const compressionTag = await getCompressionTag();

  return (
    <PageContent
      tag={compressionTag}
      title="Compress any images without losing quality"
      description={
        <span>
          Supports <strong>JPG</strong>, <strong>PNG</strong>,{" "}
          <strong>GIF</strong>, <strong>WEBP</strong>, and more formats. Fast
          and easy to use.
        </span>
      }
    >
      <CompressDropZone />
      <CompressProcessContainer />
    </PageContent>
  );
}
