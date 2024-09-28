import { RootHeader } from "@/features/root/header/rootHeader";
import { SectionOverview } from "@/features/root/sectionOverview/sectionOverview";
import { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { Features } from "@/features/root/features/features";
import Script from "next/script";
import { rootMeta } from "./rootMeta";
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b " },
  ],
};

export const metadata: Metadata = rootMeta;
const geistMono = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export default async function Home() {
  return (
    <>
      <Script
        src={"/scripts/rootHeaderBackground.min.js"}
        strategy="beforeInteractive"
      />
      <Script
        src={"/scripts/overviewSectionBackground.js"}
        strategy="beforeInteractive"
      />

      <main
        style={{
          ...geistMono.style,
          backgroundColor: "hsl(var(--background))",
          zIndex: 0,
        }}
      >
        <RootHeader />
        <SectionOverview />
        <Features />
        {/* <Testimonials />
        <FaqSection />
        <BlogPreview />
        <PrivacySecurity /> */}
      </main>
    </>
  );
}
