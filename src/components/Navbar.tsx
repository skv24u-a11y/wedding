import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Camera, Heart, Users, Calendar, Building, Sun, Moon } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    isDark 
      ? ['rgba(17, 24, 39, 0.95)', 'rgba(17, 24, 39, 0.98)']
      : ['rgba(17, 24, 39, 0.85)', 'rgba(17, 24, 39, 0.98)']
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const services = [
    { 
      name: 'Wedding Photography',
      path: '/services/wedding',
      icon: Heart,
      description: 'Timeless moments, expertly captured with cinematic elegance'
    },
    { 
      name: 'Pre Wedding',
      path: '/services/pre-wedding',
      icon: Camera,
      description: 'Romantic storytelling through artistic pre-wedding photography'
    },
    { 
      name: 'Baby Shower',
      path: '/services/baby-shower',
      icon: Users,
      description: 'Capturing the joy and anticipation of your new beginning'
    },
    { 
      name: 'Corporate Events',
      path: '/services/corporate',
      icon: Building,
      description: 'Professional coverage that elevates your brand image'
    },
    { 
      name: 'Custom Quotes',
      path: '/services/quotes',
      icon: Calendar,
      description: 'Tailored photography packages for your unique vision'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      x: "100%"
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed w-full z-50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="flex items-center space-x-3 group" 
              onClick={() => window.scrollTo(0, 0)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-full bg-white/10 p-1"
              >
                <img 
                  src="https://i.ibb.co/S4hwn689/logo.png" 
                  alt="Vav Films Logo" 
                  className="h-16 w-16 object-contain filter drop-shadow-2xl" 
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-2xl font-bold text-white"
                  whileHover={{ scale: 1.02 }}
                >
                  VAV Films
                </motion.span>
                <span className="text-sm font-medium text-white">Production</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            
            {/* Services Mega Menu */}
            <div 
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="text-white hover:text-primary px-3 py-2 transition-all duration-200 font-medium relative group"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={false}
                />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div 
                    className="absolute left-0 mt-2 w-[480px] rounded-xl bg-white dark:bg-gray-900 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="p-4 grid grid-cols-1 gap-2">
                      {services.map((service, index) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-200 ${
                            activeIndex === index 
                              ? 'bg-gray-100 dark:bg-gray-800' 
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                          }`}
                          onMouseEnter={() => setActiveIndex(index)}
                          onMouseLeave={() => setActiveIndex(null)}
                          onClick={() => {
                            setIsServicesOpen(false);
                            window.scrollTo(0, 0);
                          }}
                        >
                          <service.icon className={`h-6 w-6 ${
                            activeIndex === index ? 'text-primary' : 'text-gray-600 dark:text-gray-400'
                          }`} />
                          <div>
                            <p className="text-gray-900 dark:text-white font-medium">{service.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-white" />
              ) : (
                <Moon className="h-5 w-5 text-white" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-white" />
              ) : (
                <Moon className="h-5 w-5 text-white" />
              )}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-primary focus:outline-none transition-all duration-200"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div 
              className="absolute inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-6">
                    <MobileNavLink to="/" onClick={handleMobileLinkClick}>Home</MobileNavLink>
                    <MobileNavLink to="/about" onClick={handleMobileLinkClick}>About</MobileNavLink>
                    <div className="py-4 space-y-2">
                      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium px-4 mb-2">Services</h3>
                      {services.map((service) => (
                        <MobileNavLink
                          key={service.path}
                          to={service.path}
                          onClick={handleMobileLinkClick}
                          icon={service.icon}
                        >
                          {service.name}
                        </MobileNavLink>
                      ))}
                    </div>
                    <MobileNavLink to="/portfolio" onClick={handleMobileLinkClick}>Portfolio</MobileNavLink>
                    <MobileNavLink to="/contact" onClick={handleMobileLinkClick}>Contact</MobileNavLink>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    onClick={() => window.scrollTo(0, 0)}
    className="relative text-white hover:text-primary px-3 py-2 transition-all duration-200 font-medium group"
  >
    {children}
    <motion.div 
      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      initial={false}
    />
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick,
  icon: Icon
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick: () => void;
  icon?: React.ElementType;
}) => (
  <Link
    to={to}
    className="flex items-center space-x-4 px-4 py-3 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
    onClick={onClick}
  >
    {Icon && <Icon className="h-5 w-5" />}
    <span className="font-medium">{children}</span>
  </Link>
);

export default Navbar;