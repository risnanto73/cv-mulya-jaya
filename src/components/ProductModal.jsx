import React, { useState } from 'react';
import { 
  X, Check, Container, ShieldCheck, Box, 
  Layers, Sun, Send, MessageSquare, Phone 
} from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToRFQ, isAdded }) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(product.moq || 10);

  const images = [product.image, ...(product.secondaryImages || [])];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-stone-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-stone-500 hover:text-stone-900 bg-white/80 hover:bg-white rounded-full transition-colors shadow-md"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Gallery */}
          <div className="bg-stone-100 p-6 flex flex-col justify-between">
            <div className="relative h-80 rounded-xl overflow-hidden bg-white shadow-inner mb-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-[#1C130E] text-[#D4A359] text-xs font-bold px-3 py-1 rounded-md uppercase">
                {product.category}
              </span>
            </div>

            {/* Thumbnail Selectors */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === img ? 'border-[#B8860B] ring-2 ring-[#B8860B]/20 scale-105' : 'border-stone-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Specifications & B2B Actions */}
          <div className="p-6 md:p-8 text-left flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
                  SKU: {product.id}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  SVLK Legal Verified
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1C130E] mt-1">
                {product.name}
              </h2>
              <p className="text-sm text-stone-600 mt-1 font-normal">
                {product.tagline}
              </p>
            </div>

            {/* Specs Table */}
            <div className="bg-stone-50 p-4 rounded-xl space-y-2 text-xs border border-stone-200">
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="font-semibold text-stone-500">Dimensions (Metric):</span>
                <span className="font-bold text-stone-800">{product.dimensions.cm}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="font-semibold text-stone-500">Dimensions (Imperial):</span>
                <span className="font-medium text-stone-800">{product.dimensions.inches}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="font-semibold text-stone-500">Volume per Unit:</span>
                <span className="font-bold text-[#B8860B]">{product.cbm} CBM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="font-semibold text-stone-500">20ft Container Capacity:</span>
                <span className="font-bold text-stone-800">~{product.containerCapacity20ft} units</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-200">
                <span className="font-semibold text-stone-500">40ft HQ Container Capacity:</span>
                <span className="font-bold text-emerald-800">~{product.containerCapacity40ftHQ} units</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-stone-500">Weave Pattern:</span>
                <span className="font-medium text-stone-800">{product.weaveStyle}</span>
              </div>
            </div>

            {/* Key Craftsmanship Features */}
            <div>
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                Export Quality Highlights:
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {product.features?.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity & Actions */}
            <div className="pt-2 border-t border-stone-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-stone-700">Select Container Quantity:</span>
                <span className="text-stone-500">MOQ: {product.moq} units</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(product.moq, quantity - 5))}
                    className="px-3 py-2 text-stone-700 hover:bg-stone-100 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-bold text-sm text-[#1C130E] min-w-[50px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 5)}
                    className="px-3 py-2 text-stone-700 hover:bg-stone-100 font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    onAddToRFQ({ ...product, selectedQty: quantity });
                  }}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    isAdded
                      ? 'bg-emerald-700 text-white'
                      : 'bg-gradient-to-r from-[#B8860B] to-[#8B5A2B] text-white hover:opacity-95 shadow-md'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Updated in RFQ Cart</span>
                    </>
                  ) : (
                    <>
                      <Container className="w-4 h-4 text-amber-300" />
                      <span>Add ({quantity} units = {(product.cbm * quantity).toFixed(2)} CBM)</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Direct Query */}
              <a
                href={`https://wa.me/6281222009889?text=Hello%20CV%20Mulia%20Jaya%20Furniture,%20I%20want%20to%20inquire%20about%20customizing%20product%20${product.id}%20(${product.name}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1C130E] hover:bg-[#2C1E16] text-[#D4A359] py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-amber-900/30"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Inquire Custom OEM Specifications on WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
