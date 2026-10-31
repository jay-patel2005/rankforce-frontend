"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ServiceFaqData } from '@/types/service-page';

export function ServiceFaq({ data }: { data: ServiceFaqData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF8F3] pt-4 pb-6 lg:pt-6 lg:pb-8">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-left mb-10 max-w-[900px] mx-auto">
          <span className="inline-block bg-[#FFF1E6] text-[#FF6A00] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-[#FFE8D6]">
            {data.badge}
          </span>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#1A1A1A] leading-tight mb-4">
            {data.titleHtml}
          </h2>
        </div>

        {/* ACCORDION */}
        <div className="flex flex-col gap-[16px] max-w-[900px] mx-auto">
          {data.items.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={faq.id}
                className="group bg-[rgba(255,255,255,0.70)] backdrop-blur-[12px] border border-[rgba(255,106,0,0.10)] rounded-[16px] shadow-[0_4px_20px_rgba(31,41,55,0.03)] transition-all duration-300 hover:border-[rgba(255,106,0,0.25)] hover:bg-[rgba(255,255,255,0.95)] hover:-translate-y-[2px]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-[17px] md:text-[18px] font-semibold text-[#1A1A1A] pr-4 transition-colors duration-200 group-hover:text-[#FF6A00]">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#FF6A00] flex-shrink-0 transition-transform duration-350 ease-in-out ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className="grid transition-[grid-template-rows] duration-350 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 350ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div className="overflow-hidden min-h-0">
                    <div
                      className={`px-6 md:px-8 pb-6 md:pb-8 pt-0 text-[16px] leading-[1.7] text-[#4B4B4B] transition-all duration-350 ${
                        isOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                      style={{
                        transitionProperty: "opacity, transform",
                        transitionDuration: "350ms",
                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
