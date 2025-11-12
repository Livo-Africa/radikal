// src/components/individuals/HeroSection.tsx
'use client';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentTransform, setCurrentTransform] = useState(0);
  
  const transformations = [
    {
      before: "https://via.placeholder.com/600x800/333/fff?text=Before%3A%20Phone%20Selfie",
      after: "https://via.placeholder.com/600x800/666/fff?text=After%3A%20Studio%20Quality"
    },
    {
      before: "https://via.placeholder.com/600x800/444/fff?text=Before%3A%20Casual%20Photo", 
      after: "https://via.placeholder.com/600x800/666/fff?text=After%3A%20Professional%20Headshot"
    },
    {
      before: "https://via.placeholder.com/600x800/555/fff?text=Before%3A%20Basic%20Shot",
      after: "https://via.placeholder.com/600x800/666/fff?text=After%3A%20Premium%20Portrait"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTransform((prev) => (prev + 1) % transformations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Split-screen background */}
      <div className="absolute inset-0 flex">
        {/* Before side */}
        <div className="flex-1 relative">
          <img 
            src={transformations[currentTransform].before}
            alt="Before transformation"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-8 left-8 bg-black/80 text-white px-4 py-2 rounded-lg font-bold text-lg">
            BEFORE
          </div>
        </div>
        
        {/* After side */}
        <div className="flex-1 relative">
          <img 
            src={transformations[currentTransform].after}
            alt="After transformation" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-8 right-8 bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-bold text-lg">
            AFTER
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-playfair">
          Virtual Photoshoot Studio
        </h1>
        <p className="text-xl md:text-2xl text-[#D4AF37] mb-8 max-w-2xl mx-auto">
          Professional Results in 1-3 Hours
        </p>
        <a 
          href="/individuals/style-journey"
          className="inline-block bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Start Photoshoot
        </a>
      </div>
    </section>
  );
}