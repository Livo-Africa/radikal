// src/components/homepage/Hero.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Camera, Building, Zap, Star, Users } from 'lucide-react';

interface Symbol {
  id: number;
  svg: string;
  name: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  delay: number;
  duration: number;
}

export default function Hero() {
  const [currentSubheading, setCurrentSubheading] = useState(0);
  const [symbols, setSymbols] = useState<Symbol[]>([]);
  const symbolCount = useRef(0);
  const maxSymbols = 6; // Reduced for better performance
  
  const subheadings = [
    "Studio photos without the studio",
    "Premium Visuals at Revolutionary Speed", 
    "Your Creative Partner in the Digital Age"
  ];

  // Properly formatted SVG symbols
  const symbolTemplates = [
    {
      name: "Gye Nyame",
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2" fill="none"/>
        <path d="M 50,5 A 45,45 0 0 1 95,50 A 45,45 0 0 1 50,95 A 45,45 0 0 1 5,50 A 45,45 0 0 1 50,5 Z" stroke="currentColor" stroke-width="2" fill="none"/>
        <circle cx="50" cy="50" r="15" stroke="currentColor" stroke-width="2" fill="none"/>
      </svg>`
    },
    {
      name: "Sankofa",
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 50,10 C 30,10 20,35 30,50 C 40,65 70,65 80,50 C 85,42 85,30 75,25 L 65,35 C 70,38 70,42 68,45 C 65,50 45,50 42,42 C 40,38 45,25 50,25 C 60,25 65,40 60,45 C 58,48 55,48 53,47 L 50,70 L 70,50 L 53,47 Z" fill="currentColor"/>
      </svg>`
    },
    {
      name: "Dwennimmen",
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 30,30 C 10,50 10,70 30,85 C 50,70 50,50 30,30 Z" stroke="currentColor" stroke-width="3" fill="none"/>
        <path d="M 70,30 C 90,50 90,70 70,85 C 50,70 50,50 70,30 Z" stroke="currentColor" stroke-width="3" fill="none"/>
      </svg>`
    },
    {
      name: "Nsibidi Love",
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 30,50 C 25,35 40,25 50,30 C 60,25 75,35 70,50 C 68,60 60,68 50,70 C 40,68 32,60 30,50 Z" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M 50,30 L 50,70" stroke="currentColor" stroke-width="3"/>
      </svg>`
    },
    {
      name: "Nsibidi Unity",
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="3"/>
        <circle cx="70" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="3"/>
        <path d="M 50,30 L 50,70" stroke="currentColor" stroke-width="3"/>
        <path d="M 20,50 L 80,50" stroke="currentColor" stroke-width="3"/>
      </svg>`
    },
    {
      name: "Yin Yang",
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="currentColor" stroke-width="2" fill="none"/>
        <path d="M 50,5 a 45,45 0 1 1 0,90 a 22.5,22.5 0 1 1 0,-90 a 22.5,22.5 0 1 0 0,90 Z" fill="currentColor"/>
        <circle cx="50" cy="27.5" r="7" fill="white"/>
        <circle cx="50" cy="72.5" r="7" fill="black"/>
      </svg>`
    },
    {
      name: "Cowrie Shell",
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 30,20 C 20,40 20,60 30,80 C 50,95 70,95 80,80 C 90,60 90,40 80,20 C 70,5 50,5 30,20 Z" fill="white" stroke="currentColor" stroke-width="2"/>
        <path d="M 40,25 L 40,75" stroke="currentColor" stroke-width="1.5"/>
        <path d="M 50,22 L 50,78" stroke="currentColor" stroke-width="1.5"/>
        <path d="M 60,25 L 60,75" stroke="currentColor" stroke-width="1.5"/>
        <path d="M 30,20 C 50,35 70,35 80,20" stroke="currentColor" stroke-width="1" fill="none"/>
      </svg>`
    },
    {
      name: "Infinity",
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 30,50 C 20,65 40,80 55,70 C 65,65 65,50 55,45 C 50,40 40,40 35,45 C 30,50 25,65 35,75 C 45,85 65,75 70,60" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
      </svg>`
    }
  ];

  const colors = [
    '#D4AF37', // Gold
    '#F4D03F', // Yellow
    '#FFFFFF', // White
    '#E8C872', // Light Gold
    '#F7DC6F'  // Pale Yellow
  ];

  const createSymbol = (): Symbol => {
    const template = symbolTemplates[Math.floor(Math.random() * symbolTemplates.length)];
    return {
      id: symbolCount.current++,
      svg: template.svg,
      name: template.name,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: 0.4 + Math.random() * 0.6, // Reduced scale range
      rotation: Math.random() * 360,
      delay: Math.random() * 1000,
      duration: 6000 + Math.random() * 4000
    };
  };

  useEffect(() => {
    const subheadingInterval = setInterval(() => {
      setCurrentSubheading((prev) => (prev + 1) % subheadings.length);
    }, 3000);

    // Initial symbols
    const initialSymbols = Array.from({ length: 3 }, createSymbol);
    setSymbols(initialSymbols);

    // Add new symbols periodically
    const symbolInterval = setInterval(() => {
      setSymbols(current => {
        if (current.length >= maxSymbols) {
          return current.slice(1);
        }
        return [...current, createSymbol()];
      });
    }, 1500); // Faster symbol generation

    return () => {
      clearInterval(subheadingInterval);
      clearInterval(symbolInterval);
    };
  }, []);

  return (
    <section className="pt-16 min-h-[90vh] md:min-h-[100vh] flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Background with Cultural Symbols */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Cultural Symbols */}
        {symbols.map((symbol) => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={symbol.id}
              className="absolute pointer-events-none"
              style={{
                left: `${symbol.x}%`,
                top: `${symbol.y}%`,
                transform: `scale(${symbol.scale}) rotate(${symbol.rotation}deg)`,
                animation: `symbolFirework ${symbol.duration}ms ease-out ${symbol.delay}ms both`,
                color: color,
                opacity: 0.15 + Math.random() * 0.2,
                width: '60px',
                height: '60px'
              }}
            >
              <div 
                dangerouslySetInnerHTML={{ __html: symbol.svg }}
                className="w-full h-full"
              />
            </div>
          );
        })}

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#D4AF37]/20 to-[#F4D03F]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#F4D03F]/10 to-[#D4AF37]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2000ms'}}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-shimmer"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4D03F] to-transparent animate-shimmer" style={{animationDelay: '1000ms'}}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl md:max-w-4xl mx-auto">
          
          {/* Headline with Enhanced Styling */}
          <div className="mb-6 md:mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight leading-tight">
              Advanced
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent font-semibold animate-gradient-x">
                  Creative
                </span>
              </span>
              <br />
              Solutions
            </h1>
          </div>
          
          {/* Animated Subheading */}
          <div className="h-16 md:h-20 mb-6 md:mb-8 flex items-center justify-center">
            <div className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light transition-all duration-500 px-4">
              {subheadings[currentSubheading]}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <a 
              href="/individuals"
              className="w-full sm:w-auto group bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] hover:from-[#b8941f] hover:to-[#d4b83d] text-black font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-2xl flex items-center justify-center space-x-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Camera className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
              <span className="relative z-10">Start Photoshoot</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </a>
            
            <a 
              href="/business"
              className="w-full sm:w-auto group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 border border-white/30 hover:border-white/50 flex items-center justify-center space-x-2"
            >
              <Building className="w-4 h-4 md:w-5 md:h-5" />
              <span>Explore Business Solutions</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="hidden md:grid grid-cols-3 gap-8 max-w-md mx-auto text-white/80">
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-green-400 mb-2" />
              <div className="text-2xl font-bold">1-3h</div>
              <div className="text-sm">Delivery</div>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <Star className="w-6 h-6 text-yellow-400 mb-2" />
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm">Rating</div>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-blue-400 mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes symbolFirework {
          0% {
            transform: translateY(100vh) scale(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            transform: translateY(70vh) scale(0.8) rotate(90deg);
            opacity: 0.4;
          }
          40% {
            transform: translateY(40vh) scale(1) rotate(180deg);
            opacity: 0.3;
          }
          60% {
            transform: translateY(20vh) scale(0.9) rotate(270deg);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100px) scale(0) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}