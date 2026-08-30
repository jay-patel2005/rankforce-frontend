'use client';

import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function BlogCategoryFilter({ categories, activeCategory, onCategoryChange }: BlogCategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="relative flex items-center">
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth w-full pb-4 pt-1"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`
                  whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border
                  ${isActive 
                    ? 'bg-[#FF6A00] text-white border-[#FF6A00] shadow-md shadow-orange-500/20' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#FF6A00] hover:text-[#FF6A00] hover:bg-orange-50'
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
        
        {/* Right scroll fade indicator for mobile/tablet when there are many tabs */}
        <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden flex justify-end items-center pr-2">
           <button 
             onClick={scrollRight} 
             className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center pointer-events-auto text-gray-400 hover:text-[#FF6A00]"
             aria-label="Scroll right"
           >
             <ChevronRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </section>
  );
}
