// src/components/individuals/ProcessSection.tsx - MODERN HORIZONTAL SCROLL
export default function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      title: "Choose Package",
      description: "Select your perfect photoshoot package in seconds",
      icon: "📦",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Upload Photos", 
      description: "Share selfies or existing photos from your gallery",
      icon: "📱",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 3,
      title: "Customize Style",
      description: "Select outfits, backgrounds, and preferences",
      icon: "🎨", 
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 4,
      title: "We Enhance",
      description: "Professional editing with advanced technology",
      icon: "✨",
      color: "from-orange-500 to-red-500"
    },
    {
      step: 5,
      title: "Instant Delivery", 
      description: "Receive studio-quality photos via WhatsApp",
      icon: "⚡",
      color: "from-[#D4AF37] to-[#F4D03F]"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 font-playfair">
          How It Works
        </h2>
        <p className="text-lg text-center mb-8 text-gray-600 max-w-2xl mx-auto">
          Swipe through our simple 5-step process
        </p>

        {/* Modern Horizontal Scroll - Mobile & Desktop */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory space-x-6 scrollbar-hide">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className="flex-shrink-0 w-72 snap-start scroll-ml-4"
              >
                <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 text-center h-full flex flex-col">
                  {/* Step Number with Gradient */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg`}>
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{step.description}</p>
                  
                  {/* Progress Dots */}
                  <div className="flex justify-center space-x-1 mt-4">
                    {processSteps.map((_, dotIndex) => (
                      <div 
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full ${
                          dotIndex === index ? 'bg-[#D4AF37]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center text-gray-400 text-sm">
              <span>Swipe to see all steps</span>
              <span className="ml-2">→</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="/individuals/style-journey"
            className="inline-block bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Start Your Photoshoot
          </a>
        </div>
      </div>
    </section>
  );
}