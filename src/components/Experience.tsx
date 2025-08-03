'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Code, Database, Smartphone, Palette, Zap } from 'lucide-react';
import { experiences } from '@/lib/data';

export default function Experience() {
  const getIcon = (title: string) => {
    switch (title) {
      case 'Next.js':
        return <Code className="w-6 h-6" />;
      case 'React':
        return <Code className="w-6 h-6" />;
      case 'React Native':
        return <Smartphone className="w-6 h-6" />;
      case 'Firebase':
        return <Database className="w-6 h-6" />;
      case 'TypeScript':
        return <Code className="w-6 h-6" />;
      case 'Redux':
        return <Zap className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 via-purple-900/20 to-pink-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & Growth
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            다양한 기술을 활용한 프로젝트 경험과 지속적인 성장 과정을 소개합니다.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-700/50 to-gray-600/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl border border-gray-600/50 group"
            >
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-300 shadow-lg">
                    {getIcon(experience.title)}
                  </div>
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {experience.title}
                  </motion.h3>
                  
                  <div className="space-y-3 mb-6">
                    {experience.description.map((desc, descIndex) => (
                      <motion.div 
                        key={descIndex} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 + descIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.15 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <p className="text-gray-300 leading-relaxed">
                          {desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-gray-600/50 to-gray-500/50 text-gray-200 text-sm rounded-full font-medium border border-gray-500/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div 
            className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl border border-pink-500/30"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              성장 과정
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2">기술적 성장</h4>
                <p className="text-sm opacity-90">
                  React부터 Next.js, TypeScript까지 현대적인 프론트엔드 기술 스택을 습득하고 발전시켜왔습니다.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2">프로젝트 경험</h4>
                <p className="text-sm opacity-90">
                  다양한 프로젝트를 통해 실무 경험을 쌓고, 사용자 중심의 개발 방식을 익혔습니다.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 