import React from 'react';

/**
 * Modern Industrial Safety 'Services' Card Component
 * Styled with Tailwind CSS for dark mode industrial interfaces.
 */
export default function ServiceCard({
  category = "MANDATORY INSPECTION",
  title = "Lifting Equipment & Heavy Machinery",
  description = "Certified third-party proof load testing, magnetic particle crack detection, and statutory regulatory certification for mobile cranes, hoists, and loose lifting tackle in accordance with EIAC and international standards.",
  standards = ["EIAC Accredited", "BS EN 12079", "LOLER / PUWER"],
  icon,
  onRequestInspection,
}) {
  return (
    <article className="group relative flex flex-col h-full rounded-2xl border border-slate-700/60 bg-slate-800/50 p-6 sm:p-7 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:shadow-2xl">
      
      {/* Top Header Section: Icon & Category Badge */}
      <div className="flex items-start justify-between gap-4 mb-5">
        
        {/* Top-Left SVG Icon Container with Subtle Glow */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 transition-colors duration-300 group-hover:bg-purple-500/20 group-hover:border-purple-400/40 group-hover:text-purple-300">
          {icon || (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          )}
        </div>

        {/* Small Cyan Inline Category Text Badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {category}
        </span>
      </div>

      {/* Card Content: Title & Description */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm sm:text-base leading-relaxed text-slate-300">
          {description}
        </p>
      </div>

      {/* Industrial Compliance Tags */}
      {standards && standards.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {standards.map((std, idx) => (
            <span
              key={idx}
              className="rounded-md bg-slate-900/60 border border-slate-700/50 px-2 py-0.5 text-xs font-medium text-slate-400"
            >
              {std}
            </span>
          ))}
        </div>
      )}

      {/* Bottom CTA Button: Pushed to the absolute bottom via flexbox 'mt-auto' */}
      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={onRequestInspection}
          className="group/btn relative flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-all duration-200 hover:bg-purple-500 hover:shadow-purple-500/40 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
        >
          <span>Request Inspection</span>
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

    </article>
  );
}
