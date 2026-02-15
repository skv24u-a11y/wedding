import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Camera, Clock, Users, Star, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const CorporateEvents = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section 
        className="h-[60vh] bg-cover bg-center flex items-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Elevate Your Corporate Image</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Professional event photography that captures the essence of your brand and the success of your corporate gatherings.
            </p>
            <Link 
              to="/services/quotes" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
            >
              Request Professional Coverage
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
            <Building className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Brand-Focused</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Photography that aligns with your corporate identity and enhances your professional image.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <Camera className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300">
              State-of-the-art equipment and lighting for exceptional quality in any venue.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
          >
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rapid Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quick turnaround for time-sensitive events and social media content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-secondary p-6 rounded-xl shadow-lg">
              <Award className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Award Ceremonies</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Capturing achievement celebrations and recognition moments.
              </p>
            </div>
            
            <div className="bg-white dark:bg-secondary p-6 rounded-xl shadow-lg">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Conferences</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full coverage of keynotes, breakouts, and networking.
              </p>
            </div>
            
            <div className="bg-white dark:bg-secondary p-6 rounded-xl shadow-lg">
              <Briefcase className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Product Launches</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Showcasing your products in their best light.
              </p>
            </div>
            
            <div className="bg-white dark:bg-secondary p-6 rounded-xl shadow-lg">
              <Building className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Team Events</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Documenting team building and company culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white dark:bg-secondary p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4">Essential</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                4 Hours Coverage
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                1 Professional Photographer
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
                48hr Delivery
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
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                8 Hours Coverage
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                2 Professional Photographers
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                400+ Edited Photos
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Online Gallery
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                24hr Delivery
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Social Media Edits
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
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Full Event Coverage
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Multiple Photographers
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Unlimited Photos
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Online Gallery
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Same-Day Previews
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Marketing Package
              </li>
              <li className="flex items-center">
                <Star className="h-4 w-4 text-primary mr-2" />
                Video Highlights
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

export default CorporateEvents;