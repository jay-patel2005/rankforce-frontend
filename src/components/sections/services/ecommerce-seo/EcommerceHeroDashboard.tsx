'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, Search, Star, TrendingUp, MousePointerClick } from 'lucide-react';

export function EcommerceHeroDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative w-full"
    >
      {/* Dashboard Container */}
      <div className="bg-white rounded-[24px] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-[#E5E5E5] p-6 relative z-10">
        
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-6 pb-5 border-b border-[#E5E5E5]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-[10px] bg-[#FFF1E6] flex items-center justify-center text-[#FF6A00]">
              <ShoppingCart size={22} />
            </div>
            <div>
              <h3 className="font-bold text-[#1A1A1A] text-[15px] leading-none mb-1">Store Performance</h3>
              <p className="text-[12px] text-[#9CA3AF] leading-none">Last 30 Days (Organic)</p>
            </div>
          </div>
          <div className="flex gap-1.5 hidden sm:flex">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 gap-4 mb-7">
          <motion.div variants={itemVariants} className="bg-[#FFF8F2] rounded-2xl p-4 border border-[#FFE8D6] transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-3">
              <p className="text-[13px] font-bold text-[#6B6B6B]">Organic Traffic</p>
              <TrendingUp size={16} className="text-[#FF6A00]" />
            </div>
            <p className="text-[24px] font-extrabold text-[#1A1A1A] leading-none mb-1.5">45.2K</p>
            <p className="text-[12px] text-[#16A34A] font-semibold">+12.5% this month</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-[#FFF8F2] rounded-2xl p-4 border border-[#FFE8D6] transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-start mb-3">
              <p className="text-[13px] font-bold text-[#6B6B6B]">Store Revenue</p>
              <Package size={16} className="text-[#FF6A00]" />
            </div>
            <p className="text-[24px] font-extrabold text-[#1A1A1A] leading-none mb-1.5">$128.4K</p>
            <p className="text-[12px] text-[#16A34A] font-semibold">+18.2% this month</p>
          </motion.div>
        </div>

        {/* Product Rankings Section */}
        <div>
          <h4 className="font-bold text-[#1A1A1A] mb-3 text-[14px]">Top Ranking Products</h4>
          <div className="space-y-3">
            
            {/* Product 1 */}
            <motion.div variants={itemVariants} className="flex items-center justify-between p-3 rounded-[12px] border border-[#E5E5E5] hover:border-[#FF6A00]/40 hover:shadow-[0_4px_12px_rgba(255,106,0,0.05)] transition-all group bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F9FAFB] border border-[#E5E5E5] rounded-lg flex items-center justify-center group-hover:bg-[#FFF1E6] group-hover:border-[#FFE8D6] transition-colors shrink-0">
                  <Search size={16} className="text-[#9CA3AF] group-hover:text-[#FF6A00]" />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A] text-[13px]">Wireless Headphones</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#6B6B6B] mt-0.5">
                    <div className="flex items-center gap-0.5">
                      <Star size={10} className="text-[#CA8A04] fill-[#CA8A04]" />
                      <span className="font-semibold text-[#1A1A1A]">4.9</span>
                    </div>
                    <span className="text-[#D1D5DB]">•</span>
                    <span className="truncate max-w-[120px] sm:max-w-full">"best wireless headphones"</span>
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="inline-flex items-center justify-center bg-[#DCFCE7] text-[#16A34A] text-[10px] font-bold px-2 py-1 rounded-md">
                  Pos #1
                </div>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div variants={itemVariants} className="flex items-center justify-between p-3 rounded-[12px] border border-[#E5E5E5] hover:border-[#FF6A00]/40 hover:shadow-[0_4px_12px_rgba(255,106,0,0.05)] transition-all group bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F9FAFB] border border-[#E5E5E5] rounded-lg flex items-center justify-center group-hover:bg-[#FFF1E6] group-hover:border-[#FFE8D6] transition-colors shrink-0">
                  <MousePointerClick size={16} className="text-[#9CA3AF] group-hover:text-[#FF6A00]" />
                </div>
                <div>
                  <p className="font-bold text-[#1A1A1A] text-[13px]">Smart Watch Pro</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#6B6B6B] mt-0.5">
                     <div className="flex items-center gap-0.5">
                      <Star size={10} className="text-[#CA8A04] fill-[#CA8A04]" />
                      <span className="font-semibold text-[#1A1A1A]">4.8</span>
                    </div>
                    <span className="text-[#D1D5DB]">•</span>
                    <span className="truncate max-w-[120px] sm:max-w-full">"smart watch for running"</span>
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="inline-flex items-center justify-center bg-[#DCFCE7] text-[#16A34A] text-[10px] font-bold px-2 py-1 rounded-md">
                  Pos #3
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      
      {/* Floating Element */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5, type: 'spring', stiffness: 100 }}
        className="absolute -right-2 lg:-right-6 -top-4 lg:-top-6 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#E5E5E5] p-3 flex items-center gap-3 z-20"
      >
        <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
          <TrendingUp size={14} className="text-[#16A34A]" />
        </div>
        <div className="pr-1">
          <p className="text-[10px] text-[#6B6B6B] font-bold uppercase tracking-wide leading-none mb-1">Conv. Rate</p>
          <p className="text-[14px] font-extrabold text-[#1A1A1A] leading-none">+3.4%</p>
        </div>
      </motion.div>

    </motion.div>
  );
}
