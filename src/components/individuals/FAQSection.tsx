// src/components/individuals/FAQSection.tsx
'use client';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the virtual photoshoot work?",
      answer: "Simply choose your package, upload your selfies or photos, select your preferred styles and outfits from our virtual wardrobe, and we'll transform them into studio-quality professional photos delivered directly to your WhatsApp in 1-3 hours."
    },
    {
      question: "What kind of photos should I upload?",
      answer: "Upload clear, well-lit selfies or photos taken against a plain background. Make sure your face is clearly visible and you're not wearing hats or sunglasses that obscure your features. The better the original photo, the better the final result!"
    },
    {
      question: "How long does delivery take?",
      answer: "Most orders are delivered within 1-3 hours. We offer rush delivery options (1 hour or less) for an additional fee if you need your photos urgently."
    },
    {
      question: "Can I use these photos for professional purposes?",
      answer: "Absolutely! Our photos are perfect for LinkedIn profiles, professional portfolios, business websites, and corporate branding. Many clients use our headshots for their professional online presence."
    },
    {
      question: "What if I'm not happy with the results?",
      answer: "We offer one round of revisions for each package. If you're not completely satisfied, let us know what adjustments you'd like and we'll make them at no extra cost."
    },
    {
      question: "Do you store my photos after delivery?",
      answer: "No, we delete all client photos from our systems once they've been delivered and approved. Your privacy and security are our top priorities."
    },
    {
      question: "Can I get photos for my whole team or group?",
      answer: "Yes! We offer group packages for teams, families, and couples. Our group packages include multiple outfit changes and hairstyles to ensure everyone looks their best."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept mobile money, bank transfers, and credit/debit cards through secure payment processors. Full payment is required before we begin editing your photos."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about our virtual photoshoots
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`border-b border-gray-100 last:border-b-0 ${
                  openIndex === index ? 'bg-gray-50' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className={`text-[#D4AF37] transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                
                <div className={`px-6 pb-6 transition-all duration-300 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B91C1C]/10 rounded-2xl p-8 border border-[#D4AF37]/20">
              <h4 className="text-2xl font-bold mb-4 text-gray-900">
                Still have questions?
              </h4>
              <p className="text-gray-600 mb-6">
                Chat with us on WhatsApp for instant answers and support.
              </p>
              <a 
                href="https://wa.me/233207472307?text=Hi%20Radikal!%20I%20have%20a%20question%20about%20your%20virtual%20photoshoots"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">💬</span>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}