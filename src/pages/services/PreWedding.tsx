import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Sun, Map, Clock, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const PreWedding = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section 
        className="h-[60vh] bg-cover bg-center flex items-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Crafting Your Love Story</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Where romance meets artistry. Our pre-wedding photography captures the essence of your journey together, creating timeless memories that tell your unique love story.
            </p>
            <Link 
              to="/services/quotes" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
            >
              Begin Your Journey
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
            <Camera className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Artistic Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our expert photographers blend technical mastery with creative artistry to capture your unique chemistry and style.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <Sun className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Perfect Timing</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We chase the golden hours and magical moments, ensuring every shot is bathed in perfect natural light.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <Map className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Stunning Locations</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access to exclusive venues and hidden gems that provide the perfect backdrop for your love story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Premium Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Every pre-wedding shoot is a carefully crafted experience, designed to bring out your natural chemistry while creating stunning visual memories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff" 
                alt="Pre-wedding experience" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Planning</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We work closely with you to understand your vision, style preferences, and the unique aspects of your relationship.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Star className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Using state-of-the-art cameras and lighting to ensure exceptional quality in every shot.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose from sunrise sessions to sunset shoots, fitting perfectly around your schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Signature Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4">Enchanted</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                4-Hour Artistic Session
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                2 Premium Locations
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                200+ Curated Photos
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Professional Styling Guide
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
            <h3 className="text-2xl font-bold mb-4">Timeless</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Full-Day Coverage
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Multiple Premium Locations
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                400+ Curated Photos
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Professional Styling Guide
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Cinematic Highlight Film
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
            <h3 className="text-2xl font-bold mb-4">Eternal</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                2-Day Luxury Experience
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Destination Shoot
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                600+ Curated Photos
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Professional Styling Team
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Luxury Photo Album
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

export default PreWedding;