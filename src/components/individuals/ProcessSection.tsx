// src/components/individuals/ProcessSection.tsx
export default function ProcessSection() {
  const processSteps = [
    {
      step: 1,
      title: "Choose Package",
      description: "Select from our curated packages",
      icon: "📦",
      details: "Pick the perfect package for your needs",
      action: "Browse Packages",
      link: "#packages"
    },
    {
      step: 2,
      title: "Upload Photos",
      description: "Share your selfies or photos",
      icon: "📱",
      details: "Simple upload from your phone or device",
      action: "See Examples",
      link: "#transformations"
    },
    {
      step: 3,
      title: "Customize",
      description: "Select outfits & styles",
      icon: "🎨",
      details: "Choose from our virtual wardrobe",
      action: "View Wardrobe",
      link: "/wardrobe"
    },
    {
      step: 4,
      title: "We Work Our Magic",
      description: "Advanced enhancement technology",
      icon: "✨",
      details: "Professional editing and enhancement",
      action: "Learn More",
      link: "/about"
    },
    {
      step: 5,
      title: "Delivery",
      description: "Receive via WhatsApp in 1-3 hours",
      icon: "⚡",
      details: "Instant delivery to your phone",
      action: "Start Now",
      link: "/individuals/style-journey"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">
          How It Works
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Simple 5-step process to professional photos
        </p>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className="group text-center relative"
              >
                {/* Connecting Line (except for last step) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 left-3/4 w-full h-0.5 bg-gray-300 group-hover:bg-[#D4AF37] transition-colors duration-500 z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center text-black font-bold text-lg mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-3xl mb-4 transform group-hover:scale-125 transition-transform duration-500">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-black">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-3 font-semibold text-sm">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <p className="text-xs text-gray-500 mb-4 group-hover:text-gray-700">
                    {step.details}
                  </p>
                  
                  {/* Action Link */}
                  <a 
                    href={step.link}
                    className="text-xs text-[#D4AF37] font-semibold hover:text-[#b8941f] transition-colors"
                  >
                    {step.action} →
                  </a>
                </div>

                {/* Arrow for mobile */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="text-xl text-gray-400">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B91C1C]/10 rounded-2xl p-8 border border-[#D4AF37]/20">
            <h4 className="text-2xl font-bold mb-4 text-gray-900">
              No Studio • No Travel • No Awkward Poses
            </h4>
            <p className="text-gray-600 text-lg">
              Professional results without the traditional studio hassle. 
              Everything happens online with delivery straight to your WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}