import { motion } from 'framer-motion';
import { Phone, ArrowDown } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const scrollToWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D0A07] via-[#1A1208] to-[#0D0A07]">
      <ParticleBackground />

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')] bg-cover bg-center opacity-[0.08]" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A07] via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-[#D4A843]/10 border border-[#D4A843]/30 rounded-full text-[#D4A843] text-sm tracking-[0.3em] uppercase font-['Montserrat'] font-medium">
              Cinematic Excellence Since 2012
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F5ECD7] mb-8 leading-[1.1]"
          >
            Where Every Love Story
            <br />
            <span className="text-gradient-gold">Becomes Legend</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-[#C4A882] mb-12 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Crafting timeless visual poetry for your most precious moments.
            <br />
            <span className="text-[#D4A843]">Because your story deserves to be remembered forever.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <a
              href="tel:+919876543210"
              className="group relative px-10 py-4 bg-gradient-to-r from-[#D4A843] to-[#E8721C] text-[#0D0A07] font-bold tracking-wider uppercase text-sm rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4A843]/50 font-['Montserrat']"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Reserve Your Date
              </span>
            </a>

            <button
              onClick={scrollToWork}
              className="group px-10 py-4 bg-transparent border-2 border-[#D4A843]/40 text-[#F5ECD7] font-semibold tracking-wider uppercase text-sm rounded-full backdrop-blur-sm hover:bg-[#D4A843]/10 hover:border-[#D4A843] transition-all duration-300 font-['Montserrat']"
            >
              <span className="flex items-center gap-2">
                View Portfolio
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6"
        >
          <div className="bg-warm-glass rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D4A843] mb-2 font-['Cormorant_Garamond']">350+</div>
                <div className="text-sm text-[#C4A882] tracking-wider uppercase font-['Montserrat']">Celebrations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D4A843] mb-2 font-['Cormorant_Garamond']">12</div>
                <div className="text-sm text-[#C4A882] tracking-wider uppercase font-['Montserrat']">Years</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D4A843] mb-2 font-['Cormorant_Garamond']">5-Star</div>
                <div className="text-sm text-[#C4A882] tracking-wider uppercase font-['Montserrat']">Rated</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl font-bold text-[#D4A843] mb-2 font-['Cormorant_Garamond']">Worldwide</div>
                <div className="text-sm text-[#C4A882] tracking-wider uppercase font-['Montserrat']">Destinations</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
