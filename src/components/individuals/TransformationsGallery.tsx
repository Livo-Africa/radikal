// src/components/individuals/TransformationsGallery.tsx
'use client';
import { useState, useEffect } from 'react';

export default function TransformationsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');

  const transformations = [
    {
      id: 1,
      before: "https://via.placeholder.com/500x600/333/fff?text=Before%3A%20Basic%20Selfie",
      after: "https://via.placeholder.com/500x600/666/fff?text=After%3A%20Professional%20Headshot",
      category: "Headshots",
      title: "Professional Headshot Transformation",
      service: "Profile Headshots"
    },
    {
      id: 2,
      before: "https://via.placeholder.com/500x600/444/fff?text=Before%3A%20Casual%20Graduation",
      after: "https://via.placeholder.com/500x600/666/fff?text=After%3A%20Graduation%20Portrait", 
      category: "Occasions",
      title: "Graduation Photo Enhancement",
      service: "Graduation Shots"
    },
    {
      id: 3,
      before: "https://via.placeholder.com/500x600/555/fff?text=Before%3A%20Group%20Selfie",
      after: "https://via.placeholder.com/500x600/666/fff?text=After%3A%20Group%20Portrait",
      category: "Group",
      title: "Group Photo Makeover",
      service: "Group Standard"
    },
    {
      id: 4,
      before: "https://via.placeholder.com/500x600/333/fff?text=Before%3A%0AEveryday%20Look",
      after: "https://via.placeholder.com/500x600/666/fff?text=After%3A%0ABirthday%20Special",
      category: "Occasions", 
      title: "Birthday Celebration Shots",
      service: "Birthday Basic"
    },
    {
      id: 5,
      before: "https://via.placeholder.com/500x600/444/fff?text=Before%3A%0ACasual%20Profile",
      after: "https://via.placeholder.com/500x600/666/fff?text=After%3A%0AProfessional%20Branding",
      category: "Headshots",
      title: "LinkedIn Profile Upgrade", 
      service: "Occupation Shots"
    }
  ];

  const filters = ['All', 'Headshots', 'Occasions', 'Group', 'Couples'];

  // Filter transformations
  const filteredTransformations = activeFilter === 'All' 
    ? transformations 
    : transformations.filter(t => t.category === activeFilter);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (filteredTransformations.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTransformations.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [filteredTransformations.length]);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">
          See The Transformation
        </h2>
        <p className="text-xl text-center mb-12 text-[#D4AF37]">
          Real results from our virtual photoshoot studio
        </p>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base md:px-6 md:py-3 ${
                activeFilter === filter
                  ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Transformation Display */}
        {filteredTransformations.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
              {/* Current Transformation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Before */}
                <div className="text-center">
                  <div className="bg-gray-800 rounded-2xl p-4 mb-4">
                    <h4 className="text-red-400 font-bold text-lg mb-2">BEFORE</h4>
                  </div>
                  <img 
                    src={filteredTransformations[currentIndex].before}
                    alt="Before transformation"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                
                {/* After */}
                <div className="text-center">
                  <div className="bg-gray-800 rounded-2xl p-4 mb-4">
                    <h4 className="text-[#D4AF37] font-bold text-lg mb-2">AFTER</h4>
                  </div>
                  <img 
                    src={filteredTransformations[currentIndex].after}
                    alt="After transformation"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Transformation Info */}
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-3 text-white">
                  {filteredTransformations[currentIndex].title}
                </h4>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <span className="bg-[#D4AF37] text-black px-3 py-2 rounded-full font-semibold">
                    {filteredTransformations[currentIndex].service}
                  </span>
                  <span className="bg-[#B91C1C] text-white px-3 py-2 rounded-full font-semibold">
                    {filteredTransformations[currentIndex].category}
                  </span>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-3">
                {filteredTransformations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#D4AF37] scale-125 shadow-lg shadow-[#D4AF37]/50' 
                        : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center mt-8">
              <a 
                href="/transformations"
                className="inline-block bg-transparent hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black px-6 py-3 rounded-lg font-semibold transition-colors border border-[#D4AF37]"
              >
                View More Works →
              </a>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredTransformations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No transformations found for "{activeFilter}" category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}