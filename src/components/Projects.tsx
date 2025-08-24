'use client'; //

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Image as ImageIcon, X, Globe, Users, Target, Zap } from 'lucide-react';
import { projects } from '@/lib/data';
import { Project } from '@/types';
import Image from 'next/image';
import { useState } from 'react';

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      'drone-space': '/DroneSpace.jpg'
    };
    return imageMap[projectId] || '/file.svg';
  };

  const handleImageError = (projectId: string) => {
    console.error(`Failed to load image for project: ${projectId}`);
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getProjectFeatures = (projectId: string) => {
    const featuresMap: { [key: string]: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }[] } = {
      'nallijaku': [
        { icon: Globe, title: '드론 교육 플랫폼', description: '체계적인 드론 조종 교육 과정 제공' },
        { icon: Users, title: '커뮤니티', description: '드론 애호가들의 소통 공간' },
        { icon: Target, title: '실습 환경', description: '가상 시뮬레이션을 통한 안전한 연습' }
      ],
      'soundofmemory': [
        { icon: Zap, title: 'AI 개인화', description: '개인의 가치관과 말투를 학습하는 AI' },
        { icon: Target, title: '자산 통합', description: '분산된 디지털 자산을 통합 관리' },
        { icon: Users, title: '자동화', description: '대외 소통 자동화 시스템' }
      ],
      'unimeet': [
        { icon: Users, title: '소셜 네트워킹', description: '대학생 대상 미팅 플랫폼' },
        { icon: Zap, title: '실시간 매칭', description: '즉시 상대방을 찾아 연결' },
        { icon: Target, title: '채팅 시스템', description: '안전하고 편리한 소통 도구' }
      ],
      'react-todo': [
        { icon: Target, title: '할일 관리', description: '효율적인 일정 관리 시스템' },
        { icon: Zap, title: '상태 관리', description: 'Redux를 활용한 상태 관리' },
        { icon: Users, title: '사용자 경험', description: '직관적이고 반응성 좋은 UI' }
      ],
      'drone-space': [
        { icon: Users, title: '커뮤니티', description: '드론 관련 정보 공유 공간' },
        { icon: Target, title: '구인구직', description: '드론 전문가 매칭 서비스' },
        { icon: Globe, title: '정보 플랫폼', description: '드론 기술 및 뉴스 제공' }
      ]
    };
    return featuresMap[projectId] || [];
  };

  const renderTechStack = (techStack: Project['techStack']) => {
    if (!techStack) return null;
    
    return (
      <div className="space-y-4">
        {techStack.frontend && (
          <div>
            <h5 className="text-sm font-medium text-blue-300 mb-2">Frontend</h5>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((tech: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-md text-sm border border-blue-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {techStack.styling && (
          <div>
            <h5 className="text-sm font-medium text-purple-300 mb-2">Styling</h5>
            <div className="flex flex-wrap gap-2">
              {techStack.styling.map((tech: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-md text-sm border border-purple-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {techStack.backend && (
          <div>
            <h5 className="text-sm font-medium text-green-300 mb-2">Backend</h5>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-green-600/20 text-green-300 rounded-md text-sm border border-green-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {techStack.ai && (
          <div>
            <h5 className="text-sm font-medium text-orange-300 mb-2">AI Integration</h5>
            <div className="flex flex-wrap gap-2">
              {techStack.ai.map((tech: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-orange-600/20 text-orange-300 rounded-md text-sm border border-orange-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        {techStack.deployment && (
          <div>
            <h5 className="text-sm font-medium text-pink-300 mb-2">Deployment</h5>
            <div className="flex flex-wrap gap-2">
              {techStack.deployment.map((tech: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-pink-600/20 text-pink-300 rounded-md text-sm border border-pink-500/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="py-20" style={{ 
      background: 'var(--hero-bg)',
      backgroundImage: 'var(--hero-gradient)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>
            Project Portfolio
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-color)' }}>
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
              className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out overflow-hidden group cursor-pointer"
              onClick={() => openModal(project)}
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
                <div className="absolute bottom-4 left-4">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    클릭하여 자세히 보기
                  </span>
                </div>
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
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
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
                  Spring Boot와 Firebase api 연동 경험 있음
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-600/50 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 모달 헤더 */}
              <div className="relative p-6 border-b border-gray-600/50">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-300" />
                </button>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-700/50">
                    <Image
                      src={getProjectImage(selectedProject.id)}
                      alt={selectedProject.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {selectedProject.name}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedProject.status)}`}>
                        {getStatusText(selectedProject.status)}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {selectedProject.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 모달 내용 */}
              <div className="p-6 space-y-8">
                {/* 프로젝트 설명 */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">프로젝트 개요</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>
                </div>

                {/* 프로젝트 특징 */}
                {selectedProject.features && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">주요 기능</h3>
                    <div className="space-y-3">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg border border-gray-600/30"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 프로젝트 특징 (기본) */}
                {!selectedProject.features && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">주요 특징</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {getProjectFeatures(selectedProject.id).map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30"
                        >
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 bg-blue-600/20 rounded-lg">
                              <feature.icon className="w-5 h-5 text-blue-400" />
                            </div>
                            <h4 className="font-medium text-white">{feature.title}</h4>
                          </div>
                          <p className="text-gray-400 text-sm">{feature.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 상세 기술 스택 */}
                {selectedProject.techStack && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">기술 스택</h3>
                    {renderTechStack(selectedProject.techStack)}
                  </div>
                )}

                {/* 기본 사용 기술 */}
                {!selectedProject.techStack && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">사용 기술</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech: string, index: number) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-lg font-medium border border-blue-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 개발 과정에서 겪은 문제점들과 해결 과정 */}
                {selectedProject.challenges && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">개발 과정에서 겪은 문제점들과 해결 과정</h3>
                    <div className="space-y-4">
                      {selectedProject.challenges.map((challenge: NonNullable<Project['challenges']>[0], index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30"
                        >
                          <h4 className="font-medium text-white mb-3 text-lg">{challenge.title}</h4>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="text-red-400 font-medium">문제: </span>
                              <span className="text-gray-300">{challenge.problem}</span>
                            </div>
                            <div>
                              <span className="text-yellow-400 font-medium">원인: </span>
                              <span className="text-gray-300">{challenge.cause}</span>
                            </div>
                            <div>
                              <span className="text-green-400 font-medium">해결: </span>
                              <span className="text-gray-300">{challenge.solution}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 향후 개선 계획 */}
                {selectedProject.futurePlans && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">향후 개선 계획</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.futurePlans.map((plan: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{plan}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 보안 고려사항 */}
                {selectedProject.security && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">보안 고려사항</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.security.map((item: string, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center space-x-3 p-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-lg border border-red-500/30"
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 링크 버튼 */}
                <div className="flex space-x-4 pt-4 border-t border-gray-600/30">
                  {selectedProject.link && (
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 ease-out border border-emerald-500/30 shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe className="w-5 h-5" />
                      <span>사이트 방문</span>
                    </motion.a>
                  )}
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 ease-out border border-gray-500/30 shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub 보기</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 