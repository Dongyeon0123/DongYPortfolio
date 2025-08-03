'use client'; //

import { motion } from 'framer-motion';

export default function FloatingBackground() {
  return (
    <>
      {/* 떠다니는 동그란 애니메이션 요소들 - 성능 최적화 */}
      <motion.div
        className="fixed top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/50 to-purple-500/50 dark:from-blue-500/40 dark:to-purple-500/40 rounded-full blur-md pointer-events-none"
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
        className="fixed top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/50 to-blue-500/50 dark:from-purple-500/40 dark:to-blue-500/40 rounded-full blur-md pointer-events-none"
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
        className="fixed bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-500/50 to-purple-500/50 dark:from-blue-500/40 dark:to-purple-500/40 rounded-full blur-md pointer-events-none"
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
        className="fixed bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/50 to-blue-500/50 dark:from-purple-500/40 dark:to-blue-500/40 rounded-full blur-md pointer-events-none"
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
        className="fixed top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-blue-500/50 to-purple-500/50 dark:from-blue-500/40 dark:to-purple-500/40 rounded-full blur-md pointer-events-none"
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
      <motion.div
        className="fixed top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-500/50 to-blue-500/50 dark:from-purple-500/40 dark:to-blue-500/40 rounded-full blur-md pointer-events-none"
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      <motion.div
        className="fixed bottom-1/3 left-1/3 w-14 h-14 bg-gradient-to-r from-blue-500/50 to-purple-500/50 dark:from-blue-500/40 dark:to-purple-500/40 rounded-full blur-md pointer-events-none"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 0.7, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      />
    </>
  );
} 