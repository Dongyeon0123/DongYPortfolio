'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Palette, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // 클라이언트 사이드에서만 실행
    if (typeof window !== 'undefined') {
      // 페이지 로딩 시 스크롤을 맨 위로 이동
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
      };
      
      // 즉시 실행
      scrollToTop();
      
      // 약간의 지연 후 다시 실행
      const timer = setTimeout(scrollToTop, 100);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  // 프로필 이미지 주변 아이콘들 (3개만) - useMemo로 최적화
  const profileIcons = useMemo(() => [
    { icon: Code, color: 'text-white', bgColor: 'bg-blue-500/80', delay: 0 },
    { icon: Smartphone, color: 'text-white', bgColor: 'bg-green-500/80', delay: 1 },
    { icon: Palette, color: 'text-white', bgColor: 'bg-purple-500/80', delay: 2 }
  ], []);

  // 애니메이션 variants 최적화
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40">
              <Image
                src="/profile.jpeg"
                alt="DongY Profile"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            안녕하세요!{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frontend Developer
            </span>{' '}
            DongY입니다
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            사용자 경험을 중심으로 한 웹 애플리케이션 개발에 열정을 가진<br />
            프론트엔드 개발자입니다. 깔끔하고 직관적인 인터페이스를 만드는 것을 좋아합니다.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* 떠다니는 동그란 애니메이션 요소들 - 성능 최적화 */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-lg"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-lg"
        animate={{
          x: [0, -40, 0],
          y: [0, 80, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg"
        animate={{
          x: [0, 120, 0],
          y: [0, -100, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* 배경 애니메이션 요소들 */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          {/* 프로필 이미지 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <Image
                  src="/profile.jpeg"
                  alt="DongY Profile"
                  fill
                  className="rounded-full object-cover shadow-2xl"
                  priority
                />
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ zIndex: -1 }}
                />
                <motion.div
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              {/* 프로필 이미지 위에 걸쳐서 돌아다니는 아이콘들 */}
              {profileIcons.map((iconData, index) => {
                const IconComponent = iconData.icon;
                const angle = (index * 120) * (Math.PI / 180); // 120도씩 배치 (3개)
                const radius = 90; // 반지름을 늘려서 이미지 밖에서 돌도록
                
                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{
                      x: Math.cos(angle) * radius,
                      y: Math.sin(angle) * radius,
                    }}
                    animate={{
                      x: Math.cos(angle) * radius,
                      y: Math.sin(angle) * radius,
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: iconData.delay,
                    }}
                  >
                    <motion.div
                      className={`p-2 ${iconData.bgColor} backdrop-blur-sm rounded-full border border-gray-600/50 shadow-lg ${iconData.color}`}
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: 'rgba(59, 130, 246, 0.3)',
                        borderColor: '#3B82F6'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent size={16} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            안녕하세요!{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Frontend Developer
            </span>{' '}
            DongY입니다
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            사용자 경험을 중심으로 한 웹 애플리케이션 개발에 열정을 가진<br />
            프론트엔드 개발자입니다. 깔끔하고 직관적인 인터페이스를 만드는 것을 좋아합니다.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-700"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-gray-200">React & Next.js</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-700"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Palette className="w-5 h-5 text-purple-400" />
              <span className="text-gray-200">UI/UX Design</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-700"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Smartphone className="w-5 h-5 text-green-400" />
              <span className="text-gray-200">Mobile Development</span>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.a
              href="#about"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-500/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>더 알아보기</span>
              <ArrowDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
} 