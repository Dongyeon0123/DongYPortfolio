'use client'; //

import { motion } from 'framer-motion';
import { Mail, Github, Instagram, MessageCircle, FileText } from 'lucide-react';
import { contacts } from '@/lib/data';

export default function Contact() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'mail':
        return <Mail className="w-6 h-6" />;
      case 'github':
        return <Github className="w-6 h-6" />;
      case 'instagram':
        return <Instagram className="w-6 h-6" />;
      case 'discord':
        return <MessageCircle className="w-6 h-6" />;
      case 'notion':
        return <FileText className="w-6 h-6" />;
      default:
        return <Mail className="w-6 h-6" />;
    }
  };

  const getContactColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'gmail':
        return 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-red-500/30';
      case 'github':
        return 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border-gray-600/30';
      case 'instagram':
        return 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 border-pink-500/30';
      case 'discord':
        return 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-indigo-500/30';
      case 'notion':
        return 'bg-gradient-to-r from-black to-gray-900 hover:from-gray-900 hover:to-gray-800 border-gray-700/30';
      default:
        return 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 border-blue-500/30';
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            궁금한 점이나 협업 제안이 있으시면 언제든 연락해주세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.platform}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex items-center space-x-4 p-6 rounded-xl shadow-lg hover:shadow-xl ${getContactColor(contact.platform)} text-white group border`}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {getIcon(contact.icon)}
              </motion.div>
              <div>
                <h3 className="text-lg font-semibold group-hover:scale-105 transition-transform">
                  {contact.platform}
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {contact.platform === 'Gmail' ? 'ldy1951123@gmail.com' : 
                   contact.platform === 'GitHub' ? 'Dongyeon0123' :
                   contact.platform === 'Instagram' ? 'dong.y____' :
                   contact.platform === 'Discord' ? '이동연#7997' :
                   'Notion'}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl border border-pink-500/30"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              함께 일하고 싶은 개발자
            </h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              사용자 경험을 최우선으로 생각하며, 깔끔하고 유지보수하기 쉬운 코드를 작성하는 프론트엔드 개발자입니다.<br></br>
              새로운 기술을 배우는 것을 즐기며, 항상 더 나은 솔루션을 찾기 위해 노력합니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2">기술 스택</h4>
                <p className="text-sm opacity-90">
                  React, Next.js, TypeScript, Redux
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2">개발 철학</h4>
                <p className="text-sm opacity-90">
                  사용자 중심의 개발, 클린 코드
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2">성장 마인드</h4>
                <p className="text-sm opacity-90">
                  지속적인 학습과 개선
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 