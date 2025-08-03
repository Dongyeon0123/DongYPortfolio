import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DongY - Frontend Developer Portfolio",
  description: "Next.js와 React 기반으로 사용자 경험 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자 DongY의 포트폴리오입니다.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "UI/UX", "Portfolio"],
  authors: [{ name: "DongY" }],
  creator: "DongY",
  openGraph: {
    title: "DongY - Frontend Developer Portfolio",
    description: "Next.js와 React 기반으로 사용자 경험 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자 DongY의 포트폴리오입니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "DongY - Frontend Developer Portfolio",
    description: "Next.js와 React 기반으로 사용자 경험 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자 DongY의 포트폴리오입니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 페이지 로딩 시 스크롤을 맨 위로 이동
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
