'use client';
import { useState } from 'react';

export default function Process() {
  const [activeTab, setActiveTab] = useState<'individuals' | 'business'>('individuals');

  const individualsProcess = [
    {
      step: 1,
      title: 'Upload Your Selfie',
      description: 'Simple photo upload from your phone',
      icon: '📱',
      details: 'Take a selfie or choose from your gallery'
    },
    {
      step: 2,
      title: 'Magic Happens',
      description: 'Advanced technology enhances your look',
      icon: '✨',
      details: 'Our technology transforms your photo'
    },
    {
      step: 3,
      title: 'Delivery via WhatsApp',
      description: 'Fast, direct to your phone',
      icon: '⚡',
      details: 'Receive studio-quality photos via WhatsApp'
    }
  ];

  const businessProcess = [
    {
      step: 1,
      title: 'Consult',
      description: 'Understand your goals',
      icon: '📱',
      details: 'Deep dive into your brand needs'
    },
    {
      step: 2,
      title: 'Create',
      description: 'Develop concepts',
      icon: '🎨',
      details: 'Our team creates stunning concepts'
    },
    {
      step: 3,
      title: 'Enhance',
      description: 'Technology meets creativity',
      icon: '🛠️',
      details: 'Advanced digital enhancement'
    },
    {
      step: 4,
      title: 'Deliver',
      description: 'Ready to use',
      icon: '⚡️',
      details: 'Premium results delivered fast'
    }
  ];

  const currentProcess = activeTab === 'individuals' ? individualsProcess : businessProcess;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-playfair">
          How Radikal Works
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Simple, fast, and professional - that's the Radikal way
        </p>

        {/* Toggle */}
<div className="flex justify-center mb-16">
  <div className="bg-gray-100 rounded-2xl p-2 shadow-inner flex flex-col sm:flex-row gap-2 w-full max-w-xs sm:max-w-none">
    <button
      onClick={() => setActiveTab('individuals')}
      className={`px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform w-full ${
        activeTab === 'individuals'
          ? 'bg-[#D4AF37] text-black shadow-lg scale-105'
          : 'text-gray-600 hover:text-gray-900 hover:scale-102'
      }`}
    >
      For Individuals
    </button>
    <button
      onClick={() => setActiveTab('business')}
      className={`px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform w-full ${
        activeTab === 'business'
          ? 'bg-[#D4AF37] text-black shadow-lg scale-105'
          : 'text-gray-600 hover:text-gray-900 hover:scale-102'
      }`}
    >
      For Business
    </button>
  </div>
</div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className={`grid gap-8 ${
            currentProcess.length === 3 
              ? 'grid-cols-1 md:grid-cols-3' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
          }`}>
            {currentProcess.map((step, index) => (
              <div 
                key={step.step}
                className="group text-center relative"
              >
                {/* Connecting Line (except for last step) */}
                {index < currentProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 left-3/4 w-full h-0.5 bg-gray-300 group-hover:bg-[#D4AF37] transition-colors duration-500 z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3 border border-gray-100">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-500">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 font-semibold">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    {step.details}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < currentProcess.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <div className="text-2xl text-gray-400">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B91C1C]/10 rounded-2xl p-8 border border-[#D4AF37]/20">
            <h4 className="text-2xl font-bold mb-4 text-gray-900">
              {activeTab === 'individuals' ? 'No Studio • No Travel • No Awkward Poses' : 'Quality Assurance • Strategic Oversight • Future-Ready Technology'}
            </h4>
            <p className="text-gray-600 text-lg">
              {activeTab === 'individuals' 
                ? 'Professional results without the traditional studio hassle'
                : 'Professional creative solutions with transparent communication and cutting-edge technology'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}