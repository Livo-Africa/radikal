// src/app/individuals/style-journey/page.tsx
import Navigation from '@/components/shared/Navigation';
import Footer from '@/components/shared/Footer';
import WhatsAppFloat from '@/components/shared/WhatsAppFloat';

export default function StyleJourneyPage() {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-20">
        <section className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
              Style Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              7-Step Photoshoot Booking Experience
            </p>
            <div className="bg-gray-900/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-6">
                This is where the 7-step booking flow will be implemented.
              </p>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-bold">1</div>
                  <span>Shoot Type Selection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <span>Package Selection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <span>Photo Upload</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <span>Outfit Selection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <span>Style Preferences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">6</div>
                  <span>Review & Confirm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">7</div>
                  <span>Payment</span>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="/individuals"
                  className="inline-block bg-[#D4AF37] hover:bg-[#b8941f] text-black font-bold py-3 px-8 rounded-xl transition-colors"
                >
                  Back to Individuals Page
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