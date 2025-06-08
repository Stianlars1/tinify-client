// src/app/crop/page.tsx
import { Metadata, Viewport } from "next";
import Script from "next/script";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import PageContent from "@/components/layout/pageContent/pageContent";
import { FileUploadProvider } from "@/providers/FileProvider";
import CropProcessContainer from "./components/cropProcessContainer/cropProcessContainer";
import { CropSections } from "@/features/cropSection/cropSections";
import { CropBackgrounds } from "../compress/components/compressBackgrounds";
import { TinifyServices } from "@/types";
import { useThisViewport } from "../metadata";
import { APP_NAME, OG_CROP_URL, ROUTE_ROOT } from "@/utils/urls";
import { CROP_META } from "@/app/crop/cropMeta";

export const viewport: Viewport = useThisViewport;
export const revalidate = 3600;

/* ---------- SEO ---------- */
export async function generateMetadata(): Promise<Metadata> {
  return {
    ...CROP_META,
    title: "Crop Images Online",
    description:
      "Crop images to focus on the important parts. Supports JPG, PNG, GIF, WEBP and more — free & fast.",
    alternates: { canonical: "/crop" },
    openGraph: {
      ...(CROP_META.openGraph as any),
      title: `Crop Images – ${APP_NAME}`,
      description:
        "Easy image-cropping tool with rule-of-thirds overlay & custom aspect ratios.",
      images: [
        {
          url: OG_CROP_URL,
          width: 1200,
          height: 630,
          alt: `${APP_NAME} – Crop`,
          type: "image/webp",
        },
      ],
      twitter: {
        card: "summary_large_image",
        title: "Tinify.dev | Crop Images Online",
        description:
          "Easy image-cropping tool with rule-of-thirds overlay & custom aspect ratios.",
        images: [OG_CROP_URL],
      },
    },
  };
}

/* ------------------------- */

export default function CropPage() {
  /* JSON-LD */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://tinify.dev/crop",
        url: "https://tinify.dev/crop",
        name: "Crop Images Online",
        description:
          "Crop images to focus on the important parts. Supports JPG, PNG, GIF, WEBP and more — free & fst.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: ROUTE_ROOT },
          { "@type": "ListItem", position: 2, name: "Crop", item: "/crp" },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="json-ld-crop"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageContainer>
        <PageContent
          service={TinifyServices.CROP}
          title="Crop any images without losing quality"
          description={
            <>
              Supports <strong>JPG</strong>, <strong>PNG</strong>,{" "}
              <strong>GIF</strong>, <strong>WEBP</strong> and more.
            </>
          }
        >
          <FileUploadProvider>
            <CropProcessContainer />
          </FileUploadProvider>
          <CropSections />
          <CropBackgrounds />
        </PageContent>
      </PageContainer>
    </>
  );
}
