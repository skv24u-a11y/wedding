import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, Clock, Users, Star, Gift, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const WeddingPhotography = () => {
  const features = [
    {
      icon: Camera,
      title: "Professional Equipment",
      description: "Using top-tier cameras like SONY FS 74K and Black Magic 4k for unmatched quality"
    },
    {
      icon: Heart,
      title: "Candid Moments",
      description: "Capturing genuine emotions and spontaneous moments throughout your special day"
    },
    {
      icon: Clock,
      title: "Full Day Coverage",
      description: "Comprehensive coverage from morning preparations to evening celebrations"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Multiple photographers and videographers for complete event coverage"
    },
    {
      icon: Star,
      title: "Premium Editing",
      description: "Professional color grading and artistic post-processing"
    },
    {
      icon: Gift,
      title: "Special Deliverables",
      description: "Cinematic highlights, full ceremony video, and curated photo albums"
    },
    {
      icon: Music,
      title: "Audio Excellence",
      description: "High-quality audio recording for ceremonies and speeches"
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section 
        className="h-[60vh] bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-luxury opacity-80"></div>
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Wedding Photography</h1>
            <p className="text-xl md:text-2xl mb-8">Creating timeless memories of your perfect day</p>
            <Link 
              to="/services/quotes" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Get a Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Your Story, Beautifully Told</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With over 45 years of experience in wedding photography, we understand that every love story is unique. 
            Our team of expert photographers combines technical excellence with artistic vision to create stunning 
            visual narratives of your special day.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card-luxury p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Wedding Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card-luxury"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Essential</h3>
              <ul className="space-y-3 mb-8">
                <li>✓ 8 Hours Coverage</li>
                <li>✓ 2 Photographers</li>
                <li>✓ 400+ Edited Photos</li>
                <li>✓ Online Gallery</li>
                <li>✓ Full Resolution Files</li>
                <li>✓ Cinematic Highlights (5 mins)</li>
              </ul>
              <Link 
                to="/services/quotes" 
                className="btn btn-primary"
              >
                Get Quote
              </Link>
            </motion.div>

            <motion.div
              className="card-luxury border-2 border-primary relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <ul className="space-y-3 mb-8">
                <li>✓ 12 Hours Coverage</li>
                <li>✓ 3 Photographers</li>
                <li>✓ 600+ Edited Photos</li>
                <li>✓ Online Gallery</li>
                <li>✓ Full Resolution Files</li>
                <li>✓ Cinematic Highlights (10 mins)</li>
                <li>✓ Engagement Session</li>
                <li>✓ Premium Photo Album</li>
              </ul>
              <Link 
                to="/services/quotes" 
                className="btn btn-primary"
              >
                Get Quote
              </Link>
            </motion.div>

            <motion.div
              className="card-luxury"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4">Luxury</h3>
              <ul className="space-y-3 mb-8">
                <li>✓ 2 Days Coverage</li>
                <li>✓ 4 Photographers</li>
                <li>✓ 1000+ Edited Photos</li>
                <li>✓ Online Gallery</li>
                <li>✓ Full Resolution Files</li>
                <li>✓ Cinematic Film (20 mins)</li>
                <li>✓ Engagement Session</li>
                <li>✓ Luxury Photo Album</li>
                <li>✓ Drone Coverage</li>
                <li>✓ Same Day Edit</li>
              </ul>
              <Link 
                to="/services/quotes" 
                className="btn btn-primary"
              >
                Get Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-luxury text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Capture Your Special Day?</h2>
          <p className="text-lg mb-8">Let's create beautiful memories together</p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default WeddingPhotography;