import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles, Building2, User } from 'lucide-react';

interface CampusBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

export const CampusBookingModal: React.FC<CampusBookingModalProps> = ({
  isOpen,
  onClose,
  initialProgram,
}) => {
  const [userType, setUserType] = useState<'tpo' | 'student'>('tpo');
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    programInterest: initialProgram || 'Elite Campus Recruitment Training (CRT)',
    batchSize: '200-500 Students',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in your name, email, and mobile contact number.');
      return;
    }
    if (!formData.email.includes('@')) {
      setErrorMsg('Please enter a valid official email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Campus &amp; Career Consultation</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              {userType === 'tpo' ? 'Schedule Institutional Training Session' : 'Register for Placement Assessment'}
            </h3>
            <p className="text-xs text-slate-500 mb-6 font-medium">
              Connect with our academic directors to calibrate your campus timeline and secure dedicated training batch dates.
            </p>

            {/* Persona Switcher */}
            <div className="flex p-1 bg-slate-100 rounded-xl border border-slate-200 mb-6 text-xs">
              <button
                type="button"
                onClick={() => setUserType('tpo')}
                className={`flex-1 py-2 px-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  userType === 'tpo'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                College TPO / Principal
              </button>
              <button
                type="button"
                onClick={() => setUserType('student')}
                className={`flex-1 py-2 px-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  userType === 'student'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                Individual Student
              </button>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Mohapatra / Soumya Parida"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@college.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  College / University / Campus Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. GIFT Autonomous, Bhubaneswar"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Track / Program Interest
                  </label>
                  <select
                    value={formData.programInterest}
                    onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  >
                    <option value="Elite Campus Recruitment Training (CRT)">Elite Campus CRT</option>
                    <option value="Full-Stack Software Architecture & Cloud">Full-Stack & Cloud</option>
                    <option value="Applied AI, Machine Learning & Data Science">AI & Data Science</option>
                    <option value="Cloud DevOps & Cyber Security Defense">Cloud DevOps & CyberSec</option>
                    <option value="Spardha Banking & Competitive Aptitude Wing">Spardha Banking Wing</option>
                  </select>
                </div>

                {userType === 'tpo' ? (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Batch Strength
                    </label>
                    <select
                      value={formData.batchSize}
                      onChange={(e) => setFormData({ ...formData, batchSize: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    >
                      <option value="100-250 Students">100 - 250 Students</option>
                      <option value="250-500 Students">250 - 500 Students</option>
                      <option value="500-1000+ Students">500 - 1000+ Students</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Degree / Year
                    </label>
                    <select
                      value={formData.batchSize}
                      onChange={(e) => setFormData({ ...formData, batchSize: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    >
                      <option value="B.Tech 3rd Year">B.Tech 3rd Year</option>
                      <option value="B.Tech Final Year">B.Tech Final Year</option>
                      <option value="MCA / M.Tech">MCA / M.Tech</option>
                      <option value="Recent Graduate">Recent Graduate</option>
                    </select>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Training Proposal Request</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Consultation Request Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. An ApogeeCTS academic placement director has received your request for{' '}
              <strong className="text-blue-700">{formData.institution}</strong> and will connect via{' '}
              <span className="text-slate-900 font-semibold">{formData.phone}</span> within 24 hours with syllabus decks and batch schedule dates.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
