import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES } from '../services/data';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const CategorySection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.7;
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto relative px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-stone-900 mb-2">Explore Collections</h2>
              <div className="w-16 h-[1px] bg-stone-900"></div>
            </div>

            {/* Navigation Buttons (Desktop) */}
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="p-3 border border-stone-200 rounded-full hover:bg-stone-900 hover:text-white transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-3 border border-stone-200 rounded-full hover:bg-stone-900 hover:text-white transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory"
        >
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex-none w-[70vw] md:w-[22vw] lg:w-[15vw] group cursor-pointer snap-start"
            >
              {/* Arched Image Container */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-[50%] mb-6 shadow-sm border border-stone-100">
                <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 filter grayscale-[0.1] group-hover:grayscale-0"
                />
                
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-stone-900">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center px-1">
                <h3 className="font-display text-lg md:text-xl font-medium text-stone-900 mb-2 leading-tight">
                  {category.title}
                </h3>
                <p className="font-sans text-stone-500 text-xs md:text-sm font-light line-clamp-2">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;