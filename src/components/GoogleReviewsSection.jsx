import React from 'react';
import { Star, MapPin, CheckCircle2, Quote, ExternalLink, Clock, Phone } from 'lucide-react';
import { TESTIMONIALS, GOOGLE_REVIEWS_META } from '../data/testimonials';
import { COMPANY_INFO } from '../data/company';

export default function GoogleReviewsSection() {
  return (
    <section id="location" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#B8860B] bg-amber-100/60 px-3 py-1 rounded-full">
            Verified Factory & Client Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C130E]">
            Trusted by Global Importers
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Real feedback from international furniture distributors, resort developers, and our verified 4.5★ Google listing.
          </p>
        </div>

        {/* Top Feature: Google Rating Badge & Address Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-900/10 shadow-lg mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-8">
            <div className="flex items-center gap-2">
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-md uppercase">
                Google Business Profile
              </span>
              <span className="text-xs text-stone-500 font-semibold">Category: Produsen (Manufacturer)</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1C130E]">
              {COMPANY_INFO.name}
            </h3>

            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-[#1C130E] font-serif">{GOOGLE_REVIEWS_META.rating}</span>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-stone-500 font-semibold block">
                  Based on {GOOGLE_REVIEWS_META.totalReviews} verified Google reviews
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B8860B] flex-shrink-0 mt-0.5" />
                <span>{GOOGLE_REVIEWS_META.address}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-500">
                <Clock className="w-4 h-4 text-stone-400" />
                <span>Operating Hours: Mon - Sat (08:00 - 17:00 WIB)</span>
              </div>
              <div className="flex items-center gap-2 text-stone-500">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Plus Code: {GOOGLE_REVIEWS_META.plusCode}</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=CV+MULIA+JAYA+FURNITURE+Cirebon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1C130E] text-[#D4A359] hover:bg-[#2C1E16] px-5 py-2.5 rounded-xl font-bold text-xs transition-colors shadow"
            >
              <span>View Location on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Map Visual */}
          <div className="lg:col-span-7 h-64 sm:h-80 rounded-xl overflow-hidden border border-stone-200 shadow-inner relative">
            <iframe
              title="CV Mulia Jaya Furniture Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.771239632863!2d108.49870000000001!3d-6.7029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee265a6cbb8e7%3A0x6b8f3cb24810!2sJl.%20Nyi%20Mas%20Wanawati%20No.35%2C%20Tegalwangi%2C%20Kec.%20Weru%2C%20Kabupaten%20Cirebon%2C%20Jawa%20Barat%2045154!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105"
            ></iframe>
          </div>

        </div>

        {/* Importer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-2xl border border-amber-900/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left relative"
            >
              <Quote className="w-8 h-8 text-amber-200 absolute top-4 right-4" />

              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 italic font-normal leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.clientName}
                  className="w-10 h-10 rounded-full object-cover border border-stone-200"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1C130E] leading-tight">
                    {t.clientName}
                  </h4>
                  <span className="text-[11px] text-stone-500 block">
                    {t.company} • <strong className="text-amber-900">{t.country}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
