import React from 'react';

export function SEOBackgroundDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 
        We use very low opacity orange lines to create the SEO-themed background. 
        Brand orange: #FF6A00
      */}
      
      {/* Top Left: Document/Page icon */}
      <div className="absolute top-[20%] left-[5%] opacity-15 rotate-[-10deg]">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </div>

      {/* Top Left Text/Heading Symbol */}
      <div className="absolute top-[35%] left-[8%] opacity-15">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
      </div>

      {/* Dotted pattern - Top Left */}
      <div className="absolute top-[15%] left-[12%] opacity-10">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={`dot-tl-${i}`} className="w-1 h-1 bg-[#FF6A00] rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Top Center: Code brackets */}
      <div className="absolute top-[12%] left-[45%] opacity-[0.12] scale-150">
        <svg width="60" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="4" opacity="0.3"></rect>
          <polyline points="7 8 3 12 7 16"></polyline>
          <line x1="14" y1="6" x2="10" y2="18"></line>
          <polyline points="17 8 21 12 17 16"></polyline>
        </svg>
      </div>

      {/* Top Center: Search Outline */}
      <div className="absolute top-[15%] left-[55%] opacity-20">
        <div className="w-[180px] h-[30px] rounded-full border border-[#FF6A00] flex items-center px-3 gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <div className="w-12 h-1 bg-[#FF6A00] opacity-30 rounded-full"></div>
        </div>
      </div>
      
      {/* Top Right: KEYWORDS Pill */}
      <div className="absolute top-[14%] right-[10%] opacity-20 hidden lg:flex">
        <div className="px-4 py-1.5 rounded-full border border-[#FF6A00] text-[#FF6A00] text-xs font-bold tracking-widest">
          KEYWORDS
        </div>
      </div>

      {/* Top Right: Browser Outline */}
      <div className="absolute top-[20%] right-[2%] opacity-15 hidden lg:block">
        <svg width="100" height="70" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
          <line x1="2" y1="8" x2="22" y2="8"></line>
          <circle cx="6" cy="6" r="0.5" fill="#FF6A00"></circle>
          <circle cx="8" cy="6" r="0.5" fill="#FF6A00"></circle>
          <circle cx="10" cy="6" r="0.5" fill="#FF6A00"></circle>
        </svg>
      </div>
      
      {/* Bottom Left: Link Chain */}
      <div className="absolute bottom-[20%] left-[8%] opacity-20 rotate-45">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      </div>
      
      {/* Bottom Center: Gear shape */}
      <div className="absolute bottom-[25%] left-[45%] opacity-[0.12] scale-125">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </div>

      {/* Bottom Right: Magnifying Glass + Settings icon */}
      <div className="absolute bottom-[10%] right-[10%] opacity-20 hidden lg:block">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <circle cx="11" cy="11" r="3" fill="#FF6A00" opacity="0.3"></circle>
        </svg>
      </div>

      {/* Dotted pattern - Bottom Right */}
      <div className="absolute bottom-[5%] right-[25%] opacity-10 hidden lg:block">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(12)].map((_, i) => (
            <div key={`dot-br-${i}`} className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Curved connecting line 1 */}
      <div className="absolute top-[30%] left-[25%] opacity-[0.06] hidden lg:block">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
          <path d="M 0,0 C 100,0 100,150 200,150" stroke="#FF6A00" strokeWidth="2" strokeDasharray="4 6"></path>
        </svg>
      </div>

      {/* Curved connecting line 2 */}
      <div className="absolute bottom-[10%] left-[20%] opacity-[0.06] hidden lg:block">
        <svg width="250" height="100" viewBox="0 0 250 100" fill="none">
          <path d="M 0,100 C 100,100 150,0 250,0" stroke="#FF6A00" strokeWidth="2" strokeDasharray="4 6"></path>
        </svg>
      </div>

    </div>
  );
}
