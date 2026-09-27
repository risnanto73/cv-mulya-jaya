import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import ContainerCalculator from './components/ContainerCalculator';
import CraftsmanshipTour from './components/CraftsmanshipTour';
import B2BServices from './components/B2BServices';
import GoogleReviewsSection from './components/GoogleReviewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import RFQDrawer from './components/RFQDrawer';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('EN');
  const [rfqItems, setRfqItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isRFQDrawerOpen, setIsRFQDrawerOpen] = useState(false);

  const handleAddToRFQ = (product) => {
    setRfqItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, selectedQty: (item.selectedQty || item.moq || 1) + 5 }
            : item
        );
      }
      return [...prev, { ...product, selectedQty: product.selectedQty || product.moq || 10 }];
    });
  };

  const handleUpdateQuantity = (productId, newQty) => {
    setRfqItems((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, selectedQty: newQty } : item))
    );
  };

  const handleRemoveItem = (productId) => {
    setRfqItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C130E] font-sans">
      {/* Navbar */}
      <Navbar
        rfqCount={rfqItems.length}
        onOpenRFQ={() => setIsRFQDrawerOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      {/* Hero Section */}
      <Hero
        onOpenCatalog={() => {
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenCalculator={() => {
          document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Certifications & Trust Badges */}
      <TrustBadges />

      {/* Main Export Product Catalog */}
      <ProductCatalog
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onAddToRFQ={handleAddToRFQ}
        rfqItems={rfqItems}
      />

      {/* Interactive Container Load & CBM Calculator */}
      <ContainerCalculator
        rfqItems={rfqItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenRFQModal={() => setIsRFQDrawerOpen(true)}
      />

      {/* Cirebon Heritage & Craftsmanship Production Stages */}
      <CraftsmanshipTour />

      {/* B2B OEM & Hospitality Services */}
      <B2BServices />

      {/* Verified Google Maps Location & Importer Testimonials */}
      <GoogleReviewsSection />

      {/* Export FAQ */}
      <FAQSection />

      {/* B2B Inquiry & WhatsApp Contact Section */}
      <ContactSection rfqItems={rfqItems} />

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToRFQ={handleAddToRFQ}
        isAdded={selectedProduct ? rfqItems.some((i) => i.id === selectedProduct.id) : false}
      />

      <RFQDrawer
        isOpen={isRFQDrawerOpen}
        onClose={() => setIsRFQDrawerOpen(false)}
        rfqItems={rfqItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
