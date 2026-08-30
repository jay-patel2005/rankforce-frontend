'use client';

import React from 'react';
import { Plus, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
  order: number;
}

interface FaqBuilderProps {
  faqs: FAQ[];
  onChange: (faqs: FAQ[]) => void;
}

export default function FaqBuilder({ faqs, onChange }: FaqBuilderProps) {
  const handleAddFaq = () => {
    onChange([...faqs, { question: '', answer: '', order: faqs.length }]);
  };

  const handleRemoveFaq = (index: number) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    // Reorder
    onChange(newFaqs.map((faq, i) => ({ ...faq, order: i })));
  };

  const handleMoveFaq = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === faqs.length - 1) return;

    const newFaqs = [...faqs];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Swap
    const temp = newFaqs[index];
    newFaqs[index] = newFaqs[targetIndex];
    newFaqs[targetIndex] = temp;

    // Reorder
    onChange(newFaqs.map((faq, i) => ({ ...faq, order: i })));
  };

  const handleChange = (index: number, field: keyof FAQ, value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index] = { ...newFaqs[index], [field]: value };
    onChange(newFaqs);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-semibold text-gray-900">Frequently Asked Questions</h4>
        <button
          type="button"
          onClick={handleAddFaq}
          className="flex items-center text-sm font-medium text-[#FF6A00] hover:text-[#E65C00]"
        >
          <Plus className="w-4 h-4 mr-1" /> Add FAQ
        </button>
      </div>

      {faqs.length === 0 ? (
        <div className="text-center p-6 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-gray-500 text-sm">
          No FAQs added yet. Click "Add FAQ" to create structured FAQ data for this blog.
        </div>
      ) : (
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg relative group">
              <div className="absolute right-2 top-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => handleMoveFaq(index, 'up')}
                  disabled={index === 0}
                  className="p-1 text-gray-400 hover:text-gray-900 disabled:opacity-30"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveFaq(index, 'down')}
                  disabled={index === faqs.length - 1}
                  className="p-1 text-gray-400 hover:text-gray-900 disabled:opacity-30"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleRemoveFaq(index)}
                  className="p-1 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="pr-10 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Question</label>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => handleChange(index, 'question', e.target.value)}
                    placeholder="E.g. What is Ecommerce SEO?"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#FF6A00] focus:border-[#FF6A00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Answer</label>
                  <textarea
                    value={faq.answer}
                    onChange={(e) => handleChange(index, 'answer', e.target.value)}
                    placeholder="Provide a clear, concise answer..."
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-[#FF6A00] focus:border-[#FF6A00]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
