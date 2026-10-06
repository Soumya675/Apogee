import React, { useState } from 'react';
import { Calculator, Gauge, ArrowRight, Zap, Target, TrendingUp, Sparkles, GraduationCap } from 'lucide-react';

interface PlacementCalculatorProps {
  onOpenBooking: () => void;
}

export const PlacementCalculator: React.FC<PlacementCalculatorProps> = ({ onOpenBooking }) => {
  const [academicYear, setAcademicYear] = useState<string>('3rd');
  const [track, setTrack] = useState<string>('software');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(12);
  const [codingExp, setCodingExp] = useState<string>('intermediate');

  const calculateMetrics = () => {
    let baseScore = 60;

    if (academicYear === 'pre_final' || academicYear === '3rd') baseScore += 15;
    if (academicYear === 'final') baseScore += 20;

    if (codingExp === 'advanced') baseScore += 18;
    else if (codingExp === 'intermediate') baseScore += 10;
    else baseScore += 2;

    const hourBonus = Math.min(hoursPerWeek * 1.2, 20);
    const totalScore = Math.min(Math.round(baseScore + hourBonus), 98);

    let minCtc = 4.5;
    let maxCtc = 8.5;

    if (track === 'software') {
      minCtc = 6.8;
      maxCtc = Math.round((9.5 + (totalScore / 100) * 8.5) * 10) / 10;
    } else if (track === 'ai') {
      minCtc = 7.5;
      maxCtc = Math.round((11.0 + (totalScore / 100) * 11.0) * 10) / 10;
    } else if (track === 'devops') {
      minCtc = 7.0;
      maxCtc = Math.round((10.0 + (totalScore / 100) * 9.0) * 10) / 10;
    } else {
      minCtc = 5.0;
      maxCtc = Math.round((6.5 + (totalScore / 100) * 6.0) * 10) / 10;
    }

    return {
      score: totalScore,
      ctcRange: `₹${minCtc.toFixed(1)} - ₹${maxCtc.toFixed(1)} LPA`,
      tier:
        totalScore >= 85
          ? 'Product Super Dream & Global MNCs'
          : totalScore >= 70
          ? 'Differential & Specialist IT'
          : 'Core Campus Foundation',
    };
  };

  const metrics = calculateMetrics();

  return (
    <section id="calculator" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Campus Placement Diagnostic Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Estimate Your Campus Placement Potential &amp; CTC Bracket.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Calibrate your academic timeline and weekly coding sprint velocity to project your realistic campus recruitment bracket.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Controls Input Card */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            {/* Academic Standing */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Academic Year / Standing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '2nd', label: '1st / 2nd Year' },
                  { id: '3rd', label: '3rd Year (Pre-Final)' },
                  { id: 'final', label: 'Final Year / Passout' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAcademicYear(item.id)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      academicYear === item.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Domain Track */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Target Placement Track
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'software', label: 'Full-Stack Software' },
                  { id: 'ai', label: 'AI, ML & Data Science' },
                  { id: 'devops', label: 'Cloud & Cyber DevOps' },
                  { id: 'crt', label: 'Aptitude & Campus CRT' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTrack(item.id)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-left transition-all cursor-pointer ${
                      track === item.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Coding Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Algorithmic &amp; Problem Solving Baseline
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'beginner', label: 'Beginner / Basics' },
                  { id: 'intermediate', label: 'Solved 50+ DSA' },
                  { id: 'advanced', label: '150+ LeetCode' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCodingExp(item.id)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      codingExp === item.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weekly Hours Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  4. Weekly Dedicated Practice Velocity
                </label>
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                  {hoursPerWeek} Hours / Week
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="30"
                step="2"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1 font-medium">
                <span>4 hrs (Foundational)</span>
                <span>16 hrs (Recommended)</span>
                <span>30 hrs (Placement Sprint)</span>
              </div>
            </div>
          </div>

          {/* Real-time Dynamic Gauge Output Card */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-md relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-blue-600" />
                  Calibrated Readiness
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> High Precision
                </span>
              </div>

              {/* Score Display */}
              <div className="text-center py-2">
                <div className="text-5xl sm:text-6xl font-black font-mono text-slate-900 tracking-tight tabular-nums">
                  {metrics.score}%
                </div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">
                  Placement Readiness Index
                </div>

                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mt-4">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${metrics.score}%` }}
                  />
                </div>
              </div>

              {/* Target CTC Box */}
              <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-200/80 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold">Projected CTC Range</span>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold font-mono text-blue-700 tabular-nums">
                  {metrics.ctcRange}
                </div>
                <div className="text-[11px] text-slate-600">
                  Target Tier: <strong className="text-slate-900">{metrics.tier}</strong>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Personalized 8 to 16 week roadmap mapped to hiring timeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Includes psychometric diagnostic &amp; 5 mock interview panels</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Free Academic Counseling</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
