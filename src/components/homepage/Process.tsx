// src/components/homepage/Process.tsx - ENHANCED
'use client';
import { useState } from 'react';
import {
  Upload,
  Sparkles,
  MessageCircle,
  Target,
  Palette,
  Cog,
  Rocket,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Process() {
  const [activeTab, setActiveTab] = useState<'individuals' | 'business'>('individuals');

  const individualsProcess = [
    {
      step: 1,
      title: 'Upload Your Selfie',
      description: 'Simple photo upload from your phone',
      icon: Upload,
      details: 'Take a selfie or choose from your gallery',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: 'Magic Happens',
      description: 'Advanced technology enhances your look',
      icon: Sparkles,
      details: 'Our AI transforms your photo professionally',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      title: 'Delivery via WhatsApp',
      description: 'Fast, direct to your phone',
      icon: MessageCircle,
      details: 'Receive studio-quality photos instantly',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const businessProcess = [
    {
      step: 1,
      title: 'Consult',
      description: 'Understand your goals',
      icon: Target,
      details: 'Deep dive into your brand needs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: 2,
      title: 'Create',
      description: 'Develop concepts',
      icon: Palette,
      details: 'Our team creates stunning concepts',
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: 3,
      title: 'Enhance',
      description: 'Technology meets creativity',
      icon: Cog,
      details: 'Advanced digital enhancement',
      color: 'from-orange-500 to-orange-600'
    },
    {
      step: 4,
      title: 'Deliver',
      description: 'Ready to use',
      icon: Rocket,
      details: 'Premium results delivered fast',
      color: 'from-green-500 to-green-600'
    }
  ];

  const currentProcess = activeTab === 'individuals' ? individualsProcess : businessProcess;

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 font-playfair">
            How <span className="text-[#D4AF37]">Radikal</span> Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and professional - that's the Radikal way
          </p>
        </div>

        {/* Enhanced Toggle - Mobile Optimized */}
        <div className="flex justify-center mb-8 md:mb-16">
          <div className="bg-gray-100 rounded-2xl p-1 md:p-2 shadow-inner w-full max-w-md">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setActiveTab('individuals')}
                className={`flex items-center justify-center space-x-2 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg transition-all duration-300 transform ${activeTab === 'individuals'
                    ? 'bg-[#D4AF37] text-black shadow-lg scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:scale-102'
                  }`}
              >
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">For Individuals</span>
                <span className="sm:hidden">Individuals</span>
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`flex items-center justify-center space-x-2 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg transition-all duration-300 transform ${activeTab === 'business'
                    ? 'bg-[#D4AF37] text-black shadow-lg scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:scale-102'
                  }`}
              >
                <Building2 className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">For Business</span>
                <span className="sm:hidden">Business</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className={`grid gap-4 md:gap-8 ${currentProcess.length === 3
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
                  <div className="hidden md:block absolute top-8 left-3/4 w-full h-0.5 bg-gray-300 group-hover:bg-[#D4AF37] transition-colors duration-500 z-0"></div>
                )}

                {/* Step Card */}
                <div className="relative z-10 bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                  {/* Step Number */}
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center text-black font-bold text-lg md:text-xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    {step.step}
                  </div>

                  {/* Enhanced Icon */}
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <step.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-black transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-3 font-semibold text-sm md:text-base">
                    {step.description}
                  </p>

                  {/* Details */}
                  <p className="text-xs md:text-sm text-gray-500 group-hover:text-gray-700 transition-colors leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Mobile Arrow */}
                {index < currentProcess.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Process Summary */}
        <div className="text-center mt-8 md:mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B91C1C]/10 rounded-2xl p-6 md:p-8 border border-[#D4AF37]/20">
            <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
              <span>
                {activeTab === 'individuals'
                  ? 'No Studio • No Travel • No Awkward Poses'
                  : 'Quality Assurance • Strategic Oversight • Future-Ready Technology'
                }
              </span>
            </h4>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {activeTab === 'individuals'
                ? 'Professional results without the traditional studio hassle. Get perfect photos from the comfort of your home.'
                : 'Professional creative solutions with transparent communication and cutting-edge technology tailored to your business needs.'
              }
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-8 md:mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={activeTab === 'individuals' ? '/individuals' : '/business'}
              className="group bg-[#D4AF37] hover:bg-[#b8941f] text-black font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 justify-center"
            >
              <span>
                Start Your {activeTab === 'individuals' ? 'Photoshoot' : 'Project'}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mt-8 md:mt-12 text-center">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">1-3h</div>
            <div className="text-xs md:text-sm text-gray-600">Avg. Delivery</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">4.9/5</div>
            <div className="text-xs md:text-sm text-gray-600">Satisfaction</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">700+</div>
            <div className="text-xs md:text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">24/7</div>
            <div className="text-xs md:text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}