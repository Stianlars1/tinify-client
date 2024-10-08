import { Content } from "@/components/layout/content/content";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import WhatIsCompression from "@/markdown/blog/compression.mdx";
import WhatIsCropping from "@/markdown/blog/cropping.mdx";
import WhatIsResizing from "@/markdown/blog/resizing.mdx";
import { Metadata, ResolvingMetadata } from "next";
import { redirect, RedirectType } from "next/navigation";
import { ReactElement } from "react";
import { GradientBackground } from "react-gradient-animation";
import styles from "./css/blogPost.module.css";

type BlogProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: BlogProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = getBlogPostComponent(slug);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    ...product?.metadata,
    openGraph: {
      images: ["/tinify_op.png", ...previousImages],
    },
  };
}

export default async function BlogPost({ params }: BlogProps) {
  const { BlogPostComponent, Header } = await verifyAndRedirectOrGetComponent(
    params.slug
  );
  if (!BlogPostComponent || !Header) return null;
  return (
    <>
      <PageContainer>
        <Content noExtras>
          <Header />
          <BlogPostComponent />
        </Content>
      </PageContainer>
    </>
  );
}

const verifyAndRedirectOrGetComponent = async (slug: string) => {
  const isValid =
    slug === "what-is-compression" ||
    slug === "what-is-resizing" ||
    slug === "what-is-cropping";
  const redirectUrl = "/blog";
  if (!isValid) {
    return redirect(redirectUrl, RedirectType.push);
  }

  const BlogPostComponent = getBlogPostComponent(slug);
  if (!BlogPostComponent) {
    return redirect(redirectUrl, RedirectType.push);
  }
  return {
    BlogPostComponent: BlogPostComponent?.BlogPostComponent,
    Header: () => BlogPostComponent.Header as ReactElement,
  };
};

const getBlogPostComponent = (slug: string) => {
  let title = "";
  let date = "";
  switch (slug) {
    case "what-is-compression":
      title =
        "The Art of Image Compression: Enhancing Performance Without Sacrificing Quality";
      date = "Date: October 4, 2023";
      return {
        BlogPostComponent: WhatIsCompression,
        Header: (
          <header className={styles.header}>
            <h1>{title}</h1>
            <i>{date}</i>
            <Gradient />
          </header>
        ),
        metadata: {
          title: "What is Compression? - Optimize Your Images | Tinify.dev",
          description:
            "Learn about image compression, how it works, and why it's essential for improving web performance and reducing load times.",
          keywords: [
            "what is compression",
            "image compression guide",
            "compress images",
            "lossy vs lossless compression",
            "tinify.dev compression blog",
          ],
          openGraph: {
            title: "What is Compression? - Optimize Your Images | Tinify.dev",
            description:
              "Learn about image compression, how it works, and why it's essential for improving web performance and reducing load times.",
            url: "https://tinify.dev/blog/what-is-compression",
            type: "article",
            images: [
              {
                url: "https://tinify.dev/tinify_op.png",
                width: 1200,
                height: 630,
                alt: "What is Compression? - Optimize Your Images | Tinify.dev",
              },
            ],
          },
          twitter: {
            card: "summary_large_image",
            title: "What is Compression? - Optimize Your Images | Tinify.dev",
            description:
              "Learn about image compression, how it works, and why it's essential for improving web performance and reducing load times.",
            images: ["https://tinify.dev/tinify_op.png"],
          },
          alternates: {
            canonical: "https://tinify.dev/blog/what-is-compression",
          },
        } as Metadata,
      };
    case "what-is-resizing":
      title = "Mastering Image Resizing: Optimizing Visuals for Every Screen";
      date = "Date: October 4, 2023";
      return {
        BlogPostComponent: WhatIsResizing,
        Header: (
          <header className={styles.header}>
            <h1>{title}</h1>
            <i>{date}</i>
            <Gradient />
          </header>
        ),
        metadata: {
          title: "What is Resizing? - Enhance Your Visuals | Tinify.dev",
          description:
            "Discover the importance of resizing images, how to do it properly, and how it improves your website's visual appeal and performance.",
          keywords: [
            "what is resizing",
            "image resizing guide",
            "resize images online",
            "image optimization tips",
            "tinify.dev resizing blog",
          ],
          openGraph: {
            title: "What is Resizing? - Enhance Your Visuals | Tinify.dev",
            description:
              "Discover the importance of resizing images, how to do it properly, and how it improves your website's visual appeal and performance.",
            url: "https://tinify.dev/blog/what-is-resizing",
            type: "article",
            images: [
              {
                url: "https://tinify.dev/tinify_op.png",
                width: 1200,
                height: 630,
                alt: "What is Resizing? - Enhance Your Visuals | Tinify.dev",
              },
            ],
          },
          twitter: {
            card: "summary_large_image",
            title: "What is Resizing? - Enhance Your Visuals | Tinify.dev",
            description:
              "Discover the importance of resizing images, how to do it properly, and how it improves your website's visual appeal and performance.",
            images: ["https://tinify.dev/tinify_op.png"],
          },
          alternates: {
            canonical: "https://tinify.dev/blog/what-is-resizing",
          },
        } as Metadata,
      };
    case "what-is-cropping":
      title = "Coming Soon: Precision Cropping with Tinify.dev";
      date = "Date: October 4, 2023";
      return {
        BlogPostComponent: WhatIsCropping,
        Header: (
          <header className={styles.header}>
            <h1>{title}</h1>
            <i>{date}</i>
            <Gradient />
          </header>
        ),
        metadata: {
          title: "What is Cropping? - Focus Your Images | Tinify.dev",
          description:
            "Learn how cropping images can help focus on important elements and improve the composition of your visuals. Find out how Tinify.dev makes it easy.",
          keywords: [
            "what is cropping",
            "image cropping guide",
            "crop images online",
            "enhance image composition",
            "tinify.dev cropping blog",
          ],
          openGraph: {
            title: "What is Cropping? - Focus Your Images | Tinify.dev",
            description:
              "Learn how cropping images can help focus on important elements and improve the composition of your visuals. Find out how Tinify.dev makes it easy.",
            url: "https://tinify.dev/blog/what-is-cropping",
            type: "article",
            images: [
              {
                url: "https://tinify.dev/tinify_op.png",
                width: 1200,
                height: 630,
                alt: "What is Cropping? - Focus Your Images | Tinify.dev",
              },
            ],
          },
          twitter: {
            card: "summary_large_image",
            title: "What is Cropping? - Focus Your Images | Tinify.dev",
            description:
              "Learn how cropping images can help focus on important elements and improve the composition of your visuals. Find out how Tinify.dev makes it easy.",
            images: ["https://tinify.dev/tinify_op.png"],
          },
          alternates: {
            canonical: "https://tinify.dev/blog/what-is-cropping",
          },
        } as Metadata,
      };
  }
};

const Gradient = (): ReactElement => {
  return (
    <GradientBackground
      count={10} // Number of particles
      size={{ min: 600, max: 1000, pulse: 0.2 }} // Adjusted for visibility
      speed={{ x: { min: 0.6, max: 1.4 }, y: { min: 0.6, max: 1.5 } }}
      colors={{
        background: "hsl(var(--background))", // Solid background for better visibility
        particles: ["#ff681c", "#ff0a53", "#2563eb"],
      }}
      blending={"overlay"} // Adjust blending mode if necessary
      opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
      skew={-1.6}
      shapes={["c"]} // Shapes: circle
      className={styles.gradientBackground}
      translateYcorrection={false}
      style={{ position: "absolute" }}
    />
  );
};
