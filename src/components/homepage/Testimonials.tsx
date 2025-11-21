// src/components/homepage/Testimonials.tsx - IMAGE-FOCUSED REDESIGN
'use client';
import { useState, useEffect } from 'react';
import { Star, MessageCircle, User, Filter, ZoomIn, X, ChevronDown } from 'lucide-react';

export default function Testimonials({ testimonials = [] }: { testimonials?: any[] }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMounted, setIsMounted] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filters = ['All', 'Individuals', 'Business', 'Creators', 'WhatsApp'];

  // Enhanced filtering logic
  const getFilteredTestimonials = () => {
    if (activeFilter === 'All') {
      return testimonials.slice(0, visibleCount);
    }

    if (activeFilter === 'WhatsApp') {
      return testimonials.filter(t => 
        t.category?.toLowerCase().includes('whatsapp')
      ).slice(0, visibleCount);
    }

    // Filter by category keywords
    const categoryTestimonials = testimonials.filter(t => {
      const category = t.category?.toLowerCase() || '';
      switch (activeFilter.toLowerCase()) {
        case 'individuals': return category.includes('individual') || category.includes('personal');
        case 'business': return category.includes('business') || category.includes('corporate');
        case 'creators': return category.includes('creator') || category.includes('influencer');
        default: return true;
      }
    });

    return categoryTestimonials.slice(0, visibleCount);
  };

  const filteredTestimonials = getFilteredTestimonials();
  const hasMore = testimonials.length > filteredTestimonials.length;

  // Loading state
  if (!isMounted) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Stories</h2>
          <p className="text-gray-600">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  // Empty state
  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Stories</h2>
          <p className="text-gray-600">Client testimonials loading soon...</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Image Expansion Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full w-full">
            <img 
              src={expandedImage} 
              alt="Testimonial screenshot"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              onClick={() => setExpandedImage(null)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Enhanced Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-playfair">
              Real <span className="text-[#D4AF37]">Results</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our clients are saying through their experiences
            </p>
          </div>

          {/* Mobile Filter Dropdown */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-xl px-4 py-3 font-semibold text-gray-700 shadow-sm"
            >
              <span className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>{activeFilter}</span>
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {showFilters && (
              <div className="mt-2 bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      setVisibleCount(6);
                      setShowFilters(false);
                    }}
                    className={`w-full text-left px-4 py-3 transition-colors ${
                      activeFilter === filter
                        ? 'bg-[#D4AF37] text-black font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Filter Tabs */}
          <div className="hidden md:flex justify-center mb-8">
            <div className="bg-gray-100 rounded-2xl p-2 flex space-x-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setVisibleCount(6);
                  }}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-[#D4AF37] text-black shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Unified Image Grid - Consistent sizing for ALL testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {filteredTestimonials.map((testimonial, index) => {
              const rating = testimonial.rating || 5;
              const isWhatsApp = testimonial.category?.toLowerCase().includes('whatsapp');
              
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                >
                  {/* Image Container - Consistent for ALL testimonials */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                    {testimonial.imageUrl ? (
                      <>
                        <img 
                          src={testimonial.imageUrl} 
                          alt={isWhatsApp ? "WhatsApp conversation" : `Testimonial from ${testimonial.name}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Zoom Overlay */}
                        <div 
                          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 cursor-pointer flex items-center justify-center"
                          onClick={() => setExpandedImage(testimonial.imageUrl)}
                        >
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <ZoomIn className="w-5 h-5 text-gray-900" />
                          </div>
                        </div>
                      </>
                    ) : (
                      /* Fallback for testimonials without images */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#D4AF37]/10 to-[#B91C1C]/10 p-6">
                        {isWhatsApp ? (
                          <MessageCircle className="w-12 h-12 text-green-500 mb-3" />
                        ) : (
                          <User className="w-12 h-12 text-[#D4AF37] mb-3" />
                        )}
                        <div className="text-center">
                          <div className="font-semibold text-gray-900 mb-2">
                            {testimonial.name}
                          </div>
                          <div className="flex justify-center mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i}
                                className={`w-4 h-4 ${
                                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-3">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Minimal Info Bar - Same for ALL testimonials */}
                  <div className="p-3 bg-white border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 min-w-0 flex-1">
                        {isWhatsApp ? (
                          <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <User className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                        )}
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {testimonial.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 flex-shrink-0">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {testimonial.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-8">
              <button 
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="bg-[#D4AF37] hover:bg-[#b8941f] text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
              >
                <span>Load More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  No Testimonials Found
                </h3>
                <p className="text-gray-600 mb-6">
                  No testimonials available for "{activeFilter}" category.
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

          {/* Viewing Instructions */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
              <ZoomIn className="w-4 h-4" />
              <span>Tap on any image to view it larger</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}