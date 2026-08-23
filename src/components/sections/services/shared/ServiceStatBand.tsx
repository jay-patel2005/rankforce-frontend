import React from 'react';
import { ServiceStatBandData } from '@/types/service-page';

// Icon map for stat cards — renders from the icon string in data
function StatCardIcon({ icon }: { icon?: string }) {
  if (!icon) return null;
  if (icon === 'users') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
  if (icon === 'target') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
  if (icon === 'trending') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
  if (icon === 'bar') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
  return null;
}

export function ServiceStatBand({ data }: { data: ServiceStatBandData }) {
  return (
    <section className="relative bg-white pt-4 pb-4 lg:pt-8 lg:pb-8 overflow-hidden">

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">

        {/* Main Inner Container — cream rounded box */}
        <div className="bg-[#FFF8F2] rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-10 shadow-sm border border-[#FFE8D6]">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">

            {/* LEFT: Badge + Title + Paragraphs + optional metrics */}
            <div className="flex flex-col">
              {data.badge && (
                <div className="flex flex-col items-start mb-5">
                  <span className="text-[#FF6A00] text-[11px] font-extrabold uppercase tracking-widest mb-2">
                    {data.badge}
                  </span>
                  <div className="w-8 h-[2px] bg-[#FF6A00]" />
                </div>
              )}

              <h2 className="text-[26px] lg:text-[34px] font-bold text-[#1A1A1A] leading-tight mb-5">
                {data.title}
              </h2>

              {data.paragraphs.map((p, i) => (
                <p key={i} className="text-[#4B4B4B] text-[15px] lg:text-[16px] leading-[1.8] mb-4">
                  {p}
                </p>
              ))}

              {/* Optional bullet metrics */}
              {data.metrics && data.metrics.length > 0 && (
                <div className="flex flex-col gap-3 mt-4">
                  {data.metrics.map((m, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="text-[#FF6A00] mt-0.5 shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <strong className="text-[#1A1A1A]">{m.value}</strong>
                        <span className="text-[#6B6B6B] ml-2 text-[15px]">{m.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Stat cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {data.statCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[20px] p-5 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-white hover:border-[#FF6A00]/20 flex flex-col justify-center items-center text-center transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(255,106,0,0.08)] group"
                >
                  {/* Icon (if provided) */}
                  {card.icon && (
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 text-[#FF6A00] transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: card.highlightColor || '#FFF1E6' }}
                    >
                      <StatCardIcon icon={card.icon} />
                    </div>
                  )}
                  <div className="text-[30px] lg:text-[34px] font-extrabold text-[#FF6A00] mb-1.5 leading-none">
                    {card.value}
                  </div>
                  <div className="text-[13px] font-medium text-gray-500 leading-snug">
                    {card.label}
                  </div>
                  {card.subLabel && (
                    <div className="text-[11px] text-gray-400 mt-1">{card.subLabel}</div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Quote block — Full width bottom placement */}
          {data.quote && (
            <div className="mt-8 lg:mt-12">
              <div className="bg-[#FFF1E6]/70 rounded-2xl lg:rounded-[20px] p-6 lg:px-8 lg:py-6 flex gap-4 lg:gap-5 items-start border border-[#FF6A00]/10">
                <div className="text-[#FF6A00] shrink-0 text-[40px] lg:text-[46px] font-black leading-none pt-1 lg:pt-2">"</div>
                <p className="italic text-[#555] text-[15px] lg:text-[17px] leading-[1.8] font-medium m-0 pt-2 lg:pt-3 pr-2 lg:pr-8">
                  {data.quote}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
