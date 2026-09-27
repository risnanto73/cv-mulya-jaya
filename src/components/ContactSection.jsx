import React, { useState } from 'react';
import { 
  Send, Phone, Mail, MapPin, Globe, 
  MessageSquare, CheckCircle2, ShieldCheck, Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/company';

export default function ContactSection({ rfqItems }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    destinationPort: '',
    containerType: '40ft HQ',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleWhatsAppDirect = () => {
    const text = `Hello CV Mulia Jaya Furniture Export Team!
I am interested in placing an export inquiry.
Company: ${formData.company || 'B2B Buyer'}
Country: ${formData.country || 'International'}
Target Port: ${formData.destinationPort || 'Main Port'}
Container: ${formData.containerType}
Message: ${formData.message || 'Please send your full B2B export catalog and pricing.'}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#1C130E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A359] bg-[#2C1E16] px-3 py-1 rounded-full border border-[#D4A359]/30">
            Direct Factory Connection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
            Start Your Export Order
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-normal">
            Request official FOB container pricing, request swatches, or schedule a virtual factory tour of our Tegalwangi Cirebon facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Left Column: Direct Contact Info & Map Details */}
          <div className="lg:col-span-5 space-y-8 bg-[#2C1E16] p-8 rounded-2xl border border-[#D4A359]/20 shadow-xl">
            
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                CV MULIA JAYA FURNITURE
              </h3>
              <p className="text-xs text-stone-300 font-normal">
                Manufacturer & Exporter of Fine Indonesian Natural & Synthetic Rattan
              </p>
            </div>

            <div className="space-y-4 text-xs text-stone-300 border-t border-stone-800 pt-6">
              
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1C130E] text-[#D4A359] flex items-center justify-center flex-shrink-0 border border-stone-800">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-bold mb-0.5">Factory & Office Address:</strong>
                  <span>{COMPANY_INFO.address}</span>
                  <span className="block text-stone-400 text-[11px] mt-0.5">Plus Code: {COMPANY_INFO.plusCode}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1C130E] text-emerald-400 flex items-center justify-center flex-shrink-0 border border-stone-800">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-bold mb-0.5">B2B Export Hotline / WhatsApp:</strong>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#D4A359] transition-colors font-bold text-white">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#1C130E] text-blue-400 flex items-center justify-center flex-shrink-0 border border-stone-800">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-white font-bold mb-0.5">Official Export Email:</strong>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#D4A359] transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Quick Chat CTA */}
            <div className="bg-[#1C130E] p-4 rounded-xl border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <MessageSquare className="w-4 h-4" />
                <span>Need Instant Container Quotation?</span>
              </div>
              <p className="text-[11px] text-stone-300">
                Our export sales manager speaks English, German & Indonesian. Response time &lt; 15 mins.
              </p>
              <button
                onClick={handleWhatsAppDirect}
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat Now on WhatsApp (+62 812-2200-9889)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-[#2C1E16] p-8 rounded-2xl border border-[#D4A359]/30 shadow-2xl">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Export Inquiry Received!
                </h3>
                <p className="text-sm text-stone-300 max-w-md mx-auto">
                  Thank you, <strong className="text-amber-400">{formData.name || 'Valued Partner'}</strong>. 
                  Our Cirebon export team will review your specs and send a formal FOB container quote within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#D4A359] text-[#1C130E] px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-[#B8860B] hover:text-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  B2B Container Quote Request
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1C130E] border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Company / Brand Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pacific Living GmbH"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#1C130E] border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1C130E] border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Country of Destination *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Germany, USA, UAE"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#1C130E] border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Target Destination Port</label>
                    <input
                      type="text"
                      placeholder="e.g. Hamburg / Los Angeles / Jebel Ali"
                      value={formData.destinationPort}
                      onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                      className="w-full bg-[#1C130E] border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Estimated Order Size</label>
                    <select
                      value={formData.containerType}
                      onChange={(e) => setFormData({ ...formData, containerType: e.target.value })}
                      className="w-full bg-[#1C130E] border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                    >
                      <option value="1x 20ft Container">1x 20ft Container (~28 CBM)</option>
                      <option value="1x 40ft HQ Container">1x 40ft HQ Container (~68 CBM)</option>
                      <option value="2-5x 40ft HQ Containers">2-5x 40ft HQ Containers</option>
                      <option value="Hospitality Project Custom OEM">Hospitality Project Custom OEM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Order Details & Specifications</label>
                  <textarea
                    rows={4}
                    placeholder="Specify models, custom weave patterns, cushion fabric colors, SVLK documentation requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1C130E] border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4A359]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#B8860B] via-[#D4A359] to-[#8B5A2B] text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Official RFQ Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
