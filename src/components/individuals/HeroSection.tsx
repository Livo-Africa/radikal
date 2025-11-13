// src/components/individuals/HeroSection.tsx - FIXED
export default function HeroSection() {
  return (
    <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B91C1C]/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#eef10e]/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block bg-[#B91C1C] text-white px-6 py-3 rounded-full text-sm font-bold mb-8 animate-glow">
            Professional Photos in 1-3 Hours
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white font-playfair">
            Virtual <span className="text-[#D4AF37]">Photoshoot</span> Studio
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Studio-quality photos delivered directly to your WhatsApp
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get professional headshots, graduation photos, and special occasion shots without leaving home. 
            Our advanced technology enhances your photos while our creative team ensures perfection.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "📸", text: "Virtual Studio" },
              { icon: "⚡", text: "3-Hour Delivery" },
              { icon: "🎨", text: "Professional Editing" },
              { icon: "💬", text: "WhatsApp Delivery" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <div className="text-white text-sm font-medium">{feature.text}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/individuals/style-journey"
              className="group bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Start Your Photoshoot</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}