import { Project, Skill, Experience, Contact } from '@/types';

export const projects: Project[] = [
  {
    id: 'nallijaku',
    name: '🛸 날리자KU',
    description: '드론 교육과 커뮤니티를 연결하는 학습·소통 웹사이트 (준비 중, Vercel 배포)',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'Vercel'],
    period: '2025.07~',
    link: 'https://nallijaku.com',
    status: 'in-progress'
  },
  {
    id: 'soundofmemory',
    name: '💻 Sound Of Memory',
    description: '나의 가치관과 말투를 복제한 AI가, 분산된 디지털 자산 통합·대외 소통 자동화 등 \'개인화 AI 에이전트\'로서 동작 (준비중)',
    technologies: ['Next.js', 'TypeScript', 'Redux', 'Vercel'],
    period: '2025.06~',
    link: 'https://soundofmemory.io',
    status: 'in-progress'
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
    technologies: ['React', 'Redux', 'useState', 'useEffect'],
    period: '2025.03 ~ 2025.05',
    github: 'https://github.com/Dongyeon0123/react-todolist',
    status: 'completed'
  },
  {
    id: 'youtube-api',
    name: '📦 Youtube API 음악 플레이리스트',
    description: '유튜브 API를 활용해 곡 CRUD·플레이리스트 관리 구현',
    technologies: ['Java', 'Spring Boot'],
    period: '2024.12',
    github: 'https://github.com/Dongyeon0123/YouTube-API-Music',
    status: 'completed'
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