import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function GlobalCTA() {
  return (
    <section className="w-full flex justify-center py-12 lg:py-16 bg-[#FFF8F2]">
      <div className="group relative w-[calc(100%-48px)] max-w-[1050px] mx-auto overflow-hidden rounded-[32px] border border-[#FF6A00]/15 bg-white/50 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.02)] px-6 py-10 lg:py-12 text-center transition-all duration-500 hover:shadow-[0_12px_40px_rgba(255,106,0,0.06)]">
        
        {/* Subtle Radial Glows for Premium Vibe */}
        <div className="absolute top-[-30%] left-[-15%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.07)_0%,transparent_70%)] transition-transform duration-700 ease-out group-hover:translate-x-8 group-hover:translate-y-4 pointer-events-none" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(255,106,0,0.05)_0%,transparent_70%)] transition-transform duration-700 ease-out group-hover:-translate-x-8 group-hover:-translate-y-4 pointer-events-none" />

        {/* Minimal Abstract Communication Elements (Lines & Nodes) */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05] transition-opacity duration-500 group-hover:opacity-[0.08]" 
          viewBox="0 0 1200 400" 
          preserveAspectRatio="xMidYMid slice" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Signal / Connection Waves */}
          <path d="M-100,200 C150,320 350,80 600,200 C850,320 1050,80 1300,200" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeDasharray="6 8" />
          <path d="M-100,100 C200,20 400,380 700,250 C1000,120 1100,280 1300,150" fill="none" stroke="#FF6A00" strokeWidth="1" opacity="0.6" />
          
          {/* Active Nodes */}
          <circle cx="150" cy="200" r="4" fill="#FF6A00" />
          <circle cx="150" cy="200" r="14" fill="none" stroke="#FF6A00" strokeWidth="1.5" opacity="0.4" />
          
          <circle cx="600" cy="200" r="5" fill="#FF6A00" />
          <circle cx="600" cy="200" r="18" fill="none" stroke="#FF6A00" strokeWidth="1.5" opacity="0.3" />

          <circle cx="950" cy="185" r="3.5" fill="#FF6A00" />
          <circle cx="950" cy="185" r="12" fill="none" stroke="#FF6A00" strokeWidth="1" opacity="0.5" />

          {/* Floating Data Dots */}
          <circle cx="320" cy="120" r="2" fill="#FF6A00" />
          <circle cx="820" cy="320" r="2.5" fill="#FF6A00" />
          <circle cx="480" cy="340" r="1.5" fill="#FF6A00" />
          <circle cx="1080" cy="140" r="2" fill="#FF6A00" />
        </svg>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center max-w-[650px] mx-auto">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-[#FF6A00]/10 text-[#E65C00] text-[12px] font-bold tracking-wider uppercase backdrop-blur-sm">
            Free Consultation
          </span>

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-bold text-[#111111] leading-[1.2] mb-5">
            Get a Free Consultation for <br className="hidden sm:block" /> Your Digital Growth
          </h2>

          {/* Description */}
          <p className="text-[16px] sm:text-[17px] text-[#667085] leading-relaxed mb-8 max-w-[560px]">
            Share your website details and our team will review your requirements and recommend the right strategy for your business.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group/btn relative inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-8 h-[52px] text-[16px] font-bold text-white shadow-[0_4px_12px_rgba(255,106,0,0.2)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(255,106,0,0.35)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request a Callback
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </span>
            {/* Subtle Shine Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}
