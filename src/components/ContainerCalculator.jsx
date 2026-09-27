import React, { useState } from 'react';
import { 
  Container, Calculator, CheckCircle2, AlertCircle, 
  ArrowRight, RefreshCw, Trash2, Plus, Minus, Send, Sparkles 
} from 'lucide-react';

export default function ContainerCalculator({ rfqItems, onUpdateQuantity, onRemoveItem, onOpenRFQModal }) {
  const [selectedContainerType, setSelectedContainerType] = useState('40HQ');

  const containerSpecs = {
    '20FT': { name: '20ft Standard Container', maxCbm: 28.0, description: 'Best for mixed trial orders & small wholesale loads.' },
    '40FT': { name: '40ft Standard Container', maxCbm: 58.0, description: 'Standard ocean freight volume for bulk furniture orders.' },
    '40HQ': { name: '40ft High Cube (HQ)', maxCbm: 68.0, description: 'Most cost-effective CBM rate per furniture unit.' },
  };

  const currentSpec = containerSpecs[selectedContainerType];

  // Calculate total CBM
  const totalCBM = rfqItems.reduce((acc, item) => {
    const qty = item.selectedQty || item.moq || 1;
    return acc + (item.cbm * qty);
  }, 0);

  const fillPercentage = Math.min(100, Math.round((totalCBM / currentSpec.maxCbm) * 100));
  const remainingCBM = Math.max(0, currentSpec.maxCbm - totalCBM);

  return (
    <section id="calculator" className="py-20 bg-[#1C130E] text-white relative overflow-hidden">
      
      {/* Background Wood Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4a359_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C1E16] border border-[#D4A359]/40 text-[#D4A359] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive B2B Shipping Tool</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5]">
            Container Load & CBM Estimator
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-normal">
            Optimize ocean container freight costs by calculating exact cubic meter (CBM) volume. 
            Mix and match Cirebon rattan furniture items to maximize your container fill rate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Container Type Selector & Selected Items */}
          <div className="lg:col-span-7 bg-[#2C1E16] rounded-2xl p-6 border border-[#D4A359]/20 shadow-xl space-y-6 text-left">
            
            {/* Step 1: Container Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D4A359] mb-3">
                1. Select Ocean Freight Container Type:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {Object.keys(containerSpecs).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedContainerType(type)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedContainerType === type
                        ? 'bg-gradient-to-r from-[#B8860B] to-[#8B5A2B] text-white border-amber-400 shadow-md font-bold'
                        : 'bg-[#1C130E] text-stone-300 border-stone-800 hover:border-stone-700'
                    }`}
                  >
                    <span className="block text-sm font-bold">{type}</span>
                    <span className="block text-[11px] opacity-80">{containerSpecs[type].maxCbm} CBM</span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-stone-400 mt-2 italic">
                {currentSpec.description}
              </p>
            </div>

            {/* Step 2: Selected Items List */}
            <div>
              <div className="flex items-center justify-between mb-3 border-t border-stone-800 pt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-[#D4A359]">
                  2. Selected Items in Quote ({rfqItems.length}):
                </label>
                <a href="#products" className="text-xs text-amber-400 hover:underline">
                  + Add More Products
                </a>
              </div>

              {rfqItems.length === 0 ? (
                <div className="bg-[#1C130E] p-8 rounded-xl text-center border border-dashed border-stone-800 space-y-3">
                  <Container className="w-10 h-10 text-stone-600 mx-auto" />
                  <p className="text-stone-400 text-sm font-serif">
                    Your container RFQ cart is currently empty.
                  </p>
                  <a
                    href="#products"
                    className="inline-block bg-[#D4A359] text-[#1C130E] px-4 py-2 rounded-lg font-bold text-xs hover:bg-[#B8860B] hover:text-white transition-colors"
                  >
                    Browse Catalog & Add Items
                  </a>
                </div>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {rfqItems.map((item) => {
                    const qty = item.selectedQty || item.moq || 1;
                    const itemTotalCbm = (item.cbm * qty).toFixed(2);
                    return (
                      <div
                        key={item.id}
                        className="bg-[#1C130E] p-3.5 rounded-xl border border-stone-800 flex items-center justify-between gap-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-bold text-white truncate">
                            {item.name}
                          </h4>
                          <span className="text-[11px] text-stone-400">
                            {item.cbm} CBM / unit • Total: <strong className="text-amber-400">{itemTotalCbm} CBM</strong>
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-1 bg-[#2C1E16] rounded-lg px-2 py-1 border border-stone-700">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, qty - 5))}
                            className="text-stone-400 hover:text-white px-1 font-bold text-xs"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-white px-2">
                            {qty}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, qty + 5)}
                            className="text-stone-400 hover:text-white px-1 font-bold text-xs"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-stone-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>

                      </div>
                    );
                  })}
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Visual Container Capacity Status & RFQ Action */}
          <div className="lg:col-span-5 bg-[#2C1E16] rounded-2xl p-6 border border-[#D4A359]/30 shadow-2xl space-y-6 text-left relative">
            
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              <Container className="w-5 h-5 text-[#D4A359]" />
              <span>Container Load Summary</span>
            </h3>

            {/* Visual Fill Gauge */}
            <div className="space-y-3 bg-[#1C130E] p-4 rounded-xl border border-stone-800">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-400">Container Target ({selectedContainerType}):</span>
                <span className="font-bold text-amber-400">{currentSpec.maxCbm} CBM Max</span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-6 bg-stone-900 rounded-full overflow-hidden border border-stone-800 p-0.5">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    fillPercentage > 95
                      ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                      : fillPercentage > 75
                      ? 'bg-gradient-to-r from-[#B8860B] to-[#D4A359]'
                      : 'bg-gradient-to-r from-amber-700 to-amber-500'
                  }`}
                  style={{ width: `${fillPercentage}%` }}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                  {fillPercentage}% Filled ({totalCBM.toFixed(2)} / {currentSpec.maxCbm} CBM)
                </span>
              </div>

              <div className="flex justify-between items-center text-[11px] pt-1">
                <span className="text-stone-400">Remaining Volume:</span>
                <span className="font-bold text-stone-200">{remainingCBM.toFixed(2)} CBM</span>
              </div>
            </div>

            {/* Optimization Recommendation Advice Box */}
            <div className="bg-[#1C130E]/80 p-4 rounded-xl border border-amber-900/30 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Export Freight Advice</span>
              </div>
              {fillPercentage === 0 ? (
                <p className="text-stone-400">Add furniture items above to calculate optimal shipping capacity.</p>
              ) : fillPercentage < 70 ? (
                <p className="text-stone-300">
                  Your current load is <strong>{fillPercentage}%</strong>. Adding approximately{' '}
                  <strong className="text-amber-400">{remainingCBM.toFixed(1)} CBM</strong> more of furniture will lower your freight cost per unit significantly!
                </p>
              ) : fillPercentage <= 100 ? (
                <p className="text-emerald-400 font-semibold">
                  Excellent container optimization! Your load utilizes {fillPercentage}% of the container capacity efficiently.
                </p>
              ) : (
                <p className="text-amber-400">
                  Warning: Exceeds 1x {selectedContainerType} capacity by {(totalCBM - currentSpec.maxCbm).toFixed(2)} CBM. We will split this into multiple containers or recommend 40ft HQ.
                </p>
              )}
            </div>

            {/* Submit Container RFQ Button */}
            <button
              onClick={onOpenRFQModal}
              disabled={rfqItems.length === 0}
              className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                rfqItems.length > 0
                  ? 'bg-gradient-to-r from-[#B8860B] via-[#D4A359] to-[#8B5A2B] text-white hover:opacity-95'
                  : 'bg-stone-800 text-stone-500 cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>Request Container Quotation ({rfqItems.length} items)</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
