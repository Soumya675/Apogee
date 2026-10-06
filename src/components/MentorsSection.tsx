import React from 'react';
import { Award, CheckCircle, GraduationCap, Sparkles } from 'lucide-react';
import directorImg from '../assets/images/director_leadership_portrait_1791174906151.jpg';

export const MentorsSection: React.FC = () => {
  return (
    <section id="mentors" className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            <GraduationCap className="w-4 h-4" />
            <span>Academic &amp; Industry Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Taught by Industry Veterans &amp; Record-Holding Trainers.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Our instructional council combines senior enterprise software architects, mathematical speed record holders, and national employability consultants.
          </p>
        </div>

        {/* Featured Director & Founder Spotlight */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-10 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-md max-w-sm mx-auto lg:max-w-none bg-white">
                <img
                  src={directorImg}
                  alt="Sitansu Mishra, Founder and MD of ApogeeCTS and Jobskul"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute -bottom-3 left-6 right-6 bg-white border border-slate-200 px-4 py-2 rounded-xl text-center shadow-md">
                <div className="text-xs font-bold text-slate-900">Sitansu Mishra</div>
                <div className="text-[11px] text-blue-700 font-mono font-bold">Founder, MD &amp; CEO</div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                <Sparkles className="w-4 h-4" />
                <span>Executive Vision</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                "Our single mission is making tier-2 and tier-3 engineering graduates the first choice for global tech enterprises."
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Under Sitansu Mishra’s stewardship across ApogeeCTS and Jobskul, more than 150,000+ students across eastern and pan-Indian university ecosystems have transitioned from textbook engineering into high-paying corporate tech roles.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700 font-medium">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Curriculum aligned with NASSCOM &amp; National Skill Development standards</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Over 500+ institutional placement agreements executed</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Strategic tie-ups with leading Indian placement platforms</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Pioneer of the 360° Day-Wise Campus Bootcamps</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold mb-4 font-mono text-base">
                SS
              </div>
              <div className="text-xs text-blue-700 font-mono font-bold mb-1">Aptitude &amp; Mental Arithmetic</div>
              <h4 className="text-lg font-bold text-slate-900">Shashank D Sagar</h4>
              <p className="text-xs text-slate-500 font-semibold mt-0.5 mb-3">Math World Record Holder</p>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Trains students in ultra-speed mental calculation, quantitative shortcuts, and competitive aptitude strategies that crack AMCAT and TCS Digital cutoffs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Mentored 40,000+ candidates</span>
            </div>
          </div>

          <div className="rounded-xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold mb-4 font-mono text-base">
                RD
              </div>
              <div className="text-xs text-blue-700 font-mono font-bold mb-1">Full-Stack &amp; Cloud Systems</div>
              <h4 className="text-lg font-bold text-slate-900">Rajesh Dash</h4>
              <p className="text-xs text-slate-500 font-semibold mt-0.5 mb-3">Ex-Lead Architect (14+ Yrs Tech)</p>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Directs the hands-on capstone sprint series, teaching microservices, AWS architectures, and production debugging to placement candidates.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Architect of 80+ Enterprise Apps</span>
            </div>
          </div>

          <div className="rounded-xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 font-bold mb-4 font-mono text-base">
                PM
              </div>
              <div className="text-xs text-purple-700 font-mono font-bold mb-1">Corporate Readiness &amp; HR Panel</div>
              <h4 className="text-lg font-bold text-slate-900">Priyanka Mohapatra</h4>
              <p className="text-xs text-slate-500 font-semibold mt-0.5 mb-3">Senior Talent Acquisition Partner</p>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Leads behavioral simulation panels, body language calibration, situational judgment tests, and leadership communication workshops.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Former Hiring Lead for MNCs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
