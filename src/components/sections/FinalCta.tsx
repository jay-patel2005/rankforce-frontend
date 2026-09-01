"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-8 lg:py-12 w-full flex justify-center bg-white">
      {/* Container */}
      <div className="relative mx-auto w-[calc(100%-32px)] sm:w-[calc(100%-48px)] max-w-[1500px] overflow-hidden rounded-[24px] lg:rounded-[28px] bg-[linear-gradient(110deg,#FFE4D5_0%,#FFF9F6_35%,#FFFFFF_65%,#F3EEFF_100%)] shadow-[0_4px_24px_rgba(0,0,0,0.03)] px-5 pt-[45px] pb-[40px] lg:pt-[50px] lg:pb-[45px] text-center border border-white/60">

        {/* --- DECORATIVE ELEMENTS --- */}

        {/* Top Right Dots */}
        <div className="absolute top-6 right-6 hidden lg:block opacity-40 z-0">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-tr" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#FFB380" />
            </pattern>
            <rect width="72" height="72" fill="url(#dots-tr)" />
          </svg>
        </div>

        {/* Bottom Left Dots */}
        <div className="absolute bottom-6 left-6 hidden lg:block opacity-40 z-0">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-bl" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#FFB380" />
            </pattern>
            <rect width="72" height="72" fill="url(#dots-bl)" />
          </svg>
        </div>

        {/* Bottom Right Wave/Gradient Accent */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[200px] hidden lg:block z-0 opacity-70 pointer-events-none">
          <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
            <path d="M 0 200 Q 150 50 300 0 L 300 200 Z" fill="url(#grad-wave)" />
            <path d="M 0 200 Q 150 50 300 0" stroke="#FF7A00" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.3" />
            <defs>
              <linearGradient id="grad-wave" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#E91E63" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#F3EEFF" stopOpacity="0.0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Left Circular Graphic (Target) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[8%] hidden xl:flex items-center justify-center w-[120px] h-[120px] z-0 pointer-events-none">
          {/* Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-[#FFD5B8]/60 scale-[1.3]" />
          <div className="absolute inset-0 rounded-full border border-[#FFD5B8]/30 scale-[1.8]" />
          <div className="absolute inset-0 rounded-full border border-[#FFD5B8]/10 scale-[2.3]" />
          {/* Accent Dot */}
          <div className="absolute top-[10%] -right-[15%] w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />

          {/* Center Icon */}
          <div className="relative flex items-center justify-center w-[85px] h-[85px] rounded-full bg-white shadow-[0_8px_30px_rgba(255,122,0,0.12)] z-10">
            <Target className="text-[#FF7A00]" size={38} strokeWidth={2} />
          </div>
        </div>

        {/* Right Circular Graphic (Analytics) */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[8%] hidden xl:flex items-center justify-center w-[120px] h-[120px] z-0 pointer-events-none">
          {/* Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-[#FFD5B8]/60 scale-[1.3]" />
          <div className="absolute inset-0 rounded-full border border-[#FFD5B8]/30 scale-[1.8]" />
          <div className="absolute inset-0 rounded-full border border-[#FFD5B8]/10 scale-[2.3]" />
          {/* Accent Dot */}
          <div className="absolute bottom-[10%] -left-[15%] w-2.5 h-2.5 rounded-full bg-[#FF7A00]" />

          {/* Center Icon */}
          <div className="relative flex items-center justify-center w-[85px] h-[85px] rounded-full bg-white shadow-[0_8px_30px_rgba(255,122,0,0.12)] z-10">
            <TrendingUp className="text-[#FF7A00]" size={38} strokeWidth={2} />
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-[16px] inline-flex items-center gap-2 rounded-full bg-[#FFF0E5] border border-[#FFD5B8]/80 px-[16px] py-[8px] text-[14px] sm:text-[14.5px] font-semibold text-[#FF5A00]"
          >
            <TrendingUp size={16} strokeWidth={2.5} />
            Performance That Drives Growth
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] font-extrabold tracking-tight text-[#0f172a] leading-[1.08] mb-[16px] max-w-[800px]"
          >
            Results You Feel.<br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#FF7A00,#FF4D2E,#E91E63)]"> ROI</span> You See.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[650px] lg:max-w-[700px] text-[16px] sm:text-[18px] text-[#475569] leading-[1.5] mb-[24px]"
          >
            Stop losing customers to your competitors. Partner with a dedicated <strong>SEO company in Ahmedabad</strong> that treats your growth like it&apos;s my own.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-[12px] bg-[linear-gradient(90deg,#FF7A00,#FF4D2E,#F7255E)] px-[32px] h-[52px] text-[16px] sm:text-[17px] font-bold text-white shadow-[0_4px_14px_rgba(255,77,46,0.25)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(255,77,46,0.4)]"
            >
              Connect With Me
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
