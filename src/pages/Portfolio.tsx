import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lightbox from '../components/Lightbox';

type Category = 'all' | 'weddings' | 'elopements' | 'engagements' | 'destination';

interface PortfolioImage {
  id: number;
  url: string;
  couple: string;
  location: string;
  category: Category;
}

const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    couple: 'Sarah & James',
    location: 'Sydney Opera House',
    category: 'weddings',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
    couple: 'Emma & David',
    location: 'Byron Bay Beach',
    category: 'destination',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
    couple: 'Olivia & Michael',
    location: 'Melbourne Gardens',
    category: 'engagements',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    couple: 'Sophie & William',
    location: 'Gold Coast Hinterland',
    category: 'elopements',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    couple: 'Isabella & Alexander',
    location: 'Perth Sunset',
    category: 'weddings',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    couple: 'Chloe & Benjamin',
    location: 'Adelaide Hills',
    category: 'engagements',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
    couple: 'Ava & Lucas',
    location: 'Brisbane Botanical',
    category: 'weddings',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80',
    couple: 'Mia & Noah',
    location: 'Hobart Waterfront',
    category: 'destination',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    couple: 'Charlotte & Liam',
    location: 'Blue Mountains',
    category: 'elopements',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1600367407229-943bec430b83?w=800&q=80',
    couple: 'Amelia & Ethan',
    location: 'Cairns Beach',
    category: 'destination',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
    couple: 'Harper & Mason',
    location: 'Sydney Harbour',
    category: 'engagements',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1525258428416-6a4f7024b05e?w=800&q=80',
    couple: 'Ella & Jack',
    location: 'Yarra Valley',
    category: 'weddings',
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: 'all' as Category, name: 'All' },
    { id: 'weddings' as Category, name: 'Weddings' },
    { id: 'elopements' as Category, name: 'Elopements' },
    { id: 'engagements' as Category, name: 'Engagements' },
    { id: 'destination' as Category, name: 'Destination' },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === selectedCategory);

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] dark:bg-[#0A0A0A] pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of our finest work capturing love stories across Australia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#C9A96E] to-[#D4A5A5] text-white shadow-lg shadow-[#C9A96E]/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-1">
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

      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
}
