'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code, Image as ImageIcon } from 'lucide-react';
import { projects } from '@/lib/data';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500 text-white border-green-500';
      case 'in-progress':
        return 'bg-blue-500 text-white border-blue-500';
      case 'planned':
        return 'bg-yellow-500 text-white border-yellow-500';
      default:
        return 'bg-gray-500 text-white border-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '완료';
      case 'in-progress':
        return '진행중';
      case 'planned':
        return '계획중';
      default:
        return '알 수 없음';
    }
  };

  const getProjectImage = (projectId: string) => {
    const imageMap: { [key: string]: string } = {
      'nallijaku': '/NALKU.jpg',
      'soundofmemory': '/SOM.jpg',
      'unimeet': '/UNIMEET.jpg',
      'react-todo': '/TODO.jpg',
      'youtube-api': '/Youtube.jpg',
      'drone-space': '/DroneSpace.jpg'
    };
    return imageMap[projectId] || '/file.svg';
  };

  const handleImageError = (projectId: string) => {
    console.error(`Failed to load image for project: ${projectId}`);
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Project Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            다양한 프로젝트를 통해 기술을 발전시키고 사용자 경험을 개선해왔습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out overflow-hidden group"
            >
              {/* 프로젝트 이미지 */}
              <motion.div
                className="relative h-48 overflow-hidden bg-gray-700/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {!imageErrors[project.id] ? (
                  <Image
                    src={getProjectImage(project.id)}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    onError={() => handleImageError(project.id)}
                    onLoad={() => console.log(`Image loaded successfully: ${project.id}`)}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxAAPwCdABmX/9k="
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-700/50">
                    <div className="text-center">
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">{project.name}</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500 ease-out" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500 ease-out">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-2 mb-4 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.period}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-200 text-xs rounded-full font-medium border border-gray-500/50 transition-all duration-300 ease-out"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 ease-out border border-emerald-500/30 shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">사이트</span>
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 ease-out border border-gray-500/30 shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </motion.a>
                  )}
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
              프로젝트 특징
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2">웹 개발</h4>
                <p className="text-sm opacity-90">
                  Next.js와 React를 활용한 현대적인 웹 애플리케이션
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2">모바일 앱</h4>
                <p className="text-sm opacity-90">
                  React Native를 통한 크로스 플랫폼 개발
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2">백엔드 연동</h4>
                <p className="text-sm opacity-90">
                  Spring Boot와 Firebase를 활용한 풀스택 개발
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 