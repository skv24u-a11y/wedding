import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IndianWeddingLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('vav_films_visited');

    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    setTimeout(() => setShowContent(true), 1500);

    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('vav_films_visited', 'true');
    }, 3500);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, delay: 3 }}
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * window.innerWidth, opacity: 0, rotate: 0 }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
              opacity: [0, 0.8, 0.8, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
            className="absolute w-4 h-4"
            style={{
              background: i % 2 === 0 ? '#FF9933' : '#C9A96E',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            }}
          />
        ))}

        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="absolute"
        >
          <motion.circle
            cx="150"
            cy="150"
            r="100"
            fill="none"
            stroke="#C9A96E"
            strokeWidth="2"
            strokeDasharray="628"
            strokeDashoffset="628"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 150 + Math.cos(angle) * 70;
              const y1 = 150 + Math.sin(angle) * 70;
              const x2 = 150 + Math.cos(angle) * 100;
              const y2 = 150 + Math.sin(angle) * 100;

              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#C9A96E"
                  strokeWidth="1.5"
                  strokeDasharray="30"
                  strokeDashoffset="30"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                />
              );
            })}
          </motion.g>

          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x = 150 + Math.cos(angle) * 50;
              const y = 150 + Math.sin(angle) * 50;

              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#D4A5A5"
                />
              );
            })}
          </motion.g>

          <motion.circle
            cx="150"
            cy="150"
            r="10"
            fill="#C9A96E"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </svg>

        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute flex flex-col items-center"
            >
              <motion.h1
                className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-bold text-[#F5F0E8] tracking-wider mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {['V', 'A', 'V', ' ', 'F', 'I', 'L', 'M', 'S'].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-3 mb-3"
              >
                <div className="w-8 h-px bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-2xl">✦</span>
                <div className="w-8 h-px bg-[#C9A96E]" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-[#F5F0E8] text-lg md:text-xl font-light tracking-wide text-center"
              >
                Where Every Love Story Becomes Legend
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
