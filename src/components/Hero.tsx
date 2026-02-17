import { motion } from 'framer-motion';
import { Phone, ArrowDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const words = "Your Love Story, Told in Light & Frames".split(' ');

  const scrollToWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A] dark:from-[#0A0A0A] dark:via-[#0A0A0A] dark:to-[#1A1A1A]">
      <ParticleBackground />

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="inline-block mr-3 md:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
          >
            Capturing timeless moments with cinematic artistry
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="tel:+61412345678"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C9A96E]/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call to Book Now
              </span>
            </a>

            <button
              onClick={scrollToWork}
              className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View Our Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#C9A96E] mb-1">250+</div>
                <div className="text-sm text-gray-300">Weddings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#C9A96E] mb-1">12</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#C9A96E] mb-1">5-Star</div>
                <div className="text-sm text-gray-300">Rated</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-[#C9A96E] mb-1">Worldwide</div>
                <div className="text-sm text-gray-300">Australia & Beyond</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
