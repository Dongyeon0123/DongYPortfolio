'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Mail, Github, Instagram, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">DongY</div>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <Sun size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-600/50 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.22, ease: "easeInOut" }}
    >
      {/* 스크롤 진행률 바 */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-10"
        style={{ scaleX, width: '100%' }}
      />

      {/* 배경 그라데이션 효과 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* 미묘한 파티클 효과 */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="text-xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer relative group px-3 py-2 rounded-lg"
            whileHover={{ scale: 1.07 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.18, delay: 0.1, ease: "easeInOut" }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DongY
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-out"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
            />
            <motion.div
              className="absolute inset-0 bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors relative group font-medium px-3 py-2 rounded-lg cursor-pointer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3, scale: 1.07 }}
                transition={{ duration: 0.18, delay: 0.12 + index * 0.04, ease: "easeInOut" }}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.substring(1); // '#' 제거
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500 ease-out"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
                <motion.div
                  className="absolute inset-0 bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.15, rotate: 180, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors relative group rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18, delay: 0.18, ease: "easeInOut" }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <motion.div
                className="absolute inset-0 bg-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.button>
            <motion.a
              href="mailto:ldy1951123@gmail.com"
              whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-300 transition-colors relative group rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18, delay: 0.20, ease: "easeInOut" }}
            >
              <Mail size={20} />
              <motion.div
                className="absolute inset-0 bg-red-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
            <motion.a
              href="https://github.com/Dongyeon0123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: -5, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors relative group rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18, delay: 0.22, ease: "easeInOut" }}
            >
              <Github size={20} />
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dong.y____"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-300 transition-colors relative group rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18, delay: 0.24, ease: "easeInOut" }}
            >
              <Instagram size={20} />
              <motion.div
                className="absolute inset-0 bg-pink-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
} 