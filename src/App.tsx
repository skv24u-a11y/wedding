import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import IndianWeddingLoader from './components/IndianWeddingLoader';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Packages from './pages/Packages';
import Contact from './pages/Contact';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <IndianWeddingLoader />
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0D0A07] transition-colors">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;