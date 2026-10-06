import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/programsData';
import { Quote, CheckCircle2, Star, GraduationCap } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'mnc' | 'product'>('all');

  const filtered = TESTIMONIALS.filter((t) => {
    if (selectedFilter === 'product') {
      return (
        t.company.includes('Zoho') ||
        t.company.includes('Deloitte') ||
        t.role.includes('Prodigy')
      );
    }
    if (selectedFilter === 'mnc') {
      return (
        t.company.includes('Cognizant') ||
        t.company.includes('Capgemini') ||
        t.company.includes('Deloitte')
      );
    }
    return true;
  });

  return (
    <section id="placements" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Verified Alumni Success</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              From College Classrooms to Global Enterprise Offers.
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Verified graduate placements from campuses across Odisha (GIFT, BPUT, VSSUT) and pan-India engineering networks.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 text-xs shadow-xs">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer font-medium ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Stories
            </button>
            <button
              onClick={() => setSelectedFilter('product')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer font-medium ${
                selectedFilter === 'product'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Product &amp; High-CTC
            </button>
            <button
              onClick={() => setSelectedFilter('mnc')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer font-medium ${
                selectedFilter === 'mnc'
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Top Tier-1 IT MNCs
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>

                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    {item.packageAchieved}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-xs font-bold font-mono text-blue-700">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      {item.name}
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {item.company} · {item.role}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 font-mono font-medium">
                  {item.organization}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
