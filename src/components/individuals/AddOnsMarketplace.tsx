// src/components/individuals/AddOnsMarketplace.tsx
export default function AddOnsMarketplace() {
  const addOns = [
    {
      name: "Extra Image",
      price: "₵10",
      description: "Add one additional edited photo",
      icon: "🖼️",
      popular: true
    },
    {
      name: "Makeup Only",
      price: "₵20", 
      description: "Professional makeup enhancement",
      icon: "💄",
      popular: false
    },
    {
      name: "Retouch Only",
      price: "₵15",
      description: "Basic photo retouching and cleanup",
      icon: "✨",
      popular: true
    },
    {
      name: "Background Change",
      price: "₵25",
      description: "Change to professional studio background",
      icon: "🏙️",
      popular: false
    },
    {
      name: "Body Restructuring",
      price: "₵50",
      description: "Professional body shaping and enhancement",
      icon: "💪",
      popular: true
    },
    {
      name: "Add Hair",
      price: "₵30",
      description: "Virtual hairstyle change or enhancement",
      icon: "💇",
      popular: false
    },
    {
      name: "Additional Outfit",
      price: "₵40",
      description: "Extra wardrobe change in same session",
      icon: "👔",
      popular: true
    },
    {
      name: "Rush Delivery",
      price: "₵30",
      description: "Get your photos in 1 hour or less",
      icon: "⚡",
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">
          Enhance Your Photos
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Add these professional enhancements to any package
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {addOns.map((addOn, index) => (
            <div 
              key={addOn.name}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                addOn.popular ? 'border-[#D4AF37]' : 'border-gray-100'
              } relative overflow-hidden`}
            >
              {/* Popular Badge */}
              {addOn.popular && (
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {addOn.icon}
              </div>

              {/* Name & Price */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-black">
                  {addOn.name}
                </h3>
                <div className="text-2xl font-bold text-[#D4AF37]">
                  {addOn.price}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-800">
                {addOn.description}
              </p>

              {/* Add to Cart Button */}
              <button className="w-full bg-gray-100 hover:bg-[#D4AF37] text-gray-700 hover:text-black py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg border border-gray-200 hover:border-[#D4AF37]">
                Add to Package
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-500 text-sm">
            * Add-ons can be selected during the booking process. All enhancements are applied by our professional editing team.
          </p>
        </div>
      </div>
    </section>
  );
}