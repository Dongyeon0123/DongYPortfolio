import { Project, Skill, Experience, Contact } from '@/types';

export const projects: Project[] = [
  {
    id: 'nallijaku',
    name: '🛸 날리자KU',
    description: '국내 최초 학교 & 기관 대상 AI/XR 기반 드론 교육 전문 플랫폼 (준비 중, Vercel 배포)',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'Vercel'],
    period: '2025.07~',
    link: 'https://nallijaku.com',
    github: 'https://github.com/Dongyeon0123/nalijaku',
    status: 'in-progress',
    detailedDescription: '날리자KU는 국내 최초 학교 & 기관을 대상으로 하는 AI/XR 기반 드론 교육 전문 플랫폼입니다. 체계적인 드론 조종 교육 과정을 제공하고, 드론 애호가들이 소통할 수 있는 공간을 만들어 드론 문화의 발전에 기여하고 있습니다. 가상 시뮬레이션을 통한 안전한 연습 환경을 제공하여 초보자부터 전문가까지 모든 수준의 사용자가 활용할 수 있습니다.',
    features: [
      '드론 교육 플랫폼: 체계적인 드론 조종 교육 과정 제공',
      '커뮤니티: 드론 애호가들의 소통 공간',
      '실습 환경: 가상 시뮬레이션을 통한 안전한 연습',
      '정보 공유: 드론 관련 최신 기술 및 뉴스 제공',
      '사용자 관리: 개인별 학습 진도 및 성취도 추적',
      '반응형 디자인: 모든 디바이스에서 최적화된 경험'
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Redux'],
      styling: ['Tailwind CSS', 'CSS Modules'],
      backend: ['Vercel Functions'],
      deployment: ['Vercel']
    },
    challenges: [
      {
        title: 'Why 섹션 이미지 애니메이션 미작동',
        problem: '페이지 로딩 후 스크롤 시 Why 섹션 이미지가 아래에서 위로 올라오는 애니메이션이 작동하지 않음',
        cause: 'CSS에 애니메이션 스타일만 있고, JavaScript로 요소 가시성 감지 로직 없음. CSS 중복 스타일 충돌 발생',
        solution: 'Intersection Observer 추가. CSS 중복 스타일 정리 및 animateUp 클래스 추가. 각 이미지 카드에 animateUp과 delay 클래스 적용'
      },
      {
        title: 'Hover 애니메이션에 딜레이 발생',
        problem: '이미지 등장 순차 효과(delay1, delay2, delay3)가 hover 애니메이션에도 적용되어 느린 반응 발생',
        cause: '등장 애니메이션과 hover 효과가 동일한 transition을 공유',
        solution: '등장 애니메이션과 hover 효과를 완전히 분리. animationComplete 상태 추가 후, 애니메이션 완료 시에만 hover 활성화. CSS에서 :hover 상태에만 별도 transition 적용'
      },
      {
        title: 'Hover 해제 시 느린 반응',
        problem: '마우스를 뗄 때도 transition이 적용되어 원래 상태로 늦게 복귀',
        cause: ':not(:hover) 상태에서도 transition이 적용됨',
        solution: ':not(:hover) 상태에서는 transition: transform 0s ease 적용. Hover 시에만 transition: transform 0.3s ease 적용'
      },
      {
        title: 'Customer → Why 전환 시 사이드바 색상 깜빡임',
        problem: '섹션 전환 시 Sidebar 색상이 잠깐 잘못 표시됨',
        cause: '스크롤 감지 로직이 전환 지점에서 잘못된 섹션을 활성화',
        solution: '거리 기반 감지 로직으로 개선. 이전 섹션과 다를 때만 상태 업데이트. requestAnimationFrame 기반 throttle 적용'
      },
      {
        title: 'ESLint 컴파일 오류',
        problem: 'npm run build 시 ESLint 오류 발생',
        cause: 'HTML에서 작은따옴표 사용. 사용되지 않는 변수 존재',
        solution: '특허명: \'드론 조작 연습 및 테스트 시스템\' → 특허명: \'드론 조작 연습 및 테스트 시스템\'. 사용되지 않는 sectionBottom 변수 제거'
      },
      {
        title: '애니메이션이 너무 빨리 활성화됨',
        problem: '스크롤을 조금만 내려도 애니메이션이 시작됨',
        cause: 'threshold: 0.1, rootMargin: \'-50px 0px\' 설정으로 너무 민감함',
        solution: 'threshold: 0.5로 조정 (50% 보여야 시작). rootMargin: \'-130px 0px\'로 조정 (130px 더 스크롤해야 시작)'
      },
      {
        title: '모바일에서 Why 컴포넌트 미표시',
        problem: '모바일 환경에서 Why 컴포넌트가 보이지 않음',
        cause: '데스크톱 기준 threshold와 rootMargin 값이 모바일에서는 너무 엄격함',
        solution: '모바일: threshold: 0.1, rootMargin: \'-50px 0px\'. 데스크톱: threshold: 0.5, rootMargin: \'-130px 0px\''
      },
      {
        title: '협력업체/고객사 이미지 로딩 지연',
        problem: '협력업체와 고객사 이미지 로딩이 너무 늦음',
        cause: 'threshold: 0.5, rootMargin: \'-130px 0px\'로 늦게 시작. 애니메이션 delay 시간이 길음',
        solution: 'threshold: 0.3, rootMargin: \'-80px 0px\'로 조정. delay1: 0.2s → 0.1s, delay2: 0.4s → 0.2s, delay3: 0.6s → 0.3s'
      }
    ],
    futurePlans: [
      '드론 시뮬레이터 기능 추가',
      '실시간 멀티플레이어 모드',
      'AI 기반 개인 맞춤형 학습 경로',
      '모바일 앱 개발',
      'VR/AR 지원',
      '국제화 및 다국어 지원'
    ],
    security: [
      '사용자 인증 및 권한 관리',
      '데이터 암호화',
      'XSS 및 CSRF 방지',
      'API 요청 제한 및 보안'
    ]
  },
  {
    id: 'soundofmemory',
    name: '💻 Sound Of Memory',
    description: '나의 가치관과 말투를 복제한 AI가, 분산된 디지털 자산 통합·대외 소통 자동화 등 \'개인화 AI 에이전트\'로서 동작 (준비중)',
    technologies: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Firebase', 'Cloud Functions', 'Vercel'],
    period: '2025.06~',
    link: 'https://soundofmemory.io',
    github: 'https://github.com/Dongyeon0123/SoundOfMemory',
    status: 'in-progress',
    detailedDescription: 'SoundOfMemory는 사용자의 개성을 파악하고 맞춤형 AI 채팅 경험을 제공하는 Next.js 기반 웹 애플리케이션입니다. 온보딩 과정을 통해 사용자의 성향과 관심사를 분석하고, 이를 바탕으로 개인화된 AI와의 대화를 가능하게 합니다. 명함과 같은 공식적인 수단이 없는 사람들을 위해 사람들만의 개성 있는 브랜딩의 필요성을 느꼈고, 단순히 정보 전달을 넘어서 사용자의 본질을 담아내는 퍼스널 AI 아바타 서비스를 제작하게되었습니다.',
    features: [
      '개인화 온보딩: 12단계 질문을 통한 사용자 성향 분석',
      'AI 채팅: 개인 맞춤형 AI 어시스턴트와의 자연스러운 대화',
      '관심사 기반 추천: 사용자 선호도에 따른 맞춤 콘텐츠 제공',
      '실시간 타이핑 애니메이션: 자연스러운 채팅 경험',
      'Firebase 연동: 사용자 데이터 및 채팅 기록 저장',
      '프로필 관리: 개인 정보 및 아바타 커스터마이징'
    ],
    techStack: {
      frontend: ['Next.js', 'React', 'TypeScript'],
      styling: ['CSS Modules'],
      backend: ['Firebase (Firestore, Authentication)'],
      ai: ['Cloud Functions'],
      deployment: ['Vercel']
    },
    challenges: [
      {
        title: '온보딩 플로우 연결 문제',
        problem: '온보딩 완료 후 test-chat 페이지로 자연스럽게 연결되지 않음',
        cause: '온보딩 컴포넌트들이 독립적으로 작동해 페이지 간 전환이 부자연스러움',
        solution: 'router.push를 사용하여 온보딩 → test-chat → 홈으로 이어지는 완벽한 플로우 완성'
      },
      {
        title: 'Firebase 데이터 구조 설계 문제',
        problem: '온보딩 답변과 관심사 데이터를 효율적으로 저장해야 함',
        cause: '복잡한 데이터 구조와 서브컬렉션 관리',
        solution: '서브컬렉션을 활용한 체계적인 데이터 구조 설계 및 사용자별 데이터 격리'
      },
      {
        title: '채팅 경로 분리 및 데이터 격리 문제',
        problem: '내 아바타 채팅 기록이 다른 사용자에게 노출되는 보안 문제',
        cause: '잘못된 데이터베이스 경로 설계',
        solution: '사용자별 완전한 데이터 격리를 위한 올바른 경로 구조 설계'
      },
      {
        title: 'AI API 연동 및 에러 처리 문제',
        problem: '네트워크 오류 발생 시 플로우가 끊김',
        cause: '적절한 에러 처리 로직 부재',
        solution: 'try-catch를 활용한 강화된 에러 처리 및 사용자 경험 개선'
      }
    ],
    futurePlans: [
      'AI 응답 품질 향상',
      '다국어 지원',
      '모바일 앱 개발',
      '사용자 피드백 시스템 구축',
      '채팅 데이터 암호화 강화',
      '실시간 채팅 기능 추가'
    ],
    security: [
      '사용자별 데이터 완전 격리',
      'Firebase 보안 규칙 강화',
      '채팅 데이터 접근 권한 제한',
      '개인정보 보호 및 암호화'
    ]
  },
  {
    id: 'unimeet',
    name: '📱 UNIMEET',
    description: '대학생 대상 소셜 네트워킹 & 미팅 플랫폼 어플리케이션. 실시간 매칭·채팅·프로필 관리 등 다양한 커뮤니티 기능 제공 (준비중)',
    technologies: ['React Native', 'TypeScript', 'Redux'],
    period: '2025.03~',
    github: 'https://github.com/Dongyeon0123/UNIMEET',
    status: 'in-progress'
  },
  {
    id: 'react-todo',
    name: '🐙 React Todo 웹',
    description: '리스트 추가, 수정, 삭제, 상태관리를 제공하는 할일 관리 앱',
    technologies: ['React', 'Redux', 'useState', 'useEffect', 'HTML', 'CSS', 'JavaScript ES6+'],
    period: '2025.03 ~ 2025.05',
    github: 'https://github.com/Dongyeon0123/react-todolist',
    status: 'completed',
    detailedDescription: 'React Todo 웹은 React의 기본 개념을 활용하여 만든 할일 관리 애플리케이션입니다. useState와 useEffect를 활용한 상태 관리, 컴포넌트 분리 및 props 활용, 모달 구현 및 조건부 렌더링 등 React의 핵심 개념들을 실습할 수 있는 프로젝트입니다. 할 일 추가, 수정, 삭제, 완료 상태 체크 등의 기본적인 CRUD 기능을 제공하며, 스크롤 가능한 리스트 UI로 사용자 경험을 향상시켰습니다.',
    features: [
      '할 일 추가: 제목과 메모를 함께 입력하여 새로운 할 일 생성',
      '할 일 수정: 모달 창을 활용한 편집 기능',
      '할 일 삭제: 개별 항목 삭제 기능',
      '완료 상태 체크: 체크박스를 통한 완료 표시',
      '스크롤 가능한 리스트 UI: 항목이 많아져도 편리한 스크롤',
      '실시간 할 일 개수 표시: 현재 등록된 할 일의 개수를 실시간으로 확인',
      '완료된 항목 스타일링: 체크된 항목은 회색 글씨와 가로줄로 표시'
    ],
    techStack: {
      frontend: ['React (CRA 환경)', 'HTML', 'CSS'],
      hooks: ['useState', 'useEffect'],
      language: ['JavaScript ES6+']
    },
    challenges: [
      {
        title: '상태 관리 구조 설계',
        problem: '여러 개의 상태(제목, 메모, 체크상태, 모달 등)를 효율적으로 관리해야 함',
        cause: 'React의 상태 관리 개념에 대한 이해 부족',
        solution: 'useState를 활용하여 각 상태를 독립적으로 관리하고, 배열 조작을 통해 데이터 일관성 유지'
      },
      {
        title: '컴포넌트 분리 및 props 전달',
        problem: '모달 컴포넌트를 별도로 분리하고 필요한 데이터를 전달해야 함',
        cause: '컴포넌트 간 데이터 전달 방식에 대한 이해 부족',
        solution: 'Modal 컴포넌트를 별도로 분리하고 props를 통해 필요한 상태값과 함수들을 전달'
      },
      {
        title: '배열 조작 및 상태 업데이트',
        problem: '할 일 추가, 수정, 삭제 시 배열 상태를 올바르게 업데이트해야 함',
        cause: 'JavaScript 배열 메서드와 React 상태 업데이트 방식에 대한 이해 부족',
        solution: 'spread operator와 splice를 활용하여 불변성을 유지하면서 배열 상태 업데이트'
      },
      {
        title: '모달 구현 및 조건부 렌더링',
        problem: '수정 버튼 클릭 시 모달을 표시하고, 모달 내에서 데이터를 편집해야 함',
        cause: '조건부 렌더링과 모달 UI 구현 경험 부족',
        solution: '모달 상태와 수정 인덱스를 관리하여 조건부 렌더링으로 모달 표시, useEffect를 활용하여 모달 데이터 초기화'
      },
      {
        title: '동적 스타일링 및 클래스 토글링',
        problem: '체크박스 상태에 따라 완료된 항목의 스타일을 동적으로 변경해야 함',
        cause: 'CSS 클래스 동적 적용 방식에 대한 이해 부족',
        solution: '삼항 연산자를 활용하여 체크 상태에 따라 done 클래스를 조건부로 적용'
      },
      {
        title: '스크롤 가능한 리스트 UI',
        problem: '할 일 항목이 많아질 때 스크롤이 자동으로 생성되도록 구성해야 함',
        cause: 'CSS overflow 속성과 max-height 설정에 대한 이해 부족',
        solution: 'list-container에 max-height와 overflow-y: auto를 설정하여 스크롤 자동 생성'
      }
    ],
    futurePlans: [
      '리스트 카테고리 기능 (공부/운동/할 일 등)',
      '체크 완료 항목 자동 하단 이동',
      'Firebase 또는 백엔드 연동',
      '날짜별 필터 및 정렬 기능',
      '드래그 앤 드롭으로 순서 변경',
      '로컬 스토리지를 활용한 데이터 영속성',
      '반응형 디자인 개선',
      '다크 모드 지원'
    ],
    security: [
      '입력값 유효성 검사 (빈 문자열 체크)',
      'XSS 방지를 위한 입력 데이터 검증',
      '컴포넌트 간 데이터 격리'
    ]
  },

  {
    id: 'drone-space',
    name: '💻 Drone Space',
    description: '드론 관련 커뮤니티, 구인·구직, 정보 공유를 위한 종합 플랫폼',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    period: '2023.05 ~ 2023.06',
    github: 'https://github.com/Dongyeon0123/DroneSpace',
    status: 'completed'
  }
];

