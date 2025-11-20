// src/components/homepage/AudienceSplit.tsx - MOBILE FIRST
import { Camera, Building2, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AudienceSplit() {
  const audiences = [
    {
      title: "FOR INDIVIDUALS",
      description: "Virtual Photoshoot Studio",
      features: ["Professional Headshots", "Social Media Content", "Graduation Photos", "Personal Branding"],
      buttonText: "Start Photoshoot",
      link: "/individuals",
      bgGradient: "from-[#D4AF37]/5 to-[#D4AF37]/10",
      borderColor: "border-[#D4AF37]/30",
      icon: Camera,
      iconColor: "text-[#D4AF37]",
      buttonColor: "bg-[#D4AF37] hover:bg-[#b8941f]"
    },
    {
      title: "FOR BUSINESS", 
      description: "Creative Technology Solutions",
      features: ["Product Imaging", "Brand Identity", "Social Media Management", "Marketing Visuals"],
      buttonText: "View Solutions",
      link: "/business",
      bgGradient: "from-[#B91C1C]/5 to-[#B91C1C]/10",
      borderColor: "border-[#B91C1C]/30",
      icon: Building2,
      iconColor: "text-[#B91C1C]",
      buttonColor: "bg-[#B91C1C] hover:bg-[#991b1b]"
    },
    {
      title: "FOR CREATORS",
      description: "Creative Partnership Network", 
      features: ["White-label Services", "Portfolio Enhancement", "Creative Collaboration", "Revenue Growth"],
      buttonText: "Join Network",
      link: "/creators",
      bgGradient: "from-gray-100 to-gray-50",
      borderColor: "border-gray-300",
      icon: Users,
      iconColor: "text-gray-900",
      buttonColor: "bg-gray-900 hover:bg-black"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 font-playfair">
            Solutions for <span className="text-[#D4AF37]">Everyone</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Tailored photography solutions for individuals, businesses, and creators
          </p>
        </div>

        {/* Mobile: Stacked, Desktop: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${audience.bgGradient} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${audience.borderColor} overflow-hidden`}
            >
              {/* Enhanced Icon */}
              <div className="mb-4 md:mb-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center ${audience.iconColor} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <audience.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>
              
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900 group-hover:text-black transition-colors">
                  {audience.title}
                </h3>
                
                {/* Description */}
                <p className="text-base md:text-lg font-semibold text-[#D4AF37] mb-4 md:mb-6">
                  {audience.description}
                </p>
                
                {/* Enhanced Features - Better mobile spacing */}
                <ul className="mb-6 md:mb-8 space-y-2 md:space-y-3">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#D4AF37] mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Enhanced CTA Button - Full width on mobile */}
                <a 
                  href={audience.link}
                  className={`w-full ${audience.buttonColor} text-white text-center font-semibold py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg border border-transparent flex items-center justify-center space-x-2`}
                >
                  <span className="text-sm md:text-base">{audience.buttonText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator - Mobile Optimized */}
        <div className="text-center mt-8 md:mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-500 text-sm md:text-base">
            <span>Trusted by businesses and individuals worldwide</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-[#D4AF37] text-sm">⭐</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}