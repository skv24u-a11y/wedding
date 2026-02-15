import React, { useState } from 'react';
import { Camera, Award, Users, MapPin, Clock, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();

  const timelineEvents = [
    {
      year: "1976",
      title: "The Beginning",
      description: "Started career with black & white 120 MM camera",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894"
    },
    {
      year: "1980",
      title: "Professional Training",
      description: "Worked with photography legend Mr. Vinay Vora",
      icon: Users,
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
    },
    {
      year: "1984",
      title: "Independence",
      description: "Established 'Ronak Studio' as an independent photographer",
      icon: Star,
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
    },
    {
      year: "1990",
      title: "Major Appointments",
      description: "Official photographer for Gujarat Cricket Association, Coca Cola, and Pepsi",
      icon: Award,
      image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07"
    },
    {
      year: "2003",
      title: "Documentary Success",
      description: "Created documentary film for Gujarat Yatra Vikas Board",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728"
    },
    {
      year: "2020",
      title: "Prestigious Events",
      description: "Official photographer for 'Namaste Trump' event and Umiya Temple Stone Foundation",
      icon: Star,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About VAV Films</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A legacy of excellence in photography and videography, spanning over four decades of capturing moments that matter.
          </p>
        </motion.div>
      </section>

      {/* Founder's Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://i.ibb.co/fVyvMcBg/Amit-Final.png"
              alt="Mr. Amit Vyas"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Mr. Amit Vyas - The Legend</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A pioneer in Gujarat's photography industry, Mr. Amit Vyas began his remarkable journey in 1976 with a black & white 120 MM camera. His passion for photography and dedication to excellence has made him one of the most respected names in the industry.
            </p>
            <div className="flex items-center mt-8">
              <Camera className="h-8 w-8 text-purple-600 mr-4" />
              <p className="text-lg font-semibold">45+ Years of Excellence in Photography</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Creative Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-48 h-48 mx-auto mb-4">
              <img
                src="https://i.ibb.co/fVyvMcBg/Amit-Final.png"
                alt="Amit Vyas"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Amit Vyas</h3>
            <p className="text-gray-600 dark:text-gray-300">Founder & Owner</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              A visionary leader with over 45 years of experience in photography and videography.
            </p>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-48 h-48 mx-auto mb-4">
              <img
                src="https://i.ibb.co/QFLrqnXG/Vaibhav-vyas.jpg"
                alt="Vaibhav Vyas"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vaibhav Vyas</h3>
            <p className="text-gray-600 dark:text-gray-300">Co-Founder</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Leading the next generation with innovative techniques and creative vision.
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-48 h-48 mx-auto mb-4">
              <img
                src="https://i.ibb.co/PZh8nmwC/Jitu-Patel.jpg"
                alt="Jitu Patel"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Jitu Patel</h3>
            <p className="text-gray-600 dark:text-gray-300">Manager</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Ensuring smooth operations and exceptional client service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-purple-600 origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Our Journey Through Time
          </motion.h2>

          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/0 via-purple-600 to-purple-600/0" />

            {/* Timeline Events */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`relative flex items-center mb-24 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                onHoverStart={() => setSelectedEvent(index)}
                onHoverEnd={() => setSelectedEvent(null)}
              >
                {/* Content Card */}
                <motion.div
                  className={`w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "mr-12" : "ml-12"
                  }`}
                  variants={{
                    hidden: { 
                      opacity: 0,
                      x: index % 2 === 0 ? -30 : 30
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }
                  }}
                >
                  <div className="relative group">
                    {/* Background Image */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-600/90 mix-blend-multiply" />
                    </div>

                    {/* Content */}
                    <div className="relative p-8 text-white">
                      <span className="text-purple-300 text-sm font-medium">{event.year}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-4">{event.title}</h3>
                      <p className="text-purple-100">{event.description}</p>
                    </div>

                    {/* Hover Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </motion.div>

                {/* Timeline Node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center shadow-lg transition-shadow duration-300 ${
                      selectedEvent === index ? 'shadow-purple-500/50 ring-4 ring-purple-500/20' : ''
                    }`}
                  >
                    <event.icon className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Awards & Recognition
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "EEMA Award",
              description: "Best contribution in Event Industry in India"
            },
            {
              title: "GIHED Award",
              description: "Best photographer/videographer (2010-2019)"
            },
            {
              title: "CREDAI Award",
              description: "Best photographer/videographer (2013-2018)"
            },
            {
              title: "EMF Annual Award",
              description: "Best Event Photographer/Videographer (2014-2022)"
            },
            {
              title: "WOW Awards",
              description: "Best Wedding Film Award (2015)"
            },
            {
              title: "Gujarat Iconic Films",
              description: "Excellence in Filmmaking (2016)"
            }
          ].map((award, index) => (
            <motion.div
              key={award.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Award className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipment Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Professional Equipment
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">Video Equipment</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• SONY FS 74K SLOW MOTION CAMCORDER (6 units)</li>
                <li>• Black Magic 4k production live wireless mixer</li>
                <li>• 360 DEGREE 4K CAMERA (2 units)</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">Photography Equipment</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• CANON 1DX MARK 2 & SONY FX3</li>
                <li>• NIKON Z7, CANON ESR8 8k</li>
                <li>• HASSELBLAD Professional Camera</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4">Cinematography Gear</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• RONIN 3XE GIMBAL</li>
                <li>• MINI JIMMY, SLIDER, GLIDE CAM</li>
                <li>• TIME LAPSE GEAR</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International Experience */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          International Experience
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "United Kingdom", "Dubai", "Thailand", "China",
            "Turkey", "Bali", "South Africa", "Mauritius"
          ].map((country, index) => (
            <motion.div
              key={country}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <MapPin className="h-6 w-6 text-purple-600 mx-auto mb-3" />
              <p className="font-medium">{country}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;