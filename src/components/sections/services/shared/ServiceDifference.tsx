import React from 'react';
import { ServiceDifferenceData } from '@/types/service-page';

export function ServiceDifference({ data }: { data: ServiceDifferenceData }) {
  return (
    <section className="relative bg-[#FFF7F0] pt-8 pb-0 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full border-[1px] border-[#FF6A00]/10 pointer-events-none" />
      <div className="absolute top-[0%] right-[0%] w-[400px] h-[400px] rounded-full border-[1px] border-[#FF6A00]/5 pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full border-[1px] border-[#FF6A00]/10 pointer-events-none" />
      
      <div className="absolute top-[10%] left-[5%] grid grid-cols-4 gap-2 pointer-events-none opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-[#FF6A00] rounded-full" />
        ))}
      </div>
      <div className="absolute bottom-[10%] right-[5%] grid grid-cols-4 gap-2 pointer-events-none opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-[#FF6A00] rounded-full" />
        ))}
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[32px] lg:text-[42px] font-extrabold text-[#1A1A1A] leading-tight mb-4">
            {data.titleHtml}
          </h2>
          {data.subtitle && (
            <p className="text-center text-[18px] lg:text-[20px] text-[#4B4B4B] max-w-[800px] mx-auto leading-[1.6]">
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-16 lg:pb-20">
          {data.cards.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(255,106,0,0.08)] hover:border-[#FF6A00]/10 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FFF0E4] text-[#FF6A00] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#FF6A00] group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-3">
                {item.title}
              </h3>
              <p className="text-[15px] text-[#6B6B6B] leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Image / Graphic */}
        <div className="w-full flex justify-center -mb-8 lg:-mb-12 relative z-20">
          <div className="w-full max-w-[900px] h-auto relative">
            {/* The glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#FF6A00]/10 blur-[80px] rounded-full -z-10" />
            
            <img 
              src="/images/marketing-dashboard-mockup.webp" 
              alt="Rankforce Dashboard"
              className="w-full h-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.08))'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
