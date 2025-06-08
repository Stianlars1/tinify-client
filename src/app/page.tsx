import { RootHeader } from "@/features/root/header/rootHeader";
import { SectionOverview } from "@/features/root/sectionOverview/sectionOverview";
import { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { FaqSection } from "@/features/root/faqSection/faq";
import { Features } from "@/features/root/features/features";
import { Resources } from "@/features/root/resources/resources";
import { UsageSection } from "@/features/root/usageSection/usageSection";
import { ROOT_META, useThisViewport } from "./metadata";

export const viewport: Viewport = useThisViewport;
export const metadata: Metadata = ROOT_META;
const geistMono = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export default async function Home() {
  return (
    <>
      <main
        style={{
          ...geistMono.style,
          backgroundColor: "hsl(var(--background))",
          zIndex: 0,
        }}
      >
        <RootHeader />
        <UsageSection />
        <SectionOverview />
        <Features />

        <Resources />
        <FaqSection />
        {/* <Testimonials />
        <PrivacySecurity /> */}
      </main>
    </>
  );
}
