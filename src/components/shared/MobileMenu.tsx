'use client';
import { useState, useEffect } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure this only runs on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuItems = [

    { name: 'Individuals', href: '/individuals' },
    { name: 'Business', href: '/business' },
    { name: 'Creators', href: '/creators' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!isMounted) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen, isMounted]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Don't render on server side to avoid hydration issues
  if (!isMounted) {
    return (
      <div className="lg:hidden">
        <button className="p-2 text-white hover:text-[#D4AF37] transition-colors">
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-current"></span>
            <span className="w-full h-0.5 bg-current"></span>
            <span className="w-full h-0.5 bg-current"></span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:text-[#D4AF37] transition-colors relative z-50"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}></span>
          <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2.5' : ''
          }`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ 
          top: '64px',
          height: 'calc(100vh - 64px)'
        }}
      >
        {/* Menu Content Container */}
        <div className="flex flex-col items-center justify-start h-full px-6 py-8 overflow-y-auto">
          {/* Menu Items */}
          <div className="w-full max-w-sm space-y-4">
            {menuItems.map((item, index) => (
              <div 
                key={item.name}
                className="transform transition-all duration-500 ease-out"
                style={{
                  transitionDelay: isOpen ? `${index * 80}ms` : '0ms',
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block w-full text-xl font-semibold text-white hover:text-[#D4AF37] transition-all duration-300 py-4 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#D4AF37]/30 text-center"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div 
            className="mt-8 w-full max-w-sm transform transition-all duration-700 ease-out"
            style={{
              transitionDelay: isOpen ? '600ms' : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}