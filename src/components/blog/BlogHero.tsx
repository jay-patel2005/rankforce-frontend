'use client';

import React from 'react';

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-50/50 to-white -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-orange-100 text-[#FF6A00] text-sm font-bold tracking-wide uppercase shadow-sm">
          Our Blog
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Latest SEO Strategies and Tips <span className="text-[#FF6A00]">You Need to Know</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Explore our latest blogs and stay updated with actionable SEO strategies, digital marketing insights, and best practices.
        </p>
      </div>
    </section>
  );
}
