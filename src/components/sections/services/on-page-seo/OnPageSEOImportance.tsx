import React from 'react';

export function OnPageSEOImportance() {
  return (
    <section className="relative bg-white pt-8 pb-4 lg:pt-14 lg:pb-8 overflow-hidden">
      
      {/* Subtle Background Elements (matching the reference image's faint orange icons) */}
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
            <span className="text-[#FF6A00]">On-Page SEO</span> Services in Ahmedabad
          </h2>
          <div className="flex items-center justify-center mt-6 gap-2">
            <div className="w-16 h-[2px] bg-[#FF6A00]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]"></div>
            <div className="w-16 h-[2px] bg-[#FF6A00]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="max-w-[540px]">
            <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1A1A1A] mb-8 leading-snug">
              What Makes On-Page SEO Important for Your Website?
            </h3>
            <p className="text-[17px] text-[#4B4B4B] leading-[1.8] mb-6 text-justify">
              On-page SEO refers to everything you can optimize directly on your website's pages to help them rank higher and attract the right visitors — your title tag, headings, keyword usage, internal links, images, and overall page experience.
            </p>
            <p className="text-[17px] text-[#4B4B4B] leading-[1.8] mb-6 text-justify">
              It's different from off-page SEO (backlinks, mentions) and technical SEO (speed, crawlability). On-page SEO is the part fully within your control, and it's the foundation everything else is built on. Get it right, and search engines can clearly understand and reward your content.
            </p>
            <p className="text-[17px] text-[#4B4B4B] leading-[1.8] text-justify">
              This is exactly why on-page SEO deserves priority — without it, even the best off-page campaigns struggle to hold rankings long-term.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center">
            <img src="/images/on-page-seo-diagram.webp" alt="On Page SEO Diagram" className="w-full max-w-[500px] h-auto" />
          </div>

        </div>
      </div>
    </section>
  );
}
