'use client';

import React from 'react';

// Official Accreditations & Statutory Approval Bodies with Custom Vector Icons
const APPROVAL_ITEMS = [
  {
    name: 'EIAC ACCREDITED',
    sub: 'Inspection Body • CB-048-INSP',
    accent: 'cyan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
      </svg>
    ),
  },
  {
    name: 'KHDA DUBAI',
    sub: 'Govt. Permit #628911 • Vocational HSE',
    accent: 'purple',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    name: 'ENAS CERTIFIED',
    sub: 'Federal UAE • ISO/IEC 17020',
    accent: 'cyan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    name: 'HIGHFIELD INT.',
    sub: 'Approved UK Awarding Body',
    accent: 'purple',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    name: 'DCAS DUBAI',
    sub: 'Dubai Ambulance • First Aid / CPR',
    accent: 'cyan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: 'DP WORLD',
    sub: 'Marine & Ports Operations #8832',
    accent: 'cyan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="21" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <path d="M5 12c0 5 3.5 8 7 8s7-3 7-8" />
      </svg>
    ),
  },
  {
    name: 'DEWA APPROVED',
    sub: 'Substation Electrical Safety',
    accent: 'purple',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'TRAKHEES (PCFC)',
    sub: 'Ports, Customs & Free Zone',
    accent: 'cyan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    name: 'ISO 45001:2018',
    sub: 'OH&S Management Certified',
    accent: 'purple',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z" />
      </svg>
    ),
  },
  {
    name: 'ISO 9001:2015',
    sub: 'Quality Management Standard',
    accent: 'cyan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: 'DUBAI SOUTH',
    sub: 'Aviation & Logistics Zone',
    accent: 'purple',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    ),
  },
  {
    name: 'ACTVET & RAKEZ',
    sub: 'Industrial HSE & Technical Skills',
    accent: 'cyan',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

/**
 * Modern Next.js Approvals Marquee Component (Clean Corporate Design)
 */
export default function ApprovalsSection() {
  const marqueeItems = [...APPROVAL_ITEMS, ...APPROVAL_ITEMS];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 text-white border-y border-slate-800/80">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[650px] rounded-full bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-transparent blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 border border-cyan-500/30 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4 shadow-lg shadow-cyan-500/10">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Accreditations &amp; Statutory Approvals
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Internationally Recognized &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Statutorily Approved
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Operating under rigorous statutory oversight from the Government of Dubai, Federal UAE ministries, and leading global accreditation bodies.
          </p>
        </div>

        {/* Infinite Scrolling Logo Marquee */}
        <div 
          className="relative" 
          role="region" 
          aria-label="Official Accreditations and Statutory Approvals Marquee"
          tabIndex={0}
        >
          
          {/* Edge Gradient Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 sm:w-28 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 sm:w-28 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent" />

          {/* Marquee Track Container (Hover pauses animation on desktop, touch scrolls natively on mobile) */}
          <div className="group flex overflow-x-auto sm:overflow-hidden select-none py-3 scrollbar-none touch-pan-x cursor-grab">
            {/* Track 1 */}
            <div className="flex shrink-0 animate-marquee sm:group-hover:[animation-play-state:paused] items-center gap-3.5 sm:gap-6">
              {marqueeItems.map((item, idx) => {
                const isPurple = item.accent === 'purple';
                return (
                  <div
                    key={`track-1-${idx}`}
                    className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-slate-800/90 bg-slate-900/75 px-3.5 py-2.5 sm:px-5 sm:py-3.5 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-800/90 hover:shadow-cyan-500/10 hover:shadow-xl"
                  >
                    {/* SVG Icon Box */}
                    <div
                      className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border ${
                        isPurple
                          ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Authority Info */}
                    <div>
                      <div className="font-extrabold text-xs sm:text-sm text-white tracking-wide whitespace-nowrap">
                        {item.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 whitespace-nowrap mt-0.5 font-medium">
                        {item.sub}
                      </div>
                    </div>

                    {/* Verified Tick Badge */}
                    <div className="ml-1 sm:ml-2 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Track 2 for Seamless Loop (Desktop & Wide Screen) */}
            <div
              aria-hidden="true"
              className="flex shrink-0 animate-marquee sm:group-hover:[animation-play-state:paused] items-center gap-3.5 sm:gap-6"
            >
              {marqueeItems.map((item, idx) => {
                const isPurple = item.accent === 'purple';
                return (
                  <div
                    key={`track-2-${idx}`}
                    className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-slate-800/90 bg-slate-900/75 px-3.5 py-2.5 sm:px-5 sm:py-3.5 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-800/90 hover:shadow-cyan-500/10 hover:shadow-xl"
                  >
                    <div
                      className={`flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border ${
                        isPurple
                          ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <div className="font-extrabold text-xs sm:text-sm text-white tracking-wide whitespace-nowrap">
                        {item.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 whitespace-nowrap mt-0.5 font-medium">
                        {item.sub}
                      </div>
                    </div>

                    <div className="ml-1 sm:ml-2 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Continuous CSS Marquee Animation with Mobile Optimization */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 34s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
