// src/components/individuals/PackageShowcase.tsx
export default function PackageShowcase() {
  const packageCategories = [
    {
      title: "Special Occasions",
      packages: [
        {
          name: "Birthday Basic",
          price: "₵40",
          features: ["4 pictures", "1 outfit", "1 hairstyle", "Birthday theme", "1-3 hours delivery"],
          bestFor: "Birthday celebrations"
        },
        {
          name: "Graduation Shots", 
          price: "₵70",
          features: ["3 images", "Personalized gown details", "1 outfit", "1-3 hours delivery"],
          bestFor: "Graduation ceremonies"
        },
        {
          name: "Jersey Shots",
          price: "₵30",
          features: ["2 images", "Show your team spirit", "1 outfit", "1-3 hours delivery"],
          bestFor: "Sports fans & teams"
        }
      ]
    },
    {
      title: "Solo Packages",
      packages: [
        {
          name: "Solo Standard",
          price: "₵50",
          features: ["4 pictures", "1 outfit", "1 hairstyle", "Makeup included", "1-3 hours delivery"],
          bestFor: "Social media & casual use"
        },
        {
          name: "Solo Medium",
          price: "₵90", 
          features: ["8 pictures", "2 outfits", "2 hairstyles", "Makeup included", "1-3 hours delivery"],
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
          features: ["4 pictures", "2 outfits", "2 hairstyles", "Makeup included", "1-3 hours delivery"],
          bestFor: "Couples & small groups"
        },
        {
          name: "Group Deluxe",
          price: "₵130",
          features: ["6 pictures", "3 outfits", "4 hairstyles", "Makeup included", "1-3 hours delivery"],
          bestFor: "Family & friend groups"
        }
      ]
    },
    {
      title: "Professional Shots",
      packages: [
        {
          name: "Profile Headshots",
          price: "₵30",
          features: ["2 images", "1 hairstyle", "1 outfit", "Studio quality", "1-3 hours delivery"],
          bestFor: "LinkedIn & professional profiles"
        },
        {
          name: "Occupation Shots",
          price: "₵50",
          features: ["3 images", "Professional setting", "1 outfit", "1 hairstyle", "1-3 hours delivery"],
          bestFor: "Career portfolios"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">
          Choose Your Perfect Package
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Professional virtual photoshoots tailored for every occasion
        </p>

        {/* Package Categories */}
        <div className="space-y-16">
          {packageCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold mb-8 text-gray-900 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {category.packages.map((pkg, pkgIndex) => (
                  <div 
                    key={pkg.name}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                  >
                    {/* Package Header */}
                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-black">
                        {pkg.name}
                      </h4>
                      <div className="text-3xl font-bold text-[#D4AF37] mb-2">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-gray-500 font-semibold">
                        {pkg.bestFor}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors"
                        >
                          <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a 
                      href={`/individuals/style-journey?package=${encodeURIComponent(pkg.name)}`}
                      className="block w-full bg-black text-white text-center hover:bg-gray-800 py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
                    >
                      Choose Package
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center mt-12">
          <a 
            href="/packages"
            className="inline-block bg-transparent hover:bg-gray-100 text-gray-700 hover:text-black border-2 border-gray-300 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Packages →
          </a>
        </div>
      </div>
    </section>
  );
}