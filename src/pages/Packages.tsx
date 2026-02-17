import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Sparkles, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: 'Essential',
    price: '$2,500',
    popular: false,
    description: 'Perfect for intimate celebrations',
    features: [
      '6 hours coverage',
      'One professional photographer',
      '300+ edited high-res images',
      'Online gallery',
      'Personal print release',
      'Sneak peek within 48 hours',
    ],
  },
  {
    name: 'Signature',
    price: '$4,500',
    popular: true,
    description: 'Our most popular choice for full coverage',
    features: [
      '10 hours coverage',
      'Two professional photographers',
      '600+ edited high-res images',
      'Engagement session included',
      'Premium online gallery',
      'Personal print release',
      'Cinematic highlight video (3-5 min)',
      'USB drive with all images',
      'Same-day sneak peek',
    ],
  },
  {
    name: 'Cinematic',
    price: '$7,500',
    popular: false,
    description: 'The ultimate luxury experience',
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
      'Premium leather photo album',
      'Parent albums included',
    ],
  },
];

export default function Packages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6">
            Investment Packages
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Choose the perfect package for your unforgettable day
          </p>
          <p className="text-gray-500 max-w-xl mx-auto">
            All packages include professional editing, color correction, and lifetime access to your online gallery
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
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
                } rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular ? 'hover:shadow-[#C9A96E]/30' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                  <div className="text-5xl font-bold text-[#C9A96E] mb-2">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
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
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center"
        >
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-white mb-4">
            Need Something Custom?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            We create bespoke packages tailored to your unique vision and requirements. Every wedding is different, and we're here to make yours perfect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Request Custom Quote
            </Link>
            <a
              href="tel:+61412345678"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call to Discuss
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">
            Flexible payment plans available. Travel fees may apply for destinations over 100km from Sydney.
          </p>
          <p className="text-gray-500">
            All packages include a complimentary consultation to ensure we understand your vision perfectly.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
