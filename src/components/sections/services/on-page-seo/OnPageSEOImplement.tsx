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
    <section className="relative bg-[#FFF8F2] py-20 lg:py-28 overflow-visible">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        
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
          <div className="flex flex-col gap-6">
            {cards.map((card, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 lg:p-8 flex gap-6 items-start shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#E5E5E5] hover:border-[#FFE8D6] hover:shadow-[0_8px_30px_rgba(255,106,0,0.06)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF1E6] text-[#FF6A00] flex-shrink-0 flex items-center justify-center font-bold text-lg">
                  {card.icon}
                </div>
                <div>
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
