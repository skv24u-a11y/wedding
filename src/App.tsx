import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import FloatingCTA from './components/FloatingCTA';
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
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0A0A0A] transition-colors">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <FloatingCTA />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;