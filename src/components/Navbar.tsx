import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const location = useLocation();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    theme === 'dark'
      ? ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.98)']
      : ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    theme === 'dark'
      ? ['0 0 0 rgba(0,0,0,0)', '0 2px 20px rgba(0,0,0,0.3)']
      : ['0 0 0 rgba(0,0,0,0)', '0 2px 20px rgba(0,0,0,0.08)']
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
      className="fixed w-full z-50 backdrop-blur-xl"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-3 group"
          >
            <motion.img
              src="https://i.ibb.co/S4hwn689/logo.png"
              alt="VAV Films"
              className="h-12 w-12 object-contain"
              whileHover={{ scale: 1.05 }}
            />
            <div className="flex flex-col">
              <span className="font-['Playfair_Display'] text-2xl font-bold text-[#1A1410] dark:text-white">
                VAV Films
              </span>
              <span className="text-xs text-[#C9A96E] tracking-widest">
                PRODUCTION
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo(0, 0)}
                className={`relative text-[#1A1410] dark:text-white font-medium transition-colors hover:text-[#C9A96E] ${
                  location.pathname === link.path ? 'text-[#C9A96E]' : ''
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C9A96E]"
                  />
                )}
              </Link>
            ))}

            <a
              href="tel:+61412345678"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-[#1A1410] font-semibold rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Book Your Date
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 text-[#1A1410] dark:text-white hover:text-[#C9A96E] transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-[#1A1410] dark:text-white hover:text-[#C9A96E] transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1A1410] dark:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-[#0A0A0A]"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10">
                <span className="font-['Playfair_Display'] text-xl font-bold text-[#1A1410] dark:text-white">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[#1A1410] dark:text-white hover:text-[#C9A96E]"
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
                    className={`block text-xl font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#C9A96E]'
                        : 'text-[#1A1410] dark:text-white hover:text-[#C9A96E]'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <a
                  href="tel:+61412345678"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-[#1A1410] font-semibold rounded-full mt-8 shadow-lg"
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
