import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, Music, Building, Users, Image } from 'lucide-react';
import Masonry from 'react-masonry-css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Camera },
    { id: 'wedding', name: 'Wedding', icon: Heart },
    { id: 'live-concert', name: 'Live Concert', icon: Music },
    { id: 'corporate', name: 'Corporate Event', icon: Building },
    { id: 'pre-wedding', name: 'Pre Wedding', icon: Users },
    { id: 'custom', name: 'Custom Photoshoot', icon: Image }
  ];

  const allImages = [
    "https://i.ibb.co/7dvTVnww/Whats-App-Image-2025-04-03-at-22-24-14-1.jpg",
    "https://i.ibb.co/4nRXt7kL/Whats-App-Image-2025-04-03-at-22-24-14-2.jpg",
    "https://i.ibb.co/G3s8CtdP/Whats-App-Image-2025-04-03-at-22-24-14.jpg",
    "https://i.ibb.co/4gm1ZBMy/Whats-App-Image-2025-04-03-at-22-25-42-1.jpg",
    "https://i.ibb.co/XkKRvsDT/Whats-App-Image-2025-04-03-at-22-25-42-2.jpg",
    "https://i.ibb.co/F4bHhmbk/Whats-App-Image-2025-04-03-at-22-25-42.jpg",
    "https://i.ibb.co/PZ3yfc1G/Whats-App-Image-2025-04-03-at-22-25-43-1.jpg",
    "https://i.ibb.co/27wxv6yM/Whats-App-Image-2025-04-03-at-22-25-43-2.jpg",
    "https://i.ibb.co/CKYT6vwb/Whats-App-Image-2025-04-03-at-22-25-43.jpg",
    "https://i.ibb.co/Z6VVjxvs/Whats-App-Image-2025-04-03-at-22-25-44-1.jpg",
    "https://i.ibb.co/tM3BTtN3/Whats-App-Image-2025-04-03-at-22-25-44-2.jpg",
    "https://i.ibb.co/GQ2LmbSs/Whats-App-Image-2025-04-03-at-22-25-44.jpg",
    "https://i.ibb.co/5Xjb8JYv/Whats-App-Image-2025-04-03-at-22-25-45-1.jpg",
    "https://i.ibb.co/23F6qFLv/Whats-App-Image-2025-04-03-at-22-25-45-2.jpg",
    "https://i.ibb.co/DHnV941M/Whats-App-Image-2025-04-03-at-22-25-45-3.jpg",
    "https://i.ibb.co/yc1cLdQx/Whats-App-Image-2025-04-03-at-22-25-45.jpg",
    "https://i.ibb.co/DfGyzvQY/Whats-App-Image-2025-04-03-at-22-25-46-1.jpg",
    "https://i.ibb.co/nsRd558F/Whats-App-Image-2025-04-03-at-22-25-46-2.jpg",
    "https://i.ibb.co/G4prZhxh/Whats-App-Image-2025-04-03-at-22-25-46.jpg",
    "https://i.ibb.co/4ZK78xPZ/Whats-App-Image-2025-04-03-at-22-25-47-1.jpg",
    "https://i.ibb.co/HfFd10dd/Whats-App-Image-2025-04-03-at-22-25-47-2.jpg",
    "https://i.ibb.co/q3fr2kMH/Whats-App-Image-2025-04-03-at-22-25-47.jpg",
    "https://i.ibb.co/vxkf0sPq/Whats-App-Image-2025-04-03-at-22-27-12.jpg",
    "https://i.ibb.co/4ZHGpQ7D/Whats-App-Image-2025-04-03-at-22-27-13-1.jpg",
    "https://i.ibb.co/G4wtfcgP/Whats-App-Image-2025-04-03-at-22-27-13.jpg",
    "https://i.ibb.co/TGtRrqf/Whats-App-Image-2025-04-03-at-22-27-14-1.jpg",
    "https://i.ibb.co/GQzBv5Dc/Whats-App-Image-2025-04-03-at-22-27-14-2.jpg",
    "https://i.ibb.co/BHXZMJhV/Whats-App-Image-2025-04-03-at-22-27-14.jpg",
    "https://i.ibb.co/Mk99D2sX/Whats-App-Image-2025-04-03-at-22-27-15-1.jpg",
    "https://i.ibb.co/Xr4SkRsx/Whats-App-Image-2025-04-03-at-22-27-15-2.jpg",
    "https://i.ibb.co/qLN4pVYk/Whats-App-Image-2025-04-03-at-22-27-15.jpg",
    "https://i.ibb.co/TDVjJZjT/Whats-App-Image-2025-04-03-at-22-27-16-1.jpg",
    "https://i.ibb.co/7JPQ1rbd/Whats-App-Image-2025-04-03-at-22-27-16-2.jpg",
    "https://i.ibb.co/Pv4xg1JS/Whats-App-Image-2025-04-03-at-22-27-16.jpg",
    "https://i.ibb.co/B575wV4h/Whats-App-Image-2025-04-03-at-22-27-17-1.jpg",
    "https://i.ibb.co/dsD9Kg3s/Whats-App-Image-2025-04-03-at-22-27-17-2.jpg",
    "https://i.ibb.co/NdcqT9h4/Whats-App-Image-2025-04-03-at-22-27-17.jpg",
    "https://i.ibb.co/pr4zPQS9/Whats-App-Image-2025-04-03-at-22-27-18-1.jpg",
    "https://i.ibb.co/2QpdtWc/Whats-App-Image-2025-04-03-at-22-27-18.jpg",
    "https://i.ibb.co/LXxZcLhq/Whats-App-Image-2025-04-03-at-22-27-19.jpg",
    "https://i.ibb.co/jvx9zPj5/Whats-App-Image-2025-04-03-at-22-47-01.jpg",
    "https://i.ibb.co/C3vCyPJ2/Whats-App-Image-2025-04-03-at-22-47-03.jpg",
    "https://i.ibb.co/9mD28x8m/Whats-App-Image-2025-04-03-at-22-47-04.jpg",
    "https://i.ibb.co/xS3JLYXR/Whats-App-Image-2025-04-03-at-22-47-06-1.jpg",
    "https://i.ibb.co/HLvWm2VV/Whats-App-Image-2025-04-03-at-22-47-06.jpg",
    "https://i.ibb.co/XhkrxTC/Whats-App-Image-2025-04-03-at-22-47-07.jpg",
    "https://i.ibb.co/SFCWs29/Whats-App-Image-2025-04-03-at-22-52-45-1.jpg",
    "https://i.ibb.co/ks3vSvWR/Whats-App-Image-2025-04-03-at-22-52-45-2.jpg",
    "https://i.ibb.co/zTMnMHFx/Whats-App-Image-2025-04-03-at-22-52-45-3.jpg",
    "https://i.ibb.co/xtCQkB0m/Whats-App-Image-2025-04-03-at-22-52-45-4.jpg",
    "https://i.ibb.co/93WtfBJ9/Whats-App-Image-2025-04-03-at-22-52-45-5.jpg",
    "https://i.ibb.co/m5zwNgM6/Whats-App-Image-2025-04-03-at-22-52-45-6.jpg",
    "https://i.ibb.co/YzJqVjr/Whats-App-Image-2025-04-03-at-22-52-45-7.jpg",
    "https://i.ibb.co/CsXcg7XX/Whats-App-Image-2025-04-03-at-22-52-45-8.jpg",
    "https://i.ibb.co/nNTzqym5/Whats-App-Image-2025-04-03-at-22-52-45.jpg",
    "https://i.ibb.co/9HZJ372N/Whats-App-Image-2025-04-03-at-22-52-46-1.jpg",
    "https://i.ibb.co/qFcpjQtW/Whats-App-Image-2025-04-03-at-22-52-46.jpg"
  ];

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="min-h-screen bg-champagne dark:bg-slate">
      {/* Compact Header */}
      <div className="py-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Our Portfolio</h1>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex -ml-4 w-auto"
              columnClassName="pl-4 bg-transparent"
            >
              {allImages.map((image, index) => (
                <motion.div
                  key={image}
                  className="mb-4 relative group cursor-zoom-in"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => window.open(image, '_blank')}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image}
                      alt={`Portfolio image ${index + 1}`}
                      className="w-full h-auto transform transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-lg font-semibold px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm">
                        View Full Size
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;