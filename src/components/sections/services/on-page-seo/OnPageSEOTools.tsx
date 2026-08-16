import React from 'react';

export function OnPageSEOTools() {
  const tools = [
    { name: 'Ahrefs', img: '/images/tools/ahrefs-logo.webp' },
    { name: 'ChatGPT', img: '/images/tools/chat-gpt.webp' },
    { name: 'Moz', img: '/images/tools/moz-seo-tools.webp' },
    { name: 'PageSpeed Insights', img: '/images/tools/pagespeed.webp' },
    { name: 'SEMRush', img: '/images/tools/Semrush.webp' },
    { name: 'Claude 6', img: '/images/tools/claude.webp' },
  ];

  return (
    <section className="relative bg-[#FAFAFA] pt-4 pb-10 lg:pt-8 lg:pb-16">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[16px] lg:text-[25px] font-extrabold text-[#FF6A00] tracking-wider">
            Tools We Use For On-Page SEO
          </h2>
          <div className="flex items-center justify-center mt-3 gap-2">
            <div className="w-12 h-[2px] bg-[#FF6A00]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]"></div>
            <div className="w-12 h-[2px] bg-[#FF6A00]"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tools.map((tool, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 lg:p-8 flex items-center justify-center text-center shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,106,0,0.08)] group"
            >
              <div className="w-full h-[50px] lg:h-[60px] flex items-center justify-center">
                <img 
                  src={tool.img} 
                  alt={tool.name} 
                  className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
