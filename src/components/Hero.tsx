import React, { useState } from 'react';
import { ArrowRight, Award, BookOpen, CheckCircle, GraduationCap, ShieldCheck, Terminal, Users } from 'lucide-react';
import heroCampusImg from '../assets/images/hero_apogee_campus_1791174871043.jpg';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePrograms }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle academic geometric blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#1e3a8a 1px, transparent 1px), radial-gradient(#1e3a8a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Gentle educational radial illumination */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-400/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Academic Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean unboxed scholastic kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse inline-block" />
              <span>Higher Education &amp; Campus Recruitment Training</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-medium">ISO 9001:2015 Certified</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance">
              Transforming Engineering Potential into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">
                Tier-1 Corporate Placement.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed text-pretty">
              Apogee CTS empowers over 500+ Indian university campuses with rigorous aptitude bootcamps, full-stack &amp; AI capstones, psychometric assessments, and direct hiring conduits with 350+ global technology recruiters.
            </p>

            {/* CTAs with educational visual hierarchy */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                <span>Request Campus Training Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:text-blue-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-400 rounded-xl transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Explore Academic Tracks</span>
                <span className="text-xs font-mono text-slate-500 font-normal">5 Tracks</span>
              </button>
            </div>

            {/* Unboxed Academic Milestones Bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-700">
              <div className="bg-white/80 p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl font-extrabold font-mono text-slate-900 tracking-tight tabular-nums">
                  150,000+
                </div>
                <div className="text-xs text-slate-500 font-medium">Students Mentored</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl font-extrabold font-mono text-blue-600 tracking-tight tabular-nums">
                  94.8%
                </div>
                <div className="text-xs text-slate-500 font-medium">Placement Rate</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl font-extrabold font-mono text-slate-900 tracking-tight tabular-nums">
                  500+
                </div>
                <div className="text-xs text-slate-500 font-medium">Partner Campuses</div>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl font-extrabold font-mono text-amber-600 tracking-tight tabular-nums">
                  ₹42 LPA
                </div>
                <div className="text-xs text-slate-500 font-medium">Highest Package</div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Campus Frame */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg)`,
              }}
            >
              {/* Media Container with academic badge */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src={heroCampusImg}
                  alt="State of the art technology training hub at Apogee CTS campus"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Overlaid Academic Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-2 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>2026 Batch Active</span>
                  </div>

                  <div className="bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-blue-700 flex items-center gap-1.5 shadow-md">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>University Partner</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <div className="bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/70 p-3.5 rounded-xl shadow-lg space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-semibold text-blue-300">
                        <Award className="w-4 h-4 text-amber-400" />
                        Comprehensive Readiness Framework
                      </span>
                      <span className="font-mono text-amber-300 font-bold">Day-Wise Plan</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-amber-400 h-full rounded-full w-4/5" />
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-300 font-mono">
                      <span>Quantitative &amp; Tech Coding</span>
                      <span className="text-emerald-400 font-semibold">Campus Placement Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer Detail */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  National Skill Development Aligned
                </span>
                <span className="text-blue-700 font-bold">Spardhaguru Network</span>
              </div>
            </div>

            {/* Subtle glow behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-amber-300/20 rounded-2xl blur-xl -z-10 opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};
