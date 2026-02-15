import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Camera, Users, Gift, Star, Sun, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const BabyShower = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section 
        className="h-[60vh] bg-cover bg-center flex items-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1543342384-1f1350e27861?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Celebrating New Beginnings</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Capture the joy, anticipation, and precious moments of your baby shower with our expert photography services.
            </p>
            <Link 
              to="/services/quotes" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
            >
              Book Your Celebration
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <Heart className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Emotional Moments</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We capture the pure joy and excitement as you celebrate this precious new chapter in your life.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <Camera className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Artistic Details</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Every thoughtful decoration, precious gift, and tender moment is preserved in stunning detail.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Family & Friends</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Beautiful portraits and candid shots of loved ones sharing in your happiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Perfect Celebration</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Let us transform your baby shower into a gallery of precious memories that you'll treasure forever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f" 
                alt="Baby shower celebration" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Sun className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Natural Light Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We use natural light to create soft, flattering photos that highlight the radiant glow of expectant mothers.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Gift className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Special Moments</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    From gift openings to games and heartfelt messages, we capture every special moment.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Timeless Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Quick turnaround with expertly edited photos that preserve these precious memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Celebration Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4">Sweet Beginnings</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                2 Hours Coverage
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                100+ Edited Photos
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Online Gallery
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Digital Downloads
              </li>
            </ul>
            <Link 
              to="/services/quotes" 
              className="block text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-all duration-300"
            >
              Get Quote
            </Link>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg border-2 border-primary relative"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Precious Moments</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                3 Hours Coverage
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                200+ Edited Photos
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Online Gallery
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Digital Downloads
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Mini Photo Album
              </li>
            </ul>
            <Link 
              to="/services/quotes" 
              className="block text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-all duration-300"
            >
              Get Quote
            </Link>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4">Complete Joy</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                4 Hours Coverage
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                300+ Edited Photos
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Online Gallery
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Digital Downloads
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Deluxe Photo Album
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Highlight Video
              </li>
            </ul>
            <Link 
              to="/services/quotes" 
              className="block text-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-all duration-300"
            >
              Get Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BabyShower;