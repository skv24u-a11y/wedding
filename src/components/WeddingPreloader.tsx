import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeddingPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<'opening' | 'silhouette' | 'moment' | 'brand' | 'transition'>('opening');

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('vav_films_loaded');

    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    document.body.style.overflow = 'hidden';

    const silhouetteTimer = setTimeout(() => setPhase('silhouette'), 1000);
    const momentTimer = setTimeout(() => setPhase('moment'), 3000);
    const brandTimer = setTimeout(() => setPhase('brand'), 4500);
    const transitionTimer = setTimeout(() => setPhase('transition'), 6000);

    const closeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('vav_films_loaded', 'true');
      document.body.style.overflow = '';
    }, 7000);

    return () => {
      clearTimeout(silhouetteTimer);
      clearTimeout(momentTimer);
      clearTimeout(brandTimer);
      clearTimeout(transitionTimer);
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
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'opening' || phase === 'silhouette' ? 0.2 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 60%)'
          }}
        />

        {phase !== 'brand' && phase !== 'transition' && [...Array(30)].map((_, i) => {
          const delay = 1 + Math.random() * 2;
          const duration = 4 + Math.random() * 3;
          const startX = 20 + Math.random() * 60;
          const startY = 100 + Math.random() * 20;
          const driftX = (Math.random() - 0.5) * 15;
          const driftY = -30 - Math.random() * 40;
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
                opacity: [0, 0.4, 0.3, 0],
                scale: [0, 1, 1, 0]
              }}
              transition={{
                duration: duration,
                delay: delay,
                ease: 'easeOut'
              }}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: '#D4AF37',
                boxShadow: '0 0 6px rgba(212, 175, 55, 0.5)',
                filter: 'blur(0.5px)'
              }}
            />
          );
        })}

        <AnimatePresence>
          {(phase === 'silhouette' || phase === 'moment') && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{
                opacity: 1,
                scale: phase === 'moment' ? 1.05 : 1,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                opacity: { duration: 2, ease: 'easeOut' },
                scale: { duration: 1.5, ease: 'easeOut', delay: phase === 'moment' ? 0 : 0 }
              }}
              className="relative z-10"
            >
              <svg
                width="500"
                height="600"
                viewBox="0 0 500 600"
                className="w-[300px] h-[360px] md:w-[500px] md:h-[600px]"
              >
                <defs>
                  <radialGradient id="backlight" cx="50%" cy="40%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#000000" stopOpacity="1" />
                    <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.3" />
                    <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="1" />
                  </linearGradient>
                </defs>

                <ellipse
                  cx="250"
                  cy="250"
                  rx="200"
                  ry="200"
                  fill="url(#backlight)"
                />

                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  <motion.path
                    d="M 180 200 Q 180 140 200 120 Q 210 110 220 110 Q 230 110 235 120 L 240 160 L 240 300 Q 240 320 230 340 L 220 380 Q 215 400 210 420 L 205 450 Q 203 470 200 490 L 198 520"
                    fill="url(#rimLight)"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
                  />

                  <motion.path
                    d="M 180 250 Q 175 260 170 280 L 165 300 Q 163 310 165 325 L 170 360 Q 172 380 175 400 L 180 440 Q 182 460 185 480 L 188 520"
                    fill="url(#rimLight)"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1.2, ease: 'easeOut' }}
                  />

                  <motion.path
                    d="M 200 120 Q 210 100 230 90 Q 250 85 270 90 Q 285 95 295 105 L 310 125 Q 320 140 325 160 L 330 190 Q 332 210 330 230 L 325 270 Q 323 290 320 310 L 315 350 Q 313 370 310 390 L 305 430 Q 303 450 300 470 L 298 520"
                    fill="url(#rimLight)"
                    stroke="#D4AF37"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
                  />

                  <motion.path
                    d="M 320 200 Q 325 210 330 230 L 335 260 Q 337 280 335 300 L 330 340 Q 328 360 325 380 L 320 420 Q 318 440 315 460 L 312 520"
                    fill="url(#rimLight)"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    strokeOpacity="0.2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, delay: 1.1, ease: 'easeOut' }}
                  />

                  <motion.ellipse
                    cx="220"
                    cy="110"
                    rx="18"
                    ry="22"
                    fill="#000000"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />

                  <motion.ellipse
                    cx="285"
                    cy="100"
                    rx="20"
                    ry="25"
                    fill="#000000"
                    stroke="#D4AF37"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                  />

                  <motion.path
                    d="M 230 90 Q 240 70 260 60 Q 280 55 300 60 Q 315 65 325 75 Q 335 85 340 100 L 350 130 Q 355 150 352 170 L 345 200 Q 340 220 330 235 L 315 250 Q 300 260 285 265 L 265 268 Q 250 268 235 265 L 215 258 Q 200 250 190 235 L 180 215 Q 175 195 175 175 L 178 150 Q 182 130 190 110 L 200 95 Q 210 85 225 85"
                    fill="rgba(0,0,0,0.3)"
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                    strokeOpacity="0.15"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 1.8 }}
                  />
                </motion.g>

                <motion.g
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5, ease: 'easeOut' }}
                >
                  <motion.line
                    x1="240"
                    y1="280"
                    x2="280"
                    y2="280"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: phase === 'moment' ? 1 : 0.7 }}
                    transition={{ duration: 0.8, delay: 2, ease: 'easeOut' }}
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(212, 175, 55, 0.8))'
                    }}
                  />
                </motion.g>

                {phase === 'moment' && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {[...Array(20)].map((_, i) => {
                      const angle = (Math.random() * 360 * Math.PI) / 180;
                      const distance = 30 + Math.random() * 60;
                      const x = 260 + Math.cos(angle) * distance;
                      const y = 280 + Math.sin(angle) * distance;
                      const size = 1 + Math.random() * 2;

                      return (
                        <motion.circle
                          key={`particle-${i}`}
                          cx={x}
                          cy={y}
                          r={size}
                          fill="#D4AF37"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                            cx: x + (Math.cos(angle) * 30),
                            cy: y + (Math.sin(angle) * 30) - 20
                          }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          style={{
                            filter: 'blur(0.5px)'
                          }}
                        />
                      );
                    })}
                  </motion.g>
                )}
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(phase === 'brand' || phase === 'transition') && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'transition' ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative z-10 flex flex-col items-center"
            >
              <motion.div className="relative">
                {[...Array(40)].map((_, i) => {
                  const angle = (Math.random() * 360 * Math.PI) / 180;
                  const distance = Math.random() * 150;
                  const x = Math.cos(angle) * distance;
                  const y = Math.sin(angle) * distance;
                  const delay = Math.random() * 0.5;

                  return (
                    <motion.div
                      key={`logo-particle-${i}`}
                      className="absolute left-1/2 top-1/2 rounded-full"
                      style={{
                        width: '2px',
                        height: '2px',
                        background: '#D4AF37',
                        boxShadow: '0 0 4px rgba(212, 175, 55, 0.6)'
                      }}
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: x,
                        y: y,
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 1.5, delay: delay, ease: 'easeOut' }}
                    />
                  );
                })}

                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-[#D4AF37] relative"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    textShadow: '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3)'
                  }}
                  initial={{ opacity: 0, letterSpacing: '0em' }}
                  animate={{ opacity: 1, letterSpacing: '0.3em' }}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                >
                  {text}
                </motion.h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase mt-8"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  textShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
                }}
              >
                Wedding Stories. Cinematically Captured.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
