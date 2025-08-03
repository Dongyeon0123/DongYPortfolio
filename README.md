# DongY Portfolio Site

Next.js와 TypeScript로 개발된 프론트엔드 개발자 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (권장)

## ✨ 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **애니메이션**: Framer Motion을 활용한 부드러운 인터랙션
- **SEO 최적화**: 메타데이터 및 구조화된 마크업
- **접근성**: 웹 접근성 가이드라인 준수
- **성능 최적화**: Next.js의 최적화 기능 활용

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── globals.css     # 전역 스타일
├── components/
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Hero.tsx        # 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Skills.tsx      # 기술 스택 섹션
│   ├── Projects.tsx    # 프로젝트 섹션
│   ├── Experience.tsx  # 경험 섹션
│   ├── Contact.tsx     # 연락처 섹션
│   └── Footer.tsx      # 푸터
├── lib/
│   └── data.ts         # 정적 데이터
└── types/
    └── index.ts        # TypeScript 타입 정의
```

## 🛠️ 설치 및 실행

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 빌드
```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📱 섹션 구성

### 1. Hero Section
- 자기소개 및 주요 기술 스택 소개
- 애니메이션 효과로 시각적 임팩트 제공

### 2. About Section
- 개발 철학 및 개인적 특징 소개
- 카드 형태의 특징 설명

### 3. Skills Section
- 기술 스택을 카테고리별로 분류
- 시각적 아이콘과 함께 표시

### 4. Projects Section
- 주요 프로젝트 포트폴리오
- 프로젝트 상태, 기술 스택, 링크 제공

### 5. Experience Section
- 기술별 상세 경험 설명
- 체크리스트 형태의 경험 나열

### 6. Contact Section
- 다양한 연락처 채널 제공
- 소셜 미디어 링크

## 🎨 디자인 특징

- **모던한 디자인**: 깔끔하고 현대적인 UI/UX
- **그라데이션**: 블루-퍼플 그라데이션을 활용한 브랜딩
- **카드 레이아웃**: 정보를 카드 형태로 구조화
- **호버 효과**: 인터랙티브한 사용자 경험
- **스크롤 애니메이션**: 스크롤 기반 애니메이션

## 📊 성능 최적화

- **이미지 최적화**: Next.js Image 컴포넌트 활용
- **코드 스플리팅**: 자동 코드 분할
- **SEO 최적화**: 메타데이터 및 구조화된 데이터
- **접근성**: ARIA 라벨 및 키보드 네비게이션

## 🚀 배포

### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼
- Netlify
- AWS Amplify
- GitHub Pages

## 📝 커스터마이징

### 데이터 수정
`src/lib/data.ts` 파일에서 다음 정보를 수정할 수 있습니다:
- 프로젝트 정보
- 기술 스택
- 경험 사항
- 연락처 정보

### 스타일 수정
- Tailwind CSS 클래스를 통해 스타일 수정
- `src/app/globals.css`에서 전역 스타일 수정

### 컴포넌트 수정
각 섹션별 컴포넌트를 `src/components/` 디렉토리에서 수정

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 연락처

- **Email**: ldy1951123@gmail.com
- **GitHub**: [Dongyeon0123](https://github.com/Dongyeon0123)
- **Instagram**: [dong.y____](https://www.instagram.com/dong.y____)

---

Made with ❤️ by DongY using Next.js & TypeScript
