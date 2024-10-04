import { RootHeader } from "@/features/root/header/rootHeader";
import { SectionOverview } from "@/features/root/sectionOverview/sectionOverview";
import { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { Features } from "@/features/root/features/features";
import { Resources } from "@/features/root/resources/resources";
import { UsageSection } from "@/features/root/usageSection/usageSection";
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
        {/* <Testimonials />
        <FaqSection />
        <PrivacySecurity /> */}
      </main>
    </>
  );
}
