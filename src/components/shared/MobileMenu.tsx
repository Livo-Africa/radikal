// src/components/shared/MobileMenu.tsx - REVAMPED
'use client';
import { useState, useEffect } from 'react';
import { X, Users, Building2, Sparkles, Camera, Mail, Phone } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuItems = [
    { name: 'Individuals', href: '/individuals', icon: Users },
    { name: 'Business', href: '/business', icon: Building2 },
    { name: 'Creators', href: '/creators', icon: Sparkles },
    { name: 'Services', href: '/services', icon: Camera },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  useEffect(() => {
    if (!isMounted) return;
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMounted]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

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
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="w-6 h-6 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-current"></span>
            <span className="w-full h-0.5 bg-current"></span>
            <span className="w-full h-0.5 bg-current"></span>
          </div>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '64px', height: 'calc(100vh - 64px)' }}
      >
        {/* Menu Content */}
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
          {/* Menu Items */}
          <div className="space-y-2 mb-8">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center space-x-3 text-xl font-semibold text-white hover:text-[#D4AF37] transition-all duration-300 py-4 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-[#D4AF37]/30"
                style={{
                  animationDelay: isOpen ? `${index * 100}ms` : '0ms',
                  animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-auto space-y-4">
            <a 
              href="/start"
              onClick={handleLinkClick}
              className="block w-full bg-[#D4AF37] hover:bg-[#b8941f] text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-center text-lg"
            >
              Start Your Photoshoot
            </a>
            
            {/* Contact Info */}
            <div className="text-center text-white/70 space-y-2 text-sm">
              <p>Need help? Contact us:</p>
              <div className="flex justify-center space-x-4">
                <a href="https://wa.me/233207472307" className="hover:text-[#D4AF37] transition-colors">
                  <Phone className="w-4 h-4 inline mr-1" />
                  WhatsApp
                </a>
                <a href="mailto:radikalcreatech@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}