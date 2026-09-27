import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Globe, ShoppingBag, 
  Menu, X, Sparkles, ChevronDown, CheckCircle, ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function Navbar({ rfqCount, onOpenRFQ, lang, setLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'EN' ? 'Home' : 'Beranda', href: '#home' },
    { name: lang === 'EN' ? 'Export Products' : 'Katalog Produk', href: '#products' },
    { name: lang === 'EN' ? 'Container Calculator' : 'Kalkulator Kontainer', href: '#calculator' },
    { name: lang === 'EN' ? 'B2B & OEM Services' : 'Layanan OEM B2B', href: '#oem' },
    { name: lang === 'EN' ? 'Cirebon Heritage' : 'Kualitas Cirebon', href: '#craftsmanship' },
    { name: lang === 'EN' ? 'Reviews & Address' : 'Lokasi & Ulasan', href: '#location' },
    { name: lang === 'EN' ? 'Export FAQ' : 'Tanya Jawab', href: '#faq' },
  ];

  const languages = [
    { code: 'EN', name: 'English (US)' },
    { code: 'ID', name: 'Bahasa Indonesia' },
    { code: 'DE', name: 'Deutsch' },
    { code: 'FR', name: 'Français' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#1C130E] text-[#D4A359] text-xs py-2 px-4 border-b border-[#2C1E16]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SVLK V-Legal Certified Export Manufacturer</span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="hidden md:inline text-stone-300">Google Rating: 4.5 ★ (15 Reviews)</span>
          </div>

          <div className="flex items-center gap-6 text-stone-300">
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20CV%20Mulia%20Jaya%20Furniture,%20I%20am%20interested%20in%20exporting%20Cirebon%20rattan%20furniture.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#D4A359] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>B2B WhatsApp: +62 812-2200-9889</span>
            </a>

            <div className="flex items-center gap-1 bg-[#2C1E16] px-2 py-0.5 rounded text-xs">
              <Globe className="w-3 h-3 text-[#D4A359]" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-stone-200 cursor-pointer focus:outline-none"
              >
                {languages.map((l) => (
                  <option key={l.code} value={l.code} className="bg-[#1C130E] text-white">
                    {l.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-lg border-b border-amber-900/10 py-3' 
          : 'bg-[#FAF8F5]/90 backdrop-blur-sm py-4 border-b border-amber-900/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#1C130E] to-[#3A261B] text-[#D4A359] flex items-center justify-center font-serif text-xl font-bold border border-[#D4A359]/30 shadow-md group-hover:scale-105 transition-transform">
              MJ
            </div>
            <div>
              <span className="block font-serif text-lg md:text-xl font-bold tracking-tight text-[#1C130E] group-hover:text-[#B8860B] transition-colors">
                CV MULIA JAYA
              </span>
              <span className="block text-[10px] tracking-widest font-semibold uppercase text-[#9C7132]">
                Furniture Export • Cirebon
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-[#B8860B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4A359] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs & RFQ Drawer trigger */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenRFQ}
              className="relative flex items-center gap-2 bg-[#2C1E16] text-[#FAF8F5] px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1C130E] transition-all shadow-md group border border-[#D4A359]/30"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4A359] group-hover:scale-110 transition-transform" />
              <span>Container RFQ</span>
              {rfqCount > 0 && (
                <span className="bg-[#D4A359] text-[#1C130E] font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {rfqCount}
                </span>
              )}
            </button>

            <a
              href="#contact"
              className="bg-gradient-to-r from-[#B8860B] via-[#D4A359] to-[#8B5A2B] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-95 transition-all shadow-md shadow-amber-900/10 flex items-center gap-1.5"
            >
              <span>Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenRFQ}
              className="relative p-2 bg-[#2C1E16] text-[#D4A359] rounded-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              {rfqCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4A359] text-[#1C130E] font-bold text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {rfqCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 rounded-lg hover:bg-stone-200/60"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-stone-800 hover:text-[#B8860B] py-2 border-b border-stone-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRFQ();
                }}
                className="w-full bg-[#2C1E16] text-white py-3 rounded-lg text-center font-medium flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4A359]" />
                <span>View Container Quote Cart ({rfqCount})</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#D4A359] text-[#1C130E] py-3 rounded-lg text-center font-bold"
              >
                Get Custom Export Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
