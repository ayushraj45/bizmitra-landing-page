
import React from 'react';

const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 15.5l-3.5-3.5M15.5 15.5V9.5m0 6h-6m7-1a8 8 0 11-16 0 8 8 0 0116 0z" />
  </svg>
);

export default TargetIcon;
