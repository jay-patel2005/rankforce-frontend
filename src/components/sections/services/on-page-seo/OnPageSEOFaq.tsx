"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer: "On-page SEO covers everything you control directly on your website — content, tags, structure. Off-page SEO covers external signals like backlinks and mentions.",
  },
  {
    question: "How long does on-page SEO take to show results?",
    answer: "Most sites see measurable movement within 4–8 weeks, though competitive keywords can take longer.",
  },
  {
    question: "Can I do on-page SEO myself, or do I need on-page SEO services?",
    answer: "You can start with the checklist above yourself. But if you want faster, more consistent results, professional on-page SEO services are usually worth it.",
  },
  {
    question: "What on-page SEO strategies should I prioritize first?",
    answer: "Start with title tags, header structure, and matching content to search intent — these on-page SEO strategies typically produce the fastest visible movement.",
  },
  {
    question: "How often should I check on-page SEO?",
    answer: "Ideally once a quarter, or whenever you publish new content or notice a ranking drop.",
  },
];

export function OnPageSEOFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF8F3] pt-4 pb-6 lg:pt-6 lg:pb-8">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-left mb-10 max-w-[900px] mx-auto">
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#1A1A1A] leading-tight mb-4">
            Frequently Asked On-Page SEO Questions
          </h2>
          <p className="text-[#6B6B6B] text-[17px] max-w-2xl">
            Everything you need to know about on-page SEO, answered simply.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="flex flex-col gap-[16px] max-w-[900px] mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="group bg-[rgba(255,255,255,0.70)] backdrop-blur-[12px] border border-[rgba(255,106,0,0.10)] rounded-[16px] shadow-[0_4px_20px_rgba(31,41,55,0.03)] transition-all duration-300 hover:border-[rgba(255,106,0,0.25)] hover:bg-[rgba(255,255,255,0.95)] hover:-translate-y-[2px]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-[17px] md:text-[18px] font-semibold text-[#1A1A1A] pr-4 transition-colors duration-200 group-hover:text-[#FF6A00]">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#FF6A00] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-[16px] leading-[1.7] text-[#4B4B4B]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
