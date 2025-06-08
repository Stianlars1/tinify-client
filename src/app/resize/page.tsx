// src/app/resize/page.tsx
import { Metadata, Viewport } from "next";
import Script from "next/script";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import PageContent from "@/components/layout/pageContent/pageContent";
import { FileUploadProvider } from "@/providers/FileProvider";
import { Resize } from "./resize";
import { ResizeSections } from "@/features/resizeSections/resizeSections";
import { TinifyServices } from "@/types";
import { useThisViewport } from "../metadata";
import { APP_NAME, OG_RESIZE_URL, ROUTE_ROOT } from "@/utils/urls";
import { RESIZE_META } from "@/app/resize/metadata";

export const viewport: Viewport = useThisViewport;
export const revalidate = 3600;

/* ---------- SEO ---------- */
export async function generateMetadata(): Promise<Metadata> {
  return {
    ...RESIZE_META,
    title: "Resize Images Online",
    description:
      "Resize images to exact pixel dimensions or scale them proportionally — quick & free.",
    alternates: { canonical: "/resize" },
    openGraph: {
      ...(RESIZE_META.openGraph as any),
      title: `Resize Images – ${APP_NAME}`,
      description:
        "Change image width & height without quality loss. Supports JPG, PNG, GIF, WEBP and more.",
      images: [
        {
          url: OG_RESIZE_URL,
          width: 1200,
          height: 630,
          alt: `${APP_NAME} – Resize`,
          type: "image/webp",
        },
      ],
      twitter: {
        card: "summary_large_image",
        title: "Tinify.dev | Resize Images Online",
        description:
          "Resize images to exact pixel dimensions or scale them proportionally — quick & free.",
        images: [OG_RESIZE_URL],
      },
    },
  };
}

/* ------------------------- */

export default function ResizePage() {
  /* JSON-LD */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://tinify.dev/resize",
        url: "https://tinify.dev/resize",
        name: "Resize Images Online",
        description:
          "Resize images to exact pixel dimensions or scale them proportionally — quick & free.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: ROUTE_ROOT },
          { "@type": "ListItem", position: 2, name: "Resize", item: "/resize" },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="json-ld-resize"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageContainer>
        <FileUploadProvider>
          <PageContent
            service={TinifyServices.RESIZE}
            title="Resize any images"
            fullWidth
            description={
              <>
                Supports <strong>JPG</strong>, <strong>PNG</strong>,{" "}
                <strong>GIF</strong>, <strong>WEBP</strong> and more.
              </>
            }
          >
            <Resize />
            <ResizeSections />
          </PageContent>
        </FileUploadProvider>
      </PageContainer>
    </>
  );
}
