'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`blog-faq-answer-${index}`}
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-350 ease-in-out ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            
            <div
              id={`blog-faq-answer-${index}`}
              className="grid transition-[grid-template-rows] duration-350 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 350ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="overflow-hidden min-h-0">
                <div
                  className={`p-4 bg-white border-t border-gray-200 text-gray-700 leading-relaxed transition-all duration-350 ${
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
  );
}
