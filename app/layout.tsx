import type { Metadata, Viewport } from "next";
import "./globals.css";
import { vazirmatn } from "./ui/font";

export const metadata: Metadata = {
  applicationName: "کرمان موتور",
  title: "کرمان موتور",
  description: "شرکت خودرو سازی کرمان موتور",
  keywords: "",
  authors: [{ name: "حسین مرادی" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "کرمان موتور",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "کرمان موتور",
    title: "کرمان موتور",
    description: "شرکت خودرو سازی کرمان موتور",
  },
  twitter: {
    card: "summary",
    title: "کرمان موتور",
    description: "شرکت خودرو سازی کرمان موتور",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body
        className={`${vazirmatn.className} antialiased overflow-x-hidden`}
        dir="rtl"
      >
        {children}
      </body>
    </html>
  );
}
