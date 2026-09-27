import React from 'react';
import { 
  Building2, Palmtree, Layers, Sliders, 
  FileText, CheckCircle, ArrowRight, ShieldCheck 
} from 'lucide-react';

export default function B2BServices() {
  const services = [
    {
      icon: Building2,
      title: "Hospitality & Hotel Contract Manufacturing",
      desc: "Custom heavy-duty furniture built for 5-star beach resorts, boutique hotels, and restaurant chains with commercial UV and stain-resistant finishes.",
      bullets: ["Fire-retardant foam available", "High load-bearing aluminum frames", "2-Year commercial warranty"]
    },
    {
      icon: Sliders,
      title: "Custom OEM / ODM Blueprinting",
      desc: "Send us your CAD files, SketchUp models, or moodboard photos. Our in-house engineering team converts ideas into export-ready samples in 7-10 days.",
      bullets: ["3D rendering preview", "Custom swatch matching", "Dedicated project manager"]
    },
    {
      icon: Palmtree,
      title: "All-Weather Synthetic Rattan Weaving",
      desc: "We weave using genuine VIRO / REHAU high-density polyethylene (HDPE) fibers engineered for extreme sun exposure and chlorine pool environments.",
      bullets: ["ISO 4892-2 UV test certified", "Non-toxic & 100% recyclable", "Zero color fading"]
    },
    {
      icon: FileText,
      title: "Private Label & Eco-Packaging",
      desc: "Custom barcode labeling, client branded hangtags, drop-ship mail order packaging, and flat-pack KD optimization for e-commerce brands.",
      bullets: ["Custom logo metal badges", "ISTA 3A drop test packaging", "FSC certified cartons"]
    }
  ];

  return (
    <section id="oem" className="py-20 bg-[#1C130E] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A359] bg-[#2C1E16] px-3 py-1 rounded-full border border-[#D4A359]/30">
            Tailored B2B Export Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
            Custom OEM & Contract Manufacturing
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-normal">
            Whether you are a global furniture distributor, hotel procurement director, or interior design studio, 
            CV Mulia Jaya Furniture delivers custom specs on time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-[#2C1E16] p-8 rounded-2xl border border-[#D4A359]/20 hover:border-[#D4A359]/60 transition-all duration-300 text-left flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1C130E] to-[#3A261B] border border-[#D4A359]/40 text-[#D4A359] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D4A359] transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-sm text-stone-300 leading-relaxed">
                    {s.desc}
                  </p>

                  <ul className="space-y-2 pt-2 text-xs text-stone-300 border-t border-stone-800">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4A359]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-800">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#D4A359] hover:text-white transition-colors"
                  >
                    <span>Request Custom OEM Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
