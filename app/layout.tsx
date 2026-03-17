import type { Metadata } from "next";
import { Playfair_Display, Be_Vietnam_Pro, Questrial } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["vietnamese"],
  variable: "--font-playfair",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["vietnamese"],
  variable: "--font-be-vietnam",
});

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

export const metadata: Metadata = {
  title: "Ms Huyen Marketing Course",
  description: "Nền tảng khóa học marketing thực chiến dành cho người kinh doanh online và marketer muốn tăng trưởng bền vững.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} ${questrial.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
