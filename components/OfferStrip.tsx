
import React from 'react';

const OfferStrip: React.FC = () => {
  // In a real app, this could be dismissible or driven by an API
  const [visible, setVisible] = React.useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-brand-dark text-white relative text-center p-2 text-sm font-semibold">
      <p>🎉 Limited Time Offer: Get 20% off your first 3 months! 🎉</p>
      <button 
        onClick={() => setVisible(false)}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white/70 hover:text-white"
        aria-label="Dismiss banner"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default OfferStrip;
