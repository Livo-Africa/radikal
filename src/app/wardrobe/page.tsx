// src/app/wardrobe/page.tsx
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';

export default function WardrobePage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-20">
        <section className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
              Virtual Wardrobe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Browse 200+ Outfit Options
            </p>
            <div className="bg-gray-900/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-6">
                This is where the virtual wardrobe with filtering and search will be implemented.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="aspect-square bg-gray-800 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-400">Outfit {i}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/individuals/style-journey"
                  className="bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-xl transition-colors text-center"
                >
                  Start Style Journey
                </a>
                <a 
                  href="/individuals"
                  className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-xl transition-colors border-2 border-white text-center"
                >
                  Back to Individuals
                </a>
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