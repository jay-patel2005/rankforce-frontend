import React from 'react';
import { TrendingUp, DollarSign, Timer, User } from 'lucide-react';

const differenceItems = [
  {
    title: "Proven Strategies",
    description: "SEO strategies built around proven optimization principles.",
    icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />
  },
  {
    title: "Transparent Pricing",
    description: "Clear pricing with no unnecessary surprises.",
    icon: <DollarSign className="w-7 h-7" strokeWidth={2.5} />
  },
  {
    title: "Fast Turnaround",
    description: "Efficient execution without compromising quality.",
    icon: <Timer className="w-7 h-7" strokeWidth={2.5} />
  },
  {
    title: "Direct Access",
    description: "Direct communication when you need support.",
    icon: <User className="w-7 h-7" strokeWidth={2.5} />
  }
];

export function OnPageSEODifference() {
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

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-[36px] md:text-[42px] font-[800] text-[#1A1A1A] leading-[1.15] max-w-[650px] mx-auto tracking-tight">
            Why Choose Our<br />On-Page SEO Services
          </h2>
          
          {/* Custom Heading Divider */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-12 h-[2px] bg-[#FF6A00]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]" />
            <div className="w-12 h-[2px] bg-[#FF6A00]" />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differenceItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,106,0,0.08)]"
            >
              <div className="w-[72px] h-[72px] rounded-[20px] bg-[#FFF0E4] text-[#FF6A00] flex items-center justify-center mb-8">
                {item.icon}
              </div>
              <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-4">
                {item.title}
              </h3>
              
              <div className="w-6 h-[3px] bg-[#FF6A00] rounded-full mb-4" />
              
              <p className="text-[#6B6B6B] text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-12 pb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]/20" />
        </div>

      </div>
    </section>
  );
}
