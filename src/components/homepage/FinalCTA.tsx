'use client';
import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
};

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#B91C1C] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
          Ready to Experience the Radikal Difference?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join hundreds of satisfied clients transforming their visuals
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-black text-white hover:bg-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-transparent">
            Start Your Photoshoot
          </button>
          <button className="bg-white text-black hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2 border-transparent">
            Get Business Solutions
          </button>
        </div>

        {/* Animated Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-white bg-black/20 rounded-lg py-4">
              <AnimatedCounter end={500} duration={2500} suffix="+" />
            </div>
            <div className="text-sm md:text-base font-semibold">Happy Clients</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-white bg-black/20 rounded-lg py-4">
              <AnimatedCounter end={4.9} duration={2500} suffix="/5" />
            </div>
            <div className="text-sm md:text-base font-semibold">Satisfaction Rate</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-white bg-black/20 rounded-lg py-4">
              <AnimatedCounter end={3} duration={2500} suffix="h" />
            </div>
            <div className="text-sm md:text-base font-semibold">Avg Delivery</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-white bg-black/20 rounded-lg py-4">
              24/7
            </div>
            <div className="text-sm md:text-base font-semibold">WhatsApp Support</div>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-lg mb-4">Trusted by businesses and individuals worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-80">
            <span className="text-sm">⭐ Premium Quality</span>
            <span className="text-sm">⚡ Fast Delivery</span>
            <span className="text-sm">💬 24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}