import type { Metadata } from "next";
import { Anuphan, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: "variable",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PNRU Admission Link Hub",
  description: "ศูนย์รวมลิงก์สมัครเรียนและบริการสำหรับผู้สมัครมหาวิทยาลัยราชภัฏพระนคร",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${anuphan.variable} ${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
