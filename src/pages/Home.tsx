import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Heart, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredImages = [
    "https://i.ibb.co/nNgV8w01/Whats-App-Image-2025-04-04-at-15-22-07-2.jpg",
    "https://i.ibb.co/LLRMdMS/Whats-App-Image-2025-04-04-at-15-22-07-1.jpg",
    "https://i.ibb.co/r2tzBkMh/Whats-App-Image-2025-04-04-at-15-22-07.jpg"
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section 
        className="h-screen bg-cover bg-center flex items-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <TypeAnimation
                sequence={['Capturing Your Perfect Moments']}
                wrapper="span"
                speed={50}
                cursor={false}
              />
            </h1>
            <p className="text-xl md:text-2xl mb-8">Professional photography for your most precious occasions</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 relative overflow-hidden group"
              >
                <span className="relative z-10">Book Now</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-20"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.2, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Preview */}
      <motion.section 
        ref={servicesRef}
        className="max-w-7xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Heart, title: "Wedding Photography", desc: "Capturing your special day with elegance and style" },
            { icon: Users, title: "Pre Wedding", desc: "Beautiful engagement and couple photoshoots" },
            { icon: Calendar, title: "Events", desc: "Corporate events and special occasions" },
            { icon: Camera, title: "Custom Sessions", desc: "Personalized photography sessions" }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <service.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Work */}
      <motion.section 
        ref={portfolioRef}
        className="bg-gray-100 py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={portfolioInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
          <div className="flex space-x-8 overflow-x-auto pb-8">
            {featuredImages.map((url, index) => (
              <motion.div
                key={index}
                className="flex-none w-80 h-64 relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={url} 
                  alt={`Featured work ${index + 1}`} 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/portfolio" 
              className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "They captured our wedding day perfectly. Every precious moment was beautifully documented.",
              author: "Dhaval Patel"
            },
            {
              text: "Professional, creative, and a joy to work with. Our corporate event photos were outstanding.",
              author: "Priya Shah"
            },
            {
              text: "The pre-wedding shoot was amazing. They made us feel comfortable and the photos are stunning.",
              author: "Savan Trivedi"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">- {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;