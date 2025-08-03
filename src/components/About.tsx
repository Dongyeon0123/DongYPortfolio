'use client'; //

import { motion } from 'framer-motion';
import { Heart, Users, Code, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: '직관적이고 세련된 반응형 웹 개발',
      description: '사용자 경험을 최우선으로 하는 반응형 웹 애플리케이션을 개발합니다.',
      bgGradient: 'from-blue-600/20 to-cyan-600/20',
      borderColor: 'border-blue-500/30',
      iconGradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: '애니메이션과 인터랙션',
      description: '몰입감 있는 사용자 경험을 위해 애니메이션과 인터랙션에 집중합니다.',
      bgGradient: 'from-pink-600/20 to-purple-600/20',
      borderColor: 'border-pink-500/30',
      iconGradient: 'from-pink-600 to-purple-600'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '소통과 협업',
      description: '코드 품질과 유지보수를 중요하게 생각하며 팀워크를 중시합니다.',
      bgGradient: 'from-green-600/20 to-emerald-600/20',
      borderColor: 'border-green-500/30',
      iconGradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: '꾸준한 성장',
      description: '사용자에게 더 나은 경험을 제공하는 것을 목표로 합니다.',
      bgGradient: 'from-orange-600/20 to-red-600/20',
      borderColor: 'border-orange-500/30',
      iconGradient: 'from-orange-600 to-red-600'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: '열정적인 개발자',
      description: '무엇보다 개발을 좋아하고, 누구보다 열정있는 항상 배우려 하는 개발자가 되고싶습니다.',
      bgGradient: 'from-purple-600/20 to-indigo-600/20',
      borderColor: 'border-purple-500/30',
      iconGradient: 'from-purple-600 to-indigo-600'
    }
  ];

  return (
    <section id="about" className="py-20" style={{ 
      background: 'var(--hero-bg)',
      backgroundImage: 'var(--hero-gradient)'
    }}>
      {/* 떠다니는 동그란 애니메이션 요소들 */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-pink-500/15 to-purple-500/15 rounded-full blur-xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-12 h-12 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>
            About Me
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-color)' }}>
            프론트엔드 개발자로서 사용자 중심의 웹 애플리케이션을 개발하고 있습니다.
          </p>
        </motion.div>

        {/* 프로필 섹션 추가 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/profile.jpeg"
                alt="DongY Profile"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30 blur-2xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 80, damping: 10 }}
              viewport={{ once: true }}
              style={{ color: '#23272f' }} // 진한 회색
            >
              <span className="font-bold text-gray-800 dark:text-white">Frontend Developer</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 text-left"
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>
              안녕하세요! 👋
            </h3>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-color)' }}>
              Next.js와 React를 기반으로 사용자 경험 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자입니다.
              구조화된 컴포넌트 설계, 반응형 UI, 인터랙션 구현에 강점을 가지고 있으며,
              재사용성과 유지보수성을 고려한 클린 코드를 지향합니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-gradient-to-r from-blue-600/40 to-purple-600/40 dark:from-blue-600/30 dark:to-purple-600/30 p-4 rounded-lg border border-blue-500/30 dark:border-blue-500/40 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">기술 스택</h4>
                <p className="text-sm font-medium" style={{ color: 'var(--text-color)' }}>React, Next.js, TypeScript, Redux</p>
              </motion.div>
              <motion.div 
                className="bg-gradient-to-r from-purple-600/40 to-pink-600/40 dark:from-purple-600/30 dark:to-pink-600/30 p-4 rounded-lg border border-purple-500/30 dark:border-purple-500/40 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">관심 분야</h4>
                <p className="text-sm font-medium" style={{ color: 'var(--text-color)' }}>UI/UX, 애니메이션, 모바일 개발</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${feature.borderColor}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div 
                  className={`p-2 bg-gradient-to-r ${feature.iconGradient} text-white rounded-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-color)' }}>
                  {feature.title}
                </h3>
              </div>
              <p className="leading-relaxed font-medium" style={{ color: 'var(--text-color)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div 
            className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl border border-pink-500/30"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              개발 철학
            </h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto text-white/90 font-medium">
              &quot;사용자 경험을 최우선으로 생각하며, 깔끔하고 유지보수하기 쉬운 코드를 작성하는 것이 저의 목표입니다. 
              새로운 기술을 배우는 것을 즐기며, 항상 더 나은 솔루션을 찾기 위해 노력합니다.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 