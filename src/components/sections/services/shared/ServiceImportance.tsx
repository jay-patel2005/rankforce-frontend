import React from 'react';
import { ServiceImportanceData } from '@/types/service-page';

export function ServiceImportance({ data }: { data: ServiceImportanceData }) {
  return (
    <section className="relative bg-white pt-8 pb-4 lg:pt-14 lg:pb-8 overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] opacity-[0.03] scale-150">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <circle cx="11" cy="11" r="3"></circle>
            <circle cx="11" cy="11" r="5" strokeDasharray="2 2"></circle>
          </svg>
        </div>
        
        <div className="absolute top-[20%] left-[20%] opacity-[0.03] scale-[2]">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <path d="M3 9h18"></path>
            <path d="M9 21V9"></path>
          </svg>
        </div>
        
        <div className="absolute top-[15%] right-[10%] opacity-[0.03] scale-150">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>
        
        <div className="absolute bottom-[20%] right-[5%] opacity-[0.03] scale-[2.5]">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>
        
        <div className="absolute top-[30%] left-[8%] opacity-[0.05]">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#FF6A00]"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-[32px] lg:text-[42px] font-extrabold text-[#1A1A1A] leading-tight">
            {data.titleHtml}
          </h2>
          <div className="flex items-center justify-center mt-6 gap-2">
            <div className="w-16 h-[2px] bg-[#FF6A00]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]"></div>
            <div className="w-16 h-[2px] bg-[#FF6A00]"></div>
          </div>
        </div>

        <div className={`grid grid-cols-1 gap-12 items-center ${
          data.layoutVariant === 'wide-image' 
            ? 'lg:grid-cols-[0.85fr_1.15fr] lg:gap-16' 
            : 'lg:grid-cols-2 lg:gap-24'
        }`}>
          
          {/* Left Content */}
          <div className="max-w-[540px]">
            <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] mb-8 leading-snug">
              {data.heading}
            </h3>
            {data.paragraphs.map((p, index) => (
              <p key={index} className="text-[17px] text-[#4B4B4B] leading-[1.8] mb-6 text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Right Image */}
          <div className={`w-full flex justify-center ${data.layoutVariant === 'wide-image' ? 'lg:justify-end' : ''}`}>
            <img 
              src={data.imageSrc} 
              alt={data.imageAlt} 
              className={`w-full h-auto ${
                data.layoutVariant === 'wide-image'
                  ? 'max-w-[550px] lg:max-w-[750px] lg:scale-[1.08] lg:origin-center'
                  : 'max-w-[500px]'
              }`}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
