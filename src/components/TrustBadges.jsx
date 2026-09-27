import React from 'react';
import { ShieldCheck, Trees, Sun, Award, Star, CheckCircle, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function TrustBadges() {
  return (
    <section className="bg-[#FAF8F5] py-10 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Certification Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          
          {COMPANY_INFO.certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 rounded-xl border border-amber-900/10 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-2.5 text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#B8860B] flex items-center justify-center font-bold text-sm">
                {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                {idx === 1 && <Trees className="w-5 h-5 text-emerald-600" />}
                {idx === 2 && <Award className="w-5 h-5 text-blue-600" />}
                {idx === 3 && <Sun className="w-5 h-5 text-amber-600" />}
              </div>

              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-amber-100/80 text-[10px] font-bold text-amber-900 uppercase tracking-wider mb-1">
                  {cert.code}
                </span>
                <h4 className="font-serif text-sm font-bold text-[#1C130E] leading-tight">
                  {cert.title}
                </h4>
                <p className="text-xs text-stone-500 mt-1 leading-normal">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Real Google Maps Rating Bar */}
        <div className="mt-8 bg-[#1C130E] text-[#FAF8F5] p-4 sm:p-5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 border border-[#D4A359]/30">
          
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-lg bg-[#2C1E16] text-amber-400 flex items-center justify-center border border-amber-500/20 font-bold text-xl flex-shrink-0">
              4.5★
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-base text-white">Google Verified Manufacturer</h4>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-stone-300">
                Jl. Nyi Mas Wanawati No.35, Tegalwangi, Weru, Cirebon, West Java 45154
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=CV+MULIA+JAYA+FURNITURE+Cirebon"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4A359] text-[#1C130E] hover:bg-[#B8860B] hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Verify on Google Maps</span>
          </a>

        </div>

      </div>
    </section>
  );
}
