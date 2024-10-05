import { Content } from "@/components/layout/content/content";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import WhatIsCompression from "@/markdown/blog/compression.mdx";
import WhatIsCropping from "@/markdown/blog/cropping.mdx";
import WhatIsResizing from "@/markdown/blog/resizing.mdx";
import { redirect, RedirectType } from "next/navigation";
import { ReactElement } from "react";
import { GradientBackground } from "react-gradient-animation";
import styles from "./css/blogPost.module.css";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
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
        };
    }
  };
  const BlogPostComponent = getBlogPostComponent(slug);
  if (!BlogPostComponent) {
    return redirect(redirectUrl, RedirectType.push);
  }
  return {
    BlogPostComponent: BlogPostComponent?.BlogPostComponent,
    Header: () => BlogPostComponent.Header as ReactElement,
  };
};

const Gradient = (): ReactElement => {
  return (
    <GradientBackground
      count={10} // Number of particles
      size={{ min: 600, max: 1000, pulse: 0.2 }} // Adjusted for visibility
      speed={{ x: { min: 1.5, max: 2 }, y: { min: 1.5, max: 2 } }}
      colors={{
        background: "hsl(var(--background))", // Solid background for better visibility
        particles: ["#ff681c", "#ff0a53", "#2563eb"],
      }}
      blending={"source-over"} // Adjust blending mode if necessary
      opacity={{ center: 0.45, edge: 0 }} // Center opacity and edge opacity
      skew={-1.6}
      shapes={["c"]} // Shapes: circle
      className={styles.gradientBackground}
      translateYcorrection={true}
      style={{ position: "absolute" }}
    />
  );
};
