"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Placeholder Client 1",
    role: "CEO, Tech Startup",
    text: "Our on-page SEO was a mess before this — now every page actually targets the right intent.",
    image: "https://ui-avatars.com/api/?name=Client+1&background=FF6A00&color=fff",
  },
  {
    id: 2,
    name: "Placeholder Client 2",
    role: "Founder, Local Business",
    text: "The on-page SEO audit alone uncovered issues we didn't know existed for years.",
    image: "https://ui-avatars.com/api/?name=Client+2&background=FF6A00&color=fff",
  },
  {
    id: 3,
    name: "Placeholder Client 3",
    role: "Marketing Director",
    text: "Clear on-page SEO strategies, honest reporting, and steady organic growth every month.",
    image: "https://ui-avatars.com/api/?name=Client+3&background=FF6A00&color=fff",
  },
];

export function OnPageSEOTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full pt-4 pb-6 lg:pt-6 lg:pb-8 bg-[#FFF8F3] overflow-hidden">
      
      {/* Decorative dots background */}
      <div className="absolute top-[20%] left-[5%] grid grid-cols-4 gap-2 opacity-10 pointer-events-none">
        {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full" />)}
      </div>
      <div className="absolute bottom-[20%] right-[5%] grid grid-cols-4 gap-2 opacity-10 pointer-events-none">
        {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full" />)}
      </div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-4 flex flex-col items-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#111111] leading-[1.2] mb-4">
            Loved by On-Page SEO Clients
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#667085] max-w-[600px]">
            Real results. Real stories. See what our clients say about our on-page SEO services.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-[1000px] mx-auto">
          
          {/* Viewport */}
          <div className="overflow-hidden px-4 py-6" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t) => (
                <div 
                  key={t.id} 
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#FF6A00]/10 h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,106,0,0.08)]">
                    
                    {/* Quote Icon */}
                    <div className="w-10 h-10 rounded-full bg-[#FFF0E4] text-[#FF6A00] flex items-center justify-center mb-6">
                      <Quote size={20} fill="currentColor" />
                    </div>
                    
                    {/* Text */}
                    <p className="text-[16px] text-[#4B4B4B] leading-relaxed mb-6 flex-grow font-medium">
                      "{t.text}"
                    </p>
                    
                    {/* Divider */}
                    <div className="w-8 h-[2px] bg-[#FF6A00] rounded-full mb-6" />
                    
                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <img 
                        src={t.image} 
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FFF0E4]"
                      />
                      <div>
                        <div className="font-bold text-[#111111] text-[15px]">{t.name}</div>
                        <div className="text-[13px] text-[#667085]">{t.role}</div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#FFF0E4] text-[#FF6A00] transition-colors hover:bg-[#FF6A00] hover:text-white shadow-sm"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#FFF0E4] text-[#FF6A00] transition-colors hover:bg-[#FF6A00] hover:text-white shadow-sm"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-[#FF6A00] w-6' 
                  : 'bg-[#FF6A00]/20 hover:bg-[#FF6A00]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-transparent border-[1.5px] border-[#FF6A00] px-8 h-[52px] text-[16px] font-bold text-[#FF6A00] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#FF6A00] hover:text-white"
          >
            View All Reviews
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
