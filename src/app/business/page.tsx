import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';

export default function BusinessPage() {
  const solutions = [
    {
      icon: "🎨",
      title: "Brand Identity",
      description: "Complete visual identity that tells your story",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: "📸", 
      title: "Product Photography",
      description: "Stunning images that make products irresistible",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      title: "Social Media Content",
      description: "30 days of scroll-stopping content ready to post",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "📈",
      title: "Marketing Campaigns",
      description: "Complete visual campaigns that drive results",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const results = [
    { metric: "3-5x", description: "Higher engagement on social media" },
    { metric: "48h", description: "Average project turnaround" },
    { metric: "95%", description: "Client satisfaction rate" },
    { metric: "24/7", description: "Business support available" }
  ];

  return (
    <>
      <Navigation />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-black">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Badge */}
              <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-white px-6 py-3 rounded-full text-sm font-bold mb-8 animate-glow">
                🏢 Currently Serving Businesses via WhatsApp
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 font-playfair text-white">
                Business <span className="gradient-text">Excellence</span>
              </h1>
              
              <p className="text-2xl md:text-4xl mb-8 text-[#D4AF37] font-light">
                Premium Visual Solutions for Growth-Focused Brands
              </p>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your <span className="text-[#D4AF37] font-semibold">brand presence</span> with professional photography, 
                compelling design, and strategic visual content that <span className="text-[##D4AF37] font-semibold">drives real business results</span>.
              </p>

              {/* Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {solutions.map((solution, index) => (
                  <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-[#D4AF37] transition-all duration-500 transform hover:-translate-y-3">
                    <div className={`text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${solution.gradient} bg-clip-text text-transparent`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>

              {/* Results Metrics */}
              <div className="bg-black/40 rounded-3xl p-8 mb-12 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Proven Business Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {results.map((result, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform">
                        {result.metric}
                      </div>
                      <div className="text-gray-300 text-sm">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/20 rounded-3xl p-8 md:p-12 border border-[#D4AF37]/30 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Elevate Your Brand?
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Message us for a personalized business consultation and custom quote
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="https://wa.me/233207472307?text=Hi%20Radikal!%20I%20need%20business%20solutions%20for%20my%20brand.%20Can%20we%20discuss%20my%20needs?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
                  >
                    <span>💬</span>
                    <span>Business Consultation</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  
                  <a 
                    href="/"
                    className="bg-transparent hover:bg-white/10 text-white font-bold py-5 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white/30 hover:border-white"
                  >
                    ← Back to Home
                  </a>
                </div>

                <p className="text-sm text-gray-400 mt-6">
                  Business consultation: <span className="text-[#D4AF37]">Mon-Sat, 8AM-8PM</span>
                </p>
              </div>

              {/* Platform Teaser */}
              <div className="mt-16 bg-black/50 rounded-2xl p-6 border border-[#D4AF37]/20 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-3 text-[#D4AF37] mb-3">
                  <span className="text-xl">🔮</span>
                  <span className="font-bold">Automated Platform Coming Soon</span>
                </div>
                <p className="text-gray-300">
                  Advanced Tech-powered brand analysis and instant quoting system currently in development!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}