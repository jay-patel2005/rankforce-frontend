'use client';

import React from 'react';
import { motion } from 'framer-motion';

function SocialMediaMarketingHeroDashboard() {
  const containerVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, staggerChildren: 0.08 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const stats = [
    { 
      title: 'Total Reach', 
      value: '1.2M', 
      change: '↑ 24%', 
      color: '#8B5CF6', 
      bg: '#F5F3FF', 
      line: 'purple',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    { 
      title: 'Engagement', 
      value: '4.8%', 
      change: '↑ 12%', 
      color: '#16A34A', 
      bg: '#ECFDF3', 
      line: 'green',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    { 
      title: 'Followers', 
      value: '+3,450', 
      change: '↑ 8%', 
      color: '#0EA5E9', 
      bg: '#F0F9FF', 
      line: 'blue',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      )
    },
    { 
      title: 'Conversions', 
      value: '428', 
      change: '↑ 18%', 
      color: '#FF6A00', 
      bg: '#FFF1E6', 
      line: 'orange',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
  ];

  const platforms = [
    { name: 'Instagram', percentage: 42, color: '#E1306C' },
    { name: 'Facebook', percentage: 28, color: '#1877F2' },
    { name: 'LinkedIn', percentage: 18, color: '#0A66C2' },
    { name: 'TikTok', percentage: 12, color: '#000000' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="
        relative
        w-full
        max-w-[535px]
        mx-auto
        lg:ml-auto
        lg:mr-0
        pt-5
        pb-5
        overflow-visible
      "
    >
      {/* Decorative background shapes */}
      <motion.div
        variants={itemVariants}
        className="
          pointer-events-none
          absolute
          top-2
          right-14
          w-24
          h-24
          rounded-full
          bg-[rgba(255,106,0,0.03)]
          border
          border-[rgba(255,106,0,0.1)]
        "
      />

      {/* Main dashboard */}
      <motion.div
        variants={itemVariants}
        className="
          relative
          w-full
          rounded-[20px]
          border
          border-[#EAEAEA]
          bg-white
          shadow-[0_16px_45px_rgba(0,0,0,0.07)]
          overflow-hidden
        "
      >
        {/* ================= HEADER ================= */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            px-5
            py-4
            border-b
            border-[#EEEEEE]
            bg-gradient-to-r from-[#FFFFFF] to-[#FAFAFA]
          "
        >
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="
                flex-shrink-0
                w-10
                h-10
                rounded-[12px]
                bg-[#FFF1E6]
                flex
                items-center
                justify-center
                text-[#FF6A00]
              "
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>

            <div className="min-w-0">
              <div className="text-[14px] font-bold text-[#172033] truncate">
                Social Media Performance
              </div>
              <div className="text-[10px] text-[#718096] truncate">
                Updated Today · Last 30 Days
              </div>
            </div>
          </div>

          {/* Growth Score */}
          <div
            className="
              flex-shrink-0
              flex
              items-center
              gap-2.5
              px-3
              py-1.5
              rounded-[12px]
              border
              border-[#FFE8D6]
              bg-[#FFF8F3]
            "
          >
            <div className="hidden sm:block text-right">
              <div className="text-[10px] font-semibold text-[#344054]">
                Social Growth
              </div>
              <div className="text-[14px] font-bold text-[#FF6A00]">
                +32.4%
              </div>
            </div>
            <div className="relative w-[36px] h-[36px]">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="21" stroke="#FFE8D6" strokeWidth="4" fill="none" />
                <motion.circle
                  cx="26"
                  cy="26"
                  r="21"
                  stroke="#FF6A00"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="132"
                  initial={{ strokeDashoffset: 132 }}
                  whileInView={{ strokeDashoffset: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[#FF6A00]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATISTICS ================= */}
        <div className="grid grid-cols-4 gap-2.5 px-4 pt-4 pb-4">
          {stats.map((stat, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="
                min-w-0
                rounded-[12px]
                border
                border-[#E8E8E8]
                bg-white
                px-3
                py-3
                shadow-[0_2px_4px_rgba(0,0,0,0.01)]
              "
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <div
                  className="
                    flex-shrink-0
                    w-6
                    h-6
                    rounded-[6px]
                    flex
                    items-center
                    justify-center
                  "
                  style={{ backgroundColor: stat.bg, color: stat.color }}
                >
                  {stat.icon}
                </div>
                <span className="min-w-0 text-[9px] font-medium text-[#475467] truncate">
                  {stat.title}
                </span>
              </div>

              <div className="mt-2 text-[18px] font-bold text-[#172033] truncate">
                {stat.value}
              </div>

              <div className="mt-1 flex items-center gap-1">
                <span className="text-[9px] font-bold" style={{ color: stat.color }}>
                  {stat.change}
                </span>
              </div>

              <div className="mt-2.5 h-[16px]">
                <svg viewBox="0 0 100 25" className="w-full h-full" preserveAspectRatio="none">
                  <motion.polyline
                    points={
                      index % 2 === 0
                        ? '0,20 10,18 20,22 30,15 40,18 50,12 60,14 70,8 80,10 90,4 100,6'
                        : '0,18 10,14 20,16 30,10 40,12 50,8 60,10 70,5 80,7 90,2 100,4'
                    }
                    fill="none"
                    stroke={stat.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + (index * 0.1), ease: 'easeOut' }}
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= CHARTS ================= */}
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-3 px-4 pb-4">
          
          {/* Main Chart area */}
          <motion.div
            variants={itemVariants}
            className="
              rounded-[12px]
              border
              border-[#E8E8E8]
              p-4
              bg-white
            "
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[12px] font-bold text-[#172033]">Audience Growth</h3>
              <div className="flex gap-2">
                <span className="flex items-center gap-1 text-[9px] text-[#475467]">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A00]"></span> Organic
                </span>
                <span className="flex items-center gap-1 text-[9px] text-[#475467]">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span> Paid
                </span>
              </div>
            </div>

            <div className="relative h-[110px] w-full border-b border-l border-[#F0F0F0]">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="border-t border-[#F5F5F5] w-full"></div>
                <div className="border-t border-[#F5F5F5] w-full"></div>
                <div className="border-t border-[#F5F5F5] w-full"></div>
                <div className="border-t border-[#F0F0F0] w-full"></div>
              </div>
              
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Organic Line (Orange) */}
                <motion.path
                  d="M0,80 C10,75 20,60 30,65 C40,70 50,55 60,60 C70,65 80,40 90,45 L100,30"
                  fill="none"
                  stroke="#FF6A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                />
                <motion.circle cx="100" cy="30" r="3" fill="#FF6A00" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 }} />
                
                {/* Paid Line (Purple) */}
                <motion.path
                  d="M0,90 C10,85 20,80 30,70 C40,60 50,50 60,35 C70,20 80,25 90,10 L100,5"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                />
                <motion.circle cx="100" cy="5" r="3" fill="#8B5CF6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.2 }} />
              </svg>
            </div>
            
            <div className="flex justify-between mt-2 text-[9px] text-[#98A2B3]">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </motion.div>

          {/* Platform Breakdown */}
          <motion.div
            variants={itemVariants}
            className="
              rounded-[12px]
              border
              border-[#E8E8E8]
              p-4
              bg-white
              flex
              flex-col
            "
          >
            <h3 className="text-[12px] font-bold text-[#172033] mb-4">Traffic by Platform</h3>
            
            <div className="flex-1 flex flex-col justify-center gap-3.5">
              {platforms.map((platform, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between text-[10px] font-semibold text-[#344054] mb-1">
                    <span>{platform.name}</span>
                    <span>{platform.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#F2F4F7] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: platform.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${platform.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 + (index * 0.1), ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </motion.div>
    </motion.div>
  );
}

export { SocialMediaMarketingHeroDashboard };
export default SocialMediaMarketingHeroDashboard;
