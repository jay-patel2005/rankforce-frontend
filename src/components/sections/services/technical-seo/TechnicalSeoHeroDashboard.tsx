'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, AlertTriangle, CheckCircle2, TrendingUp, Activity } from 'lucide-react';

// ─── Circular Score Ring ─────────────────────────────────────────────────────
function ScoreRing({ score, color, label }: { score: number; color: string; label: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width="72" height="72" viewBox="0 0 72 72">
        <circle cx="36" cy="36" r={r} stroke="#F0EBE5" strokeWidth="6" fill="none" />
        <motion.circle
          cx="36" cy="36" r={r}
          stroke={color}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - dash }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
        <text x="36" y="40" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1A1A1A" fontFamily="sans-serif">
          {score}
        </text>
      </svg>
      <span className="text-[10px] font-semibold text-[#6B6B6B] text-center leading-tight">{label}</span>
    </div>
  );
}

// ─── Mini Bar ────────────────────────────────────────────────────────────────
function MiniBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div>
      <div className="flex justify-between mb-0.5">
        <span className="text-[9.5px] font-semibold text-[#6B6B6B]">{label}</span>
        <span className="text-[9.5px] font-bold text-[#1A1A1A]">{value}</span>
      </div>
      <div className="h-1.5 bg-[#F0EBE5] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        />
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export function TechnicalSeoHeroDashboard() {
  const containerVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const, staggerChildren: 0.08 },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
  };

  const issues = [
    { label: 'Broken Links',     count: 14, color: '#EF4444', icon: <AlertTriangle size={11} /> },
    { label: 'Missing Meta Tags', count: 8,  color: '#F59E0B', icon: <AlertTriangle size={11} /> },
    { label: 'Slow Pages',        count: 6,  color: '#F59E0B', icon: <Zap size={11} /> },
    { label: 'Fixed Issues',      count: 38, color: '#16A34A', icon: <CheckCircle2 size={11} /> },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="relative w-full h-full flex items-stretch"
    >
      <div className="relative w-full flex flex-col">
        {/* Glow */}
        <div className="pointer-events-none absolute -inset-3 bg-[#FF6A00]/5 rounded-3xl blur-2xl -z-10" />

        <div className="bg-white rounded-2xl shadow-[0_6px_28px_rgba(0,0,0,0.07)] border border-[#EDE8E3] overflow-hidden flex flex-col h-full">

          {/* ── Header ── */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#F0EBE5]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[8px] bg-[#FFF1E6] flex items-center justify-center text-[#FF6A00] shrink-0">
                <ShieldCheck size={16} />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] text-[12.5px] leading-none mb-0.5">
                  Technical SEO Audit
                </h3>
                <p className="text-[10px] text-[#9CA3AF] leading-none">
                  Full Site Scan · Updated Today
                </p>
              </div>
            </div>

            {/* Health badge */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-1.5 bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg px-2 py-1.5"
            >
              <TrendingUp size={11} className="text-[#16A34A]" />
              <div>
                <p className="text-[12px] font-extrabold text-[#16A34A] leading-none">+42%</p>
                <p className="text-[9px] text-[#16A34A] leading-none font-medium">Health Score</p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col px-3.5 pt-2.5 pb-3 gap-2.5 min-h-0">

            {/* ── Score Rings ── */}
            <motion.div variants={cardVariants} className="grid grid-cols-4 gap-1 bg-[#FAFAF8] rounded-xl p-3 border border-[#EDE8E2]">
              <ScoreRing score={94} color="#16A34A" label="SEO Score" />
              <ScoreRing score={88} color="#FF6A00" label="Performance" />
              <ScoreRing score={97} color="#3B82F6" label="Accessibility" />
              <ScoreRing score={91} color="#8B5CF6" label="Best Practices" />
            </motion.div>

            {/* ── Core Web Vitals ── */}
            <motion.div variants={cardVariants} className="bg-[#FAFAF8] rounded-xl px-3 py-2.5 border border-[#EDE8E2]">
              <div className="flex items-center gap-1.5 mb-2">
                <Activity size={11} className="text-[#FF6A00]" />
                <p className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wide">Core Web Vitals</p>
              </div>
              <div className="space-y-1.5">
                <MiniBar label="LCP (Largest Contentful Paint)" value={1.8} max={4}   color="#16A34A" />
                <MiniBar label="FID (First Input Delay)"        value={12}  max={300} color="#16A34A" />
                <MiniBar label="CLS (Cumulative Layout Shift)"  value={0.04} max={0.25} color="#16A34A" />
              </div>
            </motion.div>

            {/* ── Issues Summary ── */}
            <div>
              <h4 className="text-[10px] font-bold text-[#6B6B6B] uppercase tracking-wider mb-1.5">
                Crawl Issues Summary
              </h4>
              <div className="grid grid-cols-2 gap-1.5">
                {issues.map((issue) => (
                  <motion.div
                    key={issue.label}
                    variants={cardVariants}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl border border-[#EDE8E2] hover:border-[#FF6A00]/30 hover:bg-[#FFFAF7] transition-all group"
                  >
                    <span style={{ color: issue.color }}>{issue.icon}</span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold truncate" style={{ color: issue.color === '#16A34A' ? '#16A34A' : '#1A1A1A' }}>
                        {issue.count} {issue.label}
                      </p>
                    </div>
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
