export default function AudienceSplit() {
  const audiences = [
    {
      title: "FOR INDIVIDUALS",
      description: "Virtual Photoshoot Studio",
      features: ["Studio Photoshoot", "Birthday Shoot", "Graduation Photos", "Professional Headshot"],
      buttonText: "Start Photoshoot",
      link: "/individuals",
      bgGradient: "from-[#D4AF37]/5 to-[#D4AF37]/10",
      borderColor: "border-[#D4AF37]/30",
      hoverGlow: "hover:shadow-[#D4AF37]/20"
    },
    {
      title: "FOR BUSINESS", 
      description: "Creative Technology Solutions",
      features: ["Product Imaging", "Brand Identity", "Social Media Management", "Marketing Visuals"],
      buttonText: "View Solutions",
      link: "/business",
      bgGradient: "from-[#B91C1C]/5 to-[#B91C1C]/10",
      borderColor: "border-[#B91C1C]/30",
      hoverGlow: "hover:shadow-[#B91C1C]/20"
    },
    {
      title: "FOR CREATORS",
      description: "Creative Partnership Network", 
      features: ["White-label Services", "Portfolio Enhancement", "Creative Collaboration", "Revenue Growth"],
      buttonText: "Join Network",
      link: "/creators",
      bgGradient: "from-black/5 to-black/10",
      borderColor: "border-gray-700",
      hoverGlow: "hover:shadow-white/10"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${audience.bgGradient} rounded-2xl p-8 shadow-lg ${audience.hoverGlow} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border ${audience.borderColor} overflow-hidden`}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              </div>
              
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">
                  {audience.title}
                </h3>
                
                {/* Description */}
                <p className="text-lg mb-6 font-semibold text-[#D4AF37]">
                  {audience.description}
                </p>
                
                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <a 
                  href={audience.link}
                  className="inline-block w-full bg-black text-white text-center hover:bg-gray-800 px-6 py-4 rounded-xl font-bold transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg border border-transparent hover:border-white/10"
                >
                  {audience.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}