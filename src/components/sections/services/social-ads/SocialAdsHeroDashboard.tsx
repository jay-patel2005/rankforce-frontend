'use client';

import React from 'react';
import { motion } from 'framer-motion';

function SocialAdsHeroDashboard() {
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
      title: 'Audience', 
      value: '+14.2k', 
      change: '↑ 18%', 
      color: '#8B5CF6', 
      bg: '#F5F3FF', 
      line: 'purple',
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
      title: 'Engagement', 
      value: '6.4%', 
      change: '↑ 32%', 
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
      title: 'Reach', 
      value: '3.8M', 
      change: '↑ 24%', 
      color: '#0EA5E9', 
      bg: '#F0F9FF', 
      line: 'blue',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    },
    { 
      title: 'Leads', 
      value: '428', 
      change: '↑ 14%', 
      color: '#FF6A00', 
      bg: '#FFF1E6', 
      line: 'orange',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
          <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"></path>
        </svg>
      )
    },
  ];

  const campaigns = [
    { name: 'Instagram Paid Ads', type: 'Conversion', spent: '₹42.5k', roas: '4.2x', conversions: 218, color: '#E1306C' },
    { name: 'LinkedIn B2B', type: 'Lead Gen', spent: '₹18.4k', roas: '2.8x', conversions: 84, color: '#0A66C2' },
    { name: 'Facebook Retargeting', type: 'Traffic', spent: '₹12.1k', roas: '5.1x', conversions: 126, color: '#1877F2' },
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

      <motion.div
        variants={itemVariants}
        className="
          pointer-events-none
          absolute
          bottom-4
          left-[-10px]
          w-16
          h-16
          rounded-full
          bg-[rgba(139,92,246,0.03)]
          border
          border-[rgba(139,92,246,0.1)]
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
                Social Ads Performance
              </div>
              <div className="text-[10px] text-[#718096] truncate">
                Campaigns • Updated Today
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
              border-[#F3E8FF]
              bg-[#FAF5FF]
            "
          >
            <div className="hidden sm:block text-right">
              <div className="text-[10px] font-semibold text-[#344054]">
                Engagement Score
              </div>
              <div className="text-[14px] font-bold text-[#8B5CF6]">
                88.5%
              </div>
            </div>
            <div className="relative w-[36px] h-[36px]">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="21" stroke="#F3E8FF" strokeWidth="4" fill="none" />
                <motion.circle
                  cx="26"
                  cy="26"
                  r="21"
                  stroke="#8B5CF6"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="132"
                  initial={{ strokeDashoffset: 132 }}
                  whileInView={{ strokeDashoffset: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[#8B5CF6]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
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

        {/* ================= CAMPAIGN PERFORMANCE ================= */}
        <div className="px-4 pb-5">
          <motion.div
            variants={itemVariants}
            className="
              rounded-[12px]
              border
              border-[#E8E8E8]
              bg-white
              overflow-hidden
            "
          >
            <div className="px-4 py-3 border-b border-[#EEEEEE] flex items-center justify-between">
              <h3 className="text-[12px] font-bold text-[#172033]">Active Social Campaigns</h3>
              <div className="text-[10px] text-[#718096]">Last 30 Days</div>
            </div>

            <div className="p-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-[9px] font-medium text-[#475467]">Campaign</th>
                    <th className="px-3 py-2 text-[9px] font-medium text-[#475467] text-right">Spend</th>
                    <th className="px-3 py-2 text-[9px] font-medium text-[#475467] text-right">ROAS</th>
                    <th className="px-3 py-2 text-[9px] font-medium text-[#475467] text-right">Convs.</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((camp, idx) => (
                    <tr 
                      key={idx}
                      className="border-b border-[#F9F9F9] last:border-b-0 hover:bg-[#FAFAFA] transition-colors"
                    >
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-2">
                          <span 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ backgroundColor: camp.color }}
                          ></span>
                          <div>
                            <div className="text-[10px] font-semibold text-[#172033]">{camp.name}</div>
                            <div className="text-[8px] text-[#718096]">{camp.type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-[10px] font-semibold text-[#172033] text-right">{camp.spent}</td>
                      <td className="px-3 py-2.5 text-right">
                        <span className="inline-block px-1.5 py-0.5 rounded-[4px] bg-[#ECFDF3] text-[#16A34A] text-[9px] font-bold">
                          {camp.roas}
                        </span>
                      </td>
                      <td className="px-3 py-2.5 text-[10px] font-bold text-[#172033] text-right">{camp.conversions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="px-4 py-3 bg-[#FAFAFA] border-t border-[#EEEEEE] flex items-center justify-between">
              <span className="text-[10px] font-medium text-[#475467]">Average ROAS Across Platforms</span>
              <span className="text-[13px] font-bold text-[#16A34A]">4.1x</span>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </motion.div>
  );
}

export { SocialAdsHeroDashboard };
export default SocialAdsHeroDashboard;
