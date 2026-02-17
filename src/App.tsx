import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import FloatingCTA from './components/FloatingCTA';
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
      <ThemeProvider>
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