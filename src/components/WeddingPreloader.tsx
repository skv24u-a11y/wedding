import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeddingPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<'atmosphere' | 'logo' | 'aperture' | 'closing'>('atmosphere');

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('vav_films_loaded');

    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    document.body.style.overflow = 'hidden';

    const atmosphereTimer = setTimeout(() => setPhase('logo'), 2500);
    const logoTimer = setTimeout(() => setPhase('aperture'), 4000);
    const apertureTimer = setTimeout(() => setPhase('closing'), 5500);

    const closeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('vav_films_loaded', 'true');
      document.body.style.overflow = '';
    }, 6500);

    return () => {
      clearTimeout(atmosphereTimer);
      clearTimeout(logoTimer);
      clearTimeout(apertureTimer);
      clearTimeout(closeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible) return null;

  const text = "VAV FILM";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)'
          }}
        />

        {[...Array(50)].map((_, i) => {
          const delay = 1 + Math.random() * 1.5;
          const duration = 3 + Math.random() * 2;
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const driftX = (Math.random() - 0.5) * 20;
          const driftY = (Math.random() - 0.5) * 20;
          const size = 1 + Math.random() * 2;

          return (
            <motion.div
              key={`dust-${i}`}
              initial={{
                x: `${startX}vw`,
                y: `${startY}vh`,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: `${startX + driftX}vw`,
                y: `${startY + driftY}vh`,
                opacity: [0, 0.6, 0.4, 0],
                scale: [0, 1, 1, 0]
              }}
              transition={{
                duration: duration,
                delay: delay,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: '#D4AF37',
                boxShadow: '0 0 8px rgba(212, 175, 55, 0.6)',
                filter: 'blur(0.5px)'
              }}
            />
          );
        })}

        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'atmosphere' ? 0 : 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            initial={{ letterSpacing: '0em', opacity: 0 }}
            animate={{
              letterSpacing: phase === 'closing' ? '0em' : '0.3em',
              opacity: phase === 'closing' ? 0 : 1
            }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-[#D4AF37] relative"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                textShadow: '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3)'
              }}
            >
              {text.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 2.5 + i * 0.1,
                    ease: 'easeOut'
                  }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: phase === 'closing' ? 0 : 1,
                opacity: phase === 'closing' ? 0 : 1
              }}
              transition={{ duration: 0.8, delay: 3.5 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.7, 1, 0] }}
                transition={{ duration: 2, delay: 3.5 }}
                className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent mx-auto"
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: phase === 'closing' ? 0 : 1,
              y: phase === 'closing' ? -10 : 0
            }}
            transition={{ duration: 1, delay: 3.8 }}
            className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase mt-24"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              textShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
            }}
          >
            Wedding Stories. Cinematically Captured.
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {phase === 'aperture' && (
            <motion.svg
              width="600"
              height="600"
              viewBox="0 0 600 600"
              className="absolute pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <defs>
                <linearGradient id="apertureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {[...Array(8)].map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const outerRadius = 250;
                const innerRadius = 150;

                const x1 = 300 + Math.cos(angle) * innerRadius;
                const y1 = 300 + Math.sin(angle) * innerRadius;
                const x2 = 300 + Math.cos(angle + 0.3) * outerRadius;
                const y2 = 300 + Math.sin(angle + 0.3) * outerRadius;
                const x3 = 300 + Math.cos(angle + 0.785) * outerRadius;
                const y3 = 300 + Math.sin(angle + 0.785) * outerRadius;
                const x4 = 300 + Math.cos(angle + 0.485) * innerRadius;
                const y4 = 300 + Math.sin(angle + 0.485) * innerRadius;

                return (
                  <motion.path
                    key={i}
                    d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`}
                    fill="url(#apertureGrad)"
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
                    style={{
                      transformOrigin: '300px 300px'
                    }}
                  />
                );
              })}

              <motion.circle
                cx="300"
                cy="300"
                r="140"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                initial={{ strokeDasharray: '880', strokeDashoffset: '880' }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))'
                }}
              />
            </motion.svg>
          )}

          {phase === 'closing' && (
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1, ease: 'easeIn' }}
              className="absolute inset-0 bg-black"
              style={{
                clipPath: 'circle(100% at 50% 50%)'
              }}
            >
              <motion.div
                animate={{
                  clipPath: [
                    'circle(100% at 50% 50%)',
                    'circle(0% at 50% 50%)'
                  ]
                }}
                transition={{ duration: 1, ease: 'easeIn' }}
                className="absolute inset-0 bg-black"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: phase === 'logo' ? '100%' : '-100%' }}
          transition={{ duration: 1.5, delay: 3, ease: 'easeInOut' }}
          className="absolute inset-y-0 left-0 w-full pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.3) 50%, transparent 100%)',
            filter: 'blur(40px)'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
