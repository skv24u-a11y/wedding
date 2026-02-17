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

    setTimeout(() => setShowText(true), 1500);

    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('vav_films_loaded', 'true');
    }, 4500);
  }, []);

  if (!isVisible) return null;

  const text = "VAV FILMS";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#0D0A07] to-[#1A1208] flex items-center justify-center overflow-hidden"
      >
        {[...Array(30)].map((_, i) => {
          const delay = Math.random() * 2;
          const duration = 3 + Math.random() * 2;
          const startX = Math.random() * 100;
          const drift = (Math.random() - 0.5) * 30;

          return (
            <motion.div
              key={`marigold-${i}`}
              initial={{
                y: -50,
                x: `${startX}vw`,
                opacity: 0,
                rotate: 0,
                scale: 0.5
              }}
              animate={{
                y: '110vh',
                x: `${startX + drift}vw`,
                opacity: [0, 1, 1, 1, 0],
                rotate: [0, 180, 360, 540, 720],
                scale: [0.5, 1, 1, 1, 0.5]
              }}
              transition={{
                duration: duration,
                delay: delay,
                ease: 'linear',
                repeat: Infinity,
                repeatDelay: Math.random() * 1
              }}
              className="absolute"
            >
              <svg width="20" height="20" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="6" fill="#E8721C" />
                {[...Array(8)].map((_, petalIndex) => {
                  const angle = (petalIndex * 45 * Math.PI) / 180;
                  const x = 20 + Math.cos(angle) * 8;
                  const y = 20 + Math.sin(angle) * 8;
                  return (
                    <ellipse
                      key={petalIndex}
                      cx={x}
                      cy={y}
                      rx="4"
                      ry="8"
                      fill="#D4A843"
                      transform={`rotate(${petalIndex * 45} ${x} ${y})`}
                    />
                  );
                })}
              </svg>
            </motion.div>
          );
        })}

        <svg
          width="500"
          height="500"
          viewBox="0 0 500 500"
          className="absolute opacity-30"
        >
          <defs>
            <linearGradient id="mandalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A843" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#E8721C" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          <motion.g
            initial={{ rotate: 0, scale: 0, opacity: 0 }}
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 250;
              const y1 = 250;
              const x2 = 250 + Math.cos(angle) * 150;
              const y2 = 250 + Math.sin(angle) * 150;

              return (
                <motion.g key={i}>
                  <motion.path
                    d={`M ${x1} ${y1} Q ${250 + Math.cos(angle) * 100} ${250 + Math.sin(angle) * 100} ${x2} ${y2}`}
                    stroke="url(#mandalGrad)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.05 }}
                  />
                  <motion.circle
                    cx={x2}
                    cy={y2}
                    r="8"
                    fill="#E8721C"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.4, delay: 2 + i * 0.05 }}
                  />
                </motion.g>
              );
            })}
          </motion.g>

          <motion.circle
            cx="250"
            cy="250"
            r="50"
            fill="none"
            stroke="#D4A843"
            strokeWidth="3"
            strokeDasharray="314"
            strokeDashoffset="314"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <motion.circle
            cx="250"
            cy="250"
            r="30"
            fill="#C4687A"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1], rotate: 360 }}
            transition={{ duration: 1, delay: 2.5 }}
          />
        </svg>

        {[...Array(6)].map((_, i) => {
          const positions = [
            { top: '10%', left: '10%' },
            { top: '10%', right: '10%' },
            { top: '50%', left: '5%' },
            { top: '50%', right: '5%' },
            { bottom: '10%', left: '10%' },
            { bottom: '10%', right: '10%' },
          ];

          return (
            <motion.div
              key={`diya-${i}`}
              className="absolute"
              style={positions[i]}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 1],
                scale: [0, 1.1, 1, 1],
              }}
              transition={{
                duration: 1,
                delay: 1 + i * 0.2,
              }}
            >
              <motion.svg
                width="40"
                height="50"
                viewBox="0 0 40 50"
                animate={{
                  filter: [
                    'drop-shadow(0 0 5px rgba(232, 114, 28, 0.8))',
                    'drop-shadow(0 0 15px rgba(232, 114, 28, 1))',
                    'drop-shadow(0 0 5px rgba(232, 114, 28, 0.8))'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <ellipse cx="20" cy="35" rx="12" ry="5" fill="#D4A843" />
                <path
                  d="M 12 35 Q 12 30 12 28 L 28 28 Q 28 30 28 35 Z"
                  fill="url(#diyaGrad)"
                />
                <motion.path
                  d="M 20 20 Q 18 25 18 28 Q 18 30 20 32 Q 22 30 22 28 Q 22 25 20 20"
                  fill="url(#flameGradient)"
                  animate={{
                    d: [
                      'M 20 20 Q 18 25 18 28 Q 18 30 20 32 Q 22 30 22 28 Q 22 25 20 20',
                      'M 20 18 Q 17 24 17 28 Q 17 31 20 33 Q 23 31 23 28 Q 23 24 20 18',
                      'M 20 20 Q 18 25 18 28 Q 18 30 20 32 Q 22 30 22 28 Q 22 25 20 20'
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <defs>
                  <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#E8721C" />
                    <stop offset="50%" stopColor="#D4A843" />
                    <stop offset="100%" stopColor="#E8721C" />
                  </linearGradient>
                  <linearGradient id="diyaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D4A843" />
                    <stop offset="100%" stopColor="#C9A96E" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </motion.div>
          );
        })}

        <AnimatePresence>
          {showText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="absolute flex flex-col items-center z-10"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-[0.3em] text-[#F5ECD7] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {text.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.1 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex items-center gap-3 mb-3"
              >
                <div className="w-12 h-px bg-[#D4A843]" />
                <motion.span
                  className="text-[#D4A843] text-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  ✦
                </motion.span>
                <div className="w-12 h-px bg-[#D4A843]" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
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