export const skills: Skill[] = [
  // Main Skills
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'React Native', category: 'mobile' },
  
  // Tools & Collaboration
  { name: 'VSCode', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Notion', category: 'tools' },
  
  // Learning & Experience
  { name: 'Spring', category: 'learning' },
  { name: 'Java', category: 'learning' },
  { name: 'MySQL', category: 'learning' },
  { name: 'MongoDB', category: 'learning' },
  { name: 'Hibernate', category: 'learning' },
  { name: 'Gradle', category: 'learning' },
  { name: 'PHP', category: 'learning' },
  { name: 'C', category: 'learning' },
  { name: 'Python', category: 'learning' },
  { name: 'Docker', category: 'learning' },
  { name: 'Linux', category: 'learning' },
  { name: 'Android Studio', category: 'learning' },
  { name: 'jQuery', category: 'learning' }
];

export const experiences: Experience[] = [
  {
    title: 'Next.js',
    description: [
      'SSR/CSR 하이브리드 구조 설계 및 App Router, 서버 액션 기반 페이지 전환 경험',
      'SEO 최적화 적용 및 Vercel 배포 자동화 경험',
      '커스텀 훅 설계와 코드 스플리팅을 통한 프로젝트 성능 및 재사용성 개선',
      'Spring Boot와 Firebase를 활용한 백엔드 API 연동 경험 보유',
      'Pages Router 기반 SPA 구조 설계 및 동적 라우팅을 통한 페이지 전환 경험',
      'Firebase 연동을 통한 실시간 데이터 동기화 및 상태 관리 구현',
      '컴포넌트 기반 아키텍처 설계로 재사용성 및 유지보수성 향상',
      'CSS Modules를 활용한 스타일링 및 반응형 웹 디자인 구현'
    ],
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Vercel']
  },
  {
    title: 'React',
    description: [
      '함수형 컴포넌트와 React Hooks를 활용한 상태 관리 및 사이드 이펙트 처리',
      'Props 인터페이스 설계를 통한 컴포넌트 간 데이터 흐름 최적화',
      '조건부 렌더링과 이벤트 핸들링을 통한 인터랙티브 UI 구현',
      '컴포넌트 분리 및 모듈화를 통한 코드 재사용성 증대'
    ],
    technologies: ['React', 'TypeScript', 'Hooks']
  },
  {
    title: 'React Native',
    description: [
      'Expo 기반 모바일 UI, 상태 관리 경험',
      'FCM 기반 실시간 알림 연동, 멀티 디바이스 UI/UX 대응 개선',
      '앱 빌드 및 앱스토어·플레이스토어 출시 자동화 경험'
    ],
    technologies: ['React Native', 'Expo', 'FCM']
  },
  {
    title: 'TypeScript',
    description: [
      '타입 명세·제네릭·유틸리티 타입 적용을 통한 대규모 프로젝트의 에러 방지 및 코드 품질 개선',
      'Props/State 구조 관리 및 API 데이터 타입 설계를 통한 협업 및 유지보수 효율화',
      '인터페이스 설계를 통한 Props/State 타입 안정성 확보 및 런타임 에러 방지',
      'API 응답 데이터 타입 정의 및 Firebase 데이터 구조 타입 설계',
      '제네릭을 활용한 재사용 가능한 컴포넌트 및 유틸리티 함수 구현',
      '타입 추론을 통한 개발 생산성 향상 및 코드 품질 개선'
    ],
    technologies: ['TypeScript', 'Generics', 'Interfaces']
  },
  {
    title: 'Redux',
    description: [
      'Redux Toolkit 및 미들웨어 적용을 통한 비동기 데이터 처리 구조 설계 경험',
      'Slice/Immer 기반 상태 불변성 및 코드 모듈화 구조 개선',
      '프로젝트 스케일별 상태관리 전략 수립 및 성능 문제 해결 경험',
      'createSlice를 통한 상태 업데이트 로직 모듈화 및 불변성 유지',
      'useSelector와 useDispatch를 활용한 컴포넌트-스토어 연동 구현',
      '실시간 데이터 동기화를 위한 상태 관리 전략 수립 및 성능 최적화'
    ],
    technologies: ['Redux', 'Redux Toolkit', 'Immer']
  }
];

export const contacts: Contact[] = [
  {
    platform: 'Gmail',
    url: 'mailto:ldy1951123@gmail.com',
    icon: 'mail'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/dong.y____',
    icon: 'instagram'
  },
  {
    platform: 'Discord',
    url: 'https://discordapp.com/users/이동연#7997',
    icon: 'discord'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/Dongyeon0123',
    icon: 'github'
  },
  {
    platform: 'Notion',
    url: 'https://notion.so',
    icon: 'notion'
  }
]; 