import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Essential',
    price: '$2,500',
    popular: false,
    features: [
      '6 hours coverage',
      'One professional photographer',
      '300+ edited high-res images',
      'Online gallery',
      'Personal print release',
    ],
  },
  {
    name: 'Signature',
    price: '$4,500',
    popular: true,
    features: [
      '10 hours coverage',
      'Two professional photographers',
      '600+ edited high-res images',
      'Engagement session included',
      'Premium online gallery',
      'Personal print release',
      'Cinematic highlight video (3-5 min)',
    ],
  },
  {
    name: 'Cinematic',
    price: '$7,500',
    popular: false,
    features: [
      'Full day coverage (12+ hours)',
      'Three professional photographers',
      '1000+ edited high-res images',
      'Pre-wedding & engagement sessions',
      'Premium online gallery',
      'Personal print release',
      'Feature film (15-20 min)',
      'Drone coverage',
      'Same-day edit screening',
    ],
  },
];

export default function PackagesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white mb-4">
            Investment Packages
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect package for your unforgettable day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative group ${
                pkg.popular ? 'md:-mt-8 md:mb-0' : ''
              }`}
            >
              <div
                className={`relative bg-white/5 backdrop-blur-xl border ${
                  pkg.popular
                    ? 'border-[#C9A96E] shadow-2xl shadow-[#C9A96E]/20'
                    : 'border-white/10'
                } rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular ? 'hover:shadow-[#C9A96E]/30' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-5xl font-bold text-[#C9A96E] mb-4">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-full text-center font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white hover:shadow-lg hover:shadow-[#C9A96E]/50 hover:scale-105'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Need something custom? We create bespoke packages tailored to your vision.
          </p>
          <Link
            to="/contact"
            className="inline-block text-[#C9A96E] hover:text-[#D4A5A5] font-semibold transition-colors"
          >
            Request Custom Quote →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
