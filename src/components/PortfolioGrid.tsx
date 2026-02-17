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
    <section id="portfolio" ref={ref} className="py-32 bg-gradient-to-b from-[#0D0A07] to-[#1A1208]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-[#D4A843]/10 border border-[#D4A843]/30 rounded-full text-[#D4A843] text-sm tracking-[0.3em] uppercase font-['Montserrat'] font-medium mb-6"
          >
            Our Work
          </motion.span>

          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-bold text-[#F5ECD7] mb-6">
            Moments That Matter
          </h2>
          <p className="text-xl text-[#C4A882] max-w-3xl mx-auto leading-relaxed">
            Every frame tells a story of love, laughter, and unforgettable moments.
            <br />
            <span className="text-[#D4A843]">These are the memories that last forever.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${sizeClasses[image.size]} group relative overflow-hidden rounded-xl cursor-pointer border border-[#D4A843]/10 hover:border-[#D4A843]/30 transition-all duration-500`}
              onClick={() => onImageClick(image)}
            >
              <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
                <img
                  src={image.url}
                  alt={`${image.couple} - ${image.location}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A07] via-[#0D0A07]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-[#F5ECD7] text-3xl font-['Cormorant_Garamond'] font-bold mb-2">
                    {image.couple}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-[#D4A843]" />
                    <p className="text-[#D4A843] text-sm tracking-wider uppercase font-['Montserrat']">{image.location}</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-[#D4A843]/0 group-hover:bg-[#D4A843]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 border border-[#D4A843]/0 group-hover:border-[#D4A843]/50">
                <svg className="w-6 h-6 text-[#D4A843]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
