import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from './components/Header';
import GalleryItem from './components/GalleryItem';
import ProductModal from './components/ProductModal';
import CategorySection from './components/CategorySection';
import { PRODUCTS } from './services/data';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll state for button visibility
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10); // buffer of 10px
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', checkScrollButtons);
    window.addEventListener('resize', checkScrollButtons);
    
    // Initial check
    checkScrollButtons();

    return () => {
      container.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [selectedProduct]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.5; // Scroll half screen width
      const targetScroll = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white text-stone-900 selection:bg-stone-200 flex flex-col">
      <Header />

      {/* SECTION 1: Horizontal Gallery */}
      {/* h-[100dvh] ensures it fits perfectly on mobile browsers with dynamic toolbars */}
      <section className="relative w-full h-[100dvh] flex-none border-b border-stone-100">
        
        {/* Navigation Buttons - Absolute positioned within this section */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-stone-900 transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl disabled:opacity-0 disabled:translate-x-[-20px] disabled:pointer-events-none`}
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-stone-900 transition-all duration-500 hover:scale-110 hover:bg-black hover:text-white hover:shadow-xl disabled:opacity-0 disabled:translate-x-[20px] disabled:pointer-events-none`}
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="w-full h-full pt-16 md:pt-20 flex overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory scroll-smooth items-stretch"
        >
          {/* Intro/Spacer Section - Hidden on mobile to save space, visible on tablet+ */}
          <div className="hidden md:flex flex-none w-[10vw] h-full bg-white flex-col justify-end p-8 border-r border-stone-100">
             <div className="mb-20">
                <p className="text-xs uppercase tracking-widest text-stone-400 rotate-180 mb-4 font-medium" style={{ writingMode: 'vertical-rl' }}>
                   Scroll Down to Explore
                </p>
                <div className="h-20 w-[1px] bg-stone-200 mx-auto"></div>
             </div>
          </div>

          {PRODUCTS.map((product) => (
            <GalleryItem 
              key={product.id} 
              product={product} 
              onClick={setSelectedProduct} 
            />
          ))}

          {/* Outro/Spacer Section */}
           <div className="flex-none w-[20vw] md:w-[20vw] h-full bg-white flex items-center justify-center border-l border-stone-100 snap-center">
             <p className="font-display text-2xl md:text-3xl text-stone-300 italic">View All</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Category Grid */}
      <CategorySection />

      {/* Footer / End of Page Spacer */}
      <footer className="w-full py-12 border-t border-stone-100 bg-white text-center">
        <p className="text-stone-400 font-display text-sm">© House of many.</p>
      </footer>

      {/* Modal / Detail View Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;