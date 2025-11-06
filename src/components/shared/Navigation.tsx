'use client';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdowns = {
    individuals: [
      { name: "Studio Shots", href: "/individuals/studio" },
      { name: "Headshots", href: "/individuals/headshots" },
      { name: "Occasion & Celebration", href: "/individuals/occasion" },
      { name: "Milestone Shots", href: "/individuals/milestone" }
    ],
    business: [
      { name: "Product Shots", href: "/business/product" },
      { name: "Brand Identity", href: "/business/brand" },
      { name: "Social Media Content", href: "/business/social" },
      { name: "Marketing Visuals", href: "/business/marketing" }
    ],
    creators: [
      { name: "Partnership Programs", href: "/creators/partnership" },
      { name: "White-label Services", href: "/creators/white-label" },
      { name: "Portfolio Enhancement", href: "/creators/portfolio" }
    ]
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-xl text-white z-50 border-b border-[#D4AF37]/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo - RADIKALTECH with red TECH */}
        <a href="/" className="flex items-center space-x-2 group">
          <span className="font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors">
            RADIKALTECH
          </span>
          <span className="text-[#D4AF37] text-sm hidden sm:inline group-hover:text-white transition-colors">
            • Class · Technology · Future
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {/* Individuals Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('individuals')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:text-[#D4AF37] transition-colors font-medium flex items-center text-sm xl:text-base">
              Individuals <span className="ml-1">▾</span>
            </button>
            {activeDropdown === 'individuals' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-lg shadow-2xl py-2 z-50">
                {dropdowns.individuals.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Business Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('business')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:text-[#D4AF37] transition-colors font-medium flex items-center text-sm xl:text-base">
              Business <span className="ml-1">▾</span>
            </button>
            {activeDropdown === 'business' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-lg shadow-2xl py-2 z-50">
                {dropdowns.business.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Creators Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('creators')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:text-[#D4AF37] transition-colors font-medium flex items-center text-sm xl:text-base">
              Creators <span className="ml-1">▾</span>
            </button>
            {activeDropdown === 'creators' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-lg shadow-2xl py-2 z-50">
                {dropdowns.creators.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/services" className="hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base">Services</a>
          <a href="/about" className="hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base">About</a>
          <a href="/contact" className="hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base">Contact</a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
}