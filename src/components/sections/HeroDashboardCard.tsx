"use client";

import { motion } from "framer-motion";
import { Link2, Trophy, ArrowUpRight, TrendingUp } from "lucide-react";

export default function HeroDashboardCard() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto perspective-1000 transform md:scale-[0.85] md:origin-right lg:scale-100 lg:origin-center transition-transform">
      {/* Background soft blob for depth */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-orange-400/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />

      {/* Main Dashboard Card */}
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          y: -8,
          scale: 1.01,
          transition: { duration: 0.2 },
        }}
        className="relative bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden flex flex-col"
      >
        {/* Top Bar (Browser style) */}
        <div className="flex items-center justify-between px-3 py-2.5 bg-gray-50/80 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="text-[10px] font-medium text-gray-400 flex items-center gap-2">
            rankforce.com <span className="text-gray-300">•</span> dashboard
          </div>
          <div className="flex items-center gap-1.5 bg-gray-900 text-white px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider">
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-400"
            />
            LIVE
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-3 sm:p-4 flex flex-col gap-3.5">
          {/* Header Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              JD
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-900">Welcome back, Client</h3>
              <p className="text-[10px] text-gray-500">Last updated 2 min ago</p>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white border border-gray-100 rounded-xl p-2 shadow-sm flex flex-col gap-0.5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-400" />
              <div className="text-[9px] font-semibold text-gray-500 flex items-center gap-1 truncate">
                KEYWORDS PG 1
              </div>
              <div className="text-lg font-bold text-gray-900 leading-tight">128</div>
              <div className="text-[9px] font-medium text-green-600 flex items-center gap-1">
                <ArrowUpRight size={10} /> +24
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-2 shadow-sm flex flex-col gap-0.5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-900" />
              <div className="text-[9px] font-semibold text-gray-500 flex items-center gap-1 truncate">
                ORG. TRAFFIC
              </div>
              <div className="text-lg font-bold text-gray-900 leading-tight">42.6K</div>
              <div className="text-[9px] font-medium text-green-600 flex items-center gap-1">
                <TrendingUp size={10} /> +18%
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-2 shadow-sm flex flex-col gap-0.5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
              <div className="text-[9px] font-semibold text-gray-500 flex items-center gap-1 truncate">
                LEADS MO.
              </div>
              <div className="text-lg font-bold text-gray-900 leading-tight">312</div>
              <div className="text-[9px] font-medium text-green-600 flex items-center gap-1">
                <TrendingUp size={10} /> +9%
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-gray-50/50 rounded-xl p-3 border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <div className="text-[11px] font-semibold text-gray-600 flex items-center gap-1.5">
                <TrendingUp size={12} className="text-blue-900" />
                Traffic Growth
              </div>
              <div className="text-[9px] bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-500">
                Last 6 mo
              </div>
            </div>

            <div className="flex items-end justify-between h-[110px] px-1 gap-1.5">
              {[
                { label: "Dec", h: "30%", color: "bg-blue-900" },
                { label: "Jan", h: "40%", color: "bg-blue-900" },
                { label: "Feb", h: "55%", color: "bg-blue-900" },
                { label: "Mar", h: "65%", color: "bg-blue-900" },
                { label: "Apr", h: "75%", color: "bg-blue-900" },
                { label: "May", h: "100%", color: "bg-primary shadow-lg shadow-primary/30" },
              ].map((bar, i) => (
                <div key={bar.label} className="flex flex-col items-center flex-1 gap-1.5 h-full">
                  <div className="w-full flex-1 flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: bar.h }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                      className={`w-full rounded-t-sm ${bar.color}`}
                    />
                  </div>
                  <div className="text-[9px] text-gray-400 font-medium">{bar.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Keyword Movements */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center px-1">
              <span className="text-[9px] font-bold text-gray-400 tracking-wider">TOP KEYWORD MOVEMENTS</span>
              <span className="text-[9px] font-bold text-gray-400 tracking-wider">POS</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-center justify-between bg-white border border-gray-100 rounded-lg py-1.5 px-2.5 shadow-sm"
              >
                <div className="text-xs font-medium text-gray-800 truncate pr-3 max-w-[180px] sm:max-w-[240px]">
                  Agriculture Land for Sale in Gujarat
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="bg-green-100 text-green-800 font-bold text-[10px] px-1.5 py-0.5 rounded">#1</div>
                  <div className="flex items-center gap-0.5 text-[9px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded">
                    <ArrowUpRight size={8} strokeWidth={3} /> 3
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.95 }}
                className="flex items-center justify-between bg-white border border-gray-100 rounded-lg py-1.5 px-2.5 shadow-sm"
              >
                <div className="text-xs font-medium text-gray-800 truncate pr-3 max-w-[180px] sm:max-w-[240px]">
                  Fuel System Solutions Across US and Canada
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="bg-yellow-100 text-yellow-800 font-bold text-[10px] px-1.5 py-0.5 rounded">#4</div>
                  <div className="flex items-center gap-0.5 text-[9px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded">
                    <ArrowUpRight size={8} strokeWidth={3} /> 2
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Badges */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute -left-4 md:-left-10 top-16 bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-start gap-2.5 z-10 w-max pointer-events-none"
      >
        <div className="bg-blue-50 text-blue-600 p-1.5 rounded-full">
          <Link2 size={14} />
        </div>
        <div>
          <div className="text-[11px] font-bold text-blue-900">New Backlink Earned</div>
          <div className="text-[9px] text-gray-500 mt-0.5">DA 78 · just now</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="absolute -right-4 md:-right-8 bottom-24 bg-white rounded-xl shadow-lg border border-gray-100 p-2.5 flex items-start gap-2.5 z-10 w-max pointer-events-none"
      >
        <div className="bg-yellow-50 text-yellow-600 p-1.5 rounded-full">
          <Trophy size={14} />
        </div>
        <div>
          <div className="text-[11px] font-bold text-blue-900">Ranked #1</div>
          <div className="text-[9px] text-gray-500 mt-0.5">&ldquo;seo expert&rdquo; ↑ from #3</div>
        </div>
      </motion.div>
    </div>
  );
}
