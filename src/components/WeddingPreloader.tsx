import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeddingPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('vav_films_loaded');

    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    setTimeout(() => setShowText(true), 2000);

    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('vav_films_loaded', 'true');
    }, 4000);
  }, []);

  if (!isVisible) return null;

  const text = "VAV FILMS";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -100,
              x: Math.random() * window.innerWidth,
              opacity: 0,
              rotate: 0
            }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
              opacity: [0, 0.8, 0.8, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
            className="absolute"
            style={{
              width: '12px',
              height: '18px',
              clipPath: 'polygon(50% 0%, 100% 80%, 50% 100%, 0% 80%)',
              background: i % 2 === 0 ? '#E8721C' : '#D4A843',
            }}
          />
        ))}

        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="absolute"
        >
          <motion.circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="#D4A843"
            strokeWidth="2"
            strokeDasharray="754"
            strokeDashoffset="754"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 200 + Math.cos(angle) * 80;
              const y1 = 200 + Math.sin(angle) * 80;
              const x2 = 200 + Math.cos(angle) * 120;
              const y2 = 200 + Math.sin(angle) * 120;

              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#D4A843"
                  strokeWidth="1.5"
                  strokeDasharray="40"
                  strokeDashoffset="40"
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
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180;
              const x = 200 + Math.cos(angle) * 60;
              const y = 200 + Math.sin(angle) * 60;

              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#E8721C"
                />
              );
            })}
          </motion.g>

          <motion.circle
            cx="200"
            cy="200"
            r="12"
            fill="#C4687A"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.6, delay: 2.8 }}
          />
        </svg>

        {[...Array(4)].map((_, i) => {
          const positions = [
            { top: '5%', left: '5%' },
            { top: '5%', right: '5%' },
            { bottom: '5%', left: '5%' },
            { bottom: '5%', right: '5%' },
          ];

          return (
            <motion.div
              key={i}
              className="absolute"
              style={positions[i]}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0.8, 0.6] }}
              transition={{
                duration: 1.5,
                delay: 1.5 + i * 0.2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              <svg width="30" height="40" viewBox="0 0 30 40">
                <ellipse cx="15" cy="30" rx="8" ry="3" fill="rgba(232, 114, 28, 0.3)" />
                <path
                  d="M 15 5 Q 10 15 10 25 Q 10 30 15 35 Q 20 30 20 25 Q 20 15 15 5"
                  fill="url(#flameGradient)"
                />
                <defs>
                  <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#E8721C" />
                    <stop offset="100%" stopColor="#D4A843" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          );
        })}

        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute flex flex-col items-center"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-[0.3em] text-[#F5ECD7] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {text.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: i * 0.08 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center gap-3 mb-3"
              >
                <div className="w-12 h-px bg-[#D4A843]" />
                <span className="text-[#D4A843] text-2xl">✦</span>
                <div className="w-12 h-px bg-[#D4A843]" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-[#F5ECD7] text-sm md:text-base tracking-widest text-center px-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                WHERE EVERY LOVE STORY BECOMES LEGEND
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
