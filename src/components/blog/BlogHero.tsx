'use client';

import React from 'react';

export default function BlogHero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-[34px] sm:text-[40px] lg:text-[52px] font-extrabold text-[#1A1A1A] tracking-tight leading-[1.15] max-w-4xl mx-auto mb-5">
          Latest SEO Strategies and Tips <br className="hidden sm:block" /><span className="text-[#FF6A00]">You Need to Know</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore our latest blogs and stay updated with actionable SEO strategies, digital marketing insights, and best practices.
        </p>
      </div>
    </section>
  );
}
