// src/components/shared/Footer.tsx - REVAMPED
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-[#D4AF37]/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              RADIKAL<span className="text-[#D4AF37]">TECH</span>
            </h3>
            <p className="text-[#D4AF37] text-sm mb-4">Class • Technology • Future</p>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Transforming visions into visual reality with premium creative technology.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Based in Ghana • Serving Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Home
              </a></li>
              <li><a href="/individuals" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Individuals
              </a></li>
              <li><a href="/business" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Business
              </a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Services
              </a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/photography" className="text-gray-400 hover:text-white transition-colors">Photography</a></li>
              <li><a href="/services/design" className="text-gray-400 hover:text-white transition-colors">Graphic Design</a></li>
              <li><a href="/services/video" className="text-gray-400 hover:text-white transition-colors">Video & Motion</a></li>
              <li><a href="/services/social" className="text-gray-400 hover:text-white transition-colors">Social Media</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D4AF37]">Get In Touch</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/233207472307"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp Chat</div>
                  <div className="text-sm text-gray-500">Instant response</div>
                </div>
              </a>
              <a 
                href="mailto:radikalcreatech@gmail.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-sm text-gray-500">radikalcreatech@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Radikal Creative Technologies. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}