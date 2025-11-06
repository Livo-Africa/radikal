// src/components/homepage/Testimonials.tsx
'use client';
import { useState, useEffect } from 'react';

// Define category keywords for consistent filtering
const CATEGORY_KEYWORDS = {
  Individuals: ['individual', 'personal'],
  Business: ['business', 'corporate', 'brand'],
  Creators: ['creator', 'influencer', 'artist'],
  WhatsApp: ['whatsapp']
};

export default function Testimonials({ testimonials = [] }: { testimonials?: any[] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filters = ['All', 'Individuals', 'Business', 'Creators', 'WhatsApp'];

  // Enhanced filtering with exact category matching
  const getFilteredTestimonials = () => {
    if (activeFilter === 'All') {
      return testimonials.slice(0, 6); // Show 6 balanced testimonials for "All"
    }

    if (activeFilter === 'WhatsApp') {
      const whatsappTestimonials = testimonials.filter(t => {
        const category = t.category?.toLowerCase() || '';
        return category.includes('whatsapp');
      });
      return visibleCount > 6 ? whatsappTestimonials.slice(0, visibleCount) : whatsappTestimonials.slice(0, 6);
    }

    // For other categories, use keyword matching
    const keywords = CATEGORY_KEYWORDS[activeFilter as keyof typeof CATEGORY_KEYWORDS] || [];
    const categoryTestimonials = testimonials.filter(t => {
      const category = t.category?.toLowerCase() || '';
      return keywords.some(keyword => category.includes(keyword));
    });

    return categoryTestimonials.slice(0, visibleCount);
  };

  const filteredTestimonials = getFilteredTestimonials();

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const hasMoreTestimonials = () => {
    if (activeFilter === 'All') return false; // No load more for All tab
    
    if (activeFilter === 'WhatsApp') {
      const totalWhatsApp = testimonials.filter(t => 
        t.category?.toLowerCase().includes('whatsapp')
      ).length;
      return totalWhatsApp > filteredTestimonials.length;
    }

    const keywords = CATEGORY_KEYWORDS[activeFilter as keyof typeof CATEGORY_KEYWORDS] || [];
    const totalInCategory = testimonials.filter(t => {
      const category = t.category?.toLowerCase() || '';
      return keywords.some(keyword => category.includes(keyword));
    }).length;

    return totalInCategory > filteredTestimonials.length;
  };

  const hasMore = hasMoreTestimonials();

  // Render loading state during SSR
  if (!isMounted) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-playfair">What Our Clients Say</h2>
          <p className="text-gray-600">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  // Render empty state if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 font-playfair">What Our Clients Say</h2>
          <p className="text-gray-600">Client testimonials loading soon...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">
          What Our Clients Say About Radikal
        </h2>
        
        {/* Mobile-Optimized Filter Tabs */}
        <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2 px-4 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setVisibleCount(filter === 'WhatsApp' ? 6 : 6);
                }}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base whitespace-nowrap flex-shrink-0 ${
                  activeFilter === filter
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/30'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {filteredTestimonials.map((testimonial, index) => {
            const rating = testimonial.rating || 5;
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            const isWhatsApp = testimonial.category?.toLowerCase().includes('whatsapp');
            
            return (
              <div 
                key={`${testimonial.name}-${index}`}
                className={`group bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden ${
                  isWhatsApp ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative">
                  {/* WhatsApp-Specific Layout */}
                  {isWhatsApp ? (
                    <div className="text-center">
                      {/* WhatsApp Image - Large & Prominent */}
                      {testimonial.imageUrl ? (
                        <img 
                          src={testimonial.imageUrl} 
                          alt={testimonial.name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-4 border-4 border-[#25D366] group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white font-bold text-2xl md:text-3xl mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                          {testimonial.name?.charAt(0) || 'W'}
                        </div>
                      )}
                      
                      {/* WhatsApp Rating */}
                      <div className="flex items-center justify-center mb-3">
                        <div className="flex text-yellow-400 text-lg md:text-xl mr-2">
                          {'★'.repeat(fullStars)}
                          {hasHalfStar && <span>½</span>}
                          {'☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0))}
                        </div>
                        <span className="text-base md:text-lg font-bold text-gray-700">({rating})</span>
                      </div>

                      {/* WhatsApp Indicator */}
                      <div className="flex items-center justify-center text-xs md:text-sm text-gray-500 mb-3">
                        <div className="w-3 h-3 bg-[#25D366] rounded-full mr-2"></div>
                        WhatsApp Conversation
                      </div>

                      {/* Minimal Text - Focus on Visuals */}
                      <p className="text-gray-700 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm md:text-base mb-4 line-clamp-3">
                        "{testimonial.text}"
                      </p>

                      {/* Anonymous Client Name */}
                      <div className="text-center">
                        <h3 className="font-bold text-gray-900 group-hover:text-black transition-colors text-base md:text-lg">
                          {testimonial.name || "Happy Client"}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    /* Standard Testimonial Layout */
                    <>
                      {/* Client Info */}
                      <div className="flex items-center mb-4">
                        {testimonial.imageUrl ? (
                          <img 
                            src={testimonial.imageUrl} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#D4AF37] group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-105 transition-transform duration-300">
                            {testimonial.name?.charAt(0) || 'C'}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-900 group-hover:text-black transition-colors text-base truncate">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-[#D4AF37] font-semibold truncate">
                            {testimonial.category}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400 text-sm mr-2">
                          {'★'.repeat(fullStars)}
                          {hasHalfStar && <span>½</span>}
                          {'☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0))}
                        </div>
                        <span className="text-xs text-gray-500">({rating})</span>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 italic leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-sm line-clamp-4">
                        "{testimonial.text}"
                      </p>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-8 md:mt-12">
            <button 
              onClick={handleLoadMore}
              className="bg-[#D4AF37] hover:bg-[#b8941f] text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-base md:text-lg"
            >
              Load More Testimonials
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">No Testimonials Found</h3>
              <p className="text-gray-600 mb-6">
                No testimonials available for the "{activeFilter}" category yet.
              </p>
              <button 
                onClick={() => setActiveFilter('All')}
                className="bg-[#D4AF37] hover:bg-[#b8941f] text-black font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                View All Testimonials
              </button>
            </div>
          </div>
        )}

        {/* Performance Indicator */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Showing {filteredTestimonials.length} testimonials
          {activeFilter !== 'All' && ` in ${activeFilter}`}
        </div>
      </div>
    </section>
  );
}