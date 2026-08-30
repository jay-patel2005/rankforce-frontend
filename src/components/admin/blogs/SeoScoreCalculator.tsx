'use client';

import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, ChevronDown, ChevronUp, Globe } from 'lucide-react';
import { SeoScoreData, calculateSeoScore, SeoCategory } from '@/lib/seoCalculator';

interface SeoScoreCalculatorProps {
  data: SeoScoreData;
}

export default function SeoScoreCalculator({ data }: SeoScoreCalculatorProps) {
  const { score, categories } = calculateSeoScore(data);
  const [expandedCats, setExpandedCats] = useState<string[]>(['PRIMARY KEYWORD']); // Open primary keyword by default

  const toggleCategory = (name: string) => {
    setExpandedCats(prev => 
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  };

  const getScoreStatus = () => {
    if (score >= 85) return { text: 'Excellent', color: 'text-green-600', ring: 'stroke-green-500', bg: 'bg-green-50' };
    if (score >= 70) return { text: 'Good', color: 'text-emerald-600', ring: 'stroke-emerald-500', bg: 'bg-emerald-50' };
    if (score >= 50) return { text: 'Needs Improvement', color: 'text-yellow-600', ring: 'stroke-yellow-500', bg: 'bg-yellow-50' };
    return { text: 'Poor', color: 'text-red-600', ring: 'stroke-red-500', bg: 'bg-red-50' };
  };

  const status = getScoreStatus();
  
  // SVG Circle props
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
      
      {/* Header & Score Ring */}
      <div className="p-5 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">RankForce SEO Score</h3>
          <p className={`text-sm font-medium mt-1 ${status.color}`}>{status.text}</p>
        </div>
        
        {/* Circular Progress Indicator */}
        <div className="relative flex items-center justify-center">
          <svg className="w-20 h-20 transform -rotate-90">
            <circle
              className="stroke-gray-200"
              strokeWidth="6"
              fill="transparent"
              r={radius}
              cx="40"
              cy="40"
            />
            <circle
              className={`${status.ring} transition-all duration-1000 ease-out`}
              strokeWidth="6"
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="40"
              cy="40"
              style={{ strokeDasharray: circumference, strokeDashoffset }}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className={`text-xl font-bold ${status.color}`}>{score}</span>
            <span className="text-[10px] font-semibold text-gray-400 -mt-1">/100</span>
          </div>
        </div>
      </div>

      {/* Google Search Preview */}
      <div className="p-5 border-b border-gray-200 bg-white">
        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
          <Globe className="w-3 h-3 mr-1" /> Google Search Preview
        </h4>
        <div className="bg-white">
          <div className="text-sm text-[#202124] flex items-center mb-1">
            <span className="truncate">{data.canonicalUrl || `https://rankforce.in/blog/${data.slug || 'example-slug'}`}</span>
          </div>
          <div className="text-xl text-[#1a0dab] font-normal hover:underline cursor-pointer truncate mb-1">
            {data.seoTitle || data.title || 'Please enter an SEO title'}
          </div>
          <div className="text-sm text-[#4d5156] line-clamp-2">
            {data.metaDescription || data.excerpt || 'Please enter a meta description to see how this page will appear in search engine results.'}
          </div>
        </div>
      </div>
      
      {/* Accordion Categories */}
      <div className="overflow-y-auto max-h-[600px] flex-grow bg-gray-50/50">
        {categories.map((category: SeoCategory, idx) => {
          const isExpanded = expandedCats.includes(category.name);
          const errors = category.recommendations.filter(r => !r.passed && !r.warning).length;
          const warnings = category.recommendations.filter(r => !r.passed && r.warning).length;
          
          return (
            <div key={idx} className="border-b border-gray-100 last:border-0">
              <button 
                onClick={() => toggleCategory(category.name)}
                className="w-full px-5 py-3 flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-700 tracking-wide">{category.name}</span>
                  <div className="flex items-center gap-1.5">
                    {errors > 0 ? (
                      <span className="px-1.5 py-0.5 rounded-md bg-red-100 text-red-700 text-[10px] font-bold">{errors} Err</span>
                    ) : null}
                    {warnings > 0 ? (
                      <span className="px-1.5 py-0.5 rounded-md bg-yellow-100 text-yellow-700 text-[10px] font-bold">{warnings} Warn</span>
                    ) : null}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-400">{category.score}/{category.maxScore}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </div>
              </button>
              
              {isExpanded && (
                <div className="px-5 pb-4 bg-white">
                  <ul className="space-y-3 pt-2">
                    {category.recommendations.map((rec, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        {rec.passed ? (
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : rec.warning ? (
                          <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-xs leading-tight ${rec.passed ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                          {rec.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
