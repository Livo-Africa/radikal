// src/components/individuals/PackageShowcase.tsx - UPDATED
export default function PackageShowcase() {
  const packageCategories = [
    {
      title: "Special Occasions",
      packages: [
        {
          name: "Birthday Basic",
          price: "₵40",
          features: ["4 pictures", "1 outfit", "1 hairstyle", "Birthday theme"],
          bestFor: "Birthday celebrations"
        },
        {
          name: "Graduation Shots", 
          price: "₵70",
          features: ["3 images", "Personalized gown", "1 outfit"],
          bestFor: "Graduation ceremonies"
        }
      ]
    },
    {
      title: "Solo Packages",
      packages: [
        {
          name: "Solo Standard",
          price: "₵50",
          features: ["4 pictures", "1 outfit", "1 hairstyle"],
          bestFor: "Social media & casual use"
        },
        {
          name: "Solo Medium",
          price: "₵90", 
          features: ["8 pictures", "2 outfits", "2 hairstyles"],
          bestFor: "Personal branding"
        }
      ]
    },
    {
      title: "Group & Couple",
      packages: [
        {
          name: "Group Standard",
          price: "₵80",
          features: ["4 pictures", "2 outfits", "2 hairstyles"],
          bestFor: "Couples & small groups"
        }
      ]
    },
    {
      title: "Professional Shots",
      packages: [
        {
          name: "Profile Headshots",
          price: "₵30",
          features: ["2 images", "1 hairstyle", "1 outfit"],
          bestFor: "LinkedIn & profiles"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 font-playfair">
          Choose Your Package
        </h2>
        
        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto pb-6 -mx-4 px-4 snap-x snap-mandatory space-x-4">
            {packageCategories.flatMap(category => 
              category.packages.map((pkg, index) => (
                <div 
                  key={`${category.title}-${index}`}
                  className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 snap-center"
                >
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{pkg.name}</h4>
                    <div className="text-2xl font-bold text-[#D4AF37] my-2">{pkg.price}</div>
                    <div className="text-sm text-gray-500">{pkg.bestFor}</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-black text-white py-3 rounded-lg font-semibold text-sm">
                    Choose Package
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:block space-y-12">
          {packageCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {category.packages.map((pkg, pkgIndex) => (
                  <div 
                    key={pkg.name}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="text-center mb-4">
                      <h4 className="text-xl font-bold text-gray-900">{pkg.name}</h4>
                      <div className="text-3xl font-bold text-[#D4AF37] my-2">{pkg.price}</div>
                      <div className="text-sm text-gray-500 font-semibold">{pkg.bestFor}</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Choose Package
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}