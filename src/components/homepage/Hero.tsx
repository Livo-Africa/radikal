// src/components/homepage/Hero.tsx
'use client';
import { useState, useEffect } from 'react';
import { ArrowRight, Camera, Building, Zap, Star, Users } from 'lucide-react';

export default function Hero() {
  const [currentSubheading, setCurrentSubheading] = useState(0);
  
  const subheadings = [
    "Studio photos without the studio",
    "Premium Visuals at Revolutionary Speed", 
    "Your Creative Partner in the Digital Age"
  ];

  useEffect(() => {
    const subheadingInterval = setInterval(() => {
      setCurrentSubheading((prev) => (prev + 1) % subheadings.length);
    }, 3000);

    return () => clearInterval(subheadingInterval);
  }, []);

  return (
    <section className="pt-16 min-h-[90vh] md:min-h-[100vh] flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Cultural Symbols Background */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Floating Yin Yang Symbols */}
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <YinYang />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float-reverse">
          <YinYang size="sm" />
        </div>

        {/* Ghanaian Adinkra Symbols */}
        <div className="absolute top-1/3 right-1/3 animate-spin-slow">
          <Adinkra symbol="gyeNyame" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-pulse-slow">
          <Adinkra symbol="sankofa" />
        </div>

        {/* Cowrie Shells */}
        <div className="absolute top-1/5 right-1/5 animate-float">
          <Cowrie />
        </div>
        <div className="absolute bottom-1/5 left-1/5 animate-float-delayed">
          <Cowrie />
        </div>

        {/* Nsibidi Symbols */}
        <div className="absolute top-2/3 left-1/5 animate-bounce-slow">
          <Nsibidi symbol="love" />
        </div>
        <div className="absolute top-1/2 right-1/5 animate-ping-slow">
          <Nsibidi symbol="unity" />
        </div>

        {/* Infinity Symbols */}
        <div className="absolute bottom-1/2 left-1/2 animate-spin">
          <InfinitySymbol />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#D4AF37]/20 to-[#F4D03F]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#F4D03F]/10 to-[#D4AF37]/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-shimmer"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4D03F] to-transparent animate-shimmer animation-delay-1000"></div>
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

      {/* Symbol Components */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 9s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

// Symbol Components
const YinYang = ({ size = "md" }) => {
  const sizes = { sm: "w-8 h-8", md: "w-16 h-16", lg: "w-24 h-24" };
  return (
    <div className={`${sizes[size]} opacity-20 hover:opacity-40 transition-opacity duration-500`}>
      <svg viewBox="0 0 100 100" className="text-white">
        <path d="M50,0 C22.385,0 0,22.385 0,50 C0,77.615 22.385,100 50,100 C77.615,100 100,77.615 100,50 C100,22.385 77.615,0 50,0 Z M50,90 C28.804,90 10,71.196 10,50 C10,28.804 28.804,10 50,10 C71.196,10 90,28.804 90,50 C90,71.196 71.196,90 50,90 Z" fill="currentColor"/>
        <circle cx="50" cy="25" r="10" fill="currentColor"/>
        <circle cx="50" cy="75" r="10" fill="currentColor" className="text-black"/>
      </svg>
    </div>
  );
};

const Adinkra = ({ symbol }) => {
  const symbols = {
    gyeNyame: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#D4AF37] opacity-30 hover:opacity-60 transition-opacity duration-500">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M35,35 L65,65 M35,65 L65,35" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    sankofa: (
      <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#F4D03F] opacity-25 hover:opacity-50 transition-opacity duration-500">
        <path d="M50,20 C30,20 20,30 20,50 C20,70 30,80 50,80 C70,80 80,70 80,50 C80,30 70,20 50,20 Z M45,40 L55,40 L55,60 L65,60 L50,75 L35,60 L45,60 Z" 
              stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    )
  };
  return symbols[symbol] || symbols.gyeNyame;
};

const Cowrie = () => (
  <div className="w-6 h-6 opacity-15 hover:opacity-30 transition-opacity duration-500">
    <svg viewBox="0 0 100 100" className="text-white">
      <path d="M20,50 Q50,10 80,50 Q50,90 20,50 Z" 
            stroke="currentColor" strokeWidth="2" fill="currentColor"/>
      <path d="M35,45 Q50,35 65,45" stroke="#D4AF37" strokeWidth="1" fill="none"/>
    </svg>
  </div>
);

const Nsibidi = ({ symbol }) => {
  const symbols = {
    love: (
      <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#D4AF37] opacity-20 hover:opacity-40 transition-opacity duration-500">
        <path d="M50,30 Q70,20 80,40 Q90,60 70,70 Q50,80 30,70 Q10,60 20,40 Q30,20 50,30 Z" 
              stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="40" cy="50" r="3" fill="currentColor"/>
        <circle cx="60" cy="50" r="3" fill="currentColor"/>
        <path d="M40,65 Q50,70 60,65" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    unity: (
      <svg viewBox="0 0 100 100" className="w-9 h-9 text-[#F4D03F] opacity-25 hover:opacity-45 transition-opacity duration-500">
        <circle cx="30" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="70" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M45,50 L55,50" stroke="currentColor" strokeWidth="3"/>
        <path d="M30,35 L70,65 M30,65 L70,35" stroke="currentColor" strokeWidth="1"/>
      </svg>
    )
  };
  return symbols[symbol] || symbols.love;
};

const InfinitySymbol = () => (
  <div className="w-14 h-14 opacity-15 hover:opacity-25 transition-opacity duration-500">
    <svg viewBox="0 0 100 100" className="text-white">
      <path d="M30,50 Q40,30 50,50 Q60,70 70,50 Q80,30 50,50 Q20,70 30,50 Z" 
            stroke="currentColor" strokeWidth="3" fill="none"/>
    </svg>
  </div>
);