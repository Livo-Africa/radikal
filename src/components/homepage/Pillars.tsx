// src/components/homepage/Pillars.tsx - ENHANCED
import { Crown, Cpu, TrendingUp, ArrowRight } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      title: 'CLASS',
      description: 'Premium visual language rooted in elegance and professional finesse',
      quote: 'We believe in quality that speaks for itself',
      icon: Crown,
      color: 'from-[#D4AF37] to-[#F4D03F]',
      cta: 'See Our Work'
    },
    {
      title: 'TECHNOLOGY', 
      description: 'Advanced digital tools redefining creative possibilities',
      quote: 'We leverage cutting-edge technology to enhance, not replace, human creativity',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      
      cta: 'Explore Technology'
    },
    {
      title: 'FUTURE',
      description: 'Forward-thinking creativity anticipating market trends and evolving needs',
      quote: 'We\'re not just keeping up - we\'re paving the way',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      cta: 'Learn More'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 font-playfair">
            Our Three <span className="text-[#D4AF37]">Pillars</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            The foundation of everything we do at Radikal
          </p>
        </div>
        
        {/* Enhanced Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-[#D4AF37]/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Enhanced Icon */}
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <pillar.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#D4AF37] group-hover:text-white transition-colors">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                {pillar.description}
              </p>
              
              {/* Quote */}
              <blockquote className="text-sm md:text-base italic text-[#D4AF37]/80 mb-6 md:mb-8 leading-relaxed">
                "{pillar.quote}"
              </blockquote>

              {/* CTA Link */}
            <a>
                <span>{pillar.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12">
          <a 
            href="/about"
            className="inline-flex items-center space-x-3 bg-[#D4AF37] hover:bg-[#b8941f] text-black font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Learn More About Our Philosophy</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}