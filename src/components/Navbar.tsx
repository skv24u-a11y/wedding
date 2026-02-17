import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(13, 10, 7, 0)', 'rgba(26, 18, 8, 0.95)']
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 rgba(0,0,0,0)', '0 4px 30px rgba(212, 168, 67, 0.1)']
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed w-full z-50 backdrop-blur-xl border-b border-[#D4A843]/10"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-3 group"
          >
            <motion.img
              src="https://i.ibb.co/S4hwn689/logo.png"
              alt="VAV Films"
              className="h-14 w-14 object-contain"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <div className="flex flex-col">
              <span className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#F5ECD7] tracking-wider">
                VAV FILMS
              </span>
              <span className="text-[10px] text-[#D4A843] tracking-[0.35em] uppercase font-['Montserrat']">
                Cinematic Storytelling
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className="relative group"
              >
                <span className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 font-['Montserrat'] ${
                  location.pathname === link.path ? 'text-[#D4A843]' : 'text-[#F5ECD7] hover:text-[#D4A843]'
                }`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4A843] to-[#E8721C]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#D4A843] to-[#E8721C] text-[#0D0A07] font-semibold tracking-wider uppercase text-sm rounded-full hover:shadow-lg hover:shadow-[#D4A843]/50 transition-all duration-300 transform hover:scale-105 font-['Montserrat']"
            >
              <Phone className="w-4 h-4" />
              Book Your Date
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#F5ECD7] hover:text-[#D4A843] transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-[#1A1208] border-l border-[#D4A843]/20"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#D4A843]/20">
                <span className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#F5ECD7]">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[#F5ECD7] hover:text-[#D4A843] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo(0, 0);
                    }}
                    className={`block text-xl font-medium tracking-wider uppercase transition-colors font-['Montserrat'] ${
                      location.pathname === link.path
                        ? 'text-[#D4A843]'
                        : 'text-[#F5ECD7] hover:text-[#D4A843]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#D4A843] to-[#E8721C] text-[#0D0A07] font-semibold tracking-wider uppercase rounded-full mt-8 shadow-lg shadow-[#D4A843]/30 font-['Montserrat']"
                >
                  <Phone className="w-5 h-5" />
                  Book Your Date
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
