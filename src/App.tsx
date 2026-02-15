import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import WeddingPhotography from './pages/services/WeddingPhotography';
import PreWedding from './pages/services/PreWedding';
import BabyShower from './pages/services/BabyShower';
import CorporateEvents from './pages/services/CorporateEvents';
import CustomQuotes from './pages/services/CustomQuotes';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="camera-loader">
        <div className="camera-shutter">
          <div className="camera-lens"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/wedding" element={<WeddingPhotography />} />
            <Route path="/services/pre-wedding" element={<PreWedding />} />
            <Route path="/services/baby-shower" element={<BabyShower />} />
            <Route path="/services/corporate" element={<CorporateEvents />} />
            <Route path="/services/quotes" element={<CustomQuotes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;