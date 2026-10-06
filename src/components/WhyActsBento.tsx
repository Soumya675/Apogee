import React, { useState } from 'react';
import {
  Code2,
  Trophy,
  BrainCircuit,
  Briefcase,
  Rocket,
  CheckCircle2,
  Terminal,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import hackathonImg from '../assets/images/training_hackathon_lab_1791174883560.jpg';
import interviewImg from '../assets/images/corporate_mock_interview_1791174895675.jpg';

export const WhyActsBento: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'algo' | 'react' | 'sql'>('algo');

  const codeSnippets = {
    algo: `// Optimal Two-Pointer Cycle Detection
function detectCycle(head: ListNode | null): boolean {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`,
    react: `// Custom Resilient Hook for Placement Metrics
export function usePlacementTelemetry(studentId: string) {
  const [readiness, setReadiness] = useState<number>(0);
  useEffect(() => {
    fetchLiveAssessmentScore(studentId).then(setReadiness);
  }, [studentId]);
  return { readiness, isCertified: readiness >= 85 };
}`,
    sql: `-- High-Throughput Candidate Analytics Query
SELECT s.roll_no, s.full_name, c.company_name, o.ctc_lpa
FROM students s
JOIN placement_offers o ON s.id = o.student_id
JOIN companies c ON o.company_id = c.id
WHERE o.status = 'ACCEPTED' AND o.ctc_lpa >= 10.0;`,
  };

  return (
    <section id="capabilities" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>The ACTS Academic Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Engineered for High-Velocity Placement Readiness.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Bridging textbook curricula with the technical rigor, problem-solving pressure, and evaluation methodologies expected by top tier-1 corporate hiring panels.
          </p>
        </div>

        {/* Asymmetric Bento Grid in Academic White & Slate */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento Card 1 (Span 2): Live Projects & Code Terminal */}
          <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group shadow-xs">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      01. Production-Grade Engineering Labs
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Industry Codebases with Real PR Review Cycles</p>
                  </div>
                </div>

                {/* Segmented Code Language Switcher */}
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 text-xs">
                  <button
                    onClick={() => setActiveCodeTab('algo')}
                    className={`px-3 py-1 rounded transition-colors cursor-pointer font-medium ${
                      activeCodeTab === 'algo'
                        ? 'bg-white text-blue-700 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    DSA Core
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('react')}
                    className={`px-3 py-1 rounded transition-colors cursor-pointer font-medium ${
                      activeCodeTab === 'react'
                        ? 'bg-white text-blue-700 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    React Hook
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('sql')}
                    className={`px-3 py-1 rounded transition-colors cursor-pointer font-medium ${
                      activeCodeTab === 'sql'
                        ? 'bg-white text-blue-700 font-bold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    SQL Query
                  </button>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Trainees develop enterprise applications with continuous integration, automated test suites, Docker containers, and live cloud deployment. Recruiters inspect verified GitHub repositories, pull requests, and system architecture.
              </p>

              {/* Code Terminal Box */}
              <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs overflow-x-auto shadow-inner text-white">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-[11px] text-slate-400">
                      academic_suite.{activeCodeTab === 'sql' ? 'sql' : 'ts'}
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                    <Terminal className="w-3 h-3" /> Passing 48 Test Cases
                  </span>
                </div>
                <pre className="text-slate-200 leading-relaxed">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Verified GitHub Commits
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                AWS Cloud Sandboxes
              </span>
              <span className="text-blue-700 font-bold flex items-center gap-1">
                2 Capstone Projects Per Track <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Bento Card 2 (Span 1): National Hackathons */}
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300 group flex flex-col shadow-xs">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={hackathonImg}
                alt="Students participating in ACTS national hackathon coding arena"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold text-blue-700 border border-slate-200 shadow-sm">
                36-Hour Sprints
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    02. Competitive Hackathons
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Inter-collegiate coding leagues and 36-hour buildathons judged directly by CTOs and Senior Engineering Managers from top technology firms.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Student Innovation Awards</span>
                <span className="font-mono font-bold text-blue-700">₹15,00,000+</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3 (Span 1): Psychometric Profiling */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    03. Psychometric Profiling
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Cognitive &amp; Behavioral Assessment</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                Standardized diagnostic of cognitive speed, spatial reasoning, stress adaptability, and communication patterns aligned with AMCAT, CoCubes, and SHL corporate standards.
              </p>

              {/* Cognitive Metric Meters */}
              <div className="space-y-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-600 mb-1 text-[11px] font-semibold">
                    <span>Quantitative Speed</span>
                    <span className="text-blue-700">98.2 percentile</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full w-[98%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-600 mb-1 text-[11px] font-semibold">
                    <span>Algorithmic Logic</span>
                    <span className="text-indigo-700">94.5 percentile</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-600 mb-1 text-[11px] font-semibold">
                    <span>Behavioral Alignment</span>
                    <span className="text-emerald-700">Top 5% Cohort</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full w-[95%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Personalized Report</span>
              <span className="text-blue-700 font-bold">18-Page Diagnostic</span>
            </div>
          </div>

          {/* Bento Card 4 (Span 2): Corporate Placement Support & Mock Interview Boardrooms */}
          <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row shadow-xs">
            <div className="md:w-1/2 relative min-h-[220px] bg-slate-100">
              <img
                src={interviewImg}
                alt="Corporate placement boardroom session and mock technical interview at ACTS"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold text-emerald-700 border border-slate-200 shadow-sm">
                1-on-1 Panel Simulation
              </div>
            </div>

            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    04. 100% Placement Support
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Pooled campus drives, recruiter scheduling, and mock technical interview simulations conducted by current engineering leads at TCS, Infosys, Amazon, and Capgemini.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Mock Panels</span>
                    <span className="font-bold text-slate-900 font-mono">5 per Trainee</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="text-slate-500 block text-[11px]">Drive Access</span>
                    <span className="font-bold text-blue-700 font-mono">Unlimited 1 Year</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Placement Cell Partnership</span>
                <span className="text-blue-700 font-bold">Pan-India Network</span>
              </div>
            </div>
          </div>

          {/* Bento Card 5 (Span 1): Entrepreneurship & Incubation */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    05. Incubation &amp; Patents
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">From Idea to Venture</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                Intellectual property filing, government student startup grants, pitch deck formulation, and angel investor networking for student founders.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between items-center text-slate-700">
                  <span>Student Startups Incubated</span>
                  <span className="font-mono font-bold text-blue-700">45+ Ventures</span>
                </div>
                <div className="flex justify-between items-center text-slate-700">
                  <span>Patents Filed &amp; Published</span>
                  <span className="font-mono font-bold text-emerald-700">18 Patents</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Innovation Labs</span>
              <span className="text-blue-700 font-bold">Jobskul Initiative</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
