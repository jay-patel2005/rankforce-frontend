import React from 'react';

export function OnPageSEODiagram() {
  const radius = 150; // Distance from center
  const centerSize = 130;
  
  const items = [
    { id: 1, title: "Title Tag\nOptimization", icon: <DocumentEditIcon />, angle: -90 }, // Top
    { id: 2, title: "Meta Description\nOptimization", icon: <DocumentTextIcon />, angle: -45 }, // Top Right
    { id: 3, title: "Header Tag\nOptimization", icon: <H1Icon />, angle: 0 }, // Right
    { id: 4, title: "Internal Linking\nOptimization", icon: <LinkIcon />, angle: 45 }, // Bottom Right
    { id: 5, title: "Image Alt Text\nOptimization", icon: <ImageIcon />, angle: 90 }, // Bottom
    { id: 6, title: "Content\nOptimization", icon: <DocumentLinesIcon />, angle: 135 }, // Bottom Left
    { id: 7, title: "URL Structure\nOptimization", icon: <CodeIcon />, angle: 180 }, // Left
    { id: 8, title: "Page Speed\nOptimization", icon: <SpeedometerIcon />, angle: 225 }, // Top Left
  ];

  return (
    <div className="relative w-full max-w-[460px] aspect-square mx-auto my-8">
      {/* Dashed connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 460 460">
        {items.map((item) => {
          const rad = (item.angle * Math.PI) / 180;
          const x2 = 230 + radius * Math.cos(rad);
          const y2 = 230 + radius * Math.sin(rad);
          return (
            <line 
              key={`line-${item.id}`}
              x1="230" y1="230" 
              x2={x2} y2={y2} 
              stroke="#E5E7EB" 
              strokeWidth="1.5" 
              strokeDasharray="4 4"
            />
          );
        })}
      </svg>

      {/* Center Circle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,106,0,0.15)] z-10 border border-orange-100"
        style={{ width: centerSize, height: centerSize }}
      >
        <div className="text-[#005173] mb-1">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <circle cx="15" cy="15" r="3"></circle>
            <line x1="17.12" y1="17.12" x2="19.5" y2="19.5"></line>
            <circle cx="6" cy="6" r="0.5"></circle>
            <circle cx="8" cy="6" r="0.5"></circle>
            <circle cx="10" cy="6" r="0.5"></circle>
          </svg>
        </div>
        <div className="text-center font-extrabold text-[#002D42] text-sm leading-tight">
          ON-PAGE<br />SEO
        </div>
      </div>

      {/* Outer Items */}
      {items.map((item) => {
        const rad = (item.angle * Math.PI) / 180;
        const x = 230 + radius * Math.cos(rad);
        const y = 230 + radius * Math.sin(rad);
        
        return (
          <div 
            key={item.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
            style={{ left: `${(x / 460) * 100}%`, top: `${(y / 460) * 100}%` }}
          >
            <div className="w-[60px] h-[60px] rounded-full bg-white border border-orange-100 shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#005173]">
              {item.icon}
            </div>
            <div className="mt-2 text-center text-[10px] sm:text-[11px] font-bold text-[#002D42] whitespace-pre-line leading-tight">
              {item.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Icons
function DocumentEditIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <path d="M16.5 13.5L12 18l-2 2 2-2 4.5-4.5a1.5 1.5 0 0 1 2.12 2.12z"></path>
    </svg>
  );
}

function DocumentTextIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function H1Icon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7"></polyline>
      <line x1="9" y1="20" x2="15" y2="20"></line>
      <line x1="12" y1="4" x2="12" y2="20"></line>
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  );
}

function DocumentLinesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="8" y1="13" x2="16" y2="13"></line>
      <line x1="8" y1="17" x2="16" y2="17"></line>
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
      <line x1="14" y1="4" x2="10" y2="20"></line>
    </svg>
  );
}

function SpeedometerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4"></path>
      <path d="M12 18v4"></path>
      <path d="M4.93 4.93l2.83 2.83"></path>
      <path d="M16.24 16.24l2.83 2.83"></path>
      <path d="M2 12h4"></path>
      <path d="M18 12h4"></path>
      <path d="M4.93 19.07l2.83-2.83"></path>
      <path d="M16.24 7.76l2.83-2.83"></path>
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 9l3 3"></path>
    </svg>
  );
}
