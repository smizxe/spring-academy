import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Ms Huyen Marketing Course",
  description: "Nen tang khoa hoc marketing thuc chien danh cho nguoi kinh doanh online va marketer muon tang truong ben vung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${spaceGrotesk.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
