// src/app/blog/page.tsx
import { Metadata, Viewport } from "next";
import Script from "next/script";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import PageContent from "@/components/layout/pageContent/pageContent";
import styles from "./css/blog.module.css";
import { BlogGradient } from "./gradient";
import { useThisViewport } from "../metadata";
import { APP_NAME, OG_BLOG_URL, ROUTE_ROOT } from "@/utils/urls";
import { META_BLOG } from "@/app/blog/blogMeta";
import { Link } from "next-view-transitions";

export const viewport: Viewport = useThisViewport;
export const revalidate = 3600;

/* ---------- SEO ---------- */
export async function generateMetadata(): Promise<Metadata> {
  return {
    ...META_BLOG,
    title: "Blog – Image Optimisation Tips & Guides",
    description:
      "Learn everything about image compression, resizing, cropping and performance best-practices.",
    alternates: { canonical: "/blog" },
    openGraph: {
      ...(META_BLOG.openGraph as any),
      title: `Blog – ${APP_NAME}`,
      description:
        "Compress, resize & crop like a pro. Tutorials and tips from Tinify.dev.",
      images: [
        {
          url: OG_BLOG_URL,
          width: 1200,
          height: 630,
          alt: `${APP_NAME} – Blog`,
          type: "image/webp",
        },
      ],
      twitter: {
        card: "summary_large_image",
        title: "Tinify.dev | Blog",
        description:
          "Learn everything about image compression, resizing, cropping and performance best-practices.",
        images: [OG_BLOG_URL],
      },
    },
  };
}
/* ------------------------- */

/* Blog post list (static for now) */
const blogPosts = [
  { title: "What is Compression?", url: "/blog/what-is-compression" },
  { title: "What is Resizing?", url: "/blog/what-is-resizing" },
  { title: "What is Cropping?", url: "/blog/what-is-cropping" },
];

export default function BlogPage() {
  /* JSON-LD */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        itemListElement: blogPosts.map((post, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: post.title,
          url: `https://tinify.dev${post.url}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: ROUTE_ROOT },
          { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="json-ld-blog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageContainer>
        <PageContent title="Blog" smallSubtitle="Resources & Guides" fullWidth>
          <section className={styles.blog}>
            <ul className={styles.blogList}>
              {blogPosts.map((post) => (
                <Link
                  key={post.url}
                  href={post.url}
                  className={styles.blogItem}
                >
                  {post.title}
                  <BlogGradient className={styles.gradientBackground} />
                </Link>
              ))}
            </ul>
          </section>
        </PageContent>
      </PageContainer>
    </>
  );
}
