import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// 지연 로딩할 컴포넌트들
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
});

const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
});

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-32 bg-gray-900" />
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="h-32 bg-gray-900" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
