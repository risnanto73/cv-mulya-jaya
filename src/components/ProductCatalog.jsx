import React, { useState } from 'react';
import { 
  Search, Filter, Eye, Plus, Container, 
  Check, Sparkles, Box, Info, Layers 
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function ProductCatalog({ onSelectProduct, onAddToRFQ, rfqItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isInRFQ = (productId) => {
    return rfqItems.some((item) => item.id === productId);
  };

  return (
    <section id="products" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#B8860B] bg-amber-100/60 px-3 py-1 rounded-full">
            Export Grade Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C130E]">
            Handcrafted Cirebon Rattan Furniture
          </h2>
          <p className="text-base text-stone-600 font-normal">
            Explore our high-demand wholesale collection engineered for international shipping. 
            All products feature precision CBM packaging specs and SVLK compliance.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#1C130E] text-[#D4A359] shadow-md'
                    : 'bg-white text-stone-700 hover:bg-amber-100/50 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search rattan chair, sofa, set..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-sm bg-white border border-stone-300 focus:outline-none focus:border-[#D4A359] focus:ring-1 focus:ring-[#D4A359]"
            />
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const added = isInRFQ(product.id);
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-amber-900/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Container */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    <span className="bg-[#1C130E]/80 backdrop-blur-md text-[#D4A359] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {product.category}
                    </span>
                    {product.outdoorSuitable && (
                      <span className="bg-emerald-800/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                        All-Weather Outdoor
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#1C130E] text-xs font-bold px-2.5 py-1 rounded-md border border-stone-200 shadow-sm flex items-center gap-1">
                    <Box className="w-3.5 h-3.5 text-[#B8860B]" />
                    <span>{product.cbm} CBM</span>
                  </div>

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="bg-white text-[#1C130E] hover:bg-[#D4A359] hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Full Specifications</span>
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 tracking-wider uppercase block">
                      SKU: {product.id}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#1C130E] group-hover:text-[#B8860B] transition-colors leading-snug mt-0.5">
                      {product.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Tech Spec Badges */}
                  <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
                    <div className="flex justify-between text-stone-600">
                      <span className="font-semibold text-stone-400">Dimensions:</span>
                      <span className="font-medium">{product.dimensions.cm}</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span className="font-semibold text-stone-400">40ft HQ Load:</span>
                      <span className="font-bold text-amber-900">{product.containerCapacity40ftHQ} units</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span className="font-semibold text-stone-400">Material:</span>
                      <span className="font-medium text-stone-700 truncate max-w-[180px]">{product.material}</span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-3 flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 py-2.5 px-3 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 font-semibold text-xs transition-colors text-center"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onAddToRFQ(product)}
                      className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 ${
                        added
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#2C1E16] hover:bg-[#1C130E] text-[#D4A359]'
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Container</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to RFQ</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center text-stone-500">
            <p className="text-lg font-serif">No rattan furniture models match your search filter.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-3 text-sm text-[#B8860B] font-bold underline"
            >
              Reset Search Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
