import React from 'react';
import { 
  X, Container, Trash2, Plus, Minus, 
  Send, Printer, FileText, CheckCircle2, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function RFQDrawer({ isOpen, onClose, rfqItems, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const totalCBM = rfqItems.reduce((sum, item) => {
    const qty = item.selectedQty || item.moq || 1;
    return sum + (item.cbm * qty);
  }, 0);

  const container40HQCap = 68.0;
  const fillPct = Math.min(100, Math.round((totalCBM / container40HQCap) * 100));

  const handlePrintPDF = () => {
    window.print();
  };

  const handleSendWhatsApp = () => {
    let text = `*OFFICIAL CONTAINER RFQ - CV MULIA JAYA FURNITURE*\n`;
    text += `Total Volume: ${totalCBM.toFixed(2)} CBM (~${fillPct}% of 40ft HQ)\n\n`;
    text += `*Selected Products:*\n`;
    
    rfqItems.forEach((item, idx) => {
      const qty = item.selectedQty || item.moq || 1;
      text += `${idx + 1}. ${item.name} (${item.id})\n   - Qty: ${qty} units | Vol: ${(item.cbm * qty).toFixed(2)} CBM\n`;
    });

    text += `\nPlease send official FOB container quotation and SVLK documentation.`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#1C130E] text-white h-full flex flex-col justify-between shadow-2xl border-l border-[#D4A359]/30">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-[#2C1E16]">
          <div className="flex items-center gap-2">
            <Container className="w-5 h-5 text-[#D4A359]" />
            <h3 className="font-serif text-lg font-bold text-white">
              Container Quote Cart ({rfqItems.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 text-left">
          
          {/* CBM Progress Bar */}
          <div className="bg-[#2C1E16] p-4 rounded-xl border border-stone-800 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-stone-400">Total Selected Volume:</span>
              <span className="font-bold text-[#D4A359]">{totalCBM.toFixed(2)} CBM</span>
            </div>
            
            <div className="h-3 bg-stone-900 rounded-full overflow-hidden border border-stone-800">
              <div
                className="h-full bg-gradient-to-r from-[#B8860B] to-[#D4A359] transition-all duration-300"
                style={{ width: `${fillPct}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-[11px] text-stone-400">
              <span>0 CBM</span>
              <span>40ft HQ Target (68 CBM)</span>
            </div>
          </div>

          {/* Product Items List */}
          {rfqItems.length === 0 ? (
            <div className="py-20 text-center space-y-3 text-stone-500">
              <Container className="w-12 h-12 text-stone-600 mx-auto" />
              <p className="text-sm font-serif">No products added to quote yet.</p>
              <p className="text-xs">Browse the catalog to add Cirebon rattan items.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {rfqItems.map((item) => {
                const qty = item.selectedQty || item.moq || 1;
                return (
                  <div
                    key={item.id}
                    className="bg-[#2C1E16] p-3.5 rounded-xl border border-stone-800 flex items-center justify-between gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0 space-y-0.5">
                      <span className="text-[10px] text-amber-500 font-bold uppercase">{item.id}</span>
                      <h4 className="font-serif text-sm font-bold text-white truncate">{item.name}</h4>
                      <span className="text-xs text-stone-400 block">
                        {(item.cbm * qty).toFixed(2)} CBM
                      </span>
                    </div>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-1 bg-[#1C130E] px-2 py-1 rounded border border-stone-700">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, qty - 5))}
                        className="text-stone-400 hover:text-white font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-white px-1">{qty}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, qty + 5)}
                        className="text-stone-400 hover:text-white font-bold text-xs"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1 text-stone-500 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-stone-800 bg-[#2C1E16] space-y-3">
          
          <button
            onClick={handleSendWhatsApp}
            disabled={rfqItems.length === 0}
            className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
              rfqItems.length > 0
                ? 'bg-emerald-700 hover:bg-emerald-600 text-white shadow-lg'
                : 'bg-stone-800 text-stone-500 cursor-not-allowed'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Send Container RFQ to WhatsApp</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={handlePrintPDF}
              disabled={rfqItems.length === 0}
              className="flex-1 py-2.5 bg-[#1C130E] hover:bg-stone-800 border border-stone-700 rounded-xl text-xs font-semibold text-stone-300 flex items-center justify-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print Quote Draft</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-stone-800 text-stone-300 rounded-xl text-xs font-semibold hover:bg-stone-700"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
