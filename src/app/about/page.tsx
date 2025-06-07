import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import PageContent from "@/components/layout/pageContent/pageContent";
import { Metadata, Viewport } from "next";
import { TinifyServices } from "@/types";
import { useThisViewport } from "../metadata";
import { aboutMeta } from "./aboutMeta";
import { AboutContent } from "@/app/about/content";
import { AboutGradient } from "@/app/about/aboutGradient";

export const metadata: Metadata = aboutMeta;
export const viewport: Viewport = useThisViewport;
export default async function About() {
  return (
    <>
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
