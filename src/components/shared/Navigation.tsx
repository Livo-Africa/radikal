// src/components/shared/Navigation.tsx - REVAMPED
'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Camera, Building2, Users, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdowns = {
    individuals: [
      { name: "Studio Shots", href: "/individuals/studio", icon: Camera },
      { name: "Headshots", href: "/individuals/headshots", icon: Users },
      { name: "Occasion & Celebration", href: "/individuals/occasion", icon: Sparkles },
      { name: "Milestone Shots", href: "/individuals/milestone", icon: Camera }
    ],
    business: [
      { name: "Product Shots", href: "/business/product", icon: Camera },
      { name: "Brand Identity", href: "/business/brand", icon: Building2 },
      { name: "Social Media Content", href: "/business/social", icon: Users },
      { name: "Marketing Visuals", href: "/business/marketing", icon: Sparkles }
    ],
    creators: [
      { name: "Partnership Programs", href: "/creators/partnership", icon: Users },
      { name: "White-label Services", href: "/creators/white-label", icon: Building2 },
      { name: "Portfolio Enhancement", href: "/creators/portfolio", icon: Sparkles }
    ]
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-[#D4AF37]/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Enhanced Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B91C1C] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg transition-colors ${
                scrolled ? 'text-white' : 'text-white'
              } group-hover:text-[#D4AF37]`}>
                RADIKAL<span className="text-[#D4AF37]">TECH</span>
              </span>
              <span className="text-[#D4AF37] text-xs hidden sm:block group-hover:text-white transition-colors">
                Class · Technology · Future
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Individuals Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('individuals')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base">
                <Users className="w-4 h-4" />
                <span>Individuals</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                  activeDropdown === 'individuals' ? 'rotate-180' : ''
                }`} />
              </button>
              {activeDropdown === 'individuals' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-xl shadow-2xl py-3 z-50">
                  {dropdowns.individuals.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors text-sm group"
                    >
                      <item.icon className="w-4 h-4 text-[#D4AF37]" />
                      <span>{item.name}</span>
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
              <button className="flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base">
                <Building2 className="w-4 h-4" />
                <span>Business</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                  activeDropdown === 'business' ? 'rotate-180' : ''
                }`} />
              </button>
              {activeDropdown === 'business' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-xl shadow-2xl py-3 z-50">
                  {dropdowns.business.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors text-sm group"
                    >
                      <item.icon className="w-4 h-4 text-[#D4AF37]" />
                      <span>{item.name}</span>
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
              <button className="flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base">
                <Sparkles className="w-4 h-4" />
                <span>Creators</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                  activeDropdown === 'creators' ? 'rotate-180' : ''
                }`} />
              </button>
              {activeDropdown === 'creators' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/30 rounded-xl shadow-2xl py-3 z-50">
                  {dropdowns.creators.map((item) => (
                    <a 
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors text-sm group"
                    >
                      <item.icon className="w-4 h-4 text-[#D4AF37]" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/services" className="text-white hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base">Services</a>
            <a href="/about" className="text-white hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base">About</a>
            <a href="/contact" className="text-white hover:text-[#D4AF37] transition-colors font-medium text-sm xl:text-base">Contact</a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <a 
              href="/start" 
              className="bg-[#D4AF37] hover:bg-[#b8941f] text-black font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm"
            >
              Start Now
            </a>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}