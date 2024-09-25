import { Footer } from "@/components/layout/footer/footer";
import { Navbar } from "@/components/layout/navbar/navbar";
import { PageContainer } from "@/components/layout/pageContainer/pageContainer";
import { Libre_Franklin } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
  preload: true,
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["Arial", "sans-serif"],
});

// const sfPro = localFont({
//   src: [
//     { path: "./fonts/SF-Pro-Rounded-Regular.otf", weight: "400" },
//     { path: "./fonts/SF-Pro-Rounded-Ultralight.otf", weight: "100" },
//     { path: "./fonts/SF-Pro-Rounded-Thin.otf", weight: "200" },
//     { path: "./fonts/SF-Pro-Rounded-Light.otf", weight: "300" },
//     { path: "./fonts/SF-Pro-Rounded-Medium.otf", weight: "500" },
//     { path: "./fonts/SF-Pro-Rounded-Semibold.otf", weight: "600" },
//     { path: "./fonts/SF-Pro-Rounded-Bold.otf", weight: "700" },
//     { path: "./fonts/SF-Pro-Rounded-Heavy.otf", weight: "800" },
//     { path: "./fonts/SF-Pro-Rounded-Black.otf", weight: "900" },
//   ],
//   display: "swap",
//   adjustFontFallback: "Arial",
//   variable: "--font-sf-pro",
//   weight: "100 900",
//   preload: false,
//   style: "normal",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${libre.className} ${geistMono.variable} ${geistSans.variable}`}
      >
        <Navbar />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </body>
    </html>
  );
}
