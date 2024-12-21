import type { Metadata } from "next";
import { Figtree, Montserrat, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import SchemaMarkup from "@/components/SchemaMarkup";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const monserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monserrat",
});

export const metadata: Metadata = {
  title: "Opencode | Soluciones de Software.",
  description:
    "Professional plumbing services in Miami. 24/7 emergency repairs, installations, and maintenance.",
  keywords:
    "plumber, Miami plumber, plumbing services, emergency plumbing, pipe repair",
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
    title: "Opencode | Soluciones de Software.",
    description:
      "Professional plumbing services in Miami. 24/7 emergency repairs, installations, and maintenance.",
    url: "https://www.opencode.cl",
    siteName: "Jdenx Solutions",
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
      <body className={`${monserrat.variable}  ${dmSans.variable} font-dmsans`}>
        <SchemaMarkup />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
