import React from 'react';

export function SEOHeroDashboard() {
  return (
    <div className="relative w-full max-w-[560px] lg:max-w-[620px] aspect-[4/3] lg:aspect-auto lg:h-[480px]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      {/* FLOATING CARD: Left (Organic Traffic) */}
      <div className="absolute top-[35%] -left-6 lg:-left-8 z-20 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-4 border border-gray-100 w-[140px] animate-[float_6s_ease-in-out_infinite]">
        <div className="text-[10px] font-bold text-gray-800 uppercase tracking-wide mb-1">Organic Traffic</div>
        <div className="text-xl font-extrabold text-[#1A1A1A]">12.5K</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[#16A34A] text-[10px] font-bold flex items-center">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            18.6%
          </span>
        </div>
        {/* Mini Bar Chart */}
        <div className="flex items-end gap-1 mt-3 h-6">
          <div className="w-1/4 bg-[#FFE8D6] rounded-sm h-[40%]"></div>
          <div className="w-1/4 bg-[#FFE8D6] rounded-sm h-[60%]"></div>
          <div className="w-1/4 bg-[#FF6A00] rounded-sm h-[80%]"></div>
          <div className="w-1/4 bg-[#FF6A00] rounded-sm h-[100%]"></div>
        </div>
      </div>

      {/* FLOATING CARD: Right (Top Keyword) */}
      <div className="absolute top-[55%] -right-6 lg:-right-10 z-20 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-4 border border-gray-100 w-[130px] animate-[float_7s_ease-in-out_infinite_reverse]">
        <div className="text-[10px] font-bold text-gray-800 uppercase tracking-wide mb-1">Top Keyword</div>
        <div className="text-sm font-bold text-[#1A1A1A]">on page seo</div>
        <div className="text-[#16A34A] text-[11px] font-bold mt-1">Position #3</div>
      </div>

      {/* MAIN DASHBOARD */}
      <div className="absolute inset-0 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col overflow-hidden z-10">
        
        {/* Browser Top Bar */}
        <div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 justify-between">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          <div className="w-1/2 max-w-[200px] h-6 bg-white border border-gray-200 rounded-md flex items-center px-2">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <span className="text-[9px] text-gray-400 ml-2">Search...</span>
          </div>
          <div className="w-10"></div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-4 lg:p-6 flex flex-col gap-4">
          
          {/* Top Row */}
          <div className="flex gap-4 h-[45%]">
            {/* Keyword Rankings */}
            <div className="flex-[2] bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col">
              <div className="text-xs font-bold text-gray-800 mb-2">Keyword Rankings</div>
              <div className="flex-1 relative mt-2">
                {/* Graph lines (Horizontal) */}
                <div className="absolute w-full h-[1px] bg-gray-100 top-0"></div>
                <div className="absolute w-full h-[1px] bg-gray-100 top-1/2"></div>
                <div className="absolute w-full h-[1px] bg-gray-100 bottom-0"></div>
                
                {/* SVG Line Chart */}
                <svg className="w-full h-full absolute inset-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                  <path d="M 0,35 L 15,25 L 30,30 L 45,15 L 60,10 L 75,25 L 90,10 L 100,0" fill="none" stroke="#FF6A00" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                  <circle cx="0" cy="35" r="3" fill="#FF6A00" stroke="white" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <circle cx="15" cy="25" r="3" fill="#FF6A00" stroke="white" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <circle cx="30" cy="30" r="3" fill="#FF6A00" stroke="white" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <circle cx="45" cy="15" r="3" fill="#FF6A00" stroke="white" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <circle cx="60" cy="10" r="3" fill="#FF6A00" stroke="white" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <circle cx="75" cy="25" r="3" fill="#FF6A00" stroke="white" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <circle cx="90" cy="10" r="3" fill="#FF6A00" stroke="white" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <circle cx="100" cy="0" r="3" fill="#FF6A00" stroke="white" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                </svg>
                
                {/* Y-Axis Labels */}
                <div className="absolute -left-2 top-[-5px] text-[8px] text-gray-400">100</div>
                <div className="absolute -left-2 top-[calc(50%-5px)] text-[8px] text-gray-400">50</div>
                <div className="absolute -left-2 bottom-[-5px] text-[8px] text-gray-400">0</div>
                
                {/* X-Axis Labels */}
                <div className="absolute flex justify-between w-full bottom-[-15px] px-2 text-[7px] text-gray-400">
                  <span>Apr 14</span>
                  <span>Apr 21</span>
                  <span>Apr 28</span>
                  <span>May 5</span>
                  <span>May 12</span>
                </div>
              </div>
            </div>
            
            {/* On-Page Score */}
            <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col items-center">
              <div className="text-xs font-bold text-gray-800 mb-2 w-full text-left">On-Page Score</div>
              <div className="relative flex-1 w-full flex items-center justify-center mt-2">
                <svg viewBox="0 0 36 36" className="w-[80%] max-w-[90px]">
                  <path
                    className="text-gray-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-[#FF6A00]"
                    strokeWidth="3.5"
                    strokeDasharray="85, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-[#1A1A1A] leading-none">85</span>
                  <span className="text-[9px] text-gray-400">/100</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="flex gap-4 flex-1">
            {/* SEO Checklist */}
            <div className="flex-[1.2] bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col">
              <div className="text-xs font-bold text-gray-800 mb-3">SEO Checklist</div>
              <div className="flex flex-col gap-2.5 flex-1">
                <ChecklistItem label="Title Tag" status="Optimized" />
                <ChecklistItem label="Meta Description" status="Optimized" />
                <ChecklistItem label="Header Tags" status="Optimized" />
                <ChecklistItem label="Content Quality" status="Good" />
                <ChecklistItem label="Internal Linking" status="Optimized" />
                <ChecklistItem label="Image Alt Text" status="Optimized" />
              </div>
            </div>
            
            {/* Page Audit */}
            <div className="flex-[1.4] bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex flex-col">
              <div className="text-xs font-bold text-gray-800 mb-2">Page Audit</div>
              <div className="flex-1 flex items-center gap-4">
                <div className="w-[85px] h-[85px] relative">
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#E5E7EB" strokeWidth="7"></circle>
                    {/* Good: 72% */}
                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#16A34A" strokeWidth="7" strokeDasharray="72 28" strokeDashoffset="0"></circle>
                    {/* Issues: 18% */}
                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#FBBF24" strokeWidth="7" strokeDasharray="18 82" strokeDashoffset="-72"></circle>
                    {/* Errors: 10% */}
                    <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#DC2626" strokeWidth="7" strokeDasharray="10 90" strokeDashoffset="-90"></circle>
                  </svg>
                  <div className="absolute inset-0 bg-white m-3 rounded-full shadow-inner"></div>
                </div>
                
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div> Good
                    </div>
                    <span className="font-bold text-gray-900">72%</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-[#FBBF24]"></div> Issues
                    </div>
                    <span className="font-bold text-gray-900">18%</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center gap-1.5 font-semibold text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-[#DC2626]"></div> Errors
                    </div>
                    <span className="font-bold text-gray-900">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

function ChecklistItem({ label, status }: { label: string, status: string }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-3.5 h-3.5 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span className="text-[10px] font-semibold text-gray-700">{label}</span>
      </div>
      <span className="text-[9px] text-[#16A34A]">{status}</span>
    </div>
  );
}
