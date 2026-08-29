'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MousePointerClick,
  Users,
  Eye,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// Score Ring
// ─────────────────────────────────────────────────────────────
function ScoreRing({
  score,
  color,
  label,
}: {
  score: number;
  color: string;
  label: string;
}) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;

  return (
    <div className="flex min-w-0 flex-col items-center gap-1">
      <svg
        width="68"
        height="68"
        viewBox="0 0 72 72"
        className="shrink-0"
      >
        <circle
          cx="36"
          cy="36"
          r={r}
          stroke="#F0EBE5"
          strokeWidth="6"
          fill="none"
        />

        <motion.circle
          cx="36"
          cy="36"
          r={r}
          stroke={color}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - dash }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: 'easeOut',
            delay: 0.25,
          }}
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />

        <text
          x="36"
          y="40"
          textAnchor="middle"
          fontSize="14"
          fontWeight="800"
          fill="#1A1A1A"
          fontFamily="sans-serif"
        >
          {score}
        </text>
      </svg>

      <span className="px-0.5 text-center text-[9px] font-semibold leading-tight text-[#6B6B6B]">
        {label}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Mini Progress Bar
// ─────────────────────────────────────────────────────────────
function MiniBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="min-w-0">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="truncate text-[9px] font-semibold text-[#6B6B6B]">
          {label}
        </span>

        <span className="shrink-0 text-[9px] font-bold text-[#1A1A1A]">
          {value}%
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F0EBE5]">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.35,
          }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Email Marketing Hero Dashboard
// ─────────────────────────────────────────────────────────────
export function EmailMarketingHeroDashboard() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 12,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: 'easeOut' as const,
        staggerChildren: 0.07,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: 'easeOut' as const,
      },
    },
  };

  const metrics = [
    {
      label: 'Delivered',
      count: '99.8%',
      color: '#16A34A',
      icon: <CheckCircle2 size={11} />,
    },
    {
      label: 'Bounces',
      count: '0.4%',
      color: '#EF4444',
      icon: <AlertTriangle size={11} />,
    },
    {
      label: 'Open Rate',
      count: '38.2%',
      color: '#F59E0B',
      icon: <Eye size={11} />,
    },
    {
      label: 'Click Rate',
      count: '4.5%',
      color: '#8B5CF6',
      icon: <MousePointerClick size={11} />,
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-50px',
      }}
      className="
        relative
        w-full
        px-0
        pt-4
        pb-4
        lg:pt-5
        lg:pb-5
      "
    >
      {/* Soft glow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-2
          rounded-3xl
          bg-[#FF6A00]/5
          blur-2xl
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[540px]
          overflow-hidden
          rounded-2xl
          border
          border-[#EDE8E3]
          bg-white
          shadow-[0_6px_28px_rgba(0,0,0,0.07)]
        "
      >
        {/* ───────── Header ───────── */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            border-b
            border-[#F0EBE5]
            px-4
            py-3
          "
        >
          <div className="flex min-w-0 items-center gap-2.5">
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-[8px]
                bg-[#FFF1E6]
                text-[#FF6A00]
              "
            >
              <Mail size={16} />
            </div>

            <div className="min-w-0">
              <h3
                className="
                  truncate
                  text-[12px]
                  font-bold
                  leading-tight
                  text-[#1A1A1A]
                "
              >
                Campaign Performance
              </h3>

              <p
                className="
                  mt-0.5
                  truncate
                  text-[9px]
                  leading-tight
                  text-[#9CA3AF]
                "
              >
                Last 30 Days · All Automations
              </p>
            </div>
          </div>

          <motion.div
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              flex
              shrink-0
              items-center
              gap-1.5
              rounded-lg
              border
              border-[#BBF7D0]
              bg-[#F0FDF4]
              px-2.5
              py-2
            "
          >
            <TrendingUp
              size={11}
              className="text-[#16A34A]"
            />

            <div>
              <p className="text-[12px] font-extrabold leading-none text-[#16A34A]">
                +3.5x
              </p>

              <p className="mt-1 text-[8px] font-medium leading-none text-[#16A34A]">
                CTR Growth
              </p>
            </div>
          </motion.div>
        </div>

        {/* ───────── Dashboard Body ───────── */}
        <div
          className="
            flex
            flex-col
            gap-2.5
            px-3.5
            py-3
          "
        >
          {/* ───────── Score Rings ───────── */}
          <motion.div
            variants={cardVariants}
            className="
              grid
              grid-cols-4
              gap-1
              rounded-xl
              border
              border-[#EDE8E2]
              bg-[#FAFAF8]
              px-2
              py-3
            "
          >
            <ScoreRing
              score={99}
              color="#16A34A"
              label="Deliverability"
            />

            <ScoreRing
              score={82}
              color="#FF6A00"
              label="Engagement"
            />

            <ScoreRing
              score={94}
              color="#3B82F6"
              label="List Health"
            />

            <ScoreRing
              score={88}
              color="#8B5CF6"
              label="Conversion"
            />
          </motion.div>

          {/* ───────── Campaign Sequences ───────── */}
          <motion.div
            variants={cardVariants}
            className="
              rounded-xl
              border
              border-[#EDE8E2]
              bg-[#FAFAF8]
              px-3
              py-2.5
            "
          >
            <div className="mb-2 flex items-center gap-1.5">
              <Users
                size={11}
                className="shrink-0 text-[#FF6A00]"
              />

              <p
                className="
                  text-[9.5px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-[#1A1A1A]
                "
              >
                Top Performing Flows
              </p>
            </div>

            <div className="space-y-2">
              <MiniBar
                label="Welcome Sequence"
                value={65}
                color="#16A34A"
              />

              <MiniBar
                label="Abandoned Cart"
                value={48}
                color="#3B82F6"
              />

              <MiniBar
                label="Customer Win-back"
                value={32}
                color="#FF6A00"
              />
            </div>
          </motion.div>

          {/* ───────── Metrics Summary ───────── */}
          <div>
            <h4
              className="
                mb-1.5
                text-[9.5px]
                font-bold
                uppercase
                tracking-wider
                text-[#6B6B6B]
              "
            >
              Key Metrics
            </h4>

            <div className="grid grid-cols-2 gap-1.5">
              {metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  variants={cardVariants}
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#EDE8E2]
                    px-2.5
                    py-2
                    transition-all
                    hover:border-[#FF6A00]/30
                    hover:bg-[#FFFAF7]
                  "
                >
                  <span
                    className="shrink-0"
                    style={{
                      color: metric.color,
                    }}
                  >
                    {metric.icon}
                  </span>

                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        text-[9.5px]
                        font-bold
                        text-[#1A1A1A]
                      "
                    >
                      {metric.count} {metric.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
