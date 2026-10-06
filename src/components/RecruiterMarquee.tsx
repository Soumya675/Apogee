import React, { useState } from 'react';
import { RECRUITERS } from '../data/programsData';
import { Building2, Sparkles, TrendingUp } from 'lucide-react';

export const RecruiterMarquee: React.FC = () => {
  const [activeRecruiter, setActiveRecruiter] = useState<(typeof RECRUITERS)[0] | null>(null);

  const marqueeItems = [...RECRUITERS, ...RECRUITERS];

  return (
    <section className="py-10 bg-white border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Recruiter Conduit</span>
          </div>
          <p className="text-sm text-slate-600 mt-0.5 font-medium">
            Over 350+ Fortune 500 tech enterprises and high-growth unicorns recruit from ACTS-trained cohorts.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
          <span className="flex items-center gap-1.5 text-blue-700 font-bold">
            <TrendingUp className="w-3.5 h-3.5" />
            Annual Drives: 240+
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-slate-500 font-medium">Direct Campus Placement Conduits</span>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee py-2 flex items-center gap-3">
          {marqueeItems.map((recruiter, idx) => (
            <div
              key={`${recruiter.name}-${idx}`}
              onMouseEnter={() => setActiveRecruiter(recruiter)}
              onMouseLeave={() => setActiveRecruiter(null)}
              className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-400 transition-all duration-200 cursor-pointer group flex items-center gap-3 shadow-xs"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
              <span className="text-xs font-bold text-slate-800 group-hover:text-blue-900 transition-colors tracking-tight font-display">
                {recruiter.name}
              </span>
              <span className="text-[11px] font-mono font-medium text-slate-500 group-hover:text-blue-700 transition-colors">
                {recruiter.avgCtc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Active Recruiter Insight Card if hovered */}
      {activeRecruiter && (
        <div className="max-w-md mx-auto mt-4 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg text-xs flex items-center justify-between shadow-xs animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-900">{activeRecruiter.name}</span>
            <span className="text-slate-500">· {activeRecruiter.tier}</span>
          </div>
          <span className="font-mono text-blue-700 font-bold">{activeRecruiter.avgCtc}</span>
        </div>
      )}
    </section>
  );
};
