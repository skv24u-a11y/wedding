import { useState } from 'react';
import Hero from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import PackagesSection from '../components/PackagesSection';
import Testimonials from '../components/Testimonials';
import UrgencySection from '../components/UrgencySection';
import Lightbox from '../components/Lightbox';
import DecorativeDivider from '../components/DecorativeDivider';

interface PortfolioImage {
  id: number;
  url: string;
  couple: string;
  location: string;
  size: 'large' | 'medium' | 'portrait' | 'wide';
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);

  return (
    <div className="min-h-screen">
      <Hero />
      <DecorativeDivider />
      <PortfolioGrid onImageClick={setSelectedImage} />
      <DecorativeDivider />
      <PackagesSection />
      <DecorativeDivider />
      <Testimonials />
      <DecorativeDivider />
      <UrgencySection />
      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
