import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset index when product changes (though usually component unmounts)
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextImage = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % product.gallery.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      {/* Top Controls */}
      <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-50 pointer-events-none">
        <div className="hidden md:block text-xs tracking-widest text-stone-500 font-medium pointer-events-auto">
          {currentImageIndex + 1} <span className="text-stone-300 mx-1">/</span> {product.gallery.length}
        </div>
        
        <button 
          onClick={onClose}
          className="ml-auto p-2 bg-white/50 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-colors duration-300 shadow-sm pointer-events-auto"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      <div className="w-full h-full flex flex-col md:flex-row">
        
        {/* Left: Image Carousel Area */}
        <div className="w-full md:w-2/3 h-[50vh] md:h-full relative bg-stone-50 overflow-hidden group">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentImageIndex}
              src={product.gallery[currentImageIndex]}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full object-contain md:object-cover mix-blend-multiply p-4 md:p-0"
              alt={`${product.name} view ${currentImageIndex + 1}`}
            />
          </AnimatePresence>

          {/* Navigation Arrows (Floating) */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white shadow-lg text-stone-900 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white shadow-lg text-stone-900 hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile Dots */}
           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
            {product.gallery.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-black' : 'bg-stone-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/3 h-[50vh] md:h-full overflow-y-auto p-6 md:p-16 flex flex-col justify-center bg-white border-l border-stone-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pb-10 md:pb-0"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium text-stone-900 mb-2">{product.name}</h2>
            <p className="text-xl text-stone-500 font-display italic mb-6 md:mb-8">{product.price}</p>
            
            <div className="space-y-6 text-sm md:text-base">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Description</h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Dimensions</h3>
                  <p className="text-stone-900 font-medium">{product.dimensions}</p>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Material</h3>
                  <p className="text-stone-900 font-medium">{product.material}</p>
                </div>
              </div>

              <div className="pt-6 md:pt-8">
                <button className="w-full bg-stone-900 text-white py-4 px-8 uppercase tracking-widest text-xs md:text-sm hover:bg-stone-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium">
                  Inquire Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductModal;