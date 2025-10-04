import React, { useEffect } from 'react';
import { Routes, Route, useLocation, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import OfferStrip from './components/OfferStrip';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the element. Otherwise, scroll to the top.
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the '#'
      // Use a timeout to ensure the element is rendered before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // The 'scroll-margin-top' on the element in CSS will handle the offset
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer); // Cleanup the timer
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]); // Re-run effect when location changes

  return (
    <div className="bg-brand-light text-brand-dark min-h-screen flex flex-col font-sans">
      <OfferStrip />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;