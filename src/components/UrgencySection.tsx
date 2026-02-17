import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UrgencySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#1A1A1A] dark:via-[#0A0A0A] dark:to-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A96E] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A5A5] rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-[#1A1410] dark:text-white mb-6">
            2025 Is Almost Full
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
            Secure Your Date Before It's Too Late
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F5F0E8] dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8"
            >
              <div className="text-7xl md:text-8xl font-bold text-[#C9A96E] mb-4 font-['Playfair_Display']">
                3
              </div>
              <p className="text-2xl text-[#1A1410] dark:text-white font-semibold mb-2">Dates Left</p>
              <p className="text-gray-600 dark:text-gray-400">in 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#F5F0E8] dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8"
            >
              <div className="text-7xl md:text-8xl font-bold text-[#D4A5A5] mb-4 font-['Playfair_Display']">
                9
              </div>
              <p className="text-2xl text-[#1A1410] dark:text-white font-semibold mb-2">Dates Left</p>
              <p className="text-gray-600 dark:text-gray-400">in 2026</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-[#1A1410] font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C9A96E]/50 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Check Your Date
            </Link>

            <a
              href="tel:+61412345678"
              className="group px-8 py-4 bg-gray-200 dark:bg-white/10 border-2 border-gray-300 dark:border-white/30 text-[#1A1410] dark:text-white font-semibold rounded-full backdrop-blur-sm hover:bg-gray-300 dark:hover:bg-white/20 hover:border-gray-400 dark:hover:border-white/50 transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-400 mt-8 text-sm"
          >
            Weekend dates fill up 12-18 months in advance. Don't miss your perfect date!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
