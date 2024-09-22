import { Footer } from "@/components/layout/footer/footer";
import { Navbar } from "@/components/layout/navbar/navbar";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sfPro = localFont({
  src: [
    { path: "./fonts/SF-Pro-Rounded-Regular.otf", weight: "400" },
    { path: "./fonts/SF-Pro-Rounded-Ultralight.otf", weight: "100" },
    { path: "./fonts/SF-Pro-Rounded-Thin.otf", weight: "200" },
    { path: "./fonts/SF-Pro-Rounded-Light.otf", weight: "300" },
    { path: "./fonts/SF-Pro-Rounded-Medium.otf", weight: "500" },
    { path: "./fonts/SF-Pro-Rounded-Semibold.otf", weight: "600" },
    { path: "./fonts/SF-Pro-Rounded-Bold.otf", weight: "700" },
    { path: "./fonts/SF-Pro-Rounded-Heavy.otf", weight: "800" },
    { path: "./fonts/SF-Pro-Rounded-Black.otf", weight: "900" },
  ],
  display: "swap",
  adjustFontFallback: "Arial",
  variable: "--font-sf-pro",
  weight: "100 900",
  preload: true,
  style: "normal",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.className} ${sfPro.className} ${geistMono.variable} ${geistSans.variable}`}
      >
        <Providers>
          <Navbar />
          <PageContainer>{children}</PageContainer>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
