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
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0D0A07] to-[#1A1208]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-[#D4A843]/10 border border-[#D4A843]/30 rounded-full text-[#D4A843] text-sm tracking-[0.3em] uppercase font-['Montserrat'] font-medium mb-6"
          >
            Packages
          </motion.span>

          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-bold text-[#F5ECD7] mb-6">
            Investment in Forever
          </h2>
          <p className="text-xl text-[#C4A882] max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your unforgettable day.
            <br />
            <span className="text-[#D4A843]">Your memories deserve nothing less than perfection.</span>
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
                className={`relative bg-warm-glass rounded-3xl p-10 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular ? 'border-[#D4A843] shadow-2xl shadow-[#D4A843]/20 hover:shadow-[#D4A843]/30' : 'hover:border-[#D4A843]/30'
                } overflow-hidden group`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4A843] to-[#E8721C] text-[#0D0A07] px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-[#D4A843]/40 font-['Montserrat']">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-10">
                  <h3 className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#F5ECD7] mb-4">
                    {pkg.name}
                  </h3>
                  <div className="text-6xl font-bold text-[#D4A843] mb-2 font-['Cormorant_Garamond']">
                    {pkg.price}
                  </div>
                  <div className="w-16 h-px bg-[#D4A843]/40 mx-auto mt-6" />
                </div>

                <ul className="space-y-5 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#C4A882] group-hover:text-[#F5ECD7] transition-colors duration-300">
                      <Check className="w-5 h-5 text-[#D4A843] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-['Montserrat'] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-full text-center font-bold tracking-wider uppercase text-sm transition-all duration-300 font-['Montserrat'] ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#D4A843] to-[#E8721C] text-[#0D0A07] hover:shadow-lg hover:shadow-[#D4A843]/50 hover:scale-105'
                      : 'bg-[#D4A843]/10 text-[#D4A843] border border-[#D4A843]/30 hover:bg-[#D4A843]/20 hover:border-[#D4A843]/50'
                  }`}
                >
                  Reserve Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#C4A882] mb-5 text-lg">
            Need something custom? We create bespoke packages tailored to your vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[#D4A843] hover:text-[#E8721C] font-semibold transition-colors font-['Montserrat'] tracking-wider uppercase text-sm"
          >
            Request Custom Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
