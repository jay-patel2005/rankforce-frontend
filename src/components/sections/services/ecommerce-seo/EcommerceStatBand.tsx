import React from 'react';
import { ServiceStatBandData } from '@/types/service-page';

export function EcommerceStatBand({ data }: { data: ServiceStatBandData }) {
  // We're adapting the data to fit the requested 4-card layout.
  // Instead of using the 3 metrics and 2 statCards directly as they were in the old layout,
  // we'll combine them to create the 4 stat cards.
  const adaptedCards = [
    { value: data.statCards[0]?.value, label: data.statCards[0]?.label, icon: 'trending' },
    { value: data.statCards[1]?.value, label: data.statCards[1]?.label, icon: 'bar' },
    { value: data.statCards[2]?.value, label: data.statCards[2]?.label, icon: 'users' },
    { value: data.statCards[3]?.value, label: data.statCards[3]?.label, icon: 'target' },
  ];

  return (
    <section className="relative bg-white pt-4 pb-4 lg:pt-8 lg:pb-8 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[5%] opacity-[0.04] scale-150">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Inner Container */}
        <div className="bg-[#FFF8F2] rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-10 shadow-sm border border-[#FFE8D6]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            
            {/* Left Content */}
            <div className="flex flex-col h-full">
              <div className="flex flex-col items-start mb-6">
                <span className="text-[#FF6A00] text-[11px] font-extrabold uppercase tracking-widest mb-2">
                  {data.badge}
                </span>
                <div className="w-8 h-[2px] bg-[#FF6A00]"></div>
              </div>
              
              <h2 className="text-[28px] lg:text-[36px] font-bold text-[#1A1A1A] leading-tight mb-6">
                {data.title}
              </h2>
              
              {data.paragraphs.map((p, i) => (
                <p key={i} className="text-[#4B4B4B] text-[16px] lg:text-[17px] leading-[1.8] mb-6">
                  {p}
                </p>
              ))}

              {/* Quote Block at the bottom */}
              <div className="mt-auto pt-4">
                <div className="bg-[#FFF1E6] rounded-xl p-5 flex gap-4 items-start border border-[#FFE8D6]">
                  <div className="text-[#FF6A00] shrink-0">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="italic text-gray-700 text-sm leading-relaxed font-medium">
                    "E-commerce SEO isn't a one-time task — it's the ongoing groundwork that makes every other organic effort actually pay off."
                  </p>
                </div>
              </div>
            </div>

            {/* Right 4-Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {adaptedCards.map((card, i) => (
                <div key={i} className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white hover:border-[#FF6A00]/20 flex flex-col justify-center items-center text-center transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(255,106,0,0.08)] group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#FFF8F2' }}>
                    {/* Render different icons based on type */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {card.icon === 'trending' && <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>}
                      {card.icon === 'bar' && <>
                        <line x1="12" y1="20" x2="12" y2="10"></line>
                        <line x1="18" y1="20" x2="18" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="16"></line>
                      </>}
                      {card.icon === 'users' && <>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </>}
                      {card.icon === 'target' && <>
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </>}
                    </svg>
                  </div>
                  <div className="text-[28px] lg:text-[32px] font-extrabold text-[#FF6A00] mb-2 leading-none">{card.value}</div>
                  <div className="text-[13px] font-medium text-gray-500 leading-snug">{card.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
