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
    <section ref={ref} className="py-32 bg-gradient-to-br from-[#1A1208] to-[#0D0A07] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A843] rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8721C] rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-[#D4A843]/10 border border-[#D4A843]/30 rounded-full text-[#D4A843] text-sm tracking-[0.3em] uppercase font-['Montserrat'] font-medium mb-8"
          >
            Limited Availability
          </motion.span>

          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-bold text-[#F5ECD7] mb-6">
            Your Date Awaits
          </h2>
          <p className="text-xl md:text-2xl text-[#C4A882] mb-16 max-w-3xl mx-auto leading-relaxed">
            Premium dates are filling fast.
            <br />
            <span className="text-[#D4A843]">Secure your celebration before it's gone.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-warm-glass rounded-3xl p-10 group hover:border-[#D4A843]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4A843]/20"
            >
              <div className="text-8xl md:text-9xl font-bold text-[#D4A843] mb-4 font-['Cormorant_Garamond'] group-hover:scale-110 transition-transform duration-500">
                3
              </div>
              <p className="text-3xl text-[#F5ECD7] font-semibold mb-3 font-['Cormorant_Garamond']">Dates Left</p>
              <p className="text-[#C4A882] tracking-wider uppercase font-['Montserrat'] text-sm">in 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-warm-glass rounded-3xl p-10 group hover:border-[#E8721C]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#E8721C]/20"
            >
              <div className="text-8xl md:text-9xl font-bold text-[#E8721C] mb-4 font-['Cormorant_Garamond'] group-hover:scale-110 transition-transform duration-500">
                9
              </div>
              <p className="text-3xl text-[#F5ECD7] font-semibold mb-3 font-['Cormorant_Garamond']">Dates Left</p>
              <p className="text-[#C4A882] tracking-wider uppercase font-['Montserrat'] text-sm">in 2026</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link
              to="/contact"
              className="px-10 py-4 bg-gradient-to-r from-[#D4A843] to-[#E8721C] text-[#0D0A07] font-bold tracking-wider uppercase text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4A843]/50 flex items-center gap-2 font-['Montserrat']"
            >
              <Calendar className="w-5 h-5" />
              Check Your Date
            </Link>

            <a
              href="tel:+919876543210"
              className="px-10 py-4 bg-transparent border-2 border-[#D4A843]/40 text-[#F5ECD7] font-semibold tracking-wider uppercase text-sm rounded-full backdrop-blur-sm hover:bg-[#D4A843]/10 hover:border-[#D4A843] transition-all duration-300 flex items-center gap-2 font-['Montserrat']"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#C4A882] mt-10 text-sm tracking-wide"
          >
            Premium weekend dates fill up 12-18 months in advance. Don't miss your perfect date.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
