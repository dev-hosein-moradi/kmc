import type { Metadata } from "next";
import "./globals.css";
import { vazirmatn } from "./ui/font";

export const metadata: Metadata = {
  title: "کرمان موتور",
  description: "شرکت خودرو سازی کرمان موتور",
  keywords: "",
  authors: [{ name: "hosein moradi" }],
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
