import React from 'react';
import { 
  ShieldCheck, Star, Award, Container, ArrowRight, 
  CheckCircle2, Play, Download, Sparkles, MapPin 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Hero({ onOpenCatalog, onOpenCalculator }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#1C130E] text-white">
      {/* Background Image with Ambient Luxury Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop" 
          alt="Cirebon Premium Rattan Furniture Export"
          className="w-full h-full object-cover object-center opacity-30 filter contrast-125 scale-105 transform animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C130E] via-[#1C130E]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C130E] via-transparent to-[#1C130E]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2C1E16] border border-[#D4A359]/40 text-[#D4A359] text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Factory Exporter • Tegalwangi, Cirebon</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#FAF8F5]">
              Authentic Indonesian <br />
              <span className="rattan-gradient-text">Cirebon Rattan Furniture</span> <br />
              Exported Worldwide.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed max-w-2xl">
              CV Mulia Jaya Furniture manufactures luxury natural rattan & UV-resistant synthetic outdoor furniture. 
              Certified <strong className="text-[#D4A359]">SVLK V-Legal</strong>, precision kiln-dried, and crafted by 180+ master artisans for international B2B importers, hotels & resorts.
            </p>

            {/* Core Value Micro Bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] flex-shrink-0" />
                <span>100% Export Grade</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] flex-shrink-0" />
                <span>SVLK V-Legal Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] flex-shrink-0" />
                <span>Custom OEM/ODM CAD</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] flex-shrink-0" />
                <span>Kiln Dry &lt; 10% Moisture</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] flex-shrink-0" />
                <span>45 Containers / Month</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] flex-shrink-0" />
                <span>3,000 hrs UV Resistant</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#products"
                className="bg-gradient-to-r from-[#B8860B] via-[#D4A359] to-[#8B5A2B] text-white px-7 py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Browse Export Catalog</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#calculator"
                className="bg-[#2C1E16] hover:bg-[#3A261B] text-[#FAF8F5] border border-[#D4A359]/30 px-6 py-4 rounded-xl font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <Container className="w-5 h-5 text-[#D4A359]" />
                <span>Container Load Calculator</span>
              </a>
            </div>

            {/* Verified Google Badge */}
            <div className="pt-4 flex items-center gap-4 border-t border-stone-800/80">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-stone-300">
                <strong className="text-white font-bold">{COMPANY_INFO.googleRating} ★</strong> Rating on Google Maps 
                <span className="text-stone-400 font-normal"> ({COMPANY_INFO.googleReviewCount} Verified Buyer Reviews)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Feature Box & Interactive Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Featured Showcase Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4A359]/30 bg-[#2C1E16]/90 p-3 shadow-2xl backdrop-blur-md">
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Synthetic Rattan Outdoor Furniture Export"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#D4A359] bg-[#1C130E]/80 px-2.5 py-1 rounded">
                    Featured Export Model
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Sanur Modular Outdoor Resort Set
                  </h3>
                  <p className="text-xs text-stone-300">
                    High-Density UV Synthetic HDPE Weave • 1.8mm Aluminum Frame • 40ft HQ Capacity: 54 Sets
                  </p>
                </div>
              </div>

              {/* Stats Bar overlay below featured card */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-stone-800 text-center">
                <div className="bg-[#1C130E]/60 p-2.5 rounded-lg border border-stone-800">
                  <span className="block text-lg font-bold text-[#D4A359]">3,800+</span>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wide">40ft HQ Shipped</span>
                </div>
                <div className="bg-[#1C130E]/60 p-2.5 rounded-lg border border-stone-800">
                  <span className="block text-lg font-bold text-[#D4A359]">42+</span>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wide">Countries</span>
                </div>
                <div className="bg-[#1C130E]/60 p-2.5 rounded-lg border border-stone-800">
                  <span className="block text-lg font-bold text-[#D4A359]">100%</span>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wide">SVLK Legal</span>
                </div>
              </div>

            </div>

            {/* Floating Cirebon Origin Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#FAF8F5] text-[#1C130E] p-4 rounded-xl shadow-2xl border-2 border-[#D4A359] hidden sm:flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-[#B8860B] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#1C130E]">Factory Location</span>
                <span className="block text-[11px] text-stone-600">Tegalwangi, Weru, Cirebon - West Java</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
