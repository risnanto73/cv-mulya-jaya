import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Globe, Star, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#120B08] text-stone-400 text-xs border-t border-[#2C1E16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1C130E] to-[#3A261B] text-[#D4A359] flex items-center justify-center font-serif text-lg font-bold border border-[#D4A359]/30">
                MJ
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-white tracking-tight">
                  CV MULIA JAYA FURNITURE
                </span>
                <span className="block text-[10px] tracking-widest font-semibold uppercase text-[#D4A359]">
                  Export Specialist • Cirebon, Indonesia
                </span>
              </div>
            </a>

            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Premier manufacturer and exporter of luxury natural & all-weather synthetic rattan furniture. 
              Certified SVLK V-Legal, handcrafted in Tegalwangi Cirebon for international distributors, hotels, and resorts.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 bg-[#2C1E16] px-3 py-1.5 rounded-lg border border-amber-900/30">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white text-xs">{COMPANY_INFO.googleRating} ★</span>
                <span className="text-stone-400 text-[10px]">({COMPANY_INFO.googleReviewCount} Google Reviews)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Export Products
            </h4>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-[#D4A359] transition-colors">Natural Rattan Chairs</a></li>
              <li><a href="#products" className="hover:text-[#D4A359] transition-colors">Outdoor Synthetic Sets</a></li>
              <li><a href="#products" className="hover:text-[#D4A359] transition-colors">Teak & Rattan Dining</a></li>
              <li><a href="#products" className="hover:text-[#D4A359] transition-colors">Hanging Egg Chairs</a></li>
              <li><a href="#products" className="hover:text-[#D4A359] transition-colors">Resort Pool Loungers</a></li>
            </ul>
          </div>

          {/* B2B Services & Standards */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              B2B & Legal
            </h4>
            <ul className="space-y-2">
              <li><a href="#oem" className="hover:text-[#D4A359] transition-colors">Custom OEM Blueprinting</a></li>
              <li><a href="#calculator" className="hover:text-[#D4A359] transition-colors">Container Load Calculator</a></li>
              <li><a href="#craftsmanship" className="hover:text-[#D4A359] transition-colors">Kiln Drying & Quality Control</a></li>
              <li><a href="#location" className="hover:text-[#D4A359] transition-colors">SVLK V-Legal Compliance</a></li>
              <li><a href="#faq" className="hover:text-[#D4A359] transition-colors">Export FAQ & Shipping</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Factory Location
            </h4>
            <div className="space-y-2 text-stone-400">
              <p className="leading-normal">
                Jl. Nyi Mas Wanawati No.35, Tegalwangi, Kec. Weru, Kabupaten Cirebon, Jawa Barat 45154
              </p>
              <p className="text-stone-400 font-mono">
                Plus Code: 7FVV+96 Tegalwangi
              </p>
              <p className="text-white font-bold pt-1">
                WhatsApp: +62 812-2200-9889
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} CV MULIA JAYA FURNITURE. All Rights Reserved. SVLK / V-Legal Verified Exporter Cirebon.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-xs text-[#D4A359] hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
