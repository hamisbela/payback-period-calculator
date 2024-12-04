import React from 'react';
import Calculator from '../components/Calculator/Calculator';
import SeoContent from '../components/SEO/SeoContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Calculator />
        <SeoContent />
      </div>
    </div>
  );
}