// pages/about.tsx

import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import { PageContent } from "@/components/layout/pageContent/pageContent";
import { Metadata, Viewport } from "next";
import { Link } from "next-view-transitions";
import { useThisViewport } from "../metadata";
import { blogMeta } from "./blogMeta";
import styles from "./css/blog.module.css";
import { BlogGradient } from "./gradient";

export const metadata: Metadata = blogMeta;
export const viewport: Viewport = useThisViewport;

export default async function Blog() {
  return (
    <>
      <PageContainer>
        <PageContent
          title="Blog of resources"
          smallSubtitle=""
          fullWidth
          headerChildren={<></>}
        >
          <BlogContent />
        </PageContent>
      </PageContainer>
    </>
  );
}

const blogPosts = [
  { title: "What is Compression?", url: "/blog/what-is-compression" },
  { title: "What is Resizing?", url: "/blog/what-is-resizing" },
  { title: "What is Cropping?", url: "/blog/what-is-cropping" },
];

const BlogContent = async () => {
  return (
    <section className={styles.blog}>
      <ul className={styles.blogList}>
        {blogPosts.map((post) => (
          <Link key={post.url} href={post.url} className={styles.blogItem}>
            {post.title}
            <BlogGradient className={styles.gradientBackground} />
          </Link>
        ))}
      </ul>
    </section>
  );
};
