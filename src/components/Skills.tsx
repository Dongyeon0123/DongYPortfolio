'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Main Skill Stack',
      category: 'frontend' as const,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Tools & Collaboration',
      category: 'tools' as const,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      title: '학습 & 경험 기술',
      category: 'learning' as const,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30'
    }
  ];

  const getSkillColor = (skillName: string) => {
    const colorMap: { [key: string]: string } = {
      'React': 'from-blue-500 to-cyan-500',
      'Next.js': 'from-purple-500 to-pink-500',
      'TypeScript': 'from-blue-600 to-blue-700',
      'JavaScript': 'from-yellow-500 to-orange-500',
      'HTML': 'from-orange-500 to-red-500',
      'CSS': 'from-blue-500 to-indigo-500',
      'Redux': 'from-purple-600 to-purple-700',
      'React Native': 'from-blue-400 to-cyan-400',
      'VSCode': 'from-blue-500 to-blue-600',
      'GitHub': 'from-gray-700 to-gray-800',
      'Figma': 'from-purple-500 to-pink-500',
      'Notion': 'from-gray-500 to-gray-600',
      'Spring': 'from-green-600 to-green-700',
      'Java': 'from-red-500 to-red-600',
      'MySQL': 'from-blue-500 to-blue-600',
      'MongoDB': 'from-green-500 to-green-600',
      'Hibernate': 'from-blue-500 to-blue-600',
      'Gradle': 'from-green-500 to-green-600',
      'PHP': 'from-purple-500 to-purple-600',
      'C': 'from-blue-500 to-blue-600',
      'Python': 'from-blue-500 to-yellow-500',
      'Docker': 'from-blue-500 to-blue-600',
      'Linux': 'from-yellow-500 to-orange-500',
      'Android Studio': 'from-green-500 to-green-600',
      'jQuery': 'from-blue-500 to-blue-600'
    };
    return colorMap[skillName] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 via-purple-900/30 to-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Main Skill Stack
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            다양한 기술 스택을 활용하여 사용자 중심의 웹 애플리케이션을 개발합니다.
          </p>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6 text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.2 }}
              viewport={{ once: true }}
            >
              {category.title}
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills
                .filter(skill => skill.category === category.category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.05,
                      rotateY: 5,
                      z: 50
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-gradient-to-br from-gray-700/50 to-gray-600/50 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-xl text-center cursor-pointer group border border-gray-600/50"
                  >
                    <motion.div 
                      className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${getSkillColor(skill.name)} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {skill.name.charAt(0)}
                    </motion.div>
                    <motion.p 
                      className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-500 ease-out"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {skill.name}
                    </motion.p>
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div 
            className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl border border-pink-500/30"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              기술 스택 특징
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, delay: 0.8 }}
              >
                <h4 className="font-semibold mb-2">Frontend</h4>
                <p className="text-sm opacity-90">
                  React, Next.js, TypeScript를 활용한 현대적인 웹 개발
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, delay: 1.0 }}
              >
                <h4 className="font-semibold mb-2">Mobile</h4>
                <p className="text-sm opacity-90">
                  React Native를 통한 크로스 플랫폼 모바일 앱 개발
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, delay: 1.2 }}
              >
                <h4 className="font-semibold mb-2">Tools</h4>
                <p className="text-sm opacity-90">
                  효율적인 개발을 위한 다양한 도구 활용
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 