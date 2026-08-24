'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Star,
  TrendingUp,
  Phone,
  MousePointerClick,
  Search,
} from 'lucide-react';

// ─── Mini SVG Sparkline ─────────────────────────────────────────────────────
function MiniChart() {
  const points: [number, number][] = [
    [0, 28], [8, 22], [16, 24], [24, 16], [32, 18], [40, 10], [48, 12], [56, 6], [64, 8], [72, 2],
  ];

  const pathD = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ');
  const fillD =
    `M${points[0][0]},30 ` +
    points.map(([x, y]) => `L${x},${y}`).join(' ') +
    ` L${points[points.length - 1][0]},30 Z`;

  return (
    <svg width="100%" height="28" viewBox="0 0 72 32" preserveAspectRatio="none" fill="none" className="mt-1.5">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillD} fill="url(#chartGrad)" />
      <path d={pathD} stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="72" cy="2" r="2.5" fill="#FF6A00" />
    </svg>
  );
}

// ─── 3D Store Illustration ────────────────────────────────────────────────────
function LocalBizIllustration() {
  return (
    <svg viewBox="0 0 160 185" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Ground shadow */}
      <ellipse cx="80" cy="168" rx="52" ry="7" fill="#FF6A00" fillOpacity="0.07" />

      {/* Building body */}
      <rect x="30" y="88" width="100" height="72" rx="3" fill="#F5F5F5" />
      {/* Side depth */}
      <polygon points="30,88 16,100 16,157 30,157" fill="#E0E0E0" />
      {/* Top face */}
      <polygon points="30,88 130,88 144,76 44,76" fill="#FFFFFF" />

      {/* Awning base */}
      <rect x="30" y="88" width="100" height="20" fill="#FF6A00" />
      {/* Awning stripes */}
      {[42, 58, 74, 90, 106, 122].map((x, i) => (
        <rect key={i} x={x} y={88} width={10} height={20} fill="white" fillOpacity={0.3} />
      ))}
      {/* Awning fringe */}
      {Array.from({ length: 11 }, (_, i) => 30 + i * 10).map((x, i) => (
        <polygon key={i} points={`${x},108 ${x + 5},115 ${x + 10},108`} fill="#FF6A00" />
      ))}

      {/* Door */}
      <rect x="70" y="123" width="22" height="37" rx="3" fill="#CBD5E1" />
      <rect x="73" y="127" width="6.5" height="15" rx="1.5" fill="#94A3B8" />
      <rect x="82" y="127" width="6.5" height="15" rx="1.5" fill="#94A3B8" />
      <circle cx="80" cy="143" r="1.5" fill="#64748B" />

      {/* Windows */}
      <rect x="35" y="98" width="24" height="17" rx="2" fill="#BAE6FD" fillOpacity="0.65" />
      <line x1="47" y1="98" x2="47" y2="115" stroke="#7DD3FC" strokeOpacity="0.4" strokeWidth="1" />

      <rect x="101" y="98" width="24" height="17" rx="2" fill="#BAE6FD" fillOpacity="0.65" />
      <line x1="113" y1="98" x2="113" y2="115" stroke="#7DD3FC" strokeOpacity="0.4" strokeWidth="1" />

      {/* OPEN sign */}
      <rect x="72" y="106" width="18" height="9" rx="2" fill="#22C55E" />
      <text x="81" y="113" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold" fontFamily="sans-serif">OPEN</text>

      {/* Trees */}
      <circle cx="22" cy="144" r="10" fill="#4ADE80" fillOpacity="0.85" />
      <rect x="20.5" y="152" width="3" height="6" fill="#A16207" />
      <circle cx="140" cy="144" r="10" fill="#4ADE80" fillOpacity="0.85" />
      <rect x="138.5" y="152" width="3" height="6" fill="#A16207" />

      {/* Map pin */}
      <path d="M80 10 C74 10 67 16 67 23 C67 32 80 44 80 44 C80 44 93 32 93 23 C93 16 86 10 80 10Z" fill="#FF6A00" />
      <circle cx="80" cy="23" r="5" fill="white" />

      {/* Rating card */}
      <rect x="2" y="130" width="38" height="21" rx="4" fill="white" stroke="#FFE8D6" strokeWidth="1" />
      <text x="6" y="140" fontSize="5.5" fill="#FBBF24" fontFamily="sans-serif">★★★★★</text>
      <rect x="6" y="143" width="20" height="3" rx="1.5" fill="#E5E5E5" />
      <rect x="6" y="143" width="16" height="3" rx="1.5" fill="#FF6A00" />

      {/* Growth card */}
      <rect x="118" y="126" width="38" height="21" rx="4" fill="white" stroke="#D1FAE5" strokeWidth="1" />
      <text x="137" y="136" textAnchor="middle" fontSize="8" fill="#16A34A" fontWeight="bold" fontFamily="sans-serif">+28%</text>
      <path d="M122 143 L127 138 L132 140 L138 133" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function LocalSeoHeroDashboard() {
  const containerVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  };

  const metrics = [
    { label: 'Local Traffic', value: '12.5K', growth: '+28% this month', icon: <TrendingUp size={13} className="text-[#FF6A00]" /> },
    { label: 'Map Pack Calls', value: '320', growth: '+35% this month', icon: <Phone size={13} className="text-[#FF6A00]" /> },
    { label: 'Website Clicks', value: '1.8K', growth: '+22% this month', icon: <MousePointerClick size={13} className="text-[#FF6A00]" /> },
  ];

  const rankings = [
    { icon: <MapPin size={13} />, keyword: 'Best Coffee Shop Near Me', rating: '5.0', position: 'Map Pack Position #1', badge: 'Map #1' },
    { icon: <Star size={13} />, keyword: 'Coffee Shop in Your City', rating: '4.8', position: 'Map Pack Position #2', badge: 'Map #2' },
    { icon: <Search size={13} />, keyword: 'Cappuccino Near Me', rating: '4.6', position: 'Map Pack Position #3', badge: 'Map #3' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative w-full h-full flex items-stretch"
    >
      {/* Dashboard card */}
      <div className="relative w-full flex flex-col">
        {/* Glow */}
        <div className="pointer-events-none absolute -inset-3 bg-[#FF6A00]/5 rounded-3xl blur-2xl -z-10" />

        <div className="bg-white rounded-2xl shadow-[0_6px_28px_rgba(0,0,0,0.07)] border border-[#EDE8E3] overflow-hidden flex flex-col h-full">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#F0EBE5]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[8px] bg-[#FFF1E6] flex items-center justify-center text-[#FF6A00] shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-[12.5px] leading-none mb-0.5">Local SEO Overview</h3>
                <p className="text-[10px] text-[#9CA3AF] leading-none">Last 30 Days · Your Area</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg px-2 py-1.5"
            >
              <TrendingUp size={11} className="text-[#16A34A]" />
              <div>
                <p className="text-[12px] font-extrabold text-[#16A34A] leading-none">+28%</p>
                <p className="text-[9px] text-[#16A34A] leading-none font-medium">vs Last 30 Days</p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col px-3.5 pt-2.5 pb-3 gap-2.5 min-h-0">

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
              {metrics.map((m) => (
                <motion.div
                  key={m.label}
                  variants={cardVariants}
                  className="bg-[#FAFAF8] rounded-xl p-2.5 border border-[#EDE8E2] hover:-translate-y-0.5 transition-transform"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[9.5px] font-semibold text-[#6B6B6B] leading-tight">{m.label}</p>
                    {m.icon}
                  </div>
                  <p className="text-[17px] font-extrabold text-[#1A1A1A] leading-none">{m.value}</p>
                  <p className="text-[9px] text-[#16A34A] font-semibold mt-0.5">{m.growth}</p>
                  <MiniChart />
                </motion.div>
              ))}
            </div>

            {/* Rankings */}
            <div className="flex-1 flex flex-col min-h-0">
              <h4 className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1.5">
                Top Local Rankings
              </h4>
              <div className="space-y-1.5">
                {rankings.map((r) => (
                  <motion.div
                    key={r.keyword}
                    variants={cardVariants}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded-xl border border-[#EDE8E2] hover:border-[#FF6A00]/30 hover:bg-[#FFFAF7] transition-all group"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-6 h-6 rounded-md bg-[#F9FAFB] border border-[#E8E5E0] flex items-center justify-center text-[#9CA3AF] group-hover:text-[#FF6A00] group-hover:bg-[#FFF1E6] group-hover:border-[#FFE8D6] transition-colors shrink-0">
                        {r.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-[#1A1A1A] text-[10.5px] truncate leading-tight">{r.keyword}</p>
                        <div className="flex items-center gap-1 text-[9px] text-[#6B6B6B]">
                          <Star size={7} className="text-[#CA8A04] fill-[#CA8A04] shrink-0" />
                          <span className="font-semibold text-[#1A1A1A]">{r.rating}</span>
                          <span className="text-[#D1D5DB]">·</span>
                          <span className="truncate">{r.position}</span>
                        </div>
                      </div>
                    </div>
                    <span className="shrink-0 ml-1 inline-flex items-center bg-[#DCFCE7] text-[#16A34A] text-[9px] font-bold px-1.5 py-0.5 rounded-md whitespace-nowrap">
                      {r.badge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
