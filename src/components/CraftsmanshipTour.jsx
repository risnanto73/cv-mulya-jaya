import React from 'react';
import { 
  Flame, CheckCircle, Factory, ShieldCheck, 
  PackageCheck, Truck, Sparkles, MapPin 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function CraftsmanshipTour() {
  return (
    <section id="craftsmanship" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#B8860B] bg-amber-100/60 px-3 py-1 rounded-full">
            Cirebon Weaving Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C130E]">
            Master Craftsman Production Process
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Located in Tegalwangi, Cirebon — Indonesia's world-renowned rattan manufacturing hub. 
            We combine centuries-old hand-weaving techniques with modern kiln-drying and SVLK compliance.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_INFO.exportProcess.map((proc, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-[#D4A359] group-hover:text-[#B8860B] transition-colors">
                    {proc.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#B8860B] flex items-center justify-center font-bold">
                    {index === 0 && <Sparkles className="w-5 h-5" />}
                    {index === 1 && <Flame className="w-5 h-5 text-amber-600" />}
                    {index === 2 && <Factory className="w-5 h-5" />}
                    {index === 3 && <ShieldCheck className="w-5 h-5 text-emerald-600" />}
                    {index === 4 && <PackageCheck className="w-5 h-5" />}
                    {index === 5 && <Truck className="w-5 h-5 text-blue-600" />}
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1C130E] group-hover:text-[#B8860B] transition-colors">
                  {proc.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {proc.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-stone-400">
                <span>Stage {index + 1} of 6</span>
                <span className="text-emerald-700 font-bold">100% Quality Inspected</span>
              </div>
            </div>
          ))}
        </div>

        {/* Factory Capacity Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1C130E] via-[#2C1E16] to-[#1C130E] text-white p-8 rounded-2xl border border-[#D4A359]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
          
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#D4A359] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Tegalwangi Cirebon Manufacturing Facility</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              14,500 m² Factory • 180+ Artisans • 45 Containers / Month
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-normal">
              Equipped with 3 dehumidified kiln drying chambers, automated aluminum tube benders, 
              powder coating line, and dedicated container loading bays with 24/7 security.
            </p>
          </div>

          <a
            href="#contact"
            className="bg-gradient-to-r from-[#B8860B] via-[#D4A359] to-[#8B5A2B] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:opacity-95 transition-all shadow-md whitespace-nowrap flex-shrink-0"
          >
            Schedule Factory Audit Tour
          </a>

        </div>

      </div>
    </section>
  );
}
