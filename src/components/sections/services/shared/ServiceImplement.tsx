import React from 'react';
import { ServiceImplementData } from '@/types/service-page';

export function ServiceImplement({ data }: { data: ServiceImplementData }) {
  return (
    <section 
      className="relative pt-16 pb-10 lg:pt-20 lg:pb-16 overflow-visible bg-[#FFF8F2]"
      style={{ background: 'radial-gradient(circle at 15% 50%, rgba(255, 106, 0, 0.04), transparent 45%), #FFF8F2' }}
    >
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Mobile Layout: Stacked, Left content first */}
        <div className="block lg:hidden mb-10">
          <span className="inline-block bg-[#FFF1E6] text-[#FF6A00] px-3 py-1 rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            {data.badge}
          </span>
          <h2 className="text-[28px] font-bold text-[#1A1A1A] leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-[#6B6B6B] text-[16px] leading-[1.7]">
            {data.description}
          </p>
        </div>

        {/* Desktop Layout: Grid with Sticky Left */}
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN - STICKY (Desktop only) */}
          <div className="hidden lg:block sticky top-32">
            <span className="inline-block bg-[#FFF1E6] text-[#FF6A00] px-3 py-1 rounded-full text-[13px] font-bold uppercase tracking-wide mb-6">
              {data.badge}
            </span>
            <h2 className="text-[36px] font-bold text-[#1A1A1A] leading-tight mb-6 pr-8">
              {data.title}
            </h2>
            <p className="text-[#6B6B6B] text-[17px] leading-[1.8] pr-8">
              {data.description}
            </p>
          </div>

          {/* RIGHT COLUMN - SCROLLING CARDS */}
          <div className="flex flex-col gap-[20px]">
            {data.items.map((card) => (
              <div 
                key={card.id}
                className="group bg-white border border-[#E5E5E5] rounded-[14px] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-all duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#FFF8F3] hover:border-[#FF6A00]/40 hover:-translate-y-[3px] hover:shadow-[0_12px_24px_rgba(255,106,0,0.08)] motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <div className="flex gap-4 items-start">
                  {/* Icon Box */}
                  <div className="w-[46px] h-[46px] shrink-0 rounded-[10px] bg-[#FFF1E6] flex items-center justify-center text-[#FF6A00] font-black text-[1.1rem] transition-all duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#FFE5D0] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:transform-none">
                    {card.icon}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-[1.02rem] font-bold text-[#1A1A1A] mb-[6px]">
                      {card.title}
                    </h3>
                    <p className="text-[0.9rem] text-[#6B6B6B] leading-relaxed mb-0">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
