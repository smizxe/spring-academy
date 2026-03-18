import type { Metadata } from "next";
import localFont from "next/font/local";
import { Be_Vietnam_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const beautique = localFont({
  src: [
    {
      path: "../Beautique Display v1.0/Beautique Display/BeautiqueDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Beautique Display v1.0/Beautique Display/BeautiqueDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../Beautique Display v1.0/Beautique Display/BeautiqueDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-beautique",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["vietnamese"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["vietnamese"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spring Academy",
  description:
    "Nền tảng khóa học marketing thực chiến dành cho người kinh doanh online và marketer muốn tăng trưởng mềm mại, bền vững và có hệ thống.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${cormorant.variable} ${beautique.variable}`}>
        {children}
      </body>
    </html>
  );
}
