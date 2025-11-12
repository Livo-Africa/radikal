// src/components/individuals/TransformationsGallery.tsx - UPDATED
'use client';
import { useState, useEffect } from 'react';

export default function TransformationsGallery({ transformations = [] }: { transformations?: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (transformations.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [transformations.length]);

  if (!transformations || transformations.length === 0) {
    return (
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair text-white">
            Transformations
          </h2>
          <p className="text-gray-400">Loading amazing transformations...</p>
        </div>
      </section>
    );
  }

  const currentTransform = transformations[currentIndex];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair text-white">
          See The Transformation
        </h2>

        {/* Transformation Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Before Image */}
            <div className="relative group">
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg font-bold text-sm z-10">
                BEFORE
              </div>
              <img 
                src={currentTransform.beforeUrl || currentTransform.before}
                alt="Before transformation"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop';
                }}
              />
            </div>
            
            {/* After Image */}
            <div className="relative group">
              <div className="absolute top-4 left-4 bg-[#D4AF37] text-black px-3 py-1 rounded-lg font-bold text-sm z-10">
                AFTER
              </div>
              <img 
                src={currentTransform.afterUrl || currentTransform.after}
                alt="After transformation"
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=600&fit=crop';
                }}
              />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#D4AF37] scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}