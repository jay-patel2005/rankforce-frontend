import React from 'react';

export function OnPageSEOStatBand() {
  return (
    <section className="relative bg-white pt-4 pb-4 lg:pt-8 lg:pb-8 overflow-hidden">
      {/* Subtle Background Elements (matching the reference) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[5%] opacity-[0.04] scale-150">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        
        <div className="absolute top-[10%] left-[10%] opacity-[0.05]">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={`dot-tl-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]"></div>
            ))}
          </div>
        </div>

        <div className="absolute top-[25%] right-[5%] opacity-[0.05]">
           <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={`dot-tr-${i}`} className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]"></div>
            ))}
          </div>
        </div>

        <div className="absolute top-[15%] right-[12%] opacity-[0.04] scale-150">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        </div>

        <div className="absolute bottom-[20%] right-[10%] opacity-[0.04] scale-[2]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Inner Container */}
        <div className="bg-[#FFF8F2] rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-10 shadow-sm border border-[#FFE8D6]">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="flex flex-col items-start mb-6">
                <span className="text-[#FF6A00] text-[11px] font-extrabold uppercase tracking-widest mb-2">
                  Why We Focus On It
                </span>
                <div className="w-8 h-[2px] bg-[#FF6A00]"></div>
              </div>
              
              <h2 className="text-[28px] lg:text-[36px] font-bold text-[#1A1A1A] leading-tight mb-6">
                Why On-Page SEO Still Matters in 2026
              </h2>
              
              <p className="text-[#6B6B6B] text-[16px] leading-[1.7]">
                Search engines have gotten smarter, but they still rely heavily on well-optimized pages to understand relevance, intent, and trustworthiness.
              </p>
            </div>

            {/* Right Stat Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-5 lg:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-white transition-all hover:border-[#FFE8D6] hover:shadow-[0_8px_30px_rgba(255,106,0,0.06)]">
                <div className="w-12 h-12 rounded-xl bg-[#FFF1E6] text-[#FF6A00] flex items-center justify-center mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <div className="text-[34px] font-extrabold text-[#FF6A00] leading-none mb-1">+18%</div>
                <div className="text-[13px] font-medium text-[#4B4B4B]">Avg. organic traffic growth</div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-5 lg:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-white transition-all hover:border-[#FFE8D6] hover:shadow-[0_8px_30px_rgba(255,106,0,0.06)]">
                <div className="w-12 h-12 rounded-xl bg-[#FFF1E6] text-[#FF6A00] flex items-center justify-center mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <div className="text-[34px] font-extrabold text-[#FF6A00] leading-none mb-1">+24</div>
                <div className="text-[13px] font-medium text-[#4B4B4B]">Keywords moved to page 1</div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-5 lg:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-white transition-all hover:border-[#FFE8D6] hover:shadow-[0_8px_30px_rgba(255,106,0,0.06)]">
                <div className="w-12 h-12 rounded-xl bg-[#FFF1E6] text-[#FF6A00] flex items-center justify-center mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="text-[34px] font-extrabold text-[#FF6A00] leading-none mb-1">+9%</div>
                <div className="text-[13px] font-medium text-[#4B4B4B]">Monthly lead growth</div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-3xl p-5 lg:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-white transition-all hover:border-[#FFE8D6] hover:shadow-[0_8px_30px_rgba(255,106,0,0.06)]">
                <div className="w-12 h-12 rounded-xl bg-[#FFF1E6] text-[#FF6A00] flex items-center justify-center mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div className="text-[34px] font-extrabold text-[#FF6A00] leading-none mb-1">98%</div>
                <div className="text-[13px] font-medium text-[#4B4B4B]">Client satisfaction rate</div>
              </div>
              
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="mt-8 lg:mt-10 bg-[#FFF2E8] border border-[#FFE8D6] rounded-2xl lg:rounded-3xl p-5 lg:p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="text-[#FF6A00] flex-shrink-0">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="italic text-[16px] lg:text-[18px] text-[#4B4B4B] leading-relaxed text-center md:text-left">
              "On-page SEO isn't a one-time task — it's the ongoing groundwork that makes every other SEO effort actually pay off."
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
