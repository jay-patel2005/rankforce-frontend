import React from 'react';

export function OnPageSEOImplement() {
  const cards = [
    { icon: 'Aa', title: 'Title Tag Optimization', desc: 'Clickable headline in search results, kept under 60 characters with your keyword near the front.' },
    { icon: '≡', title: 'Meta Description Optimization', desc: 'The short summary under your title tag that directly influences click-through rate.' },
    { icon: 'H', title: 'Header Tag Structure', desc: 'H1–H6 tags organized logically for readers and search engines alike.' },
    { icon: '✎', title: 'Content Optimization', desc: 'Natural keyword placement, real depth, and full alignment with search intent.' },
    { icon: '🔗', title: 'Internal Linking', desc: 'Connecting related pages to spread authority and guide visitors further into your site.' },
    { icon: '🖼', title: 'Image Optimization', desc: 'Descriptive file names, useful alt text, and properly compressed file sizes.' },
    { icon: '/url', title: 'URL Structure', desc: 'Short, descriptive, keyword-friendly URLs that are easy to read and share.' },
    { icon: '{ }', title: 'Schema Markup', desc: 'Structured data that helps search engines display rich, eye-catching results.' },
  ];

  return (
    <section 
      className="relative pt-20 pb-10 lg:pt-28 lg:pb-16 overflow-visible bg-[#FFF8F2]"
      style={{ background: 'radial-gradient(circle at 15% 50%, rgba(255, 106, 0, 0.04), transparent 45%), #FFF8F2' }}
    >
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .seo-glass-cards * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10 seo-glass-cards">
        
        {/* Mobile Layout: Stacked, Left content first */}
        <div className="block lg:hidden mb-12">
          <span className="inline-block bg-[#FFF1E6] text-[#FF6A00] px-3 py-1 rounded-full text-[13px] font-bold uppercase tracking-wide mb-4">
            Types of On-Page SEO
          </span>
          <h2 className="text-[28px] font-bold text-[#1A1A1A] leading-tight mb-4">
            Things We Implement in On-Page SEO
          </h2>
          <p className="text-[#6B6B6B] text-[16px] leading-[1.7]">
            On-page SEO isn't one task — it's a collection of elements working together. Here are the types of on-page SEO covered on every project.
          </p>
        </div>

        {/* Desktop Layout: Grid with Sticky Left */}
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN - STICKY (Desktop only) */}
          <div className="hidden lg:block sticky top-32">
            <span className="inline-block bg-[#FFF1E6] text-[#FF6A00] px-3 py-1 rounded-full text-[13px] font-bold uppercase tracking-wide mb-6">
              Types of On-Page SEO
            </span>
            <h2 className="text-[36px] font-bold text-[#1A1A1A] leading-tight mb-6 pr-8">
              Things We Implement in On-Page SEO
            </h2>
            <p className="text-[#6B6B6B] text-[17px] leading-[1.8] pr-8">
              On-page SEO isn't one task — it's a collection of elements working together. Here are the types of on-page SEO covered on every project.
            </p>
          </div>

          {/* RIGHT COLUMN - SCROLLING CARDS */}
          <div className="flex flex-col gap-[24px]">
            {cards.map((card, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden bg-[rgba(255,255,255,0.55)] backdrop-blur-[14px] rounded-[18px] border border-[rgba(255,106,0,0.12)] shadow-[0_8px_30px_rgba(31,41,55,0.06)] p-6 lg:px-[30px] lg:py-[24px] min-h-[145px] box-border flex gap-6 items-center transition-all duration-300 ease-out hover:-translate-y-[6px] hover:scale-[1.01] hover:border-[rgba(255,106,0,0.30)] hover:bg-[rgba(255,241,230,0.75)] hover:shadow-[0_18px_45px_rgba(255,106,0,0.12)]"
              >
                {/* Subtle Glass Shine Effect */}
                <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.6)] to-transparent -skew-x-12 transition-transform duration-[700ms] ease-out group-hover:translate-x-[150%] pointer-events-none" />

                <div className="w-12 h-12 rounded-[14px] bg-[#FFF1E6] border border-[rgba(255,106,0,0.12)] text-[#FF6A00] flex-shrink-0 flex items-center justify-center font-bold text-lg transition-all duration-300 ease-out group-hover:scale-[1.08] group-hover:bg-[#FFE4CC] z-10">
                  {card.icon}
                </div>
                <div className="z-10">
                  <h3 className="text-[18px] font-bold text-[#1A1A1A] mb-2">{card.title}</h3>
                  <p className="text-[15px] text-[#4B4B4B] leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
