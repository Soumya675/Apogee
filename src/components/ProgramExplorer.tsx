import React, { useState } from 'react';
import { PROGRAMS, Program } from '../data/programsData';
import {
  Clock,
  Briefcase,
  Users,
  CheckCircle,
  ArrowRight,
  BookOpen,
  X,
  FileText,
  Calendar,
  Layers,
  GraduationCap,
} from 'lucide-react';

interface ProgramExplorerProps {
  onSelectProgramForBooking: (programName: string) => void;
}

export const ProgramExplorer: React.FC<ProgramExplorerProps> = ({
  onSelectProgramForBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const filteredPrograms =
    selectedCategory === 'all'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              <Layers className="w-4 h-4" />
              <span>Curated Academic Syllabi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Industry-Aligned Programs with Day-Wise Syllabi.
            </h2>
            <p className="mt-2 text-slate-600 text-base leading-relaxed">
              Every curriculum is co-designed with university deans and enterprise engineering directors to meet corporate recruitment benchmarks.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Tracks
            </button>
            <button
              onClick={() => setSelectedCategory('campus')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'campus'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Placement Core (CRT)
            </button>
            <button
              onClick={() => setSelectedCategory('software')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'software'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Full-Stack Cloud
            </button>
            <button
              onClick={() => setSelectedCategory('data_ai')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'data_ai'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              AI &amp; Data Science
            </button>
            <button
              onClick={() => setSelectedCategory('spardha')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedCategory === 'spardha'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Spardha Banking
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all duration-300 group shadow-xs"
            >
              <div>
                {/* Clean unboxed category kicker */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-medium">
                  <span className="text-blue-700 uppercase tracking-wider font-bold text-[11px]">
                    {prog.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{prog.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors mb-3">
                  {prog.title}
                </h3>

                {/* Key Metrics Strip */}
                <div className="flex items-center gap-3 text-xs text-slate-500 pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Avg Package</span>
                    <span className="font-bold text-blue-700 font-mono text-sm">{prog.avgCtc}</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Format</span>
                    <span className="text-slate-800 font-semibold">{prog.format}</span>
                  </div>
                  <span className="text-slate-300">|</span>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Alumni Placed</span>
                    <span className="text-emerald-700 font-mono font-bold">
                      {prog.placedAlumniCount.toLocaleString()}+
                    </span>
                  </div>
                </div>

                {/* Core Highlights */}
                <div className="space-y-2 mb-6 text-xs text-slate-600">
                  {prog.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalProgram(prog)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  Syllabus Breakdown
                </button>

                <button
                  onClick={() => onSelectProgramForBooking(prog.title)}
                  className="py-2 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-1 cursor-pointer shrink-0 shadow-xs"
                >
                  Apply
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Detailed Syllabus Modal */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl text-left relative">
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 mb-2">
              <FileText className="w-4 h-4" />
              <span>Full Curriculum Specification</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              {activeModalProgram.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pb-4 mb-6 border-b border-slate-200">
              <span>Duration: <strong className="text-slate-900">{activeModalProgram.duration}</strong></span>
              <span>·</span>
              <span>Eligibility: <strong className="text-slate-900">{activeModalProgram.level}</strong></span>
              <span>·</span>
              <span>Benchmark Package: <strong className="text-blue-700 font-bold">{activeModalProgram.avgCtc}</strong></span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  Day-Wise Module Architecture
                </h4>
                <div className="space-y-2.5">
                  {activeModalProgram.modules.map((mod, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3"
                    >
                      <span className="font-mono text-xs text-blue-700 font-bold shrink-0 mt-0.5">
                        Module 0{i + 1}
                      </span>
                      <span className="text-xs text-slate-800 leading-relaxed font-medium">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Target Industry Roles
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeModalProgram.targetRoles.map((role, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-blue-50 text-blue-800 font-semibold rounded-md border border-blue-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalProgram(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = activeModalProgram.title;
                  setActiveModalProgram(null);
                  onSelectProgramForBooking(title);
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                Enroll / Request College Batch
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
