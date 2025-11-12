export default function Services() {
  const services = [
    {
      title: "Graphic Design",
      items: ["Brand Kits", "Social Templates", "Logo Development"],
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Motion & Animation", 
      items: ["Promo Videos", "Animations", "Brand Stories"],
      icon: "🎬",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Photography & Video",
      items: ["Product Imaging", "Personal Branding", "Team Shots"],
      icon: "📸",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Advanced Solutions",
      items: ["Virtual Try-Ons", "AI Model Displays", "Creative Direction"],
      icon: "⚙️",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">Our Creative Services</h2>
        <p className="text-xl text-center mb-12 text-[#D4AF37]-600 max-w-2xl mx-auto">
          Premium creative solutions powered by cutting-edge technology
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors">
                {service.title}
              </h3>
              
              {/* Items */}
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors transform group-hover:translate-x-2 duration-300"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#D4AF37]/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}