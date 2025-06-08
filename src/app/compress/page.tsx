// src/app/compress/page.tsx
import { TinifyServices } from "@/types";
import { Metadata, ResolvingMetadata, Viewport } from "next";
import Script from "next/script";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import PageContent from "@/components/layout/pageContent/pageContent";
import { CompressProcessContainer } from "@/components/ui/compress/compressProcessContainer/compressProcessContainer";
import { CompressSections } from "@/features/compressSections/CompressSections";
import { FileUploadProvider } from "@/providers/FileProvider";
import { CompressBackgrounds } from "./components/compressBackgrounds";
import DropZone from "@/components/ui/dropzones/dropzone/dropZone";
import { APP_NAME, OG_COMPRESS_URL } from "@/utils/urls";
import { useThisViewport } from "@/app/metadata";

export const viewport: Viewport = useThisViewport;

export async function generateMetadata(
  _: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentMeta = await parent;
  return {
    title: "Compress Images Online",
    description:
      "Lossless & lossy compression for JPG, PNG, GIF, WEBP and more — free & instant.",
    alternates: { canonical: "/compress" },
    openGraph: {
      ...(parentMeta.openGraph as any),
      title: `Compress Images – ${APP_NAME}`,
      description:
        "Shrink image file-sizes without sacrificing quality. No sign-up required.",
      images: [
        {
          url: OG_COMPRESS_URL,
          width: 1200,
          height: 630,
          alt: `${APP_NAME} – Compress`,
          type: "image/webp",
        },
      ],
    },
  };
}

export default async function CompressPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://tinify.dev/compress",
        url: "https://tinify.dev/compress",
        name: "Compress Images Online - Free & High Quality | Tinify.dev",
        description:
          "Compress your images without losing quality. Supports JPG, PNG, GIF, WEBP, and more. Quick and easy image compression online foree.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tinifev/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Compress",
            item: "https://tinify.dev/coess",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="json-ld-compress"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
