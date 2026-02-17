import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface PortfolioImage {
  id: number;
  url: string;
  couple: string;
  location: string;
  size: 'large' | 'medium' | 'portrait' | 'wide';
}

const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    couple: 'Sarah & James',
    location: 'Sydney, Australia',
    size: 'large',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    couple: 'Emma & David',
    location: 'Byron Bay',
    size: 'medium',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
    couple: 'Olivia & Michael',
    location: 'Melbourne',
    size: 'portrait',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    couple: 'Sophie & William',
    location: 'Gold Coast',
    size: 'wide',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    couple: 'Isabella & Alexander',
    location: 'Perth',
    size: 'medium',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    couple: 'Chloe & Benjamin',
    location: 'Adelaide',
    size: 'portrait',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    couple: 'Ava & Lucas',
    location: 'Brisbane',
    size: 'large',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80',
    couple: 'Mia & Noah',
    location: 'Hobart',
    size: 'medium',
  },
];

interface PortfolioGridProps {
  onImageClick: (image: PortfolioImage) => void;
}

export default function PortfolioGrid({ onImageClick }: PortfolioGridProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sizeClasses = {
    large: 'col-span-2 row-span-2',
    medium: 'col-span-1 row-span-1',
    portrait: 'col-span-1 row-span-2',
    wide: 'col-span-2 row-span-1',
  };

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-white dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-[#1A1410] dark:text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every frame tells a story of love, laughter, and unforgettable moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${sizeClasses[image.size]} group relative overflow-hidden rounded-2xl cursor-pointer`}
              style={{ perspective: '1000px' }}
              onClick={() => onImageClick(image)}
            >
              <div
                className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src={image.url}
                  alt={`${image.couple} - ${image.location}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl font-['Playfair_Display'] font-bold mb-1">
                    {image.couple}
                  </h3>
                  <p className="text-[#C9A96E] text-sm">{image.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
