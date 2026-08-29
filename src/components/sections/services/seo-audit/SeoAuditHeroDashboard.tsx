'use client';

import React from 'react';
import { motion } from 'framer-motion';

function SeoAuditHeroDashboard() {
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
      title: 'Total Pages',
      value: '250',
      change: '↑ 18% vs Last Audit',
      color: '#FF6A00',
      bg: '#FFF1E6',
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 4h16v16H4z" />
          <path d="M8 9h8M8 13h6M8 17h4" />
        </svg>
      ),
      line: 'green',
    },
    {
      title: 'Total Issues',
      value: '120',
      change: '↓ 8% vs Last Audit',
      color: '#EF4444',
      bg: '#FFF0F0',
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L22 20H2L12 2Z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
      ),
      line: 'red',
    },
    {
      title: 'Critical Issues',
      value: '8',
      change: '↓ 20% vs Last Audit',
      color: '#EF4444',
      bg: '#FFF0F0',
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v5M12 16h.01" />
        </svg>
      ),
      line: 'red',
    },
    {
      title: 'Warnings',
      value: '24',
      change: '↓ 5% vs Last Audit',
      color: '#FF9800',
      bg: '#FFF7E8',
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L22 20H2L12 2Z" />
          <path d="M12 9v4M12 17h.01" />
        </svg>
      ),
      line: 'orange',
    },
    {
      title: 'Passed Checks',
      value: '196',
      change: '↑ 15% vs Last Audit',
      color: '#16A34A',
      bg: '#ECFDF3',
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l3 3 5-6" />
        </svg>
      ),
      line: 'green',
    },
  ];

  const issues = [
    ['Meta titles are missing or empty', 'Affects 18 pages', '18', 'red'],
    ['Meta descriptions are missing', 'Affects 16 pages', '16', 'red'],
    ['Images missing alt text', 'Affects 24 pages', '24', 'orange'],
    ['Pages have slow load speed', 'Affects 20 pages', '20', 'orange'],
    ['XML sitemap is working', 'No issues found', '0', 'green'],
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
          top-0
          right-10
          w-28
          h-7
          rounded-full
          border
          border-[#FFE8D6]
          bg-[#FFF8F3]
          opacity-80
        "
      />

      <motion.div
        variants={itemVariants}
        className="
          pointer-events-none
          absolute
          bottom-1
          right-20
          w-20
          h-5
          rounded-full
          border
          border-[#FFE8D6]
          opacity-60
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
            px-4
            py-3.5
            border-b
            border-[#EEEEEE]
          "
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div
              className="
                flex-shrink-0
                w-9
                h-9
                rounded-[10px]
                bg-[#FFF1E6]
                flex
                items-center
                justify-center
                text-[#FF6A00]
              "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="14" y2="17" />
              </svg>
            </div>

            <div className="min-w-0">
              <div className="text-[13px] font-bold text-[#172033] truncate">
                SEO Audit Overview
              </div>

              <div className="text-[9px] text-[#718096] truncate">
                Website : yourdomain.com
              </div>
            </div>
          </div>

          {/* Score */}
          <div
            className="
              flex-shrink-0
              flex
              items-center
              gap-2
              px-2.5
              py-1.5
              rounded-[10px]
              border
              border-[#CDEFD9]
              bg-[#F7FFFA]
            "
          >
            <div className="relative w-[43px] h-[43px]">
              <svg
                className="w-full h-full -rotate-90"
                viewBox="0 0 52 52"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="21"
                  stroke="#E5F4EA"
                  strokeWidth="5"
                  fill="none"
                />

                <motion.circle
                  cx="26"
                  cy="26"
                  r="21"
                  stroke="#16A34A"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="132"
                  initial={{ strokeDashoffset: 132 }}
                  whileInView={{ strokeDashoffset: 24 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                />
              </svg>

              <span
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  text-[14px]
                  font-bold
                  text-[#16A34A]
                "
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  82
                </motion.span>
              </span>
            </div>

            <div className="hidden sm:block">
              <div className="text-[9px] text-[#344054]">
                Overall SEO Score
              </div>

              <div className="text-[12px] font-bold text-[#16A34A]">
                Good
              </div>

              <div className="text-[8px] text-[#16A34A]">
                ↑ 12% vs Last Audit
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATISTICS ================= */}
        <div
          className="
            grid
            grid-cols-5
            gap-2
            px-3.5
            pt-3.5
            pb-3
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="
                min-w-0
                rounded-[11px]
                border
                border-[#E8E8E8]
                bg-white
                px-2.5
                py-2.5
              "
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <div
                  className="
                    flex-shrink-0
                    w-7
                    h-7
                    rounded-[8px]
                    flex
                    items-center
                    justify-center
                  "
                  style={{
                    backgroundColor: stat.bg,
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                </div>

                <span
                  className="
                    min-w-0
                    text-[8px]
                    leading-[1.15]
                    text-[#344054]
                  "
                >
                  {stat.title}
                </span>
              </div>

              <div
                className="
                  mt-1.5
                  text-[20px]
                  leading-none
                  font-bold
                  text-[#172033]
                "
              >
                {stat.value}
              </div>

              <div
                className="
                  mt-1.5
                  text-[7px]
                  leading-none
                  whitespace-nowrap
                "
                style={{ color: stat.color }}
              >
                {stat.change}
              </div>

              <div className="mt-2 h-[17px]">
                <svg
                  viewBox="0 0 100 25"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <motion.polyline
                    points={
                      stat.line === 'green'
                        ? '0,20 8,15 15,18 22,12 30,16 38,11 45,14 53,9 61,13 69,8 76,11 84,6 92,9 100,3'
                        : stat.line === 'orange'
                          ? '0,15 8,11 15,13 22,10 30,14 38,12 45,16 53,11 61,14 69,12 76,15 84,11 92,14 100,10'
                          : '0,15 8,12 15,14 22,9 30,13 38,10 45,15 53,11 61,14 69,10 76,14 84,9 92,13 100,10'
                    }
                    fill="none"
                    stroke={stat.color}
                    strokeWidth="2"
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

        {/* ================= BOTTOM CONTENT ================= */}
        <div
          className="
            grid
            grid-cols-2
            gap-2.5
            px-3.5
            pb-3.5
          "
        >
          {/* Issues Breakdown */}
          <motion.div
            variants={itemVariants}
            className="
              min-w-0
              rounded-[12px]
              border
              border-[#E8E8E8]
              p-3
            "
          >
            <h3
              className="
                text-[11px]
                font-bold
                text-[#172033]
              "
            >
              Issues Breakdown
            </h3>

            <div
              className="
                flex
                items-center
                justify-center
                gap-3
                mt-3
              "
            >
              {/* Donut */}
              <div className="relative w-[82px] h-[82px] flex-shrink-0">
                <svg
                  viewBox="0 0 120 120"
                  className="w-full h-full -rotate-90"
                >
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="42"
                    fill="none"
                    stroke="#16A34A"
                    strokeWidth="18"
                    initial={{ strokeDasharray: '0 264' }}
                    whileInView={{ strokeDasharray: '195 264' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                  />

                  <motion.circle
                    cx="60"
                    cy="60"
                    r="42"
                    fill="none"
                    stroke="#FF8A00"
                    strokeWidth="18"
                    strokeDashoffset="-195"
                    initial={{ strokeDasharray: '0 264' }}
                    whileInView={{ strokeDasharray: '53 264' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
                  />

                  <motion.circle
                    cx="60"
                    cy="60"
                    r="42"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="18"
                    strokeDashoffset="-248"
                    initial={{ strokeDasharray: '0 264' }}
                    whileInView={{ strokeDasharray: '16 264' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-[17px] font-bold text-[#172033]"
                  >
                    88
                  </motion.span>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2 text-[8px] min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444] flex-shrink-0" />
                  <span className="text-[#344054] truncate">
                    Critical Issues
                  </span>
                  <span className="font-bold ml-auto">8</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF8A00] flex-shrink-0" />
                  <span className="text-[#344054] truncate">
                    Warnings
                  </span>
                  <span className="font-bold ml-auto">24</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] flex-shrink-0" />
                  <span className="text-[#344054] truncate">
                    Passed Checks
                  </span>
                  <span className="font-bold ml-auto">88</span>
                </div>
              </div>
            </div>

            <div className="mt-2.5 text-[8px] text-[#475467]">
              Total Issues Found :
              <span className="text-[#EF4444] font-bold ml-1">
                120
              </span>
            </div>
          </motion.div>

          {/* Top Issues */}
          <motion.div
            variants={itemVariants}
            className="
              min-w-0
              rounded-[12px]
              border
              border-[#E8E8E8]
              p-3
            "
          >
            <h3
              className="
                text-[11px]
                font-bold
                text-[#172033]
                mb-2.5
              "
            >
              Top Issues
            </h3>

            <div
              className="
                rounded-[9px]
                border
                border-[#EEEEEE]
                overflow-hidden
              "
            >
              {issues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-1.5
                    px-2
                    py-2
                    border-b
                    last:border-b-0
                    border-[#EEEEEE]
                  "
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <div
                      className={`
                        w-6
                        h-6
                        flex-shrink-0
                        rounded-[7px]
                        flex
                        items-center
                        justify-center
                        ${item[3] === 'red'
                          ? 'bg-[#FFF0F0] text-[#EF4444]'
                          : item[3] === 'orange'
                            ? 'bg-[#FFF7E8] text-[#FF9800]'
                            : 'bg-[#ECFDF3] text-[#16A34A]'
                        }
                      `}
                    >
                      {item[3] === 'green' ? (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M8 12l3 3 5-6" />
                        </svg>
                      ) : (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 2L22 20H2L12 2Z" />
                          <path d="M12 9v4M12 17h.01" />
                        </svg>
                      )}
                    </div>

                    <div className="min-w-0">
                      <div
                        className="
                          text-[7.5px]
                          font-semibold
                          text-[#172033]
                          truncate
                        "
                      >
                        {item[0]}
                      </div>

                      <div
                        className="
                          text-[6.5px]
                          text-[#718096]
                          truncate
                        "
                      >
                        {item[1]}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`
                      flex-shrink-0
                      px-1.5
                      py-1
                      rounded-[5px]
                      text-[7px]
                      font-bold
                      ${item[3] === 'red'
                        ? 'bg-[#FFF0F0] text-[#EF4444]'
                        : item[3] === 'orange'
                          ? 'bg-[#FFF7E8] text-[#FF9800]'
                          : 'bg-[#ECFDF3] text-[#16A34A]'
                      }
                    `}
                  >
                    {item[2]}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/*
  Export both ways so either of these imports will work:

  import SeoAuditHeroDashboard from './SeoAuditHeroDashboard';

  OR

  import { SeoAuditHeroDashboard } from './SeoAuditHeroDashboard';
*/
export { SeoAuditHeroDashboard };
export default SeoAuditHeroDashboard;