import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface GalleryItemProps {
  product: Product;
  onClick: (product: Product) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ product, onClick }) => {
  return (
    <motion.div 
      layoutId={`product-${product.id}`}
      className="relative flex-none w-[90vw] md:w-[35vw] lg:w-[28vw] h-full border-r border-stone-100 bg-gray-50 group cursor-pointer overflow-hidden snap-center"
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="w-full h-full relative overflow-hidden">
        <motion.img 
          layoutId={`image-${product.id}`}
          src={product.thumbnail} 
          alt={product.name}
          className="w-full h-full object-cover filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      {/* Content Overlay (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex justify-between items-end">
        {/* Gradient for text readability */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        
        <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/80 uppercase mb-2">Collection 001</p>
          <motion.h3 
            className="text-2xl md:text-3xl lg:text-4xl text-white font-display font-medium leading-tight"
          >
            {product.name}
          </motion.h3>
        </div>
        
        {/* Animated Action Icon */}
        <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 bg-white/10 backdrop-blur-sm">
            <Plus className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;