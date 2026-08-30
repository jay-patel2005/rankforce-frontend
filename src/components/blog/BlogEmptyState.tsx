'use client';

import React from 'react';
import { SearchX } from 'lucide-react';

interface BlogEmptyStateProps {
  category: string;
  onClearFilters: () => void;
}

export default function BlogEmptyState({ category, onClearFilters }: BlogEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <SearchX className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found in {category}</h3>
      <p className="text-gray-500 max-w-md mb-6">
        We're working on bringing you new insights for this topic. Try another category or check back soon.
      </p>
      <button 
        onClick={onClearFilters}
        className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 hover:text-[#FF6A00] hover:border-[#FF6A00] font-semibold rounded-xl transition-colors shadow-sm"
      >
        View All Articles
      </button>
    </div>
  );
}
