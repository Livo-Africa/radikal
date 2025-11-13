// src/components/individuals/PackageShowcase.tsx - MODERN HORIZONTAL SCROLL
export default function PackageShowcase() {
  const packages = [
    {
      name: "Profile Headshots",
      price: "₵30",
      features: ["2 images", "1 hairstyle", "1 outfit", "Studio quality"],
      bestFor: "LinkedIn & professional profiles",
      popular: false,
      category: "Professional"
    },
    {
      name: "Birthday Basic", 
      price: "₵40",
      features: ["4 pictures", "1 outfit", "Birthday theme", "1-3 hours"],
      bestFor: "Birthday celebrations",
      popular: false,
      category: "Special Occasions"
    },
     {
      name: "Birthday Deluxe", 
      price: "₵70",
      features: ["8 pictures", "2 outfit", "Birthday theme", "1-3 hours"],
      bestFor: "Birthday celebrations",
      popular: true,
      category: "Special Occasions"
    },
    {
      name: "Solo Standard",
      price: "₵50",
      features: ["4 pictures", "1 outfit", "1 hairstyle", "Makeup included"],
      bestFor: "Social media & casual use", 
      popular: true,
      category: "Solo"
    },
    {
      name: "Graduation Shots",
      price: "₵70",
      features: ["3 images", "Personalized gown", "1 outfit", "Graduation theme"],
      bestFor: "Graduation ceremonies",
      popular: true,
      category: "Special Occasions"
    },
    {
      name: "Solo Medium",
      price: "₵90",
      features: ["8 pictures", "2 outfits", "2 hairstyles", "Premium editing"],
      bestFor: "Personal branding",
      popular: false,
      category: "Solo"
    },
    {
      name: "Group Standard",
      price: "₵80", 
      features: ["4 pictures", "2 outfits", "2 hairstyles", "Group shots"],
      bestFor: "Couples & small groups",
      popular: false,
      category: "Group"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 font-playfair">
          Choose Your Package
        </h2>
        <p className="text-lg text-center mb-8 text-gray-600 max-w-2xl mx-auto">
          Swipe to explore all our professional photoshoot packages
        </p>
        
        {/* Modern Horizontal Scroll - Mobile & Desktop */}
        <div className="relative">
          {/* Scroll Container */}
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory space-x-6 scrollbar-hide">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 snap-start scroll-ml-4"
              >
                <div className={`bg-white rounded-3xl p-6 shadow-2xl border-2 transition-all duration-500 hover:scale-105 ${
                  pkg.popular 
                    ? 'border-[#D4AF37] bg-gradient-to-br from-[#D4AF37]/5 to-white' 
                    : 'border-gray-100'
                }`}>
                  {/* Category & Popular Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                      {pkg.category}
                    </span>
                    {pkg.popular && (
                      <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Package Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-2">{pkg.price}</div>
                    <p className="text-gray-600 text-sm">{pkg.bestFor}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-black text-white font-bold py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 active:scale-95">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-4">
            <div className="inline-flex items-center text-gray-400 text-sm">
              <span>Swipe to explore more</span>
              <span className="ml-2">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}