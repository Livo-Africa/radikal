import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';

export default function CreatorsPage() {
  const benefits = [
    {
      icon: "🎨",
      title: "White-label Services",
      description: "Offer our premium services under your brand",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "💰", 
      title: "Revenue Sharing",
      description: "Earn competitive commissions on every project",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🤝",
      title: "Creative Collaboration",
      description: "Partner with our team on large-scale projects",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📈",
      title: "Portfolio Growth",
      description: "Access exclusive tools and resources",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const networkStats = [
    { number: "50+", label: "Active Creators" },
    { number: "200+", label: "Projects Completed" },
    { number: "₵50K+", label: "Revenue Shared" },
    { number: "24/7", label: "Partner Support" }
  ];

  return (
    <>
      <Navigation />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Badge */}
              <div className="inline-block bg-gradient-to-r from-[#D4AF37] to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 animate-glow">
                🎭 Exclusive Creator Network
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 font-playfair text-white">
                Creator <span className="gradient-text">Partnership</span>
              </h1>
              
              <p className="text-2xl md:text-4xl mb-8 text-[#D4AF37] font-light">
                Amplify Your Creative Business
              </p>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join Ghana's premier network of <span className="text-[#D4AF37] font-semibold">creators, influencers, and artists</span>. 
                Access white-label services, collaborate on projects, and <span className="text-[#D4AF37] font-semibold">scale your creative business</span> with our support.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500 transition-all duration-500 transform hover:-translate-y-3">
                    <div className={`text-3xl mb-4 group-hover:rotate-12 transition-transform duration-300 bg-gradient-to-br ${benefit.gradient} bg-clip-text text-transparent`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Network Stats */}
              <div className="bg-black/40 rounded-3xl p-8 mb-12 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Network Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {networkStats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2 group-hover:scale-110 transition-transform">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#D4AF37]/20 to-purple-600/20 rounded-3xl p-8 md:p-12 border border-[#D4AF37]/30 backdrop-blur-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Join the Network?
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Message us to discuss partnership opportunities and benefits
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="https://wa.me/233207472307?text=Hi%20Radikal!%20I'm%20a%20creator%20interested%20in%20joining%20your%20partnership%20network.%20Can%20we%20discuss%20the%20opportunities?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
                  >
                    <span>🤝</span>
                    <span>Join Partnership Network</span>
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
                  Partnership applications reviewed within <span className="text-[#D4AF37]">24 hours</span>
                </p>
              </div>

              {/* Platform Teaser */}
              <div className="mt-16 bg-black/50 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-center space-x-3 text-purple-400 mb-3">
                  <span className="text-xl">🔮</span>
                  <span className="font-bold">Creator Portal Coming Soon</span>
                </div>
                <p className="text-gray-300">
                  Automated project management and real-time revenue dashboard in development!
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