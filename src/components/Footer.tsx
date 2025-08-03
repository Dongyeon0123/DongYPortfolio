'use client'; //

import { motion } from 'framer-motion';
import { Heart, Github, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05, color: '#3B82F6' }}
              transition={{ duration: 0.3 }}
            >
              DongY
            </motion.h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Frontend Developer, UI/UX Lover
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              href="https://github.com/Dongyeon0123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ 
                scale: 1.2,
                rotate: 360,
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:ldy1951123@gmail.com"
              className="text-gray-400 hover:text-red-400 transition-colors"
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dong.y____"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
              whileHover={{ 
                scale: 1.2,
                rotate: -5,
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ color: '#9CA3AF' }}
              transition={{ duration: 0.3 }}
            >
              © 2025 DongY. Made with{' '}
              <motion.span
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              >
                <Heart className="inline w-4 h-4 text-red-500" />
              </motion.span>
              {' '}using Next.js & TypeScript
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 