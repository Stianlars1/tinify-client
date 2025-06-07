import { Footer } from "@/components/layout/footer/footer";
import { Navbar } from "@/components/layout/navbar/navbar";
import { ViewTransitions } from "next-view-transitions";
import { Libre_Franklin } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleAnalyticsProvider } from "@/lib/analytics/GoogleAnalyticsProvider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={` ${libre.className} ${geistMono.variable} ${geistSans.variable}`}
        >
          <Navbar />
          {children}
          <Footer />

          <GoogleAnalyticsProvider />
        </body>
      </html>
    </ViewTransitions>
  );
}
