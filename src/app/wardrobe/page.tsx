// src/app/wardrobe/page.tsx - COMPLETE OPTIMIZED FILE
'use client';
import { useState, useEffect, Suspense, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navigation from '@/components/shared/Navigation';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';
import Footer from '@/components/shared/Footer';
import OptimizedImage from '@/components/shared/OptimizedImage';
import { Search, Filter, X, Check, Shirt, ArrowRight, Home, Grid3X3, List, Loader } from 'lucide-react';

interface Outfit {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  tags: string[];
  available: boolean;
}

// Debounce hook for performance
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Create a separate component that uses useSearchParams
function WardrobeContent() {
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [selectedOutfits, setSelectedOutfits] = useState<Outfit[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Use debounce for search to prevent excessive API calls
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Context awareness - get package info from URL
  const returnToStep = searchParams.get('returnToStep');
  const packageSlots = parseInt(searchParams.get('slots') || '0');
  const isIntegratedMode = returnToStep !== null;

  // Fixed static categories that won't disappear
  const categories = ['All', 'Professional', 'Casual', 'Formal', 'Cultural', 'Creative'];

  // Load any previously selected outfits
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('radikal_selected_outfits');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (parsed.outfits && Array.isArray(parsed.outfits)) {
            setSelectedOutfits(parsed.outfits);
          }
        } catch (error) {
          console.error('Error loading saved outfits:', error);
        }
      }
    }
  }, []);

  // Load outfits from API with debounced search
  const fetchOutfits = useCallback(async (reset = false) => {
    try {
      if (reset) {
        setLoading(true);
        setPage(1);
      }
      
      const currentPage = reset ? 1 : page;
      const params = new URLSearchParams();
      if (activeFilter !== 'All') params.append('category', activeFilter);
      if (debouncedSearch) params.append('search', debouncedSearch);
      params.append('page', currentPage.toString());
      params.append('limit', '24'); // Load 24 items at a time for better performance
      
      const response = await fetch(`/api/outfits?${params}`);
      const data = await response.json();
      
      if (reset) {
        setOutfits(data.outfits || []);
      } else {
        setOutfits(prev => [...prev, ...(data.outfits || [])]);
      }
      
      setHasMore(data.outfits && data.outfits.length === 24); // If we got 24 items, there might be more
      if (!reset) setPage(prev => prev + 1);
    } catch (error) {
      console.error('Failed to load outfits:', error);
      setOutfits([]);
    } finally {
      setLoading(false);
    }
  }, [activeFilter, debouncedSearch, page]);

  // Initial load and when filters change
  useEffect(() => {
    fetchOutfits(true);
  }, [activeFilter, debouncedSearch]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading || !hasMore) {
        return;
      }
      fetchOutfits();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, fetchOutfits]);

  // Handle outfit selection with context awareness
  const handleSelectOutfit = useCallback((outfit: Outfit) => {
    const isAlreadySelected = selectedOutfits.find(o => o.id === outfit.id);
    
    if (isAlreadySelected) {
      // Remove if already selected
      setSelectedOutfits(prev => prev.filter(o => o.id !== outfit.id));
    } else if (!isIntegratedMode || selectedOutfits.length < packageSlots) {
      // Add if in standalone mode or within package limits
      setSelectedOutfits(prev => [...prev, outfit]);
    }
  }, [selectedOutfits, isIntegratedMode, packageSlots]);

  // Save selections and continue - Fixed navigation
  const handleContinue = useCallback(() => {
    // Save to localStorage for persistence
    const selectionData = {
      outfits: selectedOutfits,
      selectedAt: new Date().toISOString(),
      sessionId: typeof window !== 'undefined' ? localStorage.getItem('radikal_session_id') : null
    };
    
    localStorage.setItem('radikal_selected_outfits', JSON.stringify(selectionData));

    // Fixed: Always navigate to step 4 when coming from style journey
    if (isIntegratedMode) {
      router.push('/individuals/style-journey?step=4');
    } else {
      // Start new style journey with selected outfits from step 4
      router.push('/individuals/style-journey?step=4');
    }
  }, [selectedOutfits, isIntegratedMode, router]);

  // Clear all selections
  const handleClearAll = useCallback(() => {
    setSelectedOutfits([]);
    localStorage.removeItem('radikal_selected_outfits');
  }, []);

  // Remove single outfit
  const handleRemoveOutfit = useCallback((outfitId: string) => {
    const updated = selectedOutfits.filter(o => o.id !== outfitId);
    setSelectedOutfits(updated);
    
    // Update localStorage
    if (updated.length === 0) {
      localStorage.removeItem('radikal_selected_outfits');
    } else {
      localStorage.setItem('radikal_selected_outfits', JSON.stringify({
        outfits: updated,
        selectedAt: new Date().toISOString()
      }));
    }
  }, [selectedOutfits]);

  // Clear search and filters
  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setActiveFilter('All');
  }, []);

  // Memoized outfit card component for better performance
  const OutfitCard = useCallback(({ outfit }: { outfit: Outfit }) => {
    const isSelected = selectedOutfits.find(o => o.id === outfit.id);
    const isDisabled = isIntegratedMode && !isSelected && selectedOutfits.length >= packageSlots;

    return (
      <div
        onClick={() => !isDisabled && handleSelectOutfit(outfit)}
        className={`group bg-white rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden ${
          isSelected 
            ? 'border-[#D4AF37] ring-2 ring-[#D4AF37] ring-opacity-20 transform scale-105' 
            : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
        } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {/* Outfit Image */}
        <div className="aspect-[3/4] relative overflow-hidden">
          <OptimizedImage
            src={outfit.imageUrl}
            alt={outfit.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority={outfits.indexOf(outfit) < 12} // Prioritize first 12 images
          />
          
          {/* Selection Overlay */}
          {isSelected && (
            <div className="absolute inset-0 bg-[#D4AF37]/20 flex items-center justify-center">
              <div className="bg-[#D4AF37] text-white rounded-full p-2">
                <Check className="w-4 h-4" />
              </div>
            </div>
          )}
          
          {/* Disabled Overlay */}
          {isDisabled && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white text-black px-2 py-1 rounded text-xs font-medium">
                Limit Reached
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-2 left-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
            {outfit.category}
          </div>

          {/* Selection Number */}
          {isSelected && (
            <div className="absolute top-2 right-2 w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xs">
              {selectedOutfits.findIndex(o => o.id === outfit.id) + 1}
            </div>
          )}
        </div>

        {/* Outfit Info */}
        <div className="p-3">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
            {outfit.name}
          </h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {outfit.tags.slice(0, 2).map(tag => (
              <span 
                key={tag}
                className="bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
            {outfit.tags.length > 2 && (
              <span className="text-gray-400 text-xs">
                +{outfit.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }, [selectedOutfits, isIntegratedMode, packageSlots, handleSelectOutfit, outfits]);

  // Loading skeleton component
  const LoadingSkeleton = useCallback(() => (
    <div className={`grid gap-4 ${
      viewMode === 'grid' 
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
        : 'grid-cols-1'
    }`}>
      {[...Array(12)].map((_, i) => (
        <div key={i} className="bg-gray-50 rounded-xl p-4 animate-pulse">
          <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-3"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  ), [viewMode]);

  // Empty state component
  const EmptyState = useCallback(() => (
    <div className="text-center py-16">
      <Shirt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No outfits found</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {debouncedSearch || activeFilter !== 'All' 
          ? 'Try adjusting your search or filter criteria'
          : 'No outfits available at the moment'
        }
      </p>
      {(debouncedSearch || activeFilter !== 'All') && (
        <button
          onClick={handleClearFilters}
          className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#b8941f] transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  ), [debouncedSearch, activeFilter, handleClearFilters]);

  return (
    <>
      <Navigation />
      
      <main className="pt-20 min-h-screen bg-white">
        {/* Minimal Header Section */}
        <section className="border-b border-gray-200 py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Shirt className="w-8 h-8 text-[#D4AF37]" />
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Wardrobe
                    </h1>
                    <p className="text-gray-600 text-sm mt-1">
                      {isIntegratedMode 
                        ? `Choose ${packageSlots} outfit${packageSlots > 1 ? 's' : ''} for your photoshoot`
                        : 'Professional outfits curated by stylists'
                      }
                    </p>
                  </div>
                </div>
                
                {isIntegratedMode && (
                  <div className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {packageSlots} {packageSlots > 1 ? 'outfits' : 'outfit'} available
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Bar - Uber/Apple Style */}
        <section className="sticky top-20 z-30 bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search outfits by name or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:bg-white transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                
                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-white shadow-sm text-[#D4AF37]' : 'text-gray-500'
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-white shadow-sm text-[#D4AF37]' : 'text-gray-500'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeFilter === category
                        ? 'bg-[#D4AF37] text-black shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* Selection Info Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">
                  {outfits.length} {outfits.length === 1 ? 'item' : 'items'}
                  {debouncedSearch && ` for "${debouncedSearch}"`}
                  {activeFilter !== 'All' && ` in ${activeFilter}`}
                </span>
                
                {selectedOutfits.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center space-x-1"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear all</span>
                  </button>
                )}
              </div>
              
              {selectedOutfits.length > 0 && (
                <div className="text-sm font-medium text-gray-900 flex items-center space-x-1">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>{selectedOutfits.length}{isIntegratedMode && ` / ${packageSlots}`} selected</span>
                </div>
              )}
            </div>

            {/* Outfits Grid/List */}
            {loading && outfits.length === 0 ? (
              <LoadingSkeleton />
            ) : outfits.length > 0 ? (
              <>
                <div className={`grid gap-4 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1'
                }`}>
                  {outfits.map((outfit) => (
                    <OutfitCard key={outfit.id} outfit={outfit} />
                  ))}
                </div>
                
                {/* Load More Indicator */}
                {hasMore && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => fetchOutfits()}
                      disabled={loading}
                      className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center space-x-2"
                    >
                      {loading ? (
                        <>
                          <Loader className="w-4 h-4 animate-spin" />
                          <span>Loading more...</span>
                        </>
                      ) : (
                        <span>Load More Outfits</span>
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>

        {/* Selection Panel - Fixed Bottom */}
        {selectedOutfits.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl z-40">
            <div className="container mx-auto max-w-6xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#D4AF37]" />
                    <span className="font-medium text-gray-900">
                      {selectedOutfits.length} {isIntegratedMode && `/ ${packageSlots}`} selected
                    </span>
                  </div>
                  
                  {isIntegratedMode && selectedOutfits.length < packageSlots && (
                    <span className="text-sm text-gray-500">
                      Select {packageSlots - selectedOutfits.length} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleClearAll}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={handleContinue}
                    disabled={isIntegratedMode && selectedOutfits.length === 0}
                    className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#b8941f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <span>
                      {isIntegratedMode 
                        ? selectedOutfits.length > 0 
                          ? 'Continue to Styling' 
                          : `Select ${packageSlots}`
                        : 'Start Style Journey'
                      }
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add padding to bottom when selection panel is visible */}
        {selectedOutfits.length > 0 && <div className="h-20" />}
      </main>

      <WhatsAppFloat />
      <Footer />
    </>
  );
}

// Main page component with Suspense boundary
export default function WardrobePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D4AF37] mx-auto mb-2"></div>
          <p className="text-gray-600">Loading wardrobe...</p>
        </div>
      </div>
    }>
      <WardrobeContent />
    </Suspense>
  );
}