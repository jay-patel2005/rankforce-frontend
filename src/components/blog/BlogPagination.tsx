'use client';

import React from 'react';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({ currentPage, totalPages, onPageChange }: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  // Simple logic for pagination display (assuming few pages for now)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mb-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 h-10 flex items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6B6B6B] hover:text-[#FF6A00] hover:border-[#FF6A00] disabled:opacity-50 disabled:pointer-events-none transition-colors gap-1.5 font-medium text-sm bg-white"
        aria-label="Previous page"
      >
        <span aria-hidden="true">&larr;</span> Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-colors
            ${currentPage === page 
              ? 'bg-[#FF6A00] text-white border border-[#FF6A00]' 
              : 'bg-white border border-[#E5E7EB] text-[#6B6B6B] hover:border-[#FF6A00] hover:text-[#FF6A00]'
            }
          `}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 h-10 flex items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6B6B6B] hover:text-[#FF6A00] hover:border-[#FF6A00] disabled:opacity-50 disabled:pointer-events-none transition-colors gap-1.5 font-medium text-sm bg-white"
        aria-label="Next page"
      >
        Next <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
