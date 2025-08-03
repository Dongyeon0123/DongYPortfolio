import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 성능 최적화 설정
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // 이미지 최적화
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Vercel 배포를 위한 설정
    unoptimized: false,
    // 정적 파일 최적화
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // 컴파일 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 번들 분석 (개발 시에만)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      config.plugins.push(
        new (require('@next/bundle-analyzer')({
          enabled: true,
        }))()
      );
      return config;
    },
  }),
  // 정적 파일 최적화
  output: 'standalone',
};

export default nextConfig;
