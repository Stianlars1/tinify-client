// src/app/about/page.tsx
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import PageContent from "@/components/layout/pageContent/pageContent";
import { Metadata } from "next";
import Script from "next/script";
import { TinifyServices } from "@/types";
import { AboutContent } from "@/app/about/content";
import { AboutGradient } from "@/app/about/aboutGradient";
import { APP_NAME, OG_ABOUT_URL, OG_BLOG_URL } from "@/utils/urls";
import { ABOUT_META } from "@/app/about/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...ABOUT_META,
    title: "About Us",
    description:
      "Learn more about Tinify.dev, our mission, and how we help you optimise images for free.",
    alternates: { canonical: "/about" },
    openGraph: {
      ...(ABOUT_META.openGraph as any),
      title: `About – ${APP_NAME}`,
      description:
        "We provide free online tools for fast image compression, resizing and cropping.",
      images: [
        {
          url: OG_ABOUT_URL,
          width: 1200,
          height: 630,
          alt: `${APP_NAME} – About`,
          type: "image/webp",
        },
      ],
      twitter: {
        card: "summary_large_image",
        title: "Tinify.dev | About",
        description:
          "Learn more about Tinify.dev, our mission, and how we help you optimise images for free.",
        images: [OG_BLOG_URL],
      },
    },
  };
}
export default async function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://tinify.dev/about",
        url: "https://tinify.dev/about",
        name: "About Us - Tinify.dev",
        description:
          "Learn more about Tinify.dev, our mission, and how we help you optimize your images effortlessly and for free.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tinify.dev/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://tinify.dev/about",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="json-ld-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageContainer>
        <PageContent
          service={TinifyServices.ALL}
          title="About Tinify"
          smallSubtitle="At Tinify, our mission is to provide fast and free image optimization services to everyone. We believe in simplicity, efficiency, and accessibility."
          fullWidth
          headerChildren={<></>}
        >
          <AboutGradient />
          <AboutContent />
        </PageContent>
      </PageContainer>
    </>
  );
}
