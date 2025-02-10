import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import SchemaMarkup from "@/components/SchemaMarkup";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Carpos & Lagos | Ingenería en construcción.",
  description: "Ingenería en construcción.",
  keywords:
    "constructora, ingeneria, ingeneria en concepcion, ingeneria en construccion, ",
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  appleWebApp: {
    statusBarStyle: "black",
  },
  icons: {
    icon: [
      { url: "favicons/favicon.ico" },
      { url: "favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "favicons/apple-touch-icon.png" }],
    other: [
      { rel: "android-chrome", url: "favicons/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "favicons/android-chrome-512x512.png" },
    ],
  },

  openGraph: {
    title: "Carpos & Lagos | Ingenería en construcción.",
    description: "Ingenería en construcción.",
    url: "https://www.opencode.cl",
    siteName: "Carpos & Lagos Constructora",
    images: [
      {
        url: "https://www.opencode.cl/opencode/openLogo",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`  ${dmSans.variable} font-dmsans`}>
        <SchemaMarkup />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
